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
    href: "expenses/overview",
    className: "header",
  },
  "expenses/getting-started",
  "expenses/config-and-categorize",
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
  {
    type: "link",
    href: "/commerce/learn/monitoring-a-sync",
    label: "Monitoring a sync",
  },
   "expenses/faq",
  {
    type: "link",
    href: "/sync-for-expenses-api",
    label: "API reference",
  },
];
