---
title: "2024-01-10: Changes to how deleted data in accounting platforms is handled"
date: "2023-10-04"
tags: ["Deprecation", "Accounting integrations", "Delete" ]
authors: dcoplowe
---

On **January 10, 2024**, we will change how we handle data deleted by users in accounting platforms.

<!--truncate-->

When data is deleted by a user in the SMB's accounting platform between two successive data pulls, Codat sets the `metaData.isDeleted` property to `true`. This ensures there is consistency in records returned between successive data pulls and clearly identifies records deleted by a user.

**Today, for some data types, Codat also updates the `status` property of the deleted record. **

For example:
- Codat retrieves a invoice from Xero with a status of `Submitted`
- The invoice is then manually deleted from within Xero
- Codat retrieves data from Xero a second time, and reconciles the fact that the invoice has been deleted by changing the status of the invoice within Codat to `void` 

## New behavior

From January 10, 2024, **we will no longer update the `status` property of deleted records** and change it to `void`. Instead, we will preserve the last known `status` before the record was deleted by the user.

See [Impacted data types](#impacted-data-types) for full details of relevant data types and associated statuses we will no longer update.

## Action required

Ensure that any workflows handling deleted records use the `metaData.isDeleted` property instead of the `status` property.

## Expected impact if no action is taken

Any workflows relying on the data type's `status` property to identify and handle deleted records will cease to work as expected.

--- 

### Impacted data types

| Data type | Status (representing deleted records) |
|-----------|---------------------------------------|
| Bills     | Void |
| Bill credit notes     | Void |
| Invoices     | Void |
| Credit notes     | Void |
| Customers     | Archived |
| Suppliers | Archived |
| Items     | Archived |
| Journals     | Archived |
| Purchase orders     | Void |
| Sales orders     | Void |
| Tax rates     | Archived |
| Tracking categories     | Archived |
| Tracking category trees     | Archived |

