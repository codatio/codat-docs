const authFlow = require("./sidebars/authFlow");
const dataModel = require("./sidebars/dataModel");

const accountingAPI = require("./sidebars/accounting-api");
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
      className: "top-level-item hidden",
    },
    {
      type: "category",
      label: "Get started",
      collapsed: true,
      className: "top-level-item introduction",
      link: {
        type: 'doc',
        id: "get-started/overview",
      },
      items: [
        "introduction/first-steps",
        "introduction/first-ten-minutes",
        "introduction/libraries",
        "other/developer-resources",
        "introduction/office-hours",
        "introduction/migration",
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsed: true,
      className: "top-level-item other",
      link: {
        type: 'doc',
        id: "guides/overview",
      },
      items: [
        {
          type: "category",
          label: "Loan qualification",
          collapsed: true,
          items: [
            "guides/loan-qualification/introduction",
            "guides/loan-qualification/setting-up",
            "guides/loan-qualification/process-loan",
            "guides/loan-qualification/uw-decision",
          ],
        },
        {
          type: "category",
          label: "Invoice financing",
          collapsed: true,
          items: [
            "guides/invoice-finance/introduction",
            "guides/invoice-finance/setting-up",
            "guides/invoice-finance/process-invoice",
            "guides/invoice-finance/inv-fin-decision",
          ],
        },
        {
          type: "category",
          label: "Bill pay",
          collapsed: true,
          items: [
            "guides/bill-pay/introduction",
            "guides/bill-pay/use-bill-pay-demo-app",
            "guides/bill-pay/run-demo-app-locally",
            "guides/bill-pay/how-the-demo-app-works",
          ],
        },
        {
          type: "link",
          href: "/guides/bank-feeds-tutorial",
          label: "Bank transactions reconciliation"
        },
      ],
    },
    {
      type: "category",
      label: "Learn",
      collapsed: true,
      customProps: {
        hr: true,
      },
      className: "top-level-item core",
      link: {
        type: 'doc',
        id: "core-concepts/overview",
      },
      items: [
        "core-concepts/companies",
        "core-concepts/connections",
        "core-concepts/integrations",
        "core-concepts/data-type",
        "core-concepts/status", // @tooo: move into using api?
        {
          type: "link",
          href: "/codat-api",
          className: "external",
          label: "Common API reference",
        },
      ],
    },
    {
      type: "category",
      label: "Configure",
      collapsed: true,
      className: "top-level-item config",
      link: {
        type: 'doc',
        id: "other/portal/dashboard",
      },
      items: [
        "configure/products",
        "configure/integrations",
        "core-concepts/data-type-settings",
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
        {
          type: "category",
          label: "Plans",
          collapsed: true,
          items: [
            "configure/plans/free",
            "introduction/create-account",
            "other/portal/usage-and-billing",
          ],
        },
        "other/portal/account-management",
      ],
    },
    {
      type: "category",
      label: "Use our API",
      collapsed: true,
      className: "top-level-item api",
      link: {
        type: 'doc',
        id: "using-the-api/overview",
      },
      items: [
        "using-the-api/authentication",
        {
          type: "category",
          label: "Manage companies",
          collapsed: true,
          items: [
            "using-the-api/managing-companies",
            "other/portal/companies",
            // manage connections
          ],
        },
        {
          type: "category",
          label: "Get data",
          collapsed: true,
          items: [
            "using-the-api/get-data",
            "using-the-api/queueing-data-syncs",
            "using-the-api/pull-history",
            "using-the-api/querying",
            "using-the-api/paging",
            "using-the-api/ordering-results",
            "using-the-api/modified-dates",
          ],
        },
        {
          type: "category",
          label: "Modify data",
          collapsed: true,
          items: [
            "using-the-api/push",
            "other/portal/pull-and-push-history",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting",
          collapsed: true,
          items: [
            "using-the-api/errors",
            "using-the-api/rate-limits",
            "using-the-api/optimizing-api-calls",
          ],
        },
        "introduction/testing",
        {
          type: "category",
          label: "Supplemental data",
          collapsed: true,
          items: [
            "using-the-api/supplemental-data/overview",
            "using-the-api/supplemental-data/usecases",
          ],
        },
        {
          type: "category",
          label: "Troubleshooting",
          collapsed: true,
          items: [
            "using-the-api/errors",
            "using-the-api/rate-limits",
            "using-the-api/optimizing-api-calls",
          ],
        },
        {
          type: "category",
          label: "Change management",
          collapsed: true,
          items: [
            "introduction/change-policy",
            "other/portal/developers",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Auth flow",
      collapsed: true,
      className: "top-level-item auth",
      link: {
        type: 'doc',
        id: "auth-flow/overview",
      },
      items: authFlow,
    },
    {
      type: "category",
      label: "Use cases",
      customProps: {
        hr: true,
      },
      collapsed: true,
      className: "top-level-item usecases",
      link: {
        type: 'doc',
        id: "usecases/overview",
      },
      items: [
        "usecases/summary/lending",
        "usecases/summary/managing-expenses",
        "usecases/summary/dashboarding",
        {
          type: "category",
          label: "Automating payables",
          collapsed: true,
          className: "top-level-item",
          items: [
            "usecases/summary/automating-payables",
            {
              type: "link",
              label: "Demo app guide",
              href: "https://docs.codat.io/guides/bill-pay/introduction",
            },
            {
              type: "category",
              label: "Implementing bill pay",
              collapsed: true,
              className: "top-level-item",
              items: [
                "usecases/bill-pay/overview",
                "usecases/bill-pay/bills",
                "usecases/bill-pay/mapping",
                "usecases/bill-pay/payments",
              ],
            }
          ],
        },
        "usecases/summary/automating-receivables",
        "usecases/summary/integrating-commerce-data",
        "usecases/summary/managing-payroll",
        "usecases/summary/reconciling-bank-transactions",
      ],
    },
    {
      type: "link",
      label: "Integrations",
      className: "top-level-item integrations",
      href: "/integrations/all-integrations",
    },
    {
      type: "category",
      label: "Data model",
      collapsed: true,
      className: "top-level-item data",
      link: {
        type: 'doc',
        id: "data-model/all-datatypes",
      },
      items: dataModel,
    },
    {
      type: "category",
      label: "Products",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "products/overview",
      },
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
  ],
  accountingAPI: accountingAPI,
  bankingAPI: bankingAPI,
  commerceAPI: commerceAPI,
  bankfeeds: bankfeeds,
  sfc: sfc,
  assess: assess,
  sfe: sfe,
  integrations: integrations,
};
