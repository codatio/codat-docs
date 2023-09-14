module.exports = [
 {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "doc",
    label: "Bank feeds integrations",
    id: "integrations/bank-feeds/overview",
    className: "header",
  },
  {
    type: "category",
    label: "QuickBooks Online",
    collapsed: true,
    customProps: {
      hr: true,
      section: "Bank feeds integrations",
    },
    items: [
      {
        type: "doc",
        label: "Overview",
        id: "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds",
      },
      "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup",
      "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user",
      "integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions",     
    ],
  },
  {
    type: "category",
    label: "Sage",
    collapsed: true,
    items: [
      {
        type: "doc",
        label: "Overview",
        id: "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds",
      },
      "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup",
      "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-use",
      "integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app",    
    ],
  },
  {
    type: "category",
    label: "Xero",
    collapsed: true,
    items: [
      {
        type: "doc",
        label: "Overview",
        id: "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds",
      },
      "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup",
      "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user",
      "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions",
      "integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-partner",
    ],
  }
]