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
        type: "category",
        label: "Automated reconciliation",
        collapsed: true,
        items: [
          "accounting-api/guides/auto-reconciliation/introduction",
          "accounting-api/guides/auto-reconciliation/setting-up",
          "accounting-api/guides/auto-reconciliation/name-tbc-1",
          "accounting-api/guides/auto-reconciliation/name-tbc-2",
        ],
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