---
title: "Rule types"
description: "Use webhooks to build responsive and resilient applications on Codat data."
---

The following rules can be configured in the Codat Portal to trigger webhook events. These can be use to help your respond to changes in your companies and their data.

| Rule | Type | Trigger | Additional data | 
| :- | :- | :- | :- |
| [Company data connection status changed](/using-the-api/webhooks/core-rules-types#company-data-connection-status-changed)  |`DataConnectionStatusChanged`| A data connection's status changes. | `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus` |
| [New company synchronized](/using-the-api/webhooks/core-rules-types#new-company-synchronized)                |`New company synchronised`|  All datasets created during the initial sync of a company are completed.<br/><b>Legacy behavior:</b> The first `dataType` is successfully synced for a new company. [See deprecation](https://docs.codat.io/updates/231010-deprecation-webhooks-new-company-synchronized). | |
| [Data sync completed](/using-the-api/webhooks/core-rules-types#data-sync-completed)                     |`Data sync completed`| Data synchronization is successfully completed in full for a specific data type. <br/> A notification is generated for each `dataType` as the sync completes. | `dataType`, `datasetId` |
| [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)                    |`Dataset data changed`|  A dataset synchronization has completed and updated Codat's data cache through the creation of new records or a change to existing records. <br/> A notification is generated for each `dataType` as the sync completes. | `dataType`, `datasetId` |
| [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state) |`Data Sync Status Changed To Error`| The synchronization of a dataset fails. | `dataType`, `datasetStatus`, `datasetId` | 
| [Push operation status has changed](/using-the-api/webhooks/core-rules-types#push-operation-status-has-changed)       |`Push Operation Status Changed`|  A push operation's status changes. | `dataType`, `status`, `pushOperationKey` |
| [Push operation has timed out](/using-the-api/webhooks/core-rules-types#push-operation-has-timed-out)            |`Push Operation Timed Out`| A push operation times out. |  `dataType`, `pushOperationGuid` |
| [Account categories updated](/using-the-api/webhooks/core-rules-types#account-categories-updated)              |`Account Categories Updated`| Anytime that Codat updates the `suggested` fields or a user updates the `confirmed` fields. | `modifiedDate` |
| [Sync Connection Deleted](/using-the-api/webhooks/core-rules-types#sync-connection-deleted)                 |`Sync Connection Deleted`| A Sync for Commerce connection is deleted. <br/> **Note:** Sync for Commerce only. |  |
| [Expense sync completed](/using-the-api/webhooks/core-rules-types#expense-sync-completed)                 |`Sync Completed`| An expense sync has completed without any failures. <br/> **Note:** Sync for Expenses only. |`syncId`, `syncType`, `SyncDateRangeStartUtc`, `SyncDateRangeFinishUtc`|
| [Expense sync failed](/using-the-api/webhooks/core-rules-types#expense-sync-failed)                 |`Sync Failed`| A failure occurred during an expense sync. <br/> **Note:** Sync for Expenses only. |`syncId`, `syncType`, `SyncDateRangeStartUtc`, `SyncDateRangeFinishUtc`,`FailureStage`|
| [Client rate limit exceeded](/using-the-api/webhooks/core-rules-types#client-rate-limit-reached)                 |`Rate Limit Reached`| The number of requests to the API from a client has exceeded the current quota. |`dailyQuota`, `expiresUtc`|
| [Client Rate Limit Reset](/using-the-api/webhooks/core-rules-types#client-rate-limit-reset)                 |`Rate Limit Reset`| The client rate limit quota has reset and more requests are available. |`quotaRemaining`, `resetReason`, `dailyQuota`|
---

## Rules and payloads

:::caution Removing non-reference data from webhook body

In line with industry standard security practices, we have removed personally identifiable information, such as `companyName`, from the body of our webhooks. This leaves only referential information, such as `companyId`, which can be looked up using our API.

:::

### Company data connection status changed

**Type**: DataConnectionStatusChanged  
**Trigger:** A data connection's status changes.  
**Additional data:** `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus`.

```json
{
 "CompanyId":"0ec09c80-e82b-4409-a150-5a5211c215f4",
 "RuleId":"ca3b6004-f1bb-43e7-860f-1386e108b684",
 "Type":"DataConnectionStatusChanged",
 "AlertId":"40eda3e2-f098-47bd-b7d5-b6b08ae3819e",
 "Message":"Data connection for SandBox status changed from PendingAuth to Linked",
 "Data":{
    "dataConnectionId":"4ecd1cb4-9048-4459-b692-7de1fffb480a",
    "newStatus":"Linked",
    "oldStatus":"PendingAuth",
    "platformKey":"mqjo"
 }
}
```

### New company synchronized

**Type**: New company synchronised  
**Trigger:** Initial syncs are complete for all data types queued for a newly connected company, and at least one of those syncs is successful.   
**Legacy behavior:** After the first `dataType` is successfully synced for a new company. [See deprecation](https://docs.codat.io/updates/231010-deprecation-webhooks-new-company-synchronized) for more information about this change.

```json
{
  "CompanyId": "0ec09c80-e82b-4409-a150-5a5211c215f4",
  "RuleId": "dba7daa5-be88-40ae-a596-d23549498b17",
  "Type": "New company synchronised",
  "AlertId": "e848c2a1-ad15-41eb-915b-7a67c269bd2a",
  "Message": "Company 0ec09c80-e82b-4409-a150-5a5211c215f4 synced for the first time",
  "Data": {}
}
```

### Data sync completed

**Type**: Data sync completed  
**Trigger:** Data synchronization is successfully completed in full for a specific data type.  
Notification is sent for each `dataType` separately when the data type's individual sync is successfully complete.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "CompanyId": "7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "ClientId": "a9244b9d-7055-48f4-80a4-b758d39da98c",
  "ClientName": "Client",
  "DataConnectionId": "3d56b944-ff98-4d6b-94cd-fa879db3b74f",
  "RuleId": "92a65d4c-5d54-4f92-8f43-30cbe30bb86b",
  "Type": "Data sync completed",
  "AlertId": "5e364626-6b3d-41ed-9697-0b3b59603d8f",
  "Message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "Data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

### Dataset data changed

**Type**: Dataset data changed  
**Trigger:** A dataset synchronization has completed, which resulted in updates within Codat's data cache through the creation of new records or a change to existing records.  
Notification is sent for each `dataType` separately when the data type's individual sync is successfully complete.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "CompanyId": "ac712d04-c107-424d-a801-be76d677e508",
  "RuleId": "70328e0e-9d8d-48fd-9306-7a39973009c3",
  "Type": "Dataset data changed",
  "AlertId": "bbdbc217-9776-4cf2-9b67-0afad20bd10e",
  "Message": "Data has changed for dataset type invoices, company ac712d04-c107-424d-a801-be76d677e508",
  "Data": {
    "dataType": "invoices",
    "datasetId": "e05b0e4b-98f6-48e8-a231-f0720e644f26"
  }
}
```

### Dataset status has changed to an error state

**Type**: Data Sync Status Changed To Error  
**Trigger:** The synchronization of a dataset fails.  
**Additional data:** `dataType`, `datasetStatus`, `datasetId`.

```json
{
  "CompanyId":"0ec09c80-e82b-4409-a150-5a5211c215f4",
  "RuleId":"ca3b6004-f1bb-43e7-860f-1386e108b684",
  "Type":"Data Sync Status Changed To Error",
  "AlertId":"40eda3e2-f098-47bd-b7d5-b6b08ae3819e",
  "Message":"ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z ",
  "Data":{
    "dataType":"payments",
    "datasetStatus":"ProcessingError",
    "datasetId":"8ee17d26-ac12-4e2d-92d0-a90147958ee3"
  }
}
```

### Push operation status has changed

**Type**: Push Operation Status Changed   
**Trigger:** A push operation's status changes.  
**Additional data:** `dataType`, `status`, `pushOperationKey`.

```json
{
 "CompanyId":"f6bc5f14-87fb-438f-8d2d-db6a0964aef1",
 "RuleId":"c40791fe-b6fd-45c3-9bf7-0a16abf1b8fd",
 "Type":"Push Operation Status Changed",
 "AlertId":"a62bfb38-d73c-4aab-9bb6-d8014bba5f29",
 "Message":"invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
 "Data":{
    "dataType":"invoices",
    "status":"Success",
    "pushOperationKey":"476afa1c-9f27-4def-bf0d-0914ad89ed27"
 }
}
```

### Push operation has timed out

**Type**: Push Operation Timed Out  
**Trigger:** A push operation times out.  
**Additional data:** `dataType`, `pushOperationGuid`.

```json
{
  "CompanyId":"f6bc5f14-87fb-438f-8d2d-db6a0964aef1",
  "RuleId":"c40791fe-b6fd-45c3-9bf7-0a16abf1b8fd",
  "Type":"Push Operation Timed Out",
  "AlertId":"a42bff38-d73c-4aab-9bb6-d8014bba5f29",
  "Message":"ERROR: pushing invoices never finished in time, timing out at 2020-09-07T08:42:13",
  "Data":{
    "dataType":"invoices",
    "pushOperationGuid":"476afa1c-9f27-4def-bf0d-0914ad89ed27"
  }
}
```

### Account categories updated

**Type**: Account Categories Updated  
**Trigger:** Any time that Codat updates the `suggested` fields or a user updates the `confirmed` fields.  
**Additional data:** `modifiedDate`.

```json
{
  "CompanyId": "f1c35bdc-1546-41b9-baf4-3f31135af968",
  "ClientId": "4b6091c4-32b8-4e08-ac31-f7dc7477674b",
  "ClientName": "Peach",
  "DataConnectionId": "1a0efd26-1f06-4c48-803f-f8670535ff02",
  "RuleId": "e6fd0b54-ae05-4c43-b7ea-0d340cee15a7",
  "Type": "Account Categories Updated",
  "AlertId": "c893d3c3-6e69-4b70-af18-7dca1557be6d",
  "Message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "Data": {
    "modifiedDate": "2022-09-08T16:00:13.7714779+00:00"
  }
}
```

### Sync Connection Deleted

**Type**:  Sync Connection Deleted   
**Trigger:** A Sync for Commerce connection is deleted.  
**Note:** This rule is specific to Sync for Commerce and cannot be used for other products.

```json
{
  "CompanyId": "e2876f0a-5102-4a7d-9743-f10133dba88f",
  "ClientId": "4f1fb082-0c62-4c74-be22-bc782b801e59",
  "ClientName": "The Wind in the Willows",
  "DataConnectionId": "00000000-0000-0000-0000-000000000000",
  "RuleId": "0b29ecef-1ec1-459a-b61a-9de996e0d20a",
  "Type": "Sync Connection Deleted",
  "AlertId": "fe42cd24-a05a-4e3c-80cb-06749a73ab1e",
  "Message": "Sync connection for company e2876f0a-5102-4a7d-9743-f10133dba88f deleted",
  "Data": {}
}
```

### Expense sync completed

**Type**: Sync Completed  
**Trigger:** An expense sync has completed without any failures.  
**Additional data:** `syncId`, `syncType`, `SyncDateRangeStartUtc`, `SyncDateRangeFinishUtc`.  
**Note:** This rule is specific to Sync for Expenses and cannot be used for other products.

```json
{
  "AlertId": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Data": {
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248",
    "syncType": "Expense",
    "SyncDateRangeStartUtc": "2023-05-03T09:56:17.4357111Z",
    "SyncDateRangeFinishUtc": "2023-05-03T09:56:18.4357111Z"
  },
  "Message": "Sync 321363b4-efa9-4fbc-b71c-0b58d62f3248 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense completed successfully.",
  "RuleId": "5c27631d-3b63-4b50-8228-ee502fd113eb",
  "RuleType": "Sync Completed"
}
```

### Expense sync failed

**Type**: Sync Failed  
**Trigger:** A failure occurred during an expense sync.  
**Additional data:** `syncId`, `syncType`, `SyncDateRangeStartUtc`, `SyncDateRangeFinishUtc`, `FailureStage`.  
**Note:** This rule is specific to Sync for Expenses and cannot be used for other products.

```json
{
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Data": {
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01",
    "syncType": "Expense",
    "SyncDateRangeStartUtc": "2023-05-03T12:57:58.7576091Z",
    "SyncDateRangeFinishUtc": "2023-05-03T12:57:59.7576091Z",
    "FailureStage": "Pushing"
  }
  "Message": "Sync 3bead2a1-1b3d-4d90-8077-cddc5ca68b01 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense has failed at step Pushing.",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "RuleType": "Sync Failed",
}
```

### Client rate limit reached

**Type**: Rate Limit Reached  
**Trigger:** The number of requests to the API from a client has exceeded the current quota. This rule is client-specific, so does not include a `companyId` and cannot be filtered by company.
**Additional data:** `dailyQuota`, `expiresUtc`

```json
{
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Peach",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Data": {
    "dailyQuota": 1000,
    "expiresUtc": "2023-05-03T00:00:00Z"
  }
  "Message": "The current daily rate limit quota of 1000 requests for  30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e has been reached.",
  "RuleId": "289c80dc-2aee-4b71-deaf-9acd8d051080",
  "RuleType": "Rate Limit Reached",
}
```

### Client rate limit reset

**Type**: Rate Limit Reset  
**Trigger:** The client rate limit quota has reset and more requests are available. This rule is client-specific, so does not include a `companyId` and cannot be filtered by company.
**Additional data:** `quotaRemaining`, `resetReason`, `dailyQuota` 

```json
{
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Peach",
  "Data": {
    "quotaRemaining": 1000,
    "resetReason": "ResetReason",
    "dailyQuota": 1000
  }
  "Message": "The current daily rate limit quota for client 30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e has been reset to 1000 requests.",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "RuleType": "Rate Limit Reset",
}
```
