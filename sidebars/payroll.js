module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Sync for Payroll",
    id: "payroll/overview",
    className: "header top-level-item products product sfpayroll",
  },
  {
    type: "ref",
    id: "auth-flow/overview",
    customProps: {
      hr: true,
      section: "Payroll process",
    },
  },
  "payroll/mapping",
  "payroll/sync-payroll",
  {
    type: "ref",
    label: "Oracle NetSuite",
    customProps: {
      hr: true,
      section: "Payroll integrations",
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
    label: "MYOB Business",
    id: "integrations/accounting/myob/accounting-myob"
  },
  {
    type: "doc",
    label: "Dynamics 365 Business Central",
    id: "integrations/accounting/dynamics365businesscentral/accounting-dynamics365businesscentral"
  },
  {
    type: "doc",
    id: "payroll/data-types",
    label: "Data types",
    customProps: {
      hr: true,
      section: "Reference",
    },
  },
  {
    type: "link",
    href: "/sync-for-payroll-api#/",
    label: "API reference",
  },
]