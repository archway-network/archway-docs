import { defineNuxtModule } from '@nuxt/kit';
import algoliasearch from 'algoliasearch';
import { readdir } from 'fs/promises';
import { readFileSync, Dirent, statSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
/// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
/// @ts-ignore
import MarkdownIt from 'markdown-it';

export default defineNuxtModule({
    meta: {
        name: 'algoliaIndexer',
        configKey: 'algolia',
        compatibility: {
            nuxt: '^3.0.0'
        }
    },
    async setup(options, nuxt) {        
        nuxt.hook('build:done', async () => {               
            const topDirs = (await readdir('./content', { withFileTypes: true }))
                .filter(obj => obj.isDirectory())
                .map(folder => folder.name);            
            const indexName = nuxt.options.runtimeConfig.algolia.docIndex;
            const appId = nuxt.options.runtimeConfig.algolia.appId;
            const apiKey = nuxt.options.runtimeConfig.algolia.writeApiKey;
            console.log("topDirs", topDirs);
            
            for (let i = 0; i < topDirs.length; i++) {                
                const dirName = topDirs[i];                
                const allFileObjects = (await getFilesRecursive(`./content/${dirName}`));
                const fileObjects = allFileObjects.filter(fsObj => fsObj.fileName != "index.md");

                const docs = Array(fileObjects.length).fill(0); // preallocate large array to avoid push
                for (let f = 0; f < fileObjects.length; f++) {
                    const fileObj = fileObjects[f];
                    const filePath = fileObj.filePath;
                    
                    const markdown = readFileSync(filePath, 'utf8');
                    const fileStats = statSync(filePath);
                    let { data: frontMatter, content } = matter(markdown);
                                        
                    const firstHeader = content.match(/(?<=(^#)\s{0,1}).*/m);
                    const indexObj = {
                        objectID: uuidv4(), //frontMatter.objectID || uuidv4(),
                        title: frontMatter.title || (firstHeader ? firstHeader[0] : ''),
                        description: frontMatter.description,
                        parentSection: frontMatter.parentSection,
                        content,
                        modified: fileStats.mtimeMs,
                        viewed: 0
                    };
                    
                    docs[f] = indexObj;
                }
                console.log("objectIDs", docs.map(doc => doc.objectID));
                const requestOptions = { headers: { "x-algolia-application-id": appId } };
                const client = algoliasearch(appId, apiKey);
                const index = client.initIndex(indexName);
        
                // clear the index in case any documents were removed
                await index.clearObjects(requestOptions);                
                const { objectIDs } = await index.saveObjects(docs, requestOptions);
                
                console.log(
                    `Indexed ${objectIDs.length} records in Algolia for: ${indexName}`
                );
            }
        });
    }
});

async function getFilesRecursive(dirPath: string): Promise<{ filePath: string, fileName: string }[]> {
    const fsObjects = (await readdir(dirPath, { withFileTypes: true }));
    let filesOnly: { filePath: string, fileName: string }[] = [];

    // this is not an error do not use forEach for larger arrays
    for (let i = 0; i < fsObjects.length; i++) {
        const fsObj = fsObjects[i];
        let filePathWithFs = path.resolve(dirPath, fsObj.name);

        if (fsObj.isDirectory()) {
            // todo: need to optimize, spread is very slow
            filesOnly = [...filesOnly, ...(await getFilesRecursive(filePathWithFs))];
        } else {
            filesOnly.push({ filePath: filePathWithFs, fileName: fsObj.name });
        }
    };

    return filesOnly;
}