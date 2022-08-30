class Navigation {
  static archwayResources() {
    return [
      { label: 'About', url: 'https://archway.io' },
      { label: 'Brand kit', url: 'https://archway.io/brand' },
    ];
  }

  static developerResources() {
    return [
      { label: 'Introduction', url: '/' },
      { label: 'Github', url: 'https://github.com/archway-network' },
    ];
  }

  static communityResources() {
    return [
      { label: 'Blog', url: 'https://blog.archway.io/' },
      { label: 'Discord', url: 'https://discord.gg/5FVvx3WGfa' },
      { label: 'Twitter', url: 'https://twitter.com/archwayhq' },
    ];
  }
}

export default Navigation;
