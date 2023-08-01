module.exports = [
 {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  {
    type: "link",
    label: "Bank Feeds",
    href: "/bank-feeds/overview",
    className: "header",
  },
  {
    type: "category",
    label: "Guides",
    collapsed: true,
    items: [
      {
        type: "link",
        label: "Bank reconciliation with QBO",
        href: "/guides/bank-feeds-tutorial",
      },
    ],
  },
  {
    type: "category",
    label: "Sage bank feeds",
    collapsed: true,
    items: [
      "bank-feeds/sage-bank-feeds/sage-bank-feeds",
      "bank-feeds/sage-bank-feeds/sage-bank-feeds-setup",
      "bank-feeds/sage-bank-feeds/sage-bank-feeds-use",
      "bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app",    
    ],
  },
  {
    type: "category",
    label: "QBO bank feeds",
    collapsed: true,
    items: [
      "bank-feeds/qbo-bank-feeds/qbo-bank-feeds",
      "bank-feeds/qbo-bank-feeds/qbo-bank-feeds-setup",
      "bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user",
      "bank-feeds/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions",     
    ],
  },
  {
    type: "category",
    label: "Xero bank feeds",
    collapsed: true,
    items: [
      "bank-feeds/xero-bank-feeds/xero-bank-feeds",
      "bank-feeds/xero-bank-feeds/xero-bank-feeds-setup",
      "bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user",
      "bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions",
      "bank-feeds/xero-bank-feeds/xero-bank-feeds-partner",
    ],
  },
  {
    type: "link",
    href: "/bank-feeds",
    label: "API reference",
  },
];
