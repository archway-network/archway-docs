import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Link } from '../components/Ui';

export default function Videos() {
  const { siteConfig } = useDocusaurusContext();
  const videos = siteConfig.customFields.videos;

  if (videos.length === 0) return null;

  const videoItems = videos.length
    ? videos.map((item, i) => (
        // <div className='card video-card' key={'card-'+i}>
        <a className="cats" target="_blank" href={item.value} key={i}>
          <div className="card m video" key={'card-' + i}>
            <div className="card-block">
              <div className="card-body">
                <div className="card-title">
                  <span className={'icon-video3 icon'}></span>&nbsp;{item.name}
                </div>
                {/* <iframe width='560' height='315' src={item.value} frameBorder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe> */}
                <p className="card-text">{item.description}</p>

                <ul className="tags">
                  {item.tags.map((tag, index) => (
                    <li className="tag" key={index}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </a>
      ))
    : null;

  return (
    <Layout title="Videos" description="Level up your knowledge with hands-on video tutorials and code along sessions">
      <main className="container py-40">
        <h1 className="title-1 uppercase pb-5 lg:pb-8">Videos</h1>
        <h2 className="title-4">Code along side Archway developers using our video tutorials.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 pt-8 lg:pt-12">
          {videos.map(({ name, description, thumb, url, tags }) => (
            <Link
              className="bg-white dark:bg-gray-900 hover:dark:text-gray-800 shadow-card rounded-2xl px-6 pt-6 pb-10 flex flex-col"
              href={url}
              externalIcon={false}
            >
              <div className="flex-1 space-y-3">
                <img className="rounded-lg" src={thumb} alt="" />
                <div>
                  <span className="inline-block w-[18px] h-[18px] bg-black dark:bg-white rounded-full" />
                </div>
                <h3 className="font-bold">{name}</h3>
                <p className="dark:text-gray-800">{description}</p>
              </div>
              <ul className="pt-6 flex flex-wrap gap-x-2 gap-y-2">
                {tags.map(tag => (
                  <li className="small text-gray dark:text-gray-800 px-2.5 py-2 border border-black/60 dark:border-gray-900 rounded-full">
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
