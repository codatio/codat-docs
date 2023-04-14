---
title: "Delete data from QuickBooks Online"
description: "Learn how to delete data from QuickBooks Online using the delete endpoints"
---

This article explains how to delete existing records from QuickBooks Online.

## Deleting Journal Entries

The _Delete Journal Entries_ endpoint allows you to delete a specified Journal Entry from QuickBooks Online.

:::danger Use with caution

Because Journal Entries underpin every transaction in an accounting platform, deleting a Journal Entry can affect every transaction for a given company. **Before you proceed, make sure you understand the implications of deleting Journal Entries from an accounting perspective.**

The underlying QuickBooks API endpoint allows users to delete any object from their QBO instance. Make sure you specify the correct ID of the Journal Entry you want to delete. Deleting objects from QBO is not reversible.

:::

1. Make a DELETE request to the _Delete Journal Entries_ endpoint:

   ```http title="Delete a Journal Entry"
   DELETE /companies/{companyId}/connections/{connectionId}/push/journalEntries/{journalEntryId}
   ```

   For the `{journalEntryId}` parameter, supply the Codat ID of the Journal Entry you want to delete.

   The endpoint returns a 200 code if the record was deleted successfully.

2. [List all push operations](/codat-api#/operations/get-company-push-history) for the company. A `Success` status indicates that the Journal Entry object was deleted from QBO.

3. Check the Journal Entry no longer exists in the QBO UI.

### Effect on related objects

Be aware that deleting a Journal Entry from QBO might cause related objects to be modified. For example, if you delete the Journal Entry for a paid invoice, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account. 

## Deleting Bills

The _Delete Bills_ endpoint allows you to delete a specified Bill from QuickBooks Online.

:::caution 

Deleting objects from QBO is not reversible.

:::

1. Make a DELETE request to the _Delete Bills_ endpoint:

   ```http title="Delete a Bill"
   DELETE /companies/{companyId}/connections/{connectionId}/push/bills/{billId}
   ```

   For the `{billId}` parameter, supply the Codat ID of the Bill you want to delete.

   The endpoint returns a 200 code if the record was deleted successfully.

2. [List all push operations](/codat-api#/operations/get-company-push-history) for the company. A `Success` status indicates that the Bill object was deleted from QBO.

3. Check the Bill no longer exists in the QBO UI.

### Effect on related objects

Be aware that deleting a Bill from QBO might cause related objects to be modified. For example, if you delete a paid Bill, the bill is deleted but the bill payment against that bill is not. The bill payment is converted to a payment on account. 

## Deleting Invoices

The _Delete Invoices_ endpoint allows you to delete a specified Invoice from QuickBooks Online.

:::caution 

Deleting objects from QBO is not reversible.

:::

1. Make a DELETE request to the _Delete Invoices_ endpoint:

   ```http title="Delete an Invoice"
   DELETE /companies/{companyId}/connections/{connectionId}/push/invoices/{invoiceId}
   ```

   For the `{invoiceId}` parameter, supply the Codat ID of the Invoice you want to delete.

   The endpoint returns a 200 code if the record was deleted successfully.

2. [List all push operations](/codat-api#/operations/get-company-push-history) for the company. A `Success` status indicates that the Invoice object was deleted from QBO.

3. Check the Invoice no longer exists in the QBO UI.

### Effect on related objects

Be aware that deleting an Invoice from QBO might cause related objects to be modified. For example, if you delete a paid invoice, the invoice is deleted but the payment against that invoice is not. The payment is converted to a payment on account. 

:::info Support for object deletion

To check which data types and platforms support object deletion, call the [List integrations](/codat-api#/operations/list-integrations) endpoint. 

We're increasing support for object deletion across various accounting platforms and data types. You can check our [Accounting API Public Product Roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) for the latest status.

:::
