---
title: "Balance sheet"
description: "A snapshot of a company's accounts at a single point in time that provides a statement of the assets, liabilities and equity of an organization"
createdAt: "2019-03-15T13:39:57.812Z"
updatedAt: "2022-11-16T09:28:52.714Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Financials/get_companies__companyId__data_financials_balanceSheet" target="_blank">Balance Sheet</a> endpoint in Swagger.

View the coverage for balance sheet in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=balanceSheet" target="_blank">Data coverage explorer</a>.

## Overview

The balance sheet gives interested parties an idea of the company's financial position, in addition to displaying what the company owns and owes.

:::info Balance sheet or profit and loss report?

A profit and loss report summarises the total revenue, expenses, and profit or loss during a specified time period. A balance sheet report shows the financial position of a company at a specific moment in time.
:::

**Structure of this report**
This report will reflect the structure and line descriptions that the business has set in their own accounting platform.

**History**
By default, Codat pulls (up to) 24 months of balance sheets for a company. You can adjust this to fetch more history, where available, by updating the `monthsToSync` value for `balanceSheet` on the [data type settings endpoint](https://docs.codat.io/reference/post_profile-syncsettings).

**Want to pull this in a standardised structure?**
Our [Enhanced Financials](/assess/reports/enhanced-financials/financials) endpoints provide the same report under standardized headings, allowing you to pull it in the same format for all of your business customers.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**currency** ",
"1-0": "**reports** ",
"2-0": "**mostRecentAvailableMonth** ",
"3-0": "**earliestAvailableMonth** ",
"0-1": "_string_
See [currency](/datamodel-shared-currency)",
"2-1": "_string_",
"3-1": "_string_",
"1-2": "An array of BalanceSheet reports.",
"0-2": "Currency of the balance sheet.",
"2-2": "Most recent available monthly report data",
"3-2": "Earliest available monthly report data"
},
"cols": 3,
"rows": 4
}
[/block.

## Balance sheet reports

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**date** ",
"1-0": "**assets** ",
"2-0": "**liabilities** ",
"3-0": "**netAssets** ",
"4-0": "**equity** ",
"0-1": "_string_",
"3-1": "_decimal_",
"1-2": "[ReportLines](#section-report-line) for assets. For example, fixed and current assets.",
"2-2": "[ReportLines](#section-report-line) for liabilities. For example, current liabilities.",
"3-2": "Value of net assets for a company in their base currency.",
"4-2": "[ReportLines](#section-report-line) for equities. For example, retained and current year earnings. See below.",
"0-2": "Point in time when a snapshot of a company's financial position is taken."
},
"cols": 3,
"rows": 5
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
"2-1": "_decimal_",
"3-2": "An array of ReportLine items.",
"0-2": "Reference for an account in the accounting platform. This is unique to the [company](/datamodel-accounting-company).",
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
"currency": "string",
"reports": [
      {
          "date": "2018-02-28T00:00:00",
          "assets": {
            "accountId": null,
            "name": "Assets",
            "value": 24106.5,
            "items": [
              {
                "accountId": null,
                "name": "Fixed Assets",
                "value": 2583.33,
                "items": [
                  {
                    "accountId": null,
                    "name": "Office Equipment",
                    "value": 3569,
                    "items": []
                  },
                  {
                    "accountId": null,
                    "name": "Computer Equipment",
                    "value": -985.67,
                    "items": []
                  }
                ]
              },
              {
                "accountId": null,
                "name": "Current Assets",
                "value": 21523.17,
                "items": [
                  {
                    "accountId": null,
                    "name": "Accounts Receivable",
                    "value": 11417.63,
                    "items": []
                  },
                  {
                    "accountId": null,
                    "name": "Bank",
                    "value": 10105.54,
                    "items": [
                      {
                        "accountId": null,
                        "name": "Business Bank Account",
                        "value": 10105.54,
                        "items": []
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "liabilities": {
            "accountId": null,
            "name": "Liabilities",
            "value": 13054.83,
            "items": [
              {
                "accountId": null,
                "name": "Current Liabilities",
                "value": 13054.83,
                "items": [
                  {
                    "accountId": null,
                    "name": "VAT",
                    "value": 1444.62,
                    "items": []
                  },
                  {
                    "accountId": null,
                    "name": "Rounding",
                    "value": 0.02,
                    "items": []
                  },
                  {
                    "accountId": null,
                    "name": "Historical Adjustment",
                    "value": 4130.98,
                    "items": []
                  },
                  {
                    "accountId": null,
                    "name": "Accounts Payable",
                    "value": 7479.21,
                    "items": []
                  }
                ]
              }
            ]
          },
          "netAssets": 11051.67,
          "equity": {
            "accountId": null,
            "name": "Equity",
            "value": 11051.67,
            "items": [
              {
                "accountId": null,
                "name": "Retained Earnings",
                "value": 650.01,
                "items": []
              },
              {
                "accountId": null,
                "name": "Current Year Earnings",
                "value": 10401.66,
                "items": []
              }
            ]
          }
      }
  ],
"mostRecentAvailableMonth": "2019-03-25T11:25:05.572Z",
"earliestAvailableMonth": "2019-03-25T11:25:05.572Z"
}
```
