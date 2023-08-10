import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import MeiliSearch from 'meilisearch';
import { useRuntimeConfig } from '#app';

import { ContentMetadata } from '@/domain';

export const useContentSearch = async (
  query: Ref<string | undefined>,
  loadOnInit: boolean = false
): Promise<{
  data: Ref<ContentMetadata[] | undefined>;
  loading: Ref<boolean>;
}> => {
  const {
    public: {
      meilisearch: { host, docIndex, searchApiKey: apiKey },
    },
  } = useRuntimeConfig();

  const isEnabled = computed(() => loadOnInit || !!query.value);
  const loading = computed(() => isLoading.value && isEnabled.value);

  const { data, isLoading } = useQuery({
    queryKey: [{ scope: 'meilisearch', entity: 'search', query }],
    queryFn: async ({ queryKey: [{ query }] }): Promise<ContentMetadata[]> => {
      if (!host || !apiKey || !docIndex) return [];

      const client = new MeiliSearch({ host, apiKey });

      const result = await client.index(docIndex).search(query);

      return result?.hits?.map(item => ContentMetadata.make(item)) || [];
    },
    enabled: isEnabled,
  });

  return {
    data,
    loading,
  };
};
