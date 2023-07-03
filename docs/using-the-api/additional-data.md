---
title: "Supplemental data"
sidebar_label: "Supplemental data"
description: "Customize data types with additional fields not present in Codat's out-of-the box data models"
---

## What is supplemental data?

Supplemental data is additional data you can include in Codat's standard data types. Integrations may contain fields not supported by our out-of-the-box data model, so you can use supplemental data to fetch, create, or update these fields alongside our standard ones. 

For example, to pull our `suppliers` data type from Xero, we use Xero's [Contacts](https://developer.xero.com/documentation/api/accounting/contacts) endpoint. While we already include many of the properties of that endpoint in our standard data model, some properties, like supplier bank account details (`BankAccountDetails`), are not included. 

By configuring supplemental data for this property, you will be able to fetch `BankAccountDetails` every time you pull our standard `suppliers` data from Xero.

## Where is supplemental data available?

We are rapidly expanding coverage across integrations and datatypes according to client demand. You can help us prioritize by leaving feedback on our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api/submit-idea).

We currently cover the following integrations and data types:
 
<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vToBP6lQMT_MrB8L5e_61w2LrmpoJPAVhxCVqCuoSpWgb6ga2hUXZHlLSdCr9jY_He1b-uYaDAnH6DV/pubhtml?widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "400px" }}
></iframe>

## How do I configure supplemental data?

You'll need to specify what supplemental data should be passed in the response for each integration and data type pair you require. To do so, use the [endpoint name]/endpoint link.

```http
/integrations/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

Within the request body, `PlatformEndpoint` and `PlatformPropertyName` parameter values must match the integration's requirements exactly, including casing. Ensure you are familiar with the source data structure as Codat does not validate the supplemental data values against the integration provider.

```json title="Supplemental data configuration request body"
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
You can use dot notation to retrieve nested properties from within the supplemental data object. For example, maintain the following configuration to retrieve the supplier's `Name` value from Xero's `BrandingTheme` object with two properties, `BrandingThemeID` and `Name`, along with their `BankAccountDetails`.

```json title="Supplemental data configuration with dot notation"
{
    "supplementalDataConfig": {
        "yourKeyNameForXeroSuppliers": {
            "dataSource": "/Contacts",
            "pullData": {
                "SupplierBankAccount": "BankAccountDetails",
                "BrandingThemeName": "BrandingTheme.Name"
            }
        }
    }
}
```

Refer to our [API reference](https://docs.codat.io/codat-api#/) for examples of configuration for popular properties of various integrations. You can also retrieve your existing supplemental data configuration by using the [endpoint name]/endpoint link endpoint:
```http
GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

## Platform endpoint mapping

Review the table below for platform endpoints we use in our data types, which are available for you to pull or send supplemental data. Refer to to the platform's individual documentation (for example, [Xero](https://developer.xero.com/documentation/api/accounting/overview) or [QBO](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/account)) for further details of their endpoints.

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQIOf4fqpv6L2Phe3iz5nLMPDdBVaAuI3La5dTMTn58TZq_6395WtUsUq7s7jAbeq2vwuseiCzu5DZG/pubhtml?widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "400px" }}
></iframe>

## Tips and pitfalls

- Supplemental data is currently available only at the record level and cannot be used to interact with line-level properties. 

- Data within the supplemental data object is not validated, manipulated, standardized, or transformed by Codat. 

- It is not possible to query Codat’s API on the supplemental data.

- When you add or change supplemental data configuration, the next sync of this data type will be a full sync by default to ensure that supplemental data is added to both new and previously synced records.

- We expose the data sources available to interact with supplemental data but request you to refer to the platforms' own documentation for details on available data and properties for each data source.

- Where we are unable to retrieve requested supplemental data, the fetch operation will still complete, but the supplemental properties will be null.
