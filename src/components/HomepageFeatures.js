import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={clsx('sectionf feature_src-components-HomepageFeatures-module', styles.feature)}>
      <div className={clsx('divf', styles.featurePrimary)}>
        <div className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/create/getting-started/install">
                Setup Tutorial - 5 min ⏱️
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
