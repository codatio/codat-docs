---
title: "Webhook event types"
sidebar_label: "Event types"
hide_table_of_contents: true
description: "Learn about the event types that are available to you for consumption"
---

Codat supports the following event types you can [consume](/using-the-api/webhooks/create-consumer) using the Codat Portal or our API. Use them to respond to changes in your companies and their data.

Navigate to **Monitor > Webhooks > Events > Event Catalog** to view this list and each event's payload directly in the [Portal](https://app.codat.io/monitor/events). 

:::caution Still using our `/rules` endpoints?

The names of our new event types differ from our legacy rule types. We added the legacy name column to the table below so you can easily determine which event type you need to consume.

:::

| Event type                     | Legacy rule type                    | Event description                                                                                                                                                                        |
|--------------------------------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AccountCategoriesUpdated`     | `Account Categories Updated`        | Triggered anytime a company's accounts are categorized. This can be when Codat updates the `suggested` category fields or a user updates the `confirmed` category fields.                |
| `ClientRateLimitReached`       | `Rate Limit Reached`                | Triggered when the number of requests to Codat's API from the client exceeds the current quota.                                                                                          |
| `ClientRateLimitReset`         | `Rate Limit Reset`                  | Triggered when the rate limit quota has reset for the client, and more requests to the API are available.                                                                                |
| `DataConnectionStatusChanged`  | `DataConnectionStatusChanged`       | Triggered when a data connection status of a specific company changes.                                                                                                                   |
| `DataSyncCompleted`            | `Data sync completed`               | Generated for each `dataType` to indicate that data synchronization is successfully completed for that specific data type.                                                               |
| `DataSyncStatusChangedToError` | `Data Sync Status Changed To Error` | Triggered when the synchronization of a dataset fails.                                                                                                                                   |
| `DatasetDataChanged`           | `Dataset data changed`              | Generated for each `dataType` to indicate that dataset synchronization has completed and updated Codat's data cache through the creation of new records or a change to existing records. |
| `NewCompanySynchronized`       | `New company synchronised`          | Triggered when initial syncs are complete for all data types queued for a newly connected company, and at least one of those syncs is successful.                                        |
| `PushOperationStatusChanged`   | `Push Operation Status Changed()`   | Indicates that a create, update, or delete operation's status has changed. You can [learn more](/using-the-api/push) about push operations at Codat.                                     |
| `PushOperationTimedOut`        | `Push Operation Timed Out`          | Indicates that a create, update, or delete operation has timed out. You can learn more about [timeouts for push operations](/using-the-api/push#timeouts) at Codat.                      |
| `SyncCompleted`                  | `Sync Completed`                    | Triggered anytime an expense sync completes. <br/> Used for [Sync for Expenses](/expenses/overview) only.                                                                                |
| `SyncConnectionDeleted`          | `Sync Connection Deleted`           | Indicates a Sync for Commerce connection has been deleted. <br/> Used for [Sync for Commerce](/commerce/overview) only.                                                                  |
| `SyncFailed`                     | `Sync Failed`                       | Indicates a failure occurred during an expense sync. <br/> Used for [Sync for Expenses](/expenses/overview) only.                                                                        |
| `bankFeeds.sourceAccount.connected`| `N/A`                          | Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of connected.                                                                |
| `bankFeeds.sourceAccount.disconnected`| `N/A`                       | Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of disconnected.                                                                       |

---
## Read next

- See how you can [consume webhooks and manage consumers](/using-the-api/webhooks/create-consumer) using the Portal or our API
