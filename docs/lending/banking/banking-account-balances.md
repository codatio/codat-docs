---
title: "Banking account balances"
---

:::caution Banking account balances - Beta testing

Please note, this feature is in beta testing. We encourage you to provide any feedback you have on the product by selecting _Submit idea_ <a href="https://portal.productboard.com/codat/7-product-roadmap/tabs/20-accounting-api" target="_blank">here</a> on our roadmap.
:::

This endpoint retrieves the current balance and balance limit for a company, over one or more periods of time, and provides the data in the currency requested in the query parameters.

Refer to the [Lending reporting structure](/lending-api#/schemas/Report) page for more detail on reports in Lending.

For _Banking account balances_, these are the dimensions and measures:

**Dimensions**

- Period

**Measures**

- Converted Current Balance
- Converted Balance Limit

**Report Data**

- Is structured based on dimension (index =“0”). i.e. Period

`GET /data/companies/{companyId}/lending/bankingMetrics/accountBalances`


## Parameters
|Parameter|Type|Description|Required|
|----|----|----|----|
|**query**|*string*, See [Querying](/using-the-api/querying)|Codat query string. It can be empty. If empty, it returns data for all bank accounts for a specific company.|Optional|
|**displayCurrency**|*string*|The currency, in ISO 4217 format, the results are converted to. Default is "GBP".|Required|
|**reportDate**|*string*, See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DD, Users can specify a specific date, however the response will be provided for the full month.|Required|
|Period unit|*string*|"day","week", "month", "year", Default is "month".|Required|
|**periodLength**|*integer*|The number of months per period. E.g. 2 = 2 months per period.|Required|
|**numberOfPeriods**|*integer*|The number of periods to return. There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|Required|
|**includeDisplayNames**"|*boolean*|Shows the *dimensionDisplayName* and *itemDisplayName* in measures to make the report data human-readable. Default is 'false'.|Optional|

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data. The structure allows Codat to add *Dimensions* without causing a breaking change in your code.

## Report info
|Field|Type|Description|
|----|----|----|
|**name**|*string*|"banking_account_balances"|
|**displayName**|*string*|"Banking account balances"|
|**currencyConversion**|*string*|Returns the currency passed in the query parameter `displayCurrency`.|

## Dimensions

The Lending *Banking account balances* consists of one dimension: Period.

### Dimension (index = “0”): Period
|Field|Type|Description|
|----|----|----|
|**displayName**|*string*|"Period"|
|**type**|*string*|"datespan"|
|**items**|*array*, See [Dimension (index = "0") items](#dimension-index--0-items)|Returns an array of "Period". This is driven by the query parameter values.Ordered by latest to earliest periods.|

#### Dimension (index = “0”) items

|Field|Type|Description|
|----|----|----|
|**displayName**|*string*|"Period n"|
|**start**|*string*, See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DD, Date in which the period begins (inclusive).|
|**end**|*string*, See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DD, Date in which the period ends (inclusive).|

## Measures

*Measures* provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - Converted Current Balance

|Field|Type|Description|
|----|----|----|
|**displayName**|*string*|"Converted Current Balance"|
|**units**|*string*|The currency selected to display in the query parameters, `displayCurrency`.|
|**type**|*string*|"currency"|

### Index “1” - Converted Balance Limit

|Field|Type|Description|
|----|----|----|
|**displayName**|*string*|"Converted Balance Limit"|
|**units**|*string*|The currency selected to display in the query parameter, `displayCurrency`.|
|**type**|*string*|"currency"|

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of one dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into *Converted Current Balance* and *Converted Balance Limit*.

### Components structure

|Field|Type|Description|
|----|----|----|
|**dimension**|*number*|"0"|
|**dimensionDisplayName**|*string*|Shows when *includeDisplayNames* is set to *true*.|
|**item**|*number*||
|**itemDisplayName**|*string*|Shows when *includeDisplayNames* is set to *true*.|
|**measures**|See [Measures in components](#measures-in-components)||

All components have the structure described in the *Measures in components* data model below.

#### Measures in components

**Index "0" - Converted Current Balance**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|*string*|"Converted Current Balance"|
|**value**|*currency*||

**Index “1” - Converted Balance Limit**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|*string*|"Converted Balance Limit"|
|**value**|*currency*||

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

