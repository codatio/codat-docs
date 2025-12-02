---
title: "Webhook event types"
sidebar_label: "Event types"
description: "Learn about the event types that are available to you for consumption"
---

Codat supports the following event types you can [consume](/using-the-api/webhooks/create-consumer) using the Codat Portal or our API. Use them to respond to changes in your companies and their data.

Navigate to **Monitor > Webhooks > Events > Event Catalog** to view this list and each event's payload directly in the [Portal](https://app.codat.io/monitor/events).

:::caution Still using our legacy rules?

See our migration guide to [switch to new event types](/using-the-api/webhooks/migrating-to-new-event-types).

:::

### Platform-wide event types

| Event type                                                                                   | Event description                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`company.created`](/platform-api#/webhooks/company.created/post)                            | Called when a company is created in Codat.                                                                                                                |
| [`company.deleted`](/platform-api#/webhooks/company.deleted/post)                            | Called when a company is deleted in Codat.                                                                                                                |
| [`connection.created`](/platform-api#/webhooks/connection.created/post)                      | Called when a connection is created by the SMB.                                                                                                           |
| [`connection.connected`](/platform-api#/webhooks/connection.connected/post)                  | Called when a connection is successfully linked by the SMB.                                                                                               |
| [`connection.disconnected`](/platform-api#/webhooks/connection.disconnected/post)            | Called when a connection is disconnected either due to being unlinked or de-authorized by the SMB or integration.                                         |
| [`connection.reconnected`](/platform-api#/webhooks/connection.reconnected/post)              | Called when a connection is reconnected after becoming disconnected.                                                                                      |
| [`connection.failed`](/platform-api#/webhooks/connection.failed/post)                        | Called when a connection failed linking to the SMB.                                                                                                       |
| [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post)                      | Called when a connection is deleted.                                                                                                                      |
| [`read.completed`](/platform-api#/webhooks/read.completed/post)                              | Indicates that the read of data types for a solution has completed.                                                                                       |
| [`read.completed.initial`](/platform-api#/webhooks/read.completed.initial/post)              | Indicates that the initial read of data types for a solution has completed.                                                                               |
| [`{dataType}.write.successful`](/platform-api#/webhooks/dataType-.write.successful/post)     | Indicates that the specified data type has been successfully created, updated, deleted, or had an attachment uploaded in the accounting software.         |
| [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) | Indicates that an attempt to create, update, delete a data type, or upload an attachment to a data type in the accounting software has been unsuccessful. |
| [`client.rateLimit.reached`](/platform-api#/webhooks/client.rateLimit.reached/post)          | Called when the client’s request count to Codat's API surpasses the allocated quota.                                                                      |
| [`client.rateLimit.reset`](/platform-api#/webhooks/client.rateLimit.reset/post)              | Called when the client's rate limit quota is reset, allowing additional requests to Codat's API.                                                          |

### Solution-specific event types

| Solution       | Event type                                                                                                                               | Event description                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Bank Feeds     | [`bankFeeds.sourceAccount.connected`](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.connected/post)                                  | Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of connected.       |
| Bank Feeds     | [`bankFeeds.sourceAccount.disconnected`](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.disconnected/post)                            | Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of disconnected.    |
| Expenses       | [`expenses.sync.successful`](/sync-for-expenses-api#/webhooks/expenses.sync.successful/post)                                             | Called when an expense sync successfully completes without any errors or warnings.                                              |
| Expenses       | [`expenses.sync.unsuccessful`](/sync-for-expenses-api#/webhooks/expenses.sync.unsuccessful/post)                                         | Called when an expense sync fails to complete successfully, resulting in at least one error or warning.                         |
| Lending        | [`report.categorizedBankStatement.generate.successful`](/lending-api#/webhooks/report.categorizedBankStatement.generate.successful/post) | Called when a [categorized bank statement](/lending/features/bank-statements-overview) is successfully generated for a company. |
| Lending        | [`AccountCategoriesUpdated`](/lending-api#/webhooks/Account-categories-updated/post)                                                     | Called when Codat AI had [categorized accounts](/lending/features/financial-statements-overview) for a company.                 |
| Lending        | [`reports.creditModel.generate.successful`](/lending-api#/webhooks/reports.creditModel.generate.successful/post)                                                     | Called when the [Credit Model report](/lending/premium-products/credit-model-overview) is successfully generated for a company.                 |
| Lending        | [`reports.creditModel.generate.unsuccessful`](/lending-api#/webhooks/reports.creditModel.generate.unsuccessful/post)                                                     | Called when the [Credit Model report](/lending/premium-products/credit-model-overview) fails to generate for a company.                 |
| Spend Insights | [`reports.spendAnalysis.generate.successful`](/spend-insights-api#/webhooks/reports.spendAnalysis.generate.successful/post)              | Called when a spend analysis report is successfully generated.                                                                  |
| Spend Insights | [`reports.spendAnalysis.generate.unsuccessful`](/spend-insights-api#/webhooks/reports.spendAnalysis.generate.unsuccessful/post)          | Called when a spend analysis report has failed to be generated for a company.                                                   |

---

## Read next

- See how you can [consume webhooks and manage consumers](/using-the-api/webhooks/create-consumer) using the Portal or our API
