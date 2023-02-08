module.exports = [
  {
    type: "link",
    href: "/",
    label: "All Docs",
    className: "back",
  },
  "bank-feed-api/overview",
  {
    type: "category",
    label: "Sage bank feeds",
    collapsed: true,
    items: [
      "bank-feed-api/sage-bank-feeds/sage-bank-feeds",
      "bank-feed-api/sage-bank-feeds/bank-feed-sage-bank-feeds-authenticate-users-web-app",
      "bank-feed-api/sage-bank-feeds/bank-feed-sage-bank-feeds-setup",
      "bank-feed-api/sage-bank-feeds/bank-feed-sage-bank-feeds-use",
    ],
  },
  {
    type: "category",
    label: "QBO bank feeds",
    collapsed: true,
    items: [
      "bank-feed-api/qbo-bank-feeds/qbo-bank-feeds",
      "bank-feed-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-push-bank-transactions",
      "bank-feed-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-setup",
      "bank-feed-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-smb-user",
    ],
  },
];
