---
title: "Enhanced Invoices Excel report"
description: "Download the Enhanced Invoices report to Excel"
sidebar_label: "Enhanced Invoices report"
image: "/img/banners/social/lending.png"
---

Our Enhanced Invoices Excel report gives you the same data you'd get from the [Enhanced Invoices](/lending/enhanced-invoices/overview) endpoint but in an Excel workbook.  You can use the report to test some companies and familiarize yourself with the data before building to the equivalent API endpoint.

The report contains the output of the following features:

- [Enhanced invoices](/lending/enhanced-invoices/overview)

## Prerequisites

The Enhanced Invoices Excel report requires a company to have both an accounting connection and for the following data types to be synced:

- Invoices
- Payments

If these requirements are not met, an empty Excel workbook will be returned.

## Generating the report

You can generate the Enhanced Invoices Excel report using the API or the Codat Portal (for details, see [Reports](/lending/portal/overview#reports)). The [Lending reports in Excel](/lending/excel/overview) article describes how to generate and download the report using the API.

## Using the report

The report is ordered so the most recent invoices are at the top of the document.  Excel is limited to one million rows of data; however, this limitation does not apply to the [Enhanced Invoices API](/lending-api#/operations/get-enhanced-invoices-report).

![Enhanced Invoices Report](/img/lending/enhanced-invoices-blur.png "Enhanced Invoices Report")
