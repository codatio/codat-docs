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
    label: "Get started",
    id: "bank-feeds/setup",
  },
  {
    type: "doc",
    label: "Create account",
    id: "bank-feeds/create-account",
    customProps: {
      hr: true,
      section: "Build your solution",
    },
  },
  {
    type: "category",
    label: "Map accounts",
    items: [
      "bank-feeds/mapping/codat-ui",
      "bank-feeds/mapping/api-mapping",
    ],
  },
  {
    type: "doc",
    label: "Push transactions",
    id: "bank-feeds/pushing-transactions",
  },
  {
    type: "category",
    label: "QuickBooks Online",
    items: [
      "bank-feeds/integrations/qbo/quickbooksonline",
      "bank-feeds/integrations/qbo/qbo-mapping",
    ],
    customProps: {
      hr: true,
      section: "Manage integrations",
    },
  },
  {
    type: "category",
    label: "Sage",
    items: [
      "bank-feeds/integrations/sage/sage",
      "bank-feeds/integrations/sage/sage-mapping",
    ],
  },
  {
    type: "category",
    label: "Xero",
    items: [
      "bank-feeds/integrations/xero/xero",
    ],
  },
  {
    type: "doc",
    id: "bank-feeds/guides/bank-feeds-tutorial",
    label: "Bank Feeds API for QBO reconciliation",
    customProps: {
      hr: true,
      section: "Guides",
    },
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
