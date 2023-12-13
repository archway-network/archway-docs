const currency = {
  coinDenom: 'CONST',
  coinMinimalDenom: 'aconst',
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
  chainId: 'constantine-3',
  chainName: 'Archway (Testnet)',
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
  rest: 'https://api.constantine.archway.tech',
  rpc: 'https://rpc.constantine.archway.tech',
  stakeCurrency: currency,
  nodeProvider: {
    name: 'Phi Labs',
    email: 'support@philabs.xyz',
    website: 'https://philabs.xyz',
  },
};

export default chainInfo;
