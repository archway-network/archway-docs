import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';

// note: Algolia dashboard and index settings will use an environment prefix in the name
// for example staging_docs_by_modified
export enum SortingReplicas {
    DocsByModified = 'docs_by_modified',
    DocsByViewed = 'docs_by_viewed'
};

// note: Always use a unique instance per query. Do not share instances across calls to different query types: sorting, filters, etc.
export default class AlgoliaSearch {
    // note: you must set the the facet fields in the dashboard if you are to filter on them!!!
    private requestOptions: { headers: { "x-algolia-application-id": string }, createIfNotExists?: boolean, filters?: string };
    private client: SearchClient;
    private index: SearchIndex;
    private mainIndexName: string;
    private env: string;

    // env is the deployment environment: staging, production, etc.
    constructor(appId: string, apiKey: string, indexName: string, env: string) {
        this.requestOptions = { headers: { "x-algolia-application-id": appId } };
        this.client = algoliasearch(appId, apiKey);     
        this.mainIndexName = indexName;        
        this.index = this.client.initIndex(this.mainIndexName);
        this.env = env;

        this.index.setSettings({
            attributesForFaceting: [
                'searchable(parentSection)',
                'filterOnly(group)'
            ],
            replicas: [
                this.env.toLocaleLowerCase() + "_" + SortingReplicas.DocsByModified,
                this.env.toLocaleLowerCase() + "_" + SortingReplicas.DocsByViewed
            ]
        });
    }

    async saveObjects(docs: any[]) {
        const response = await this.index.saveObjects(docs, this.requestOptions);
        return response.objectIDs;
    }

    async findObject(searchPredicate: (hit: any) => boolean) {
        return await this.index.findObject(searchPredicate, this.requestOptions);
    }

    async updateObjectsPartially(objs: any[], createIfNotExists: boolean = true) {
        const requestOptions = { ...this.requestOptions };
        requestOptions.createIfNotExists = createIfNotExists;
        return await this.index.partialUpdateObjects(objs, requestOptions);
    }

    async search(query: string, sortingReplica: SortingReplicas, filters?: string) {
        await this.resetIndexForSorting(sortingReplica);

        const requestOptions = { ...this.requestOptions };
        if (filters) {
            requestOptions.filters = filters;
        }

        return await this.index.search(query, requestOptions);
    }

    // note: NOTICE THE SLEEP ADDED! This is because there is an async delay to the setting 
    // of the index search settings and their effect.
    // In other words you must wait a bit after setting a ranking before you can actually attempt 
    // to use that sort order!
    private async resetIndexForSorting(replica: SortingReplicas) {
        const currentIndexSetting = await this.index.getSettings();
        if (replica === SortingReplicas.DocsByViewed) {
            if (!currentIndexSetting.ranking?.includes('desc(viewed)')) {
                await this.index.setSettings({
                    ranking: [
                        'desc(viewed)'
                    ]
                });
                await new Promise(r => setTimeout(r, 2500));
            }
        } else if (replica === SortingReplicas.DocsByModified) {
            if (!currentIndexSetting.ranking?.includes('desc(modified)')) {
                await this.index.setSettings({
                    ranking: [
                        'desc(modified)'
                    ]
                });
                await new Promise(r => setTimeout(r, 2500));
            }
        }
    }
}