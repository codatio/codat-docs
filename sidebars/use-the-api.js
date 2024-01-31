module.exports = [
  "using-the-api/authentication",
  {
    type: "category",
    label: "Manage companies",
    collapsed: true,
    items: [
      "using-the-api/managing-companies",
      "configure/portal/companies",
      // manage connections
    ],
  },
  {
    type: "category",
    label: "Get data",
    collapsed: true,
    items: [
      "using-the-api/get-data",
      "using-the-api/queueing-data-syncs",
      "using-the-api/pull-history",
    ],
  },
  {
    type: "category",
    label: "Refine data",
    collapsed: true,
    items: [
      "using-the-api/querying",
      "using-the-api/paging",
      "using-the-api/ordering-results",
      "using-the-api/modified-dates",
      {
        type: "category",
        label: "Supplemental data",
        collapsed: true,
        items: [
          "using-the-api/supplemental-data/overview",
          "using-the-api/supplemental-data/usecases",
        ],
      },
      "using-the-api/custom-data",
    ],
  },
  {
    type: "category",
    label: "Modify data",
    collapsed: true,
    items: [
      "using-the-api/push",
      "configure/portal/pull-and-push-history",
    ],
  },
  {
    type: "category",
    label: "Webhooks",
    collapsed: true,
    items: [
      "using-the-api/webhooks/core-rules-types",
      "using-the-api/webhooks/core-rules-create",
      "using-the-api/webhooks/core-rules-webhooks",
      "using-the-api/webhooks/core-rules-webhooksecurity",
      "using-the-api/webhooks/receive-webhooks-as-email",
    ],
  },
  {
    type: "category",
    label: "Tips and guidance",
    collapsed: true,
    items: [
      "using-the-api/rate-limits",
      "using-the-api/optimizing-api-calls",
      "using-the-api/testing",
      "using-the-api/best-practices/implementing-a-mapping-page",
      "using-the-api/best-practices/client-side-data-storage",
    ],
  },
  "using-the-api/errors",
  {
    type: "category",
    label: "Change management",
    collapsed: true,
    items: [
      "using-the-api/change-policy",
      "configure/portal/developers",
    ],
  },
];