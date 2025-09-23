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
| [`connection.failed`](/platform-api#/webhooks/connection.failed/post)                        | Called when a connection failed linking to the SMB.                                                                                                       |
| [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post)                      | Called when a connection is deleted.                                                                                                                      |
| [`read.completed`](/platform-api#/webhooks/read.completed/post)                              | Indicates that the read of data types for a solution has completed.                                                                                       |
| [`read.completed.initial`](/platform-api#/webhooks/read.completed.initial/post)              | Indicates that the initial read of data types for a solution has completed.                                                                               |
| [`{dataType}.write.successful`](/platform-api#/webhooks/dataType-.write.successful/post)     | Indicates that the specified data type has been successfully created, updated, deleted, or had an attachment uploaded in the accounting software.         |
| [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) | Indicates that an attempt to create, update, delete a data type, or upload an attachment to a data type in the accounting software has been unsuccessful. |

#### Specific data type write events

The following events provide detailed notifications for specific data types. These are implementations of the generic `{dataType}.write.successful` and `{dataType}.write.unsuccessful` event types:

| Event type | Event description |
| ---------- | ----------------- |
| [`bankAccounts.write.successful`](/platform-api#/webhooks/bankAccounts.write.successful/post) | Indicates that a bank account has been successfully created, updated, or deleted. |
| [`bankAccounts.write.unsuccessful`](/platform-api#/webhooks/bankAccounts.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a bank account was unsuccessful. |
| [`bankTransactions.write.successful`](/platform-api#/webhooks/bankTransactions.write.successful/post) | Indicates that a bank transaction has been successfully created, updated, or deleted. |
| [`bankTransactions.write.unsuccessful`](/platform-api#/webhooks/bankTransactions.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a bank transaction was unsuccessful. |
| [`billCreditNotes.write.successful`](/platform-api#/webhooks/billCreditNotes.write.successful/post) | Indicates that a bill credit note has been successfully created, updated, or deleted. |
| [`billCreditNotes.write.unsuccessful`](/platform-api#/webhooks/billCreditNotes.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a bill credit note was unsuccessful. |
| [`billPayments.write.successful`](/platform-api#/webhooks/billPayments.write.successful/post) | Indicates that a bill payment has been successfully created, updated, or deleted. |
| [`billPayments.write.unsuccessful`](/platform-api#/webhooks/billPayments.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a bill payment was unsuccessful. |
| [`bills.write.successful`](/platform-api#/webhooks/bills.write.successful/post) | Indicates that a bill has been successfully created, updated, or deleted. |
| [`bills.write.unsuccessful`](/platform-api#/webhooks/bills.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a bill was unsuccessful. |
| [`chartOfAccounts.write.successful`](/platform-api#/webhooks/chartOfAccounts.write.successful/post) | Indicates that a chart of accounts entry has been successfully created, updated, or deleted. |
| [`chartOfAccounts.write.unsuccessful`](/platform-api#/webhooks/chartOfAccounts.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a chart of accounts entry was unsuccessful. |
| [`creditNotes.write.successful`](/platform-api#/webhooks/creditNotes.write.successful/post) | Indicates that a credit note has been successfully created, updated, or deleted. |
| [`creditNotes.write.unsuccessful`](/platform-api#/webhooks/creditNotes.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a credit note was unsuccessful. |
| [`customers.write.successful`](/platform-api#/webhooks/customers.write.successful/post) | Indicates that a customer has been successfully created, updated, or deleted. |
| [`customers.write.unsuccessful`](/platform-api#/webhooks/customers.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a customer was unsuccessful. |
| [`directCosts.write.successful`](/platform-api#/webhooks/directCosts.write.successful/post) | Indicates that a direct cost has been successfully created, updated, or deleted. |
| [`directCosts.write.unsuccessful`](/platform-api#/webhooks/directCosts.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a direct cost was unsuccessful. |
| [`directIncomes.write.successful`](/platform-api#/webhooks/directIncomes.write.successful/post) | Indicates that a direct income has been successfully created, updated, or deleted. |
| [`directIncomes.write.unsuccessful`](/platform-api#/webhooks/directIncomes.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a direct income was unsuccessful. |
| [`invoices.write.successful`](/platform-api#/webhooks/invoices.write.successful/post) | Indicates that an invoice has been successfully created, updated, or deleted. |
| [`invoices.write.unsuccessful`](/platform-api#/webhooks/invoices.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete an invoice was unsuccessful. |
| [`items.write.successful`](/platform-api#/webhooks/items.write.successful/post) | Indicates that an item has been successfully created, updated, or deleted. |
| [`items.write.unsuccessful`](/platform-api#/webhooks/items.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete an item was unsuccessful. |
| [`journalEntries.write.successful`](/platform-api#/webhooks/journalEntries.write.successful/post) | Indicates that a journal entry has been successfully created, updated, or deleted. |
| [`journalEntries.write.unsuccessful`](/platform-api#/webhooks/journalEntries.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a journal entry was unsuccessful. |
| [`journals.write.successful`](/platform-api#/webhooks/journals.write.successful/post) | Indicates that a journal has been successfully created, updated, or deleted. |
| [`journals.write.unsuccessful`](/platform-api#/webhooks/journals.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a journal was unsuccessful. |
| [`payments.write.successful`](/platform-api#/webhooks/payments.write.successful/post) | Indicates that a payment has been successfully created, updated, or deleted. |
| [`payments.write.unsuccessful`](/platform-api#/webhooks/payments.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a payment was unsuccessful. |
| [`purchaseOrders.write.successful`](/platform-api#/webhooks/purchaseOrders.write.successful/post) | Indicates that a purchase order has been successfully created, updated, or deleted. |
| [`purchaseOrders.write.unsuccessful`](/platform-api#/webhooks/purchaseOrders.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a purchase order was unsuccessful. |
| [`suppliers.write.successful`](/platform-api#/webhooks/suppliers.write.successful/post) | Indicates that a supplier has been successfully created, updated, or deleted. |
| [`suppliers.write.unsuccessful`](/platform-api#/webhooks/suppliers.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a supplier was unsuccessful. |
| [`transfers.write.successful`](/platform-api#/webhooks/transfers.write.successful/post) | Indicates that a transfer has been successfully created, updated, or deleted. |
| [`transfers.write.unsuccessful`](/platform-api#/webhooks/transfers.write.unsuccessful/post) | Indicates that an attempt to create, update, or delete a transfer was unsuccessful. |
| [`client.rateLimit.reached`](/platform-api#/webhooks/client.rateLimit.reached/post)          | Called when the client’s request count to Codat's API surpasses the allocated quota.                                                                      |
| [`client.rateLimit.reset`](/platform-api#/webhooks/client.rateLimit.reset/post)              | Called when the client's rate limit quota is reset, allowing additional requests to Codat's API.                                                          |

### Solution-specific event types

| Solution       | Event type                                                                                                                               | Event description                                                                                                               |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Bank Feeds     | [`bankFeeds.sourceAccount.connected`](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.connected/post)                                  | Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of connected.       |
| Bank Feeds     | [`bankFeeds.sourceAccount.disconnected`](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.disconnected/post)                            | Indicates a [bank feed source account](/bank-feeds/overview#what-is-bank-feeds-api) has changed to a status of disconnected.    |
| Expenses       | [`expenses.sync.successful`](/sync-for-expenses-api#/webhooks/expenses.sync.successful/post)                                             | Called when an expense sync successfully completes without any errors or warnings.                                              |
| Expenses       | [`expenses.sync.unsuccessful`](/sync-for-expenses-api#/webhooks/expenses.sync.unsuccessful/post)                                         | Called when an expense sync fails to complete successfully, resulting in at least one error or warning.                         |
| Lending        | [`reports.categorizedBankStatement.generate.successful`](/lending-api#/webhooks/reports.categorizedBankStatement.generate.successful/post) | Called when a [categorized bank statement](/lending/features/bank-statements-overview) is successfully generated for a company. |
| Lending        | [`reports.categorizedBankStatement.generate.unsuccessful`](/lending-api#/webhooks/reports.categorizedBankStatement.generate.unsuccessful/post) | Called when a categorized bank statement fails to be generated for a company. |
| Lending        | [`reports.creditModel.generate.successful`](/lending-api#/webhooks/reports.creditModel.generate.successful/post) | Called when a credit model report is successfully generated for a company. |
| Lending        | [`reports.creditModel.generate.unsuccessful`](/lending-api#/webhooks/reports.creditModel.generate.unsuccessful/post) | Called when a credit model report fails to be generated for a company. |
| Lending        | [`Account categories updated`](/lending-api#/webhooks/Account%20categories%20updated/post)                                                     | Called when Codat AI has [categorized accounts](/lending/features/financial-statements-overview) for a company.                 |
| Spend Insights | [`reports.spendAnalysis.generate.successful`](/spend-insights-api#/webhooks/reports.spendAnalysis.generate.successful/post)              | Called when a spend analysis report is successfully generated.                                                                  |
| Spend Insights | [`reports.spendAnalysis.generate.unsuccessful`](/spend-insights-api#/webhooks/reports.spendAnalysis.generate.unsuccessful/post)          | Called when a spend analysis report has failed to be generated for a company.                                                   |

---

## Read next

- See how you can [consume webhooks and manage consumers](/using-the-api/webhooks/create-consumer) using the Portal or our API
