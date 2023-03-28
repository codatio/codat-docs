const accounting = require("../src/components/global/DataTypes/dataTypes");

const composePaths = (dataTypes) => {
  return dataTypes.map((dataType) => {
    return {
      href: dataType.schema,
      label: dataType.name,
      type: "link",
    }
  });
};

const routes = [
  "data-model/all-datatypes",
  {
    type: "category",
    label: "Accounting",
    collapsed: true,
    items: [
      "data-model/accounting/accounting",
      ...composePaths(accounting)],
  },
  {
    type: "category",
    label: "Banking",
    collapsed: true,
    items: ["data-model/banking/banking", ...composePaths(banking)],
  },
  {
    type: "category",
    label: "Commerce",
    collapsed: true,
    items: ["data-model/commerce/commerce", ...composePaths(commerce)],
  },
  {
    type: "category",
    label: "Bank feeds",
    collapsed: true,
    items: ["data-model/bank-feeds/bank-feeds", ...composePaths(bankfeeds)],
  },
];

module.exports = routes