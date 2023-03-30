---
title: "Summaries"
description: "Reference document for the Data Integrity summaries endpoint"
sidebar_label: "Summaries"
---

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