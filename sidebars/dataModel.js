const dataTypes = [
  {
    "key": "chartOfAccounts",
    "name": "Accounts",
    "schema": "/accounting-api#/schemas/Account",
    "product": "accounting",
  },
  {
    "key": "accountTransactions",
    "name": "Account transactions",
    "schema": "/accounting-api#/schemas/AccountTransaction",
    "product": "accounting",
  },
  {
    key: "agedCreditor",
    name: "Aged creditor report",
    schema: "/accounting-api#/schemas/AgedCreditorReport",
    product: "accounting",
  },
  {
    key: "agedDebtor",
    name: "Aged debtor report",
    schema: "/accounting-api#/schemas/AgedDebtorReport",
    product: "accounting",
  },
  {
    key: "attachments",
    name: "Attachments",
    schema: "/accounting-api#/schemas/Attachment",
    product: "accounting",
  },
  {
    "key": "balanceSheet",
    "name": "Balance sheet",
    "schema": "/accounting-api#/schemas/BalanceSheet",
    "product": "accounting",
  },
  {
    "key": "bankAccounts",
    "name": "Bank accounts",
    "schema": "/accounting-api#/schemas/BankAccount",
    "product": "accounting",
  },
  {
    "key": "bankTransactions",
    "name": "Bank transactions",
    "schema": "/accounting-api#/schemas/BankTransactions",
    "product": "accounting",
  },
  {
    "key": "bills",
    "name": "Bills",
    "schema": "/accounting-api#/schemas/Bill",
    "product": "accounting",
  },
  {
    "key": "billCreditNotes",
    "name": "Bill credit notes",
    "schema": "/accounting-api#/schemas/BillCreditNote",
    "product": "accounting",
  },
  {
    "key": "billPayments",
    "name": "Bill payments",
    "schema": "/accounting-api#/schemas/BillPayment",
    "product": "accounting",
  },
  {
    "key": "cashFlowStatement",
    "name": "Cash flow statement",
    "schema": "/accounting-api#/schemas/CashFlowStatement",
    "product": "accounting",
  },
  {
    "key": "company",
    "name": "Company info",
    "schema": "/accounting-api#/schemas/CompanyDataset",
    "product": "accounting",
  },
  {
    "key": "creditNotes",
    "name": "Credit notes",
    "schema": "/accounting-api#/schemas/CreditNote",
    "product": "accounting",
  },
  {
    "key": "customers",
    "name": "Customers",
    "schema": "/accounting-api#/schemas/Customer",
    "product": "accounting",
  },
  {
    "key": "directCosts",
    "name": "Direct costs",
    "schema": "/accounting-api#/schemas/DirectCost",
    "product": "accounting",
  },
  {
    "key": "directIncomes",
    "name": "Direct incomes",
    "schema": "/accounting-api#/schemas/DirectIncome",
    "product": "accounting",
  },
  {
    "key": "invoices",
    "name": "Invoices",
    "schema": "/accounting-api#/schemas/Invoice",
    "product": "accounting",
  },
  {
    "key": "items",
    "name": "Items",
    "schema": "/accounting-api#/schemas/Item",
    "product": "accounting",
  },
  {
    "key": "journals",
    "name": "Journals",
    "schema": "/accounting-api#/schemas/Journal",
    "product": "accounting",
  },
  {
    "key": "journalEntries",
    "name": "Journal entries",
    "schema": "/accounting-api#/schemas/JournalEntry",
    "product": "accounting",
  },
  {
    "key": "payments",
    "name": "Payments",
    "schema": "/accounting-api#/schemas/Payment",
    "product": "accounting",
  },
  {
    "key": "paymentMethods",
    "name": "Payment methods",
    "schema": "/accounting-api#/schemas/PaymentMethod",
    "product": "accounting",
  },
  {
    "key": "profitAndLoss",
    "name": "Profit and loss",
    "schema": "/accounting-api#/schemas/ProfitAndLossReport",
    "product": "accounting",
  },
  {
    "key": "purchaseOrders",
    "name": "Purchase orders",
    "schema": "/accounting-api#/schemas/PurchaseOrder",
    "product": "accounting",
  },
  {
    "key": "salesOrders",
    "name": "Sales orders",
    "schema": "/accounting-api#/schemas/SalesOrder",
    "product": "accounting",
  },
  {
    "key": "suppliers",
    "name": "Suppliers",
    "schema": "/accounting-api#/schemas/Supplier",
    "product": "accounting",
  },
  {
    "key": "taxRates",
    "name": "Tax rates",
    "schema": "/accounting-api#/schemas/TaxRate",
    "product": "accounting",
  },
  {
    "key": "trackingCategories",
    "name": "Tracking categories",
    "schema": "/accounting-api#/schemas/TrackingCategory",
    "product": "accounting",
  },
  {
    "key": "transfers",
    "name": "Transfers",
    "schema": "/accounting-api#/schemas/Transfer",
    "product": "accounting",
  },
  {
    "key": "banking-accounts",
    "name": "Accounts",
    "schema": "/banking-api#/schemas/Account",
    "product": "banking",
  },
  {
    "key": "banking-accountBalances",
    "name": "Account balances",
    "schema": "/banking-api#/schemas/AccountBalance",
    "product": "banking",
  },
  {
    "key": "banking-transactions",
    "name": "Transactions",
    "schema": "/banking-api#/schemas/Transaction",
    "product": "banking",
  },
  {
    "key": "banking-transactionCategories",
    "name": "Transaction categories",
    "schema": "/banking-api#/schemas/TransactionCategory",
    "product": "banking",
  },
  {
    "key": "commerce-companyInfo",
    "name": "Company info",
    "schema": "/commerce-api#/schemas/CompanyInfo",
    "product": "commerce",
  },
  {
    "key": "commerce-customers",
    "name": "Customers",
    "schema": "/commerce-api#/schemas/Customer",
    "product": "commerce",
  },
  {
    "key": "commerce-disputes",
    "name": "Disputes",
    "schema": "/commerce-api#/schemas/Dispute",
    "product": "commerce",
  },
  {
    "key": "commerce-locations",
    "name": "Locations",
    "schema": "/commerce-api#/schemas/Locations",
    "product": "commerce",
  },
  {
    "key": "commerce-orders",
    "name": "Orders",
    "schema": "/commerce-api#/schemas/Order",
    "product": "commerce",
  },
  {
    "key": "commerce-payments",
    "name": "Payments",
    "schema": "/commerce-api#/schemas/Payment",
    "product": "commerce",
  },
  {
    "key": "commerce-paymentMethods",
    "name": "Payment methods",
    "schema": "/commerce-api#/schemas/PaymentMethod",
    "product": "commerce",
  },
  {
    "key": "commerce-products",
    "name": "Products",
    "schema": "/commerce-api#/schemas/Product",
    "product": "commerce",
  },
  {
    "key": "commerce-productCategories",
    "name": "Product categories",
    "schema": "/commerce-api#/schemas/ProductCategory",
    "product": "commerce",
  },
  {
    "key": "commerce-taxComponents",
    "name": "Tax components",
    "schema": "/commerce-api#/schemas/TaxComponent",
    "product": "commerce",
  },
  {
    "key": "commerce-transactions",
    "name": "Transactions",
    "schema": "/commerce-api#/schemas/Transaction",
    "product": "commerce",
  },
  {
    "key": "bankfeedsbankaccount",
    "name": "Bank account",
    "schema": "/bank-feeds-api#/schemas/BankFeedBankAccount",
    "product": "bank-feeds",
  },
]

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
      ...composePaths(dataTypes.filter(dataType => dataType.product === "accounting"))],
  },
  {
    type: "category",
    label: "Banking",
    collapsed: true,
    items: ["data-model/banking/banking", ...composePaths(dataTypes.filter(dataType => dataType.product === "banking"))],
  },
  {
    type: "category",
    label: "Commerce",
    collapsed: true,
    items: ["data-model/commerce/commerce", ...composePaths(dataTypes.filter(dataType => dataType.product === "commerce"))],
  },
  {
    type: "category",
    label: "Bank feeds",
    collapsed: true,
    items: ["data-model/bank-feeds/bank-feeds", ...composePaths(dataTypes.filter(dataType => dataType.product === "bank-feeds"))],
  },
];

module.exports = routes