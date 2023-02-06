---
title: "Cash flow statement"
description: "A financial report that records all cash received or spent by a company during a given period"
createdAt: "2020-06-16T14:46:34.780Z"
updatedAt: "2022-11-16T09:31:47.406Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Financials/get_companies__companyId__data_financials_cashFlowStatement" target="_blank">Cash Flow Statement</a> endpoint in Swagger.

View the coverage for cash flow statement in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=cashFlowStatement" target="_blank">Data coverage explorer</a>.

:::caution Operating activities only
Currently, the cash flow statement shows cash that flows into and out of the company from operating activities _only_. Operating activities generate cash from the sale of goods or services.
:::

## Overview

A cash flow statement is a financial report that records all cash that is received or spent by a company during a given period. It gives you a clearer picture of the company’s performance, and their ability to pay creditors and finance growth.

:::info Cash flow statement or balance sheet?
Look at the cash flow statement to understand a company's ability to pay its bills. Although the balance sheet may show healthy earnings at a specific point in time, the cash flow statement allows you to see whether the company is meeting its financial commitments, such as paying creditors or its employees.
:::

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**reportBasis** ",
"1-0": "**reportInput** ",
"2-0": "**currency** ",
"2-1": "_string_
See [currency](/datamodel-shared-currency)",
"2-2": "Currency of all values in the cash flow statement.",
"0-2": "Accounting method used when aggregating the report data. In this case, `Cash`.",
"0-1": "_string_",
"1-1": "_string_",
"3-0": "**reports**",
"3-2": "Array of cash flow statements.",
"1-2": "Accounting method used to prepare the cash flow statement:

- `Indirect`

- `Direct` - Only method currently supported.

- `Unknown`"
  },
  "cols": 3,
  "rows": 4
  }
  [/block.

## Cash flow statement report

[block:parameters]
{
"data": {
"0-0": "**fromDate**",
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"1-0": "**toDate** ",
"2-0": "**cashReceipts** ",
"3-0": "**cashPayments** ",
"0-1": "_string_
See [date](/datamodel-shared-date)",
"1-1": "_string_
See [date](/datamodel-shared-date)",
"0-2": "Start date for the reporting period.",
"1-2": "End date for the reporting period.",
"2-2": "[ReportLines](#report-line) for cash receipts from the sale of goods.",
"3-2": "[ReportLines](#report-line) for cash payments to suppliers for the purchase of goods or services."
},
"cols": 3,
"rows": 4
}
[/block.

## Report line

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**accountId** ",
"1-0": "**name** ",
"2-0": "**value** ",
"3-0": "**items** ",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_number_",
"3-2": "An array of ReportLine items.",
"0-2": "Reference for an account in the accounting platform. This is unique to the [company](ref:datamodel-accounting-company).",
"1-2": "Name of the account in the accounting platform.",
"2-2": "Balance of the account in the accounting platform."
},
"cols": 3,
"rows": 4
}
[/block]

## Example data

```
{
"reports": [
  {
    "fromDate": "2017-09-01T00:00:00",
    "toDate": "2017-09-30T00:00:00",
    "cashReceipts": {
      "accountId": "cashReceipts",
      "name": "Cash Receipts",
      "value": 416.67,
      "items": [
        {
          "accountId": "777789d2-512b-4455-af51-a6b563733842",
          "name": "Income",
          "value": 416.67,
          "items": null
        },
        {
          "accountId": "66664a8f-b22d-4520-b97b-025b7cb10f94",
          "name": "Other Income",
          "value": 0.0,
          "items": null
        }
      ]
    },
    "cashPayments": {
      "accountId": "cashPayments",
      "name": "Cash Payments",
      "value": 100.71,
      "items": [
        {
          "accountId": "11111cbf-ea06-4d6e-9538-a8457fa66011",
          "name": "Cost of Sales",
          "value": 0.0,
          "items": null
        },
        {
          "accountId": "6666e297-59d6-4bd5-9353-478ee9b39685",
          "name": "Expenses",
          "value": 100.71,
          "items": null
        },
        {
          "accountId": "555501e8-8dbc-4390-ac99-3b0fff54a89f",
          "name": "Other Expenses",
          "value": 0.0,
          "items": null
        }
      ]
    }
  },
  {
    "fromDate": "2017-08-01T00:00:00",
    "toDate": "2017-08-31T00:00:00",
    "cashReceipts": {
      "accountId": "cashReceipts",
      "name": "Cash Receipts",
      "value": 1250.0,
      "items": [
        {
          "accountId": "777789d2-512b-4455-af51-a6b563733842",
          "name": "Income",
          "value": 1250.0,
          "items": null
        },
        {
          "accountId": "68794a8f-b22d-4520-b97b-025b7cb10f94",
          "name": "Other Income",
          "value": 0.0,
          "items": null
        }
      ]
    },
    "cashPayments": {
      "accountId": "cashPayments",
      "name": "Cash Payments",
      "value": 95.81,
      "items": [
        {
          "accountId": "11111cbf-ea06-4d6e-9538-a8457fa66011",
          "name": "Cost of Sales",
          "value": 0.0,
          "items": null
        },
        {
          "accountId": "6666e297-59d6-4bd5-9353-478ee9b39685",
          "name": "Expenses",
          "value": 95.81,
          "items": null
        },
        {
          "accountId": "555501e8-8dbc-4390-ac99-3b0fff54a89f",
          "name": "Other Expenses",
          "value": 0.0,
          "items": null
        }
      ]
    }
  },
  {
    "fromDate": "2017-07-01T00:00:00",
    "toDate": "2017-07-31T00:00:00",
    "cashReceipts": {
      "accountId": "cashReceipts",
      "name": "Cash Receipts",
      "value": 416.67,
      "items": [
        {
          "accountId": "777789d2-512b-4455-af51-a6b563733842",
          "name": "Income",
          "value": 416.67,
          "items": null
        },
        {
          "accountId": "88884a8f-b22d-4520-b97b-025b7cb10f94",
          "name": "Other Income",
          "value": 0.0,
          "items": null
        }
      ]
    },
    "cashPayments": {
      "accountId": "cashPayments",
      "name": "Cash Payments",
      "value": 91.67,
      "items": [
        {
          "accountId": "33331cbf-ea06-4d6e-9538-a8457fa66011",
          "name": "Cost of Sales",
          "value": 0.0,
          "items": null
        },
        {
          "accountId": "6666e297-59d6-4bd5-9353-478ee9b39685",
          "name": "Expenses",
          "value": 91.67,
          "items": null
        },
        {
          "accountId": "555501e8-8dbc-4390-ac99-3b0fff54a89f",
          "name": "Other Expenses",
          "value": 0.0,
          "items": null
        }
      ]
    }
  },

"reportBasis": "Cash",
"reportInput": "Direct",
"currency": "GBP"
}
```
