import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import MeiliSearch from 'meilisearch';
import { useRuntimeConfig } from '#app';

import { MeilisearchContentResult } from '@/types';

export const useContentSearch = async (
  query: Ref<string | undefined>
): Promise<{
  data: Ref<MeilisearchContentResult[] | undefined>;
  loading: Ref<boolean>;
}> => {
  const {
    public: {
      meilisearch: { host, docIndex, searchApiKey: apiKey },
    },
  } = useRuntimeConfig();

  const { data, isLoading } = useQuery({
    queryKey: [{ scope: 'meilisearch', entity: 'search', query }],
    queryFn: async ({ queryKey: [{ query }] }): Promise<any[]> => {
      const client = new MeiliSearch({ host, apiKey });

      const result = await client.index(docIndex).search(query);

      return result.hits;
    },
  });

  return {
    data,
    loading: isLoading,
  };
};
