---
title: "Attachments"
description: "File attachments supported by Codat API"
createdAt: "2019-10-02T15:30:20.126Z"
updatedAt: "2022-11-29T12:03:26.855Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Invoices/get_companies__companyId__connections__connectionId__data_invoices__invoiceId__attachments" target="_blank">Invoice attachments</a>, <a className="external" href="https://api.codat.io/swagger/index.html#/Bills/get_companies__companyId__connections__connectionId__data_bills__billId__attachments" target="_blank">Bill attachments</a>, <a className="external" href="https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts__directCostId__attachments" target="_blank">Direct cost attachments</a>, and <a className="external" href="https://api.codat.io/swagger/index.html#/DirectIncomes" target="_blank">Direct income attachments</a> endpoints in Swagger.

## Overview

The Codat API supports pulling and pushing of file attachments for invoices, bills, direct costs, and direct incomes.

:::info Retrieving attachments

If a company is authorized, you can query the Codat API to read, download, and upload attachments without requiring a fresh sync of data.

Unlike other data types, Codat doesn't support [sync settings](https://docs.codat.io/docs/synchronising-data) for attachments.
:::

:::info
See the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?integrationKey=gbol" target="_blank">Data coverage explorer</a> to check which attachments data types are supported by each integration.
:::

## Data model

[block:parameters]
{
"data": {
"0-0": "**id** ",
"3-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"5-1": "_boolean_",
"1-0": "**name** ",
"1-1": "_string_",
"2-0": "**contentType** ",
"3-0": "**dateCreated** ",
"4-0": "**fileSize**",
"5-0": "**includeWhenSent** ",
"0-2": "Identifier for the attachment, unique for the [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"0-1": "_string_",
"1-2": "Name of the attachment file.",
"2-1": "_string_",
"4-1": "_integer_",
"4-2": "File size in bytes. For example, if this reads **46153**, then the file size is 46kb.",
"2-2": "File type of the attachment.

This is represented by appending the file type to the<a href="https://tools.ietf.org/html/rfc6838" target="_blank"> IETF standard file naming requirements</a>.

For example, for a jpeg file the output is **image/jpeg**.

Supported file types vary per platform. See section below on the [available options for pushing attachments to an accounting platform](#section-options-for-pushing-attachments-to-the-accounting-platform).",
"3-2": "Date the attachment was uploaded and attached in the accounting platform.",
"5-2": "If `true` then the attachment is included with the associated invoice, bill or direct costs when it is printed, emailed, or sent to a customer, if the underlying accounting platform allows this.",
"h-0": "Field",
"h-1": "Type",
"h-2": "Description"
},
"cols": 3,
"rows": 6
}
[/block]

## Pushing attachments

### Using Postman to attach a file to an invoice

If you use Postman, there are some extra steps you need to follow to attach a file to an invoice.

1. [Set up a POST request](https://docs.codat.io/docs/using-postman-to-call-the-api), in a similar way to the example, to the following endpoint: [POST /companies/{companyId}/connections/{dataConnectionId}/push
   /invoices/{invoiceId}/attachment](https://api.codat.io/swagger/ui/index#!/Invoices/Invoices_GetAttachments).
2. In the request setup, select **Body**.
3. From the** Body** menu, select **form-data**.
4. Click in the first **KEY** row, and then from the **File** list, select **File**.

<img src="https://files.readme.io/d3b2493-AttachmentFileSelect.png" />

5. In the corresponding **VALUE** field, select **Select Files** and browse to the file you wish to attach.

<img src="https://files.readme.io/8bf6773-AttachmentFileSelect.png" />

6. Manually type the file name and extension in the **KEY** field.

<img src="https://files.readme.io/baa1306-zdfbvgsdfb.PNG" />

7. Now you are ready to make the request.

### HTTP example for attaching a file

```
POST /companies/{companyId}/connections/{dataConnectionId}/push/invoices/{invoiceId}/attachment

Content-Type: multipart/form-data; boundary=yourBoundaryString

--yourBoundaryString
Content-Type: application/json
Content-Disposition: form-data; name="yourFileMetaData"

{ "includeWhenSent": false }
--yourBoundaryString
Content-Type: application/octet-stream
Content-Disposition: form-data; name="yourFileData"; filename="TEST_SEND_FILE.txt"

﻿HELLO WORLD!
--yourBoundaryString--",
      "language": "http"
    }
  ]
}
[/block.

### Options for pushing attachments to the accounting platform

#### Xero
```

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
}",
"language": "json",
"name": "Xero Options - JSON"
}
]
}
[/block.

#### QuickBooks Online

```
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
}",
      "language": "json",
      "name": "QBO Options - JSON"
    }
  ]
}
[/block]
```
