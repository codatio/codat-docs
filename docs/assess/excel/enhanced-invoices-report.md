---
title: "Enhanced Invoices Excel Report"
description: "Download the Enhanced Invoices report to Excel"
sidebar_label: "Enhanced Financials report"
createdAt: "2023-05-09T11:00:00.000Z"
updatedAt: "2023-05-09T11:00:00.000Z"
---

Our Enhanced Invoices Excel report gives you the same data you'd get from the [Enhanced Invoices](/assess/enhanced-invoices/overview) endpoints, but in an Excel workbook.  You can use the report to test some companies and familiarise yourself with the data before building to the equivalent API endpoints.

The report contains the output of the following features:

- [Enhanced invoices](/assess/enhanced-invoices/overview)

## Prerequisites

The Enhanced Invoices Excel report contains data from the currently enabled data types.  If a data type is not enabled, the data associated with it is omitted.

The report requires an accounting integration with the following data types enabled:

- Invoices
- Payments

## Generating the report

You can generate the Enhanced Invoices Excel report using the API or the Codat Portal (for details, see [Reports](/assess/portal/overview#reports)). The [Assess reports in Excel](/assess/excel/overview) article describes how to generate and download the report using the API.

## Using the report

The report is ordered so the most recent invoices are at the top of the document.  Please note Excel is limited to one million rows of data, however this limitation does not apply to the [Enhanced Invoices API](/assess-api#/operations/get-enhanced-invoices-report).

![Enhanced Invoices](/img/assess/enhanced-invoices-blur.png)