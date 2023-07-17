export default class Networks {
  static getChainNameByChainId(chainId: string): string | undefined {
    return {
      'osmo-test-5': 'Osmosis',
      'axelar-testnet-lisbon-3': 'Axelar',
      'theta-testnet-001': 'Cosmos Hub',
      'osmosis-1': 'Osmosis',
      'axelar-dojo-1': 'Axelar',
      'cosmoshub-4': 'Cosmos Hub',
    }[chainId];
  }
}
