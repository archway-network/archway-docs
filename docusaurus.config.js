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
          label: 'Blog', 
          position: 'left',
          target: '_blank'
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
