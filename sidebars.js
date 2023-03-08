const authFlow = require("./sidebars/authFlow");
const dataModel = require("./sidebars/dataModel");

const accountingApi = require("./sidebars/accounting-api");
const bankingAPI = require("./sidebars/banking-api");
const commerceAPI = require("./sidebars/commerce-api");
const bankfeeds = require("./sidebars/bank-feeds-api");
const assess = require("./sidebars/assess");
const sfc = require("./sidebars/sync-for-commerce");
const sfe = require("./sidebars/sync-for-expenses");

const integrations = require("./sidebars/integrations");

module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
      label: "What is Codat?",
      className: "hidden",
    },
    {
      type: "category",
      label: "Getting started",
      //label: '_getStarted',
      collapsed: true,
      className: "introduction",
      items: [
        "introduction/first-steps",
        "introduction/create-account",
        "introduction/migration",
        {
          type: "link",
          label: "Integration coverage",
          href: "https://knowledge.codat.io/supported-features/accounting",
        },
      ],
    },
    {
      type: "category",
      label: "Core concepts",
      //label: '_concepts',
      collapsed: true,
      className: "core",
      items: [
        "core-concepts/overview",
        "core-concepts/companies",
        "core-concepts/connections",
        "core-concepts/integrations",
        "core-concepts/data-type-settings",
        "core-concepts/status",
        {
          type: "link",
          href: "/codat-api",
          label: "Common API reference",
        },
      ],
    },
    {
      type: "category",
      label: "Using our API",
      //label: '_api',
      collapsed: true,
      className: "api",
      items: [
        "using-the-api/overview",
        {
          type: "category",
          label: "Basics",
          collapsed: false,
          items: [
            "using-the-api/authentication",
            "using-the-api/managing-companies",
            "using-the-api/modified-dates",
            "using-the-api/ordering-results",
            "using-the-api/paging",
            "using-the-api/querying",
            "using-the-api/queueing-data-syncs",
            "using-the-api/errors",
          ]
        },
        {
          type: "category",
          label: "Advanced",
          collapsed: true,
          items: [
            "using-the-api/push",
            "using-the-api/rate-limits",
            "using-the-api/optimizing-api-calls",
          ]
        },
        {
          type: "category",
          label: "Webhooks",
          collapsed: true,
          items: [
            "introduction/webhooks/core-rules-create",
            "introduction/webhooks/core-rules-types",
            "introduction/webhooks/core-rules-webhooks",
            "introduction/webhooks/core-rules-webhooksecurity",
            "introduction/webhooks/receive-webhooks-as-email-alerts",
          ],
        },
        {
          type: "link",
          href: "https://github.com/codatio/oas",
          label: "OpenAPI spec"
        },
        "introduction/change-policy",
      ],
    },
    {
      type: "category",
      label: "Authorization flow",
      //label: '_authFlow',
      collapsed: true,
      className: "auth",
      items: authFlow,
    },
    {
      type: "category",
      label: "Data model",
      collapsed: true,
      className: "data",
      items: dataModel,
    },
    {
      type: "category",
      label: "Other guides",
      collapsed: true,
      className: "other",
      items: [
        "other/developer-resources", 
        "other/file-upload",
        {
          type: "category",
          label: "Portal",
          collapsed: true,
          items: [
            "other/portal/dashboard",
            "other/portal/account-management",
            "other/portal/companies",
            "other/portal/developers",
            "other/portal/pull-and-push-history",
          ],
        },
        {
          type: "category",
          label: "User management",
          collapsed: true,
          items: [
            "other/user-management/adding-users",
            "other/user-management/user-roles",
            "other/user-management/sso",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Products",
      collapsed: true,
      className: "products",
      items: [
        {
          type: "link",
          label: "Accounting API",
          className: "product accounting",
          href: "/accounting-api/overview",
        },
        {
          type: "link",
          label: "Banking API",
          className: "product banking",
          href: "/banking-api/overview",
        },
        {
          type: "link",
          label: "Commerce API",
          className: "product commerce",
          href: "/commerce-api/overview",
        },
        {
          type: "link",
          label: "Bank Feeds API",
          className: "product bankfeed",
          href: "/bank-feeds-api/overview",
        },
        {
          type: "link",
          label: "Assess",
          className: "product assess",
          href: "/assess/overview",
        },
        {
          type: "link",
          label: "Sync for Expenses",
          className: "product sfe",
          href: "/sync-for-expenses/overview",
        },
        {
          type: "link",
          label: "Sync for Commerce",
          className: "product sfc",
          href: "/sfc/overview",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: true,
      className: "integrations",
      items: integrations,
    },
  ],
  accounting: accountingApi,
  banking: bankingAPI,
  commerce: commerceAPI,
  bankfeeds: bankfeeds,
  sfc: sfc,
  assess: assess,
  syncForExpenses: sfe,
};
