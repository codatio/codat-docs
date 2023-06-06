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
      label: "Getting started",
      collapsed: true,
      className: "top-level-item introduction",
      items: [
        "introduction/first-steps",
        "introduction/first-ten-minutes",
        "introduction/libraries",
        "introduction/create-account",
        "introduction/migration",
        {
          type: "link",
          label: "Integration coverage",
          href: "https://knowledge.codat.io/supported-features/accounting",
        },
        "introduction/office-hours",
        "other/developer-resources",
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: true,
      className: "top-level-item other",
      items: [
        "guides/overview",
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
      ],
    },
    {
      type: "category",
      label: "Core concepts",
      collapsed: true,
      className: "top-level-item core",
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
        {
          type: "category",
          label: "Using the portal",
          collapsed: true,
          items: [
            "other/portal/dashboard",
            "other/portal/account-management",
            "other/portal/usage-and-billing",
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
      label: "Using our API",
      collapsed: true,
      className: "top-level-item api",
      items: [
        "using-the-api/overview",
        "using-the-api/authentication",
        "using-the-api/managing-companies",
        "introduction/testing",
        {
          type: "category",
          label: "Pulling data",
          collapsed: true,
          items: [
            "using-the-api/querying",
            "using-the-api/paging",
            "using-the-api/ordering-results",
            "using-the-api/modified-dates",
          ],
        },
        "using-the-api/queueing-data-syncs",
        "using-the-api/push",
        "using-the-api/errors",
        "using-the-api/rate-limits",
        "using-the-api/optimizing-api-calls",
        {
          type: "category",
          label: "Webhooks",
          collapsed: true,
          items: [
            "introduction/webhooks/core-rules-types",
            "introduction/webhooks/core-rules-create",
            "introduction/webhooks/core-rules-webhooks",
            "introduction/webhooks/core-rules-webhooksecurity",
            "introduction/webhooks/receive-webhooks-as-email",
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
      label: "Data model",
      collapsed: true,
      className: "top-level-item data",
      items: dataModel,
    },
    {
      type: "category",
      label: "Authorization flow",
      collapsed: true,
      className: "top-level-item auth",
      items: authFlow,
    },
    {
      type: "category",
      label: "Use cases",
      collapsed: true,
      className: "top-level-item usecases",
      items: [
        "usecases/overview",
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
      label: "Products",
      collapsed: true,
      className: "top-level-item products",
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
