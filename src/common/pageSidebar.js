const pageSidebar = [
  {
    type: 'category',
    collapsible: true,
    collapsed: true,
    label: 'Overview',
    items: [
      {type: 'ref', id: 'overview/about', href: 'docs/overview/about', label: 'About'},
      {type: 'ref', id: 'overview/network', href: 'docs/overview/network', label: 'Networks'},
      {type: 'ref', id: 'overview/join-the-community', href: 'docs/overview/join-the-community', label: 'Join the Archway Community'},
      {type: 'ref', id: 'overview/glossary', href: 'docs/overview/glossary', label: 'Glossary'},
      {type: 'ref', id: 'overview/faq', href: 'docs/overview/faq', label: 'FAQ'}
    ]
  },
  { 
    type: 'category',
    collapsible: true,
    collapsed: true,
    label: 'Developers',
    items: [
      {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Getting Started',
        items: [
          {type: 'ref', id: 'create/getting-started/install', href: 'docs/create/getting-started/install', label: 'Installation'},
          {type: 'ref', id: 'create/getting-started/setup', href: 'docs/create/getting-started/setup', label: 'Setup'},
          {type: 'ref', id: 'create/getting-started/basics', href: 'docs/create/getting-started/basics', label: 'Basics'},
        ]
      },
      {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Guides',
        items: [
          {type: 'ref', id: 'create/guides/launchpad', href: 'docs/create/guides/launchpad', label: 'Launchpad'},
          {type: 'ref', id: 'create/guides/my-first-dapp/start', href: 'docs/create/guides/my-first-dapp/start', label: 'Creating Your First dApp'},
          {type: 'ref', id: 'create/guides/nft-project/start', href: 'docs/create/guides/nft-project/start', label: 'Building With NFTs'},
        ]
      },
      {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Advanced',
        items: [
          {type: 'ref', id: 'create/advanced/cargo', href: 'docs/create/advanced/cargo', label: 'Managing Dependencies'},
          {type: 'ref', id: 'create/advanced/debug', href: 'docs/create/advanced/debug', label: 'Debugging'},
          {type: 'ref', id: 'create/advanced/troubleshooting', href: 'docs/create/advanced/troubleshooting', label: 'Troubleshooting'},
        ]
      },
      {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'CLI',
        items: [
          {type: 'ref', id: 'create/cli/daemon', href: 'docs/create/cli/daemon', label: 'Archway Daemon'},
          {type: 'ref', id: 'create/cli/cli', href: 'docs/create/cli/cli', label: 'Developer CLI'},
        ]
      },
    ]
  },
  {
    type: 'category',
    collapsible: true,
    collapsed: true,
    label: 'Node Operators',
    items: [
      {type: 'ref', id:'node/install', href: 'docs/node/install', label:'Node Installation'},
      {type: 'ref', id:'node/configure', href: 'docs/node/configure', label:'Node Configuration'},
      {type: 'ref', id:'node/running-a-local-testnet', href: 'docs/node/running-a-local-testnet', label:'Running a Local Testnet'},
      {type: 'ref', id:'node/join-a-network', href: 'docs/node/join-a-network', label:'Joining a Network'}
    ]
  },
  {
    type: 'category',
    collapsible: true,
    collapsed: true,
    label: 'Validators',
    items: [
      {type: 'ref', id:'validator/overview', href: 'docs/validator/overview', label:'Introduction to Validating for Archway'},
      {type: 'ref', id:'validator/requirements', href: 'docs/validator/requirements', label:'Validator Requirements'},
      {type: 'ref', id:'validator/running-a-validator-node', href: 'docs/validator/running-a-validator-node', label:'Running a Validator Node'},
      {type: 'ref', id:'validator/monitoring-validators', href: 'docs/validator/monitoring-validators', label:'Monitoring Validators'},
      {type: 'ref', id:'validator/troubleshooting', href: 'docs/validator/troubleshooting', label:'Troubleshooting Common Issues With Validator Nodes'}
    ]
  },
  {
    type: 'category',
    collapsible: true,
    collapsed: true,
    label: 'Participate',
    items: [
      {type: 'ref', id:'participate/wallet', href: 'docs/participate/wallet', label:'Create a wallet'},
      {type: 'ref', id:'participate/staking', href: 'docs/participate/staking', label:'Staking'},
      {type: 'ref', id:'participate/contribute', href: 'docs/participate/contribute', label:'Contributing to Archway docs'}
    ]
  }
];

export default pageSidebar;