import React from 'react';
import Layout from '@theme/Layout';

import styles from './universe.module.css';

export default function Universe() {
  return (
    <Layout className={styles.Layout}>
      <section className={styles.features}>
        <div className="container">
          <div className="row-f">
            <h1>Archway Universe</h1>
            <p>
              <strong>Your creation. Your rewards. Your success.</strong>
            </p>
          </div>

          <div className="row-f">
            <p>Archway is a blockchain ecosystem owned, operated, and governed by you—the developer community. As you build and launch impactful, highly used open-source dapps, you earn more. </p>

            <div className="text--center">
              <img src="static/img/lk-5.svg" className={styles.featureSvg} />
            </div>
            
            <p className={styles.center}>
              <a href="#" className={styles.upcase}>Read The Litepaper</a>
            </p>

          </div>

        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="row-f">
            <p>
              <strong>Reach more users, gain more assets.</strong>
            </p>
          </div>

          <div className="row-f">
            <p>Because transition fees and inflationary rewards are baked into every dapp built on Aarchway, success is shared with you and your team. As your dapp grows, you’re able to access a steady stream of funding to support your community and ongoing development.</p>
            <p>You can allocate those rewards however is most beneficial to your ecosystem: like redistributing to your governance token holders, funding core development, covering gas fees, contributing to a community DAO, open bounties, and plenty more</p>
          </div>

          <div className="row-f">
            <ul className={styles.unstyledul}>
              <li>70% of all gas fees go to dapps</li>
              <li>30% goes to validators</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.fdbackp}>
          <img src="static/img/universe/the-virtuous-feedback-loop.jpg" className={styles.fdback} />
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="row-f">
            <div className="hero hero--primary">
              <div className="container">
                <div className="row-f">
                  <h1>Broader ecosystem</h1>
                </div>
              </div>
              <div className="container">
                <p className={styles.herop}>Cosmos SDK is the toolkit for building custom chains.</p>
                <p className={styles.herop}>IBC (Inter Bridge Communication) is the mechanism that bridges assets.</p>
                <p className={styles.herop}>Tendermint is the consensus mechanism for Cosmos chains.</p>
                <p className={styles.herop}>Archway is then the blockchain network that allows developers to easily deploy smart contracts onto Cosmos.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.fdbackp}>
          <img src="static/img/universe/archway-universe.jpg" className={styles.fdback} />
        </div>
      </section>

      <section className={styles.featuresm}>
        <div className="container">
          <div className="hero hero--primary">
            <div className="row-f">
              <h1>Launchpad to Cosmos and beyond.</h1>
              <p>
                <strong>The future is multi-chain, and interoperability is a must. Built on Cosmos, Archway natively integrates IBC (Inter-Blockchain Communication protocol (IBC), allowing you to send and receive digital assets with other Cosmos-enabled chains out-of-the-box.</strong>
              </p>
              <p>No additional development is necessary. Just plug in and instantly access the vast and rapidly growing universe of users and liquidity from across Cosmos.</p>
            </div>

            <div className="row-f">
              <div className="text--center">
                <img src="static/img/lk-6.svg" className={styles.featureSvg} />
              </div>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="row-f">
            <div className="hero hero--primary">
              <div className="container">
                <div className="row-f">
                  <h1>The ultimate toolkit for building sustainable applications.</h1>
                </div>
              </div>
              <div className="container">
                <p className={styles.herop}>Archway makes it easy to build and launch your dapp. Simply deploy your contracts to an established proof-of-stake (PoS) network.</p>
                <p className={styles.herop}>The network provides a full CosmWasm implementation, Web3-compatible API and bridges to connect you to other networks.</p>
                <p className={styles.herop}>CosmWasm currently supports compilation from Rust, but in the future you can also write Wasm smart contracts with TypeScript, Golang, etc.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">

          <div className="row-f">
            <div className="hero hero--primary">
              <div className="container">
                <div className="row-f">
                  <h1>It’s easy to go live.</h1>
                </div>
              </div>
              <div className="container">
                <p className={styles.herop}>Fast and low cost transactions enable a frictionless user experience.</p>
                <p className={styles.herop}>Ready-made components allow you to deploy smart contracts and dapp frontends quickly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="rowf">
            <h1>Collective success.</h1>
          </div>
          <div className="rowf">
            <p className={styles.italic}>We’re revolutionizing how businesses are built, art is created, and success is shared. We’re the developers, technologists, artists, and entrepreneurs of the future—-all unified for the cause of creating a platform that shares rewards with the people. We represent more than just blockchain technology. We embody a cultural movement where the future is fair, and creators can benefit from their contributions. By revolutionizing the way dapps are built, we’re creating a digital world that supports the people rather than one that exploits.</p>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <div className="rowf">
            <h1>See it all happening on Archway.</h1>
          </div>
          <div className="rowf">
            <p>Backed by the team at Tendermint.</p>
          </div>
        </div>
      </section>

    </Layout>
  );
}