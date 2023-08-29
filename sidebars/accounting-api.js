module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Accounting API",
    id: "accounting-api/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      {
        type: "doc",
        label: "Loan qualification",
        id: "lending/guides/loan-qualification/introduction",
      },
      {
        type: "doc",
        label: "Invoice financing",
        id: "lending/guides/invoice-finance/introduction",
      },
      {
        type: "doc",
        label: "Bill pay",
        id: "payables/guides/bill-pay/introduction",
      },
    ],
  },
  {
    type: "doc",
    label: "Accounting data model",
    id: "accounting-api/accounting-data-types",
  },
  {
    type: "doc",
    label: "Accounting integrations",
    id: "integrations/accounting/overview",
  },
  {
    type: "link",
    href: "/accounting-api",
    label: "Accounting API reference",
  },
];