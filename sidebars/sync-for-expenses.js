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
    href: "sync-for-expenses/overview",
    className: "header",
  },
  "sync-for-expenses/gettingstarted",
  "sync-for-expenses/configandcategorize",
  {
    type: "category",
    label: "Pushing expenses",
    collapsed: true,
    items: [
      "sync-for-expenses/sync-process/sync-process-explained",
      "sync-for-expenses/sync-process/expense-transactions",
      "sync-for-expenses/sync-process/syncing-expenses",
      "sync-for-expenses/sync-process/uploading-receipts",
    ],
  },
  {
    type: "link",
    href: "/sync-for-expenses-api",
    label: "API reference",
  },
];
