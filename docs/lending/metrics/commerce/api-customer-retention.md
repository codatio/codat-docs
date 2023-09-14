---
title: "Customer retention"
description: "Reference document for the endpoint that produces customer retention data"
createdAt: "2022-04-04T13:34:35.865Z"
updatedAt: "2022-11-29T15:21:17.901Z"
---

The Customer Retention endpoint retrieves customer information for a specific company's commerce connection, over one or more periods of time.

Refer to the [Lending reporting structure](/lending/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Lending.

For Customer Retention, these are the dimensions and measures:

**Dimensions**

- Period
- Customer retention metrics  
  This contains the following items:
  - **Existing customers:** the number of unique customers where they have placed an order(s) in the specified period AND any previous period.
  - **New customers:** the number of unique customers where they have placed an order(s) in the specified period AND NONE in any previous period.
  - **Total customers:** the sum of existing and new customers within the period.
  - **Retention rate:** the percentage of existing customers within the period compared to the total customers at the end of the previous period.
  - **Repeat rate:** the percentage of existing customers to total customers over the specified period.

**Measures**

- Count
- Percentage

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return metrics on **existing customers**, *new customers\*\*, *total customers**, **retention rate** and **repeat rate\*\* for each period.

View the Customer Retention [formulas](/lending/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-commerceMetrics-customerRetention">API reference</a>.

```http
GET /data/companies/{companyId}/connections/{connectionId}/lending/commerceMetrics/customerRetention
```

# Parameters

| **Parameter**           | Type                                         | Description                                                                                                               | Required |
|-------------------------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------|
| **reportDate**          | _string_ <br/> See [Date](/platform-api#/schemas/DateTime) | YYYY-MM-DD <br/> Datetime or Date (inclusive of the whole day).                                                                | Required |
| **periodUnit**          | _string_                                     | The period unit of time returned, and it can be: “Day”, “Week”, “Month”, “Year”.                                          | Required |
| **periodLength**        | _integer_                                    | Based on the period unit provided. It must be positive, not zero and an integer.                                          | Required |
| **numberOfPeriods**     | _integer_                                    | The number of periods to return. It must be positive, not zero and an integer.                                            | Required |
| **includeDisplayNames** | _boolean_                                    | Shows the dimensionDisplayName and itemDisplayName in measures to make the report data human-readable. <br/> Default is false.  | Optional |

# Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

| **Field**       | Type   | Description          |
|-----------------|--------|----------------------|
| **name**        | string | "customer_retention" |
| **displayName** | string | "Customer Retention" |

## Dimensions

_Customer retention_ consists of these dimensions: Period and Customer retention metrics.

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
| **start**       | _string_ <br/> See [Date](/platform-api#/schemas/DateTime)  | YYYY-MM-DD <br/> Date in which the period begins (inclusive). |
| **end**         | _string_ <br/> See [Date](/platform-api#/schemas/DateTime)  | YYYY-MM-DD <br/> Date in which the period ends (inclusive).   |

### Dimension (index = “1”): Customer retention metrics

| **Field**       | Type                                                                     | Description                                     |
|-----------------|--------------------------------------------------------------------------|-------------------------------------------------|
| **displayName** | _string_                                                                 | "Customer retention metrics"                    |
| **type**        | _string_                                                                 | "string"                                        |
| **items**       | _array_ <br/> See [Dimension (index = “1”) items](#dimension-index--1-items) | Returns an array of customer retention metrics. |  

#### Dimension (index = “1”) items

| **Field** | Type     | Description                                                                                                                                                                                                                 |
|-----------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **value** | _string_ | “Existing customers”, “New customers”, "Total customers", "Retention rate", or "Repeat rate". <br/> These will always show for any response in this report. The dimension values are not dependent on the user’s query parameters. |


## Measures

Measures provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - Count

| **Field**       | Type     | Description |
|-----------------|----------|-------------|
| **displayName** | _string_ | "Count"     |
| **units**       | _string_ |             |
| **type**        | _number_ | "int"       |


### Index “1” - Percentage

| **Field**       | Type     | Description  |
|-----------------|----------|--------------|
| **displayName** | _string_ | “percentage” |
| **units**       | _string_ |              |
| **type**        | _string_ | “percentage” |


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Customer retention metrics_.

### Components structure

| Field                    | Type                                                  | Description                                        |
|--------------------------|-------------------------------------------------------|----------------------------------------------------|
| **Field**                | Type                                                  | Description                                        |
| **dimension**            | _number_                                              | Index 1                                            |
| **dimensionDisplayName** | _string_                                              | Shows when _includeDisplayNames_ is set to _true_. |
| **item**                 | _number_                                              |                                                    |
| **itemDisplayName**      | _string_                                              | Shows when _includeDisplayNames_ is set to _true_. |
| **measures**             | See [Measures in components](#measures-in-components) |                                                    |

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" (count)**

| **Field**              | Type     | Description |
|------------------------|----------|-------------|
| **measureDisplayName** | _string_ | "Count"     |
| **value**              | _number_ |             |

**Index “1” (value)**

| **Field**              | Type     | Description |
|------------------------|----------|-------------|
| **measureDisplayName** | _string_ | "value"     |
| **value**              | _number_ |             |

# Example data

```
{
  "reportInfo": {
      "name": "customer_retention",
      "displayName": "Customer Retention"
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
          "displayName": "Customer retention metrics",
          "type": "string",
          "items": [
              {
                  "index": 0,
                  "value": "Existing customers"
              },
              {
                  "index": 1,
                  "value": "New customers"
              },
              {
                  "index": 2,
                  "value": "Total customers"
              },
              {
                  "index": 3,
                  "value": "Retention rate"
              },
              {
                  "index": 4,
                  "value": "Repeat rate"
              }
          ]
      }
  ],
  "measures": [
      {
          "displayName": "Count",
          "units": "",
          "index": 0,
          "type": "int"
      },
      {
          "displayName": "Percentage",
          "units": "",
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
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 0,
                  "itemDisplayName": "Existing customers",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 0
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 1,
                  "itemDisplayName": "New customers",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 7
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 2,
                  "itemDisplayName": "Total customers",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 7
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 3,
                  "itemDisplayName": "Retention rate",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage",
                          "value": 0.00
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 4,
                  "itemDisplayName": "Repeat rate",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage",
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
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 0,
                  "itemDisplayName": "Existing customers",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 1
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 1,
                  "itemDisplayName": "New customers",
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
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 2,
                  "itemDisplayName": "Total customers",
                  "measures": [
                      {
                          "index": 0,
                          "measureDisplayName": "Count",
                          "value": 9
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 3,
                  "itemDisplayName": "Retention rate",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage",
                          "value": 0.00
                      }
                  ]
              },
              {
                  "dimension": 1,
                  "dimensionDisplayName": "Customer retention metrics",
                  "item": 4,
                  "itemDisplayName": "Repeat rate",
                  "measures": [
                      {
                          "index": 1,
                          "measureDisplayName": "Percentage",
                          "value": 11.11
                      }
                  ]
              }
          ]
      }
  ]
}
```
