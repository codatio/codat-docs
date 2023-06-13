---
title: "Supplemental data"
description: "Basics and examples of ordering in Codat's APIs"
---

## What is Supplemental Data?

Supplemental data allows you to pull and push non-standardised fields alongside Codat’s standardised data model. This is useful when a particular integration contains a property which is not common across other providers and therefore does not form part of the standard data. 

example response here?

this property is in an object format, not an array format

Supplemental data gives clients the ability to pull/push additional fields from an underlying endpoint that we already use as part of our standard model. For example:

For Suppliers on Xero, we use their underlying /Contacts endpoint

Whilst many of the properties on that endpoint are already included in our standard model, some such as supplier bank account details (BankAccountDetails) are not

Clients can configure supplemental data to pull BankAccountDetails alongside every pull of standard Suppliers data from Xero

Think of supplemental data as adding additional fields to existing standard datatypes.

part of the standardized data model
included on existing data types

## How do I configure Supplemental Data?
In order to use Supplemental Data, you must first configure it for the given integration and datatype, for example Suppliers data from Xero. 


## Where is Supplemental Data available? / coverage

We are rapidly expanding coverage across integrations and datatypes according to client demand. See the list of our current coverage:
 
<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vToBP6lQMT_MrB8L5e_61w2LrmpoJPAVhxCVqCuoSpWgb6ga2hUXZHlLSdCr9jY_He1b-uYaDAnH6DV/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>


## Endpoint mapping? 

Which endpoints/fields are available for a given datatype?
In theory, all fields on all endpoints that we map to for a given datatype should be available, with the following caveats:

We will distinguish between ‘primary’ and ‘secondary’ endpoints - supplemental data will only be available on the ‘primary’ endpoints for a given datatype. For example:

On billPayments for Xero we map to seven different endpoints (/Payments, /Overpayments, /PrePayments. /BatchPayments, /CreditNotes, /Organisation, /BankAccounts, /BankTransactions).

Here we would say that /Payments, /Overpayments, /PrePayments. /BatchPayments, /CreditNotes are ‘Primary’ and therefore will have supplemental coverage under billPayments

Whereas /Organisation, /BankAccounts, /BankTransactions are secondary and therefore will not (you would expect to see /Organisation being covered as a ‘Primary’ endpoint under the companyInfo datatype)

This coverage will be clearly documented when we document publicly

There may in the future be some specific fields which we have to block via a denylist due to their sensitivity (e.g. long credit card numbers, Tax File Numbers in Australia etc.) where we do not have appetite to store the data. We have not come across any yet on endpoints we already map to, but may in future (this will certainly be the case for some endpoints available via Custom Data)

## Tips and pitfalls




Note: Codat does not standardise or normalise the data retrieved and pushed via Supplemental Data

Note: Supplemental data is only currently available at record-level. We will be expanding coverage to line-level properties soon.




## Frequent uses? use cases? examples? commonly requested properties?





## Sync considerations

How does Supplemental Data interact with sync behaviour?
When a supplemental data config is added/changed, on a delta sync it will be applied to any newly synced data, but not the previously synced data. This may not be desirable as it would result in inconsistent supplemental data across the dataset (e.g. if I had changed a property name from OldName to NewName, my previously synced data would have OldName and new data from the delta sync would have NewName).

In order to counteract this, we have built a feature toggle (link) which will force the next sync after any change to the supplementalDataConfig to be a full sync. We expect this will become the default behaviour but will remain on a feature toggle as some clients may prefer not to interfere with their full sync schedules.



## Overview

We have enhanced some of our data types with a `SupplementalData` property. This allows you to retrieve data that does not fit our standardized model from the integrations and makes it easy to pull it.

We expose the data sources available to pull supplemental data and advise you to refer to the platform's documentation for details on available data and properties for each data source.



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
```

You can also retrieve your supplemental data configuration by using the following endpoint:
`GET /integrations​/{platformKey}/datatypes/{datatype}/supplementalDataConfig`

:::caution Content validation
Codat does not validate the contents of the supplemental data configuration request. If the specified data source or properties do not exist, the request will fail.
:::

## Data model

The `supplementalData` property on a data model entity is entirely optional.

|Field|Type|Description|
|----|----|----|
|**platformKey**|_string_|The unique key for the platform that this supplemental data was fetched from.|
|**content**| |An array of [Content](#section-content).|

### Content

This object contains the source supplemental data requested from an integration in an array format. Data within this object is not manipulated, standardized, or transformed by Codat. As a result:

* Validation is not applied to the resulting data.
* It is not possible to query Codat’s API on the supplemental data.
* The object cannot be used to make available line-level information.

The `dataSource` field allows us to handle scenarios in which data is mapped from different endpoints, or from multiple endpoints.

|Field|Type|Description|
|----|----|----|
|**dataSource**|_string_|Review integration's own documentation to determine parameter values|
|**data**|__|Review integration's own documentation to determine parameter values|

Callout for data types:

This data type supports supplemental data. Read more (configuring for supplemental data)[] and review implementation procedures for (specific integrations)[].

Update the data type pages with `content` (or `supplementalData`?)

Callout for integrations:

This integration supports supplemental data. Read more about (configuring for supplemental data)[] and how you can (pull it for this integration)[].
Then a separate page perhaps? Or Reference, or Set up pages