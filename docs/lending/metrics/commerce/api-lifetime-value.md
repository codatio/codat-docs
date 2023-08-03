---
title: "Lifetime value"
description: "Reference document for the endpoint that produces lifetime value data"
createdAt: "2022-04-11T10:04:20.232Z"
updatedAt: "2022-11-29T15:21:28.930Z"
---

The Lifetime Value endpoint retrieves the value of a specific company over one or more periods of time.

Refer to the [Lending reporting structure](/lending/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Lending.

For Lifetime Value, these are the dimensions and measures:

**Dimensions**

- Period
- Lifetime value metrics: the average revenue that a customer will generate throughout their lifespan for the given period.

**Measures**

- Value

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return metrics on **lifetime value** for each period.

View the Lifetime Value [formulas](/lending/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-commerceMetrics-lifetimeValue">API reference</a>.

```http
GET /data/companies/{companyId}/connections/{connectionId}/lending/commerceMetrics/lifetimeValue
```

# Parameters

| **Parameter**           | Type                                        | Description                                                                                                              | Required |
|-------------------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|----------|
| **reportDate**          | _string_ <br/> See [Date](/codat-api#/schemas/DateTime) | YYYY-MM-DD <br/> Datetime or Date (inclusive of the whole day).                                                                | Required |
| **periodUnit**          | _string_                                    | The period unit of time returned, and it can be: “Day”, “Week”, “Month”, “Year”.                                         | Required |
| **periodLength**        | _integer_                                   | Based on the period unit provided. It must be positive, not zero and an integer.                                         | Required |
| **numberOfPeriods**     | _integer_                                   | The number of periods to return. It must be positive, not zero and an integer.                                           | Required |
| **includeDisplayNames** | _boolean_                                   | Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable. <br/> Default is false. | Optional |

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

| **Field**       | Type     | Description      |
|-----------------|----------|------------------|
| **name**        | _string_ | "lifetime_value" |
| **displayName** | _string_ | "Lifetime Value" |

## Dimensions

_Lifetime value_ consists of these dimensions: Period and Customer retention metrics.

### Dimension (index = “0”): Period

| **Field**       | Type                                                                    | Description                                                                                                        |
|-----------------|-------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **displayName** | _string_                                                                | "Period"                                                                                                           |
| **type**        | _string_                                                                | "datespan"                                                                                                         |
| **items**       | _array_ <br/> See [Dimension (index = “0”) items](#dimension-index--0-items) | Returns an array of “Period”. This is driven by the query parameter values. <br/> Ordered by latest to earliest periods. |


#### Dimension (index = “0”) items

| **Field**       | Type                                          | Description                                              |
|-----------------|-----------------------------------------------|----------------------------------------------------------|
| **displayName** | _string_                                      | "Period n"                                               |
| **start**       | _string_ <br/> See [Date](/codat-api#/schemas/DateTime)  | YYYY-MM-DD, date in which the period begins (inclusive). |
| **end**         | _string_ <br/> See [Date](/codat-api#/schemas/DateTime)  | YYYY-MM-DD, date in which the period ends (inclusive).   |


### Dimension (index = “1”): Lifetime value metrics

| **Field**       | Type                                                                     | Description                                     |
|-----------------|--------------------------------------------------------------------------|-------------------------------------------------|
| **displayName** | _string_                                                                 | "Customer retention metrics"                    |
| **type**        | _string_                                                                 | "string"                                        |
| **items**       | _array_ <br/> See [Dimension (index = “1”) items](#dimension-index--1-items) | Returns an array of customer retention metrics. |  


#### Dimension (index = “1”) items

| **Field** | Type     | Description                                                                                                                                    |
|-----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| **value** | _string_ | “Lifetime value” <br/> This will always show for any response in this report. The dimension values are not dependent on the user’s query parameters. |

## Measures

Measures provide information about the measures contained in the report data.

The measure for this report is as follows:

### Index “1” - Value

| **Field**       | Type     | Description                                             |
|-----------------|----------|---------------------------------------------------------|
| **displayName** | _string_ | “Value”                                                 |
| **units**       | _string_ | The base currency of the company’s commerce connection. |
| **type**        | _string_ | “currency”                                              |

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Lifetime value metrics_.

### Components structure

| **Field**                | Type                                                  | Description                                    |
|--------------------------|-------------------------------------------------------|------------------------------------------------|
| **dimension**            | _number_                                              | Index 1                                        |
| **dimensionDisplayName** | _string_                                              | Shows when _includeDisplayNames_ is set to true. |
| **item**                 | _string_                                              |                                                |
| **itemDisplayName**      | _string_                                              | Shows when _includeDisplayNames_ is set to true. |
| **measures**             | See [Measures in components](#measures-in-components) |                                                |

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index “1” (value)**

| **Field**              | Type     | Description |
|------------------------|----------|-------------|
| **measureDisplayName** | _string_ | “Value"     |
| **value**              | _string_ |             |

# Example data

```
{
  "reportInfo": {
      "name": "lifetime_value",
      "displayName": "Lifetime Value"
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
                  "start": "2021-08-30",
                  "end": "2021-09-30"
              },
              {
                  "index": 1,
                  "displayName": "Period 1",
                  "start": "2021-09-30",
                  "end": "2021-10-31"
              }
          ]
      },
      {
          "index": 1,
          "displayName": "Lifetime value metrics",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Lifetime value"
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
                  "dimensionDisplayName": "Lifetime value metrics",
                  "item": 0,
                  "itemDisplayName": "Lifetime value",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 0.00
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
                  "dimensionDisplayName": "Lifetime value metrics",
                  "item": 0,
                  "itemDisplayName": "Lifetime value",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Value",
                          "value": 0.00
                      }
                  ]
              }
          ]
      }
  ]
}
```
