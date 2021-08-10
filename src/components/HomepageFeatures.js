import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Universe',
    Svg: require('../../static/img/lk-2.svg').default,
    description: (
      <>
        Welcome to the Universe, get ready to elevate your ecosystem. Learn more about the Archway community and ecosystem.
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    Svg: require('../../static/img/lk-5.svg').default,
    description: (
      <>
        Find your story arc. Knowledge Base has everything you need to get your dApp up and running quickly.
      </>
    ),
  },
  {
    title: 'Playground',
    Svg: require('../../static/img/lk-6.svg').default,
    description: (
      <>
        Archway is built to support developers. Playground allows you to test writing contracts code without installing any tools.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
