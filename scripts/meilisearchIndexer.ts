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
  console.log('topDirs', topDirs);

  for (let i = 0; i < topDirs.length; i++) {
    const dirName = topDirs[i];
    const allFileObjects = await getFilesRecursive(`./content/${dirName}`);
    const fileObjects = allFileObjects.filter(fsObj => fsObj.fileName != 'index.md');

    const docs = Array(fileObjects.length).fill(0); // preallocate large array to avoid push
    for (let f = 0; f < fileObjects.length; f++) {
      const fileObj = fileObjects[f];
      const filePath = fileObj.filePath;

      const markdown = readFileSync(filePath, 'utf8');
      const fileStats = statSync(filePath);
      let { data: frontMatter, content } = matter(markdown);
      if (!frontMatter.objectID) throw new Error('Front-matter must have a unique objectID (based on file path)!');

      const firstHeader = content.match(/(?<=(^#)\s{0,1}).*/m);
      const indexObj = {
        objectID: frontMatter.objectID,
        title: frontMatter.title || (firstHeader ? firstHeader[0].trim() : ''),
        description: frontMatter.description,
        parentSection: frontMatter.parentSection,
        content: content.trim(),
        modified: convertMsToUnixSeconds(fileStats.mtimeMs),
        group: frontMatter.objectID ? frontMatter.objectID.split('|')[0] : '',
        // viewed: 0 // this field will be added from UI upon screen load
      };

      docs[f] = indexObj;
    }

    const res = await client.index(indexName).addDocuments(docs);
    console.log(`Enqueued the ${res.type} for ${docs.length} records in Meilisearch with taskUid: ${res.taskUid}`);

    let status = res.status;

    while (status !== 'succeeded') {
      new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Querying status...');
      const taskInfo = await client.getTask(res.taskUid);
      status = taskInfo.status;
      if (status === 'failed') throw new Error(JSON.stringify(taskInfo));
    }

    console.log('Index successfully updated');
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
