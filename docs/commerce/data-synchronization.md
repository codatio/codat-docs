---
title: "Data synchronization"
description: "Understand the principles of daily data syncs and error handling in Sync for Commerce"
displayed_sidebar: commerce
---

## Data synchronization mechanism

Once your customer has set up their sales data synchronization in the Sync configuration UI, their sales data will sync automatically at the end of every day.

We always synchronize records for the last calendar day posted up to midnight. The sync process may take some time to run and finish after midnight, but that does not change the dataset that was selected to sync. This is because accounting standards generally expect you to operate on the basis of calendar days. 

## Merchant sync configuration

The daily data synchronization requires the merchant to have a valid sync configuration, which is set up using the Sync configuration UI. 

If the configuration is missing, then a sync error will occur. For example, if a merchant has not mapped an account for the sale of gift cards, and subsequently sells a gift card, data sync for this record will result in an error. 

In some cases, when a missing account is identified in the configuration, Codat will automatically create that account to allow the data synchronization to proceed.

## Error handling

If it is not possible to synchronize data for a given day, the user will see an error in the Sync configuration UI. Errors are rare, but can happen due to:

- An unexpected issue when retrieving data from a commerce platform or creating and updating data in the accounting package

- An issue with a merchant’s Sync configuration (for example, missing accounts for types of sales that occurred that day)

When an error occurs, the next daily data sync will include records of the latest and the previous calendar days. This way any missing data is automatically synced as soon as the root cause is resolved.

:::caution Disabled data sync

We disable a merchant’s data synchronization if it ends with errors for 31 consecutive days.

This ensures that we do not sync data that the merchant has already manually uploaded and reconciled when the issue is eventually resolved. Otherwise, this would result in data duplication within the merchant’s accounting package.

The merchant can re-enable their data synchronization within the Sync configuration UI and even change the sync start date to the date when they wish the data sync to resume.
:::  

---
## Read next

- [Advanced data synchronization features](/commerce/advanced-setup)