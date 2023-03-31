---
title: "Orders"
description: "Reference document for the endpoint that produces orders data"
createdAt: "2022-04-04T10:34:04.710Z"
updatedAt: "2022-11-29T15:20:46.207Z"
---

The Orders endpoint retrieves the number of orders, total value and average order value for a specific company's commerce connection, over one or more periods of time.

Refer to the [Assess reporting structure](/assess/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Assess.

For Orders, these are the dimensions and measures:

**Dimensions**

- Period
- Order metrics

**Measures**

- Count
- Value

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return the **number of orders**, **total value** and **average order value** for each period.

View the Orders [formulas](/assess/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-commerceMetrics-orders">API reference</a>.

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders`

# Parameters

| **Parameter**           | Type                                        | Description                                                                                                                  | Required |
|-------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------|
| **reportDate**          | _string_ <br/> See [Date](/codat-api#/schemas/DateTime) | YYYY-MM-DD <br/> Datetime or Date (inclusive of the whole day).                                                                    | Required |
| **periodUnit**          | _string_                                    | The period unit of time returned, and it can be: “Day”, “Week”, “Month”, “Year”.                                             | Required |
| **periodLength**        | _integer_                                   | Based on the period unit provided. <br/> It must be positive, not zero and an integer.                                             | Required |
| **numberOfPeriods**     | _integer_                                   | The number of periods to return. <br/> It must be positive, not zero and an integer.                                               | Required |
| **includeDisplayNames** | _boolean_                                   | Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable. <br/> Default is false. | Optional |

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

| **Field**       | Type     | Description |
|-----------------|----------|-------------|
| **name**        | _string_ | "orders"    |
| **displayName** | _string_ | "Orders"    |

## Dimensions

_Orders_ consists of these dimensions: Period and Order metrics.

### Dimension (index = “0”): Period


| Field           | Type      | Description                                                                                                                                                           |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **displayName** | _string_  | Period                                                                                                                                                               |
| **type**        | _string_  | datespan                                                                                                                                                              |
| **items**       | _array_ <br/> See [Dimension (index = “0”) items](#dimension-index--0-items). | Returns an array of “Period”. <br/> This is driven by the query parameter   |                               |


#### Dimension (index = “0”) items

| Field           | Type                                        | Description                                               |
|-----------------|---------------------------------------------|-----------------------------------------------------------|
| **displayName** | _string_                                    | "Period n"                                                |
| **start**       | _string_ See [Date](/codat-api#/schemas/DateTime) | YYYY-MM-DD,  date in which the period begins (inclusive). |
| **end**         | _string_ See [Date](/codat-api#/schemas/DateTime) | YYYY-MM-DD,  date in which the period ends (inclusive).   |

### Dimension (index = “1”): Order metrics

| **Field**       | Type                                                                   | Description                        |
|-----------------|------------------------------------------------------------------------|------------------------------------|
| **displayName** | _string_                                                               | "Order metrics"                    |
| **type**        | _string_                                                               | "string"                           |
| **items**       | _array_ <br/> See [Dimension (index = “1”) items](#dimension-index--1-items) | Returns an array of order metrics. |

#### Dimension (index = “1”) items

| **Field** | Type     | Description                                                                                                                                                                                |
|-----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **value** | _string_ | “Number of orders”, “Total value” or "Average order value". <br/> These will always show for any response in this report. The dimension values are not dependent on the user’s query parameters. |


## Measures

Measures provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - Count

| **Field**       | Type     | Description |
|-----------------|----------|-------------|
| **displayName** | _string_ | "Count"     |
| **type**        | _number_ | "int"       |

### Index “1” - Value

| **Field**       | Type     | Description                                             |
|-----------------|----------|---------------------------------------------------------|
| **displayName** | _string_ | “value”                                                 |
| **units**       | _string_ | The base currency of the company’s commerce connection. |
| **type**        | _string_ | “currency”                                              |


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Order metrics_.

### Components structure

| **Field**                | Type                                                  | Description                                        |
|--------------------------|-------------------------------------------------------|----------------------------------------------------|
| **dimension**            | _number_                                              | Index 1                                            |
| **dimensionDisplayName** | _string_                                              | Shows when _includeDisplayNames_ is set to _true_. |
| **item**                 | _number_                                              |                                                    |
| **itemDisplayName**      | _string_                                              | Shows when _includeDisplayNames_ is set to _true_. |
| **measures**             | See [Measures in components](#measures-in-components) |                                                    |

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" - Count**

| **Field**              | Type   | Description |
|------------------------|--------|-------------|
| **measureDisplayName** | string | "Count"     |
| **value**              | number |             |

**Index “1” - Value**

| **Field**              | Type   | Description |
|------------------------|--------|-------------|
| **measureDisplayName** | string | "value"     |
| **value**              | number |             |

# Example data

```
{
  "reportInfo": {
      "name": "orders",
      "displayName": "Orders"
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
          "displayName": "Order metrics",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Number of orders"
              },
              {
                  "index": 1,
                  "value": "Total value"
              },
              {
                  "index": 2,
                  "value": "Average order value"
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
                  "dimensionDisplayName": "Order metrics",
                  "item": 0,
                  "itemDisplayName": "Number of orders",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 8
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Order metrics",
                  "item": 1,
                  "itemDisplayName": "Total value",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Value",
                          "value": 341.98
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Order metrics",
                  "item": 2,
                  "itemDisplayName": "Average order value",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Value",
                          "value": 42.75
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
                  "dimensionDisplayName": "Order metrics",
                  "item": 0,
                  "itemDisplayName": "Number of orders",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 10
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Order metrics",
                  "item": 1,
                  "itemDisplayName": "Total value",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Value",
                          "value": 526.23
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Order metrics",
                  "item": 2,
                  "itemDisplayName": "Average order value",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Value",
                          "value": 52.62
                      }
                  ]
              }
          ]
      }
  ]
}
```
