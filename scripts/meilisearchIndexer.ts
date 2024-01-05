import dotenv from 'dotenv';
import { readdir } from 'fs/promises';
import { readFileSync, statSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MeiliSearch } from 'meilisearch';

const updateMeilisearchIndexes = async () => {
  dotenv.config();
  const indexName = process.env.MEILISEARCH_INDEX;
  const apiKey = process.env.MEILISEARCH_WRITE_API_KEY;
  const host = process.env.MEILISEARCH_HOST;

  if (!indexName || !apiKey || !host) {
    console.log('Please set meilisearch environment variables to update the indexes.');
    return;
  }

  const topDirs = (await readdir('./content', { withFileTypes: true })).filter(obj => obj.isDirectory()).map(folder => folder.name);
  const client = new MeiliSearch({ host, apiKey });

  // Fetch existing entries
  const oldEntries: Record<string, boolean> = {};

  const limit = 100;
  let offset = 0;
  let total = 1;

  while (offset < total) {
    const res = await client.index(indexName).getDocuments({ fields: ['objectID'], limit, offset });
    total = res.total;
    offset += limit;
    for (const item of res.results) {
      oldEntries[item.objectID] = true;
    }
  }

  // Read /content directory for the new entries
  console.log('topDirs', topDirs);

  const allDocs: Record<string, any>[][] = [];

  for (let i = 0; i < topDirs.length; i++) {
    const dirName = topDirs[i];
    const allFileObjects = await getFilesRecursive(`./content/${dirName}`);
    const fileObjects = allFileObjects.filter(fsObj => fsObj.fileName != 'index.md');

    const innerDocs = Array(fileObjects.length).fill(0); // preallocate large array to avoid push
    for (let f = 0; f < fileObjects.length; f++) {
      const fileObj = fileObjects[f];
      const filePath = fileObj.filePath;

      const markdown = readFileSync(filePath, 'utf8');
      const fileStats = statSync(filePath);
      let { data: frontMatter, content } = matter(markdown);
      const objectID = frontMatter.objectID;
      if (!objectID) throw new Error('Front-matter must have a unique objectID (based on file path)!');
      if (!/^[\da-zA-Z-_]*$/.test(objectID))
        throw new Error(`The objectID ${objectID} is invalid. Meilisearch only allow objectIDs with: a-z A-Z 0-9 - and _`);

      delete oldEntries[objectID];

      const firstHeader = content.match(/(?<=(^#)\s{0,1}).*/m);
      const indexObj = {
        objectID: frontMatter.objectID,
        title: frontMatter.title || (firstHeader ? firstHeader[0].trim() : ''),
        description: frontMatter.description,
        parentSection: frontMatter.parentSection,
        content: content.trim(),
        modified: convertMsToUnixSeconds(fileStats.mtimeMs),
        group: frontMatter.objectID ? frontMatter.objectID.split('_')[0] : '',
        // viewed: 0 // this field will be added from UI upon screen load
      };

      innerDocs[f] = indexObj;
    }

    allDocs.push(innerDocs);
  }

  // Write new entries
  for (const innerDocs of allDocs) {
    const res = await client.index(indexName).addDocuments(innerDocs);
    console.log(`Enqueued the ${res.type} for ${innerDocs.length} records in Meilisearch with taskUid: ${res.taskUid}`);

    await waitTxComplete(client, res.taskUid);
    console.log(`${innerDocs.length} entries updated!`);
  }

  // Delete old entries
  const toDelete = Object.keys(oldEntries);
  if (toDelete.length) {
    const deleteRes = await client.index(indexName).deleteDocuments({ filter: `objectID IN [${toDelete.join(',')}]` });
    console.log(`Enqueued the ${deleteRes.type} of ${toDelete.length} records`);
    waitTxComplete(client, deleteRes.taskUid);
    console.log('Entries successfully deleted.');
  }

  console.log('\nSuccessfully updated all docs! :)');
};

const waitTxComplete = async (client: MeiliSearch, taskUid: number) => {
  let status;

  while (status !== 'succeeded') {
    new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Querying status...');
    const taskInfo = await client.getTask(taskUid);
    status = taskInfo.status;
    if (status === 'failed') throw new Error(JSON.stringify(taskInfo));
  }
};

const convertMsToUnixSeconds = (ms: number) => {
  return ms / 1000;
};

const getFilesRecursive = async (dirPath: string): Promise<{ filePath: string; fileName: string }[]> => {
  const fsObjects = await readdir(dirPath, { withFileTypes: true });
  let filesOnly: { filePath: string; fileName: string }[] = [];

  // use of for let is not an error do not use forEach for larger arrays
  for (let i = 0; i < fsObjects.length; i++) {
    const fsObj = fsObjects[i];
    let filePathWithFs = path.resolve(dirPath, fsObj.name);

    if (fsObj.isDirectory()) {
      // todo: need to optimize, spread is very slow
      filesOnly = [...filesOnly, ...(await getFilesRecursive(filePathWithFs))];
    } else {
      filesOnly.push({ filePath: filePathWithFs, fileName: fsObj.name });
    }
  }

  return filesOnly;
};

updateMeilisearchIndexes();
