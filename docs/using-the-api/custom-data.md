---
title: "Custom data"
sidebar_label: "Custom data"
description: "Fetch data types not included in Codat's out-of-the box data models from existing integrations"
---

import {IntegrationsList} from '@components/global/Integrations'
import {integrationsFilterCustomData} from '@components/global/Integrations/integrations'

## What is custom data?

Codat's standardized data model 




Some data sources (e.g. Xero) may contain properties not common across other sources, and so are not covered by our out-of-the-box data model. You can use supplemental data to extend our data types to fetch, create, or update such properties alongside our standard ones. 

Codat maintains a standard data model, to which we map data from 3rd party integrations. The scope of our data model is limited to domains/sub-domains we know are useful, and understand sufficiently well to create a standard model. This means the data available from Codat’s standard model is a small subset of what is available in the underlying integration (accounting package, commerce, banking aggregator, or other/new domain for which we don't even have a model).

Examples of recent requests:

Xero payroll data

Netsuite employees & expense reports

Subscription data (internal Risk & Insights product team wanting to build out)  

non-standardized data model straight from the underlying platform
new data types that are not part of the existing data model

This feature will offer our clients the ability to specify their own custom ‘datatype’, configuring the data they’d like us to go get from a given integration. This ultimately makes it possible for them to interact with integrations specific features/data that don't fit Codats standardised model. 

A few key things to note ahead of reading this guide:

→ Custom data is available via the API only. No data will be available in the Codat portal. 

his feature will offer our clients the ability to specify their own custom ‘datatype’, configuring the data they’d like us to go get from a given integration.

We have compiled a list of properties commonly used by our customers to enrich our standard data types. You can [review these in detail](/using-the-api/supplemental-data/usecases) to see how you can use supplemental data to your advantage.


Codat's supported data types include standardized properties. 


Consider our Xero integration. Xero's [Contact](https://developer.xero.com/documentation/api/accounting/contacts) schema maps to Codat's `supplier` data type. Some of its properties (like `TaxNumber`) *are* mapped, whereas others (like `BankAccountDetails`) are not. If you configure supplemental data for this Xero property, `suppliers` data from Xero could additionally include `BankAccountDetails`.

:::tip Custom or supplemental data?

You can also use [supplemental data](/using-the-api/supplemental-data/overview) 

We also provide supplemental data. Is that what you're looking for? Link, difference

:::

## Common uses of supplemental data

Integration-specific properties not included in our standard data models may still provide you with additional benefits, enriching the data relevant for your use case. For example, you can enhance our `invoices` data type with an invoice `URL`, a Xero-specific field that directs the user to a source document for an invoice hosted outside of Xero. For QBO, the `invoices` data type can be supplemented with `SalesTermRef`, providing you with sales terms associated with an invoice.

We have compiled a list of properties commonly used by our customers to enrich our standard data types. You can [review these in detail](/using-the-api/supplemental-data/usecases) to see how you can use supplemental data to your advantage.

## Support for supplemental data

The integration the client wants to pull custom data from needs to have been enabled for custom data.  You can see the list of integrations that support custom data here, along with integration specific configuration pages. These detail any integration specific behaviours or formatting required to access data via custom data product. 

We are rapidly expanding coverage across integrations and data types according to client demand. You can help us prioritize by leaving feedback on our [public roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api/submit-idea).

<IntegrationsList integrations={integrationsFilterCustomData}/>

## Configure supplemental data


The general principle here is to make the use of customData as similar as possible to use of standard datatypes. Ideally, once a client has configured their custom datatype, they’ll be able to interact with it in exactly the same way as they interact with a standard datatype. 

You'll need to specify what supplemental data should be passed in the response for each integration and data type pair you require. To do so, use the [Configure supplemental data](/codat-api#/operations/configure-supplemental-data) endpoint.

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
### Be on the lookout


### View configuration


### Delete configuration


### Test configuration

Given some of the restrictions with Custom Data as an initial MVP offering, it’s advised clients do some sort of testing if possible. They won’t be able to use our sandbox as it doesn’t support custom data (or non-standardised data). 

They can use the postman collection and create a test company. Providing they have a data connection to an the integration they should be able to trial different configurations.. 

## Queue a dataset sync

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

Once set, you can retrieve an existing supplemental data configuration by using the [Get supplemental data configuration](/codat-api#/operations/get-supplemental-data-configuration) endpoint:

```http
GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig
```

## Retrieve synced data


## 💡 Tips and traps

- Our [querying](/using-the-api/querying) functionality doesn't support custom data.


→ Custom data supports pull functionality only. 
→ It is for all data record and line level.
→ Sync from UTC or Delta is only supported where an integration already supports it.





- Supplemental data is currently available only at the record level and cannot be used to interact with line-level properties. 

- Data within the supplemental data object is not validated, manipulated, standardized, or transformed by Codat. 



- When you add or change supplemental data configuration, the next sync of this data type will be a full sync by default to ensure that supplemental data is added to both new and previously synced records.

- We expose the data sources available to interact with supplemental data but request you to refer to the platforms' own documentation for details on available data and properties for each data source.

- Where we are unable to retrieve requested supplemental data, the fetch operation will still complete, but the supplemental properties will be null.

- If we are unable to perform the operation when creating, updating, or deleting (CUD) supplemental data, the operation will fail to avoid creating or updating potentially incomplete or inaccurate records.

- If you configure properties that already exist in Codat's standard data model as supplemental properties, they will overwrite the standard data when creating, updating, or deleting records.


- Deleted objects, indicated by `metadata.isDeleted flag` set to `true`, will not be enriched by supplemental data.  You can read more about [how we handle deleted data](https://docs.codat.io/updates/230411-deletion-of-data#additional-information). 
