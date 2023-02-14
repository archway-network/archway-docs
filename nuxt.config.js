import dotenv from 'dotenv';
import fs from 'fs';
import { envPath, defaultEnvPath } from './env.config';
import { defineNuxtConfig } from 'nuxt/config';
import shiki from 'shiki';



console.log("envPath", fs.existsSync(envPath) ? envPath : defaultEnvPath);
dotenv.config({
  path: fs.existsSync(envPath) ? envPath : defaultEnvPath
});

export default defineNuxtConfig({
  alias: {
    '@vue/devtools-api': '@vue/devtools-api',
  },
  runtimeConfig: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,    
    algolia: {
      appId: process.env.ALGOLIA_APPLICATION_ID,
      searchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      writeApiKey: process.env.ALGOLIA_WRITE_API_KEY,
      docIndex: process.env.ALGOLIA_INDEX,
    }
  },
  generate: {
    routes: ['/404'],
  },
  sourcemap: false,
  build: {
    transpile: ['@headlessui/vue'],
  },
  algolia: {
    apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    instantSearch: {
      theme: 'algolia',
    }
  },
  modules: [
    [
      './modules/algoliaIndexer'
    ],
    [
      '@nuxtjs/algolia', {
        apiKey: process.env.ALGOLIA_WRITE_API_KEY,
        applicationId: process.env.ALGOLIA_APPLICATION_ID
      }
    ], 
    ['@nuxt/content', { documentDriven: true, navigation: { fields: ['parentSection'] } }]
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
      // htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'title', content: 'Archway Docs' },
        { hid: 'description', name: 'description', content: 'Rewarding Architects of Web3' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Archway Hub' },
        { hid: 'og:title', property: 'og:title', content: 'Archway Hub' },
        { hid: 'og:description', property: 'og:description', content: 'Rewarding Architects of Web3' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: 'https://archway.io' },
        { hid: 'og:image', property: 'og:image', content: 'https://archway.io/og-image.jpg' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@cosmos' },
        { hid: 'twitter:title', name: 'twitter:title', content: 'Archway' },
        { hid: 'twitter:description', name: 'twitter:description', content: 'Rewarding Architects of Web3' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://archway.io/og-image.jpg' },
        { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Archway' },
        { hid: 'theme-color-light', name: 'theme-color', content: '#ff4d00', media: '(prefers-color-scheme: light)' },
        { hid: 'theme-color-dark', name: 'theme-color', content: '#ff4d00', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        // { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon-precomposed.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: 'black' },
        { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Inter:500&display=swap' },
      ],
      // script: [
      //   {
      //     children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-8FN377PMBV');`,
      //     type: 'text/javascript',
      //     charset: 'utf-8',
      //   },
      // ],
    },
  },
  content: {
    highlight: {
      preload: [
        'c',
        'cpp',
        'java',
        'js',
        'rust',
        'json',
        'bash'
      ]
    },
        markdown: {
      async highlighter() {
        const highlighter = await shiki.getHighlighter({
          // Complete themes: https://github.com/shikijs/shiki/tree/master/packages/themes
          theme: 'nord'
        })
        return (rawCode, lang) => {
          return highlighter.codeToHtml(rawCode, lang)
        }
      }
    }
  },
  ssr: false,
  nitro: {
    preset: 'service-worker'
  }
});
