---
title: "Data integrity FAQs"
description: "Frequently asked questions on data integrity"
sidebar_label: "FAQs"
createdAt: "2022-01-18T14:55:56.434Z"
updatedAt: "2022-11-02T14:46:09.812Z"
---

### Overlapping dates

In the UK, Open Banking allows you to pull a maximum of 24 months of data but could be less with just 18 or 12 months available.

This means that companies can have data for different date ranges from different sources, which could distort results. For example, if the accounting package has data synced from 2018 and the banking source only has data synced from 2019, the match percentage will be distorted by all the ‘unmatched’ transactions from 2018.

It is recommended that you use match results only for the date range when data from both sources overlap; this is provided for you in the _Overlapping dates_ part of the status response.

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