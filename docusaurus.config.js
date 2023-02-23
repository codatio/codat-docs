const { ProvidePlugin } = require("webpack");

const path = require("path");
const fetch = require("node-fetch");

const navbar = require("./nav.config");
const redirects = require("./redirects.config");

const BASE_URL = "";

require('dotenv').config()

console.log(redirects)

module.exports = {
  title: "Codat_docs",
  tagline:
    "We make accessing consented business data from your customers' banking, accounting, and commerce platforms easy. Build once to our API to aggregate data, underwrite credit risk, and automate accounting for your SMB customers.",
  url: "https://docs.codat.io",
  baseUrl: `${BASE_URL}/`,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {
      en: { label: "English" },
    },
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/meta/favicon-96x96.png",
  organizationName: "codat",
  projectName: "codat-docs",
  customFields: {
    'ZENDESK_KEY': process.env.ZENDESK_KEY,
  },
  themeConfig: {
    typesense: {
      typesenseCollectionName: 'codat-docs', // Replace with your own doc site's name. Should match the collection name in the scraper settings.

      typesenseServerConfig: {
        nodes: [
          {
            host: '3n6945ds2yqfiv1cp-1.a1.typesense.net',
            port: 443,
            protocol: 'https',
          }
        ],
        apiKey: 'x4tbdGWEWv2JCI8U3C6kdwdE8OiThCO1',
      },

      // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
      typesenseSearchParameters: {},

      // Optional
      contextualSearch: true,
    },
    sidebar: {
      hideable: true,
    },
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
    // tagManager: {
    //   trackingID: process.env.GA_TAG_ID,
    // },
    // prism: {
    //   theme: { plain: {}, styles: [] },
    //   // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
    //   additionalLanguages: ["shell-session", "http"],
    // },
  },
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
    [
      "@docusaurus/plugin-content-docs",
      {
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: `https://github.com/codatio/codat-docs/edit/main/`,
        exclude: ["README.md"],
        lastVersion: "current",
        versions: {
          current: {
            label: "v6",
            banner: "none",
          },
        },
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        blogTitle: "Codat updates",
        blogDescription: "Engineering and product updates from Codat.",
        postsPerPage: 10,
        routeBasePath: "/updates",
        blogSidebarCount: 8,
        blogSidebarTitle: "Latest updates",
        editUrl: "https://github.com/codatio/codat-docs/edit/main/blog/",
      },
    ],
    "@docusaurus/plugin-content-pages",
    "@docusaurus/plugin-debug",
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
  ],
  themes: [
    [
      path.resolve(__dirname, "./node_modules/@docusaurus/theme-classic"), //overriding the standard docusaurus-theme-classic to provide custom schema
      {
        customCss: [
          require.resolve(
            "./node_modules/modern-normalize/modern-normalize.css"
          ),
          require.resolve("./src/styles/custom.scss"),
        ],
      },
    ],
    "@docusaurus/theme-mermaid",
    "docusaurus-theme-search-typesense"
  ],
  markdown: {
    mermaid: true, // In order for Mermaid code blocks in Markdown to work, you also need to enable the Remark plugin with this option
  },
};
