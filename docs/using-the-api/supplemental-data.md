---
title: "Supplemental data"
description: "Super catchy description of supplemental data"
---

## What is supplemental data?

We have enhanced some of our data types with a `supplementalData` property. It gives you the ability to fetch additional fields from an integration's endpoint within our existing standard data types.

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

In order to use supplemental data, you need to specify what supplemental data is to be passed in the response for each integration and data type pair you require. To do so, use the [endpoint name]/endpoint link.

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
You can also retrieve your supplemental data configuration by using the [endpoint name]/endpoint link endpoint:
`GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig`

## Endpoint mapping? underlying data sources?

Which endpoints/fields are available for a given datatype?
In theory, all fields on all endpoints that we map to for a given datatype should be available, with the following caveats:

We will distinguish between ‘primary’ and ‘secondary’ endpoints - supplemental data will only be available on the ‘primary’ endpoints for a given datatype. For example:

On billPayments for Xero we map to seven different endpoints (/Payments, /Overpayments, /PrePayments. /BatchPayments, /CreditNotes, /Organisation, /BankAccounts, /BankTransactions).

Here we would say that /Payments, /Overpayments, /PrePayments. /BatchPayments, /CreditNotes are ‘Primary’ and therefore will have supplemental coverage under billPayments

Whereas /Organisation, /BankAccounts, /BankTransactions are secondary and therefore will not (you would expect to see /Organisation being covered as a ‘Primary’ endpoint under the companyInfo datatype)

This coverage will be clearly documented when we document publicly

There may in the future be some specific fields which we have to block via a denylist due to their sensitivity (e.g. long credit card numbers, Tax File Numbers in Australia etc.) where we do not have appetite to store the data. We have not come across any yet on endpoints we already map to, but may in future (this will certainly be the case for some endpoints available via Custom Data)

## Tips and pitfalls

- Supplemental data is currently available only at record level. 

- Data within the supplemental data object is not validated, manipulated, standardized, or transformed by Codat. 

- It is not possible to query Codat’s API on the supplemental data.

- When you add or change a supplemental data configuration, it will apply to all newly synced data, but not the data synced previously. This may result in inconsistent supplemental data across the dataset. You can request us to set a full sync after any changes to configuration to be default behaviour. 

- We expose the data sources available to interact with supplemental data, but request you to refer to the platforms' own documentation for details on available data and properties for each data source.

## Frequent uses? use cases? examples? commonly requested properties?

foldouts for each platform?


Callout for data types:

This data type supports supplemental data. Read more (configuring for supplemental data)[] and review implementation procedures for (specific integrations)[].

Callout for integrations:

This integration supports supplemental data. Read more about (configuring for supplemental data)[] and how you can (pull it for this integration)[].