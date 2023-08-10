const redirects: Record<string, string> = {
  '/overview': '/overview/about',
  '/resources': '/resources/networks',
  '/validators/running-a-node': '/validators/running-a-node/prerequisites',
  '/validators/requirements': '/validators/becoming-a-validator/requirements',
  '/community/wallet-setup/keplr-setup': '/community/wallet-setup/keplr/keplr-setup',
};

export default defineNuxtRouteMiddleware(to => {
  if (Object.keys(redirects).includes(to.path)) {
    return navigateTo(redirects[to.path]);
  }
});
