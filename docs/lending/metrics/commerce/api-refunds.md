---
title: "Refunds"
description: "Reference document for the endpoint that produces refunds data"
createdAt: "2022-04-11T07:35:05.971Z"
updatedAt: "2022-11-29T15:21:12.613Z"
---

The Refunds endpoint retrieves the number and total value of refunds, and the refund rate for a specific company's commerce connection, over one or more periods of time.

Refer to the [Lending reporting structure](/lending/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Lending.

For Refunds, these are the dimensions and measures:

**Dimensions**

- Period
- Refund metrics

**Measures**

- Count
- Value
- Percentage

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return the **number of refunds**, **value of refunds** and **refund rate** for each period.

View the Refunds [formulas](/lending/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-commerceMetrics-refunds">API reference</a>.

`GET /data/companies/{companyId}/connections/{connectionId}/lending/commerceMetrics/refunds`

# Parameters

| **Parameter**           | Type                                        | Description                                                                                                                  | Required |
|-------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------|
| **reportDate**          | _string_ <br/> See [Date](/platform-api#/schemas/DateTime) | YYYY-MM-DD <br/> Datetime or Date (inclusive of the whole day).                                                                    | Required |
| **periodUnit**          | _string_                                    | The period unit of time returned, and it can be: “Day”, “Week”, “Month”, “Year”.                                             | Required |
| **periodLength**        | _integer_                                   | Based on the period unit provided. It must be positive, not zero and an integer.                                             | Required |
| **numberOfPeriods**     | _integer_                                   | The number of periods to return. It must be positive, not zero and an integer.                                               | Required |
| **includeDisplayNames** | _boolean_                                   | Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable. Default is false. | Optional |

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

| **Field**       | Type     | Description |
|-----------------|----------|-------------|
| **name**        | _string_ | "refunds"   |
| **displayName** | _string_ | "Refunds"   |

## Dimensions

_Refunds_ consists of these dimensions: Period and Refund metrics.

### Dimension (index = “0”): Period

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Period"|
|**type**|_string_|"datespan"|
|**items**|_array_, <br/> See [Dimension (index = "0") items](#dimension-index--0-items)|Returns an array of "Period". This is driven by the query parameter values. <br/> Ordered by latest to earliest periods.|

#### Dimension (index = “0”) items

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Period n"|
|**start**|_string_, <br/> See [Date](/platform-api#/schemas/DateTime)|YYYY-MM-DD, date in which the period begins (inclusive).|
|**end**|_string_, <br/> See [Date](/platform-api#/schemas/DateTime)|YYYY-MM-DD, date in which the period ends (inclusive).|

### Dimension (index = “1”): Refund metrics

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Refund metrics"|
|**type**|_string_|"string"|
|**items**|_array_ <br/> See [Dimension (index = "1") items](#dimension-index--1-items)|Returns an array of refund metrics.|


#### Dimension (index = “1”) items


|Field|Type|Description|
|----|----|----|
|**value**|_string_|Number of refunds, Value of refunds or Refund rate. <br/> These will always show for any response in this report. The dimension values are not dependent on the user's query parameters.|



## Measures

Measures provide information about the measures contained in the report data.

The three measures for this report are as follows:

### Index “0” - Count

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Count"|
|**type**|_number_|"int"|

### Index “1” - Value

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Value"|
|**units**|_string_|The base currency of the company's commerce connection.|
|**type**|_string_|"currency"|

### Index “2” - Percentage

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Percentage"|
|**units**|_string_|"%"|
|**type**|_string_|"percentage"|

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Refund metrics_.

### Components structure



|Field|Type|Description|
|----|----|----|
|**dimension**|_number_|Index 1|
|**dimensionDisplayName**|_string_|Shows when _includeDisplayNames_ is set to _true_.|
|**item**|_number_|
|**itemDisplayName**|_string_|Shows when _includeDisplayNames_ is set to _true_.|
|**measures**|See [Measures in components](#measures-in-components)|


All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" - Count**


|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Count"|
|**value**|_number_| |

**Index “1” - Value**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Value"|
|**value**|_string_|


**Index “2” - Refund rate**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Percentage"|
|**value**|_string_|

# Example data

```
{
  "reportInfo": {
      "name": "refunds",
      "displayName": "Refunds"
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
                  "start": "2021-03-30",
                  "end": "2021-04-30"
              },
              {
                  "index": 1,
                  "displayName": "Period 1",
                  "start": "2021-04-30",
                  "end": "2021-05-31"
              }
          ]
      },
      {
          "index": 1,
          "displayName": "Refund metrics",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Number of refunds"
              },
              {
                  "index": 1,
                  "value": "Value of refunds"
              },
              {
                  "index": 2,
                  "value": "Refund rate"
              }
          ]
      }
  ],
  "measures": [
      {
          "displayName": "Count",
          "index": 0,
          "type": "int"
      },
      {
          "displayName": "Value",
          "units": "GBP",
          "index": 1,
          "type": "currency"
      },
      {
          "displayName": "Percentage",
          "units": "%",
          "index": 2,
          "type": "percentage"
      }
  ],
  "reportData": [
      {
          "dimension": 0,
          "dimensionDisplayName": "Period",
          "item": 0,
          "itemDisplayName": "Period 0",
          "components": [
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Refund metrics",
                  "item": 0,
                  "itemDisplayName": "Number of refunds",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 6
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Refund metrics",
                  "item": 1,
                  "itemDisplayName": "Value of refunds",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Value",
                          "value": 131.92
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Refund metrics",
                  "item": 2,
                  "itemDisplayName": "Refund rate",
                  "measures": [
                      {
                          "index": 2,
                          "measureDisplayName": "Percentage",
                          "value": 0.75
                      }
                  ]
              }
          ]
      },
      {
          "dimension": 0,
          "dimensionDisplayName": "Period",
          "item": 1,
          "itemDisplayName": "Period 1",
          "components": [
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Refund metrics",
                  "item": 0,
                  "itemDisplayName": "Number of refunds",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 4
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Refund metrics",
                  "item": 1,
                  "itemDisplayName": "Value of refunds",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Value",
                          "value": 95.14
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Refund metrics",
                  "item": 2,
                  "itemDisplayName": "Refund rate",
                  "measures": [
                      {
                          "index": 2,
                          "measureDisplayName": "Percentage",
                          "value": 0.40
                      }
                  ]
              }
          ]
      }
  ]
}
```
