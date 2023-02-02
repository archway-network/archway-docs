import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';

export enum SortingReplicas {
    Main = 'Main',
    DocsByModified = 'docs_by_modified'   
};

export default class AlgoliaSearch {
    private requestOptions: { headers: { "x-algolia-application-id": string }, createIfNotExists?: boolean };
    private client: SearchClient;
    private index: SearchIndex
    private mainIndexName: string

    constructor(appId: string, apiKey: string, indexName: string) {
        this.requestOptions = { headers: { "x-algolia-application-id": appId } };
        this.client = algoliasearch(appId, apiKey);     
        this.mainIndexName = indexName;        
        this.index = this.client.initIndex(this.mainIndexName);
        this.index.setSettings({
            replicas: [
                SortingReplicas.DocsByModified
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
        const requestOptions = this.requestOptions;
        requestOptions.createIfNotExists = createIfNotExists;
        return await this.index.partialUpdateObjects(objs, this.requestOptions);
    }

    async search(query: string, sortingReplica: SortingReplicas) {
        this.resetIndexForSorting(sortingReplica);

        return await this.index.search(query, this.requestOptions);
    }

    private resetIndexForSorting(replica: SortingReplicas) {        
        this.index = this.client.initIndex(replica === SortingReplicas.Main ? this.mainIndexName : replica);
    }
}