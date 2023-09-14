---
title: "Common uses of supplemental data"
sidebar_label: "Examples"
description: "Review properties commonly used by our customers to enhance data required for their use cases"
---

When a particular integration contains a property which is not common across other platforms, it may happen that it does not form part of our standard data, but can be obtained using supplemental data to support your use case. 


For example, you can enhance our `invoices` data type with an invoice `URL`, a Xero-specific field that directs the user to a source document for an invoice hosted outside of Xero. For QBO, the `invoices` data type can be supplemented with `SalesTermRef`, providing you with sales terms associated with an invoice.

In sections below, you will find some integration-specific properties commonly used to supplement standard data with, and example configuration required to support this. For a full list of properties that can be used in supplemental data, refer to the integrations' own documentation.

## Xero

### [Accounts](https://developer.xero.com/documentation/api/accounting/accounts) schema

| Example property        | Description                                                    |
|-----------------|----------------------------------------------------------------|
| `TaxType`       | See default tax rate associated with the account               |
| `SystemAccount` | See if the account is a System Account and, if so, which type  |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "client-keyname-for-accounts": {
            "dataSource": "/Accounts",
            "pullData": {
                "ClientNameForTaxType":"TaxType",
                "ClientNameForSystemAccount": "SystemAccount"
            }
        }
    }
}
```

### [Invoices](https://developer.xero.com/documentation/api/accounting/invoices) schema

| Example property              | Description                                                                            |
|-----------------------|----------------------------------------------------------------------------------------|
| `ExpectedPaymentDate` | Displayed on the invoice if the expected   payment date has been set                   |
| `HasAttachments`      | Boolean value to indicate if invoice has an attachment                                 |
| `SentToContact`       | Boolean value to indicate whether the approved invoice has been sent to   the customer |
| `Reference`           | Display an additional external reference for   the invoice                             |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "client-keyname-for-xero-invoices": {
            "dataSource": "/Invoices",
            "pullData": {
                "ClientNameForExpectedPaymentDate": "ExpectedPaymentDate",
                "ClientNameForHasAttachments": "HasAttachments"
            }
        }
    }
}
```

### [Items](https://developer.xero.com/documentation/api/accounting/items) schema

| Example property              | Description                                                                      |
|-----------------------|----------------------------------------------------------------------------------|
| `QuantityOnHand`      | Shows the quantity of the item on hand                                           |
| `TotalCostPool`       | Shows the value of the item on hand. Calculated using average cost   accounting. |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "client-keyname-for-items": {
            "dataSource": "/Items",
            "pullData": {
                "ClientNameForQuantityOnHand":"QuantityOnHand",
                "ClientNameForTotalCostPool":"TotalCostPool"
            }
        }
    }
}
```

### [Contacts](https://developer.xero.com/documentation/api/accounting/contacts) schema

| Example property             | Description                                                                      |
|----------------------|----------------------------------------------------------------------------------|
| `BankAccountDetails` | Returns the bank account number of supplier                                      |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "client-Keyname-For-Xero-suppliers": {
            "dataSource": "/Contacts",
            "pullData": {
                "ClientNameForBankAccounts": "BankAccountDetails"
            }
        }
    }
}
```

### [Tax rates](https://developer.xero.com/documentation/api/accounting/taxrates) schema

| Example property                | Description                                                        |
|-------------------------|--------------------------------------------------------------------|
| `CanApplyToAssets`      | Boolean to describe if tax rate can be used   for asset accounts   |
| `CanApplyToEquity`      | Boolean to describe if tax rate can be used for equity   accounts  |
| `CanApplyToExpenses`    | Boolean to describe if tax rate can be used for expense accounts   |
| `CanApplyToLiabilities` | Boolean to describe if tax rate can be used for liability accounts |
| `CanApplyToRevenue`     | Boolean to describe if tax rate can be used for revenue accounts   |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "client-keyname-for-tax-rates": {
            "dataSource": "/TaxRates",
            "pullData": {
                "ClientNameForCanApplyToLiabilities":"CanApplyToLiabilities",
                "ClientNameForCanApplyToAssets": "CanApplyToAssets",
                "ClientNameForCanApplyToEquity": "CanApplyToEquity",
                "ClientNameForCanApplyToExpenses": "CanApplyToExpenses",
                "ClientNameForCanApplyToRevenue": "CanApplyToRevenue"
            }
        }
    }
}
```

## QuickBooks Online

### [Customers](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer) schema

| Example property        | Description                                                    |
|-----------------|----------------------------------------------------------------|
| `SalesTermRef`       | Reference to the Sales Terms associated with this customer               |
| `ParentRef` | Reference to a customer that is the immediate parent of this sub-customer |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "Client-keyname-for-QBO-customers": {
            "dataSource": "/Customer",
            "pullData": {
                "ClientNameForSalesTermRef":"SalesTermRef.value",
                "ClientNameForParentRef": "ParentRef.value"
            }
        }
    }
}
```

### [Invoices](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice) schema

| Example property        | Description                                                    |
|-----------------|----------------------------------------------------------------|
| `SalesTermRef`       | Reference to the Sales Terms associated with this Invoice               |  

```json title = "Example configuration"
{
    "supplementalDataConfig": {
        "client-keyname-for-qbo-invoices": {
            "dataSource": "/Invoice",
            "pullData": {
                "salesTermRef": "SalesTermRef.value"
            }
        }
    }
}
```
---
## Read next

- Experiment with supplemental data endpoints in our [API reference](https://docs.codat.io/platform-api#/operations/configure-supplemental-data).