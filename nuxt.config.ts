import dotenv from 'dotenv';
import fs from 'fs';
import { defineNuxtConfig } from 'nuxt/config';

import { envPath, defaultEnvPath } from './env.config';

dotenv.config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath,
});

export default defineNuxtConfig({
  alias: {
    '@vue/devtools-api': '@vue/devtools-api',
  },
  runtimeConfig: {
    public: {
      meilisearch: {
        searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
        docIndex: process.env.MEILISEARCH_INDEX,
        host: process.env.MEILISEARCH_HOST,
      },
    },
  },
  generate: {
    routes: ['/404'],
  },
  sourcemap: false,
  build: {
    transpile: ['@headlessui/vue'],
  },
  modules: [
    ['@nuxt/content', { documentDriven: true, navigation: { fields: ['parentSection'] } }],
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/css/app.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Archway Docs',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'Learn how to build & launch decentralized apps (dapps) & smart contracts, including how to run a node OR participate in the Archway Ecosystem.',
        },
        { key: 'og:url', property: 'og:url', content: 'https://docs.archway.io' },
        { key: 'og:type', property: 'og:type', content: 'website' },
        { key: 'og:title', property: 'og:title', content: 'Archway Docs' },
        {
          key: 'og:description',
          property: 'og:description',
          content:
            'Learn how to build & launch decentralized apps (dapps) & smart contracts, including how to run a node OR participate in the Archway Ecosystem.',
        },
        { key: 'og:site_name', property: 'og:site_name', content: 'Archway Docs' },
        { key: 'og:image', property: 'og:image', content: 'https://archway.io/og-image.jpg' },
        { key: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { key: 'twitter:domain', name: 'twitter:domain', content: 'docs.archway.io' },
        { key: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
        { key: 'twitter:title', name: 'twitter:title', content: 'Archway Docs' },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content:
            'Learn how to build & launch decentralized apps (dapps) & smart contracts, including how to run a node OR participate in the Archway Ecosystem.',
        },
        { key: 'twitter:image', name: 'twitter:image', content: 'https://archway.io/og-image.jpg' },
        { key: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Archway Docs' },
        { key: 'theme-color-light', name: 'theme-color', content: '#ff4d00', media: '(prefers-color-scheme: light)' },
        { key: 'theme-color-dark', name: 'theme-color', content: '#ff4d00', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon-precomposed.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'black' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Inter:500&display=swap' },
      ],
      script: [
        {
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-54W7BX3');`,
          type: 'text/javascript',
          charset: 'utf-8',
        },
      ],
      noscript: [
        {
          children:
            '<div style="background:#FF4D00;color:white;font-size:1rem;font-style:italic;padding-left:20px;margin-top:1750px">This site requires Javascript to be enabled.<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54W7BX3" height="0" width="0" style="display:none;visibility:keyden"></iframe></div>',
        },
      ],
    },
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
      preload: ['c', 'cpp', 'java', 'js', 'rust', 'json', 'bash', 'yaml', 'toml'],
    },
  },
  robots: {
    configPath: 'robots.config.js',
  },
  sitemap: {
    hostname: 'https://docs.archway.io',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
});
