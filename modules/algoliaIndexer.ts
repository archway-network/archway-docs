import { defineNuxtModule } from '@nuxt/kit';
import algoliasearch from 'algoliasearch';
import { readdir } from 'fs/promises';
import { readFileSync, statSync } from 'fs';
import matter from 'gray-matter';
/// @ts-ignore
import MarkdownIt from 'markdown-it';
/// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export default defineNuxtModule({
    meta: {
        name: 'algoliaIndexer',
        configKey: 'algolia',
        compatibility: {
            nuxt: '^3.0.0'
        }
    },
    async setup(options, nuxt) {
        const mdParser = new MarkdownIt();
        nuxt.hook('build:done', async () => {               
            // runs through the modules paths array for each content folder      
            for (let i = 0; i < options.paths.length; i++) {                
                const path = options.paths[i];
                const indexName = path.index;
                const files = (await readdir(`./content/${path.name}`, { withFileTypes: true }))
                    .filter(file => file.isFile())
                    .map(file => file.name);

                const docs = Array(files.length).fill(0);
                for (let f = 0; f < 1; f++) { // todo: switch to files.length
                    const filePath = `./content/${path.name}/${files[f]}`;
                    const markdown = readFileSync(filePath, 'utf8');
                    const fileStats = statSync(filePath);
                    let { data: frontMatter, content } = matter(markdown);                    
                    const contentObj = mdParser.parse(content);
                    
                    const indexObj = {
                        objectID: uuidv4(),
                        title: frontMatter.title,
                        description: frontMatter.description,
                        parentSection: frontMatter.parentSection,
                        //content: contentObj,
                        modified: fileStats.mtimeMs,
                        viewed: 0
                    };
                    console.log("content:", indexObj);
                    docs[f] = indexObj;
                }
                                              
                // docs = docs.map((doc) => {
                //     const newDoc = {}
                //     path.fields.forEach((field) => (newDoc[field] = doc[field]))
                //     newDoc.objectID = doc.slug
                //     return newDoc
                // })
                
                // const client = algoliasearch(nuxt.options.runtimeConfig.appId, nuxt.options.runtimeConfig.apiKey)
                // const index = client.initIndex(indexName)
        
                // // clear the index in case any documents were removed
                // await index.clearObjects()
                
                // const { objectIDs } = await index.saveObjects(docs)
                // console.log(
                //     `Indexed ${objectIDs.length} records in Algolia for: ${indexName}`
                // );
            }
        });
    }
});
