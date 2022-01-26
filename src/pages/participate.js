import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './participate.module.css';

export default function Participate() {
  const {siteConfig} = useDocusaurusContext();
  const categories = siteConfig.customFields.pageCategories;
  
  let participateCats = categories[2].children;

  const categoryItems = (participateCats.length) ? participateCats.map((item,i) =>
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
    <Layout title="Participate" description="Your launchpad into Cosmos">
      <main className='page'>
        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary page', styles.heroBanner)}>
              <div className="container">
                <h1>Participate</h1>
              </div>
              <div className='container-fluid cat-wr'>{categoryItems}</div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
