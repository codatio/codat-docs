---
title: "Supplemental data"
description: "Retrieve and update additional fields from an integration using supplemental data"
---

## What is supplemental data?

We have enhanced some of our data types with a `supplementalData` property. It gives you the ability to fetch, update, or create additional fields from an integration's endpoint within our existing standard data types.

For example, to pull our `suppliers` data type from Xero, we use Xero's [Contacts](https://developer.xero.com/documentation/api/accounting/contacts) endpoint. While we already include many of the properties of that endpoint in our standard data model, some properties, like supplier bank account details (`BankAccountDetails`), are not included. 

By configuring supplemental data for this property, you will be able to fetch `BankAccountDetails` every time you pull our standard `suppliers` data from Xero.

## Where is supplemental data available?

We are rapidly expanding coverage across integrations and datatypes according to client demand. We currently cover the following integrations and data types:
 
<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vToBP6lQMT_MrB8L5e_61w2LrmpoJPAVhxCVqCuoSpWgb6ga2hUXZHlLSdCr9jY_He1b-uYaDAnH6DV/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## How do I configure supplemental data?

In order to use supplemental data, you need to specify what supplemental data should be passed in the response for each integration and data type pair you require. To do so, use the [endpoint name]/endpoint link.

```http
/integrations/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

Within the request body, note that the `PlatformEndpoint` and `PlatformPropertyName` parameter values must match the integration's requirements exactly, including casing. Ensure you are familiar with the source data structure as Codat does not validate the supplemental data values against the integration provider.

```json Supplemental data configuration request body
{
    "supplementalDataConfig": {
        "{ClientObjectName}": {
            "dataSource": "/{PlatformEndpoint}",
            "pullData": {
                "{ClientDefinedName}":"{PlatformPropertyName}",
                "{ClientDefinedName2}": "{PlatformPropertyName2}"
            },
            "pushData": {
                "{ClientDefinedName}":"{PlatformPropertyName}",
                "{ClientDefinedName2}": "{PlatformPropertyName2}"
            },
        }
    }
}
```

You can also retrieve your existing supplemental data configuration by using the [endpoint name]/endpoint link endpoint:
`GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig`

## Codat to platform endpoint mapping

**EVERYTHING IN THIS SECTION SHOULD GO TO THE OAS**

Review the table below for platform endpoints we use in our data types, which are available for you to pull or send supplemental data. 

| Data type      | Xero endpoints                                                    | QuickBooks Online endpoints | Netsuite endpoints |
|----------------|-------------------------------------------------------------------|-----------------------------|--------------------|
| `billPayments` | Payments, Overpayments,   PrePayments, BatchPayments, CreditNotes |                             |                    |

## Commonly requested properties

**EVERYTHING IN THIS SECTION SHOULD GO TO THE OAS**

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

## Tips and pitfalls

- Supplemental data is currently available only at record level. 

- Data within the supplemental data object is not validated, manipulated, standardized, or transformed by Codat. 

- It is not possible to query Codat’s API on the supplemental data.

- When you add or change a supplemental data configuration, it will apply to all newly synced data, but not the data synced previously. This may result in inconsistent supplemental data across the dataset. You can request us to set a full sync after any changes to configuration to be default behaviour. 

- We expose the data sources available to interact with supplemental data, but request you to refer to the platforms' own documentation for details on available data and properties for each data source.








---
Callout for data types:

This data type supports supplemental data. Read more (configuring for supplemental data)[] and review implementation procedures for (specific integrations)[].

Callout for integrations:

This integration supports supplemental data. Read more about (configuring for supplemental data)[] and how you can (pull it for this integration)[].

Update OAS with relevant endpoints + parameters