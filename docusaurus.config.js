const { ProvidePlugin } = require("webpack");

const path = require("path");
const fetch = require("node-fetch");

const BASE_URL = "";

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
  themeConfig: {
    sidebar: {
      hideable: true,
    },
    metadata: [
      { name: "keywords", content: "codat, docs, updates" },
      {
        name: "og:image",
        content: "https://docs.codat.io/img/meta/open-graph.png",
      },
      {
        name: "twitter:image",
        content: "https://docs.codat.io/img/meta/open-graph.png",
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
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: "Site logo",
        src: `/logos/codat-docs-dark.png`,
        srcDark: `/logos/codat-docs-light.png`,
        href: "/",
        target: "_self",
        width: 170,
        height: 28,
      },
      items: [
        {
          type: "doc",
          docId: "index",
          label: "Docs",
          position: "left",
        },
        {
          label: "API",
          position: "left",
          className: "navbar__link--community",
          items: [
            {
              href: "/codat-api",
              label: "Codat API",
            },
            {
              href: "/accounting-api",
              label: "Accounting API",
            },
            {
              href: "/banking-api",
              label: "Banking API",
            },
            {
              href: "/commerce-api",
              label: "Commerce API",
            },
            {
              href: "/accounting-api",
              label: "Bank Feed API",
            },
            {
              href: "/assess-api",
              label: "Assess API",
            },
            {
              href: "/accounting-api",
              label: "Sync for Commerce API",
            },
            {
              href: "/sync-for-expenses-api",
              label: "Sync for Expenses API",
            },
          ],
        },
        { to: "updates", label: "Updates", position: "left" }, // or position: 'right'
        {
          label: "Community",
          position: "left",
          items: [
            {
              href: "https://github.com/orgs/codatio/discussions",
              label: "Forum",
              target: "_blank",
              rel: null,
            },
            {
              href: "https://github.com/codatio",
              label: "GitHub",
              target: "_blank",
              rel: null,
            },
            {
              href: "https://twitter.com/codatdata",
              label: "Twitter",
              target: "_blank",
              rel: null,
            },
            {
              href: "https://bit.ly/codatpbroadmap1",
              label: "Product roadmap",
              target: "_blank",
              rel: null,
            },
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/codat",
            // },
            {
              href: "https://www.codat.io/blog/",
              label: "Blog",
              target: "_blank",
              rel: null,
            },
          ],
          className: "navbar__link--community",
        },
        {
          label: "Support",
          position: "left",
          items: [
            {
              href: "https://codat.zendesk.com/hc/en-gb",
              label: "Help center",
              target: "_blank",
              rel: null,
            },
            {
              href: "https://bit.ly/codatstatus",
              label: "API status",
              target: "_blank",
              rel: null,
            },
            {
              href: "https://docs.codat.io/discuss",
              label: "Ask the community",
              target: "_blank",
              rel: null,
            },
            {
              href: "https://github.com/codatio/codat-docs/issues/new",
              label: "Issue with the docs?",
              target: "_blank",
              rel: null,
            },
          ],
          className: "navbar__link--support",
        },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
        // {
        //   type: 'iconLink',
        //   position: 'right',
        //   icon: {
        //     alt: 'twitter logo',
        //     src: `/logos/twitter.svg`,
        //     href: 'https://twitter.com/codatdata',
        //     target: '_blank',
        //   },
        // },
        // {
        //   type: 'iconLink',
        //   position: 'right',
        //   icon: {
        //     alt: 'github logo',
        //     src: `/logos/github.svg`,
        //     href: 'https://github.com/codatio',
        //     target: '_blank',
        //   },
        // },
        { 
          href: "https://app.codat.io/", 
          label: "Sign in", 
          className: "navbarButton secondary",
          position: "right" 
        },
        { 
          href: "https://signup.codat.io/", 
          label: "Sign up", 
          className: "navbarButton primary",
          position: "right" 
        },
      ],
    },
    // tagManager: {
    //   trackingID: "GTM-TKMGCBC",
    // },
    // prism: {
    //   theme: { plain: {}, styles: [] },
    //   // https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js
    //   additionalLanguages: ["shell-session", "http"],
    // },
    algolia: {
      appId: "002G1BUKXS",
      apiKey: "0a640be9644a4d830f96aed136d2a70b",
      indexName: "codat",
      contextualSearch: true,
    },
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
    "@docusaurus/plugin-sitemap",
    "docusaurus-plugin-dotenv",
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
      //overriding the standard docusaurus-theme-classic to provide custom schema
      path.resolve(__dirname, "./node_modules/@docusaurus/theme-classic"),
      {
        customCss: [
          require.resolve(
            "./node_modules/modern-normalize/modern-normalize.css"
          ),
          require.resolve("./src/styles/custom.scss"),
        ],
      },
    ],
    path.resolve(__dirname, "./node_modules/@docusaurus/theme-search-algolia"),
    "@docusaurus/theme-mermaid",
  ],
  markdown: {
    // In order for Mermaid code blocks in Markdown to work, you also need to enable the Remark plugin with this option
    mermaid: true,
  },
  customFields: {},
};
