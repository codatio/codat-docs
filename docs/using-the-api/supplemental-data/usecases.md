---
title: "Common uses for supplemental data"
sidebar_label: "Examples"
description: "Customize data types with additional fields not present in Codat's out-of-the box data models"
---

## Commonly requested properties

This section details some of the commonly requested supplemental data configurations per platform.

### Xero

- [Accounts](https://developer.xero.com/documentation/api/accounting/accounts) endpoint

| Property        | Description                                                    |
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

- [Invoices](https://developer.xero.com/documentation/api/accounting/invoices) endpoint

| Property              | Description                                                                            |
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

- [Items](https://developer.xero.com/documentation/api/accounting/items) endpoint

| Property              | Description                                                                      |
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

- [Contacts](https://developer.xero.com/documentation/api/accounting/contacts) endpoint

| Property             | Description                                                                      |
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

- [Tax rates](https://developer.xero.com/documentation/api/accounting/taxrates) endpoint

| Property                | Description                                                        |
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

### QuickBooks Online

- [Customers](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/customer) endpoint

| Property        | Description                                                    |
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

- [Invoices](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/all-entities/invoice) endpoint

| Property        | Description                                                    |
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