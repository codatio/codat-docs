---
title: "Banking account inflows and outflows"
hidden: true
createdAt: "2022-06-27T09:46:18.437Z"
updatedAt: "2022-07-06T14:51:04.121Z"
---

:::caution Banking account inflows and outflows - Beta testing
Please note, this feature is in beta testing. We encourage you to provide any feedback you have on the product by selecting _Submit idea_ <a href="https://portal.productboard.com/codat/7-product-roadmap/tabs/20-accounting-api" target="_blank">here</a> on our roadmap.
:::

This endpoint retrieves a paginated list of banking transactions for one or more connections.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

For _Banking account inflows and outflows_, these are the dimensions and measures:

**Dimensions**

- Period

**Measures**

- Converted Inflows
- Converted Outflows

**Report Data**

- Is structured based on dimension (index =“0”). i.e. Period

`GET /data/companies/{companyId}/assess/banking/bankingInflowsOutflows`

## Parameters

|Parameter|Type|Description|Required|
|----|----|----|----|
|**query**|_string_, See [Querying](/using-the-api/querying)|Codat query string. It can be empty. If empty, it returns data for all bank accounts for a specific company.|Optional|
|**displayCurrency**|_string_|The currency, in ISO 4217 format, the results are converted to. Default is "GBP".|Required|
|**reportDate**|_string_, See [Date](/common-api#/schemas/DateTime)|YYYY-MM-DD, Users can specify a specific date, however the response will be provided for the full month.|Required|
|Period unit|_string_|"day", "week", "month", "year". Default is "month".|Required|
|**periodLength**|_integer_|The number of months per period. E.g. 2 = 2 months per period.|Required|
|**numberOfPeriods**|_integer_|The number of periods to return. There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.|Required|
|**includeDisplayNames**|_boolean_|Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable. Default is 'false'.|Optional|

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data. The structure allows Codat to add _Dimensions_ without causing a breaking change in your code.

## Report info

|Field|Type|Description|
|----|----|----|
|**name**|_string_|"banking_account_inflows_outflows"|
|**displayName**|_string_|"Banking account inflows and outflows"|
|**currencyConversion**|_string_|Returns the currency passed in the query parameter `displayCurrency`.|

## Dimensions

The Assess _Banking account inflows and outflows_ consists of one dimension: Period.

### Dimension (index = “0”): Period

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Period"|
|**type**|_string_|"datespan"|
|**items**|_array_,See [Dimension (index = "0") items](#dimension-index--0-items)|Returns an array of "Period". This is driven by the query parameter values.Ordered by latest to earliest periods.|


#### Dimension (index = “0”) items

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Period n"|
|**start**|_string_, See [Date](/common-api#/schemas/DateTime)|YYYY-MM-DD, Date in which the period begins (inclusive).|
|**end**|_string_, See [Date](/common-api#/schemas/DateTime)|YYYY-MM-DD, Date in which the period ends (inclusive).|


## Measures

_Measures_ provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - Converted Inflows

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_||
|**units**|_string_|The currency selected to display in the query parameters, `displayCurrency`.|
|**type**|_string_|"currency"|

### Index “1” - Converted Outflows

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_||
|**units**|_string_|The currency selected to display in the query parameter, `displayCurrency`.|
|**type**|_string_|"currency"|

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of one dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Converted Inflows_ and _Converted Outflows_.

### Components structure

|Field|Type|Description|
|----|----|----|
|**dimension**|_number_|"0"|
|**dimensionDisplayName**|_string_|Shows when _includeDisplayNames_ is set to _true_.|
|**item**|_number_||
|**itemDisplayName**|_string_|Shows when _includeDisplayNames_ is set to _true_.|
|**measures**|See [Measures in components](#measures-in-components)||

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" - Converted Inflows**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Converted Inflows"|
|**value**|_currency_||

**Index “1” - Converted Outflows**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Converted Outflows"|
|**value**|_currency_||

# Example data

```
{
  "reportInfo": {
      "name": "banking_account_inflows_outflows",
      "displayName": "Banking account inflows and outflows",
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
          "displayName": "Converted Inflows",
          "units": "GBP",
          "index": 0,
          "type": "currency"
      },
      {
          "displayName": "Converted Outflows",
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
                  "measureDisplayName": "Converted Inflows",
                  "value": 1739006.27
              },
              {
                  "index": 1,
                  "measureDisplayName": "Converted Outflows",
                  "value": 885550.68
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
                  "measureDisplayName": "Converted Inflows",
                  "value": 2675722.62
              },
              {
                  "index": 1,
                  "measureDisplayName": "Converted Outflows",
                  "value": 1966732.23
              }
          ]
      }
  ]
}
```
