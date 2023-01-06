const redirects: Record<string, string> = {
  '/overview': '/overview/about',
};

export default defineNuxtRouteMiddleware(to => {
  if (Object.keys(redirects).includes(to.path)) {
    return navigateTo(redirects[to.path]);
  }
});
