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
    type: "doc",
    label: "QuickBooks Online",
    customProps: {
      hr: true,
      section: "Bank feeds integrations",
    },
    id: "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds",
  },
  {
    type: "doc",
    label: "Sage",
    id: "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds",
  },
  {
    type: "doc",
    label: "Xero",
    id: "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds",
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