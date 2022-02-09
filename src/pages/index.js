import React from 'react';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// import * as sidebar from '../../sidebars';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const categories = siteConfig.customFields.pageCategories;
  
  let createCats = categories[0].children;
  let nodeCats = categories[1].children[0];
  let validCats = categories[1].children[1];
  let participateCats = categories[2].children;

  // Creating dApps
  const createCategoryItems = (createCats.length) ? createCats.map((item,i) =>
    <a href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;


  const nodeCategoryItems = (nodeCats.length) ? nodeCats.map((item,i) =>
    <a href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;

  const validatorCategoryItems = (validCats.length) ? validCats.map((item,i) =>
    <a href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;

  const participateCategoryItems = (participateCats.length) ? participateCats.map((item,i) =>
    <a href={item.value} key={i}>
      <div className='card' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={item.icon + ' icon'}></span>&nbsp;{item.name}
            </div>
            <p className='card-text'>{item.description}</p>
          </div>
        </div>
      </div>
    </a>
  ) : null;  

  return (
    <Layout title="Home" description="Arch into Cosmos">
      {/* 
        // TODO: Fix show sidebar in pages
        <div className='sidebar' role="complementary">
        <DocSidebar
          docsSidebars={sidebar.pageSidebar}
        />
      </div> 
      */}

      <main>
        <div className="container">
          <h1>Welcome</h1>
          <p>Archway is an incentivized smart contract platform that rewards developers. Explore our documentation and guides to level up your workflow.</p>
        </div>

        {/* Participate */}
        <div className="container create-cats">
          <h1>Participate</h1>
          <div className='card-deck'>{participateCategoryItems}</div>
        </div>

        {/* Create */}
        <div className="container create-cats">
          <h1>Creating dApps</h1>
          <div className='card-deck'>{createCategoryItems}</div>
        </div>

        {/* Node */}
        <div className="container create-cats">
          <h1>Run a Node</h1>
          <div className='card-deck'>{nodeCategoryItems}</div>
        </div>

        {/* Validator */}
        <div className="container create-cats">
          <h1>Become a Validator</h1>
          <div className='card-deck'>{validatorCategoryItems}</div>
        </div>
      </main>
    </Layout>
  );
}
