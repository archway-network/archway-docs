import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import CardsList from '../components/CardsList';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const categories = siteConfig.customFields.pageCategories;

  const overview = categories[3].children || [];
  const participate = categories[2].children || [];
  const createDApps = categories[0].children || [];
  const runNodes = categories[1].children[0] || [];
  const becomeValidator = categories[1].children[1] || [];

  return (
    <Layout className="home-page" title="Home" description="Rewarding Architects of Web3">
      <main className="py-40">
        <div className="space-y-20">
          <div>
            <h1 className="hero-1 uppercase pb-4">
              Welcome,
              <br />
              Let's build
            </h1>
            <p className="title-4 max-w-5xl">
              Discover why and how to build on Archway, the incentivized smart contract platform that rewards dApp{' '}
              <span className="text-orange">developers</span>.
            </p>
          </div>

          <CardsList
            heading="Welcome"
            info="Archway is an incentivized smart contract platform that rewards developers. Explore our documentation and guides to level up your workflow."
            items={overview}
          />
          <CardsList heading="Participate" items={participate} />
          <CardsList heading="Create dApps" items={createDApps} />
          <CardsList heading="Run a Node" items={runNodes} />
          <CardsList heading="Become a Validator" items={becomeValidator} />
        </div>

        {/* <div className="container create-cats">
          <h1>Participate</h1>
          <div className="card-deck">{participateCategoryItems}</div>
        </div>

        <div className="container create-cats">
          <h1>Create dApps</h1>
          <div className="card-deck">{createCategoryItems}</div>
        </div>

        <div className="container create-cats">
          <h1>Run a Node</h1>
          <div className="card-deck">{nodeCategoryItems}</div>
        </div>

        <div className="container create-cats">
          <h1>Become a Validator</h1>
          <div className="card-deck">{validatorCategoryItems}</div>
        </div> */}
      </main>
    </Layout>
  );
}
