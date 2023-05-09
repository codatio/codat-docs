---
title: "Enhanced Financials Report"
description: "Download the Enhanced Financials report to Excel"
sidebar_label: "Enhanced Financials report"
createdAt: "2022-10-18T08:18:51.069Z"
updatedAt: "2023-05-05T12:00:00.000Z"
---

Our enhanced financials Excel report is designed to give you the same data you would get via the API.  You can use this report to test some companies and familiarise yourself with the data before building to the equivalent API endpoints.

This report contains an output of the following feature:

- [Enhanced profit and loss accounts](/assess/enhanced-financials/profit-and-loss-accounts)
- [Enhanced balance sheet accounts](/assess/enhanced-financials/balance-sheet-accounts)

## Prerequisites

The report contains data based on the data types you have enabled. If a data type is missing, the data associated with it will be omitted.

This report requires an accounting integration with the following datatypes enabled:

- Accounts
- Profit and Loss
- Balance Sheet

## Generating the report

The Assess Report can be generated via API or through [Codat's Portal](/assess/portal/overview#reports).  The [Excel reports](/assess/excel/overview) page describes how to generate and download the report via API.

## Using the report

We recommend creating a pivot table and grouping by category Level 1-5 to replicate a financial statement view.  Users can also create formulas for financial ratios.

### Metrics template

We have created a [Metrics Template](/documents/assess-metrics.xlsx) that allows users to paste data from the enhanced financials report to calculate key financial metrics and ratios.

![Metrics Template](/img/assess/metrics-template.png)