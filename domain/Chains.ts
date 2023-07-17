import { ChainInfo } from '@/types';

export default class Chains {
  static info: ChainInfo[] = [
    {
      id: 'osmo-test-5',
      name: 'Osmosis',
    },
    {
      id: 'axelar-testnet-lisbon-3',
      name: 'Axelar',
    },
    {
      id: 'theta-testnet-001',
      name: 'Cosmos Hub',
    },
    {
      id: 'osmosis-1',
      name: 'Osmosis',
    },
    {
      id: 'axelar-dojo-1',
      name: 'Axelar',
    },
    {
      id: 'cosmoshub-4',
      name: 'Cosmos Hub',
    },
  ];

  static getNameById(chainId: string): string | undefined {
    return this.info.find(item => item.id === chainId)?.name;
  }
}
