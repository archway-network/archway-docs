import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './node.module.css';

export default function Node() {
  const {siteConfig} = useDocusaurusContext();
  const categories = siteConfig.customFields.pageCategories;
  
  let nodeCats = categories[1].children[0];
  let validCats = categories[1].children[1];

  const nodeItems = (nodeCats.length) ? nodeCats.map((item,i) =>
    <div className='cat-item' key={i}>
      <a href={item.value}>
        <div>
          <img className='icon icon-arch' src='/img/arch32.png' />
        </div>
        <p>
          {item.name}
        </p>
      </a>
    </div>
  ) : null;

  const validatorItems = (validCats.length) ? validCats.map((item,i) =>
    <div className='cat-item' key={i}>
      <a href={item.value}>
        <div>
          <img className='icon icon-arch' src='/img/arch32.png' />
        </div>
        <p>
          {item.name}
        </p>
      </a>
    </div>
  ) : null;

  return (
    <Layout title="Node Operators" description="Your launchpad into Cosmos">
      <main className='page'>
        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary page', styles.heroBanner)}>
              <div className="container">
                <h1>Operate a Node</h1>
              </div>
              <div className='container-fluid cat-wr'>{nodeItems}</div>
            </div>
          </div>
        </section>

        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary lis page', styles.heroBanner)}>
              <div className="container">
                <h1>Become a Validator</h1>
              </div>
              <div className='container-fluid cat-wr'>{validatorItems}</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
