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
  {
    type: "link",
    label: "Bank statements",
    customProps: {
      hr: true,
      section: "Features",
    },
    href: "/lending/features/bank-statements-overview",
  },
  "lending/features/sales-overview",
  "lending/features/financial-statements-overview",
  "lending/features/liabilities-overview",
  "lending/features/accounts-receivable-overview",
  "lending/features/accounts-payable-overview",
  "lending/features/company-info-overview",
  "lending/features/excel-download-overview",
{
  type: "category",
  label: "Loan writeback",
  customProps: {
    hr: true,
    section: "Guides",
  },
  collapsed: true,
  items: [
    {
      type: "doc",
      id: "lending/guides/loan-writeback/introduction",
      label: "Introduction",
    },
    "lending/guides/loan-writeback/configure",
    "lending/guides/loan-writeback/deposit",
    "lending/guides/loan-writeback/record-general-loan",
    "lending/guides/loan-writeback/record-invoice-finance",
  ],
},
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
  label: "Invoice finance",
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
  href: '/lending/functions/data-upload',
  label: "Data upload",
  customProps: {
    hr: true,
    section: "Reference",
  },
},
  "lending/troubleshooting",
  "lending/data-types",
  {
    type: "link",
    href: "/lending-api",
    label: "API reference",
  },
];
