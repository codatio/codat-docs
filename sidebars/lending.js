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
        type: "category",
        label: "Loan qualification",
        collapsed: true,
        items: [
          "lending/guides/loan-qualification/introduction",
          "lending/guides/loan-qualification/setting-up",
          "lending/guides/loan-qualification/process-loan",
          "lending/guides/loan-qualification/uw-decision",
        ],
      },
      {
        type: "category",
        label: "Invoice financing",
        collapsed: true,
        items: [
          "lending/guides/invoice-finance/introduction",
          "lending/guides/invoice-finance/setting-up",
          "lending/guides/invoice-finance/process-invoice",
          "lending/guides/invoice-finance/inv-fin-decision",
        ],
      },
      {
        type: "category",
        label: "Migration guides",
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
    type: "link",
    label: "Enhanced Financials",
    customProps: {
      hr: true,
    },
    href: "/lending/enhanced-financials/overview",
  },
  "lending/enhanced-cash-flow/overview",
  "lending/enhanced-invoices/overview",
  "lending/enhanced-liabilities/overview",
  {
    type: "category",
    label: "Data integrity",
    collapsed: true,
    customProps: {
      hr: true,
    },
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
    label: "Excel download",
    collapsed: true,
    items: [
      "lending/excel/overview",
      "lending/excel/assess-report",
      "lending/excel/audit-report",
      "lending/excel/enhanced-financials-report",
      "lending/excel/enhanced-invoices-report",
      "lending/excel/enhanced-cash-flow-report",
    ],
  },
  {
    type: "category",
    label: "Liabilities",
    collapsed: true,
    items: [
      "lending/loans/loan-transactions",
    ],
  },
  {
    type: "category",
    label: "Assess in the Portal",
    collapsed: true,
    items: [
      "lending/portal/overview",
      "lending/portal/data-integrity",
      "lending/portal/categorize-accounts"
    ],
  },
  {
    type: "link",
    href: '/lending/troubleshooting',
    label: "FAQs",
    customProps: {
      hr: true,
    },
  },
  {
    type: "link",
    href: "/assess-api",
    label: "API reference",
  },
];
