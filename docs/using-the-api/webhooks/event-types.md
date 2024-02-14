---
title: "Webhook event types"
sidebar_label: "Event types"
hide_table_of_contents: true
description: "Learn about the event types that are available to you for subscription"
---

Codat supports the following event types you can [subscribe to](/using-the-api/webhooks/create-event) using the Codat Portal or our API. Use them to respond to changes in your companies and their data.

Navigate to **Monitor > Webhooks > Events > Event Catalog** to view this list directly in the [Portal](https://app.codat.io/monitor/events). 

| Event type                   | Event description                                                                                                                                                                        |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountCategoriesUpdated     | Triggered anytime a company's accounts are categorized. This can be when Codat updates the `suggested` category fields or a user updates the `confirmed` category fields.                |
| ClientRateLimitReached       | Triggered when the number of requests to Codat's API from the client exceeds the current quota.                                                                                          |
| ClientRateLimitReset         | Triggered when the rate limit quota has reset for the client, and more requests to the API are available.                                                                                |
| DataConnectionStatusChanged  | Triggered when a data connection status of a specific company changes.                                                                                                                   |
| DataSyncCompleted            | Generated for each `dataType` to indicate that data synchronization is successfully completed for that specific data type.                                                               |
| DataSyncStatusChangedToError | Triggered when the synchronization of a dataset fails.                                                                                                                                   |
| DatasetDataChanged           | Generated for each `dataType` to indicate that dataset synchronization has completed and updated Codat's data cache through the creation of new records or a change to existing records. |
| NewCompanySynchronized       | Triggered when initial syncs are complete for all data types queued for a newly connected company, and at least one of those syncs is successful.                                        |
| PushOperationStatusChanged   | Indicates that a create, update, or delete operation's status has changed. You can [learn more](/using-the-api/push) about push operations at Codat.                                     |
| PushOperationTimedOut        | Indicates that a create, update, or delete operation has timed out. You can [learn more](/using-the-api/push#timeouts) about timeouts for push operations at Codat.                      |
| SyncCompleted                | Triggered anytime an expense sync completes. <br/> Used for [Sync for Expenses](/expenses/overview) only.                                                                                |
| SyncConnectionDeleted        | Indicates a Sync for Commerce connection has been deleted. <br/> Used for [Sync for Commerce](/commerce/overview) only.                                                                  |
| SyncFailed                   | Indicates a failure occurred during an expense sync. <br/> Used for [Sync for Expenses](/expenses/overview) only.                                                                        |

---
## Read next

- See how you can [manage events](/using-the-api/webhooks/create-event) using the Portal or our API