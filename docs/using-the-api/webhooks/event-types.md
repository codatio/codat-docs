---
title: "Event types"
description: "Use webhooks to build responsive and resilient applications on Codat data."
---

## Webhook Events
We have a variety of event types that you can subscribe to. For example, one such event is `hello.world`. Here is a sample payload for `hello.world`:

```
{
  "type": "hello.world",
  "data": {
    "hello": "world"
  }
}
```



The following rules can be configured in the Codat Portal to trigger webhook events. These can be use to help your respond to changes in your companies and their data.

| Rule | Type | Trigger | Additional data | 
| :- | :- | :- | :- |
| [Company data connection status changed](/using-the-api/webhooks/core-rules-types#company-data-connection-status-changed)  |`DataConnectionStatusChanged`| A data connection's status changes. | `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus` |
| [New company synchronized](/using-the-api/webhooks/core-rules-types#new-company-synchronized)                |`New company synchronised`|  All datasets created during the initial sync of a company are completed.<br/><b>Legacy behavior:</b> The first `dataType` is successfully synced for a new company. [See deprecation](https://docs.codat.io/updates/231010-deprecation-webhooks-new-company-synchronized). | |
| [Data sync completed](/using-the-api/webhooks/core-rules-types#data-sync-completed)                     |`Data sync completed`| Data synchronization is successfully completed in full for a specific data type. <br/> A notification is generated for each `dataType` as the sync completes. | `dataType`, `datasetId` |
| [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)                    |`Dataset data changed`|  A dataset synchronization has completed and updated Codat's data cache through the creation of new records or a change to existing records. <br/> A notification is generated for each `dataType` as the sync completes. | `dataType`, `datasetId` |
| [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state) |`Data Sync Status Changed To Error`| The synchronization of a dataset fails. | `dataType`, `datasetStatus`, `datasetId` | 
| [Push operation status has changed](/using-the-api/webhooks/core-rules-types#push-operation-status-has-changed)       |`Push Operation Status Changed()`|  A push operation's status changes. | `dataType`, `status`, `pushOperationKey` |
| [Push operation has timed out](/using-the-api/webhooks/core-rules-types#push-operation-has-timed-out)            |`Push Operation Timed Out`| A push operation times out. |  `dataType`, `pushOperationGuid` |
| [Account categories updated](/using-the-api/webhooks/core-rules-types#account-categories-updated)              |`Account Categories Updated`| Anytime that Codat updates the `suggested` fields or a user updates the `confirmed` fields. | `modifiedDate` |
| [Sync Connection Deleted](/using-the-api/webhooks/core-rules-types#sync-connection-deleted)                 |`Sync Connection Deleted`| A Sync for Commerce connection is deleted. <br/> **Note:** Sync for Commerce only. |  |
| [Expenses sync completed](/using-the-api/webhooks/core-rules-types#expenses-sync-completed)                 |`Sync Completed`| An expense sync has completed. <br/> **Note:** Sync for Expenses only. |`syncId`, `syncType`|
| [Expenses sync failed](/using-the-api/webhooks/core-rules-types#expenses-sync-failed)                 |`Sync Failed`| A failure occurred during an expense sync. <br/> **Note:** Sync for Expenses only. |`syncId`, `syncType`, `FailureStage`|
| [Client rate limit exceeded](/using-the-api/webhooks/core-rules-types#client-rate-limit-reached)                 |`Rate Limit Reached`| The number of requests to the API from a client has exceeded the current quota. |`dailyQuota`, `expiresUtc`|
| [Client Rate Limit Reset](/using-the-api/webhooks/core-rules-types#client-rate-limit-reset)                 |`Rate Limit Reset`| The client rate limit quota has reset and more requests are available. |`quotaRemaining`, `resetReason`, `dailyQuota`|
---

## Rules and payloads

:::caution Removing non-reference data from webhook body

In line with industry standard security practices, we have removed personally identifiable information, such as `companyName`, from the body of our webhooks. This leaves only referential information, such as `companyId`, which can be looked up using our API.

:::

### Company data connection status changed

**Type**: `DataConnectionStatusChanged`  
**Trigger:** A data connection's status changes.  
**Additional data:** `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "DataConnectionStatusChanged",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Data connection for SandBox status changed from PendingAuth to Linked",
  "Data": {
    "dataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "newStatus": "Linked",
    "oldStatus": "PendingAuth",
    "platformKey": "gbol"
  }
}
```

### New company synchronized

**Type**: `New company synchronised`  
**Trigger:** Initial syncs are complete for all data types queued for a newly connected company, and at least one of those syncs is successful.   

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "New company synchronised",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Company 8a210b68-6988-11ed-a1eb-0242ac120002 synced for the first time",
  "Data": {
    "companyName": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "sourceType": "Accounting"
  }
}
```

### Data sync completed

**Type**: `Data sync completed`  
**Trigger:** Data synchronization is successfully completed in full for a specific data type.  
Notification is sent for each `dataType` separately when the data type's individual sync is successfully complete.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Data sync completed",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "Data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

### Dataset data changed

**Type**: `Dataset data changed`  
**Trigger:** A dataset synchronization has completed, which resulted in updates within Codat's data cache through the creation of new records or a change to existing records.  
Notification is sent for each `dataType` separately when the data type's individual sync is successfully complete.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Dataset data changed",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Data has changed for dataset type invoices, company 8a210b68-6988-11ed-a1eb-0242ac120002",
  "Data": {
    "dataType": "invoices",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

### Dataset status has changed to an error state

**Type**: `Data Sync Status Changed To Error`  
**Trigger:** The synchronization of a dataset fails.  
**Additional data:** `dataType`, `datasetStatus`, `datasetId`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Data Sync Status Changed To Error",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z.",
  "Data": {
    "dataType": "invoices",
    "datasetStatus": "ProcessingError",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

### Push operation status has changed

**Type**: `Push Operation Status Changed()`   
**Trigger:** A push operation's status changes.  
**Additional data:** `dataType`, `status`, `pushOperationKey`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Push Operation Status Changed()",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
  "Data": {
    "dataType": "invoices",
    "status": "Success",
    "pushOperationKey": "c2f8847d-3047-4619-a157-6d947d8e4a73"
  }
}
```

### Push operation has timed out

**Type**: `Push Operation Timed Out`  
**Trigger:** A push operation times out.  
**Additional data:** `dataType`, `pushOperationGuid`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Push Operation Timed Out",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "ERROR: pushing invoices never finished in time, timing out at 2020-09-07T08:42:13",
  "Data": {
    "dataType": "invoices",
    "pushOperationKey": "c2f8847d-3047-4619-a157-6d947d8e4a73",
    "pushOperationGuid": "c2f8847d-3047-4619-a157-6d947d8e4a73"
  }
}
```

### Account categories updated

**Type**: `Account Categories Updated`  
**Trigger:** Any time that Codat updates the `suggested` fields or a user updates the `confirmed` fields.  
**Additional data:** `modifiedDate`.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Account Categories Updated",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "Data": {
    "modifiedDate": "2019-08-24T14:15:22Z"
  }
}
```

### Sync Connection Deleted

**Type**:  `Sync Connection Deleted`   
**Trigger:** A Sync for Commerce connection is deleted.  
**Note:** This rule is specific to Sync for Commerce and cannot be used for other products.

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Sync Connection Deleted",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "Sync connection for company 8a210b68-6988-11ed-a1eb-0242ac120002 deleted"
}
```

### Expenses sync completed

**Type**: `Sync Completed`  
**Trigger:** An expense sync has completed.  
**Additional data:** `syncId`, `syncType`.  
**Note:** This rule is specific to Sync for Expenses and cannot be used for other products.

```json
{
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "AlertId": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "RuleId": "5c27631d-3b63-4b50-8228-ee502fd113eb",
  "RuleType": "Sync Completed",
  "Message": "Sync 321363b4-efa9-4fbc-b71c-0b58d62f3248 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense completed successfully.",
  "Data": {
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248",
    "syncType": "Expense"
  }
}
```

### Expenses sync failed

**Type**: `Sync Failed`  
**Trigger:** A failure occurred during an expense sync.  
**Additional data:** `syncId`, `syncType`, `FailureStage`.  
**Note:** This rule is specific to Sync for Expenses and cannot be used for other products.

```json
{
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "RuleType": "Sync Failed",
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "Message": "Sync 3bead2a1-1b3d-4d90-8077-cddc5ca68b01 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense has failed at step Pushing.",
  "Data": {
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01",
    "syncType": "Expense",
    "FailureStage": "Pushing"
  }
}
```

### Client rate limit reached

**Type**: `Rate Limit Reached`  
**Trigger:** The number of requests to the API from this client has exceeded the current quota. Rate limits apply to a client as a whole, so this rule cannot be filtered by company and does not include a `companyId`.  
**Additional data:** `dailyQuota`, `expiresUtc`

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Rate Limit Reached",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "The current daily rate limit quota of 1000 requests for bae71d36-ff47-420a-b4a6-f8c9ddf41140 has been reached.",
  "Data": {
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z"
  }
}
```

### Client rate limit reset

**Type**: `Rate Limit Reset`  
**Trigger:** The rate limit quota has reset and more requests are available. Rate limits apply to a client as a whole, so this rule cannot be filtered by company and does not include a `companyId`.  
**Additional data:** `quotaRemaining`, `resetReason`, `dailyQuota` 

```json
{
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "RuleType": "Rate Limit Reset",
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "Message": "The current daily rate limit quota for client 30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e has been reset to 1000 requests.",
  "Data": {
    "QuotaRemaining": 1000,
    "ResetReason": "The quota was reset because it is a new day.",
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z"
  }
}
```
