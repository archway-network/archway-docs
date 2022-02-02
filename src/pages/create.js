import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './create.module.css';

export default function Create() {
  const {siteConfig} = useDocusaurusContext();
  const categories = siteConfig.customFields.pageCategories;
  
  let createCats = categories[0].children;

  const categoryItems = (createCats.length) ? createCats.map((item,i) =>
    <div className='cat-item' key={i}>
      <a href={item.value}>
        <div>
          <span className={item.icon + ' icon'}></span>
        </div>
        <p>
          {item.name}
        </p>
      </a>
    </div>
  ) : null;

  return (
    <Layout title="Build" description="dApps are the bread and butter that feed a blockchain">
      <main className='page'>
        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary page', styles.heroBanner)}>
              <div className="container">
                <h1>Creating dApps</h1>
              </div>
              <div className='container-fluid cat-wr'>{categoryItems}</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}