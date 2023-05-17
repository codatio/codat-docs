module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Accounting API",
    href: "/accounting-api/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      {
        type: "link",
        label: "Loan qualification",
        href: "/guides/loan-qualification/introduction",
      },
      {
        type: "link",
        label: "Invoice financing",
        href: "guides/invoice-finance/introduction",
      },
    ],
  },
  {
    type: "link",
    label: "Accounting data model",
    href: "/data-model/accounting/",
  },
  {
    type: "link",
    label: "Accounting integrations",
    href: "/integrations/accounting/overview",
  },
  {
    type: "link",
    href: "/accounting-api",
    label: "Accounting API reference",
  },
];