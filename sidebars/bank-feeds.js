module.exports = [
 {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Bank Feeds API",
    id: "bank-feeds/overview",
    className: "header top-level-item products product bankfeed",
  },
  {
    type: "doc",
    label: "Product setup",
    id: "bank-feeds/setup",
  },
  {
    type: "category",
    label: "Mapping",
    items: [
      "bank-feeds/mapping",
      "bank-feeds/mapping/codat-ui",
      "bank-feeds/mapping/api-mapping",
      "bank-feeds/mapping/qbo-mapping",
      "bank-feeds/mapping/sage-mapping",
    ],
  },
  {
    type: "doc",
    label: "Pushing transactions",
    id: "bank-feeds/pushing-transactions",
  },
  {
    type: "doc",
    id: "bank-feeds/guides/bank-feeds-tutorial",
    label: "Tutorial",
  },
  {
    type: "doc",
    label: "QuickBooks Online",
    customProps: {
      hr: true,
      section: "Bank feeds integrations",
    },
    id: "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds",
  },
  {
    type: "doc",
    label: "Sage",
    id: "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds",
  },
  {
    type: "doc",
    label: "Xero",
    id: "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds",
  },
  {
    type: "link",
    href: "/bank-feeds-api",
    label: "API reference",
    customProps: {
      hr: true,
    },
  },
];
