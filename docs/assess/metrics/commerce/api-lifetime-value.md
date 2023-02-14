---
title: "Lifetime value"
description: "Reference document for the endpoint that produces lifetime value data"
createdAt: "2022-04-11T10:04:20.232Z"
updatedAt: "2022-11-29T15:21:28.930Z"
---

The Lifetime Value endpoint retrieves the value of a specific company over one or more periods of time.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

For Lifetime Value, these are the dimensions and measures:

**Dimensions**

- Period
- Lifetime value metrics: the average revenue that a customer will generate throughout their lifespan for the given period.

**Measures**

- Value

**Report Data**

- Is structured based on dimension (index =“0”), i.e. Period.
- The endpoint will return metrics on **lifetime value** for each period.

View the Lifetime Value [formulas](/assess/metrics/commerce/overview#what-metrics-are-available).

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_commerceMetrics_lifetimeValue" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/connections/{connectionId}/assess/commerceMetrics/lifetimeValue`

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
"0-2": ""lifetime_value"",
"1-0": "**displayName** ",
"1-1": "_string_",
"1-2": ""Lifetime Value""
},
"cols": 3,
"rows": 2
}


## Dimensions

_Lifetime value_ consists of these dimensions: Period and Customer retention metrics.

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


### Dimension (index = “1”): Lifetime value metrics


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Lifetime value metrics"",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": ""string"",
"2-0": "**items** ",
"2-1": "array
See [Dimension (index = “1”) items](#dimension-index--1-items)",
"2-2": "Returns an array of customer retention metrics."
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
"0-2": "“Lifetime value”

This will always show for any response in this report. The dimension values are not dependent on the user’s query parameters."
},
"cols": 3,
"rows": 1
}


## Measures

Measures provide information about the measures contained in the report data.

The measure for this report is as follows:

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
"0-2": "“Value”",
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

Each period will be broken down into _Lifetime value metrics_.

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

**Index “1” (value)**

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

#Example data

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
