const redirects: Record<string, string> = {
  '/overview': '/overview/about',
  '/resources': '/resources/networks',
  '/validators/running-a-node': '/validators/running-a-node/prerequisites',
  '/validators/requirements': '/validators/becoming-a-validator/requirements',
  '/community/wallet-setup/keplr-setup': '/community/wallet-setup/keplr/keplr-setup',
  '/community/airdrop-snapshots': '/community/dropcamp',
  '/developers/cosmwasm-documentation/getting-started/introduction': '/developers/getting-started/introduction',
  '/developers/cosmwasm-documentation/getting-started/setting-up-environment': '/developers/getting-started/install',
  '/developers/cosmwasm-documentation/getting-started/compile-contract': '/developers/getting-started/compile-contract',
  '/developers/cosmwasm-documentation/getting-started/unit-tests': '/developers/smart-contracts/testing',
  '/developers/cosmwasm-documentation/getting-started/interact-with-contract': '/developers/getting-started/deploy-instantiate-contract',
  '/developers/cosmwasm-documentation/getting-started/integration-overview': '/developers/smart-contracts/contract-integration',
  '/developers/cosmwasm-documentation/getting-started/next-steps': '/developers/getting-started/interact-with-contract',

  '/developers/cosmwasm-documentation/introduction': '/developers/smart-contracts/introduction',

  '/developers/cosmwasm-documentation/architecture/multi-chain-contracts': '/developers/smart-contracts/architecture/multi-chain-contracts',
  '/developers/cosmwasm-documentation/architecture/actor-model-intro': '/developers/smart-contracts/architecture/actor-model-intro',
  '/developers/cosmwasm-documentation/architecture/names-and-addresses': '/developers/smart-contracts/architecture/names-and-addresses',
  '/developers/cosmwasm-documentation/architecture/querying': '/developers/smart-contracts/architecture/querying',
  '/developers/cosmwasm-documentation/architecture/serialization': '/developers/smart-contracts/architecture/serialization',
  '/developers/cosmwasm-documentation/architecture/contract-composition': '/developers/smart-contracts/architecture/contract-composition',
  '/developers/cosmwasm-documentation/architecture/comparison-with-ethereum': '/developers/smart-contracts/architecture/comparison-with-ethereum',

  '/developers/cosmwasm-documentation/smart-contracts/contract-semantics': '/developers/smart-contracts/contract-semantics',
  '/developers/cosmwasm-documentation/smart-contracts/message/message': '/developers/smart-contracts/message/message',
  '/developers/cosmwasm-documentation/smart-contracts/message/submessages': '/developers/smart-contracts/message/submessages',

  '/developers/cosmwasm-documentation/smart-contracts/state/simple-state': '/developers/smart-contracts/state/simple-state',
  '/developers/cosmwasm-documentation/smart-contracts/state/complex-state': '/developers/smart-contracts/state/complex-state',

  '/developers/cosmwasm-documentation/smart-contracts/result-and-option': '/developers/smart-contracts/result-and-option',
  '/developers/cosmwasm-documentation/smart-contracts/entry-points': '/developers/smart-contracts/entry-points',
  '/developers/cosmwasm-documentation/smart-contracts/query': '/developers/smart-contracts/query',
  '/developers/cosmwasm-documentation/smart-contracts/events': '/developers/smart-contracts/events',
  '/developers/cosmwasm-documentation/smart-contracts/math': '/developers/smart-contracts/math',
  '/developers/cosmwasm-documentation/smart-contracts/verify': '/developers/smart-contracts/verify',
  '/developers/cosmwasm-documentation/smart-contracts/migration': '/developers/smart-contracts/migration',
  '/developers/cosmwasm-documentation/smart-contracts/migrate-dapp': '/developers/smart-contracts/migrate-dapp',
  '/developers/cosmwasm-documentation/smart-contracts/testing': '/developers/smart-contracts/testing',
  '/developers/cosmwasm-documentation/smart-contracts/sudo-execution': '/developers/smart-contracts/sudo-execution',
  '/developers/cosmwasm-documentation/smart-contracts/cosmwasm-ibc': '/developers/smart-contracts/cosmwasm-ibc',
  
  '/developers/cosmwasm-documentation/tutorials/simple-option/testing': '/developers/smart-contracts/tutorials/simple-option/testing',
  '/developers/cosmwasm-documentation/tutorials/storage/key-value-store': '/developers/guides/storage/key-value-store',
  '/developers/cosmwasm-documentation/tutorials/storage/indexes': '/developers/guides/storage/indexes',
  '/developers/cosmwasm-documentation/tutorials/storage/state-modeling': '/developers/guides/storage/state-modeling',
  
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/math': '/developers/guides/cosmwasm-by-example/math',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/instantiation': '/developers/guides/cosmwasm-by-example/instantiation',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/timelock': '/developers/guides/cosmwasm-by-example/timelock',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/crowdfunding': '/developers/guides/cosmwasm-by-example/crowdfunding',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/responses-attributes': '/developers/guides/cosmwasm-by-example/responses-attributes',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/read-write-sate': '/developers/guides/cosmwasm-by-example/read-write-sate',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/sending-tokens': '/developers/guides/cosmwasm-by-example/sending-tokens',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/token-vault': '/developers/guides/cosmwasm-by-example/token-vault',
  '/developers/cosmwasm-documentation/tutorials/cosmwasm-by-example/amm-product': '/developers/guides/cosmwasm-by-example/amm-product',
};

export default defineNuxtRouteMiddleware(to => {
  if (Object.keys(redirects).includes(to.path)) {
    return navigateTo(redirects[to.path]);
  }
});
