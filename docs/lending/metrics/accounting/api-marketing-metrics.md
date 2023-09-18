---
title: "Marketing metrics"
description: "Reference document for the ratios and metrics produced by the marketing metrics endpoint"
createdAt: "2022-04-28T14:02:24.969Z"
updatedAt: "2022-11-02T14:41:42.370Z"
---

The Marketing Metrics endpoint retrieves the _marketing to revenue_ and _marketing to expense_ metrics over one or more periods of time. These marketing metrics are calculated from accounting data. It is generated from data available on the customer's profit and loss statement.

Refer to the [Assess reporting structure](/lending/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Assess.

For Marketing Metrics, these are the dimensions and measures:

**Dimensions**

- Period
- Marketing metrics
- Metric inputs: displays only when `showInputValues` is set to _true_.

**Measures**

- Percentage
- Percentage change
- Value

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return **marketing to expense** and **marketing to revenue** metrics for each period.

View the Marketing Metrics [formulas](/lending/metrics/accounting/api-financial-metrics#marketing-metrics-formulas).

`GET /data/companies/{companyId}/connections/{connectionId}/lending/accountingMetrics/marketing`

# Parameters
| Parameter               | Type                                        | Description                                                                                                                | Required |
|-------------------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|----------|
| **reportDate**          | _string_ <br/> See [Date](/platform-api#/schemas/DateTime) | YYYY-MM-DD <br/> Datetime or Date (inclusive of the whole day).                                                                  | Required |
| **periodLength**        | _integer_                                   | Based on the period unit provided. <br/> It must be positive, not zero and an integer.                                           | Required |
| **numberOfPeriods**     | _integer_                                   | The number of periods to return. <br/> It must be positive, not zero and an integer.                                             | Required |
| **includeDisplayNames** | _boolean_                                   | Shows the `dimensionDisplayName` and `itemDisplayName` in measures to make the report data human-readable. Default is `false`. | Optional |
| **showInputValues**     | _boolean_                                   | If set to `true`, then the system includes the input values within the response. <br/> Default to `false`.                         |          | 

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info
| **Field**       | Type     | Description         |
|-----------------|----------|---------------------|
| **name**        | _string_ | "marketing_metrics" |
| **displayName** | _string_ | "Marketing metrics" | 


## Dimensions

_Marketing metrics_ consists of these dimensions: Period, Marketing metrics and Metric inputs.

### Dimension (index = “0”): Period

| **Field**       | Type                                                                   | Description                                                                                                        |
|-----------------|------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **displayName** | _string_                                                               | "Period"                                                                                                           |
| **type**        | _string_                                                               | "datespan"                                                                                                         |
| **items**       | _array_<br/> See [Dimension (index = “0”) items](#dimension-index--0-items) | Returns an array of “Period”. This is driven by the query parameter values.<br/> Ordered by latest to earliest periods. |


#### Dimension (index = “0”) items

| **Field**       | Type                                        | Description                                             |
|-----------------|---------------------------------------------|---------------------------------------------------------|
| **displayName** | _string_                                    | "Period n"                                              |
| **start**       | _string_<br/> See [Date](/platform-api#/schemas/DateTime) | YYYY-MM-DD <br/> Date in which the period begins (inclusive). |
| **end**         | _string_<br/> See [Date](/platform-api#/schemas/DateTime) | YYYY-MM-DD <br/> Date in which the period ends (inclusive).   |

### Dimension (index = “1”): Marketing metrics

| **Field**       | Type                                                                   | Description                            |
|-----------------|------------------------------------------------------------------------|----------------------------------------|
| **displayName** | _string_                                                               | "Marketing metrics"                    |
| **type**        | _string_                                                               | "string"                               |
| **items**       | _array_ <br/> See [Dimension (index = “1”) items](#dimension-index--1-items) | Returns an array of marketing metrics. |


#### Dimension (index = “1”) items

| **Field**       | Type                                                                   | Description                            |
|-----------------|------------------------------------------------------------------------|----------------------------------------|
| **displayName** | _string_                                                               | "Marketing metrics"                    |
| **type**        | _string_                                                               | "string"                               |
| **items**       | _array_ <br/> See [Dimension (index = “1”) items](#dimension-index--1-items) | Returns an array of marketing metrics. |

### Dimension (index = "2"): Metric inputs

This displays when the `showInputValues` is set to 'true'.

| **Field**       | Type                                                               | Description     |
|-----------------|--------------------------------------------------------------------|-----------------|
| **displayName** | _string_                                                           | "Metric inputs" |
| **type**        | _string_                                                           | "string"        |
| **items**       | _array_ <br/> [Dimension (index = “2”) items](#dimension-index--2-items) |                 |

#### Dimension (index = "2") items
| **Field** | Type   | Description                                                                                                                                        |
|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| **value** | string | _"Operating income"_ or _"Operating expense"_ or _"Marketing expense"_. <br/>  This shows when `showInputValues` is set to true in the user's query parameters. | 

## Measures

Measures provide information about the measures contained in the report data.

The measure for this report is as follows:

### Index “0” - Percentage

| **Field**       | Type     | Description  |
|-----------------|----------|--------------|
| **displayName** | _string_ | “Percentage” |
| **units**       | _string_ | "%"          |
| **type**        | _string_ | “percentage” | 


### Index “1” - Percentage change

| **Field**       | Type     | Description                            |
|-----------------|----------|----------------------------------------|
| **displayName** | _string_ | “Percentage change vs previous period” |
| **units**       | _string_ | "%"                                    |
| **type**        | _string_ | “percentage”                           |

### Index “2” - Value

| **Field**       | Type     | Description              |
|-----------------|----------|--------------------------|
| **displayName** | _string_ | “Value”                  |
| **units**       | _string_ | The currency of the P&L. |
| **type**        | _string_ | “currency”               |

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Marketing metrics_, _Metric inputs_.

Components are nested within each other as below (grouped by dimension (index =“0”), i.e. Period).

    components - “Marketing metrics", e.g. Marketing to expense
         components - “Metric inputs”, e.g. Operating expense

### Components structure

| **Field**                | Type                                                  | Description                                    |
|--------------------------|-------------------------------------------------------|------------------------------------------------|
| **dimension**            | _number_                                              | Index 1 and 2, see dimensions.                 |
| **dimensionDisplayName** | _string_                                              | Shows when `includeDisplayNames` is set to true. |
| **item**                 | _number_                                              |                                                |
| **itemDisplayName**      | _string_                                              | Shows when `includeDisplayNames` is set to true. |
| **measures**             | See [Measures in components](#measures-in-components) |                                                |

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index “0” (percentage)**

| **Field**              | Type     | Description  |
|------------------------|----------|--------------|
| **measureDisplayName** | _string_ | “Percentage" |
| **value**              | _string_ | "%"          |

**Index “1” (percentage change)**

| **Field**              | Type     | Description                                                                                            |
|------------------------|----------|--------------------------------------------------------------------------------------------------------|
| **measureDisplayName** | _string_ | “Percentage change" <br/> If the system can't calculate the percentage change, this object will not display. |
| **value**              | _string_ | "%"                                                                                                    |

**Index "2" (value)**

| **Field**              | Type     | Description |
|------------------------|----------|-------------|
| **measureDisplayName** | _string_ | "Value"     |
| **value**              | _number_ |             |

# Example data

```
{
"reportInfo": {
  "name": "marketing_metrics",
  "displayName": "Marketing metrics"
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
        "start": "2021-03-01",
        "end": "2021-03-31"
      },
      {
        "index": 1,
        "displayName": "Period 1",
        "start": "2021-04-01",
        "end": "2021-04-30"
      }
    ]
  },
  {
    "index": 1,
    "displayName": "Marketing metrics",
    "type": "string",
    "items": [
      {
        "index": 0,
        "value": "Marketing to revenue"
      },
      {
        "index": 1,
        "value": "Marketing to expense"
      }
    ]
  },
  {
    "index": 2,
    "displayName": "Metric inputs",
    "type": "string",
    "items": [
      {
        "index": 0,
        "value": "Operating income"
      },
      {
        "index": 1,
        "value": "Operating expense"
      },
      {
        "index": 2,
        "value": "Marketing expense"
      }
    ]
  }
],
"measures": [
  {
    "displayName": "Percentage",
    "units": "%",
    "index": 0,
    "type": "percentage"
  },
  {
    "displayName": "Percentage change vs previous period",
    "units": "%",
    "index": 1,
    "type": "percentage"
  },
  {
    "displayName": "Value",
    "units": "GBP",
    "index": 2,
    "type": "currency"
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
        "dimensionDisplayName": "Marketing metrics",
        "item": 0,
        "itemDisplayName": "Marketing to revenue",
        "measures": [
          {
            "index": 0,
            "measureDisplayName": "Percentage",
            "value": 1.41
          },
          {
            "index": 1,
            "measureDisplayName": "Percentage change vs previous period",
            "value": -32.32
          }
        ],
        "components": [
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 0,
            "itemDisplayName": "Operating income",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 15964.55
              }
            ]
          },
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 2,
            "itemDisplayName": "Marketing expense",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 225.19
              }
            ]
          }
        ]
      },
      {
        "dimension": 1,
        "dimensionDisplayName": "Marketing metrics",
        "item": 1,
        "itemDisplayName": "Marketing to expense",
        "measures": [
          {
            "index": 0,
            "measureDisplayName": "Percentage",
            "value": 2.61
          },
          {
            "index": 1,
            "measureDisplayName": "Percentage change vs previous period",
            "value": -20.61
          }
        ],
        "components": [
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 1,
            "itemDisplayName": "Operating expense",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 8616.69
              }
            ]
          },
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 2,
            "itemDisplayName": "Marketing expense",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 225.19
              }
            ]
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
        "dimensionDisplayName": "Marketing metrics",
        "item": 0,
        "itemDisplayName": "Marketing to revenue",
        "measures": [
          {
            "index": 0,
            "measureDisplayName": "Percentage",
            "value": 13.8
          },
          {
            "index": 1,
            "measureDisplayName": "Percentage change vs previous period",
            "value": 878.47
          }
        ],
        "components": [
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 0,
            "itemDisplayName": "Operating income",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 5362.39
              }
            ]
          },
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 2,
            "itemDisplayName": "Marketing expense",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 740.11
              }
            ]
          }
        ]
      },
      {
        "dimension": 1,
        "dimensionDisplayName": "Marketing metrics",
        "item": 1,
        "itemDisplayName": "Marketing to expense",
        "measures": [
          {
            "index": 0,
            "measureDisplayName": "Percentage",
            "value": 8.29
          },
          {
            "index": 1,
            "measureDisplayName": "Percentage change vs previous period",
            "value": 217.17
          }
        ],
        "components": [
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 1,
            "itemDisplayName": "Operating expense",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 8928.91
              }
            ]
          },
          {
            "dimension": 2,
            "dimensionDisplayName": "Metric inputs",
            "item": 2,
            "itemDisplayName": "Marketing expense",
            "measures": [
              {
                "index": 2,
                "measureDisplayName": "Value",
                "value": 740.11
              }
            ]
          }
        ]
      }
    ]
  }
]
}
```
