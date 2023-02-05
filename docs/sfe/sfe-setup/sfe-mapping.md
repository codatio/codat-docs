---
title: "Step 3: Enable the SMB to configure mapping of expenses"
hidden: true
createdAt: "2022-09-30T18:37:44.898Z"
updatedAt: "2022-09-30T18:43:58.752Z"
---

Every company will have their own preference on how an individual expense can be represented in their accounting
software, you can retrieve these options from the `mappingOptions` endpoint.

The `mappingOptions` response can then be cached and displayed to the end user when they are finalizing their expenses before exporting.

`GET from /companies/{companyId}/connections/{connectionId}/sync/expenses/mappingOptions`

```
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

## Accounts

The accounts array will include the general ledger accounts which have been pulled from the businesses accounting software. The name is what they have labelled the account in their accounting software, so you can display this to your end user.

`validTransactionTypes` will tell you which types are accepted by the account. This prevents validation issues such as an SMB accidentally trying to reconcile an expense to an income account.

## Tracking categories

Tracking categories are used to monitor cost centres and control budgets that sit outside of the standard chart of accounts. Your customers may use tracking categories to group and track the income and costs of specific departments, such as “sales and marketing”, projects, locations or customers.

When pushing an expense reconciliation, you can include a tracking category to associate this to further categorize an expense.

## Tax Rates

The tax rates enable your SMBs to accurately track taxes against purchases and, depending on the locale, allow them to recoup the tax.

Accounting systems typically store a set of taxes and associated rates within the accounting package. This means that users don't have to look up or remember the rates for each type of tax. For example: Applying the tax "UK sales VAT" to line items of an invoice adds the correct rate of 20%.
