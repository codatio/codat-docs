module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  "sfc/overview",
  {
    type: "category",
    label: "Concepts",
    collapsed: true,
    items: [
      "sfc/sync-for-commerce-knowledge-base/initiating-a-sync",
      "sfc/sync-for-commerce-knowledge-base/monitoring-a-sync",
      "sfc/sync-for-commerce-knowledge-base/sfc-journal-entry-mapping",
      "sfc/sync-for-commerce-knowledge-base/sfc-sales-product-categories",
      "sfc/sync-for-commerce-knowledge-base/sync-data-model",
      "sfc/sync-for-commerce-knowledge-base/synchronization-schedule",
    ],
  },
  {
    type: "category",
    label: "Build guide",
    collapsed: true,
    items: [
      "sfc/build-with-sync-for-commerce/sync-for-commerce-prerequisites",
      "sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow",
      "sfc/build-with-sync-for-commerce/functional-examples-of-data",
      "sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration",
      "sfc/build-with-sync-for-commerce/sync-data-pushing",
      "sfc/build-with-sync-for-commerce/sync-platform-selection",
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
  {
    type: "category",
    label: "Sync merchant configuration",
    collapsed: true,
    items: [
      "sfc/sync-merchant-configuration/overview",
      "sfc/sync-merchant-configuration/sync-your-own-merchant-journey",
    ],
  },
  "sfc/error-documentation",
  "sfc/sync-for-commerce-faqs",
  "sfc/coming-soon",
];
