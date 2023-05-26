---
title: "Rule types"
description: "Use webhooks to build responsive and resilient applications on Codat data."
createdAt: "2021-02-23T13:11:28.821Z"
updatedAt: "2022-11-17T19:29:19.748Z"
---

The following rules can be configured in the Codat Portal to trigger webhook events. These can be use to help your respond to changes in your companies and their data.

| Rule name | Trigger | Additional data | 
| :- | :- | :- |
| Company data connection status changed  | A data connection's status changes. | `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus` |
| New company synchronized                | After the first dataType is successfully synced for a new company. | |
| Data sync completed                     | Data synchronization is completed; a notification will be generated for each `dataType` as the sync completes. | `dataType`, `datasetId` |
| Dataset data changed                    | A dataset synchronization has completed and this has resulted in updates within Codat's data cache - this could be through the creation of new records or a change to existing records. | `dataType`, `datasetId` |
| Dataset status has changed to an error state | The synchronization of a dataset fails. | `dataType`, `datasetStatus`, `datasetId` | 
| Push operation status has changed       | A push operation's status changes. | `dataType`, `status`, `pushOperationKey` |
| Push operation has timed out            | A push operation times out. |  `dataType`, `pushOperationGuid` |
| Account categories updated              | Anytime that Codat updates the `suggested` fields or a user updates the `confirmed` fields. | `modifiedDate` |
| Sync Connection Deleted                 | A Sync for Commerce connection is deleted. **Note:** Sync for Commerce only. |  |

---

## Rules and payloads

:::caution Removing non-reference data from webhook alerts body

In line with industry standard security practices, we have removed personally identifiable information, such as `companyName`, from the body of our alert webhooks. This leaves only referential information, such as `companyId`, which can be looked up using our API.

:::

### Company data connection status changed

**Trigger:** A data connection's status changes.  
**Additional data:** `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus`.

```json
{
 "companyId":"0ec09c80-e82b-4409-a150-5a5211c215f4",
 "ruleId":"ca3b6004-f1bb-43e7-860f-1386e108b684",
 "type":"DataConnectionStatusChanged",
 "alertId":"40eda3e2-f098-47bd-b7d5-b6b08ae3819e",
 "message":"Data connection for SandBox status changed from PendingAuth to Linked",
 "data":{
    "dataConnectionId":"4ecd1cb4-9048-4459-b692-7de1fffb480a",
    "newStatus":"Linked",
    "oldStatus":"PendingAuth",
    "platformKey":"mqjo"
 }
}
```

### New company synchronized

**Trigger:** After the first dataType is successfully synced for a new company.

```json
{
  "companyId": "0ec09c80-e82b-4409-a150-5a5211c215f4",
  "ruleId": "dba7daa5-be88-40ae-a596-d23549498b17",
  "type": "New company synchronised",
  "alertId": "e848c2a1-ad15-41eb-915b-7a67c269bd2a",
  "message": "Company 0ec09c80-e82b-4409-a150-5a5211c215f4 synced for the first time",
  "data": {}
}
```

### Data sync completed

**Trigger:** Data synchronization is completed; a notification will be generated for each `dataType` as the sync completes.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "companyId": "7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "clientId": "a9244b9d-7055-48f4-80a4-b758d39da98c",
  "clientName": "Client",
  "dataConnectionId": "3d56b944-ff98-4d6b-94cd-fa879db3b74f",
  "ruleId": "92a65d4c-5d54-4f92-8f43-30cbe30bb86b",
  "type": "Data sync completed",
  "alertId": "5e364626-6b3d-41ed-9697-0b3b59603d8f",
  "message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

### Dataset data changed

**Trigger:** A dataset synchronization has completed and this has resulted in updates within Codat's data cache - this could be through the creation of new records or a change to existing records.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "companyId": "ac712d04-c107-424d-a801-be76d677e508",
  "ruleId": "70328e0e-9d8d-48fd-9306-7a39973009c3",
  "type": "Dataset data changed",
  "alertId": "bbdbc217-9776-4cf2-9b67-0afad20bd10e",
  "message": "Data has changed for dataset type invoices, company ac712d04-c107-424d-a801-be76d677e508",
  "data": {
    "dataType": "invoices",
    "datasetId": "e05b0e4b-98f6-48e8-a231-f0720e644f26"
  }
}
```

### Dataset status has changed to an error state

**Trigger:** The synchronization of a dataset fails.  
**Additional data:** `dataType`, `datasetStatus`, `datasetId`.

```json
{
  "companyId":"0ec09c80-e82b-4409-a150-5a5211c215f4",
  "ruleId":"ca3b6004-f1bb-43e7-860f-1386e108b684",
  "type":"Data Sync Status Changed To Error",
  "alertId":"40eda3e2-f098-47bd-b7d5-b6b08ae3819e",
  "message":"ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z ",
  "data":{
    "dataType":"payments",
    "datasetStatus":"ProcessingError",
    "datasetId":"8ee17d26-ac12-4e2d-92d0-a90147958ee3"
  }
}
```

### Push operation status has changed

**Trigger:** A push operation's status changes.  
**Additional data:** `dataType`, `status`, `pushOperationKey`.

```json
{
 "vompanyId":"f6bc5f14-87fb-438f-8d2d-db6a0964aef1",
 "ruleId":"c40791fe-b6fd-45c3-9bf7-0a16abf1b8fd",
 "type":"Push Operation Status Changed()",
 "alertId":"a62bfb38-d73c-4aab-9bb6-d8014bba5f29",
 "message":"invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
 "data":{
    "dataType":"invoices",
    "status":"Success",
    "pushOperationKey":"476afa1c-9f27-4def-bf0d-0914ad89ed27"
 }
}
```

### Push operation has timed out

**Trigger:** A push operation times out.  
**Additional data:** `dataType`, `pushOperationGuid`.

```json
{
  "companyId":"f6bc5f14-87fb-438f-8d2d-db6a0964aef1",
  "ruleId":"c40791fe-b6fd-45c3-9bf7-0a16abf1b8fd",
  "type":"Push Operation Timed Out",
  "alertId":"a42bff38-d73c-4aab-9bb6-d8014bba5f29",
  "message":"ERROR: pushing invoices never finished in time, timing out at 2020-09-07T08:42:13",
  "data":{
    "dataType":"invoices",
    "pushOperationGuid":"476afa1c-9f27-4def-bf0d-0914ad89ed27"
  }
}
```

### Account categories updated

**Trigger:** Anytime that Codat updates the `suggested` fields or a user updates the `confirmed` fields.  
**Additional data:** `modifiedDate`.

```json
{
  "companyId": "f1c35bdc-1546-41b9-baf4-3f31135af968",
  "clientId": "4b6091c4-32b8-4e08-ac31-f7dc7477674b",
  "clientName": "Peach",
  "dataConnectionId": "1a0efd26-1f06-4c48-803f-f8670535ff02",
  "ruleId": "e6fd0b54-ae05-4c43-b7ea-0d340cee15a7",
  "type": "Account Categories Updated",
  "alertId": "c893d3c3-6e69-4b70-af18-7dca1557be6d",
  "message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "data": {
    "modifiedDate": "2022-09-08T16:00:13.7714779+00:00"
  }
}
```

### Sync Connection Deleted

**Trigger:** A Sync for Commerce connection is deleted.

**Note:** This rule is specific to Sync for Commerce and cannot be used for other products.

```json Example webhook alert body
{
  "companyId": "e2876f0a-5102-4a7d-9743-f10133dba88f",
  "clientId": "4f1fb082-0c62-4c74-be22-bc782b801e59",
  "clientName": "The Wind in the Willows",
  "dataConnectionId": "00000000-0000-0000-0000-000000000000",
  "ruleId": "0b29ecef-1ec1-459a-b61a-9de996e0d20a",
  "type": "Sync Connection Deleted",
  "alertId": "fe42cd24-a05a-4e3c-80cb-06749a73ab1e",
  "message": "Sync connection for company e2876f0a-5102-4a7d-9743-f10133dba88f deleted",
  "data": {}
}
```
