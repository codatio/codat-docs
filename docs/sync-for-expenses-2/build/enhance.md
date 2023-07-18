---
title: "Enhance the solution"
description: "Additional features supported by Sync for Expenses"
sidebar_label: "Enhance"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Once you have synced an expense transaction to your accounting platform, you can make alterations to a single transaction's metadata. The change will be reflected across your expense management or corporate card platform and your accounting software or ERP.

This saves your SMB customers’ time and helps reduce errors because they won’t need to make changes to their expense management platform and their accounting package separately. 

Use our [Update expense transactions](/sync-for-expenses-api#/operations/update-expense-dataset) endpoint to edit the following expense transaction metadata:
- Net expense amount 
- Tax amount of the spend
- Tax rate reference associated with the spend
- Expense bank account reference
- Tracking category objects
- Description & notes

```http title="Update an expense transaction"
PUT  https://api.codat.io/companies/{companyId}/sync/expenses/expense-transactions
```

:::info Compatible integrations
At the moment you can update expenses only for Xero (Payment [transaction type](/sync-for-expenses/sync-process/expense-transactions#transaction-types) only).
:::

To update an attachment or receipt, you first need to delete it and then create a new dataset for the updated transaction attachment. After that, you can sync the expense to the accounting platform. Check out our guidance on [uploading receipts](/sync-for-expenses/sync-process/uploading-receipts).



### [Upload Receipts](uploading-receipts)

To post the attachment for each `transactionId` with a status of `Completed` and integrationType of `expense`, call the [attachment endpoint](/sync-for-expenses-api#/operations/upload-attachment)

```http title="Upload receipt"
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```

## Upload receipts

You can add a receipt to the transaction after the sync. Note that different accounting software supports different file formats and sizes.

| Integration       | File size | File extension                                                                                                                                               |
|-------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Xero**              | 4 MB      | 7Z, BMP, CSV, DOC, DOCX, EML, GIF, JPEG, JPG, KEYNOTE, MSG, NUMBERS, ODF,   ODS, ODT, PAGES, PDF, PNG, PPT, PPTX, RAR, RTF, TIF, TIFF, TXT, XLS, XLSX,   ZIP |
| **QuickBooks Online** | 100 MB    | AI, CSV, DOC, DOCX, EPS, GIF, JPEG, JPG, ODS, PAGES, PDF, PNG, RTF, TIF,   TXT, XLS, XLSX, XML                                                               |
| **NetSuite**          | 100 MB    | BMP, CSV, XLS, XLSX, JSON, PDF, PJPG, PJPEG, PNG, TXT, SVG, TIF, TIFF,   DOC, DOCX, ZIP                                                                      |

You can upload supported file types using the [Upload attachment](/sync-for-expenses-api#/operations/upload-attachment) endpoint. The request accepts the attachment as multipart form data.

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

### Using Postman to attach a receipt to an expense-transaction

If you use Postman, there are some extra steps you need to follow to attach a file to an invoice.

1.  Set up a POST request, in a similar way to the example [here](https://postman.codat.io/#f3b78b32-f1a7-4016-b222-fd26efdcc126), to the following endpoint:

    ```http
        POST https://api.codat.io/companies/{companyId}/syncs/{syncId}/transactions/{transactionId}/attachments
    ```
2.  In the request setup, select **Body**.

3.  From the **Body** menu, select **form-data**.

  1.  Click in the first **KEY** row, and then from the **File** list, select **File**.

  2.  In the corresponding **VALUE** field, select **Select Files** and browse to the file you wish to attach.

  3.  Manually type the file name and extension in the **KEY** field.

4.  Now you can make the request by pressing **Send**
