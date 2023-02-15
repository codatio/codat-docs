---
title: "Banking account balances"
hidden: true
createdAt: "2022-05-26T13:21:50.091Z"
updatedAt: "2022-07-06T14:50:43.873Z"
---

:::caution Banking account balances - Beta testing

Please note, this feature is in beta testing. We encourage you to provide any feedback you have on the product by selecting _Submit idea_ <a href="https://portal.productboard.com/codat/7-product-roadmap/tabs/20-accounting-api" target="_blank">here</a> on our roadmap.
:::

This endpoint retrieves the current balance and balance limit for a company, over one or more periods of time, and provides the data in the currency requested in the query parameters.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

For _Banking account balances_, these are the dimensions and measures:

**Dimensions**

- Period

**Measures**

- Converted Current Balance
- Converted Balance Limit

**Report Data**

- Is structured based on dimension (index =“0”). i.e. Period

The endpoint is available in <a href="https://api.codat.io/swagger/index.html#/Assess">API reference</a>.

`GET ​/data​/companies​/{companyId}​/assess​/bankingMetrics/accountBalances`


## Parameters

{
  "data": {
    "h-0": "Parameter",
    "h-1": "Type",
    "h-2": "Description",
    "h-3": "Required",
    "2-0": "**reportDate**",
    "2-1": "*string*
See [Date](/common-api#/schemas/DateTime)",
    "2-2": "YYYY-MM-DD

Users can specify a specific date, however the response will be provided for the full month.",
    "2-3": "Required",
    "5-0": "**numberOfPeriods** ",
    "5-1": "*integer*",
    "5-2": "The number of periods to return.

There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.",
    "5-3": "Required",
    "4-0": "**periodLength** ",
    "4-1": "*integer*",
    "4-2": "The number of months per period. E.g. 2 = 2 months per period.",
    "4-3": "Required",
    "6-0": "**includeDisplayNames**",
    "6-1": "*boolean*",
    "6-2": "Shows the *dimensionDisplayName* and *itemDisplayName* in measures to make the report data human-readable.

Default is 'false'.",
    "6-3": "Optional",
    "0-0": "**query**",
    "0-1": "*string*
See [Querying](/using-the-api/querying)",
    "0-2": "Codat query string.

It can be empty. If empty, it returns data for all bank accounts for a specific company.",
    "1-0": "**displayCurrency**",
    "1-1": "*string*",
    "0-3": "Optional",
    "1-3": "Required",
    "1-2": "The currency, in ISO 4217 format, the results are converted to.

Default is "GBP".",
    "3-0": "Period unit",
    "3-1": "*string*",
    "3-2": ""day"
"week"
"month"
"year"

Default is "month".",
    "3-3": "Required"
  },
  "cols": 4,
  "rows": 7
}

#Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data. The structure allows Codat to add *Dimensions* without causing a breaking change in your code.

## Report info
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**name** ",
    "0-1": "*string*",
    "0-2": ""banking_account_balances"",
    "1-0": "**displayName** ",
    "1-1": "*string*",
    "1-2": ""Banking account balances"",
    "2-0": "**currencyConversion**",
    "2-1": "*string*",
    "2-2": "Returns the currency passed in the query parameter `displayCurrency`."
  },
  "cols": 3,
  "rows": 3
}

## Dimensions

The Assess *Banking account balances* consists of one dimension: Period.

### Dimension (index = “0”): Period
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**displayName** ",
    "0-1": "*string*",
    "0-2": ""Period"",
    "1-0": "**type** ",
    "1-1": "*string*",
    "1-2": ""datespan"",
    "2-0": "**items** ",
    "2-1": "*array*
See [Dimension (index = “0”) items](#dimension-index--0-items)",
    "2-2": "Returns an array of “Period”. This is driven by the query parameter values.

Ordered by latest to earliest periods."
  },
  "cols": 3,
  "rows": 3
}

#### Dimension (index = “0”) items
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**displayName** ",
    "0-1": "*string*",
    "0-2": ""Period n"",
    "1-0": "**start** ",
    "1-1": "*string*
See [Date](/common-api#/schemas/DateTime)",
    "1-2": "YYYY-MM-DD

Date in which the period begins (inclusive).",
    "2-1": "*string*
See [Date](/common-api#/schemas/DateTime)",
    "2-0": "**end** ",
    "2-2": "YYYY-MM-DD

Date in which the period ends (inclusive)."
  },
  "cols": 3,
  "rows": 3
}

## Measures

*Measures* provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - Converted Current Balance
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**displayName** ",
    "0-1": "*string*",
    "0-2": ""Converted Current Balance"",
    "2-0": "**type** ",
    "2-1": "*string*",
    "2-2": ""currency"",
    "1-0": "**units**",
    "1-1": "*string*",
    "1-2": "The currency selected to display in the query parameters, `displayCurrency`."
  },
  "cols": 3,
  "rows": 3
}

### Index “1” - Converted Balance Limit
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**displayName** ",
    "0-1": "*string*",
    "2-0": "**type** ",
    "2-1": "*string*",
    "0-2": "“Converted Balance Limit”",
    "2-2": "“currency”",
    "1-0": "**units**",
    "1-1": "*string*",
    "1-2": "The currency selected to display in the query parameter, `displayCurrency`."
  },
  "cols": 3,
  "rows": 3
}

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of one dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into *Converted Current Balance* and *Converted Balance Limit*.

### Components structure
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**dimension** ",
    "0-1": "*number*",
    "0-2": ""0"",
    "1-0": "**dimensionDisplayName** ",
    "1-1": "*string*",
    "1-2": "Shows when *includeDisplayNames* is set to *true*.",
    "2-0": "**item** ",
    "2-1": "*number*",
    "3-0": "**itemDisplayName** ",
    "4-0": "**measures** ",
    "3-1": "*string*",
    "3-2": "Shows when *includeDisplayNames* is set to *true*.",
    "4-1": "See [Measures in components](#measures-in-components)"
  },
  "cols": 3,
  "rows": 5
}
All components have the structure described in the *Measures in components* data model below.

#### Measures in components

**Index "0" - Converted Current Balance**
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**measureDisplayName** ",
    "0-1": "*string*",
    "0-2": ""Converted Current Balance"",
    "1-0": "**value** ",
    "1-1": "*currency*"
  },
  "cols": 3,
  "rows": 2
}

**Index “1” - Converted Balance Limit**
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "**measureDisplayName** ",
    "1-0": "**value** ",
    "0-1": "*string*",
    "1-1": "*currency*",
    "0-2": "“Converted Balance Limit"",
    "1-2": ""
  },
  "cols": 3,
  "rows": 2
}

# Example data
```
{
"reportInfo": {
"name": "banking_account_balances",
"displayName": "Banking account balances",
"currencyConversion": "GBP"
},
"dimensions": [
{
"index": 0,
"displayName": "Period",
"type": "datespan",
"items": [
{
"index": 0,
"displayName": "Period 0",
"start": "2022-04-01",
"end": "2022-04-30"
},
{
"index": 1,
"displayName": "Period 1",
"start": "2022-05-01",
"end": "2022-05-31"
}
]
}
],
"measures": [
{
"displayName": "Converted Current Balance",
"units": "GBP",
"index": 0,
"type": "currency"
},
{
"displayName": "Converted Balance Limit",
"units": "GBP",
"index": 1,
"type": "currency"
}
],
"reportData": [
{
"dimension": 0,
"dimensionDisplayName": "Period",
"item": 0,
"itemDisplayName": "Period 0",
"measures": [
{
"index": 0,
"measureDisplayName": "Converted Current Balance",
"value": 3049332.27
},
{
"index": 1,
"measureDisplayName": "Converted Balance Limit",
"value": 7000.00
}
]
},
{
"dimension": 0,
"dimensionDisplayName": "Period",
"item": 1,
"itemDisplayName": "Period 1",
"measures": [
{
"index": 0,
"measureDisplayName": "Converted Current Balance",
"value": 3912140.65
},
{
"index": 1,
"measureDisplayName": "Converted Balance Limit",
"value": 7000.00
}
]
}
]
}

```

