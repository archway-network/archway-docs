const currency = {
  coinDenom: 'TITUS',
  coinMinimalDenom: 'atitus',
  coinDecimals: 18,
  coinGeckoId: 'archway',
};

const chainInfo: ChainInfo = {
  bech32Config: {
    bech32PrefixAccAddr: 'archway',
    bech32PrefixAccPub: 'archwaypub',
    bech32PrefixConsAddr: 'archwayvalcons',
    bech32PrefixConsPub: 'archwayvalconspub',
    bech32PrefixValAddr: 'archwayvaloper',
    bech32PrefixValPub: 'archwayvaloperpub',
  },
  bip44: {
    coinType: 118,
  },
  chainId: 'titus-2',
  chainName: 'Archway (Devnet)',
  chainSymbolImageUrl: 'https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/constantine/chain.png',
  currencies: [currency],
  features: ['cosmwasm'],
  feeCurrencies: [
    {
      ...currency,
      gasPriceStep: {
        low: 1000000000000,
        average: 1500000000000,
        high: 2000000000000,
      },
    },
  ],
  rest: 'https://api.titus.archway.io',
  rpc: 'https://rpc.titus.archway.io',
  stakeCurrency: currency,
  nodeProvider: {
    name: 'Phi Labs',
    email: 'support@philabs.xyz',
    website: 'https://philabs.xyz',
  },
};

export default chainInfo;
