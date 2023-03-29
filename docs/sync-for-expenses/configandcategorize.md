---
title: "Configuration and categorizing expenses"
description: Set up, map, and enable the Sync for Expenses solution
tags: [syncforexpense, mappingOptions, Config]
---

Once your SMB user has authorized a connection to their accounting platform and you have created a data connection, you can then configure and enable Sync for Expenses.

## Configuration

The [configuration endpoint](/sync-for-expenses-api#/operations/get-company-configuration) enables you to set up how your customers expenses will be pushed. 
You can check the config at any time to confirm your companies' configuration.

```http title="Company Config"
GET https://api.codat.io/companies/{companyId}/sync/expenses/config
{
    "bankAccount": {
        "id": "{selectedBankAccountId}"
    },
    "supplier": {
        "id": "{selectedSupplierId}"
    },
    "customer": {
        "id": "{selectedCustomerId}"
    }
}
```

Using this endpoint you will be able to:
#### Bank Account
<ul>
   <li>
      Choose which bank account (<code>bankAccount.id</code>) purchases will be made from. This can also be a credit card account.
   </li>
   <ul>
      <li>
         <a href="/accounting-api#/operations/get-account">GET</a> a list of available accounts.  
         Use this request to retrieve a list of relevant accounts from your customers' accounting software.  You should also add additional query parameters, e.g. <code>query=metadata.isDeleted=false&&isBankAccount=true</code>. 
<li>For <strong>credit cards</strong> you can use an additional query parameter e.g. <code>query=metadata.isDeleted=false&&isBankAccount=true&&type=liability</code></li>
      </li>
      <li>
         You can <a href="/accounting-api#/operations/post-account">POST</a> to the Accounting API to <strong>create</strong> a new account.
      </li>
   </ul>
</ul>

:::info Foreign Exchange 💱

There are two ways to handle transactions in a foreign currency:

1. Each Foreign Exchange currency has its own bank account

2. Each transaction is converted back to the currency of the bank account.

Sync for Expenses currently supports option 2 only.
:::

#### Supplier
<ul>
   <li>
      A supplier (<code>supplier.id</code>) is required to associate all spending against that supplier. 
   </li>
   <ul>
      <li>
         <a href="/accounting-api#/operations/list-supplier">GET</a> a list of available suppliers in the company's accounting software. You can also add additional query parameters, e.g. <code>query=metadata.isDeleted=false&&supplierName=supplierName</code>
      </li>
      <li>
         You can <a href="/accounting-api#/operations/create-supplier">POST</a> to create a new supplier.
      </li>
   </ul>
</ul>

#### Customer
<ul>
   <li>
      Choose which customer (<code>customer.id</code>) any income-related activities, such as cashback, should be associated with.  
   </li>
   <ul>
      <li>
         <a href="/accounting-api#/operations/get-customers">GET</a> A list of available customers, you can add additional query parameters e.g. <code>query=metadata.isDeleted=false&&customerName=name</code>
      </li>
      <li>
         You can <a href="/accounting-api#/operations/post-customers">POST</a> to the accounting api to create a new customer.
      </li>
   </ul>
</ul>

You can then [post](sync-for-expenses-api#/operations/save-company-configuration) the updated configuration to Codat to store their saved preferences.

## Mapping Options

Every company will have their own preference on how an individual expense can be represented in their accounting software, you can retrieve these options from the `mappingOptions` [endpoint](/sync-for-expenses-api#/operations/get-mapping-options).

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
            "hasChildren": false,
            "parentId": "DEPARTMENT"
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

``` http title="create new expense account"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/accounts",
{
    "nominalCode": "310",
    "name": "Stationary Costs",
    "fullyQualifiedCategory": "Expenses"
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

``` http
POST https://api.codat.io/companies/{companyId}/data/all
```
