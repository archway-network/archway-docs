import { Ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

import { Relayers } from '@/domain';

import { IBCRelayer } from '@/types';

export const useRelayers = async (
  relayerFiles: string[]
): Promise<{
  relayers: Ref<IBCRelayer[] | undefined>;
  loading: Ref<boolean>;
}> => {
  const { data: relayers, isLoading } = useQuery({
    queryKey: [{ scope: 'ibc', entity: 'relayers', relayerFiles }],
    queryFn: Relayers.all,
  });

  return {
    relayers,
    loading: isLoading,
  };
};
