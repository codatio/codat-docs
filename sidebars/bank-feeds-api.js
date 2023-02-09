module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  "bank-feeds-api/overview",
  {
    type: "category",
    label: "Sage bank feeds",
    collapsed: true,
    items: [
      "bank-feeds-api/sage-bank-feeds/sage-bank-feeds",
      "bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-setup",
      "bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-use",
      "bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-authenticate-users-web-app",    
    ],
  },
  {
    type: "category",
    label: "QBO bank feeds",
    collapsed: true,
    items: [
      "bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds",
      "bank-feeds-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-setup",
      "bank-feeds-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-smb-user",
      "bank-feeds-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-push-bank-transactions",     
    ],
  },
  {
    type: "link",
    href: "/bank-feeds-api",
    label: "API reference",
  },
];
