---
title: "Marketing metrics"
description: "Reference document for the ratios and metrics produced by the marketing metrics endpoint"
createdAt: "2022-04-28T14:02:24.969Z"
updatedAt: "2022-11-02T14:41:42.370Z"
---

The Marketing Metrics endpoint retrieves the _marketing to revenue_ and _marketing to expense_ metrics over one or more periods of time. These marketing metrics are calculated from accounting data. It is generated from data available on the customer's profit and loss statement.

Refer to the [Assess reporting structure](/assess/reports/reporting-structure) page for more detail on reports in Assess.

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

View the Marketing Metrics [formulas](/assess/metrics/accounting/api-financial-metrics#marketing-metrics-formulas).

The endpoint is available in our <a href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_accountingMetrics_marketing">API reference</a>.

`GET /data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing`

#Parameters

{
"data": {
"h-0": "Parameter",
"h-1": "Type",
"h-2": "Description",
"h-3": "Required",
"0-0": "**reportDate** ",
"0-1": "_string_
See [Date](/common-api#/schemas/DateTime)",
"0-2": "YYYY-MM-DD

Datetime or Date (inclusive of the whole day).",
"0-3": "Required",
"1-0": "**periodLength** ",
"1-1": "_integer_ ",
"1-2": "Based on the period unit provided.

It must be positive, not zero and an integer.",
"1-3": "Required",
"2-0": "**numberOfPeriods** ",
"2-1": "_integer_ ",
"2-2": "The number of periods to return.

It must be positive, not zero and an integer.",
"2-3": "Required",
"3-0": "**includeDisplayNames** ",
"3-1": "_boolean_ ",
"3-2": "Shows the _dimensionDisplayName_ and _itemDisplayName_ in measures to make the report data human-readable.

Default is 'false'.",
"3-3": "Optional",
"4-0": "**showInputValues**",
"4-1": "_boolean_",
"4-3": "Optional",
"4-2": "If set to _true_, then the system includes the input values within the response.

Default to 'false'."
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
"0-2": ""marketing_metrics"",
"1-0": "**displayName** ",
"1-1": "_string_",
"1-2": ""Marketing metrics""
},
"cols": 3,
"rows": 2
}


## Dimensions

_Marketing metrics_ consists of these dimensions: Period, Marketing metrics and Metric inputs.

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
See [Date](/common-api#/schemas/DateTime)",
"1-2": "YYYY-MM-DD

Date in which the period begins (inclusive).",
"2-1": "_string_
See [Date](/common-api#/schemas/DateTime)",
"2-0": "**end** ",
"2-2": "YYYY-MM-DD

Date in which the period ends (inclusive)."
},
"cols": 3,
"rows": 3
}


### Dimension (index = “1”): Marketing metrics


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"0-2": ""Marketing metrics"",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": ""string"",
"2-0": "**items** ",
"2-1": "array
See [Dimension (index = “1”) items](#dimension-index--1-items)",
"2-2": "Returns an array of marketing metrics."
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
"0-2": "\* “Marketing to revenue”

- "Marketing to expense"

This will always show for any response in this report. The dimension values are not dependent on the user’s query parameters."
},
"cols": 3,
"rows": 1
}


### Dimension (index = "2"): Metric inputs

This displays when the `showInputValues` is set to 'true'.

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName**",
"0-1": "_string_",
"0-2": ""Metric inputs"",
"1-0": "**type*",
"1-1": "*string\*",
"1-2": ""string"",
"2-0": "**items\*\*",
"2-1": "array
See [Dimension (index = “2”) items](#dimension-index--2-items)"
},
"cols": 3,
"rows": 3
}


#### Dimension (index = "2") items


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**value**",
"0-1": "_string_",
"0-2": "\* "Operating income"

- "Operating expense"
- "Marketing expense"

This shows when `showInputValues` is set to _true_ in the user's query parameters."
},
"cols": 3,
"rows": 1
}


## Measures

Measures provide information about the measures contained in the report data.

The measure for this report is as follows:

### Index “0” - Percentage


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"2-0": "**type** ",
"2-1": "_string_",
"0-2": "“Percentage”",
"2-2": "“percentage”",
"1-0": "**units**",
"1-1": "_string_",
"1-2": ""%""
},
"cols": 3,
"rows": 3
}


### Index “1” - Percentage change


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"2-0": "**type** ",
"2-1": "_string_",
"0-2": "“Percentage change vs previous period”",
"2-2": "“percentage”",
"1-0": "**units**",
"1-1": "_string_",
"1-2": ""%""
},
"cols": 3,
"rows": 3
}


### Index “2” - Value


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**displayName** ",
"0-1": "_string_",
"2-0": "**type** ",
"2-1": "_string_",
"0-2": "“Value”",
"2-2": "“currency”",
"1-0": "**units**",
"1-1": "_string_",
"1-2": "The currency of the P&L."
},
"cols": 3,
"rows": 3
}


## Report data

The report data combines multiple reporting dimensions and outputs the value of each combination. Each dimension reference is specified.

Since the report data is reflective of two dimensions and their measures, the tables below represent each component grouping.

Each object is grouped by dimension (index=“0”) which is the number of periods specified by the user in the query parameters.

Each period will be broken down into _Marketing metrics_, _Metric inputs_.

Components are nested within each other as below (grouped by dimension (index =“0”), i.e. Period).

    components - “Marketing metrics", e.g. Marketing to expense
         components - “Metric inputs”, e.g. Operating expense

### Components structure


{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**dimension** ",
"0-1": "_number_",
"0-2": "Index 1 and 2, see dimensions.",
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

**Index “0” (percentage)**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName**",
"1-0": "**value** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“Percentage"",
"1-2": ""%""
},
"cols": 3,
"rows": 2
}

**Index “1” (percentage change)**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName**",
"1-0": "**value** ",
"0-1": "_string_",
"1-1": "_string_",
"0-2": "“Percentage change"

If the system can't calculate the percentage change, this object will not display.",
"1-2": ""%""
},
"cols": 3,
"rows": 2
}

**Index "2" (value)**

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**measureDisplayName**",
"0-1": "_string_",
"0-2": ""Value"",
"1-0": "**value**",
"1-1": "_number_"
},
"cols": 3,
"rows": 2
}

#Example data

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
