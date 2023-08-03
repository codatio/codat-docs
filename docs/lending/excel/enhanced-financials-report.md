---
title: "Enhanced Financials Excel Report"
description: "Download the Enhanced Financials report to Excel"
sidebar_label: "Enhanced Financials report"
---

Our Enhanced Financials Excel report gives you the same data you'd get from the [Enhanced Financials](/lending/enhanced-financials/overview) endpoints, but in an Excel workbook.  You can use the report to test some companies and familiarise yourself with the data before building to the equivalent API endpoints.

The report contains the output of the following features:

- [Enhanced profit and loss accounts](/lending/enhanced-financials/overview#endpoints)
- [Enhanced balance sheet accounts](/lending/enhanced-financials/overview#endpoints)

## Prerequisites

The Enhanced Financials Excel report requires a company to have both an accounting connection and the following data types synced:

- Accounts
- Balance Sheet
- Profit and Loss

If these requirements are not met an empty Excel workbook will be returned.

## Generating the report

You can generate the Enhanced Financials Excel report using the API or the Codat Portal (for details, see [Reports](/lending/portal/overview#reports)). The [Lending reports in Excel](/lending/excel/overview) article describes how to generate and download the report using the API.

## Using the report

To get the most out of the report, try creating a pivot table and grouping the data by category Level 1-5 to replicate a financial statement view.  You can also create formulas to calculate financial ratios from this data.

![Enhanced Financials Report](/img/lending/enhanced-financials.png "Enhanced Financials Report")

### Metrics template

We've also created a [Metrics Template Excel file](/documents/assess-metrics.xlsx).  You can paste data into this file from the Enhanced Financials Excel report to calculate key financial metrics and ratios.

[![Metrics Template](/img/lending/metrics-template.png "Metrics Template")](/documents/assess-metrics.xlsx)
