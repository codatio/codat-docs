module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Bill Pay",
    id: "payables/overview",
    className: "header  top-level-item products product sfpayables",
  },
  {
    type: "doc",
    id: "payables/get-started",
    customProps: {
      hr: true,
      section: "Prerequisites",
    },
  },
  {
    type: "doc",
    id: "payables/async/configure-customer",
    customProps: {
      hr: true,
      section: "Asynchronous solution",
    },
  },
  "payables/suppliers",
  "payables/bills",
  "payables/mapping",
  "payables/payments",
  {
    type: "doc",
    id: "payables/async/async-data-types",
    label: "Supported data types",
  },
  {
    type: "link",
    href: "/sync-for-payables-api",
    label: "API reference",
  },
  {
    type: "doc",
    id: "payables/bill-pay-kit",
    label: "Bill pay kit",
    customProps: {
      hr: true,
      section: "Synchronous solution",
    },
  },
  "payables/sync/configure-customer",
    {
      type: "doc",
      id: "payables/sync/sync-data-types",
      label: "Supported data types",
    },
    {
      type: "link",
      href: "/sync-for-payables-v2-api",
      label: "API reference",
    },  
  {
    type: "category",
    label: "Automate bill payment",
    customProps: {
      hr: true,
      section: "Guides",
    },
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "payables/guides/bill-pay/introduction",
        label: "Introduction",
      },
      "payables/guides/bill-pay/use-bill-pay-demo-app",
      "payables/guides/bill-pay/run-demo-app-locally",
      "payables/guides/bill-pay/how-the-demo-app-works",
    ],
  },
]
