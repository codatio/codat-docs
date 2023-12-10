---
title: Manage bills
description: "View and create bills using Sync for Payables"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

:::tip Invoices or bills?

We distinguish between invoices where the company *owes* money and those where the company *is owed* money. 

If the company receives an invoice and owes money as a result, we call this a **bill**.
:::

## Overview

In Codat, a [bill](../terms/bill) represents an *accounts payable* invoice issued to an SMB by their [supplier](../terms/supplier). With Sync for Payables, you can:

- Retrieve and update your customer's existing bills.
- Create new bills in your system and reflect them in your customer's accounting software.  

We have highlighted this alternative sequence of steps in our detailed process diagram below. 

<details>
<summary><b>Detailed process diagram</b></summary>

```mermaid

  sequenceDiagram
      participant smb as SMB customer
      participant app as Your application 
      participant codat as Codat
      participant acctg as Accounting platform
         
      alt Retrieve bills
        codat ->> acctg: Fetches existing bills
        acctg -->> codat: Returns existing bills
        codat ->> app: Returns existing bills
        app ->> smb: Displays existing bills
      else Create bill
        app ->> codat: Creates bill
        codat ->> acctg: Creates bill
      end
```

</details>

## Retrieve bills

Call our [List bills](/sync-for-payables-api#/operations/list-bills) endpoint to retrieve the full list of a company's existing bills. You can use [query parameters](/using-the-api/querying) to narrow down the list of results, for example:

- `supplierRef.supplierName=acme` returns bills associated with the specified supplier.
- `dueDate>2023-06-01&&dueDate<2023-06-30` returns bills due for payment between 1 and 30 June.
- `amountDue>0` returns outstanding bills with non-zero due amounts.

You can also retrieve [attachments](/sync-for-payables-api#/operations/download-bill-attachment) associated with a given bill, such as a PDF copy of the accounts payable invoice issued by the supplier.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const billsResponse = await payablesClient.bills.list({
    companyId: companyId,
    query: 'supplierRef.supplierName=acme'
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
bills_request = operations.ListBillsRequest(
    company_id=company_id,
    query='supplierRef.supplierName=acme'
)

bills_response = payables_client.bills.list(bills_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billsResponse = await payablesClient.Bills.ListAsync(new ListBillsRequest() {
    CompanyId = companyId,
    Query = "supplierRef.supplierName=acme"
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billsResponse, err := payablesClient.Bills.List(ctx, operations.ListBillsRequest{
    CompanyID: companyID,
    Query: "supplierRef.supplierName=acme"
})
```
</TabItem>

</Tabs>

## Update bill

In some cases, your SMB customer may want to update their existing bill - for example, to change a tax rate, change a nominal code for a line item, or associate it to a different supplier. 

Use our [Update bill](/sync-for-payables-api#/operations/update-bill) endpoint to perform this operation.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const billUpdateResponse = await payablesClient.bills.update({
    bill: {
      supplierRef: {
        id: supplierCreateResponse.supplier.id,
        supplierName: supplierCreateResponse.supplier.supplierName
      },
      issueDate: "2023-04-23T00:00:00",
      dueDate: "2023-06-23T00:00:00",
      lineItems: [
        {
          "description": "Half day training - Microsoft Paint",
          "unitAmount": 1000.00,
          "quantity": 1,
          "totalAmount": 1000.00,
        }
      ],
      status: BillStatus.Open,
      subTotal: 1000.00,
      taxAmount: 200.00,
      totalAmount: 1200.00,
      amountDue: 1200.00
    },
    companyId: companyId,
    connectionId: connectionId,
    billId: billId,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_update_request = operations.UpdateBillRequest(
    bill=shared.Bill(
      supplierRef: shared.SupplierRef(
        id=supplier_create_response.supplier.id,
        supplier_name=supplier_create_response.supplier.supplier_name
      ),
      issueDate="2023-04-23T00:00:00",
      dueDate="2023-06-23T00:00:00",
      lineItems=[
        shared.BillLineItem(
          description="Half day training - Microsoft Paint",
          unitAmount=1000.00,
          quantity=1,
          totalAmount=1000.00,
        )
      ],
      status=shared.BillStatus.OPEN,
      subTotal=1000.00,
      taxAmount=200.00,
      totalAmount=1200.00,
      amountDue=1200.00
    ),
    company_id=company_id,
    connection_id=connection_id,
    bill_id=bill_id,
)

bill_update_response = payables_client.bills.update(bill_update_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billUpdateResponse = await payablesClient.Bills.UpdateAsync(new UpdateBillRequest() {
    Bill = new Bill() {
      SupplierRef = new SupplierRef(){
        Id = supplierCreateResponse.Supplier.Id,
        SupplierName = supplierCreateResponse.Supplier.SupplierName
      },
      IssueDate = "2023-04-23T00:00:00",
      DueDate = "2023-06-23T00:00:00",
      LineItems = new List<BillLinItem>(){
        new(){
          Description = "Half day training - Microsoft Paint",
          UnitAmount = 1000.00,
          Quantity = 1,
          TotalAmount = 1000.00,
        }
      },
      Status: BillStatus.Open,
      SubTotal: 1000.00,
      TaxAmount: 200.00,
      TotalAmount: 1200.00,
      AmountDue: 1200.00
    },
    CompanyId = companyId,
    ConnectionId = connectionId,
    BillId = billId
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billUpdateResponse, err := payablesClient.Bills.Update(ctx, operations.UpdateBillRequest{
    Bill: &shared.Bill{
      SupplierRef: &shared.SupplierRef{
          ID: supplierCreateResponse.Supplier.ID,
          SupplierName: supplierCreateResponse.Supplier.SupplierName
      },
      IssueDate: "2023-04-23T00:00:00",
      DueDate: "2023-06-23T00:00:00",
      LineItems: []shared.BillLineItem{
          shared.BillLineItem{
            Description: "Half day training - Microsoft Paint",
            Quantity: types.MustNewDecimalFromString("1"),
            UnitAmount: types.MustNewDecimalFromString("1000.00"),
            TotalAmount: types.MustNewDecimalFromString("1000.00"),
          }
      },
      Status: shared.BillStatusOpen,
      SubTotal: types.MustNewDecimalFromString("1000.00"),
      TaxAmount: types.MustNewDecimalFromString("200.00"),
      TotalAmount: types.MustNewDecimalFromString("1200.00"),
      AmountDue: types.MustNewDecimalFromString("1200.00"),
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
    BillID: billID,
})
```
</TabItem>

</Tabs>

## Create bill

:::tip Corresponding supplier

Bills should always correspond to a supplier that issued them. Ensure the relevant supplier exists before creating a new bill.

:::

Use the [Create bill](/sync-for-payables-api#/operations/create-bill) endpoint to create a new bill in your SMB customer's accounting software that represents the outstanding payment for goods or services purchased from a supplier.

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const billCreateResponse = await payablesClient.bills.create({
    bill: {
      supplierRef: {
        id: supplierCreateResponse.supplier.id,
        supplierName: supplierCreateResponse.supplier.supplierName
      },
      issueDate: "2023-04-23T00:00:00",
      dueDate: "2023-10-23T00:00:00",
      lineItems: [
        {
          "description": "Half day training - Microsoft Paint",
          "unitAmount": 1000.00,
          "quantity": 1,
          "totalAmount": 1000.00,
        }
      ],
      status: BillStatus.Open,
      subTotal: 1000.00,
      taxAmount: 200.00,
      totalAmount: 1200.00,
      amountDue: 1200.00
    },
    companyId: companyId,
    connectionId: connectionId,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_create_request = operations.CreateBillRequest(
    bill=shared.Bill(
      supplierRef: shared.SupplierRef(
        id=supplier_create_response.supplier.id,
        supplier_name=supplier_create_response.supplier.supplier_name
      ),
      issueDate="2023-04-23T00:00:00",
      dueDate="2023-10-23T00:00:00",
      lineItems=[
        shared.BillLineItem(
          description="Half day training - Microsoft Paint",
          unitAmount=1000.00,
          quantity=1,
          totalAmount=1000.00,
        )
      ],
      status=shared.BillStatus.OPEN,
      subTotal=1000.00,
      taxAmount=200.00,
      totalAmount=1200.00,
      amountDue=1200.00
    ),
    company_id=company_id,
    connection_id=connection_id,
)

bill_create_response = payables_client.bills.create(bill_create_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billCreateResponse = await payablesClient.Bills.CreateAsync(new CreateBillRequest() {
    Bill = new Bill() {
      SupplierRef = new SupplierRef(){
        Id = supplierCreateResponse.Supplier.Id,
        SupplierName = supplierCreateResponse.Supplier.SupplierName
      },
      IssueDate = "2023-04-23T00:00:00",
      DueDate = "2023-10-23T00:00:00",
      LineItems = new List<BillLinItem>(){
        new(){
          Description = "Half day training - Microsoft Paint",
          UnitAmount = 1000.00,
          Quantity = 1,
          TotalAmount = 1000.00,
        }
      },
      Status: BillStatus.Open,
      SubTotal: 1000.00,
      TaxAmount: 200.00,
      TotalAmount: 1200.00,
      AmountDue: 1200.00
    },
    CompanyId = companyId,
    ConnectionId = connectionId,
});
```
</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billCreateResponse, err := payablesClient.Bills.Create(ctx, operations.CreateBillRequest{
    Bill: &shared.Bill{
      SupplierRef: &shared.SupplierRef{
          ID: supplierCreateResponse.Supplier.ID,
          SupplierName: supplierCreateResponse.Supplier.SupplierName
      },
      IssueDate: "2023-04-23T00:00:00",
      DueDate: "2023-06-23T00:00:00",
      LineItems: []shared.BillLineItem{
          shared.BillLineItem{
            Description: "Half day training - Microsoft Paint",
            Quantity: types.MustNewDecimalFromString("1"),
            UnitAmount: types.MustNewDecimalFromString("1000.00"),
            TotalAmount: types.MustNewDecimalFromString("1000.00"),
          }
      },
      Status: shared.BillStatusOpen,
      SubTotal: types.MustNewDecimalFromString("1000.00"),
      TaxAmount: types.MustNewDecimalFromString("200.00"),
      TotalAmount: types.MustNewDecimalFromString("1200.00"),
      AmountDue: types.MustNewDecimalFromString("1200.00"),
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```
</TabItem>

</Tabs>

## Upload attachment

When creating a new bill, your SMB customer may want to save a copy of the PDF invoice issued by their supplier against the bill in their accounting software. Use the [Upload bill attachment](/sync-for-payables-api#/operations/upload-bill-attachments) endpoint to support this action. 

Different accounting software supports different file formats and sizes. View the [attachment schema](/sync-for-payables-api#/schemas/Attachment) for integration-specific guidance or check the platform's own documentation. 

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const fileName = 'bill-receipt.pdf';
var fs = require('fs');
var fileBuffer = fs.readFileSync(fileName, null).buffer;
var fileArray = new Uint16Array( fileBuffer.slice(266,(sizeofArray*sizeOfArrayElement));

const attachmentUploadResponse = await payablesClient.bills.uploadAttachment({
    attachmentUpload: {
      file: {
        content: fileArray,
        fileName: fileName,
      },
    },
    billId: billId,
    companyId: companyId,
    connectionId: connectionId,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
file_name = 'bill-receipt.pdf'
with open(file_name, mode='rb') as file:
    contents = file.read()
    attachment_upload_request = operations.UploadBillAttachmentRequest(
        attachment_upload=shared.AttachmentUpload(
            file=shared.CodatFile(
                content=contents,
                file_name=file_name,
            ),
        ),
        bill_id=bill_id,
        company_id=company_id,
        connection_id=connection_id,
    )
    attachment_upload_response = payablesClient.bills.upload_attachment(attachment_upload_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var fileName = "bill-receipt.pdf";
var file = File.ReadAllBytes(fileName);

var attachmentUploadResponse = await payablesClient.Bills.UploadAttachmentAsync(new() {
    AttachmentUpload = new AttachmentUpload() {
        File = new CodatFile() {
            Content = file,
            FileName = fileName,
        },
    },
    BillId = billId,
    CompanyId = companyId,
    ConnectionId = connectionId,
};);
```
</TabItem>

<TabItem value="go" label="Go">

```go
fileName := "bill-receipt.pdf"
content, err := os.ReadFile(fileName)

ctx := context.Background()
attachmentUploadResponse, err := payablesClient.Bills.UploadAttachment(ctx, 
  operations.UploadBillAttachmentRequest{
    AttachmentUpload: &shared.AttachmentUpload{
      File: shared.CodatFile{
        Content: content,
        FileName: fileName,
      },
    },
    BillID: billID,
    CompanyID: companyID,
    ConnectionID: connectionID,
  }
)
```
</TabItem>

</Tabs>

---

## Read next

- [Manage your customers' payment methods](/payables/mapping) so they can choose how to make payments.
