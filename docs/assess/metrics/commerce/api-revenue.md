---
title: "Revenue"
description: "Reference document for the endpoint that produces revenue data"
createdAt: "2022-04-04T07:15:46.798Z"
updatedAt: "2022-11-29T15:20:55.875Z"
---

The Revenue endpoint retrieves the revenue and revenue growth for a specific company connection, over one or more periods of time.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

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

View the Revenue [formulas](/assess/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_commerceMetrics_revenue" target="_blank">Swagger</a> under **Assess**.

`GET ​/data​/companies​/{companyId}​/connections​/{connectionId}​/assess​/commerceMetrics​/revenue`

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
"0-2": ""revenue"",
"1-0": "**displayName** ",
"1-1": "_string_",
"1-2": ""Revenue""
},
"cols": 3,
"rows": 2
}


## Dimensions

_Revenue_ consists of these dimensions: Period and Revenue.

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


### Dimension (index = “1”): Revenue


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Revenue"",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": ""string"",
"2-0": "**items** ",
"2-1": "array
See [Dimension (index = “1”) items](#dimension-index--1-items)",
"2-2": "Returns an array of revenue metrics."
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
"0-2": "\* “Revenue value”

- “Revenue growth”

These will always show for any response in this report. The dimension values are not dependent on the user’s query parameters."
},
"cols": 3,
"rows": 1
}


## Measures

Measures provide information about the measures contained in the report data.

The two measures for this report are as follows:

### Index “0” - value


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Value"",
"1-0": "**units** ",
"1-1": "_string_",
"1-2": "The base currency of the company’s commerce connection.",
"2-0": "**type** ",
"2-1": "_string_",
"2-2": ""currency""
},
"cols": 3,
"rows": 3
}


### Index “1” - percentage change


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
"0-2": "“Percentage change vs. previous period”",
"1-2": ""%"",
"2-2": "“percentage”"
},
"cols": 3,
"rows": 3
}


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Revenue_ and both value and percent change measures are included for each level.

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

**Index "0" (Revenue)**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"0-1": "_string_",
"0-2": ""Value"",
"1-0": "**value** ",
"1-1": "_number_"
},
"cols": 3,
"rows": 2
}

**Index “1” (Revenue growth)**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName** ",
"1-0": "**value** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“Percentage change vs previous period”

If the system can't calculate the percentage change, this object will not display.",
"1-2": "“%”"
},
"cols": 3,
"rows": 2
}

#Example data

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
