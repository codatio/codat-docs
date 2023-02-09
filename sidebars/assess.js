module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  //guides
  "assess/overview",
  "assess/get-started",
  //getting started
  // launch checklist

  //use cases
  // underwriting
  {
    type: "category",
    label: "Categories",
    collapsed: true,
    items: [
      "assess/categories/categories",
      "assess/categories/api-categorization-of-accounts",
    ],
  },
  {
    type: "category",
    label: "Reports",
    collapsed: true,
    items: [
      "assess/reports/reporting-structure",
      {
        type: "category",
        label: "Enhanced cash flow",
        collapsed: true,
        items: [
          "assess/reports/enhanced-cash-flow-report/overview",
          "assess/reports/enhanced-cash-flow-report/transactions",
        ],
      },
      {
        type: "category",
        label: "Enhanced financials",
        collapsed: true,
        items: [
          "assess/reports/enhanced-financials/financials",
          "assess/reports/enhanced-financials/balance-sheet",
          "assess/reports/enhanced-financials/profit-and-loss",
        ],
      },
      {
        type: "category",
        label: "Banking",
        collapsed: true,
        items: [
          "assess/reports/banking/overview",
          "assess/reports/banking/banking-account-balances",
          "assess/reports/banking/banking-account-inflows-and-outflows",
        ],
      },
      "assess/reports/audit-report",
      "assess/reports/excel-reports",
    ],
  },
  {
    type: "category",
    label: "Data integrity",
    collapsed: true,
    items: [
      "assess/data-integrity/data-integrity",
      "assess/data-integrity/api-data-integrity",
    ],
  },

  {
    type: "category",
    label: "Metrics",
    collapsed: true,
    items: [
      {
        type: "category",
        label: "Accounting metrics",
        collapsed: true,
        items: [
          "assess/metrics/accounting/overview",
          "assess/metrics/accounting/api-financial-metrics",
          "assess/metrics/accounting/api-marketing-metrics",
        ],
      },
      {
        type: "category",
        label: "Commerce metrics",
        collapsed: true,
        items: [
          "assess/metrics/commerce/overview",
          "assess/metrics/commerce/api-orders",
          "assess/metrics/commerce/api-revenue",
          "assess/metrics/commerce/api-refunds",
          "assess/metrics/commerce/api-lifetime-value",
          "assess/metrics/commerce/api-customer-retention",
        ],
      },
    ],
  },
  {
    type: "category",
    label: "Assess in the Portal",
    collapsed: true,
    items: [
      "assess/portal/overview",
      "assess/portal/data-integrity",
      "assess/portal/categorization-of-accounts",
    ],
  },
  'assess/troubleshooting',
  {
    type: "link",
    href: "/assess-api",
    label: "Assess API reference",
  },
];
