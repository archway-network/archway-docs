require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Archway Network',
  tagline: 'Elevate your ecosystem',
  url: 'https://docs.archway.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'archway-network',  // GitHub org/user name.
  projectName: 'archway-docs',          // Repository name.
  themeConfig: {
    navbar: {
      title: 'Documentation',
      logo: {
        alt: 'Archway is the passage for dApp developers to receive long-term value for their creativity and contributions',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dt.svg'
      },
      items: [
        {
          href: 'https://www.archway.io/',
          label: 'Archway.io ↗',
          position: 'right',
          className: 'back-to-website arrow external',
        },
        {
          href: 'https://github.com/archway-network/archway-docs/',
          label: ' ',
          position: 'right',
          className: 'header-github-link',
        },
        {
          href: 'https://discord.com/invite/5FVvx3WGfa',
          label: ' ',
          position: 'right',
          className: 'header-discord-link',
        }
      ],
    },
    footer: {},
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      switchConfig: {
        darkIcon: '\u{25EF}',
        darkIconStyle: {
          display: 'none',
        },
        lightIcon: '\u{2B24}',
        lightIconStyle: {
          display: 'none',
        }
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    // announcementBar: {
    //   id: 'unstable',
    //   content:`You're previewing Archway's unstable documentation. Hang in there, everything should work great by October 25!`,
    //   backgroundColor: '#EAE5E1',
    //   textColor: '#000000',
    //   isCloseable: false,
    // },
    algolia: {
      appId: process.env.algoliaAppId,
      apiKey: process.env.algoliaApiKey,
      indexName: 'archway',
    },
  },
  customFields: {
    pageCategories: [
      {
        name: 'build',
        children: [
          {name:'Quick Start', value:'/docs/create/getting-started/install', icon:'icon-rocket', description:'Get started building decentralized applications on Archway'},
          {name:'Guides', value:'/docs/create/guides/launchpad', icon:'icon-guide2', description:'Dive deeper into Archway smart contract development and dApp client code'},
          {name:'Videos', value:'/videos', icon:'icon-video3', description:'Code along side Archway developers using our video tutorials'},
          {name:'Dependencies', value:'/docs/create/advanced/cargo', icon:'icon-beta1', description:'Update your source code and manage dependencies'},
          {name:'Debugging', value:'/docs/create/advanced/debug', icon:'icon-bug', description:'Tricks and tips for debugging smart contract errors'},
          {name:'Troubleshooting', value:'/docs/create/advanced/troubleshooting', icon:'icon-fix2', description:'Troubleshoot common issues and problems with Archway development'},
          {name:'Core Protocol', value:'/docs/create/cli/daemon', icon:'icon-computer', description:'Learn about the archwayd binary from a developer\'s perspective'}
        ]
      },
      {
        name: 'join',
        children: [
          // Node Operators
          [
            {name:'Install', value:'/docs/node/install', icon:'icon-hdd', description:'Installation requirements for Archway node operators'},
            {name:'Configure', value:'/docs/node/configure', icon:'icon-settings', description:'Node configurations and operator settings'},
            {name:'Run a local testnet', value:'/docs/node/running-a-local-testnet', icon:'icon-experiments', description:'Running local testnet nodes'},
            {name:'Joining a network', value:'/docs/node/join-a-network', icon:'icon-sitemap', description:'Join an existing Archway network such as Augusta, Constantine or Titus'}
          ],
          // Validators
          [
            {name:'What are validators?', value:'/docs/validator/overview', icon:'icon-safe1', description:'Learn about validators and how they keep Archway secure'},
            {name:'Requirements', value:'/docs/validator/requirements', icon:'icon-download1', description:'Installation requirements for validator nodes'},
            {name:'Run a validator node',value:'/docs/validator/running-a-validator-node', icon:'icon-sitemap', description:'Running your validator and earning rewards'},
            {name:'Monitor validators',value:'/docs/validator/monitoring-validators', icon:'icon-monitor', description:'Enable monitoring services to help ensure continuous uptime'},
            {name:'Troubleshoot',value:'/docs/validator/troubleshooting', icon:'icon-fix2', description:'Troubleshoot common problems with validator nodes'}
          ]
        ]
      },
      {
        name: 'participate',
        children: [
          {name:'Create a wallet', value:'/docs/participate/wallet', icon:'icon-wallet', description:'Setup a new account to begin receiving and sending coins'},
          {name:'Staking', value:'/docs/participate/staking', icon:'icon-pig', description:'Enroll your account in staking rewards'},
          {name:'Contributing', value:'/docs/participate/contribute', icon:'icon-build', description:'Help maintain and support Archway documentation and guides'}
        ]
      },
      {
        name: 'overview',
        children: [
          {name:'About Archway', value:'/docs/overview/about', icon:''},
          {name:'Public Networks', value:'/docs/overview/network', icon:'icon-sitemap'},
          {name:'Join the Community', value:'/docs/overview/join-the-community', icon:'icon-earth'},
        ]
      }
    ],
    videos: [
      {
        name: 'Create your own dApps and NFTs with CosmWasm using Archway',
        value: 'https://www.youtube.com/watch?v=n4rvQB86lLM',
        tags: ['Cosmos','Ignite','Code with Us', 'NFTs', 'Rust', 'Cosmjs'],
        description: 'CosmWasm unlocks a vast universe of new possibilities through true cross-chain smart contracts. However, the development experience hasn’t always been the most straightforward. With this workshop, you’ll learn just how easy it is to create your own CosmWasm dApps and NFTs on top of Archway.'
      },
      {
        name: 'Archway Developer Rewards + CosmWasm Contracts',
        value: 'https://www.youtube.com/watch?v=fit1_bMNgVc',
        tags: ['Developer Rewards', 'Contract Metadata', 'DAOs', 'Escrow'],
        description: 'Learn how to write contracts that automatically redirect protocol rewards for several use cases (contributing to a DAO, subsidizing gas fees, seeding liquidity pools, boosting governance token rewards, etc.)'
      }
    ]
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/archway-network/archway-docs/edit/main/'
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/footer.css'),
            require.resolve('./src/css/icons.css'),
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/mobile.css')
          ]
        },
      },
    ],
  ],
};
