const authFlow = require("./sidebars/auth-flow");

const useApi = require("./sidebars/use-the-api");

const products = require("./sidebars/products");
const usecases = require("./sidebars/usecases");

const lending = require("./sidebars/lending");
const bankfeeds = require("./sidebars/bank-feeds");
const commerce = require("./sidebars/sync-for-commerce");
const expenses = require("./sidebars/sync-for-expenses");
const payroll = require("./sidebars/payroll");
const payables = require("./sidebars/payables");

const accountingAPI = require("./sidebars/accounting-api");
const bankingAPI = require("./sidebars/banking-api");
const commerceAPI = require("./sidebars/commerce-api");

const integrationsAccounting = require("./sidebars/integrations-accounting");
const integrationsBanking = require("./sidebars/integrations-banking");
const integrationsCommerce = require("./sidebars/integrations-commerce");

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
          type: "link",
          label: "Invoice finance",
          href: "/lending/guides/invoice-finance/introduction",
        },
        {
          type: "link",
          label: "Loan qualification",
          href: "/lending/guides/loan-qualification/introduction",
        },
        {
          type: "link",
          label: "Bill pay",
          href: "/payables/guides/bill-pay/introduction",
        },
        {
          type: "link",
          label: "Bank transactions reconciliation",
          href: "/bank-feeds/guides/bank-feeds-tutorial",
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
      items: usecases,
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
          label: "Platform API reference",
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
      type: "category",
      label: "Integrations",
      collapsed: true,
      className: "top-level-item integrations",
      items: [
        "integrations/accounting/overview",
        "integrations/banking/overview",
        "integrations/commerce/overview",
        "bank-feeds/integrations/overview",
        "integrations/file-upload",
      ]
    },
    ...products,
  ],
  bankfeeds: bankfeeds,
  commerce: commerce,
  lending: lending,
  expenses: expenses,
  payroll: payroll,
  payables: payables,
  integrationsAccounting: integrationsAccounting,
  integrationsBanking: integrationsBanking,
  integrationsCommerce: integrationsCommerce,
  accountingAPI: accountingAPI,
  bankingAPI: bankingAPI,
  commerceAPI: commerceAPI,
};
