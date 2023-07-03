import { ComputedRef } from 'vue';
import { QueryFunctionContext, useQueries } from '@tanstack/vue-query';

export const useExternalJSON = async (
  files: string | string[] | undefined
): Promise<{
  data: ComputedRef<any | undefined>;
  isLoading: ComputedRef<boolean>;
}> => {
  const queriesDefinition = computed(() => {
    const filesArray = files ? (Array.isArray(files) ? files : [files]) : undefined;
    return {
      queries:
        filesArray?.map(item => ({
          queryKey: [{ scope: 'ecosystem', entity: 'JSON', url: item }],
          queryFn: ({ queryKey: [{ url }] }: QueryFunctionContext<{ url: string }[]>): Promise<any> => {
            return $fetch<any>(url).then(data => {
              return JSON.parse(data) || {};
            });
          },
        })) || [],
    };
  });

  const allResults = useQueries(queriesDefinition.value);

  const isLoading = computed(() => allResults?.reduce((previous, current) => previous || current.isLoading, false));

  const data = computed(() => (files ? (Array.isArray(files) ? allResults?.map(item => item.data) : allResults[0]) : undefined));

  return {
    data,
    isLoading,
  };
};
