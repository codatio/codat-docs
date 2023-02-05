const camalize = (str) =>
  str
    .toLowerCase()
    .replace(/^([a-zA-Z0-9])/g, (m, chr) => chr.toUpperCase())
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

const dataModels = {
  accounting: [
    "Account",
    "Account transaction",
    "Balance sheet",
    "Bank account",
    "Bank transaction",
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
};

const schemaPaths = {
  accounting: "/accounting-api#/schemas/",
  banking: "/banking-api#/schemas/",
  commerce: "/commerce-api#/schemas/",
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
      ...paths.accounting,
      "data-model/accounting/supplemental-data",
    ],
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
    label: "Shared",
    collapsed: true,
    items: [
      "data-model/shared/datamodel-shared-country",
      "data-model/shared/datamodel-shared-currency",
      "data-model/shared/datamodel-shared-currencyrate",
      "data-model/shared/datamodel-shared-date",
      "data-model/shared/valid-data-type-links",
    ],
  },
];
