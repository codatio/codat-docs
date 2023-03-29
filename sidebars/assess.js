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
  //getting started
  // launch checklist
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      "assess/get-started",
      {
        type: "category",
        label: "Loan underwriting",
        collapsed: true,
        items: [
          "assess/guides/underwriting/introduction",
          "assess/guides/underwriting/setting-up",
          "assess/guides/underwriting/process-loan",
          "assess/guides/underwriting/uw-decision",
        ],
      },  
    ],
  }, 
  {
    type: "category",
    label: "Categories",
    collapsed: true,
    items: [
      "assess/reports/enhanced-financials/categorize-accounts",
      "assess/portal/categorization-of-accounts",  
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
        label: "Enhanced invoices",
        collapsed: true,
        items: [
          "assess/reports/enhanced-invoices-report/overview",
          { type: "link", label: "Enhanced Invoices Report", href: "/assess-api#/operations/get-enhanced-invoices-report" },
        ],
      },
      {
        type: "category",
        label: "Enhanced cash flow",
        collapsed: true,
        items: [
          "assess/reports/enhanced-cash-flow-report/overview",
          "assess/reports/enhanced-cash-flow-report/transactions",
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
    ],
  },
  'assess/troubleshooting',
  {
    type: "link",
    href: "/assess-api",
    label: "Assess API reference",
  },
];
