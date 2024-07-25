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
};

export default defineNuxtRouteMiddleware(to => {
  if (Object.keys(redirects).includes(to.path)) {
    return navigateTo(redirects[to.path]);
  }
});
