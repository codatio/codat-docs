export const accounting = [
  {
    key: "chartOfAccounts",
    name: "Accounts",
    schema: {
      default: "Account",
      lending: "SomethingElse",
    },
    category: "accounting",
    products: [
      'lending',
      'payables',
      'payroll',
    ],
    description: "Accounts are the categories a business uses to record accounting transactions.",
  },
  {
    key: "accountTransactions",
    name: "Account transactions",
    schema: {
      default: "AccountTransaction",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Account transactions represent bank activity within an accounting platform.",
  },
  {
    key: "attachments",
    name: "Attachments",
    schema: {
      default: "Attachment",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "File attachments for invoices, bills, direct costs, and direct incomes.",
  },
  {
    key: "bankAccounts",
    name: "Bank accounts",
    schema: {
      default: "BankAccount",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Bank accounts associated with a company and a specific data connection.",
  },
  {
    key: "bankTransactions",
    name: "Bank transactions",
    schema: {
      default: "BankTransactions",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Transactional banking data for a specific company and account.",
  },
  {
    key: "bills",
    name: "Bills",
    schema: {
      default: "Bill",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Bills, including line items.",
  },
  {
    key: "billCreditNotes",
    name: "Bill credit notes",
    schema: {
      default: "BillCreditNote",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A bill credit note is issued by a supplier for the purpose of recording credit.",
  },
  {
    key: "billPayments",
    name: "Bill payments",
    schema: {
      default: "BillPayment",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Bill payments include all accounts payable transaction data.",
  },
  {
    key: "company",
    name: "Company info",
    schema: {
      default: "CompanyInfo",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Standard details about a linked company such as their address, phone number, and company registration.",
  },
  {
    key: "creditNotes",
    name: "Credit notes",
    schema: {
      default: "CreditNote",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Reductions that can be applied against one or multiple invoices",
  },
  {
    key: "customers",
    name: "Customers",
    schema: {
      default: "Customer",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "People or organisations that have purchased goods or services from the company.",
  },
  {
    key: "directCosts",
    name: "Direct costs",
    schema: {
      default: "DirectCost",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A type of account transaction.",
  },
  {
    key: "directIncomes",
    name: "Direct incomes",
    schema: {
      default: "DirectIncome",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A type of account transaction.",
  },
  {
    key: "invoices",
    name: "Invoices",
    schema: {
      default: "Invoice",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "An invoice is an itemized record of goods sold or services provided to a customer.",
  },
  {
    key: "items",
    name: "Items",
    schema: {
      default: "Item",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Items allow your customers to save and track details of the products and services that they buy and sell.",
  },
  {
    key: "journals",
    name: "Journals",
    schema: {
      default: "Journal",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Journals are used to record all the financial transactions of a company.",
  },
  {
    key: "journalEntries",
    name: "Journal entries",
    schema: {
      default: "JournalEntry",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "The entries made in a company's general ledger, or accounts, when transactions are approved.",
  },
  {
    key: "payments",
    name: "Payments",
    schema: {
      default: "Payment",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Payments include all accounts receivable transaction data. This includes invoices and credit notes.",
  },
  {
    key: "paymentMethods",
    name: "Payment methods",
    schema: {
      default: "PaymentMethod",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A Payment Method represents the payment method(s) used to pay a Bill.",
  },
  {
    key: "purchaseOrders",
    name: "Purchase orders",
    schema: {
      default: "PurchaseOrder",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A business's intent to purchase goods or services from a supplier.",
  },
  {
    key: "salesOrders",
    name: "Sales orders",
    schema: {
      default: "SalesOrder",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A customer's intention to purchase goods or services from a seller.",
  },
  {
    key: "suppliers",
    name: "Suppliers",
    schema: {
      default: "Supplier",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Suppliers to the company of goods and services.",
  },
  {
    key: "taxRates",
    name: "Tax rates",
    schema: {
      default: "TaxRate",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A rate of tax, e.g. UK sales VAT, ",
  },
  {
    key: "trackingCategories",
    name: "Tracking categories",
    schema: {
      default: "TrackingCategory",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "Details of a category used for tracking transactions.",
  },
  {
    key: "transfers",
    name: "Transfers",
    schema: {
      default: "Transfer",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A type of transaction, recording the movement of money between two bank accounts, or between a bank account and a nominal account.",
  },
  {
    key: "agedCreditor",
    name: "Report: Aged creditors",
    schema: {
      default: "AgedCreditorReport",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "The total balance owed by a business to its suppliers over time.",
  },
  {
    key: "agedDebtor",
    name: "Report: Aged debtors",
    schema: {
      default: "AgedDebtorReport",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "The total outstanding balance due from customers to the business over time.",
  },
  {
    key: "balanceSheet",
    name: "Report: Balance sheet",
    schema: {
      default: "BalanceSheet",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A snapshot of a company's accounts at a single point in time that provides a statement of the assets, liabilities and equity of an organization.",
  },
  {
    key: "cashFlowStatement",
    name: "Report: Cash flow statement",
    schema: {
      default: "CashFlowStatement",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A report of all cash that is received or spent by a company during a given period.",
  },
  {
    key: "profitAndLoss",
    name: "Report: Profit and loss",
    schema: {
      default: "ProfitAndLossReport",
    },
    category: "accounting",
    products: [
      'lending',
    ],
    description: "A report of the financial performance of a company over a specified time period.",
  },
]

export const banking = [
  {
    key: "banking-accounts",
    name: "Accounts",
    schema: {
      default: "Account",
    },
    category: "banking",
    products: [
      'lending',
    ],
    description: "The SMB's bank accounts, with rich data like balances, account numbers and institutions holding the accounts.",
  },
  {
    key: "banking-accountBalances",
    name: "Account balances",
    schema: {
      default: "AccountBalance",
    },
    category: "banking",
    products: [
      'lending',
    ],
    description: "Balances for a bank account including end-of-day batch balance or running balances per transaction.",
  },
  {
    key: "banking-transactions",
    name: "Transactions",
    schema: {
      default: "Transaction",
    },
    category: "banking",
    products: [
      'lending',
    ],
    description: "Transactions incurred by the bank account.",
  },
  {
    key: "banking-transactionCategories",
    name: "Transaction categories",
    schema: {
      default: "TransactionCategory",
    },
    category: "banking",
    products: [
      'lending',
    ],
    description: "Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.",
  },
]

export const commerce = [
  {
    key: "commerce-companyInfo",
    name: "Company info",
    schema: {
      default: "CompanyInfo",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Details of a company, such as their address, phone number, and company registration.",
  },
  {
    key: "commerce-customers",
    name: "Customers",
    schema: {
      default: "Customer",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Customers who have placed orders with the company.",
  },
  {
    key: "commerce-disputes",
    name: "Disputes",
    schema: {
      default: "Dispute",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Transactions that customers have challenged.",
  },
  {
    key: "commerce-locations",
    name: "Locations",
    schema: {
      default: "Locations",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Geographic locations where product variant inventory is held.",
  },
  {
    key: "commerce-orders",
    name: "Orders",
    schema: {
      default: "Order",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Orders received by a company, including payments, service charges, and refunds.",
  },
  {
    key: "commerce-payments",
    name: "Payments",
    schema: {
      default: "Payment",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Amounts reserved against the customer's funding source.",
  },
  {
    key: "commerce-paymentMethods",
    name: "Payment methods",
    schema: {
      default: "PaymentMethod",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Represents the payment methods used by customers to make payments.",
  },
  {
    key: "commerce-products",
    name: "Products",
    schema: {
      default: "Product",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Items in the company's inventory.",
  },
  {
    key: "commerce-productCategories",
    name: "Product categories",
    schema: {
      default: "ProductCategory",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Categories of products.",
  },
  {
    key: "commerce-taxComponents",
    name: "Tax components",
    schema: {
      default: "TaxComponent",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Tax rates data from the commerce platform.",
  },
  {
    key: "commerce-transactions",
    name: "Transactions",
    schema: {
      default: "Transaction",
    },
    category: "commerce",
    products: [
      'lending',
    ],
    description: "Financial transactions recorded in the system.",
  },
]

export const bankfeeds = [
  {
    key: "bankfeedsbankaccount",
    name: "Bank account",
    schema: {
      default: "BankFeedBankAccount",
    },
    products: ["bank-feeds", ],
    products: [
      'lending',
    ],
    description: "The target bank account in a supported accounting package for ingestion into a bank feed.",
  },
]

export const dataTypes = [
  ...accounting,
  ...banking,
  ...commerce,
  ...bankfeeds,
]