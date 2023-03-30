---
title: "Status"
description: "Reference document for the Data Integritystatus endpoint"
sidebar_label: "Status"
---

## Matching process

Matching occurs each time a sync happens where data across all data types exist. There’s no mechanism to manually trigger a match because this is all done automatically.

## Data sources and data types

Data Integrity requires Accounting and Banking data sources to be linked with the following data types enabled:

- _banking-accounts_ for the banking data source.
- _banking-transactions_ for the banking data source.
- _bankAccounts_ for the accounting data source.
- _accountTransactions_ for the accounting data source.

:::info Deprecation notice

Matching also works with the _bankAccounts_ (banking data source) and _bankTransactions_ (banking data source). Note that these data types will be deprecated in the future.

It is recommended that you use _banking-accounts_ and _banking-transactions_ data types to get the most out of Data Integrity.
:::

## Status

This endpoint exposes the status for the company’s match results between the data type provided in the URL and other data types with which Data Integrity supports matching. It will help you understand whether match data is available and, if so, how to usefully query it.

The response tells you whether match results are available, and, if they are:

- When the results were generated, and their status.
- The connection IDs, amounts and dates involved, to support useful querying.

:::info Overlapping dates

In the UK, Open Banking allows you to pull a maximum of 24 months of data but could be less with just 18 or 12 months available.

This means that companies can have data for different date ranges from different sources, which could distort results. For example, if the accounting package has data synced from 2018 and the banking source only has data synced from 2019, the match percentage will be distorted by all the ‘unmatched’ transactions from 2018.

It is recommended that you use match results only for the date range when data from both sources overlap; this is provided for you in the _Overlapping dates_ part of the status response.
:::

The endpoint is available in our <a href="/assess-api#/operations/get-dataIntegrity-status-for-dataType">API reference</a>.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status`

### Parameters
| Parameter | Type | Description | Required |
|---|---|---|---|
| **companyId** | _string_ | The ID of the company you want match results for. <br/> Submit as route parameter. | Required |
| **datatype** | _string_ | The data type you want match results for. <br/> **Accounting source:** [bankAccounts](/accounting-api#/schemas/BankAccount), [accountTransactions](/accounting-api#/schemas/AccountTransaction). <br/> **Banking source:** [banking-accounts](/banking-api#/schemas/Account), [banking-transactions](/banking-api#/schemas/Transaction). <br/> Submit as route parameter. | Required |

### Data model
| **Field** | Type | Description |
|---|---|---|
| **type** | _string_ | The data type which the data type in the URL has been matched against. For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_. |
| **statusInfo** | See [Status info](#status-info) |  |
| **connectionIds** | See [Connection ID](#connection-id) |  |
| **amounts** | See [Amounts](#amounts) | Only returned for transactions. For accounts, there is nothing returned. |
| **dates** | See [Dates](#dates) | Only returned for transactions. For accounts, there is nothing returned. |

#### Status info
| **Field** | Type | Description |
|---|---|---|
| **lastMatched** | _string_, See [Date](/codat-api#/schemas/DateTime) | The date the matching algorithm last ran against the company’s bank transactions. |
| **currentStatus** | _string_ | One of the following: <br/> `Unknown`, <br/> `DoesNotExist` - have never attempted a match run for this company as do not have datasets required, <br/> `Error` - something went wrong upon matching, <br/> `Processing`, <br/> `Complete`  |
| **statusMessage** | _string_ | Detailed explanation supporting the status value. |


#### Connection ID
| **Field** | Type | Description |
|---|---|---|
| **source** | _array_ | An array of _strings_. The connection IDs for the type specified in the url. |
| **target** | _array_ | An array of _strings_. The connection IDs for the type specified in the url. |


#### Amounts
| **Field** | Type     | Description                        |
|-----------|----------|------------------------------------|
| **min**   | _number_ | Lowest value of transaction set.   |
| **max**   | _number_ | Highest value of transaction set.  |


#### Dates
| **Field**              | Type                                         | Description                                                                      |
|------------------------|----------------------------------------------|----------------------------------------------------------------------------------|
| **minDate**            | _string_, See [Date](/codat-api#/schemas/DateTime) | Earliest date of transaction set.                                                |
| **maxDate**            | _string_, See [Date](/codat-api#/schemas/DateTime) | Latest date of transaction set.                                                  |
| **minOverlappingDate** | _string_, See [Date](/codat-api#/schemas/DateTime) | Earliest date where transactions exist in both accounting and banking platforms. |
| **maxOverlappingDate** | _string_, See [Date](/codat-api#/schemas/DateTime) | Latest date where transactions exist in both account and banking platforms.      |


### Sample response

````
//call with dataType = 'accountTransactions'
{
  "metadata":[
      {
          "type":"banking-transactions",
          "statusInfo":{
              "lastMatched":"2021-09-17T12:09:33.441Z",
              "currentStatus":"Unknown|DoesNotExist|Error|Processing|Complete",
              "statusMessage":"string"
          },
          "connectionIds":{
              "source": ["guid","guid","guid"],
              "target": ["guid","guid","guid"]
          },
          "amounts":{
              "min":130.0,
              "max":2450.0,
          },
          "dates":{
              "minDate":"2021-09-17T12:09:33.441Z",
              "maxDate":"2021-12-16T12:12:53.441Z",
              //Overlapping dates are dates where both 'sides' of the match have data
              "minOverlappingDate":"2021-09-30T12:09:13.441Z",
              "maxOverlappingDate":"2021-11-27T12:19:33.441Z"
          }
      }
  ]
}
//(identically-formatted output if you call with dataType = banking-transactions except
//it will be keyed on accountTransactions)

//call with dataType = 'banking-accounts'
{
  "metadata":[
    {
      "type":"bankAccounts",
      "status":{
          "lastMatched":"2021-09-17T12:09:33.441Z",
          "status":"Unknown|DoesNotExist|Error|Processing|Complete",
          "statusMessage":"string"
      },
      "connectionIds":{
          "source" : ["guid","guid","guid"],
          "target":["guid","guid","guid"]
      }
        //Amount and date objects are null as not relevant to bank accounts
    }
  ]
}
//(identically-formatted output if you call with dataType = bankAccounts except
//it will be keyed on banking-accounts)
````

