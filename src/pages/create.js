import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import styles from './create.module.css';

export default function Create() {
  return (
    <Layout title="Creating dApps" description="dApps are the bread and butter that feed a blockchain">
      <main>
        <section className={styles.feature}>
          <div className={styles.featurePrimary}>
            <div className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className="container">
                <h1>Creating dApps</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
