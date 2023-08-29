---
title: "Assess report"
description: "Download the Enhanced Financials reports to Excel"
sidebar_label: "Assess report"
---
Our Excel Assess report is designed to give you the same data you would get via the API. You can use this report to test some companies and familiarize yourself with the data before building to the equivalent API endpoints. 

The Assess report combines data from the following endpoints:
- [Enhanced profit and loss accounts](/lending/enhanced-financials/profit-and-loss-accounts)
- [Enhanced balance sheet accounts](/lending/enhanced-financials/balance-sheet-accounts)

## Generating the report

The Assess report can be generated via API or through [Codat's Portal](/lending/portal/overview#reports).  The [Excel reports](/lending/excel/overview) page describes how to generate and download the report via API.

## Using the report
We recommend creating a pivot table and grouping by category Levels 1-5 to replicate a financial statement view. Users can also create formulas for financial ratios.

## Troubleshooting

All data types relevant to the generation of the Assess report are activated automatically when the Lending API product is enabled for your Codat client.
However, if you are unable to generate the lending report or the report is incomplete, check that the following data types are enabled:

- Accounts
- Profit and Loss
- Balance Sheet
