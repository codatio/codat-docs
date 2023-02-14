---
title: "Excel reports"
description: "Describes the process and endpoints for the generation and download of Assess Excel reports"
createdAt: "2022-10-18T10:05:18.826Z"
updatedAt: "2022-11-02T14:45:30.043Z"
---

The Excel reports endpoints are used to produce and download excel reports. For more information on available reports, see the [report types](#available-report-types) section.

The process to download an Excel report is:

1. [Request](#request-an-excel-report-for-download) an Excel report for download.
2. [Check the progress status](#check-status-of-the-report) of the latest report requested (optional).
3. [Download](#download-the-report) the latest Excel report.

Only one request will be processed at a time per SMB company and per report type. The generated report is kept in blob storage and gets replaced when a new one is generated.


## Available report types

- [Audit Report](/assess/reports/audit-report)

## Parameters

For each of the endpoints described below, you will provide the same parameters.

|Parameter|Type|Description|Requried|
|---------|----|-----------|--------|
|**companyId**|_string_|The company ID for which you want to produce an Excel report for download.|Required|
|**reportType**|_string_|The type of report you want to generate and download.  For the audit report this is set to "audit".|Required|

## Request an Excel report for download

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/post_data_companies__companyId__assess_excel" target="_blank">Swagger</a> under **Assess**.

`POST /data/companies/{companyId}/assess/excel`

|Field|Type|Description|
|-----|----|-----------|
|**lastGenerated**|_date_|The date and time of the report that is being generated.|
|**inProgress**|_boolean_|- True - the request was successful and the report is being generated.<br/>- False - the request was unsuccessful and the report is not being generated.|
|**queued**|_date_|The time a successful request was queued.|
|**succcess**|_boolean_|- True - the requested report was successfully queued.<br/>- False - the requested report wasn’t able to be queued.|
|**errorMessage**|_string_|The error message if the status was unsuccessful.|
|**lastInvocationId**|_string_|A unique ID generated for this request.|
|**reportType**|_string_|The report requested in the query string.|

Example

```
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

When the report is complete, the `inProgress` field will have the value of _false_ whilst the `success` field will show _true_.

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_companies__companyId__assess_excel" target="_blank">Swagger</a> under **Assess**.

`GET /data/companies/{companyId}/assess/excel`

{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**lastGenerated**",
"1-0": "**inProgress** ",
"2-0": "**queued** ",
"3-0": "**success** ",
"4-0": "**errorMessage** ",
"5-0": "**lastInvocationId** ",
"6-0": "**reportType** ",
"0-1": "_string_
See [date](/datamodel-shared-date)",
"1-1": "_boolean_ ",
"2-1": "_string_
See [date](/datamodel-shared-date)",
"3-1": "_boolean_ ",
"4-1": "_string_ ",
"5-1": "_string_ ",
"6-1": "_string_ ",
"0-2": "The date and time of the report that is being generated.",
"1-2": " \* true - the request was successful and the report is being generated.

- false - the request was unsuccessful and the report is not being generated.
  ",
  "2-2": "The time a successful request was queued.",
  "3-2": " \* true - the requested report was successfully queued.
- false - the requested report wasn’t able to be queued. ",
  "5-2": "A unique ID generated for this request.",
  "4-2": "The error message if the status was unsuccessful.",
  "6-2": "The report requested in the query string."
  },
  "cols": 3,
  "rows": 7
  }
  
  Example

```
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

The endpoint is available in <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/post_data_companies__companyId__assess_excel_download" target="_blank">Swagger</a> under **Assess**.

`POST /data/companies/{companyId}/assess/excel/download`

The downloadable Excel file is available in the response. Click it to save to your local machine.
