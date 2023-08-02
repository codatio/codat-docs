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
    href: "payables/overview",
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
        type: "link",
        label: "Demo app guide",
        href: "https://docs.codat.io/guides/bill-pay/introduction",
    },
    {
        type: "link",
        href: "/payables-api",
        label: "API reference",
    },
]
