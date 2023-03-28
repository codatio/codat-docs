const camalize = (str) =>
  str
    .toLowerCase()
    .replace(/^([a-zA-Z0-9])/g, (m, chr) => chr.toUpperCase())
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

const dataModels = {
  accounting: [
    "Account",
    "Account transaction",
    "Aged creditors report",
    "Aged debtors report",
    "Attachment",
    "Balance sheet",
    "Bank account",
    "Bank transactions",
    "Bill",
    "Bill credit note",
    "Bill payment",
    "Cash flow statement",
    "Credit note",
    "Customer",
    "Direct cost",
    "Direct income",
    "Invoice",
    "Item",
    "Journal",
    "Journal entry",
    "Payment",
    "Payment method",
    "Profit and loss report",
    "Purchase order",
    "Sales order",
    "Supplier",
    "Tax rate",
    "Tracking category",
    "Transfer",
  ],
  banking: [
    "Account",
    "Account balance",
    "Transaction",
    "Transaction category",
  ],
  commerce: [
    "Company info",
    "Customer",
    "Dispute",
    "Locations",
    "Order",
    "Payment",
    "Payment method",
    "Product",
    "Product category",
    "Tax component",
    "Transaction",
  ],
  bankFeeds: [
    "Bank feed bank account",
    //"Bank feed bank transactions",
  ],
};

const schemaPaths = {
  accounting: "/accounting-api#/schemas/",
  banking: "/banking-api#/schemas/",
  commerce: "/commerce-api#/schemas/",
  bankFeeds: "/bank-feeds-api#/schemas/",
};

const composePaths = (schemaPaths, dataModels) => {
  const categories = Object.keys(schemaPaths);

  const paths = {};

  categories.forEach((category) => {
    paths[category] = dataModels[category].map((model) => ({
      href: schemaPaths[category] + camalize(model),
      label: model,
      type: "link",
    }));
  });

  return paths;
};

const paths = composePaths(schemaPaths, dataModels);

module.exports = [
  {
    type: "category",
    label: "Accounting",
    collapsed: true,
    items: [
      "data-model/accounting/accounting",
      ...paths.accounting],
  },
  {
    type: "category",
    label: "Banking",
    collapsed: true,
    items: ["data-model/banking/banking", ...paths.banking],
  },
  {
    type: "category",
    label: "Commerce",
    collapsed: true,
    items: ["data-model/commerce/commerce", ...paths.commerce, ,],
  },
  {
    type: "category",
    label: "Bank feeds",
    collapsed: true,
    items: ["data-model/bank-feeds/bank-feeds", ...paths.bankFeeds, ,],
  },
];
