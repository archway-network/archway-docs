import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import DocSidebar from '@theme/DocSidebar';
import * as sidebar from '../../sidebars';
import pageSidebar from '../common/pageSidebar';

export default function Videos() {
  sidebar.pageSidebar = pageSidebar;

  const {siteConfig} = useDocusaurusContext();
  const videos = siteConfig.customFields.videos;

  const videoItems = (videos.length) ? videos.map((item,i) =>
    // <div className='card video-card' key={'card-'+i}>
    <a className='cats' target='_blank' href={item.value} key={i}>
      <div className='card m video' key={'card-'+i}>
        <div className='card-block'>
          <div className='card-body'>
            <div className='card-title'>
              <span className={'icon-video3 icon'}></span>&nbsp;{item.name}
            </div>
            {/* <iframe width='560' height='315' src={item.value} frameBorder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe> */}
            <p className='card-text'>{item.description}</p>

            <ul className='tags'>
              {item.tags.map((tag, index) => (
                <li className='tag' key={index}>{tag}</li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </a>
  ) : null;

  return (
    <Layout title="Videos" description="Level up your knowledge with hands-on video tutorials and code along sessions">
      <div className="navbar-sidebar navbar-sidebar-wr" role="complementary">
        <DocSidebar
          docsSidebars={sidebar}
          // path="docs/"
          sidebar={sidebar.pageSidebar}
          sidebarCollapsible={true}
        />
      </div>
      <main>
        <div className="container videos">
          <h1>Videos</h1>
          {/* <p>Explore hands-on video tutorials and code along sessions. Learn how to make your ideas for the next "killer dApp" a reality 🚀</p> */}
          <div className="card-deck video">{videoItems}</div>
        </div>
      </main>
    </Layout>
  );
}
