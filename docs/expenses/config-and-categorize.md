---
title: "Map customer transactions"
description: Map accounts, suppliers, and customers to create transactions using the Sync for Expenses product
sidebar_label: Map transactions
tags: [syncforexpense, mappingOptions, Config]
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

Once your SMB user has authorized a connection to their accounting platform and you have created a data connection, they are ready to start creating their expense transactions. Each transaction needs to be associated with a bank account, customer, and supplier. To add these values to the transaction, you can: 

- Enable your customer to indicate the required bank account, customer, and supplier values on each expense transaction.
- Use default fallback bank account, customer, and supplier values pre-configured for the customer's company.

You also need to provide your customer with an opportunity (via your application's user interface) to choose the default accounts, tracking categories, and tax rates that their expenses will be mapped to. 

## Enable customer to set values

Your customers should be able set a bank account, customer, and supplier for each [expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction#request-body) to allow for a more accurate representation of who or where the spend should be associated with in the accounting platform. 

``` http title="Bank account override on the expense transaction"
"bankAccountRef":{
  "id":"08ca1f02-0374-11ed-b939-0242ac120002",
}
```

``` http title="Supplier / customer override on the expense transaction"
"contactRef":{
  "id":"08ca1f02-0374-11ed-b939-0242ac120002",
  "type": "Supplier"
}
```

If your customer doesn't provide these values on the transaction itself, Sync for Expenses will use default values you configure for the company as a fallback.

:::caution Default and mandatory values

If you choose not to set default configuration and no values are entered on the transaction, the expense will fail to create in the accounting platform. To avoid this, make the bank account, customer, and supplier fields mandatory in your app's UI for your user to provide.
:::

## Configure default values

When no values are set at the transaction level, the spend item will be associated with the bank account, supplier, and customer default values configured for the company.

To set these values and determine how your customers' transactions will be recorded, use our [Set company configuration](/sync-for-expenses-api#/operations/set-company-configuration) endpoint. You can use the [Get company configuration](/sync-for-expenses-api#/operations/get-company-configuration) endpoint anytime to check the existing configuration or display it to the user. 

```http title="Company Config"
POST https://api.codat.io/companies/{companyId}/sync/expenses/config
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
If a configuration is set for a company, but the customer sets a bank account, supplier, and customer value on the expense transaction level, Sync for Expenses will use the values from the trasaction when creating the expense in the accounting platform.

:::caution Suppliers in Microsoft Dynamics

Due to a limitation in the accounting platform, Microsoft Dynamics requires a default supplier when creating expenses. We currently don't support assigning a supplier at the transaction level.
:::

### Bank account

A bank account (`bankAccount.id`) is required to show where purchases have been made from. This can either a credit or debit account. You can choose to create a new account or retrieve a list of existing accounts from your customer's accounting software. 

* To create a new bank account, use the [Create bank account](/sync-for-expenses-api#/operations/create-account) endpoint. You should trigger a data refresh if a new bank account has been created prior to syncing transactions. 

* Use the [List accounts](/accounting-api#/operations/get-account) endpoint to fetch a list of your customer's existing accounts from their accounting software and display these to them.
  You can also use [query parameters](/using-the-api/querying) to narrow down the list of results, for example:
    - `query=metadata.isDeleted=false&&isBankAccount=true` returns existing bank accounts. 
    -  `query=metadata.isDeleted=false&&isBankAccount=true&&type=liability` returns existing liability bank accounts, which are used for credit cards.

### Supplier

A supplier (`supplier.id`) is required so that the relevant spending can be associated with that that supplier record. You can choose to create a new supplier or retrieve a list of existing suppliers from your customer's accounting software. 

* To create a new supplier, use the [Create supplier](/sync-for-expenses-api#/operations/create-supplier) endpoint. 

* Use the [List suppliers](/sync-for-expenses-api#/operations/list-suppliers) endpoint to fetch a list of your customer's existing suppliers from their accounting software and display these to them.
  You can also use [query parameters](/using-the-api/querying) to narrow down the list of results. For example, `query=metadata.isDeleted=false&&supplierName=supplierName` returns existing suppliers that match the specified name.

:::info Supplier currency considerations

The currency associated with the supplier must match the currency associated with the relevant spend. Codat validates the match for suppliers with a single set currency, but not for suppliers that work with multiple currencies.

:::

### Customer

Choose the customer (`customer.id`) that any income-related activities, such as cashback, should be associated with. You can create a new supplier or retrieve a list of existing suppliers from your customer's accounting software. 

* To create a new customer, use the [Create customer](/sync-for-expenses-api#/operations/create-customer) endpoint. 

* Use the [List customers](/sync-for-expenses-api#/operations/list-customers) endpoint to fetch a list of your SMB's existing customers from their accounting software and display these to them.
  You can also use [query parameters](/using-the-api/querying) to narrow down the list of results. For example, `query=metadata.isDeleted=false&&customerName=name` returns existing customers that match the specified name.

### Supplier and customer handling

In some scenarios, different accounting platforms assign customers and suppliers to a transaction based on the expense's [transaction types](/expenses/sync-process/expense-transactions#transaction-types): 

<table>
  <thead></thead>
  <tbody>
    <tr>
      <td style={{ textAlign: 'center' }} colspan="6"><b>Supported platforms</b></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td><b>Xero</b></td>
      <td><b>QBO</b></td>
      <td><b>Netsuite</b></td>
      <td><b>Microsoft Dynamics</b></td>
      <td><b>QuickBooks Desktop</b></td>
    </tr>
    <tr>
      <td rowspan="8"><i>Transaction types</i></td>
      <td>Payments</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td rowspan="8">Supplier is not associated with expense transactions due to a Dynamics platform limitation.</td>
      <td>Supplier</td>
    </tr>
    <tr>
      <td>Refund</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>Supplier</td>
    </tr>
    <tr>
      <td>Rewards</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>NA</td>
      <td>NA</td>
    </tr>
    <tr>
      <td>Chargeback</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>NA</td>
      <td>NA</td>
    </tr>
    <tr>
      <td>Transfer in - to be deprecated in June 2024</td>
      <td>Customer</td>
      <td>Supplier</td>
      <td>NA</td>
      <td>NA</td>
    </tr> 
    <tr>
      <td>Transfer out - to be deprecated in June 2024</td>
      <td>Supplier</td>
      <td>Supplier</td>
      <td>NA</td>
      <td>NA</td>
    </tr>
    <tr>
      <td>Adjustment in</td>
      <td>If the expense account is a bank account, then supplier is used. If not, customer is used.</td>
      <td>Customer</td>
      <td>NA</td>
      <td>NA</td>
    </tr>
    <tr>
      <td>Adjustment out</td>
      <td>Supplier</td>
      <td>Customer</td>
      <td>NA</td>
      <td>NA</td>
    </tr>
  </tbody>
</table>

## Mapping options

Every SMB customer has its own preference on how an individual expense should be represented in their accounting software. You can retrieve these options using the [Mapping options](/sync-for-expenses-api#/operations/get-mapping-options) endpoint. 

The response can then be cached and displayed to the customer when they are finalizing their expenses. You will normally see the name of the connected expense provider in the `expenseProvider` property.

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

### Accounts

The `accounts` array includes the [general ledger accounts](/sync-for-expenses-api#/schemas/Account) which have been pulled from the SMB customer's accounting software. 

* The `name` is what they labelled the account in the software, so you can display this to your end user.
* `validTransactionTypes` tells you which transaction types are accepted by the account. This prevents validation issues, such as a customer accidentally trying to reconcile an expense to an income account.

You can also create additional accounts with our [Create account](/sync-for-expenses-api#/operations/create-account) endpoint, for example if a company has a new category for representing expenses.

### Tracking categories

[Tracking categories](/sync-for-expenses-api#/schemas/TrackingCategoryMappingInfo) are used to monitor specific cost centers and control budgets that sit outside of the standard chart of accounts. Your customers may use tracking categories to group and track the income and costs of specific departments (e.g. Sales and marketing), projects, locations, or customers.

When pushing an expense reconciliation, you can include a tracking category to further categorize this expense.

### Tax rates

[Tax rates](/sync-for-expenses-api#/schemas/TaxRateMappingInfo) enable your SMB customers to accurately track taxes against purchases and, depending on the locale, allow them to recoup the tax. Assigning a tax rate to a transaction is mandatory, unless the transaction is a `transferIn` or `transferOut`. 

Accounting systems typically store a set of taxes and associated rates within the accounting package. This means users don't have to look up or remember the rate for each type of tax. For example, applying the tax "UK sales VAT" to the line items of an invoice in an accounting platform will add the correct tax rate of 20%. 

In some cases, your customers might not need to track tax on expenses. We recommend assigning a default tax code for 0% from the accounting package for those transactions.

### Refresh mapping options

The default [sync settings](/expenses/getting-started#data-types) set for Sync for Expenses' data types will refresh the mapping options on an daily basis, however, you can also refresh the options manually by making a request to the [Mapping options](/sync-for-expenses-api#/operations/get-mapping-options) endpoint.

``` http
POST https://api.codat.io/companies/{companyId}/data/all
```

---
## Read next

* [Learn how to create datasets that contain expense transactions](/expenses/sync-process/expense-transactions)
