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

          <CardsList items={overview} />
          <CardsList heading="Participate" items={participate} />
          <CardsList heading="Create dApps" items={createDApps} />
          <CardsList heading="Run a Node" items={runNodes} />
          <CardsList heading="Become a Validator" items={becomeValidator} />
        </div>
      </main>
    </Layout>
  );
}
