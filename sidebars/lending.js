module.exports = [
 {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Lending API",
    href: "/lending/overview",
    className: "header top-level-item products product lending",
  },
  "lending/get-started",
  // {
  //   type: "category",
  //   label: "Loan qualification",
  //   collapsed: true,
  //   items: [
  //     "lending/guides/loan-qualification/introduction",
  //     "lending/guides/loan-qualification/setting-up",
  //     "lending/guides/loan-qualification/process-loan",
  //     "lending/guides/loan-qualification/uw-decision",
  //   ],
  // },
  {
    type: "category",
    label: "Invoice finance guide",
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "lending/guides/invoice-finance/introduction",
        label: "Introduction",
      },
      "lending/guides/invoice-finance/setting-up",
      "lending/guides/invoice-finance/process-invoice",
      "lending/guides/invoice-finance/inv-fin-decision",
    ],
  },
  {
    type: "link",
    label: "Enhanced Financials",
    customProps: {
      hr: true,
      section: "Enhanced reports",
    },
    href: "/lending/enhanced-financials/overview",
  },
  "lending/enhanced-cash-flow/overview",
  "lending/enhanced-invoices/overview",
  "lending/enhanced-liabilities/loans-overview",
  {
    type: "category",
    label: "Data integrity",
    collapsed: true,
    customProps: {
      hr: true,
      section: "Other features",
    },
    items: [
      "lending/data-integrity/overview",
      "lending/data-integrity/api-data-integrity",
      "lending/portal/data-integrity",
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
  'lending/data-types',
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
