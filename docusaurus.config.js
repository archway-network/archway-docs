const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Archway Network',
  tagline: 'Elevate your ecosystem',
  url: 'https://archway-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'archway-network',  // GitHub org/user name.
  projectName: 'archway-docs',          // Repository name.
  themeConfig: {
    navbar: {
      // title: 'Archway Network',
      logo: {
        alt: 'Archway is the passage for dApp developers to receive long-term value for their creativity and contributions',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dt.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'create/getting-started/install',
          position: 'left',
          label: 'Getting Started',
        },
        {
          to: 'https://blog.archway.io/', 
          position: 'left',
          target: '_blank',
          label: 'Learn'
        },
        {
          page: 'create',
          href: '/create',
          position: 'left',
          label: 'Build',
        },
        {
          page: 'node',
          href: '/node',
          position: 'left',
          label: 'Join',
        },
        {
          page: 'participate',
          href: '/participate',
          position: 'left',
          label: 'Participate',
        },
        {
          href: 'https://github.com/archway-network/archway-docs/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {},
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    // announcementBar: {
    //   id: 'unstable',
    //   content:`You're previewing Archway's unstable documentation. Hang in there, everything should work great by October 25!`,
    //   backgroundColor: '#EAE5E1',
    //   textColor: '#000000',
    //   isCloseable: false,
    // },
  },
  customFields: {
    pageCategories: [
      {
        name: 'build',
        children: [
          {name:'Quick Start', value:'/docs/create/getting-started/install'},
          {name:'Guides', value:'/docs/create/guides/my-first-dapp/start'},
          {name:'Videos', value:'#'}
        ]
      },
      {
        name: 'join',
        children: [
          // Node Operators
          [
            {name:'Install', value:'/docs/node/install'},
            {name:'Configure', value:'/docs/node/configure'},
            {name:'Run a local testnet', value:'/docs/node/running-a-local-testnet'},
            {name:'Joining a network', value:'/docs/node/join-a-network'}
          ],
          // Validators
          [
            {name:'What are validators?', value:'/docs/validator/overview'},
            {name:'Requirements', value:'/docs/validator/requirements'},
            {name:'Run a validator',value:'/docs/validator/running-a-validator-node'},
            {name:'Monitor validators',value:'/docs/validator/monitoring-validators'},
            {name:'Troubleshoot',value:'/docs/validator/troubleshooting'}
          ]
        ]
      },
      {
        name: 'participate',
        children: [
          {name:'Create a wallet', value:'/docs/participate/wallet'},
          {name:'Staking', value:'/docs/participate/staking'}
        ]
      }
    ]
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/archway-network/archway-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/archway-network/archway-docs/edit/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/archway.css'),require.resolve('./src/css/custom.css')]
        },
      },
    ],
  ],
};
