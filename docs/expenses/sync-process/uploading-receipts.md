---
title: "Upload receipts as attachments"
description: "Attach receipts to a transaction for a complete audit trail"
sidebar_label: "Upload attachments"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Upload attachments

When creating an expense or transfers transaction, your SMB customer may want to save a copy of the associated receipt in their accounting platform. 

Use the [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) endpoint to attach one or multiple files to the transaction, relating them via its `transactionId`. The endpoint accepts attachments as multipart form data and pushes them synchronously.

```http
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```

```
Content-Type: multipart/form-data; boundary=yourBoundaryString

--yourBoundaryString
Content-Type: application/json
Content-Disposition: form-data; name="yourFileMetaData"

{ "includeWhenSent": false }

--yourBoundaryString
Content-Type: application/octet-stream
Content-Disposition: form-data; name="yourFileData"; filename="TEST_SEND_FILE.txt"

--yourBoundaryString--
```

### File size and format support

| Integration       | File size | File extension                                                                                                                                               |
|-------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Xero**              | 4 MB      | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF,   ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX,   ZIP |
| **QuickBooks Online** | 100 MB    | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF,   TXT, XLS, XLSX, XML                                                               |
| **NetSuite**          | 100 MB    | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF,   DOC, DOCX, ZIP                                                                      |
| **Dynamics 365 Business Central** | 350 MB | [No explicit requirements outlined](https://learn.microsoft.com/en-gb/dynamics365/business-central/ui-how-add-link-to-record#to-attach-a-file-to-a-purchase-invoice) for text, image, and video files. |
| **QuickBooks Desktop** | NA      | Does not support attachment upload                                                                                                                            |

#### Attach a receipt using Postman

If you are using Postman to attach files, there are additional steps you need to complete. 

Perform a `POST` request to the [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) endpoint (review our example [here](https://postman.codat.io/#f3b78b32-f1a7-4016-b222-fd26efdcc126)):

```http
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```
1.  In the request setup, select **Body**, then **form-data**.

2.  Click in the first **KEY** row, then select **File** from the **File** list.

3.  In the corresponding **VALUE** field, click **Select Files** and choose the file you wish to attach.

4.  Manually type the file name and extension in the **KEY** field.

5.  Press **Send** to make the request.

## Update attachments

If your user wants to update any of the attached documents, they should delete the existing attachment directly in the accounting platform first. 

Then, they can attach the correct document using the [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) endpoint.

Alternatively, the user can upload the correct file directly to the accounting platform. 

---
## Read next

* Try Sync for Expenses in our interactive [API reference](/sync-for-expenses-api#/)
