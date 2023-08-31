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
    label: "Product setup",
    id: "commerce/setup",
  },
  {
    type: "doc",
    label: "Merchant configuration",
    id: "commerce/merchant-configuration",
  },
  {
    type: "doc",
    label: "Data sync setup",
    id: "commerce/data-synchronization",
  },
  {
    type: "category",
    label: "Advanced features",
    collapsed: true,
    items: [
      "commerce/advanced-setup",
      "commerce/advanced-data-sync",
    ],
  },
  // {
  //   type: "category",
  //   label: "Concepts",
  //   collapsed: true,
  //   items: [
  //     "commerce/learn/initiating-a-sync",
  //     "commerce/learn/monitoring-a-sync",
  //     "commerce/synchronization-schedule",
  //     "commerce/learn/sfc-journal-entry-mapping",
  //     "commerce/learn/sfc-sales-product-categories",
  //   ],
  // },
  // {
  //   type: "category",
  //   label: "Build guide",
  //   collapsed: true,
  //   items: [
  //     "commerce/build/sync-for-commerce-prerequisites",
  //     "commerce/build/sync-platform-selection",
  //     "commerce/build/implementing-codats-no-code-merchant-configuration",
  //     "commerce/build/customizing-the-sync-configuration-flow",
  //   ],
  // },
  // {
  //   type: "category",
  //   label: "Mapping specifications",
  //   collapsed: true,
  //   items: [
  //     "commerce/mapping-specifications/overview",
  //     "commerce/mapping-specifications/xero-mapping-specification",
  //     "commerce/mapping-specifications/qbo-mapping-specification",
  //   ],
  // },
  {
    type: "ref",
    label: "QuickBooks Online",
    customProps: {
      hr: true,
      section: "Sync for Commerce integrations",
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
    label: "Sync schedule",
    id: "commerce/synchronization-schedule",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "doc",
    label: "FAQs",
    id: "commerce/error-documentation",
  },
  {
    type: "link",
    href: "/sync-for-commerce-api",
    label: "API reference",
  },
];
