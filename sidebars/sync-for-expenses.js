module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Expenses",
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
  {
    type: "category",
    label: "Create transactions",
    collapsed: true,
    items: [
      "expenses/sync-process/expense-transactions",
      "expenses/sync-process/transfer-transactions",
      "expenses/sync-process/reimbursable-expense-transactions",
    ],
  },
  "expenses/sync-process/syncing-expenses",
  "expenses/sync-process/uploading-receipts",
  {
    type: "ref",
    label: "Dynamics 365 Business Central",
    customProps: {
      hr: true,
      section: "Expense integrations",
    },
    id: "integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral",
  },
  {
    type: "doc",
    label: "FreeAgent",
    id: "integrations/accounting/freeagent/accounting-freeagent"
  },
  {
    type: "doc",
    label: "Oracle NetSuite",
    id: "integrations/accounting/netsuite/accounting-netsuite"
  },
  {
    type: "doc",
    label: "QuickBooks Desktop",
    id: "integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop"
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
    id: "expenses/fx-management",
    label: "Expenses in foreign currency",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "link",
    label: "FAQs",
    href: "/expenses/faq",
  },
  {
    type: "link",
    label: "Data types",
    href: "/expenses/data-types",
  },
  {
    type: "link",
    href: "/sync-for-expenses-api#",
    label: "API reference",
  },
];
