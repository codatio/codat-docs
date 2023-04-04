---
title: "Delete Journal entries from QuickBooks Online"
description: "Learn how to delete Journal entries from QuickBooks Online using the deletion endpoint"
---

The (TBC) [Delete Journal entries](/accounting-api#/) endpoint allows you to delete a specified Journal entry from QuickBooks Online (QBO).

:::danger Use with caution

The underlying QuickBooks API endpoint allows users to delete any object from their QBO instance. Make sure you specify the correct ID of the Journal entry you want to delete. 

:::

1. Make a `DELETE` request to the _Delete Journal entries_ endpoint:

   ```http title="Delete a Journal entry"
   DELETE /companies/{companyId}/connections/{connectionId}/delete/journalEntries/{journalEntryId}
   ```

   For the `{journalEntryId}` parameter, supply the Codat ID of the Journal entry you want to delete.

   The endpoint returns a 200 code if the record was deleted successfully.

2. [List all push operations](/codat-api#/operations/get-company-push-history) for the company. A `Success` status indicates that the Journal entry object was deleted from QBO.

3. Check the Journal entry no longer exists in the QBO UI.

## Effect on related objects

Be aware that deleting a Journal entry from QBO might cause related objects to be modified. For example, if you delete the Journal entry for a paid invoice: 

- The invoice is deleted.
- The payment object isn't deleted. The payment is converted to a payment on account. 

:::info Future support for deleting objects

To check the data types for which we plan to add support for deleting objects from the source accounting platform, see the [Accounting API Public Product Roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api).

:::
