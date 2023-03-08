---
title: "Uploading receipts"
description: "Upload receipts for complete auditability"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Upload receipts

Adding a receipt to the transaction can be done after the sync, different accounting software supports different file formats and sizes.

<Tabs>

<Tabitem value="Supported Attachment Options" label="Attachment Options">

:::tip Supported Formats

Click through the tabs to see the supported attachment options for each integration.

:::

</Tabitem>

<Tabitem value="Xero" label="Xero">

```json
{
    "type": "File",
    "displayName": "File Attachment",
    "description": "Attach a file to an Xero entity.",
    "properties": {
        "file": {
            "type": "Number",
            "displayName": "File Size",
            "description": "Size of the file.",
            "required": false,
            "validation": {
                "warnings": [
                    {
                        "field": "fileSize",
                        "details": "File size may not exceed 4 MB."
                    }
                ]
            }
        },
        "fileExtension": {
            "type": "String",
            "displayName": "File extension",
            "description": "Must be an accepted Mime Type as derived from the file extension.",
            "options": [
                {
                    "value": ".7z",
                    "type": "String",
                    "displayName": "7Z",
                    "required": false
                },
                {
                    "value": ".bmp",
                    "type": "String",
                    "displayName": "BMP",
                    "required": false
                },
                {
                    "value": ".csv",
                    "type": "String",
                    "displayName": "CSV",
                    "required": false
                },
                {
                    "value": ".doc",
                    "type": "String",
                    "displayName": "DOC",
                    "required": false
                },
                {
                    "value": ".docx",
                    "type": "String",
                    "displayName": "DOCX",
                    "required": false
                },
                {
                    "value": ".eml",
                    "type": "String",
                    "displayName": "EML",
                    "required": false
                },
                {
                    "value": ".gif",
                    "type": "String",
                    "displayName": "GIF",
                    "required": false
                },
                {
                    "value": ".jpeg",
                    "type": "String",
                    "displayName": "JPEG",
                    "required": false
                },
                {
                    "value": ".jpg",
                    "type": "String",
                    "displayName": "JPG",
                    "required": false
                },
                {
                    "value": ".keynote",
                    "type": "String",
                    "displayName": "KEYNOTE",
                    "required": false
                },
                {
                    "value": ".msg",
                    "type": "String",
                    "displayName": "MSG",
                    "required": false
                },
                {
                    "value": ".numbers",
                    "type": "String",
                    "displayName": "NUMBERS",
                    "required": false
                },
                {
                    "value": ".odf",
                    "type": "String",
                    "displayName": "ODF",
                    "required": false
                },
                {
                    "value": ".ods",
                    "type": "String",
                    "displayName": "ODS",
                    "required": false
                },
                {
                    "value": ".odt",
                    "type": "String",
                    "displayName": "ODT",
                    "required": false
                },
                {
                    "value": ".pages",
                    "type": "String",
                    "displayName": "PAGES",
                    "required": false
                },
                {
                    "value": ".pdf",
                    "type": "String",
                    "displayName": "PDF",
                    "required": false
                },
                {
                    "value": ".png",
                    "type": "String",
                    "displayName": "PNG",
                    "required": false
                },
                {
                    "value": ".ppt",
                    "type": "String",
                    "displayName": "PPT",
                    "required": false
                },
                {
                    "value": ".pptx",
                    "type": "String",
                    "displayName": "PPTX",
                    "required": false
                },  
                {
                    "value": ".rar",
                    "type": "String",
                    "displayName": "RAR",
                    "required": false
                },              
                {
                    "value": ".rtf",
                    "type": "String",
                    "displayName": "RTF",
                    "required": false
                },
                {
                    "value": ".rtf",
                    "type": "String",
                    "displayName": "RTF",
                    "required": false
                },
                {
                    "value": ".tif",
                    "type": "String",
                    "displayName": "TIF",
                    "required": false
                },
                {
                    "value": ".tiff",
                    "type": "String",
                    "displayName": "TIFF",
                    "required": false
                },
                {
                    "value": ".txt",
                    "type": "String",
                    "displayName": "TXT",
                    "required": false
                },
                {
                    "value": ".xls",
                    "type": "String",
                    "displayName": "XLS",
                    "required": false
                },
                {
                    "value": ".xlsx",
                    "type": "String",
                    "displayName": "XLSX",
                    "required": false
                },
                {
                    "value": ".zip",
                    "type": "String",
                    "displayName": "ZIP",
                    "required": false
                }
            ],
            "required": false
        }
    },
    "required": true
}
```

</Tabitem>

<Tabitem value="QuickBooks Online" label="QuickBooks Online">

```json
{
  "type": "MultiPart",
  "displayName": "File",
  "description": "Attach a file to a Quickbooks Online entity.",
  "properties": {
    "file": {
      "type": "File",
      "displayName": "File",
      "description": "File attachment.",
      "properties": {
        "fileSize": {
          "type": "Number",
          "displayName": "File Size",
          "description": "Size of the file.",
          "required": false,
          "validation": {
            "warnings": [
              {
                "field": "file.fileSize",
                "details": "The file size must not exceed 100 MB."
              }
            ]
          }
        },
        "fileExtension": {
          "type": "String",
          "displayName": "File extension",
          "description": "Must be an accepted Mime Type as derived from the file extension.",
          "options": [
            {
              "value": ".ai",
              "type": "String",
              "displayName": "AI",
              "required": false
            },
            {
              "value": ".csv",
              "type": "String",
              "displayName": "CSV",
              "required": false
            },
            {
              "value": ".doc",
              "type": "String",
              "displayName": "DOC",
              "required": false
            },
            {
              "value": ".docx",
              "type": "String",
              "displayName": "DOCX",
              "required": false
            },
            {
              "value": ".eps",
              "type": "String",
              "displayName": "EPS",
              "required": false
            },
            {
              "value": ".gif",
              "type": "String",
              "displayName": "GIF",
              "required": false
            },
            {
              "value": ".jpeg",
              "type": "String",
              "displayName": "JPEG",
              "required": false
            },
            {
              "value": ".jpg",
              "type": "String",
              "displayName": "JPG",
              "required": false
            },
            {
              "value": ".ods",
              "type": "String",
              "displayName": "ODS",
              "required": false
            },
            {
              "value": ".pages",
              "type": "String",
              "displayName": "PAGES",
              "required": false
            },
            {
              "value": ".pdf",
              "type": "String",
              "displayName": "PDF",
              "required": false
            },
            {
              "value": ".png",
              "type": "String",
              "displayName": "PNG",
              "required": false
            },
            {
              "value": ".rtf",
              "type": "String",
              "displayName": "RTF",
              "required": false
            },
            {
              "value": ".tif",
              "type": "String",
              "displayName": "TIF",
              "required": false
            },
            {
              "value": ".txt",
              "type": "String",
              "displayName": "TXT",
              "required": false
            },
            {
              "value": ".xls",
              "type": "String",
              "displayName": "XLS",
              "required": false
            },
            {
              "value": ".xlsx",
              "type": "String",
              "displayName": "XLSX",
              "required": false
            },
            {
              "value": ".xml",
              "type": "String",
              "displayName": "XML",
              "required": false
            }
          ],
          "required": false
        }
      },
      "required": true
    },
    "metadata": {
      "type": "Object",
      "displayName": "Metadata",
      "description": "File metadata.",
      "properties": {
        "includeWhenSent": {
          "type": "Boolean",
          "displayName": "Include When Sent",
          "description": "This field indicates whether or not the attachment is sent with the transaction to the customer (this can also be achieved by invoking the Send email endpoint for the object).",
          "required": false
        },
        "contentType": {
          "type": "String",
          "displayName": "File Content Type",
          "description": "This field indicates the file content type.",
          "required": false,
          "validation": {
            "information": [
              {
                "field": "metadata.contentType",
                "details": "If not specified, content type of file part of parent multipart is used."
              }
            ]
          }
        }
      },
      "required": false
    }
  },
  "required": true,
  "validation": {
    "warnings": [
      {
        "field": "metadata",
        "details": "content type must be application/json"
      }
    ],
    "information": [
      {
        "field": "file",
        "details": "One file per request."
      }
    ]
  }
}
```

</Tabitem>

</Tabs>

You can upload supported file types through the [upload-attachment](sync-for-expenses-api#/operations/upload-attachment) endpoint. The request accepts the attachment as multipart form data.

```http
POST https://api.codat.io/companies/{companyId}/syncs/{syncId}/transactions/{transactionId}/atachments
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
        POST https://api.codat.io/companies/{companyId}/syncs/{syncId}/transactions/{transactionId}/atachments
    ```
2.  In the request setup, select **Body**.

3.  From the **Body** menu, select **form-data**.

  1.  Click in the first **KEY** row, and then from the **File** list, select **File**.

  2.  In the corresponding **VALUE** field, select **Select Files** and browse to the file you wish to attach.

  3.  Manually type the file name and extension in the **KEY** field.

4.  Now you can make the request by pressing **Send**
