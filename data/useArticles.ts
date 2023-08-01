import { ComputedRef, Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { ParsedContent } from '@nuxt/content/dist/runtime/types';

export const useArticles = async (
  query?: Ref<string | undefined>
): Promise<{
  data: Ref<ParsedContent[] | undefined>;
  loading: Ref<boolean>;
  hasArticles: ComputedRef<boolean>;
}> => {
  const { data, isLoading } = useQuery({
    queryKey: [{ scope: 'articles', entity: 'query', query }],
    queryFn: async ({ queryKey: [{ query }] }): Promise<ParsedContent[]> => {
      return queryContent(query || '/').find();
    },
  });

  const hasArticles = computed(() => (data.value || [])?.length > 0);

  return {
    data,
    loading: isLoading,
    hasArticles,
  };
};
