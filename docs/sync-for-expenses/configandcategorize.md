---
title: "Configuration and categorizing expenses"
tags: [syncforexpense, mappingOptions, Config]
---

Once your SMB user has authorized a connection to their accounting platform and you have created a data connection, you can then configure and enable Sync for Expenses.

## Configuration

The configuration endpoint enables you to set up how your customers expenses will be pushed.

Using this endpoint you will be able to:

- Enable / disable the integration (`enabled`)

- Determine the frequency and time that your customers syncs will run (you can also trigger syncs manually)

**Expenses (**`syncAsExpenses`**)**

- Enable `enableSync` for the sync schedule to be created for the company

- Choose which Supplier (`selectedSupplierId`) purchases will be associated to, Codat provides a list of the available suppliers in the `supplierOptions` array.

- Choose which Customer (`selectedCustomerId`) sales or revenue-generating transactions, such as interest, will be associated to.\
  Codat provides a list of the customer options in the `customerOptions` array.

- Choose which bank account (`selectedBankAccountId`) purchases will be made from. Codat provides a list of the SMB's available options in the `bankAccountOptions` array.

:::info Foreign Exchange 💱

There are two ways to handle transactions in a foreign currency:

1. Each Foreign Exchange currency has its own bank account

2. Each transaction is converted back to the currency of the bank account.

Sync for Expenses currently supports option 2 only.
:::

Using our Configuration endpoint, you can first make a request to get the config

```json http
{
  "method": "get",
  "baseUrl": "https://expensesync.codat.io",
  "url": "/companies/{companyId}/config/customer",
  "headers": {
    "authorization": ""
  }
}
```

Store the response body, update it with your customers preferences and post it to Codat to store their saved preferences.

## Mapping Options

Every company will have their own preference on how an individual expense can be represented in their accounting software, you can retrieve these options from the `mappingOptions` endpoint.

The `mappingOptions` response can then be cached and displayed to the end user when they are finalizing their expenses before exporting.

```json title="Sample mappingOptions response"
{
    "expenseProvider": "Partner Expense",
    "accounts": [
        {
            "id": "c5194f9d-b443-4630-b2d4-339bd57d313c",
            "name": "Interest Earned",
            "currency": "GBP",
            "accountType": "Asset",
            "validTransactionTypes": [
                "Reward",
                "Adjustment",
                "Transfer"
            ]
        }
        ...
    ],
    "trackingCategories": [
        {
            "id": "dba3d4da-f9ed-4eee-8e0b-452d11fdb1fa",
            "modifiedDate": "2022-08-03T12:04:40.067Z",
            "name": "Sales and Marketing",
            "hasChildren": false
        }
        ...
    ],
    "taxRates": [
        {
            "id": "INPUT2",
            "name": "20% (VAT on Expenses)",
            "code": "INPUT2",
            "effectiveTaxRate": 20,
            "totalTaxRate": 20
        }
        ...
    ]
}
```

You will normally see the name of the connected provider in the `expenseProvider` property.

**Accounts**

The `accounts` array will include the general ledger accounts which have been pulled from the businesses accounting software. The `name` is what they have labelled the account in their accounting software, so you can display this to your end user.

`validTransactionTypes` will tell you which types are accepted by the account. This prevents validation issues such as an SMB accidentally trying to reconcile an expense to an income account.

Additional accounts can also be created using the public API, this could be useful if a company has a new category for representing expenses.

```json http
{
  "method": "post",
  "baseUrl": "https://api.codat.io",
  "url": "/companies/{companyId}/connections/{connectionId}/push/accounts",
  "headers": {
    "authorization": ""
  },
  "body": {
    "nominalCode": "310",
    "name": "Stationary Costs",
    "fullyQualifiedCategory": "Expenses"
  }
}
```

**Tracking categories**

Tracking categories are used to monitor cost centres and control budgets that sit outside of the standard chart of accounts. Your customers may use tracking categories to group and track the income and costs of specific departments, such as "sales and marketing", projects, locations or customers.

When pushing an expense reconciliation, you can include a tracking category to associate this to further categorize an expense.

**Tax Rates**

The tax rates enable your SMB's to accurately track taxes against purchases and, depending on the locale, allow them to recoup the tax.

Accounting systems typically store a set of taxes and associated rates within the accounting package. This means that users don't have to look up or remember the rates for each type of tax. For example: Applying the tax "UK sales VAT" to line items of an invoice adds the correct rate of 20%.

**Refreshing the mappingOptions**

The default [sync settings](GettingStarted#datatypes) will refresh the mapping options on an daily basis, however, you can also refresh the options by making the following request.

```json http
{
  "method": "post",
  "baseUrl": "https://api.codat.io",
  "url": "/companies/{companyId}/data/all",
  "headers": {
    "authorization": ""
  }
}
```
