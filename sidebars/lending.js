module.exports = [
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
      { type: "link", label: "Enhanced profit and loss accounts", href: "/lending-api#/operations/get-accounts-for-enhanced-profit-and-loss" },
      { type: "link", label: "Enhanced balance sheet accounts", href: "/lending-api#/operations/get-accounts-for-enhanced-balance-sheet" },
    ],
  },
  {
    type: "category",
    label: "Enhanced cash flow",
    collapsed: true,
    items: [
      "lending/enhanced-cash-flow/overview",
      { type: "link", label: "Enhanced cash flow transactions", href: "/lending-api#/operations/get-enhanced-cash-flow-transactions" },
    ],
  },
  {
    type: "category",
    label: "Enhanced invoices",
    collapsed: true,
    items: [
      "lending/enhanced-invoices/overview",
      { type: "link", label: "Enhanced invoices report", href: "/lending-api#/operations/get-enhanced-invoices-report" },
    ],
  },
  {
    type: "category",
    label: "Enhanced loan liabilities",
    collapsed: true,
    items: [
      "lending/enhanced-liabilities/overview",
      { type: "link", label: "Loan summary", href: "/lending-api#/operations/get-loan-summary" },
      { type: "link", label: "Loan transactions", href: "/lending-api#/operations/list-loan-transactions" },
    ],
  },
  {
    type: "category",
    label: "Data integrity",
    collapsed: true,
    items: [
      "lending/data-integrity/overview",
      "lending/data-integrity/faqs",
    ],
  },
  {
    type: "category",
    label: "Commerce metrics",
    collapsed: true,
    items: [
          "lending/commerce-metrics/overview",
          "lending/commerce-metrics/reporting-structure",
          "lending/commerce-metrics/troubleshooting",
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
      "lending/excel/overview",
      "lending/excel/lending-report",
      "lending/excel/audit-report",
      "lending/excel/enhanced-financials-report",
      "lending/excel/enhanced-invoices-report",
      "lending/excel/enhanced-cash-flow-report",
    ],
  },
  'assess/troubleshooting',
  {
    type: "link",
    href: "/lending-api",
    label: "Lending API reference",
  },
];
