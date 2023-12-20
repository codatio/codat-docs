module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Sync for Expenses",
    id: "expenses/overview",
    className: "header  top-level-item products product sfe",
  },
  {
    type: "doc",
    id: "expenses/getting-started",
    label: "Get started",
  },
  {
    type: "doc",
    id: "expenses/configure-customer",
    customProps: {
      hr: true,
      section: "Build your solution",
    },
  },
  "expenses/config-and-categorize",
  "expenses/sync-process/expense-transactions",
  "expenses/sync-process/syncing-expenses",
  "expenses/sync-process/uploading-receipts",
  {
    type: "ref",
    label: "Oracle NetSuite",
    customProps: {
      hr: true,
      section: "Expense integrations",
    },
    id: "integrations/accounting/netsuite/accounting-netsuite",
  },
  {
    type: "doc",
    label: "QuickBooks Online",
    id: "integrations/accounting/quickbooksonline/accounting-quickbooksonline"
  },
  {
    type: "doc",
    label: "Xero",
    id: "integrations/accounting/xero/accounting-xero"
  },
  {
    type: "doc",
    label: "Dynamics 365 Business Central",
    id: "integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral"
  },
  {
    type: "doc",
    id: "expenses/faq",
    label: "FAQs",
    customProps: {
      hr: true,
    },
  },
  {
    type: "link",
    label: "Supported data types",
    href: "/expenses/data-types",
  },
  {
    type: "link",
    href: "/sync-for-expenses-api#",
    label: "API reference",
  },
];
