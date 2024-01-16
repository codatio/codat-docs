module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Sync for Commerce",
    id: "commerce/overview",
    className: "header top-level-item products product sfc",
  },
  {
    type: "doc",
    id: "commerce/get-started",
  },
  {
    type: "doc",
    id: "commerce/setup",
    customProps: {
      hr: true,
      section: "Build your solution",
    },
  },
  {
    type: "doc",
    id: "commerce/merchant-configuration",
  },
  {
    type: "doc",
    id: "commerce/data-synchronization",
  },
  "commerce/advanced-setup",
  "commerce/advanced-data-sync",
  {
    type: "ref",
    label: "QuickBooks Online",
    customProps: {
      hr: true,
      section: "Supported integrations",
    },
    id: "integrations/accounting/quickbooksonline/accounting-quickbooksonline",
  },
  {
    type: "doc",
    label: "Xero",
    id: "integrations/accounting/xero/accounting-xero"
  },
  {
    type: "doc",
    label: "MYOB Business",
    id: "integrations/accounting/myob/accounting-myob"
  },
  {
    type: "doc",
    label: "FreeAgent",
    id: "integrations/accounting/freeagent/accounting-freeagent"
  },
  {
    type: "doc",
    label: "Exact Online",
    id: "integrations/accounting/exact-online/accounting-exact-online"
  },
  {
    type: "doc",
    label: "Clover",
    id: "integrations/commerce/clover/commerce-clover"
  },
  {
    type: "doc",
    label: "Lightspeed Restaurant",
    id: "integrations/commerce/lightspeed-k/commerce-lightspeed-k"
  },
  {
    type: "doc",
    label: "Shopify",
    id: "integrations/commerce/shopify/commerce-shopify"
  },
  {
    type: "doc",
    label: "Zettle",
    id: "integrations/commerce/zettle/commerce-zettle"
  },
  {
    type: "doc",
    label: "Sync schedule",
    id: "commerce/synchronization-schedule",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "doc",
    label: "Troubleshooting and FAQs",
    id: "commerce/error-documentation",
  },
  {
    type: "link",
    href: "/sync-for-commerce-api",
    label: "API reference",
  },
];
