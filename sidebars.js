const authFlow = require("./sidebars/auth-flow");

const useApi = require("./sidebars/use-the-api");

const products = require("./sidebars/products");

const accountingAPI = require("./sidebars/accounting-api");
const bankingAPI = require("./sidebars/banking-api");
const commerceAPI = require("./sidebars/commerce-api");
const assess = require("./sidebars/assess");
const lending = require("./sidebars/lending");
const bankfeeds = require("./sidebars/bank-feeds");
const commerce = require("./sidebars/sync-for-commerce");
const expenses = require("./sidebars/sync-for-expenses");
const payroll = require("./sidebars/payroll");
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
      className: "top-level-item get-started",
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
      className: "top-level-item tutorials",
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
      label: "Use cases",
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
      type: "category",
      label: "Learn",
      collapsed: true,
      customProps: {
        hr: true,
      },
      className: "top-level-item learn",
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
      items: useApi,
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
    ...products,
  ],
  accountingAPI: accountingAPI,
  bankingAPI: bankingAPI,
  commerceAPI: commerceAPI,
  bankfeeds: bankfeeds,
  commerce: commerce,
  assess: assess,
  lending: lending,
  expenses: expenses,
  payroll: payroll,
  payables: payables,
  integrations: integrations,
};
