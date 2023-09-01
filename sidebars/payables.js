module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Sync for Payables",
    id: "payables/overview",
    className: "header  top-level-item products product sfpayables",
  },
  {
    type: "category",
    label: "Tutorial",
    collapsed: true,
    items: [
      {
        type: "doc",
        id: "payables/guides/bill-pay/introduction",
        label: "Introduction",
      },
      "payables/guides/bill-pay/use-bill-pay-demo-app",
      "payables/guides/bill-pay/run-demo-app-locally",
      "payables/guides/bill-pay/how-the-demo-app-works",
    ],
  },
  {
    type: "doc",
    id: "payables/suppliers",
    customProps: {
      hr: true,
      section: "Use",
    },
  },
  "payables/bills",
  "payables/mapping",
  "payables/payments",
  {
    type: "ref",
    label: "Oracle NetSuite",
    customProps: {
      hr: true,
      section: "Sync for Payables integrations",
    },
    id: "integrations/accounting/netsuite/accounting-netsuite",
  },
  {
    type: "doc",
    label: "QuickBooks Online",
    id: "integrations/accounting/quickbooksonline/accounting-quickbooksonline"
  },
  {
    type: "doc",
    label: "QuickBooks Desktop",
    id: "integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop"
  },
  {
    type: "doc",
    label: "Sage Business Cloud",
    id: "integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud"
  },
  {
    type: "doc",
    label: "Sage Intacct",
    id: "integrations/accounting/sage-intacct/accounting-sage-intacct"
  },
  {
    type: "doc",
    label: "Xero",
    id: "integrations/accounting/xero/accounting-xero"
  },
  {
    type: "doc",
    id: "payables/data-types",
    label: "Data types",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "link",
    href: "/sync-for-payables-api",
    label: "API reference",
  },
]
