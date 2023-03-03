import { defineNuxtModule } from '@nuxt/kit';
import { readdir } from 'fs/promises';
import { readFileSync, statSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import AlgoliaSearch from '../domain/AlgoliaSearch';
import { AlgoliaArticleIndex } from '@/types';

/// *** NOTE MODULE RUNS AT build:done LIFECYCLE NOT RUNTIME ***
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
            const env = nuxt.options.runtimeConfig.algolia.env;            
            const algoliaSearch = new AlgoliaSearch(appId, apiKey, indexName, env);
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
                    if (!frontMatter.objectID) throw new Error("Front-matter must have a unique objectID (based on file path)!");
                                        
                    const firstHeader = content.match(/(?<=(^#)\s{0,1}).*/m);
                    const indexObj: AlgoliaArticleIndex = {
                        objectID: frontMatter.objectID,
                        title: frontMatter.title || (firstHeader ? firstHeader[0].trim() : ''),
                        description: frontMatter.description,
                        parentSection: frontMatter.parentSection,
                        content: content.trim(),
                        modified: convertMsToUnixSeconds(fileStats.mtimeMs),
                        group: frontMatter.objectID ? frontMatter.objectID.split('|')[0] : ""
                        // viewed: 0 // this field will be added from UI upon screen load
                    };
                    
                    docs[f] = indexObj;
                }
                                
                algoliaSearch.updateObjectsPartially(docs)
                    .then(objs => {
                        console.log(
                            `Indexed ${objs.objectIDs.length} records in Algolia for: ${indexName}`
                        );
                    });                               
            }
        });
    }
});

function convertMsToUnixSeconds(ms: number) {
    return ms / 1000;
}

async function getFilesRecursive(dirPath: string): Promise<{ filePath: string, fileName: string }[]> {
    const fsObjects = (await readdir(dirPath, { withFileTypes: true }));
    let filesOnly: { filePath: string, fileName: string }[] = [];

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
    };

    return filesOnly;
}