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
    type: "category",
    label: "Setup",
    collapsed: true,
    items: [
      "commerce/learn/initiating-a-sync",
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
    type: "doc",
    label: "FAQs",
    id: "commerce/error-documentation",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "link",
    href: "/sync-for-commerce-api",
    label: "API reference",
  },
  "commerce/coming-soon",
];
