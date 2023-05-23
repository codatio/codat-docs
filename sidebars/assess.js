module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Assess",
    href: "/assess/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      "assess/get-started",
      {
        type: "link",
        label: "Loan qualification",
        href: "/guides/loan-qualification/introduction",
      },
      {
        type: "category",
        label: "Migration Guides",
        collapsed: true,
        items: [
          "assess/guides/migration-guides/deprecation-account-categories",
          "assess/guides/migration-guides/deprecation-account-categories-api",
          "assess/guides/migration-guides/deprecation-account-categories-portal",
          "assess/guides/migration-guides/deprecation-account-categories-excel",
        ],
      }, 
    ],
  },
  {
    type: "category",
    label: "Enhanced financials",
    collapsed: true,
    items: [
      "assess/enhanced-financials/overview",
      "assess/enhanced-financials/categorize-accounts",
      "assess/enhanced-financials/supported-account-categories",
      { type: "link", label: "Enhanced profit and loss accounts", href: "/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss" },
      { type: "link", label: "Enhanced balance sheet accounts", href: "/assess-api#/operations/get-accounts-for-enhanced-balance-sheet" },
    ],
  },
  {
    type: "category",
    label: "Enhanced cash flow",
    collapsed: true,
    items: [
      "assess/enhanced-cash-flow/overview",
      { type: "link", label: "Enhanced cash flow transactions", href: "/assess-api#/operations/get-enhanced-cash-flow-transactions" },
    ],
  },
  {
    type: "category",
    label: "Enhanced invoices",
    collapsed: true,
    items: [
      "assess/enhanced-invoices/overview",
      { type: "link", label: "Enhanced invoices report", href: "/assess-api#/operations/get-enhanced-invoices-report" },
    ],
  },
  {
    type: "category",
    label: "Data integrity",
    collapsed: true,
    items: [
      "assess/data-integrity/overview",
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
      "assess/portal/categorize-accounts"
    ],
  },
  {
    type: "category",
    label: "Excel download",
    collapsed: true,
    items: [
      "assess/excel/overview",
      "assess/excel/assess-report",
      "assess/excel/audit-report",
      "assess/excel/enhanced-financials-report",
      "assess/excel/enhanced-invoices-report",
      "assess/excel/enhanced-cash-flow-report",
    ],
  },
  'assess/troubleshooting',
  {
    type: "link",
    href: "/assess-api",
    label: "Assess API reference",
  },
];
