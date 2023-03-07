const redirects: Record<string, string> = {
  '/overview': '/overview/about',
  '/resources': '/resources/networks',
  '/validators/running-a-node': '/validators/node/prerequisites',
  '/validators/requirements': '/validators/validator/requirements'

};

export default defineNuxtRouteMiddleware(to => {
  if (Object.keys(redirects).includes(to.path)) {
    return navigateTo(redirects[to.path]);
  }
});
