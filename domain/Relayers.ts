import { QueryFunctionContext } from '@tanstack/vue-query';

import { useConfig } from '@/composables';

import { IBCRelayer } from '@/types';

export default class Relayers {
  static async all({ queryKey: [{ relayerFiles }] }: QueryFunctionContext<{ relayerFiles: string[] }[]>): Promise<IBCRelayer[]> {
    const { externalLinks } = useConfig();

    return Promise.all(relayerFiles.map(item => $fetch<any>(`${externalLinks.ARCHWAY_NETWORKS_RAW}/_IBC/${item}`))).then(data => {
      return data?.map(item => JSON.parse(item)) || [];
    });
  }
}
