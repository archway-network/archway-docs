import { computed, ref, ComputedRef, Ref } from 'vue';
import { AlgoliaSearch } from '@/domain';
import { useRuntimeConfig } from '#app';
import { SortingReplicas } from '~~/domain/AlgoliaSearch';

export const useAlgoliaSearch: () => Promise<{
  findObject: (searchPredicate: (hit: any) => boolean) => Promise<any>,
  updateObjectsPartially: (objs: any[], createIfNotExists?: boolean) => Promise<any>,
  search: (query: string) => Promise<any>
}> = async () => {
    const { algolia } = useRuntimeConfig();
    const algoliaSearch = new AlgoliaSearch(algolia.appId, algolia.writeApiKey, algolia.docIndex);

    const findObject = async (searchPredicate: (hit: any) => boolean) => {
        return await algoliaSearch.findObject(searchPredicate);
    }

    const updateObjectsPartially = async (objs: any[], createIfNotExists: boolean = true) => {
        return await algoliaSearch.updateObjectsPartially(objs, createIfNotExists);
    }

    const search = async (query: string) => {
        return await algoliaSearch.search(query, SortingReplicas.DocsByModified);
    }

  return { findObject, updateObjectsPartially, search };
};
