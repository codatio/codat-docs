---
title: "Profit and loss"
description: "Shows a company's total income and expenses over a specified period"
createdAt: "2019-03-15T13:44:22.890Z"
updatedAt: "2022-11-21T12:29:35.179Z"
---

:::note Language tip
Profit and loss statement is also referred to as **income statement** under US GAAP (Generally Accepted Accounting Principles).
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Financials/get_companies__companyId__data_financials_profitAndLoss" target="_blank">Profit and Loss</a> endpoint in Swagger.

View the coverage for profit and loss in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=profitAndLoss" target="_blank">Data coverage explorer</a>.

## Overview

The purpose of a profit and loss report is to present the financial performance of a company over a specified time period.

A profit and loss report shows a company's total income and expenses for a specified period of time and whether a profit or loss has been made.

:::note Profit and loss or balance sheet?
Profit and loss reports summarise the total revenue, expenses, and profit or loss over a specified time period. A balance sheet report presents all assets, liability, and equity for a given date.
:::

**Structure of this report**  
This report will reflect the structure and line descriptions that the business has set in their own accounting platform.

**History**  
By default, Codat pulls (up to) 24 months of profit and loss history for a company. You can adjust this to fetch more history, where available, by updating the `monthsToSync` value for `profitAndLoss` on the [data type settings endpoint](https://docs.codat.io/reference/post_profile-syncsettings).

**Want to pull this in a standardised structure?**  
Our [Enhanced Financials](/assess/reports/enhanced-financials/financials) endpoints provide the same report under standardized headings, allowing you to pull it in the same format for all of your business customers.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**reports** ",
"0-1": "",
"0-2": "An array of [ProfitAndLossReports](#profit-and-loss-report).",
"1-0": "**reportBasis** ",
"1-1": "_string_",
"1-2": "The basis of a report, either:

- `Accrual`
- `Cash`
- `Unknown`",
  "2-0": "**currency** ",
  "2-1": "_string_  
  See [currency](/datamodel-shared-currency)",
  "2-2": "Base currency of the company in which the profit and loss report is presented.",
  "3-0": "**mostRecentAvailableMonth** ",
  "3-1": "_string_",
  "3-2": "Most recent available monthly report data",
  "4-0": "**earliestAvailableMonth** ",
  "4-1": "_string_",
  "4-2": "Earliest available monthly report data"
  },
  "cols": 3,
  "rows": 5,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

### Profit and loss report

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**fromDate** ",
"0-1": "_string_  
See [date](/datamodel-shared-date)",
"0-2": "Date from which the report data begins.",
"1-0": "**toDate** ",
"1-1": "_string_  
See [date](/datamodel-shared-date)",
"1-2": "Date on which the report data ends.",
"2-0": "**income** ",
"2-1": "",
"2-2": "[ReportLine](#section-report-lines) items for income in the given date range.",
"3-0": "**costOfSales** ",
"3-1": "",
"3-2": "[ReportLine](#section-report-lines) items for cost of sales in the given date range.",
"4-0": "**grossProfit** ",
"4-1": "_decimal_",
"4-2": "Gross profit of the company in the given date range.",
"5-0": "**expenses** ",
"5-1": "",
"5-2": "[ReportLine](#section-report-lines) items for expenses in the given date range.",
"6-0": "**netOperatingProfit** ",
"6-1": "_decimal_",
"6-2": "Net operating profit of the company in the given date range.",
"7-0": "**otherExpenses** ",
"7-1": "",
"7-2": "[ReportLine](#section-report-lines) items for other expenses in the given date range.",
"8-0": "**otherIncome** ",
"8-1": "",
"8-2": "[ReportLine](#section-report-lines) items for other income in the given date range.",
"9-0": "**netOtherIncome** ",
"9-1": "_decimal_",
"9-2": "Net other income of the company in the given date range.",
"10-0": "**netProfit** ",
"10-1": "_decimal_",
"10-2": "Net profit of the company in the given date range."
},
"cols": 3,
"rows": 11,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Report lines

| Field         | Type      | Description                                                                                                                               |
| :------------ | :-------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| **accountId** | _string_  | Identifier for the account, unique for the [company](/datamodel-accounting-company) in the accounting platform. |
| **name**      | _string_  | Name of the report line item, for example: `Income` or `Sales`.                                                                           |
| **value**     | _decimal_ | Numerical value of the line item.                                                                                                         |
| **items**     |           | Report line items for the given date range.                                                                                               |

## Example data

```json Profit and Loss report over 12 months based on type accrual
{
  "reports": [
    {
      "fromDate": "2018-02-01T00:00:00",
      "toDate": "2018-02-28T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 6960.09,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 6960.09,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 700,
        "items": [
          {
            "accountId": null,
            "name": "Purchases",
            "value": 700,
            "items": []
          }
        ]
      },
      "grossProfit": 6260.09,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 4198.6,
        "items": [
          {
            "accountId": null,
            "name": "Advertising & Marketing",
            "value": 2083.33,
            "items": []
          },
          {
            "accountId": null,
            "name": "Entertainment-100% business",
            "value": 18.33,
            "items": []
          },
          {
            "accountId": null,
            "name": "General Expenses",
            "value": 186.97,
            "items": []
          },
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 103.43,
            "items": []
          },
          {
            "accountId": null,
            "name": "Motor Vehicle Expenses",
            "value": 342.79,
            "items": []
          },
          {
            "accountId": null,
            "name": "Postage, Freight & Courier",
            "value": 94.19,
            "items": []
          },
          {
            "accountId": null,
            "name": "Printing & Stationery",
            "value": 65.58,
            "items": []
          },
          {
            "accountId": null,
            "name": "Rent",
            "value": 984.38,
            "items": []
          },
          {
            "accountId": null,
            "name": "Repairs & Maintenance",
            "value": 57.92,
            "items": []
          },
          {
            "accountId": null,
            "name": "Subscriptions",
            "value": 14.9,
            "items": []
          },
          {
            "accountId": null,
            "name": "Telephone & Internet",
            "value": 45.11,
            "items": []
          },
          {
            "accountId": null,
            "name": "Travel - National",
            "value": 201.67,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 2061.49,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 2061.49
    },
    {
      "fromDate": "2018-01-01T00:00:00",
      "toDate": "2018-01-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 11453.03,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 11453.03,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 1250,
        "items": [
          {
            "accountId": null,
            "name": "Purchases",
            "value": 1250,
            "items": []
          }
        ]
      },
      "grossProfit": 10203.03,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 7979.19,
        "items": [
          {
            "accountId": null,
            "name": "Advertising & Marketing",
            "value": 6628.13,
            "items": []
          },
          {
            "accountId": null,
            "name": "Audit & Accountancy fees",
            "value": 46.96,
            "items": []
          },
          {
            "accountId": null,
            "name": "General Expenses",
            "value": 49.62,
            "items": []
          },
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 103.43,
            "items": []
          },
          {
            "accountId": null,
            "name": "Motor Vehicle Expenses",
            "value": 123.75,
            "items": []
          },
          {
            "accountId": null,
            "name": "Rent",
            "value": 984.38,
            "items": []
          },
          {
            "accountId": null,
            "name": "Telephone & Internet",
            "value": 42.92,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 2223.84,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 2223.84
    },
    {
      "fromDate": "2017-12-01T00:00:00",
      "toDate": "2017-12-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 4524.84,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 4524.84,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 4524.84,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 3723.75,
        "items": [
          {
            "accountId": null,
            "name": "Audit & Accountancy fees",
            "value": 46.96,
            "items": []
          },
          {
            "accountId": null,
            "name": "Bank Fees",
            "value": 15,
            "items": []
          },
          {
            "accountId": null,
            "name": "Cleaning",
            "value": 99.23,
            "items": []
          },
          {
            "accountId": null,
            "name": "Entertainment-100% business",
            "value": 26.33,
            "items": []
          },
          {
            "accountId": null,
            "name": "General Expenses",
            "value": 124.42,
            "items": []
          },
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 129.38,
            "items": []
          },
          {
            "accountId": null,
            "name": "Motor Vehicle Expenses",
            "value": 123.75,
            "items": []
          },
          {
            "accountId": null,
            "name": "Rent",
            "value": 984.38,
            "items": []
          },
          {
            "accountId": null,
            "name": "Repairs & Maintenance",
            "value": 886.3,
            "items": []
          },
          {
            "accountId": null,
            "name": "Subscriptions",
            "value": 1219.9,
            "items": []
          },
          {
            "accountId": null,
            "name": "Telephone & Internet",
            "value": 39.02,
            "items": []
          },
          {
            "accountId": null,
            "name": "Travel - National",
            "value": 29.08,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 801.09,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 801.09
    },
    {
      "fromDate": "2017-11-01T00:00:00",
      "toDate": "2017-11-30T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 2429.16,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 2429.16,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 2429.16,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 1215.27,
        "items": [
          {
            "accountId": null,
            "name": "Audit & Accountancy fees",
            "value": 46.96,
            "items": []
          },
          {
            "accountId": null,
            "name": "Bank Fees",
            "value": 15,
            "items": []
          },
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 113.41,
            "items": []
          },
          {
            "accountId": null,
            "name": "Printing & Stationery",
            "value": 18.09,
            "items": []
          },
          {
            "accountId": null,
            "name": "Rent",
            "value": 984.38,
            "items": []
          },
          {
            "accountId": null,
            "name": "Telephone & Internet",
            "value": 37.43,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 1213.89,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 1213.89
    },
    {
      "fromDate": "2017-10-01T00:00:00",
      "toDate": "2017-10-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 1000,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 1000,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 1000,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 101.43,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 101.43,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 898.57,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 898.57
    },
    {
      "fromDate": "2017-09-01T00:00:00",
      "toDate": "2017-09-30T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 416.67,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 416.67,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 416.67,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 100.71,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 100.71,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 315.96,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 315.96
    },
    {
      "fromDate": "2017-08-01T00:00:00",
      "toDate": "2017-08-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 1250,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 1250,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 1250,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 95.81,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 95.81,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 1154.19,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 1154.19
    },
    {
      "fromDate": "2017-07-01T00:00:00",
      "toDate": "2017-07-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 416.67,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 416.67,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 416.67,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 91.67,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 91.67,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 325,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 325
    },
    {
      "fromDate": "2017-06-01T00:00:00",
      "toDate": "2017-06-30T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 416.67,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 416.67,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 416.67,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 86.67,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 86.67,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 330,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 330
    },
    {
      "fromDate": "2017-05-01T00:00:00",
      "toDate": "2017-05-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 833.34,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 833.34,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 833.34,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 84.76,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 84.76,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 748.58,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 748.58
    },
    {
      "fromDate": "2017-04-01T00:00:00",
      "toDate": "2017-04-30T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 416.67,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 416.67,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 416.67,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 87.62,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 87.62,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 329.05,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 329.05
    },
    {
      "fromDate": "2017-03-01T00:00:00",
      "toDate": "2017-03-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 416.67,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 416.67,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 416.67,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 92.38,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 92.38,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 324.29,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 324.29
    },
    {
      "fromDate": "2017-02-01T00:00:00",
      "toDate": "2017-02-28T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 416.67,
        "items": [
          {
            "accountId": null,
            "name": "Sales",
            "value": 416.67,
            "items": []
          }
        ]
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 416.67,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 90.95,
        "items": [
          {
            "accountId": null,
            "name": "Light, Power, Heating",
            "value": 90.95,
            "items": []
          }
        ]
      },
      "netOperatingProfit": 325.72,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 325.72
    },
    {
      "fromDate": "2017-01-01T00:00:00",
      "toDate": "2017-01-31T00:00:00",
      "income": {
        "accountId": null,
        "name": "Income",
        "value": 0,
        "items": []
      },
      "costOfSales": {
        "accountId": null,
        "name": "Cost of Sales",
        "value": 0,
        "items": []
      },
      "grossProfit": 0,
      "expenses": {
        "accountId": null,
        "name": "Expenses",
        "value": 0,
        "items": []
      },
      "netOperatingProfit": 0,
      "otherExpenses": {
        "accountId": null,
        "name": "Other Expenses",
        "value": 0,
        "items": []
      },
      "otherIncome": {
        "accountId": null,
        "name": "Other Income",
        "value": 0,
        "items": []
      },
      "netOtherIncome": 0,
      "netProfit": 0
    }
  ],
  "reportBasis": "Accrual",
  "currency": "GBP"
}
```
