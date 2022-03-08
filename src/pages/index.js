import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import DocSidebar from '@theme/DocSidebar';
import * as sidebar from '../../sidebars';

const pageSidebar = [
  {
    type: 'category',
    collapsible: true,
    collapsed: true,
    label: 'Overview',
    items: [
      {type: 'ref', id:'overview/about', href: 'docs/overview/about', label:'About'},
      {type: 'ref', id:'overview/network', href: 'docs/overview/network', label:'Networks'},
      {type: 'ref', id:'overview/join-the-community', href: 'docs/overview/join-the-community', label:'Join the Archway Community'},
      {type: 'ref', id:'overview/glossary', href: 'docs/overview/glossary', label:'Glossary'},
      {type: 'ref', id:'overview/faq', href: 'docs/overview/faq', label:'FAQ'}
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
          {type: 'ref', id:'create/getting-started/install', href: 'docs/create/getting-started/install', label:'Installation'},
          {type: 'ref', id:'create/getting-started/setup', href: 'docs/create/getting-started/setup', label:'Setup'},
          {type: 'ref', id:'create/getting-started/basics', href: 'docs/create/getting-started/basics', label:'Basics'},
        ]
      },
      {
        type: 'category',
        collapsible: true,
        collapsed: true,
        label: 'Guides',
        items: [
          {type: 'ref', id:'create/guides/my-first-dapp/start', href: 'docs/create/guides/my-first-dapp/start', label:'Starting out'},
          {type: 'ref', id:'create/guides/my-first-dapp/faucet', href: 'docs/create/guides/my-first-dapp/faucet', label:'Requesting Testnet funds'},
          {type: 'ref', id:'create/guides/my-first-dapp/wasm', href: 'docs/create/guides/my-first-dapp/wasm', label:'Producing Wasm executables'},
          {type: 'ref', id:'create/guides/my-first-dapp/deploy', href: 'docs/create/guides/my-first-dapp/deploy', label:'Deploying your contract on chain'},
          {type: 'ref', id:'create/guides/my-first-dapp/interact', href: 'docs/create/guides/my-first-dapp/interact', label:'Interacting with your contract'},
          {type: 'ref', id:'create/guides/my-first-dapp/dapp', href: 'docs/create/guides/my-first-dapp/dapp', label:'Building a dApp frontend'}
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

export default function Home() {
  sidebar.pageSidebar = pageSidebar;

  const {siteConfig} = useDocusaurusContext();
  const categories = siteConfig.customFields.pageCategories;

  let createCats = categories[0].children;
  let nodeCats = categories[1].children[0];
  let validCats = categories[1].children[1];
  let participateCats = categories[2].children;
  let overviewCats = categories[3].children;

  // Creating dApps
  const createCategoryItems = (createCats.length) ? createCats.map((item,i) =>
    <a className='cats' href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;


  const nodeCategoryItems = (nodeCats.length) ? nodeCats.map((item,i) =>
    <a className='cats' href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;

  const validatorCategoryItems = (validCats.length) ? validCats.map((item,i) =>
    <a className='cats' href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;

  const participateCategoryItems = (participateCats.length) ? participateCats.map((item,i) =>
    <a className='cats' href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;

  const overviewCategoryItems = (overviewCats.length) ? overviewCats.map((item,i) =>
    <a className='cats sm' href={item.value} key={i}>
      <div className='card sm' key={'card-'+i}>
        <div className='card-block sm'>
          <div className='card-body sm'>
            <div className='card-title sm'>
              <span className={(item.icon) ? item.icon + ' icon icon-card-sm' : 'hidden'}>&nbsp;</span>{item.name}
            </div>
          </div>
        </div>
      </div>
    </a>
  ) : null;

  return (
    <Layout title="Home" description="Arch into Cosmos">
      <div className="navbar-sidebar navbar-sidebar-wr" role="complementary">
        <DocSidebar
          docsSidebars={sidebar}
          // path="docs/"
          sidebar={sidebar.pageSidebar}
          sidebarCollapsible={true}
        />
      </div>
      <main>
        <div className="container home">
          <h1>Welcome</h1>
          <p>Archway is an incentivized smart contract platform that rewards developers. Explore our documentation and guides to level up your workflow.</p>
          <div className="card-deck sm">{overviewCategoryItems}</div>
        </div>

        {/* Participate */}
        <div className="container create-cats">
          <h1>Participate</h1>
          <div className="card-deck">{participateCategoryItems}</div>
        </div>

        {/* Create */}
        <div className="container create-cats">
          <h1>Create dApps</h1>
          <div className="card-deck">{createCategoryItems}</div>
        </div>

        {/* Node */}
        <div className="container create-cats">
          <h1>Run a Node</h1>
          <div className="card-deck">{nodeCategoryItems}</div>
        </div>

        {/* Validator */}
        <div className="container create-cats">
          <h1>Become a Validator</h1>
          <div className="card-deck">{validatorCategoryItems}</div>
        </div>
      </main>
    </Layout>
  );
}
