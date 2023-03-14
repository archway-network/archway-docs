import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch';

// note: Algolia dashboard and index settings will use an environment prefix in the name
// for example staging_docs_by_modified
export enum SortingReplicas {
  DocsByModified = 'docs_by_modified',
  DocsByViewed = 'docs_by_viewed',
}

// note: Always use a unique instance per query. Do not share instances across calls to different query types: sorting, filters, etc.
export default class AlgoliaSearch {
  // note: you must set the the facet fields in the dashboard if you are to filter on them!!!
  private requestOptions: { headers: { 'x-algolia-application-id': string }; createIfNotExists?: boolean; filters?: string };
  private client: SearchClient;
  private index: SearchIndex;
  private mainIndexName: string;

  // env is the deployment environment: staging, production, etc.
  constructor(appId: string, apiKey: string, indexName: string, env: string, sortingReplica?: SortingReplicas) {
    this.requestOptions = { headers: { 'x-algolia-application-id': appId } };
    this.client = algoliasearch(appId, apiKey);

    this.mainIndexName = sortingReplica
      ? sortingReplica === SortingReplicas.DocsByModified
        ? env.toLocaleLowerCase() + '_' + SortingReplicas.DocsByModified
        : env.toLocaleLowerCase() + '_' + SortingReplicas.DocsByViewed
      : indexName;
    this.index = this.client.initIndex(this.mainIndexName);
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

  async search(query: string, filters?: string) {
    const requestOptions = { ...this.requestOptions };
    if (filters) {
      requestOptions.filters = filters;
    }

    return await this.index.search(query, requestOptions);
  }
}
