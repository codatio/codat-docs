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
    type: "doc",
    id: "bank-feeds/data-types",
    label: "Data types",
    customProps: {
      hr: true,
    },
  },
  {
    type: "link",
    href: "/bank-feeds-api",
    label: "API reference",
  },
];
