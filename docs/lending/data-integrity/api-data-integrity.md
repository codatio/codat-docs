---
title: "Data Integrity"
description: "Reference document for the data integrity endpoints"
createdAt: "2022-01-13T14:46:31.445Z"
updatedAt: "2022-11-22T16:18:03.295Z"
---

The Data Integrity API consists of the following endpoints:

- [Status](#status) endpoints: (one per datatype) exposes the information needed to usefully query results.
- [Summaries](#summaries) endpoints: (one per datatype) exposes summary results, queryable in a granular way.
- [Details](#details) endpoints: (one per datatype) exposes record by record information, queryable using the same parameters as the summary endpoint.

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


## Summaries

This endpoint exposes a summary of match results for a given data type filtered by a query string in the Codat query language. Only the summary results are returned, no transactions.

So, for example, if you wanted to see summary match results only for transactions after 1 December 2020, you could send `query=date>2020-12-01`.

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-assess-dataTypes-dataType-dataIntegrity-summaries">API reference</a>.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries`

### Parameters
| **Parameter** | Type | Description | Required |
|---|---|---|---|
| **companyId** | _string_ | The ID of the company you want match results for. Submit as route parameter. | Required |
| **datatype** | _string_ | The data type you want match results for. | Required |
| **Query** | _string_ | You can query any properties in the response, e.g. `query=date>2020-12-01`. <br/> It can also be left blank. This follows the standard [Codat query language](/using-the-api/querying). |  |


### Data model

For transactions, the response contains summary statistics (such as match percentage) by both amount and count. For accounts, statistics based on amount are not meaningful, therefore we return only statistics based on count.

| **Field** | Type | Description |  
|---|---|---|
| **type** | _string_ | The data type which the data type in the URL has been matched against. For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_. |
| **byAmount** | See [By amount](#by-amount) |  |
| **byCount** | See [By count](#by-count) |  |


#### By amount
| **Field** | Type | Description |
|---|---|---|
| **matchPercentage** | _number_ | The percentage of the absolute value of transactions of the type specified in the route which have a match. |
| **unmatched ** | _number_ | The sum of the absolute value of transactions of the type specified in the route which don't have a match. |
| **matched** | _number_ | The sum of the absolute value of transactions of the type specified in the route which have a match. |
| **total** | _number_ | The total of unmatched and matched.  |


#### By Count
| **Field** | Type | Description |
|---|---|---|
| **matchPercentage** | _number_ | The percentage of the absolute value of transactions of the type specified in the route which have a match.The percentage of records of the type specified in the route which have a match. |
| **unmatched ** | _number_ | The number of records of the type specified in the route which don't have a match. |
| **matched** | _number_ | The number of records of the type specified in the route which do have a match. |
| **total** | _number_ | The total of unmatched and matched.  |


### Sample Response
````
//Call with banking-transactions
{
"summaries":[
{
"type":"accountTransactions",
"byAmount":{
"matchPercentage": 68.3,
"unmatched":24871.5,
"matched": 53587.5,
"total":78459.0,
},
"byCount":{
"matchPercentage": 79.3,
"unmatched":253,
"matched": 970,
"total":1223
}
}
]
}
//(identically-formatted output if you call with dataType = accountTransactions except
//it will be keyed on banking-transactions)

//Call with banking-accounts
{
"summaries":[
{
"type":"bankAccounts",
//amount-related properties will be null as not relevant to bank accounts
"byCount":{
"matchPercentage": 71.4,
"unmatched":2,
"matched": 5,
"total":7
}
}
]
}
//(identically-formatted output if you call with dataType = bankAccounts except
//it will be keyed on banking-accounts)

````

### Reproducing the overall match percentage from the Portal

The match percentage you get back from our _Summaries_ endpoint is for the data type you have specified in the url.

Consider a simple example where you have just three transactions:
  * Transaction A - Accounting, £3, no matches
  * Transaction B - Accounting, £1, matches transaction C
  * Transaction C - Banking, £1, matches transaction B

If you call the _Summaries_ endpoint with _data type = accountTransactions_, you will get a match percentage of 25%:
`match percentage = B/(A+B) = £1 / (£3 +£1)`

If however you call the Summaries endpoint with data type = banking-transactions, you will get match percentage of 100%:
`match percentage = C/C =  £1 / £1`

By contrast, in the Data Integrity page on Portal, the match percentage displayed is match percentage by amount across accounting and banking transactions. In our example, the match percentage displayed on the Portal would be 40%:
`match percentage = (B+C)/(A+B+C) = (£1 + £1)/(£3 +£1 + £1)`

<img src="/img/old/cf7bc11-DataIntegrity1.png"/>

You can reproduce this match percentage yourself by fetching the summaries for _accountTransactions_ and _banking-transactions_ in separate API calls, and combining the results client-side, e.g. by taking a weighted average of the match percentages.

Note that by default the percentage on the Portal is also restricted to the overlapping date range; you can reproduce this yourself by getting the min and max overlapping dates from the _Status_ endpoint, and then restricting your calls to the _Summaries_ endpoint to these dates using the query parameter.

E.g. if the Status response contains this:

````
"dates":{
..
"minOverlappingDate":"2021-09-03T12:00:00.000Z",
"maxOverlappingDate":"2021-09-17T23:59:59.999Z"
} ",
"language": "text"
}
]
}
````

Then you would call each of the _Summaries_ endpoints with (url-escaped) `query=date>=2021-09-03T12:00:00.000Z&&date<=2021-09-17T23:59:59.999`.

## Details


This endpoint exposes match results record by record for a given data type, filtered based on a query string in the same way as summary results. The results are [paginated](/using-the-api/paging) and support [ordering](/using-the-api/ordering-results), following the same conventions as our other data endpoints.

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-assess-dataTypes-dataType-dataIntegrity-details">API reference</a>.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details`

### Parameters
| **Parameter** | Type | Description |
|---|---|---|
| **companyId** | _string_ | The ID of the company you want match results for. <br/> Submit as route parameter. |
| **dataType** | _string_ | The data type you want match results for. <br/> **Accounting source:** <br/> **[bankAccounts](/accounting-api#/schemas/BankAccount), <br/> [accountTransactions](/accounting-api#/schemas/AccountTransaction)**. <br/> **Banking source:** <br/> **[banking-accounts](/banking-api#/schemas/Account), <br/> [banking-transactions](/banking-api#/schemas/Transaction)**. <br/> Submit as route parameter. |
| **Query** | _string_ | Can query any property in response. This follows the standard [Codat query language](/using-the-api/querying). |
| **page** | _number_ | Submit as query parameter. Defaults to 1. |
| **pageSize** | _number_ | Submit as query parameter. Defaults to 100. |
| **orderBy** | _string_ | State the property name by which you would like to order the response by. <br/> Submit as query parameter. |


### Data model

#### Response for transactions
| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type of the record.  |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform.  |
| **id** | _string_ | ID GUID of the transaction. This is unique to data integrity.|
| **date** | _date_, See [Date](/codat-api#/schemas/DateTime) | The date of the transaction.  |
| **description** | _string_ | The transaction description.  |
| **amount** | _number_ | The transaction value.  |
| **currency** | _string_ | The currency of the transaction.  |
| **matches** | _array_, See [Transactions matches array](/assess/data-integrity/api-data-integrity#transactions-matches) | Refer to the matches array table below. |

#### Transactions matches
This outlines the transaction(s) in which the original transaction has matched with its corresponding transaction in the other platform.

| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type which the data type in the URL has been matched against. <br/> For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_. |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform. |
| **id** | _string_ | ID GUID of the transaction. This is unique to data integrity.|
| **date** | _date_, See [Date](/codat-api#/schemas/DateTime) | The date of the transaction.  |
| **description** | _string_ | The transaction description.  |
| **amount** | _number_ | The transaction value.  |
| **currency** | _string_ | The currency of the transaction.  |


#### Response for accounts
| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type of the record.  |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform.  |
| **id ** | _string_ | The account’s id. |
| **accountName ** | _string_ | The name of the account.  |
| **institution ** | _string_ | The name of the financial institution. |
| **matches** | _array_, See [Accounts matches array](/assess/data-integrity/api-data-integrity#transactions-matches) | Refer to the matches array table below. |

#### Accounts matches
| **Element ** | Type  | Description |
|---|---|---|
| **type** | _string_ | The data type which the data type in the URL has been matched against. <br/> For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_. |
| **connectionId** | _string_ | ID GUID representing the connection of the accounting or banking platform.  |
| **id ** | _string_ | The account’s id.  |
| **accountName ** | _string_ | The name of the account.  |
| **institution ** | _string_ | The name of the financial institution.  |

### Sample Response

````
//Call with datatype = accountTransactions
{
  "results": [
    {
      "type":"accountTransactions",
      "connectionId": "guid",
      //Id field here and on matches will be accountId_transactionId.
      //This is because we ideally would like a single consistent model for
      //'transaction-related' datatypes, and e.g. invoices don't have an account ID.
      //We will make this clear in documentation.
      "id": "string",
      "date": "2021-09-15T09:00:10.898Z",
      "description": "Buying toast",
      "amount": 236.94,
      "matches":[
        {
          "type":"banking-transactions",
          "connectionId": "guid",
          "id": "string",
          "date": "2021-09-15T09:00:10.898Z",
          "description": "Purchasing toast",
          "amount": 236.94,
        },
        {
          "type":"banking-transactions",
          "connectionId": "guid",
          "id": "string",
          "date": "2021-09-15T09:00:10.898Z",
          "description": "Investing in grilled bread",
          "amount": 288.81,
        }
      ]
    }
  ],
  "pageNumber": 1,
  "pageSize": 50,
  "totalResults": 237
}
//(Calling with datatype = banking-transactions will produce results in an identical format,
//except that the list of matches will all have a 'type' field of accountTransaction)

//Call with datatype = bankAccounts
{
  "results": [
    {
      "type": "bankAccounts",
      "connectionId": "guid",
      "id": "string",
      "accountName": "string",
      "institution": "string",
      "matches": [
        {
          "type": "banking-accounts",
          "connectionId": "guid",
          "id": "string",
          "accountName": "string",
          "institution": "string"
        }
      ]
    }
  ],
  "pageNumber": 1,
  "pageSize": 20,
  "totalResults": 23
}
//(Calling with datatype = banking-accounts will produce results in an identical format,
//except that the list of matches will all have a 'type' field of bankAccounts)```
````
