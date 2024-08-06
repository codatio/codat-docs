---
title: "Webhook event types"
sidebar_label: "Event types"
hide_table_of_contents: true
description: "Learn about the event types that are available to you for consumption"
---

Codat supports the following event types you can [consume](/using-the-api/webhooks/create-consumer) using the Codat Portal or our API. Use them to respond to changes in your companies and their data.

Navigate to **Monitor > Webhooks > Events > Event Catalog** to view this list and each event's payload directly in the [Portal](https://app.codat.io/monitor/events). 

:::caution Still using our `/rules` endpoints?

The names of our new event types differ from our legacy rule types. You can find the list of legacy rule types in our [Rule types](/using-the-api/webhooks/legacy/core-rules-types) documentation.

:::

| Event type                     | Event description                                                                                                                                                                        |
|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| `AccountCategoriesUpdated`     | Triggered anytime a company's accounts are categorized. This can be when Codat updates the `suggested` category fields or a user updates the `confirmed` category fields. <br/><br/> See this event's schema in the [API reference](/lending-api#/webhooks/Account-categories-updated/post).               |
| `bankFeeds.sourceAccount.connected`| Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of connected. <br/> Used for [Bank Feeds API](/bank-feeds/overview) only. <br/><br/> See this event's schema in the [API reference](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.connected/post).                                                              |
| `bankFeeds.sourceAccount.disconnected`| Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of disconnected. <br/> Used for [Bank Feeds API](/bank-feeds/overview) only.  <br/><br/> See this event's schema in the [API reference](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.disconnected/post).                                                          |
| `ClientRateLimitReached`       | Triggered when the number of requests to Codat's API from the client exceeds the current quota. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Client-rate-limit-reached/post).                                                                                         |
| `ClientRateLimitReset`         | Triggered when the rate limit quota has reset for the client, and more requests to the API are available. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Client-rate-limit-reset/post).                                                                               |
| `DataConnectionStatusChanged`   | Triggered when a data connection status of a specific company changes. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Company-data-connection-status-changed/post).                                                                                                                  |
| `DataSyncCompleted`             | Generated for each `dataType` to indicate that data synchronization is successfully completed for that specific data type. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Data-sync-completed/post).                                                              |
| `DataSyncStatusChangedToError` | Triggered when the synchronization of a dataset fails. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Dataset-status-has-changed-to-an-error-state/post).                                                                                                                                  |
| `DatasetDataChanged`          | Generated for each `dataType` to indicate that dataset synchronization has completed and updated Codat's data cache through the creation of new records or a change to existing records. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Dataset-data-changed/post). |
| `NewCompanySynchronized`       | Triggered when initial syncs are complete for all data types queued for a newly connected company, and at least one of those syncs is successful. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/New-company-synchronized/post).                                       |
| `PushOperationStatusChanged`   | Indicates that a create, update, or delete operation's status has changed. You can [learn more](/using-the-api/push) about push operations at Codat.<br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Push-operation-status-has-changed/post).                                     |
| `PushOperationTimedOut`        | Indicates that a create, update, or delete operation has timed out. You can learn more about [timeouts for push operations](/using-the-api/push#timeouts) at Codat. <br/><br/> See this event's schema in the [API reference](/platform-api#/webhooks/Push-operation-has-timed-out/post).                     |
| `SyncCompleted`                 | Triggered anytime an expense sync completes. <br/> Used for [Sync for Expenses](/expenses/overview) only. <br/><br/> See this event's schema in the [API reference](/sync-for-expenses-api#/webhooks/Sync-Complete/post).                                                                                |
| `SyncConnectionDeleted`          | Indicates a Sync for Commerce connection has been deleted. <br/> Used for [Sync for Commerce](/commerce/overview) only. <br/><br/> See this event's schema in the [API reference](/sync-for-commerce-api#/webhooks/Sync-Connection-Deleted/post).                                                                 |
| `SyncFailed`                    | Indicates a failure occurred during an expense sync. <br/> Used for [Sync for Expenses](/expenses/overview) only. <br/><br/> See this event's schema in the [API reference](/sync-for-expenses-api#/webhooks/Sync-Failed/post).                                                                        |

---
## Read next

- See how you can [consume webhooks and manage consumers](/using-the-api/webhooks/create-consumer) using the Portal or our API
