---
title: "Assess reports in Excel"
description: "Describes the process and endpoints for the generation and download of Assess Excel reports"
sidebar_label: "Overview"
---

The Excel reports endpoints are used to produce and download excel reports. For more information on available reports, see the [report types](#available-report-types) section.  These reports can be generated via the [portal](/assess/portal/overview#reports) or the API.

The process to download an Excel report via the API is:

1. [Request](#request-an-excel-report-for-download) an Excel report for download
2. [Check the progress status](#check-status-of-the-report) of the latest report requested (optional)
3. [Download](#download-the-report) the latest Excel report

Only one request will be processed at a time per SMB company and per report type. The generated report is kept in blob storage and gets replaced when a new one is generated.  These reports will show you what data is available from our [API](/assess-api#/operations/post-data-companies-companyId-assess-excel) without writing any code upfront, and how this can be uses to automatically generate your key financial metrics.


## Available report types

- [Audit Report](/assess/excel/audit-report): Identifies indicators of inaccurate or out-of-date accounts, helping you to decision with confidence
- [Enhanced Cash Flow Report](/assess/excel/enhanced-cash-flow-report): Contains enhanced cash flow data
- [Enhanced Financials Report](/assess/excel/enhanced-financials-report): Contains enhanced profit and loss and balance sheet data, allowing you to calculate key metrics
- [Enhanced Invoices Report](/assess/excel/enhanced-invoices-report): Contains enhanced invoices which are linked to payments

Please also refer to the [Metrics Template](/assess/excel/enhanced-financials-report#Metrics Template) which demonstrates how we can use the data within the [Enhanced Financials Report](/assess/excel/enhanced-financials-report) to calculate financial metrics.

## Parameters

For each of the endpoints described below, you will provide the same parameters.

|Parameter|Type|Description|Required|
|---------|----|-----------|--------|
|**companyId**|_string_|The company ID for which you want to produce an Excel report for download.|Required|
|**reportType**|_string_|The type of report you want to generate and download.  Allowed values are:<br />*audit*, *enhancedCashFlow*, *enhancedFinancials* and *enhancedInvoices*|Required|

## Request an Excel report for download

The endpoint is available in our [API Reference](/assess-api#/operations/post-data-companies-companyId-assess-excel).

`POST /data/companies/{companyId}/assess/excel`

|Field|Type|Description|
|-----|----|-----------|
|**lastGenerated**|_date_|The date and time of the report that is being generated.|
|**inProgress**|_boolean_|True - the request was successful and the report is being generated.<br/>False - the request was unsuccessful and the report is not being generated.|
|**queued**|_date_|The time a successful request was queued.|
|**succcess**|_boolean_|True - the requested report was successfully queued.<br/>False - the requested report wasn’t able to be queued.|
|**errorMessage**|_string_|The error message if the status was unsuccessful.|
|**lastInvocationId**|_string_|A unique ID generated for this request.|
|**reportType**|_string_|The report requested in the query string.|


```json title="Example of an Excel report request"
{
  "lastGenerated": "2022-10-18T12:43:33.340Z",
  "inProgress": true,
  "queued": "2022-10-18T12:43:33.340Z",
  "success": true,
  "errorMessage": "string",
  "lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "reportType": "string"
}
```

## Check status of the report

The status tells you if the last report requested is complete. It only returns the status of the last report requested, not for older requests. This step is optional and won't affect the generation of the report if it were skipped.

When the report is complete, the `inProgress` field will have the value _false_ whilst the `success` field will have the value _true_.

The endpoint is available in our <a href="/assess-api#/operations/get-data-companies-companyId-assess-excel">API reference</a>.

`GET /data/companies/{companyId}/assess/excel`

|Field|Type|Description|
|----|----|----|
|**lastGenerated**|_string_, See [date](/codat-api#/schemas/DateTime)|The date and time of the report that is being generated.|
|**inProgress**|_boolean_|True - the request was successful and the report is being generated.<br/>False - the request was unsuccessful and the report is not being generated.|
|**queued**|_string_, See [date](/codat-api#/schemas/DateTime)|The time a successful request was queued.|
|**success**|_boolean_|True - the requested report was successfully queued.<br/>False - the requested report wasn't able to be queued.|
|**errorMessage**|_string_|The error message if the status was unsuccessful.|
|**lastInvocationId**|_string_|A unique ID generated for this request.|
|**reportType**|_string_|The report requested in the query string.|


```json title="Example of a status check request"
{
"lastGenerated": "2022-10-18T12:44:46.081Z",
"inProgress": true,
"queued": "2022-10-18T12:44:46.081Z",
"success": true,
"errorMessage": "string",
"lastInvocationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
"reportType": "string"
}
```

## Download the report

The endpoint is available in our <a href="/assess-api#/operations/post-data-companies-companyId-assess-excel-download">API reference</a>.

`GET /data/companies/{companyId}/assess/excel/download`

The downloadable Excel file is available in the response.  Click it to save to your local machine.
