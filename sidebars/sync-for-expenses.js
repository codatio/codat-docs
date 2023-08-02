module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Sync for Expenses",
    href: "/expenses/overview",
    className: "header",
  },
  "expenses/getting-started",
  {
    type: "link",
    href: "/expenses/config-and-categorize",
    label: "Configure",
    customProps: {
      hr: true,
    },
  },
  {
    type: "category",
    label: "Pushing expenses",
    collapsed: true,
    items: [
      "expenses/sync-process/sync-process-explained",
      "expenses/sync-process/expense-transactions",
      "expenses/sync-process/syncing-expenses",
      "expenses/sync-process/uploading-receipts",
      "expenses/sync-process/updating-expenses",
    ],
  },
  "expenses/monitoring-a-sync",
  {
    type: "link",
    href: "/expenses/faq",
    label: "FAQs",
    customProps: {
      hr: true,
    },
  },
  {
    type: "link",
    href: "/sync-for-expenses-api",
    label: "API reference",
  },
];
