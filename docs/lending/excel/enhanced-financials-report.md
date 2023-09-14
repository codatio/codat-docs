---
title: "Enhanced Financials Excel report"
description: "Download the Enhanced Financials report to Excel"
sidebar_label: "Enhanced Financials report"
image: "/img/banners/social/lending.png"
---

Our Enhanced Financials Excel report gives you the same data you'd get from the [Enhanced Financials](/lending/enhanced-financials/overview) endpoints but in an Excel workbook.  You can use the report to test some companies and familiarise yourself with the data before building to the equivalent API endpoints.

The report contains the output of the following features:

- [Enhanced profit and loss accounts](/lending-api#/operations/get-accounts-for-enhanced-profit-and-loss)
- [Enhanced balance sheet accounts](/lending-api#/operations/get-accounts-for-enhanced-balance-sheet)

## Generating the report

You can generate the Enhanced Financials Excel report using the API or the Codat Portal (for details, see [Reports](/lending/portal/overview#reports)). The [Lending reports in Excel](/lending/excel/overview) article describes how to generate and download the report using the API.

## Using the report

To get the most out of the report, try creating a pivot table and grouping the data by category levels 1-5 to replicate a financial statement view.  You can also create formulas to calculate financial ratios from this data.

![Enhanced Financials Report](/img/lending/enhanced-financials.png "Enhanced Financials Report")

### Metrics template

We've also created a [Metrics Template Excel file](/documents/assess-metrics.xlsx).  You can paste data into this file from the Enhanced Financials Excel report to calculate key financial metrics and ratios.

[![Metrics Template](/img/lending/metrics-template.png "Metrics Template")](/documents/assess-metrics.xlsx)

## Troubleshooting

All data types relevant to the generation of the Enhanced Financials report are activated automatically when the Lending API product is enabled for your Codat client.

However, if you are unable to generate the lending report or the report is incomplete, check that the following data types are enabled:

- Accounts
- Profit and Loss
- Balance Sheet

If these requirements are not met, an empty Excel workbook will be returned.
