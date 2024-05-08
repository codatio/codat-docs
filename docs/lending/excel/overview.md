---
title: "Lending reports in Excel"
description: "Describes the process required to generate and download lending reports in Excel format"
sidebar_label: "Overview"
image: "/img/banners/social/lending.png"
---

The Excel reports endpoints are used to produce and download Excel reports. For more information on available reports, see the [report types](#available-report-types) section.
These reports can be generated via the Portal or the API.

The process to download an Excel report via the API is:

1. [Request](/lending-api#/operations/generate-excel-report) an Excel report for download.
2. [Check the progress status](/lending-api#/operations/get-excel-report-generation-status) of the latest report requested (optional).
3. [Download](/lending-api#/operations/download-excel-report) the latest Excel report.

Only one request will be processed at a time per SMB company and per report type.
The generated report is kept in blob storage and gets replaced when a new one is generated.
These reports will show you what data is available from our API without writing any code upfront and how this data can be used to automatically generate your key financial metrics.

## Available report types

- [Audit report](/lending/excel/audit-report) (`reportType=audit`) identifies indicators of inaccurate or out-of-date accounts, helping you to make decisions with confidence.
- [Enhanced Cash Flow report](/lending/excel/enhanced-cash-flow-report) (`reportType=enhancedCashFlow`) contains enhanced cash flow data.
- [Enhanced Financials report](/lending/excel/enhanced-financials-report) (`reportType=enhancedFinancials`) contains enhanced profit and loss and balance sheet data, allowing you to calculate key metrics.
- [Enhanced Invoices report](/lending/excel/enhanced-invoices-report) (`reportType=enhancedInvoices`) contains enhanced invoices that are linked to payments.

:::tip Using the Enhanced Financials report?
Refer to the [Metrics Template](/lending/excel/enhanced-financials-report#metrics-template) which demonstrates how we can use the data within the [Enhanced Financials Report](/lending/excel/enhanced-financials-report) to calculate financial metrics.
:::