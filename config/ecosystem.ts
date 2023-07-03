import { IBCRelayer } from '@/types';

export enum EcosystemPartner {
  TestnetIBCRelayers = 'TESTNET_IBC_RELAYERS',
}

export const EcosystemConfig = {
  [EcosystemPartner.TestnetIBCRelayers]: [
    'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-axelartestnet.json',
    'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-cosmoshubtestnet.json',
    'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-osmosistestnet.json',
  ],
};

const chainIds = {
  Osmosis: 'osmo-test-5',
  Axelar: 'axelar-testnet-lisbon-3',
  'Cosmos Hub': 'theta-testnet-001',
};

export const EcosystemPartners =
  {
    [EcosystemPartner.TestnetIBCRelayers]: {
      files: [
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-axelartestnet.json',
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-cosmoshubtestnet.json',
        'https://raw.githubusercontent.com/archway-network/networks/main/_IBC/constantine-3-osmosistestnet.json',
      ],
      transform: (data?: IBCRelayer[]): Record<string, unknown>[] => {
        return (
          data?.reduce<Record<string, unknown>[]>((result, relayer) => {
            for (const channel of relayer.channels) {
              result.push({
                'Source Channel': channel.chain_1.channel_id,
                Destination: Object.entries(chainIds).find(item => item[1] === relayer.chain_2.chain_name)?.[0] || '',
                'Destination Chain ID': relayer.chain_2.chain_name,
                'Destination Channel': channel.chain_2.channel_id,
              });
            }

            return result;
          }, []) || []
        );
      },
    },
  }
;
