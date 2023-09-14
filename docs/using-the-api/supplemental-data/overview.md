---
title: "Supplemental data"
sidebar_label: "Overview"
description: "Customize data types with additional properties not included in Codat's out-of-the box data models"
---

## What is supplemental data?

Codat's supported data types include standardized properties. Some data sources (e.g. Xero) may contain properties not common across other sources, and so are not covered by our out-of-the-box data model. You can use supplemental data to extend our data types to fetch, create, or update such properties alongside our standard ones. 


Consider our Xero integration. Xero's [Contact](https://developer.xero.com/documentation/api/accounting/contacts) schema maps to Codat's `supplier` data type. Some of its properties (like `TaxNumber`) *are* mapped, whereas others (like `BankAccountDetails`) are not. If you configure supplemental data for this Xero property, `suppliers` data from Xero could additionally include `BankAccountDetails`.


## Common uses of supplemental data

Integration-specific properties not included in our standard data models may still provide you with additional benefits, enriching the data relevant for your use case. For example, you can enhance our `invoices` data type with an invoice `URL`, a Xero-specific field that directs the user to a source document for an invoice hosted outside of Xero. For QBO, the `invoices` data type can be supplemented with `SalesTermRef`, providing you with sales terms associated with an invoice.

We have compiled a list of properties commonly used by our customers to enrich our standard data types. You can [review these in detail](/using-the-api/supplemental-data/usecases) to see how you can use supplemental data to your advantage.

## Support for supplemental data

We are rapidly expanding coverage across integrations and data types according to client demand. You can help us prioritize by leaving feedback on our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api/submit-idea).

We currently cover the following integrations and data types:
 
<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vToBP6lQMT_MrB8L5e_61w2LrmpoJPAVhxCVqCuoSpWgb6ga2hUXZHlLSdCr9jY_He1b-uYaDAnH6DV/pubhtml?widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "400px" }}
></iframe>

## Configure supplemental data

You'll need to specify what supplemental data should be passed in the response for each integration and data type pair you require. To do so, use the [Configure supplemental data](/platform-api#/operations/configure-supplemental-data) endpoint.

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

Once set, you can retrieve an existing supplemental data configuration by using the [Get supplemental data configuration](/platform-api#/operations/get-supplemental-data-configuration) endpoint:

```http
GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

## Platform endpoint mapping

Review the table below for platform schemas we use in our data types, which are available for you to fetch or create supplemental data. Refer to to the platform's individual documentation (for example, [Xero](https://developer.xero.com/documentation/api/accounting/overview) or [QBO](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/most-commonly-used/account)) for further details of their schemas and property coverage.

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQIOf4fqpv6L2Phe3iz5nLMPDdBVaAuI3La5dTMTn58TZq_6395WtUsUq7s7jAbeq2vwuseiCzu5DZG/pubhtml?widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "400px" }}
></iframe>

## 💡 Tips and traps

- Supplemental data is currently available only at the record level and cannot be used to interact with line-level properties. 

- Data within the supplemental data object is not validated, manipulated, standardized, or transformed by Codat. 

- Our [querying](/using-the-api/querying) functionality doesn't support supplemental data.

- When you add or change supplemental data configuration, the next sync of this data type will be a full sync by default to ensure that supplemental data is added to both new and previously synced records.

- We expose the data sources available to interact with supplemental data but request you to refer to the platforms' own documentation for details on available data and properties for each data source.

- Where we are unable to retrieve requested supplemental data, the fetch operation will still complete, but the supplemental properties will be null.

- If we are unable to perform the operation when creating, updating, or deleting (CUD) supplemental data, the operation will fail to avoid creating or updating potentially incomplete or inaccurate records.

- If you configure properties that already exist in Codat's standard data model as supplemental properties, they will overwrite the standard data when creating, updating, or deleting records.


- Deleted objects, indicated by `metadata.isDeleted flag` set to `true`, will not be enriched by supplemental data.  You can read more about [how we handle deleted data](https://docs.codat.io/updates/230411-deletion-of-data#additional-information). 
