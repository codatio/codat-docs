---
title: "Excel download overview"
sidebar_label: "Excel download"
description: "Download Lending reports to Excel"
image: "/img/banners/social/lending.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Our **Excel download reports** will show you what data is available from our API without you writing any code upfront. You can use this to inform testing within your credit models.

## Feature components

Our Excel download feature consists of the following component reports:

- **Data export** provides an output of data from our accounting data sources.

- **Enhanced financial statements** provide an output of the categorized profit and loss and balance sheet statements.

- **Enhanced cash flows** provides an output of the categorized bank transactions.

- **Enhanced invoices** provides an output of reconciled invoices.

- **Audit** helps you identify possible irregularities in a company's financial data.

### Metrics template

We've also created a [metrics template Excel file](/documents/assess-metrics.xlsx). You can paste data into this file from the Enhanced financial statements Excel report to calculate key financial metrics and ratios.

[![Metrics Template](/img/lending/metrics-template.png "Metrics Template")](/documents/assess-metrics.xlsx)

## Supported outputs

Reports in Excel format that are available to download can be generated via the [Portal](https://app.codat.io) or by calling the **Excel reports** [endpoints of our API](/lending-api#/).

### Excel download via API

The process to download an Excel report via the API is as follows:

1. [Request](/lending-api#/operations/generate-excel-report) an Excel report for download.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.excelReports.generate({
  companyId: companyId,
  reportType: ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.GenerateExcelReportRequest(
    company_id=company_id,
    report_type=shared.ExcelReportTypes.ENHANCED_INVOICES,
)

response = lending_client.excel_reports.generate(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.ExcelReports.GenerateAsync(new() {
    CompanyId = companyId,
    ReportType = ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.ExcelReports.Generate(ctx,
    operations.GenerateExcelReportRequest{
        CompanyID: companyID,
        ReportType: shared.ExcelReportTypesEnhancedInvoices,
})
```

</TabItem>

</Tabs>

2. [Check the progress status](/lending-api#/operations/get-excel-report-generation-status) of the latest report requested (optional).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.excelReports.getStatus({
  companyId: companyId,
  reportType: ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.GetExcelReportGenerationStatusRequest(
    company_id=company_id,
    report_type=shared.ExcelReportTypes.ENHANCED_INVOICES,
)

response = lending_client.excel_reports.get_status(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.ExcelReports.GetStatusAsync(new() {
    CompanyId = companyId,
    ReportType = ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.ExcelReports.GetStatus(ctx, operations.GetExcelReportGenerationStatusRequest{
    CompanyID: companyID,
    ReportType: shared.ExcelReportTypesEnhancedInvoices,
})
```

</TabItem>

</Tabs>

3. [Download](/lending-api#/operations/download-excel-report) the latest Excel report.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.excelReports.download({
  companyId: companyId,
  reportType: ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.DownloadExcelReportRequest(
    company_id=company_id,
    report_type=shared.ExcelReportTypes.ENHANCED_INVOICES,
)

response = lending_client.excel_reports.download(request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.ExcelReports.DownloadAsync(new() {
    CompanyId = companyId,
    ReportType = ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.ExcelReports.Download(ctx, operations.DownloadExcelReportRequest{
    CompanyID: companyID,
    ReportType: shared.ExcelReportTypesEnhancedInvoices,
})
```

</TabItem>

</Tabs>

Only one request will be processed at a time per SMB company and per report type. The generated report is kept in blob storage and gets replaced when a new one is generated.

### Excel download via Portal

You can also generate and download a report in an Excel format via the [Portal](https://app.codat.io):

1. Navigate to **Companies** and select a company you wish to download a report for.

2. In the side navigation, choose **Lending > Reports**. This page lists the names of reports available for generation and their descriptions.

   ![A screenshot of the reports page showing the Audit Report row with a sub-row showing a report that was generated](/img/old/a3d1d09-ReportsPage1.png)

3. Click the **Generate report** button next to the desired report to produce a new report. The **Last generated** field will be updated to the date and time you initiated the generation. It will keep this timestamp until the next time you generate the report.

4. When the report successfully generates, the report name (which is also the file name) with the file size and latest timestamp will be available for download. Click the **Download** button to save the Excel report to your local machine.

You can also generate and download the **data export** report by clicking the **Export data** button on any of the Lending screens of the Portal.

---

## Read next

- [Lending reference](/lending-api#/)
- [Troubleshooting and FAQs](/lending/troubleshooting)
