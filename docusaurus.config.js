// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

import { ProvidePlugin } from "webpack";

import path from "path";
// import fetch from "node-fetch";

import navbar from "./nav.config";
import redirects from "./redirects.config";

const BASE_URL = "";

require('dotenv').config()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Codat_docs",
  tagline:
    "We make accessing consented business data from your customers' banking, accounting, and commerce platforms easy. Build once to our API to aggregate data, underwrite credit risk, and automate accounting for your SMB customers.",

  url: "https://docs.codat.io",
  baseUrl: `${BASE_URL}/`,

  favicon: "img/meta/favicon-96x96.png",
  organizationName: "codat",
  projectName: "codat-docs",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    'DEVELOPMENT': process.env.NODE_ENV === 'development',
    'ZENDESK_KEY': process.env.ZENDESK_KEY,
    'FEATURE_DEV_FLAG': process.env.FEATURE_DEV_FLAG,
    'FEATURE_NEW_PRODUCTS_FLAG': process.env.FEATURE_NEW_PRODUCTS_FLAG,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/codatio/codat-docs/edit/${process.env?.BRANCH || 'main'}/`,
          exclude: ["README.md"],
          lastVersion: "current",
          versions: {
            current: {
              label: "v6",
              banner: "none",
            },
          },
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Codat updates",
          blogDescription: "Engineering and product updates from Codat.",
          postsPerPage: 10,
          routeBasePath: "/updates",
          blogSidebarCount: 8,
          blogSidebarTitle: "Latest updates",
          editUrl: `https://github.com/codatio/codat-docs/edit/${process.env?.BRANCH || 'main'}/`,
        },
        theme: {
          customCss: './src/styles/custom.scss',
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",

    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "styled-components": path.resolve(
            __dirname,
            "./node_modules/styled-components"
          ),
          react: path.resolve(__dirname, "./node_modules/react"),
          "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
          "@components": path.resolve(__dirname, "./src/components"),
        },
      },
    ],

    [ // only works on prod
      '@docusaurus/plugin-client-redirects',
      redirects
    ],

    "@docusaurus/plugin-sitemap",

    // Add custom webpack config to make @stoplight/elements work
    () => ({
      name: "custom-webpack-config",
      configureWebpack: () => {
        return {
          module: {
            rules: [
              {
                test: /\.m?js/,
                resolve: {
                  fullySpecified: false,
                },
              },
            ],
          },
          plugins: [
            new ProvidePlugin({
              process: require.resolve("process/browser"),
            }),
          ],
          resolve: {
            fallback: {
              buffer: require.resolve("buffer"),
              stream: false,
              path: false,
              process: false,
            },
          },
        };
      },
    }),

    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: process.env.GTM_ID,
        anonymizeIP: true,
      },
    ],

    [
      '@docusaurus/plugin-google-analytics',
      {
        trackingID: process.env.GA_ID,
        anonymizeIP: true,
      },
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-search-typesense"
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      metadata: [
        { name: "keywords", content: "codat, docs, updates" },
        {
          name: "og:image",
          content: "https://docs.codat.io/img/meta/codat-bg.png",
        },
        {
          name: "twitter:image",
          content: "https://docs.codat.io/img/meta/codat-bg.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:domain",
          content: "codat.io",
        },
        {
          name: "twitter:site",
          content: "@codatdata",
        },
        {
          name: "twitter:creator",
          content: "codat",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:site_name",
          content: "Codat Docs",
        },
      ],

      colorMode: {
        defaultMode: "light",
      },

      navbar,

      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],

      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,

      typesense: {
        typesenseCollectionName: 'codat-docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
        typesenseServerConfig: {
          nodes: [
            {
              host: 'm6ygplbafcj51wk4p.a1.typesense.net',
              port: 443,
              protocol: 'https',
            }
          ],
          apiKey: 'aWuDOXCgmWy7LXTRBg8RbfjGvjRmiRir',
        },
        typesenseSearchParameters: {}, // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        contextualSearch: true, // Optional
      },

      sidebar: {
        hideable: true,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  markdown: {
    mermaid: true, // In order for Mermaid code blocks in Markdown to work, you also need to enable the Remark plugin with this option
  },
};

export default config;
