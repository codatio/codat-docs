---
title: "API: data integrity"
description: "Reference document for the Data Integrity endpoints"
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

:::info Overlapping dates",

In the UK, Open Banking allows you to pull a maximum of 24 months of data but could be less with just 18 or 12 months available.

This means that companies can have data for different date ranges from different sources, which could distort results. For example, if the accounting package has data synced from 2018 and the banking source only has data synced from 2019, the match percentage will be distorted by all the ‘unmatched’ transactions from 2018.

It is recommended that you use match results only for the date range when data from both sources overlap; this is provided for you in the _Overlapping dates_ part of the status response.
:::

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__assess_dataTypes__dataType__dataIntegrity_status" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/status`

### Parameters
{
"data": {
"h-0": "Parameter",
"h-1": "Type",
"h-2": "Description",
"h-3": "Required",
"1-0": "**datatype**",
"1-1": "_string_",
"1-2": "The data type you want match results for.

**Accounting source:**
[bankAccounts](/accounting-api#/schemas/bankaccounts)
[accountTransactions](/accounting-api#/account-transactions)

**Banking source:**
[banking-accounts](/data-model/banking-banking-accounts)
[banking-transactions](/data-model/banking-banking-transactions)

Submit as route parameter.",
"1-3": "Required",
"h-4": "",
"1-4": "",
"0-0": "**companyId**",
"0-1": "_string_",
"0-3": "Required",
"0-2": "The ID of the company you want match results for.

Submit as route parameter."
},
"cols": 4,
"rows": 2
}

### Data model
{
"data": {
"h-0": "Field",
"h-3": "Description",
"h-4": "Description",
"0-1": "_string_",
"0-3": "",
"0-4": "",
"1-1": "See [Status info](#status-info)",
"2-4": "",
"3-4": "",
"4-4": "",
"2-3": "",
"3-3": "",
"4-3": "",
"2-1": "See [Connection ID](#connection-id)",
"3-1": "See [Amounts](#amounts)",
"4-1": "See [Dates](#dates)",
"1-3": "",
"3-2": "Only returned for transactions. For accounts, there is nothing returned.",
"4-2": "Only returned for transactions. For accounts, there is nothing returned.",
"0-2": "The data type which the data type in the URL has been matched against. For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_.",
"1-2": "",
"2-2": "",
"h-2": "Description",
"h-1": "Type",
"0-0": "**type**",
"1-0": "**statusInfo**",
"2-0": "**connectionIds**",
"3-0": "**amounts**",
"4-0": "**dates**"
},
"cols": 3,
"rows": 5
}

#### Status info
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**lastMatched**",
"0-1": "_string_
See [Date](/datamodel-shared-date)",
"0-2": "The date the matching algorithm last ran against the company’s bank transactions.",
"1-2": "One of the following:

- `Unknown`
- `DoesNotExist` - have never attempted a match run for this company as do not have datasets required
- `Error` - something went wrong upon matching
- `Processing`
- `Complete`",
  "1-0": "**currentStatus**",
  "1-1": "_string_",
  "2-0": "**statusMessage**",
  "2-1": "_string_",
  "2-2": "Detailed explanation supporting the status value."
  },
  "cols": 3,
  "rows": 3
  }

#### Connection ID


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**source**",
"0-1": "_array_",
"1-0": "**target**",
"1-1": "_array_",
"0-2": "An array of _strings_. The connection IDs for the type specified in the url.",
"1-2": "An array of _strings_. The connection IDs for the type being matched to."
},
"cols": 3,
"rows": 2
}


#### Amounts


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**min**",
"1-0": "**max**",
"0-1": "_number_",
"1-1": "_number_",
"0-2": "Lowest value of transaction set.",
"1-2": "Highest value of transaction set."
},
"cols": 3,
"rows": 2
}


#### Dates


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**minDate**",
"1-0": "**maxDate**",
"2-0": "**minOverlappingDate**",
"3-0": "**maxOverlappingDate**",
"0-1": "_string_
See [Date](/datamodel-shared-date)",
"1-1": "_string_
See [Date](/datamodel-shared-date)",
"2-1": "_string_
See [Date](/datamodel-shared-date)",
"3-1": "_string_
See [Date](/datamodel-shared-date)",
"0-2": "Earliest date of transaction set.",
"1-2": "Latest date of transaction set.",
"2-2": "Earliest date where transactions exist in both accounting and banking platforms.",
"3-2": "Latest date where transactions exist in both account and banking platforms."
},
"cols": 3,
"rows": 4
}


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
//it will be keyed on banking-accounts)```


## Summaries

This endpoint exposes a summary of match results for a given data type filtered by a query string in the Codat query language. Only the summary results are returned, no transactions.

So, for example, if you wanted to see summary match results only for transactions after 1 December 2020, you could send ‘query=date>2020-12-01’.

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__assess_dataTypes__dataType__dataIntegrity_summaries" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/summaries`

### Parameters

{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Required",
    "2-0": "**Query**",
    "2-1": "*string*",
    "2-2": "You can query any properties in the response.
It can be left blank. E.g.
query=date>2020-12-01

Submit as query parameter.
This follows the standard [Codat query language](/using-the-api/querying).",
    "0-0": "**companyId**",
    "0-1": "*string* ",
    "0-2": "The ID of the company you want match results for.

Submit as route parameter.",
    "0-3": "Required",
    "1-3": "Required",
    "1-2": "The data type you want match results for.

**Accounting source:**
[bankAccounts](/accounting-api#/schemas/bankaccounts)
[accountTransactions](/accounting-api#/account-transactions)

**Banking source:**
[banking-accounts](/data-model/banking-banking-accounts)
[banking-transactions](/data-model/banking-banking-transactions)

Submit as route parameter.",
    "1-1": "*string*",
    "1-0": "**datatype**"
  },
  "cols": 4,
  "rows": 3
}


### Data model
For transactions, the response contains summary statistics (such as match percentage) by both amount and count. For accounts, statistics based on amount are not meaningful, therefore we return only statistics based on count.

{
  "data": {
    "h-0": "Field",
    "h-2": "Description",
    "h-3": "Description",
    "0-3": "",
    "1-3": "",
    "3-3": "The percentage in which the system can match the bank transactions between accounting and banking platforms.",
    "0-2": "The data type which the data type in the URL has been matched against. For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_.",
    "1-2": "",
    "0-0": "**type**",
    "1-0": "**byAmount**",
    "4-3": "The sum of transaction value (if byAmount), or number of records (if byCount) in which the system cannot match the bank transactions between accounting and banking platforms.",
    "5-3": "The sum of transaction value (if bymount), or number of records (if byCount) in which the system can match the bank transactions between accounting and banking platforms.",
    "6-3": "The total of unmatched and matched.",
    "3-2": "Number",
    "4-2": "Number",
    "5-2": "Number",
    "6-2": "Number",
    "3-1": "matchPercentage",
    "4-1": "unmatched",
    "5-1": "matched",
    "6-1": "total",
    "h-1": "Type",
    "1-1": "See [By amount](#by-amount)",
    "0-1": "*string*",
    "2-0": "**byCount**",
    "2-1": "See [By count](#by-count)",
    "2-2": ""
  },
  "cols": 3,
  "rows": 3
}


#### By amount

{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**matchPercentage**",
    "1-0": "**unmatched**",
    "2-0": "**matched**",
    "3-0": "**total**",
    "0-1": "*number*",
    "1-1": "*number*",
    "2-1": "*number*",
    "3-1": "*number*",
    "0-2": "The percentage of the absolute value of transactions of the type specified in the route which have a match.",
    "1-2": "The sum of the absolute value of transactions of the type specified in the route which don't have a match.",
    "2-2": "The sum of the absolute value of transactions of the type specified in the route which have a match.",
    "3-2": "The total of unmatched and matched."
  },
  "cols": 3,
  "rows": 4
}


#### By Count

{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**matchPercentage**",
    "1-0": "**unmatched**",
    "2-0": "**matched**",
    "3-0": "**total**",
    "0-1": "*number*",
    "1-1": "*number*",
    "2-1": "*number*",
    "3-1": "*number*",
    "0-2": "The percentage of records of the type specified in the route which have a match.",
    "1-2": "The number of records of the type specified in the route which don't have a match.",
    "2-2": "The number of records of the type specified in the route which do have a match.",
    "3-2": "The total of unmatched and matched."
  },
  "cols": 3,
  "rows": 4
}


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

```

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

You can reproduce this match percentage yourself by fetching the summaries for accountTransactions and banking-transactions in separate API calls, and combining the results client-side, e.g. by taking a weighted average of the match percentages.

Note that by default the percentage on the Portal is also restricted to the overlapping date range; you can reproduce this yourself by getting the min and max overlapping dates from the Status endpoint, and then restricting your calls to the Summaries endpoint to these dates using the query parameter.

E.g. if the Status response contains this:

```

"dates":{
..
"minOverlappingDate":"2021-09-03T12:00:00.000Z",
"maxOverlappingDate":"2021-09-17T23:59:59.999Z"
} ",
"language": "text"
}
]
}

Then you would call each of the _Summaries endpoints_ with (url-escaped) query=date>=2021-09-03T12:00:00.000Z&&date<=2021-09-17T23:59:59.999.

## Details

This endpoint exposes match results record by record for a given data type, filtered based on a query string in the same way as summary results. The results are [paginated](/using-the-api/pagination) and support [ordering](/using-the-api/ordering-results), following the same conventions as our other data endpoints.

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__assess_dataTypes__dataType__dataIntegrity_details" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/assess/dataTypes/{dataType}/dataIntegrity/details`

### Parameters

{
"data": {
"2-0": "**Query**",
"3-0": "**page**",
"4-0": "**pageSize**",
"5-0": "**orderBy**",
"2-1": "_string_",
"5-1": "_string_",
"h-0": "Parameter",
"h-1": "Type",
"h-2": "Description",
"h-3": "Required",
"3-3": "",
"2-2": "Can query any property in response.

Submit as query parameter.
This follows the standard [Codat query language](/using-the-api/querying).",
"5-2": "State the property name by which you would like to order the response by.

Submit as query parameter.",
"3-1": "_number_",
"4-1": "_number_",
"3-2": "Submit as query parameter. Defaults to 1.",
"4-2": "Submit as query parameter. Defaults to 100.",
"0-0": "**companyId**",
"1-0": "**dataType**",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "The ID of the company you want match results for.

Submit as route parameter.",
"1-2": "The data type you want match results for.

**Accounting source:**
[bankAccounts](/accounting-api#/schemas/bankaccounts)
[accountTransactions](/accounting-api#/account-transactions)

**Banking source:**
[banking-accounts](/data-model/banking-banking-accounts)
[banking-transactions](/data-model/banking-banking-transactions)

Submit as route parameter.",
"0-3": "Required",
"1-3": "Required"
},
"cols": 4,
"rows": 6
}


### Data mode.

#### Response for transactions

{
"data": {
"h-0": "Element",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type**",
"1-0": "**connectionId**",
"2-0": "**id**",
"3-0": "**date**",
"4-0": "**description**",
"5-0": "**amount**",
"6-0": "**currency**",
"7-0": "**matches**",
"0-2": "The data type of the record.",
"1-2": "ID GUID representing the connection of the accounting or banking platform.",
"2-2": "A concatenation of the accountId and transactionId, in the format accountId_transactionId. This is unique to data integrity.",
"4-2": "The transaction description.",
"6-2": "The currency of the transaction.",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_date_
See [Date](/datamodel-shared-date)",
"4-1": "_string_",
"5-1": "_number_",
"6-1": "_string_",
"7-1": "_array_
See [Transactions matches array](/assess-api-data-integrity#transactions-matches)",
"5-2": "The transaction value.",
"3-2": "The date of the transaction.",
"7-2": "Refer to the matches array table below."
},
"cols": 3,
"rows": 8
}


#### Transactions matches

This outlines the transaction(s) in which the original transaction has matched with its corresponding transaction in the other platform.

{
"data": {
"h-0": "Element",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type**",
"1-0": "**connectionId**",
"2-0": "**id**",
"3-0": "**date**",
"4-0": "**description**",
"5-0": "**amount**",
"6-0": "**currency**",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_date_
See [Date](/datamodel-shared-date)",
"4-1": "_string_",
"5-1": "_number_",
"6-1": "_string_",
"1-2": "ID GUID representing the connection of the accounting or banking platform.",
"2-2": "A concatenation of the accountId and transactionId, in the format accountId*transactionId. This is unique to data integrity.",
"4-2": "The transaction description.",
"6-2": "The currency of the transaction.",
"3-2": "The date of the transaction.",
"5-2": "The transaction value.",
"0-2": "The data type which the data type in the URL has been matched against. For example, if you've matched \_accountTransactions* and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_."
},
"cols": 3,
"rows": 7
}


#### Response for accounts

{
"data": {
"h-0": "Element",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type**",
"1-0": "**connectionId**",
"2-0": "**id**",
"3-0": "**accountName**",
"4-0": "**institution**",
"5-0": "**matches**",
"6-0": "type",
"7-0": "connectionId",
"8-0": "id",
"9-0": "accountName",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_string_",
"4-1": "_string_",
"5-1": "_array_
See [Accounts matches array](/assess-api-data-integrity#accounts-matches)",
"1-2": "ID GUID representing the connection of the accounting or banking platform.",
"2-2": "The account’s id.",
"3-2": "The name of the account.",
"4-2": "The name of the financial institution.",
"5-2": "Refer to the matches array table below.",
"0-2": "The data type of the record."
},
"cols": 3,
"rows": 6
}


#### Accounts matches

{
"data": {
"0-0": "**type**",
"1-0": "**connectionId**",
"2-0": "**id**",
"3-0": "**accountName**",
"4-0": "**institution**",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_string_",
"4-1": "_string_",
"1-2": "ID GUID representing the connection of the accounting or banking platform.",
"2-2": "The account’s id.",
"3-2": "The name of the account.",
"4-2": "The name of the financial institution.",
"h-0": "Element",
"h-1": "Type",
"h-2": "Description",
"0-2": "The data type which the data type in the URL has been matched against. For example, if you've matched _accountTransactions_ and _banking-transactions_, and you call this endpoint with _accountTransactions_ in the URL, this property would be _banking-transactions_."
},
"cols": 3,
"rows": 5
}


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
