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
    label: "Establish bank feed",
    collapsed: true,
    link: {
      type: 'doc',
      id: "bank-feeds/mapping/overview",
    },
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
    customProps: {
      hr: true,
      section: "Manage integrations",
    },
    items: [
      "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds",
      "bank-feeds/integrations/qbo/mapping",
    ],
  },
  {
    type: "category",
    label: "Sage",
    items: [
      "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds",
      "bank-feeds/integrations/sage/mapping",
    ],
  },
  {
    type: "link",
    href: "/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds",
    label: "Xero",
  },
  {
    type: "link",
    href: "/integrations/bank-feeds/netsuite-bank-feeds/netsuite-bank-feeds-setup",
    label: "Oracle NetSuite",
  },
  {
    type: "link",
    href: "/integrations/accounting/exact-online/accounting-exact-online",
    label: "Exact (NL)",
  },
  {
    type: "link",
    href: "/integrations/accounting/freeagent/accounting-freeagent",
    label: "FreeAgent",
  },
  {
    type: "doc",
    id: "bank-feeds/guides/bank-feeds-tutorial",
    customProps: {
      hr: true,
      section: "Guides",
    },
  },
  {
    type: "link",
    href: "/bank-feeds/troubleshooting",
    label: "Troubleshooting and FAQ",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "link",
    href: "/bank-feeds-api",
    label: "API reference",
  },
];