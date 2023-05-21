import { DiscordBrand, GithubBrand, RedditBrand, TwitterBrand, TelegramBrand } from '@/components/Ui';

import { MenuItem, AppConfigFeatures } from '@/types';

type NavigationContext = { features: AppConfigFeatures };

class FooterNavigation {
  constructor(protected externalLinks: any, protected context?: NavigationContext) {}

  public learnResources(): MenuItem[] {
    const items = [
      {
        label: 'Technical Overview',
        url: this.externalLinks.ARCHWAY_TECHNICAL_OVERVIEW,
        description: 'Go through a rundown of our tech stack',
      },
      {
        label: 'Technical Papers',
        url: this.externalLinks.ARCHWAY_TECHNICAL_PAPERS,
        description: 'Read the whitepaper, economics paper, and more',
      },
    ];

    if (this.context?.features.ARCHWAY_ECOSYSTEM) {
      items.push({
        label: 'Ecosystem',
        url: this.externalLinks.ARCHWAY_ECOSYSTEM,
        description: 'Explore Archway’s dapps, services, partners and more',
      });
    }

    return items;
  }

  public developerResources(): MenuItem[] {
    return [
      { label: 'Documentation', url: this.externalLinks.ARCHWAY_DOCS, description: 'Start building' },
      { label: 'Github', url: this.externalLinks.GITHUB, description: 'Access the source code' },
      { label: 'Area 52 Academy', url: this.externalLinks.AREA_52, description: 'Learn coding now' },
      { label: 'Grants Program', url: this.externalLinks.ARCHWAY_GRANTS, description: 'Get funded' },
      { label: 'Rewards Calculator', url: this.externalLinks.ARCHWAY_REWARDS, description: 'Calculate dapp rewards' },
    ];
  }

  public networkResources(): MenuItem[] {
    const items = [];

    items.push({ label: 'Network Status', url: this.externalLinks.ARCHWAY_STATUS, description: 'View network uptime and events' });
    items.push({
      label: 'Block Explorers',
      url: `${this.externalLinks.ARCHWAY_DOCS}/resources/blockexplorers`,
      description: 'View transaction and network information',
    });
    if (this.context?.features.ARCHWAY_CONNECT) {
      items.push({ label: 'Archway Connect', url: this.externalLinks.ARCHWAY_CONNECT, description: 'Swap, stake, vote, and more' });
    }
    items.push({
      label: 'Bridges',
      url: `${this.externalLinks.ARCHWAY_DOCS}/resources/ibc-channels`,
      description: 'Send and receive tokens',
    });
    items.push({
      label: 'Validator Resources',
      url: `${this.externalLinks.ARCHWAY_DOCS}/validators`,
      description: 'Learn how to run a node',
    });
    items.push({
      label: 'Network Information',
      url: `${this.externalLinks.ARCHWAY_DOCS}/resources/networks`,
      description: 'Access network information',
    });

    return items;
  }

  public communityResources(): MenuItem[] {
    return [
      { label: 'Community Hub', url: this.externalLinks.ARCHWAY_COMMUNITY_HUB, description: 'Access the Archway community' },
      { label: 'Partner with us', url: this.externalLinks.ARCHWAY_PARTNERSHIPS_FORM, description: 'Connect with Core Contributors' },
      { label: 'Governance Forum', url: this.externalLinks.ARCHWAY_GOVERNANCE_FORUM, description: 'Discuss governance proposals' },
      { label: 'Blog', url: this.externalLinks.ARCHWAY_BLOG, description: 'Stay up to date' },
      { label: 'Newsletter', url: this.externalLinks.ARCHWAY_NEWSLETTER, description: 'Be the first to know' },
      { label: 'FAQ', url: `${this.externalLinks.ARCHWAY_DOCS}/overview/faq`, description: 'Find out what others are asking' },
      { label: 'Brand & Assets Kit', url: this.externalLinks.ARCHWAY_BRAND, description: 'Brand Assets and Guidelines' },
    ];
  }

  public ecosystemResources(): MenuItem[] {
    return [{ label: 'Ecosystem Projects', url: this.externalLinks.ARCHWAY_ECOSYSTEM }];
  }

  public legalResources(): MenuItem[] {
    return [
      { label: 'Privacy Policy', url: this.externalLinks.ARCHWAY_PRIVACY },
      { label: 'Terms & Conditions', url: this.externalLinks.ARCHWAY_TERMS },
    ];
  }

  public socialMediaResources(): MenuItem[] {
    return [
      { label: 'Twitter', url: this.externalLinks.TWITTER, icon: TwitterBrand },
      { label: 'Telegram', url: this.externalLinks.TELEGRAM, icon: TelegramBrand },
      { label: 'Github', url: this.externalLinks.GITHUB, icon: GithubBrand },
      { label: 'Discord', url: this.externalLinks.DISCORD, icon: DiscordBrand },
      { label: 'Reddit', url: this.externalLinks.REDDIT, icon: RedditBrand },
    ];
  }
}

export default FooterNavigation;
