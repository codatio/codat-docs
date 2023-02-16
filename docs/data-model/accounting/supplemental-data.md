---
title: "Supplemental data"
hidden: true
createdAt: "2022-10-31T13:43:56.569Z"
updatedAt: "2022-11-04T18:14:12.996Z"
---

Explore the <a href="https://api.codat.io/swagger/index.html#/TrackingCategories" target="_blank">Supplemental data configuration</a> endpoints in Swagger.

View the coverage for supplemental data in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=trackingCategories" target="_blank">Data coverage explorer</a>.

## Overview

We have enhanced some of our data types with a `SupplementalData` property. This allows you to retrieve data that does not fit our standardized model from the integrations and makes it easy to pull it.

We expose the data sources available to pull supplemental data and advise you to refer to the platform's documentation for details on available data and properties for each data source.

## Coverage

Codat currently supports supplemental data for the following data types and integrations. Explore integrations' individual pages for implementation details of each.

{
"data": {
"h-0": "Data type",
"h-1": "Integration",
"0-0": "Invoices",
"1-0": "Customers",
"2-0": "Journal entries",
"0-1": "Xero
Netsuite",
"1-1": "Xero
Netsuite",
"2-1": "Quickbooks Online"
},
"cols": 2,
"rows": 3
}


## Configuration

To take advantage of supplemental data, you need to specify what supplemental data is to be passed in the response. You can specify this for each integration and data type pair. To configure the supplemental data, use the following endpoint:
`PUT /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig`

Note that the `dataSource` and `requiredData` parameter values must match the integration's requirements exactly, including casing. Ensure you are familiar with the source data structure as Codat does not validate the supplemental data values against the integration provider.

```
{
"supplementalDataConfig": [
  {
    "dataSource": "/contacts",
    "requiredData": [
      "contact_friendly_name",
      "xero_custom_contact_field"
    ]
  },
  {
    "dataSource": "/invoices",
    "requiredData": [
      "sourceInvoiceUrl"
    ]
  }
]
}",
      "language": "text"
    }
  ]
}

You can also retrieve your supplemental data configuration by using the following endpoint:
`GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig`

:::caution Content validation
Codat does not validate the contents of the supplemental data configuration request. If the specified data source or properties do not exist, the request will fail.
:::

## Data model

The `supplementalData` property on a data model entity is entirely optional.

{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**platformKey**",
    "1-0": "**content**",
    "0-1": "_string_",
    "1-2": "An array of [Content](#section-content).",
    "0-2": "The unique key for the platform that this supplemental data was fetched from."
  },
  "cols": 3,
  "rows": 2
}


### Content

This object contains the source supplemental data requested from an integration in an array format. Data within this object is not manipulated, standardized, or transformed by Codat. As a result:

* Validation is not applied to the resulting data.
* It is not possible to query Codat’s API on the supplemental data.
* The object cannot be used to make available line-level information.

The `dataSource` field allows us to handle scenarios in which data is mapped from different endpoints, or from multiple endpoints.

{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**dataSource**",
    "1-0": "**data**",
    "0-1": "_string_",
    "1-1": "__",
    "1-2": "Review integration's own documentation to determine parameter values",
    "0-2": "Review integration's own documentation to determine parameter values"
  },
  "cols": 3,
  "rows": 2
}

Callout for data types:

This data type supports supplemental data. Read more (configuring for supplemental data)[] and review implementation procedures for (specific integrations)[].

Update the data type pages with `content` (or `supplementalData`?)

Callout for integrations:

This integration supports supplemental data. Read more about (configuring for supplemental data)[] and how you can (pull it for this integration)[].
Then a separate page perhaps? Or Reference, or Set up pages
```
