---
title: "Enhanced Financials Excel Report"
description: "Download the Enhanced Financials report to Excel"
sidebar_label: "Enhanced Financials report"
createdAt: "2022-10-18T08:18:51.069Z"
updatedAt: "2023-05-09T10:00:00.000Z"
---

Our Enhanced Financials Excel report gives you the same data you'd get from the [Enhanced Financials](/assess/enhanced-financials/overview) endpoints, but in an Excel workbook.  You can use the report to test some companies and familiarise yourself with the data before building to the equivalent API endpoints.

The report contains the output of the following features:

- [Enhanced profit and loss accounts](/assess/enhanced-financials/profit-and-loss-accounts)
- [Enhanced balance sheet accounts](/assess/enhanced-financials/balance-sheet-accounts)

## Prerequisites

The Enhanced Financials Excel report contains data from the currently enabled data types.  If a data type is not enabled, the data associated with it is omitted.

The report requires an accounting integration with the following data types enabled:

- Accounts
- Balance Sheet
- Profit and Loss

## Generating the report

You can generate the Enhanced Financials Excel report using the API or the Codat Portal (for details, see [Reports](/assess/portal/overview#reports)). The [Assess reports in Excel](/assess/excel/overview) article describes how to generate and download the report using the API.

## Using the report

To get the most out of the report, try creating a pivot table and grouping the data by category Level 1-5 to replicate a financial statement view.  You can also create formulas to calculate financial ratios from this data.

### Metrics template

We've also created a [Metrics Template Excel file](/documents/assess-metrics.xlsx).  You can paste data into this file from the Enhanced Financials Excel report to calculate key financial metrics and ratios.

![Metrics Template](/img/assess/metrics-template.png)