// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const codatDarkTheme = {
  plain: { color: "#ECEDE5", backgroundColor: "#2a1f55" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "rgba(236,237,229,0.4)", fontStyle: "italic" },
    },
    { types: ["punctuation"], style: { color: "rgba(236,237,229,0.6)" } },
    { types: ["tag"], style: { color: "#B2D4C7" } },
    {
      types: ["keyword", "important"],
      style: { color: "#f07178", fontStyle: "italic" },
    },
    {
      types: ["string", "attr-value", "char", "inserted"],
      style: { color: "#ffcb6b" },
    },
    {
      types: ["number", "boolean", "constant", "symbol", "property"],
      style: { color: "#82aaff" },
    },
    { types: ["function", "builtin", "atrule"], style: { color: "#c3e88d" } },
    { types: ["variable", "attr-name"], style: { color: "#a9c4e8" } },
    { types: ["operator", "entity", "url"], style: { color: "#89ddff" } },
    { types: ["selector"], style: { color: "#ffcb6b" } },
    { types: ["regex"], style: { color: "#f07178" } },
    { types: ["deleted"], style: { color: "#ff5370" } },
    { types: ["bold"], style: { fontWeight: "bold" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
  ],
};

// Light-mode vampire: dark saturated hues readable on #F0F3F6
const codatLightTheme = {
  plain: { color: "#18103A", backgroundColor: "#F0F3F6" },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: { color: "#6272a4", fontStyle: "italic" },
    },
    { types: ["punctuation"], style: { color: "rgba(24,16,58,0.5)" } },
    { types: ["tag"], style: { color: "#1a6b5e" } },
    {
      types: ["keyword", "important"],
      style: { color: "#c2185b", fontStyle: "italic" },
    },
    {
      types: ["string", "attr-value", "char", "inserted"],
      style: { color: "#b45309" },
    },
    {
      types: ["number", "boolean", "constant", "symbol", "property"],
      style: { color: "#7c3aed" },
    },
    { types: ["function", "builtin", "atrule"], style: { color: "#15803d" } },
    { types: ["variable", "attr-name"], style: { color: "#1d4ed8" } },
    { types: ["operator", "entity", "url"], style: { color: "#0369a1" } },
    { types: ["selector"], style: { color: "#b45309" } },
    { types: ["regex"], style: { color: "#c2185b" } },
    { types: ["deleted"], style: { color: "#b91c1c" } },
    { types: ["bold"], style: { fontWeight: "bold" } },
    { types: ["italic"], style: { fontStyle: "italic" } },
  ],
};

import { ProvidePlugin } from "webpack";

import path from "path";
// import fetch from "node-fetch";

import navbar from "./nav.config";
import redirects from "./redirects.config";

import { generateAPISitemaps } from "./src/utils/oas-sitemap.js";

const BASE_URL = "";

require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Codat Docs",
  tagline:
    "Banking on better data: the advisory intelligence solution purpose-built for modern commercial banking.",

  url: "https://docs.codat.io",
  baseUrl: `${BASE_URL}/`,

  favicon: "img/meta/favicon-96x96.png",
  organizationName: "codat",
  projectName: "codat-docs",

  //onBrokenLinks: 'throw',
  onBrokenLinks: "warn",
  //onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  customFields: {
    DEVELOPMENT: process.env.NODE_ENV === "development",
    ZENDESK_KEY: process.env.ZENDESK_KEY,
    FEATURE_DEV_FLAG: process.env.FEATURE_DEV_FLAG,
    FEATURE_NEW_PRODUCTS_FLAG: process.env.FEATURE_NEW_PRODUCTS_FLAG,
    AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY,
  },

  presets: [
    [
      "docusaurus-plugin-glossary/preset",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        glossary: {
          glossaryPath: "glossary/glossary.json",
          routePath: "/glossary",
        },
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: `https://github.com/codatio/codat-docs/edit/${process.env?.BRANCH || "main"}/`,
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
          blogSidebarCount: 15,
          blogSidebarTitle: "Latest updates",
          editUrl: `https://github.com/codatio/codat-docs/edit/${process.env?.BRANCH || "main"}/`,
        },
        theme: {
          customCss: "./src/styles/custom.scss",
        },
        sitemap: {
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, routes, ...rest } = params;

            const apiRoutes = generateAPISitemaps();

            const newRoutes = [...routes, ...apiRoutes];

            const items = await defaultCreateSitemapItems({
              routes: newRoutes,
              ...rest,
            });

            return items;
          },
        },
      }),
    ],
  ],

  plugins: [
    "docusaurus-plugin-sass",
    "@docusaurus/theme-live-codeblock",
    "docusaurus-plugin-image-zoom",

    [
      "docusaurus-plugin-cookie-consent",
      {
        title: "Cookie Consent",
        description:
          "We use cookies to enhance your browsing experience and analyze our traffic.",
        links: [
          {
            label: "Privacy Policy",
            href: "https://www.codat.io/privacy-policy/",
          },
        ],
        toastMode: true,
        googleConsentMode: {
          enabled: true,
          waitForUpdate: 500,
          adsDataRedaction: true,
          urlPassthrough: false,
        },
      },
    ],

    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "styled-components": path.resolve(
            __dirname,
            "./node_modules/styled-components",
          ),
          react: path.resolve(__dirname, "./node_modules/react"),
          "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
          "@components": path.resolve(__dirname, "./src/components"),
        },
      },
    ],

    [
      // only works on prod
      "@docusaurus/plugin-client-redirects",
      redirects,
    ],

    //"@docusaurus/plugin-sitemap",

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
      "@docusaurus/plugin-google-gtag",
      {
        trackingID: process.env.GTM_ID,
        anonymizeIP: true,
      },
    ],

    "vercel-analytics",
  ],

  themes: ["@docusaurus/theme-mermaid", "docusaurus-theme-search-typesense"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "/img/meta/codat-bg.png",

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
        typesenseCollectionName: "codat-docs", // Replace with your own doc site's name. Should match the collection name in the scraper settings.
        typesenseServerConfig: {
          nodes: [
            {
              host: "m6ygplbafcj51wk4p.a1.typesense.net",
              port: 443,
              protocol: "https",
            },
          ],
          apiKey: "aWuDOXCgmWy7LXTRBg8RbfjGvjRmiRir",
        },
        typesenseSearchParameters: {}, // Optional: Typesense search parameters: https://typesense.org/docs/0.24.0/api/search.html#search-parameters
        contextualSearch: true, // Optional
      },

      sidebar: {
        hideable: true,
      },

      prism: {
        theme: codatLightTheme,
        darkTheme: codatDarkTheme,
        additionalLanguages: ["bash", "diff", "json", "http", "csharp"],
      },

      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: "bottom",
      },

      zoom: {
        selector: ".markdown > p > img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
      },
    }),

  markdown: {
    mermaid: true, // In order for Mermaid code blocks in Markdown to work, you also need to enable the Remark plugin with this option
  },
};

export default config;
