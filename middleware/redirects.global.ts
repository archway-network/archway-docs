const redirects: Record<string, string> = {
  '/overview': '/overview/about',
  '/resources': '/resources/networks',
  '/validators/running-a-node': '/validators/running-a-node/prerequisites',
  '/validators/requirements': '/validators/becoming-a-validator/requirements',
  '/community/wallet-setup/keplr-setup': '/community/wallet-setup/keplr/keplr-setup',
  '/community/airdrop-snapshots': '/community/dropcamp',
  '/developers/cosmwasm-documentation/getting-started/introduction': '/developers/getting-started/introduction',
};

export default defineNuxtRouteMiddleware(to => {
  if (Object.keys(redirects).includes(to.path)) {
    return navigateTo(redirects[to.path]);
  }
});
