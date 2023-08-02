module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Sync for Commerce",
    href: "commerce/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Concepts",
    collapsed: true,
    items: [
      "commerce/learn/initiating-a-sync",
      "commerce/learn/monitoring-a-sync",
      "commerce/learn/synchronization-schedule",
      "commerce/learn/sfc-journal-entry-mapping",
      "commerce/learn/sfc-sales-product-categories",
    ],
  },
  {
    type: "category",
    label: "Build guide",
    collapsed: true,
    items: [
      "commerce/build/sync-for-commerce-prerequisites",
      "commerce/build/sync-platform-selection",
      "commerce/build/implementing-codats-no-code-merchant-configuration",
      "commerce/build/customizing-the-sync-configuration-flow",
    ],
  },
  {
    type: "category",
    label: "Mapping specifications",
    collapsed: true,
    items: [
      "commerce/mapping-specifications/overview",
      "commerce/mapping-specifications/xero-mapping-specification",
      "commerce/mapping-specifications/qbo-mapping-specification",
    ],
  },
  "commerce/error-documentation",
  "commerce/coming-soon",
  {
    type: "link",
    href: "/sync-for-commerce-api",
    label: "API reference",
  },
];
