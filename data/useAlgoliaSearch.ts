import { AlgoliaSearch } from '@/domain';
import { useRuntimeConfig } from '#app';
import { SortingReplicas } from '~~/domain/AlgoliaSearch';

export const useAlgoliaSearch: () => Promise<{
  findObject: (searchPredicate: (hit: any) => boolean) => Promise<any>,
  updateObjectsPartially: (objs: any[], createIfNotExists?: boolean) => Promise<any>,
  search: (query: string, sortingReplica: SortingReplicas, filters?: string) => Promise<any>
}> = async () => {
    const runtimeConfig = useRuntimeConfig();
    const algoliaSearch = new AlgoliaSearch(runtimeConfig.algolia.appId, runtimeConfig.algolia.writeApiKey, runtimeConfig.algolia.docIndex, runtimeConfig.algolia.env);

    const findObject = async (searchPredicate: (hit: any) => boolean) => {
        return await algoliaSearch.findObject(searchPredicate);
    }

    const updateObjectsPartially = async (objs: any[], createIfNotExists: boolean = true) => {
        return await algoliaSearch.updateObjectsPartially(objs, createIfNotExists);
    }

    const search = async (query: string, sortingReplica: SortingReplicas, filters?: string) => {
        return await algoliaSearch.search(query, sortingReplica, filters);
    }

  return { findObject, updateObjectsPartially, search };
};
