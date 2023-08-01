module.exports = [
 {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Lending",
    href: "/lending/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      "lending/get-started",
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
          "lending/guides/migration-guides/deprecation-account-categories",
          "lending/guides/migration-guides/deprecation-account-categories-api",
          "lending/guides/migration-guides/deprecation-account-categories-portal",
          "lending/guides/migration-guides/deprecation-account-categories-excel",
        ],
      }, 
    ],
  },
  {
    type: "category",
    label: "Enhanced financials",
    collapsed: true,
    items: [
      "lending/enhanced-financials/overview",
      "lending/enhanced-financials/categorize-accounts",
      "lending/enhanced-financials/supported-account-categories",
      { type: "link", label: "Enhanced profit and loss accounts", href: "/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss" },
      { type: "link", label: "Enhanced balance sheet accounts", href: "/assess-api#/operations/get-accounts-for-enhanced-balance-sheet" },
    ],
  },
  {
    type: "category",
    label: "Enhanced cash flow",
    collapsed: true,
    items: [
      "lending/enhanced-cash-flow/overview",
      { type: "link", label: "Enhanced cash flow transactions", href: "/assess-api#/operations/get-enhanced-cash-flow-transactions" },
    ],
  },
  {
    type: "category",
    label: "Enhanced invoices",
    collapsed: true,
    items: [
      "lending/enhanced-invoices/overview",
      { type: "link", label: "Enhanced invoices report", href: "/assess-api#/operations/get-enhanced-invoices-report" },
    ],
  },
  {
    type: "category",
    label: "Enhanced liabilties",
    collapsed: true,
    items: [
      { type: "link", label: "Enhanced liabilties loan summary", href: "/assess-api#/operations/get-loan-summary" },
      { type: "link", label: "Enhanced liabilties loan transactions", href: "/assess-api#/operations/list-loan-transactions" },
    ],
  },
  {
    type: "category",
    label: "Data integrity",
    collapsed: true,
    items: [
      "lending/data-integrity/overview",
      "lending/data-integrity/api-data-integrity",
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
          "lending/metrics/accounting/overview",
          "lending/metrics/accounting/api-financial-metrics",
          "lending/metrics/accounting/api-marketing-metrics",
        ],
      },
      {
        type: "category",
        label: "Commerce metrics",
        collapsed: true,
        items: [
          "lending/metrics/commerce/overview",
          "lending/metrics/commerce/api-orders",
          "lending/metrics/commerce/api-revenue",
          "lending/metrics/commerce/api-refunds",
          "lending/metrics/commerce/api-lifetime-value",
          "lending/metrics/commerce/api-customer-retention",
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
  {
    type: "category",
    label: "Liabilities",
    collapsed: true,
    items: [
      "assess/loans/loan-transactions",
    ],
  },
  'assess/troubleshooting',
  {
    type: "link",
    href: "/assess-api",
    label: "Assess API reference",
  },
];
