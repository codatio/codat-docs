---
title: "Financial metrics"
description: "Reference document for the ratios and metrics produced by the financial metrics endpoint"
createdAt: "2022-02-21T08:24:56.369Z"
updatedAt: "2023-01-16T09:26:35.560Z"
---

The Financial Metrics API provides the most commonly used financial metrics and ratios used for credit risk assessments of small and medium businesses. Metrics are auto-calculated for you across the full history of financial statements for a linked company and can be retrieved for a single period or spread across multiple periods enabling you to perform time series analysis of the financial performance of the company.

Supported metrics:

1. Gross profit margin
2. EBITDA
3. Debt service coverage ratio
4. Current ratio
5. Quick ratio
6. Free cash flow
7. Working capital
8. Fixed service coverage charge

The Financial Metrics API leverages the [Categories](/assess/categories) feature, which maps each business's bespoke chart of accounts to a single standard chart of accounts across all of your small business customers. The Financial Metrics API is reliant on complete and accurate categorizations to produce meaningful metrics.

Any metric (including metric inputs) that have null/blank values means that data couldn't be computed.

## Metrics

This endpoint retrieves all the available financial performance metrics held against a company, over one or more periods of time.

View the Financial Metrics [formulas](/assess/metrics/accounting/api-financial-metrics#financial-metrics-formulas).

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__connections__connectionId__assess_financialMetrics" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics`

## Parameters

|                          Parameter                           |    Type    | Description | Required |
| :----------------------------------------------------------: | :--------: | :---------: | -------- |
|                        **reportDate**                        |  _string_  |
| See [Date](/common-api#/schemas/DateTime) | YYYY-MM-DD |

The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month. | Required | **periodLength** |
| _integer_ | The number of months per period. E.g. 2 = 2 months per period.",
"1-3": "Required |
| **numberOfPeriods** ",
"2-1": "_integer_",
"2-2": "The number of periods to return.

There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.| Required |
| **showMetricInputs** | _boolean_",
"3-2": "If set to True, then the system includes the input values within the response.

Default to False. | Optional |

## Data model

|  Field   |                         Type                          | Description  |
| :------: | :---------------------------------------------------: | :----------: | -------------- |
| **name** |                       _string_                        | Metric name. | **metricUnit** |
| _string_ | Depending on the metric, the response value could be: |

_ Ratio  
_ Money (e.g. EBITDA is not a ratio) |
| **currency**",
"2-1": "_string_",
"2-2": "Base currency of the company, as provided by the balance sheet, and profit and loss endpoints.
| **periods** | _array_  
See [Periods](#periods)",
"3-2": "
| **Errors** | _array_  
See [Errors](#errors) | If there are no errors, an empty array is returned. |

### Periods

|                            Field                             |                  Type                  | Description |
| :----------------------------------------------------------: | :------------------------------------: | :---------: |
|                         **fromDate**                         |                _string_                |
| See [Date](/common-api#/schemas/DateTime) | The date from which the report starts. |

YYYY-MM-DD | **toDate**
| _string_  
See [Date](/common-api#/schemas/DateTime) | The date on which the report ends (inclusive of day).

YYYY-MM-DD |
| **value** ",
"2-1": "_number_",
"2-2": "The top level metric value that is calculated for the specified period.

If the system cannot calculate for that period, the value will be null. The system will still show the metric inputs.
| **inputs** | _array_  
See [Inputs](#inputs)",
"3-2": "Array of input values that feed into the metric calculation.

By default, this array is not returned (see Parameters section) → “Show metric inputs”.

If the query parameter “showMetricInputs” = True, then this array gets returned in the response. |

#### Inputs

If the query parameter _showMetricInputs = True_, then this array gets returned in the response.

| Field     | Type     | Description                                                                |
| :-------- | :------- | :------------------------------------------------------------------------- |
| **name**  | _string_ | The name of the metric input e.g. “Current Assets”, “Capital Expenditure”. |
| **value** | _number_ | The positive or negative number of the input value.                        |

### Errors

|  Field   |   Type   |         Description          |
| :------: | :------: | :--------------------------: |
| **type** | _string_ | Metric-level error messages: |

`uncategorizedAccounts` (Metric level error) - where there are accounts with missing categories.  
`missingInputData` (Metric level error) - when the financial statements do not contain the required data points to calculate the metric.  
`missingAccountData` (Period specific error) - for the given period, there is no account data to calculate the metric.  
`datesOutOfRange` (Period specific error) - only for metrics where multiple periods are compared to drive calculation. (Free cash flow). | **message**
| _string_ | If _type_ is:

`Uncategorized accounts` - "There are uncategorized accounts IDs, see details"

`Missing input data` - "There is no \\<profit and loss / balance sheet> synced to this company"

`Missing Account data` - “Missing account data”

`Dates out of range` - "There is no data for the requested period" |
| **details** ",
"2-1": "_string_",
"2-2": "If _message_ is:

Uncategorized accounts:  
_ List of account category Types where there are missing account categories, e.g. “Assets, Liability”.  
_ List of account IDs where there are missing categories.

Missing Account data  
\\\_ List of categories that are needed for the calculation.

Dates out of range  
\\\_ Earliest date in which the company’s data exists as input for the metric calculation. |

## JSON response example

```json
{
  "metrics": [], //metric array, see below
  "currency": "GBP", //Base currency of the balance sheet or profit and loss
  "periodUnit": "month", //Defaults to monthly
  "errors": [] // API level errors, see API level error scenarios below
}
```

## Metric example

The following response example shows a single metric and includes any potential error handling for each metric returned, should they fall into one or more of the scenarios outlined in the Error Array section.

```json
{
  "name": "Current Ratio",
  "metricUnit": "Ratio",
  "periods": [
    {
      "fromDate": "2021-09-01T00:00:00.00Z",
      "toDate": "2021-11-30T00:00:00.00Z",
      "value": null,
      "inputs": [
        {
          "name": "Current Assets",
          "value": -24.22
        },
        {
          "name": "Current Liabilities",
          "value": 0
        }
      ],

      //Period specific errors
      "errors": [
        {
          "type": "missingAccountData",
          "message": "Missing account data for the requested period",
          "details": {
            "missingData": [
              "Expense.Operating.Interest",
              "Expense.NonOperating.Interest"
            ]
          }
        },
        {
          "type": "datesOutOfRange",
          "message": "There is no data for the requested period",
          "details": {
            "earliestAvailableDate": ["2021-05-01"]
          }
        }
      ]
    },
    {
      "fromDate": "2021-06-01T00:00:00.00Z",
      "toDate": "2021-08-31T00:00:00.00Z",
      "value": -54.12,
      "inputs": [
        {
          "name": "Current Assets",
          "value": -54.12
        },
        {
          "name": "Current Liabilities",
          "value": 1
        }
      ],
      "errors": [
        {
          "type": "missingAccountData",
          "message": "Missing account data",
          "details": {
            "missingData": [
              "Expense.Operating.Interest",
              "Expense.NonOperating.Interest"
            ]
          }
        }
      ]
    }
  ],

  //Metric level error handling
  "errors": [
    {
      "type": "uncategorizedAccounts",
      "message": "There are uncategorized accounts, see details",
      "details": {
        "accountIds": [123, 456, 789]
      }
    },
    {
      "type": "missingInputdata",
      "message": "There is no profit and loss synced to this company"
    }
  ]
}
```

## API-level error scenarios

## Invalid date ranges (future date ranges)

Inputting a future date where there is no available data):

Start date = “2030-12-31T00:00:00Z” (future date)

Period Length = “2”

Number of periods = “6”

```json
{
  "type": "datesOutOfRange",
  "message": "Requested report date was out of range, most recent available month is Jan 2022"
}
```

## Zero account categories

```json
{
    "type": "dataNotSynced" | "dataNotSupported" | "dataSyncFailed" | "dataTypeNotEnabled",
    "message": "Account categories data has not been synced" |
               "Account categories data is not supported" |
               "Account categories data set sync has failed" |
               "Account categories data type is not enabled"
}
```

## Missing P&L and Balance Sheet information

```json
{
  "type": "dataNotSynced" | "dataNotSupported" | "dataSyncFailed" | "dataTypeNotEnabled",
  "message": "Profit & Loss and Balance Sheet data has not been synced" |
             "Profit & Loss and Balance Sheet data is not supported" |
             "Profit & Loss and Balance Sheet data set sync has failed" |
             "Profit & Loss and Balance Sheet data is not enabled"
}
```
