---
title: "Assess report"
description: "Download the enhanced financials reports to excel"
sidebar_label: "Assess report"
---
Our excel Assess Report is designed to give you the same data you would get via the API. You can use this report to test some companies and familiarize yourself with the data before building to the equivalent API endpoints. 

The assess report combines data from the following:
- [Enhanced profit and loss accounts](/lending/enhanced-financials/profit-and-loss-accounts)
- [Enhanced balance sheet accounts](/lending/enhanced-financials/balance-sheet-accounts)

## Generating the report

The Assess Report can be generated via API or through [Codat's Portal](/lending/portal/overview#reports).  The [Excel reports](/lending/excel/overview) page describes how to generate and download the report via API.

## Using the report
We recommend creating a pivot table and grouping by category Level 1-5 to replicate a financial statement view. Users can also create formulas for financial ratios.

## Troubleshooting

By default, the required data types are enabled for you when Lending API is enabled on your Codat client.
However, if you are unable to generate the lending report or the report is incomplete, check that the following data types are enabled:

- Accounts
- Profit and Loss
- Balance Sheet