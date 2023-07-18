module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Sync for Expenses 2",
    href: "/sync-for-expenses-2/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Build your solution",
    collapsed: true,
    items: [
      "sync-for-expenses-2/build/connect",
      "sync-for-expenses-2/build/configure",
      "sync-for-expenses-2/build/create",
      "sync-for-expenses-2/build/sync",
      "sync-for-expenses-2/build/monitor",
      "sync-for-expenses-2/build/enhance",
    ],
  },
   "sync-for-expenses/sync-for-expenses-faq",
  {
    type: "link",
    href: "/sync-for-expenses-api",
    label: "API reference",
  },
];
