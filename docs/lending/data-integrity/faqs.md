---
title: "Data integrity FAQs"
description: "Frequently asked questions on data integrity"
sidebar_label: "FAQs"
image: "/img/banners/social/lending.png"
draft: true
---

### Overlapping dates

In the UK, Open Banking allows you to pull a maximum of 24 months of data. However, it could be even less with just 18 or 12 months available.

This means that companies can have data for different date ranges from different sources, which could distort results. For example, if the accounting package has data synced from 2018 and the banking source only has data synced from 2019, the match percentage will be distorted by all the ‘unmatched’ transactions from 2018.

It is recommended that you use match results only for the date range when data from both sources overlap. This detail is provided for you in the _Overlapping dates_ part of the status response.

### Reproducing the overall match percentage

You may want to reproduce the overall match percentage for a specific data type, represented as the data integrity summary in our Portal and API. 

Consider a simple example where you have just three transactions:
  * Transaction A - Accounting, £3, no matches
  * Transaction B - Accounting, £1, matches transaction C
  * Transaction C - Banking, £1, matches transaction B

If you call the [Get data integrity summary](/lending-api#/operations/get-data-integrity-summaries) endpoint with _data type = accountTransactions_, you will get a match percentage of 25%:
`match percentage = B/(A+B) = £1 / (£3 +£1)`

If however you call the Summaries endpoint with _data type = banking-transactions_, you will get a match percentage of 100%:
`match percentage = C/C =  £1 / £1`

By contrast, on the Data Integrity page of the Portal, the match percentage displayed is match percentage by amount across accounting and banking transactions. In our example, the match percentage displayed on the Portal would be 40%:
`match percentage = (B+C)/(A+B+C) = (£1 + £1)/(£3 +£1 + £1)`

<img src="/img/old/cf7bc11-DataIntegrity1.png"/>

You can reproduce this match percentage yourself by fetching the summaries for `accountTransactions` and `banking-transactions` in separate API calls and combining the results client-side, e.g. by taking a weighted average of the match percentages.

By default, the percentage on the Portal is also restricted to the overlapping date range. You can reproduce this yourself by getting the min and max overlapping dates from the [Get data integrity status](/lending-api#/operations/get-data-integrity-status) endpoint, and then restricting your calls to the [Get data integrity summary](/lending-api#/operations/get-data-integrity-summaries) endpoint to these dates using the query parameter.

For example, if the _Get data integrity status_ response contains the following:

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

Then you would call each of the _Get data integrity summary_ endpoints with (url-escaped) `query=date>=2021-09-03T12:00:00.000Z&&date<=2021-09-17T23:59:59.999`.
