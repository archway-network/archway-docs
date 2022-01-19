import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './node.module.css';

export default function Node() {
  return (
    <Layout title="Node Operators" description="Your launchpad into Cosmos">
      <main>
        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className="container">
                <h1>Operate a Node</h1>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className="container">
                <h1>Become a Validator</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
