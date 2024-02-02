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
    type: "doc",
    label: "Get started",
    id: "payables/get-started",
  },
  {
    type: "doc",
    id: "payables/configure-customer",
    customProps: {
      hr: true,
      section: "Build your solution",
    },
  },
  "payables/suppliers",
  "payables/bills",
  "payables/mapping",
  "payables/payments",
//  {
//    type: "category",
//    label: "Supported integrations",
//    customProps: {
//      hr: true,
//      section: "Manage integrations",
//    },
//    collapsed: true,
//    items: [
//      {
//        type: "doc",
//        id: "integrations/accounting/netsuite/accounting-netsuite",
//        label: "Oracle NetSuite",
//      },
//      {
//        type: "doc",
//        id: "integrations/accounting/quickbooksonline/accounting-quickbooksonline",
//        label: "QuickBooks Online",
//      },
//      {
//        type: "doc",
//        id: "integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop",
//        label: "QuickBooks Desktop",
//      },
//      {
//        type: "doc",
//        id: "integrations/accounting/sagebusinesscloud/accounting-sagebusinesscloud",
//        label: "Sage Business Cloud",
//      },
//      {
//        type: "doc",
//        id: "integrations/accounting/sage-intacct/accounting-sage-intacct",
//        label: "Sage Intacct",
//      },
//      {
//        type: "doc",
//        id: "integrations/accounting/xero/accounting-xero",
//        label: "Xero",
//      },
//    ],
//  },
  {
    type: "category",
    label: "Automate bill payment",
    customProps: {
      hr: true,
      section: "Guides",
    },
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
    id: "payables/data-types",
    label: "Supported data types",
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
