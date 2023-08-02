---
title: "Revenue"
description: "Reference document for the endpoint that produces revenue data"
createdAt: "2022-04-04T07:15:46.798Z"
updatedAt: "2022-11-29T15:20:55.875Z"
---

The Revenue endpoint retrieves the revenue and revenue growth for a specific company connection, over one or more periods of time.

Refer to the [Assess reporting structure](/lending/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Assess.

For Revenue, these are the dimensions and measures:

**Dimensions**

- Period
- Revenue

**Measures**

- Value
- Percentage change - The percentage change between present period’s value and previous period's value.

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return the **revenue** and **revenue growth** as a percentage change for each period.

View the Revenue [formulas](/lending/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-commerceMetrics-revenue">API reference</a>.

`GET /data/companies/{companyId}/connections/{connectionId}/lending/commerceMetrics/revenue`

# Parameters

| **Parameter**           | Type                                         | Description                                                                                                                   | Required |
|-------------------------|----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----------|
| **reportDate**          | _string_, <br/> See [Date](/codat-api#/schemas/DateTime) | YYYY-MM-DD, <br/> Datetime or Date (inclusive of the whole day).                                                                    | Required |
| **periodUnit**          | _string_                                     | The period unit of time returned, and it can be: “Day”, “Week”, “Month”, “Year”.                                              | Required |
| **periodLength**        | _integer_                                    | Based on the period unit provided. It must be positive, not zero and an integer.                                              | Required |
| **numberOfPeriods**     | _integer_                                    | The number of periods to return. It must be positive, not zero and an integer.                                                | Required |
| **includeDisplayNames** | _boolean_                                    | Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable. <br/> Default is false.  | Optional |

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

|Field|Type|Description|
|----|----|----|
|**name**|_string_|"revenue"|
|**displayName**|_string_|"Revenue"|

## Dimensions

_Revenue_ consists of these dimensions: Period and Revenue.

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
|**start**|_string_, <br/> See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DD <br/> Date in which the period begins (inclusive).|
|**end**|_string_, <br/> See [Date](/codat-api#/schemas/DateTime)|YYYY-MM-DD <br/> Date in which the period ends (inclusive).|

### Dimension (index = “1”): Revenue

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Revenue"|
|**type**|_string_|"string"|
|**items**|_array_, <br/> See [Dimension (index = "1") items](#dimension-index--1-items)|Returns an array of revenue metrics.|

#### Dimension (index = “1”) items

|Field|Type|Description|
|----|----|----|
|**value**|_string_|_Revenue value_ or _Revenue growth_. <br/> These will always show for any response in this report. The dimension values are not dependent on the user's query parameters.|

## Measures

Measures provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - value


|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Value"|
|**units**|_string_|The base currency of the company's commerce connection.|
|**type**|_string_|"currency"|



### Index “1” - percentage change

|Field|Type|Description|
|----|----|----|
|**displayName**|_string_|"Percentage change vs. previous period"|
|**units**|_string_|"%"|
|**type**|_string_|"percentage"|


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Revenue_ and both value and percent change measures are included for each level.

### Components structure

|Field|Type|Description|
|----|----|----|
|**dimension**|_number_|Index 1|
|**dimensionDisplayName**|_string_|Shows when _includeDisplayNames_ is set to _true_.|
|**item**|_number_||
|**itemDisplayName**|_string_|Shows when _includeDisplayNames_ is set to _true_.|
|**measures**|See [Measures in components](#measures-in-components)||


All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" (Revenue)**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Value"|
|**value**|_number_| |

**Index “1” (Revenue growth)**

|Field|Type|Description|
|----|----|----|
|**measureDisplayName**|_string_|"Percentage change vs previous period". <br/> If the system can't calculate the percentage change, this object will not display.|
|**value**|_string_|"%"|

# Example data

```
{
  "reportInfo": {
      "name": "revenue",
      "displayName": "Revenue"
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
                  "start": "2021-04-15",
                  "end": "2021-05-15"
              },
              {
                  "index": 1,
                  "displayName": "Period 1",
                  "start": "2021-05-15",
                  "end": "2021-06-15"
              }
          ]
      },
      {
          "index": 1,
          "displayName": "Revenue metrics",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Revenue"
              },
              {
                  "index": 1,
                  "value": "Revenue growth"
              }
          ]
      }
  ],
  "measures": [
      {
          "displayName": "Value",
          "units": "GBP",
          "index": 0,
          "type": "currency"
      },
      {
          "displayName": "Percentage change vs. previous period",
          "units": "%",
          "index": 1,
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
                  "dimensionDisplayName": "Revenue metrics",
                  "item": 0,
                  "itemDisplayName": "Revenue",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 141.81
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Revenue metrics",
                  "item": 1,
                  "itemDisplayName": "Revenue growth",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage change vs. previous period",
                          "value": -54.23
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
                  "dimensionDisplayName": "Revenue metrics",
                  "item": 0,
                  "itemDisplayName": "Revenue",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 375.64
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Revenue metrics",
                  "item": 1,
                  "itemDisplayName": "Revenue growth",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage change vs. previous period",
                          "value": 164.89
                      }
                  ]
              }
          ]
      }
  ]
}
```
