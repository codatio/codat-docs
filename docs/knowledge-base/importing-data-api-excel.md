---
title: "Importing Data from the API into Excel"
---

Codat provides an Excel file which contains a summary of all of the key available datatypes, this can be downloaded from the portal:

1. Go to **Companies** and choose the company whose data you want to see.
2. Click the **Download Excel** button to generate and download an Excel spreadsheet.

In some cases this may not have enough detail or the info that you require, so this article is designed to provide a basic overview on how you can import data from the API into Excel.

Whilst Excel's interface may have changed since this was written, you can use this as the basis to explore Power Query more and enable features such as pagination.

### Import from Excel

The first step is to configure the data source, to do this:

1. Navigate to the Data tab
2. Select Get Data from the navigation bar
3. Choose From Other Sources from the picklist
4. Select From Web to launch the dataloader

![](codatio/codat-docs/static/img/knowledge-base/api-excel-1.png)

Once this has been configured the main dataloader pane will appear:

![](codatio/codat-docs/static/img/knowledge-base/api-excel-2.png)

to set this up:

1. Select the Advanced option
2. In the URL Parts form, enter the URL of the information you want to retrieve e.g.
    https://api-uat.codat.io/companies/{$companyId}/data/invoices?page=1&pageSize=5000
3. Under HTTP request header parameters (optional) you will need to enter the appropriate headers
    - The first one is `Accept` and the value is `application/json`
    - The second header is `Authorization` the value of this is your authorisation key, this can be found in the portal under profile

### Excel Power Query

Assuming that the information has been entered correctly, the datatypes have been enabled and company has synced, then the request will be successful and the Microsoft Power Query window will load, this page will allow you to shape and choose which data you wish to import into your workbook.

![](codatio/codat-docs/static/img/knowledge-base/api-excel-3.png)

First click on the List option, this will take you to a table with the column name List and each row will contain a Record.

![](codatio/codat-docs/static/img/knowledge-base/api-excel-4.png)

At this point select Transform (1) from the navigation bar and then To Table (2), you will get a pop up where you can keep the default settings as this is going to convert the array of results to an Excel table.

![](codatio/codat-docs/static/img/knowledge-base/api-excel-5.png)

Once this loads, select the column expander (3) and choose which fields you want to include in your final table.

If the endpoint has nested JSON such as invoice or journal lines, you can expand these additional columns in the same way by clicking on the expander and selecting Expand to New Rows

![](codatio/codat-docs/static/img/knowledge-base/api-excel-6.png)

Once you are happy with the preview of the data, click Close & Load, this will import your table into your Excel workbook.