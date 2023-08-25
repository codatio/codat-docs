---
title: "Lending reports in Excel"
description: "Describes the process required to generate and download lending reports in Excel format"
sidebar_label: "Overview"
---

The Excel reports endpoints are used to produce and download excel reports. For more information on available reports, see the [report types](#available-report-types) section.
These reports can be generated via the [portal](/lending/portal/overview#reports) or the API.

The process to download an Excel report via the API is:

1. [Request](/lending-api#/operations/generate-excel-report) an Excel report for download
2. [Check the progress status](/lending-api#/operations/get-excel-report-generation-status) of the latest report requested (optional)
3. [Download](/lending-api#/operations/download-excel-report) the latest Excel report

Only one request will be processed at a time per SMB company and per report type.
The generated report is kept in blob storage and gets replaced when a new one is generated.
These reports will show you what data is available from our API without writing any code upfront, and how this can be uses to automatically generate your key financial metrics.

## Available report types

- [Audit Report](/lending/excel/audit-report) (`reportType=audit`): Identifies indicators of inaccurate or out-of-date accounts, helping you to decision with confidence
- [Enhanced Cash Flow Report](/lending/excel/enhanced-cash-flow-report) (`reportType=enhancedCashFlow`): Contains enhanced cash flow data
- [Enhanced Financials Report](/lending/excel/enhanced-financials-report) (`reportType=enhancedFinancials`): Contains enhanced profit and loss and balance sheet data, allowing you to calculate key metrics
- [Enhanced Invoices Report](/lending/excel/enhanced-invoices-report) (`reportType=enhancedInvoices`): Contains enhanced invoices which are linked to payments

TODO: Check if this line can go:
Please also refer to the [Metrics Template](/lending/excel/enhanced-financials-report#metrics-template) which demonstrates how we can use the data within the [Enhanced Financials Report](/lending/excel/enhanced-financials-report) to calculate financial metrics.
