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
    href: "/sfc/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Concepts",
    collapsed: true,
    items: [
      "sfc/sync-for-commerce-knowledge-base/initiating-a-sync",
      "sfc/sync-for-commerce-knowledge-base/monitoring-a-sync",
      "sfc/sync-for-commerce-knowledge-base/synchronization-schedule",
      "sfc/sync-for-commerce-knowledge-base/sfc-journal-entry-mapping",
      "sfc/sync-for-commerce-knowledge-base/sfc-sales-product-categories",
    ],
  },
  {
    type: "category",
    label: "Build guide",
    collapsed: true,
    items: [
      "sfc/build-with-sync-for-commerce/sync-for-commerce-prerequisites",
      "sfc/build-with-sync-for-commerce/sync-platform-selection",
      "sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration",
      "sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow",
    ],
  },
  {
    type: "category",
    label: "Mapping specifications",
    collapsed: true,
    items: [
      "sfc/mapping-specifications/overview",
      "sfc/mapping-specifications/xero-mapping-specification",
      "sfc/mapping-specifications/qbo-mapping-specification",
    ],
  },
  "sfc/error-documentation",
  "sfc/coming-soon",
  {
    type: "link",
    href: "/sync-for-commerce-api",
    label: "API reference",
  },
];
