---
title: "Financial metrics"
description: "Reference document for the ratios and metrics produced by the financial metrics endpoint"
createdAt: "2022-02-21T08:24:56.369Z"
updatedAt: "2023-01-16T09:26:35.560Z"
---

The Financial Metrics API provides the most commonly used financial metrics and ratios used for credit risk assessments of small and medium businesses. Metrics are auto-calculated for you across the full history of financial statements for a linked company and can be retrieved for a single period or spread across multiple periods enabling you to perform time series analysis of the financial performance of the company.

Refer to the [Assess reporting structure](/assess/enhanced-financials/legacy/reporting-structure) page for more detail on reports in Assess.

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

This endpoint retrieves all the available financial performance metrics held against a company, over one or more periods of time. The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-financialMetrics">API reference</a>.

`GET /data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics`

## Parameters

|                          Parameter                           |    Type    | Description | Required |
| :----------------------------------------------------------- | :--------- | :---------- | :--------|
|                        **reportDate**                        |  _string_ <br/> See [Date](/codat-api#/schemas/DateTime)  | YYYY-MM-DD <br/> The date in which the report is created up to. Users must specify a specific date, however the response will be provided for the full month.| Required |
| **periodLength** | _integer_ | The number of months per period. E.g. 2 = 2 months per period. | Required |
| **numberOfPeriods** | _integer_ | The number of periods to return. <br/> There will be no pagination as a query parameter, however Codat will limit the number of periods to request to 12 periods.| Required |
| **showMetricInputs** | _boolean_| If set to True, then the system includes the input values within the response. <br/> Default to False. | Optional |

## Data model

|  Field   |                         Type                          | Description  |
| :------- | :---------------------------------------------------- | :----------- |
| **name** |                       _string_                        | Metric name. | 
| **metricUnit** | _string_ | Depending on the metric, the response value could be:_Ratio_, or Money (e.g. EBITDA is not a ratio) |
| **currency**| _string_ | Base currency of the company, as provided by the balance sheet, and profit and loss endpoints. |
| **periods** | _array_  | See [Periods](#periods)|
| **errors** | _array_   | See [Errors](#errors) <br/> If there are no errors, an empty array is returned. |

### Periods

|                            Field                             |                  Type                  | Description |
| :----------------------------------------------------------- | :------------------------------------- | :---------- |
|                         **fromDate**                         |                _string_                | See [Date](/codat-api#/schemas/DateTime) <br/> The date from which the report starts. <br/> YYYY-MM-DD | 
| **toDate** | _string_ | See [Date](/codat-api#/schemas/DateTime) <br/> The date on which the report ends (inclusive of day). <br/> YYYY-MM-DD |
| **value**  | _number_ | The top level metric value that is calculated for the specified period. <br/> If the system cannot calculate for that period, the value will be null. <br/> The system will still show the metric inputs.|
| **inputs** | _array_  | See [Inputs](#inputs) <br/> Array of input values that feed into the metric calculation. <br/> By default, this array is not returned (see Parameters section) → “Show metric inputs”. <br/> If the query parameter `showMetricInputs = true`, then this array gets returned in the response. |

#### Inputs

If the query parameter `showMetricInputs = true`, then this array gets returned in the response.

| Field     | Type     | Description                                                                |
| :-------- | :------- | :------------------------------------------------------------------------- |
| **name**  | _string_ | The name of the metric input e.g. “Current Assets”, “Capital Expenditure”. |
| **value** | _number_ | The positive or negative number of the input value.                        |

### Errors

|  Field   |   Type   |         Description          |
| :------- | :------- | :--------------------------- |
| **type** | _string_ | Metric-level error messages: <br/> `uncategorizedAccounts` (Metric level error) - where there are accounts with missing categories. <br/> `missingInputData` (Metric level error) - when the financial statements do not contain the required data points to calculate the metric. <br/> `missingAccountData` (Period specific error) - for the given period, there is no account data to calculate the metric. <br/> `datesOutOfRange` (Period specific error) - only for metrics where multiple periods are compared to drive calculation. (Free cash flow). |
| **message** | _string_ | If _type_ is: <br/> `Uncategorized accounts` - "There are uncategorized accounts IDs, see details" <br/> `Missing input data` - "There is no <profit and loss / balance sheet> synced to this company" <br/> `Missing Account data` - “Missing account data” <br/> `Dates out of range` - "There is no data for the requested period" |
| **details** | _string_ | If _message_ is: <br/> `Uncategorized accounts`:  <br/> _List of account category Types where there are missing account categories, e.g. “Assets, Liability”._  <br/> _List of account IDs where there are missing categories._ <br/> `Missing Account data` <br/> _List of categories that are needed for the calculation._ <br/> `Dates out of range` <br/> _Earliest date in which the company’s data exists as input for the metric calculation._|

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
