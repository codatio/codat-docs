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
const supplierEnablement = require("./sidebars/supplier-enablement");

const accountingAPI = require("./sidebars/accounting-api");
const bankingAPI = require("./sidebars/banking-api");
const commerceAPI = require("./sidebars/commerce-api");

const integrationsAccounting = require("./sidebars/integrations-accounting");
const integrationsBanking = require("./sidebars/integrations-banking");
const integrationsCommerce = require("./sidebars/integrations-commerce");
const integrationsBankFeeds = require("./sidebars/integrations-bank-feeds");
const enterprise = require("./sidebars/enterprise");

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
      className: "top-level-item top-level-item-list get-started",
      link: {
        type: 'doc',
        id: "get-started/overview",
      },
      items: [
        "get-started/first-steps",
        //"get-started/first-ten-minutes",
        "get-started/libraries",
        "get-started/developer-resources",
        //"get-started/office-hours",
        "glossary",
        "get-started/migration",
        "get-started/accounting-for-beginners",
      ],
    },
    {
      type: "doc",
      label: "Tutorials",
      className: "top-level-item top-level-item-single tutorials",
      id: "guides/overview",
    },
    {
      type: "category",
      label: "Use cases",
      collapsed: true,
      className: "top-level-item top-level-item-list usecases",
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
      className: "top-level-item top-level-item-list learn",
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
          href: "/platform-api",
          className: "external",
          label: "Platform API reference",
        },
      ],
    },
    {
      type: "category",
      label: "Configure",
      collapsed: true,
      className: "top-level-item top-level-item-list config",
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
       // {
       //   type: "category",
       //   label: "Plans",
       //   collapsed: true,
       //   items: [
       //     "configure/plans/free",
       //     "configure/create-account",
       //     "configure/portal/usage-and-billing",
       //   ],
       // },
        "configure/create-account",
        "configure/portal/account-management",
      ],
    },
    {
      type: "category",
      label: "Use our API",
      collapsed: true,
      className: "top-level-item top-level-item-list api",
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
      className: "top-level-item top-level-item-list auth",
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
      className: "top-level-item top-level-item-list integrations",
      items: [
        "integrations/accounting/overview",
        "integrations/banking/overview",
        "integrations/commerce/overview",
        {
          type: "doc",
          id: "integrations/bank-feeds/overview",
          label: "Bank feeds",
        },
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
  integrationsBankFeeds: integrationsBankFeeds,
  enterprise: enterprise,
  supplierEnablement: supplierEnablement,
  //accountingAPI: accountingAPI,
  //bankingAPI: bankingAPI,
  //commerceAPI: commerceAPI,
};
