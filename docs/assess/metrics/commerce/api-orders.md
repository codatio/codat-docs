---
title: "Orders"
description: "Reference document for the endpoint that produces orders data"
createdAt: "2022-04-04T10:34:04.710Z"
updatedAt: "2022-11-29T15:20:46.207Z"
---

The Orders endpoint retrieves the number of orders, total value and average order value for a specific company's commerce connection, over one or more periods of time.

Refer to the [Assess reporting structure](/assess-reporting-structure) page for more detail on reports in Assess.

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

View the Orders [formulas](/assess-commerce-metrics#what-metrics-are-available).

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_commerceMetrics_orders" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/orders`

#Parameters

{
"data": {
"h-0": "Parameter",
"h-1": "Type",
"h-2": "Description",
"h-3": "Required",
"0-0": "**reportDate** ",
"0-1": "_string_
See [Date](/datamodel-shared-date)",
"0-2": "YYYY-MM-DD

Datetime or Date (inclusive of the whole day).",
"0-3": "Required",
"1-0": "**periodUnit** ",
"1-1": "_string_ ",
"1-2": "The period unit of time returned, and it can be: “Day”, “Week”, “Month”, “Year”.",
"1-3": "Required",
"2-0": "**periodLength** ",
"2-1": "_integer_ ",
"2-2": "Based on the period unit provided.

It must be positive, not zero and an integer.",
"2-3": "Required",
"3-0": "**numberOfPeriods** ",
"3-1": "_integer_ ",
"3-2": "The number of periods to return.

It must be positive, not zero and an integer.",
"3-3": "Required",
"4-0": "**includeDisplayNames** ",
"4-1": "_boolean_ ",
"4-2": "Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable.

Default is false.",
"4-3": "Optional"
},
"cols": 4,
"rows": 5
}

#Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**name** ",
"0-1": "_string_",
"0-2": ""orders"",
"1-0": "**displayName** ",
"1-1": "_string_",
"1-2": ""Orders""
},
"cols": 3,
"rows": 2
}


## Dimensions

_Orders_ consists of these dimensions: Period and Order metrics.

### Dimension (index = “0”): Period


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Period"",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": ""datespan"",
"2-0": "**items** ",
"2-1": "_array_
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
"0-1": "_string_",
"0-2": ""Period n"",
"1-0": "**start** ",
"1-1": "_string_
See [Date](/datamodel-shared-date)",
"1-2": "YYYY-MM-DD

Date in which the period begins (inclusive).",
"2-1": "_string_
See [Date](/datamodel-shared-date)",
"2-0": "**end** ",
"2-2": "YYYY-MM-DD

Date in which the period ends (inclusive)."
},
"cols": 3,
"rows": 3
}


### Dimension (index = “1”): Order metrics


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Order metrics"",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": ""string"",
"2-0": "**items** ",
"2-1": "array
See [Dimension (index = “1”) items](#dimension-index--1-items)",
"2-2": "Returns an array of order metrics."
},
"cols": 3,
"rows": 3
}


#### Dimension (index = “1”) items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**value** ",
"0-1": "_string_",
"0-2": "\* “Number of orders”

- “Total value”
- "Average order value"

These will always show for any response in this report. The dimension values are not dependent on the user’s query parameters."
},
"cols": 3,
"rows": 1
}


## Measures

Measures provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - Count


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Count"",
"1-0": "**type** ",
"1-1": "_number_",
"1-2": ""int""
},
"cols": 3,
"rows": 2
}


### Index “1” - Value


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"1-0": "**units** ",
"1-1": "_string_",
"2-0": "**type** ",
"2-1": "_string_",
"0-2": "“value”",
"1-2": "The base currency of the company’s commerce connection.",
"2-2": "“currency”"
},
"cols": 3,
"rows": 3
}


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Order metrics_.

### Components structure


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**dimension** ",
"0-1": "_number_",
"0-2": "Index 1",
"1-0": "**dimensionDisplayName** ",
"1-1": "_string_",
"1-2": "Shows when _includeDisplayNames_ is set to _true_.",
"2-0": "**item** ",
"2-1": "_number_",
"3-0": "**itemDisplayName** ",
"4-0": "**measures** ",
"3-1": "_string_",
"3-2": "Shows when _includeDisplayNames_ is set to _true_.",
"4-1": "See [Measures in components](#measures-in-components)"
},
"cols": 3,
"rows": 5
}

All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" - Count**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"0-1": "_string_",
"0-2": ""Count"",
"1-0": "**value** ",
"1-1": "_number_"
},
"cols": 3,
"rows": 2
}

**Index “1” - Value**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"1-0": "**value** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“value"",
"1-2": ""
},
"cols": 3,
"rows": 2
}

#Example data

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
