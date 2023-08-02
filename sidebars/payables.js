module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Sync for Payables",
    href: "/payables/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Implementing bill pay",
    collapsed: true,
    items: [
      "payables/bills",
      "payables/mapping",
      "payables/payments",
    ],
  },
  {
    type: "category",
    label: "Bill pay tutorial",
    collapsed: true,
    items: [
      "payables/guides/bill-pay/introduction",
      "payables/guides/bill-pay/use-bill-pay-demo-app",
      "payables/guides/bill-pay/run-demo-app-locally",
      "payables/guides/bill-pay/how-the-demo-app-works",
    ],
  },
  {
    type: "link",
    href: "/payables-api",
    label: "API reference",
    customProps: {
      hr: true,
    },
  },
]
