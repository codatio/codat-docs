---
title: "2024-01-10: Changes to how deleted data in accounting platforms is handled"
date: "2020-01-01"
tags: ["Deprecation", "Accounting integrations", "Delete" ]
authors: dcoplowe
---

On **January 10, 2024**, we will be making changes to how data deleted by users in accounting platforms is handled by Codat.

<!--truncate-->

Currently, if data is deleted by a user in the SMB's accounting platform between two successive data pulls, Codat sets the `metaData.isDeleted` property to `True`. 
This ensures there is consistency in records returned between successive data pulls, whilst also clearly identifying records deleted by a user.

For some data types, Codat also updates the `status` property of the deleted record. For example, invoices deleted between successive data pulls have the `status` property set to `Void` once pulled. 

From January 10, 2024, we will no longer update the `status` property of deleted records therefore preserving the last known `status` before the record was deleted by the user.

See [Data types impacted](#data-types-impacted) for full details of relevant data types and associated statuses.

## Action required

Ensure that any workflows handling deleted records make use of the `metaData.isDeleted` property, rather than relying on the `status` property.

## Expected impact if no action is taken

Any workflows relying on the data type's `status` property to identify and handle deleted records will cease to work as expected.

--- 

### Data types impacted

| Data type | Status (representing deleted records) |
|-----------|---------------------------------------|
| Bills     | Void |
| Bill credit notes     | Void |
| Invoices     | Void |
| Credit notes     | Void |
| Customers     | Void |
| Item     | Void |
| Journals     | Void |
| Purchase order     | Void |
| Sales order     | Void |
| Tax rates     | Void |
| Tracking categories     | Void |
| Tracking category trees     | Void |

