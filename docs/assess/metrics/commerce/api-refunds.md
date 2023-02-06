---
title: "Refunds"
description: "Reference document for the endpoint that produces refunds data"
createdAt: "2022-04-11T07:35:05.971Z"
updatedAt: "2022-11-29T15:21:12.613Z"
---

The Refunds endpoint retrieves the number and total value of refunds, and the refund rate for a specific company's commerce connection, over one or more periods of time.

Refer to the [Assess reporting structure](/assess-reporting-structure) page for more detail on reports in Assess.

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

View the Refunds [formulas](/assess-commerce-metrics#what-metrics-are-available).

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_commerceMetrics_refunds" target="_blank">Swagger</a> under **Assess**.

`GET ​/data​/companies​/{companyId}​/connections​/{connectionId}​/assess​/commerceMetrics​/refunds`

#Parameters
[block:parameters]
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
[/block]
#Data model

The response structure is split into four areas: Report info, Dimensions, Measures and Report data.

## Report info

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**name** ",
"0-1": "_string_",
"0-2": ""refunds"",
"1-0": "**displayName** ",
"1-1": "_string_",
"1-2": ""Refunds""
},
"cols": 3,
"rows": 2
}
[/block.

## Dimensions

_Refunds_ consists of these dimensions: Period and Refund metrics.

### Dimension (index = “0”): Period

[block:parameters]
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
[/block.

#### Dimension (index = “0”) items

[block:parameters]
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
[/block.

### Dimension (index = “1”): Refund metrics

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Refund metrics"",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": ""string"",
"2-0": "**items** ",
"2-1": "array
See [Dimension (index = “1”) items](#dimension-index--1-items)",
"2-2": "Returns an array of refund metrics."
},
"cols": 3,
"rows": 3
}
[/block.

#### Dimension (index = “1”) items

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**value** ",
"0-1": "_string_",
"0-2": "\* “Number of refunds”

- “Value of refunds”
- "Refund rate"

These will always show for any response in this report. The dimension values are not dependent on the user’s query parameters."
},
"cols": 3,
"rows": 1
}
[/block.

## Measures

Measures provide information about the measures contained in the report data.

The three measures for this report are as follows:

### Index “0” - Count

[block:parameters]
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
[/block.

### Index “1” - Value

[block:parameters]
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
"0-2": "“Value”",
"1-2": "The base currency of the company’s commerce connection.",
"2-2": "“currency”"
},
"cols": 3,
"rows": 3
}
[/block.

### Index “2” - Percentage

[block:parameters]
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
"0-2": "“Percentage”",
"1-2": ""%"",
"2-2": "“percentage”"
},
"cols": 3,
"rows": 3
}
[/block.

## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Refund metrics_.

### Components structure

[block:parameters]
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
[/block]
All components have the structure described in the _Measures in components_ data model below.

#### Measures in components

**Index "0" - Count**
[block:parameters]
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
[/block]
**Index “1” - Value**
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"1-0": "**value** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“Value"",
"1-2": ""
},
"cols": 3,
"rows": 2
}
[/block]
**Index “2” - Refund rate**
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"1-0": "**value** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“Percentage"",
"1-2": ""
},
"cols": 3,
"rows": 2
}
[/block]
#Example data

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
