/**
 * Copyright (c) Ionic.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * @remarks
 * The didn't have it registered yet.
 */

const path = require('path');

module.exports = async function (context) {
  const { siteConfig } = context;
  const { themeConfig } = siteConfig;
  const { tagManager } = themeConfig || {};

  if (!tagManager) {
    throw new Error(
      `You need to specify 'tagManager' object in 'themeConfig' with 'trackingID' field in it to use docusaurus-plugin-tag-manager`
    );
  }

  const { trackingID } = tagManager;

  if (!trackingID) {
    throw new Error(
      'You specified the `tagManager` object in `themeConfig` but the `trackingID` field was missing. ' +
        'Please ensure this is not a mistake.'
    );
  }

  const isProd = process.env.NODE_ENV === 'production';

  return {
    name: 'docusaurus-google-tag-manager-plugin',
    injectHtmlTags() {
      if (!isProd) {
        return {};
      }
      return {
        headTags: [
          {
            tagName: 'link',
            attributes: {
              rel: 'preconnect',
              href: 'https://www.googletagmanager.com',
            },
          },
          {
            tagName: 'script',
            attributes: {
              charset: 'utf-8',
              src: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','${trackingID}');`, },
          },
        ],
        preBodyTags: [
          `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${trackingID}"
             height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`,
        ],
      };
    },
  };
};
