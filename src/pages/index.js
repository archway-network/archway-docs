import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import HomepageFeatures from '../components/HomepageFeatures';

// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/create/getting-started/install">
//             Setup Tutorial - 5 min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Arch into Cosmos">
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
