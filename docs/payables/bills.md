---
title: Managing bills
description: "Create and fetch bills using Sync for Payables"
image: "/img/banners/social/payables.png"
---

In Codat's API a [Bill](/sync-for-payables-api#/schemas/Bill) represents an invoice from a [supplier](/sync-for-payables-api#/schemas/Supplier). This is an *accounts receivable* invoice.

Bills can be [retrieved](/sync-for-payables-api#/operations/list-bills) using Sync for Payables.

You can also create bills within your system and then [create them](https://docs.codat.io/sync-for-payables-api#/operations/create-bill) within your customers' accounting software.

:::tip Invoices or bills?

We distinguish between invoices where the company owes money vs. is owed money. If the company has received an invoice, and owes money to someone else (accounts payable) we call this a Bill.
:::

## Get a list of existing bills

You can [get a list of bills](/sync-for-payables-api#/operations/list-bills) for a company using Sync for Payables:

```http request title="List bills"
GET https://api.codat.io/companies/{companyId}/data/bills?page=1&pageSize=100
```

Query parameters can be used to filter and narrow the returned results:

- `supplierRef.supplierName=acme inc` returns only bills associated to the specified supplier
- `dueDate>2023-06-01&&dueDate<2023-06-30` returns only bills due for payment between June 1st and June 30th
- `amountDue>0` returns only outstanding bills with due amounts

You can also retrieve any associated [attachments](/sync-for-payables-api#/operations/download-bill-attachment) for a given bill such as a pdf copy of the invoice issued by the supplier.

## Create a new bill

:::tip The corresponding supplier

Bills should correspond to a supplier. You'll need to ensure the corresponding supplier exists before creating a new bill.

:::

You can also [create a new bill](/sync-for-payables-api#/operations/create-bill) in your company's accounting software to represent goods or services purchased from a supplier.

```http request title="Create bill"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bills
```

### Upload a copy of the invoice

In some cases where a bill is being created in your application, the company may also want to save a copy of the pdf invoice against the bill in their accounting software. This can be supported via the [bill attachments endpoint](/sync-for-payables-api#/operations/upload-bill-attachments)

```http request title="Upload bill attachment"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bills/{billId}/attachments
```

---

## Read next

- [Payment mapping](/usecases/bill-pay/mapping) - Enable SMBs to choose how to make payments
