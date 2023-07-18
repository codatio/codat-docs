const authFlow = require("./sidebars/authFlow");
const dataModel = require("./sidebars/dataModel");

const accountingAPI = require("./sidebars/accounting-api");
const bankingAPI = require("./sidebars/banking-api");
const commerceAPI = require("./sidebars/commerce-api");
const assess = require("./sidebars/assess");

const lending = require("./sidebars/lending");
const bankfeeds = require("./sidebars/bank-feeds");
const sfc = require("./sidebars/sync-for-commerce");
const sfe = require("./sidebars/sync-for-expenses");
const sfp = require("./sidebars/sync-for-payroll");
const payables = require("./sidebars/payables");

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
        "get-started/first-steps",
        "get-started/first-ten-minutes",
        "get-started/libraries",
        "get-started/developer-resources",
        //"get-started/office-hours",
        "get-started/migration",
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
        id: "configure/portal/dashboard",
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
            "configure/user-management/adding-users",
            "configure/user-management/user-roles",
            "configure/user-management/sso",

          ],
        },
        {
          type: "category",
          label: "Plans",
          collapsed: true,
          items: [
            "configure/plans/free",
            "configure/create-account",
            "configure/portal/usage-and-billing",
          ],
        },
        "configure/portal/account-management",
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
            "configure/portal/companies",
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
            "configure/portal/pull-and-push-history",
          ],
        },
        "using-the-api/testing",
          ],
        },
        "introduction/testing",
        {
          type: "category",
          label: "Webhooks",
          collapsed: true,
          items: [
            "using-the-api/webhooks/core-rules-types",
            "using-the-api/webhooks/core-rules-create",
            "using-the-api/webhooks/core-rules-webhooks",
            "using-the-api/webhooks/core-rules-webhooksecurity",
            "using-the-api/webhooks/receive-webhooks-as-email",
          ],
        },
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
          label: "Best practices",
          collapsed: true,
          items: [
            "using-the-api/best-practices/implementing-a-mapping-page",
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
            "using-the-api/change-policy",
            "configure/portal/developers",
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
      type: "link",
      label: "Integrations",
      className: "top-level-item integrations",
      href: "/integrations/all-integrations",
    },
    {
      type: "link",
      label: "Accounting API",
      customProps: {
        hr: true,
      },
      className: "top-level-item products product accounting",
      href: "/accounting-api/overview",
    },
    {
      type: "link",
      label: "Assess",
      className: "top-level-item products product assess",
      href: "/assess/overview",
    },
    {
      type: "category",
      label: "Lending",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "lending/overview",
      },
      items: lending,
      customProps: {
        hr: true,
      },
    },
    {
      type: "link",
      label: "Banking API",
      className: "top-level-item products product banking",
      href: "/banking-api/overview",
    },
    {
      type: "link",
      label: "Bank Feeds API",
      className: "top-level-item products product bankfeed",
      href: "/bank-feeds-api/overview",
    },
    {
      type: "link",
      label: "Commerce API",
      className: "top-level-item products product commerce",
      href: "/commerce-api/overview",
    },
    {
      type: "link",
      label: "Sync for Expenses",
      className: "top-level-item products product sfe",
      href: "/sync-for-expenses/overview",
    },
    {
      type: "link",
      label: "Sync for Commerce",
      className: "top-level-item products product sfc",
      href: "/sfc/overview",
    },
    {
      type: "category",
      label: "Bank Feeds",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "bank-feeds/overview",
      },
      items: bankfeeds,
    },
    {
      type: "category",
      label: "Sync for Commerce",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "sfc/overview",
      },
      items: sfc,
    },
    {
      type: "category",
      label: "Sync for Expenses",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "sync-for-expenses/overview",
      },
      items: sfe,
    },
    {
      type: "category",
      label: "Sync for Payroll",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "sync-for-payroll/overview",
      },
      items: sfp,
    },
    {
      type: "category",
      label: "Payables",
      collapsed: true,
      className: "top-level-item products",
      link: {
        type: 'doc',
        id: "payables/overview",
      },
      items: payables,
    },
  ],
  accountingAPI: accountingAPI,
  bankingAPI: bankingAPI,
  commerceAPI: commerceAPI,
  bankfeeds: bankfeeds,
  sfc: sfc,
  assess: assess,
  sfe: sfe,
  sfp: sfp,
  payables: payables,
  integrations: integrations,
};
