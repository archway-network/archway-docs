import BrandGithub from '@/components/Ui/Brands/Github.vue';
import BrandDiscord from '@/components/Ui/Brands/Discord.vue';
import BrandTwitter from '@/components/Ui/Brands/Twitter.vue';

import { MenuItem } from '@/types';

class FooterNavigation {
  static developerResources(): MenuItem[] {
    return [
      { label: 'Quick Start', url: 'https://archway.io/quick-start' },
      { label: 'Github', url: 'https://github.com/archway-network' },
      // { label: 'Docs', url: 'https://docs.archway.io/' },
      { label: 'Dev Academy', url: 'https://area-52.io' },
      { label: 'Lightpaper', url: 'https://archway.io/lightpaper' },
      { label: 'Tech Sheet', url: 'https://archway.io/tech' },
    ];
  }

  static networkResources(): MenuItem[] {
    return [
      { label: 'Validators', url: 'https://docs.archway.io/docs/validator/overview' },
      { label: 'Block Explorer', url: 'https://docs.archway.io/docs/overview/network' },
      { label: 'Status Page', url: 'https://archway-network.statuspage.io' },
    ];
  }

  static communityResources(): MenuItem[] {
    return [
      { label: 'Blog', url: 'https://blog.archway.io/' },
      { label: 'Hacker Houses', url: 'https://blog.archway.io/archway-hacker-houses-coming-to-a-city-near-you-2bca326b6bf4' },
      { label: 'Ambassador Program', url: 'https://blog.archway.io/introducing-the-archway-ambassador-program-bbfe63129109' },
      // { label: 'Careers', url: '#' },
      { label: 'Brand Package', url: 'https://archway.io/brand' },
    ];
  }

  static socialMediaResources(): MenuItem[] {
    return [
      { label: 'Github', url: 'https://github.com/archway-network', icon: BrandGithub },
      { label: 'Discord', url: 'https://discord.gg/5FVvx3WGfa', icon: BrandDiscord },
      { label: 'Twitter', url: 'https://twitter.com/archwayhq', icon: BrandTwitter },
    ];
  }
}

export default FooterNavigation;
