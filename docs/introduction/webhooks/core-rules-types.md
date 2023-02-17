---
title: "Rule types"
description: "Explore scenarios of events where a rule can be configured"
createdAt: "2021-02-23T13:11:28.821Z"
updatedAt: "2022-11-17T19:29:19.748Z"
---

:::caution Removing non-reference data from webhook alerts body

In line with industry standard security practices, we have removed personally identifiable information, such as `companyName`, from the body of our alert webhooks. This leaves only referential information, such as `companyId`, which can be looked up using our API.

:::

The following rules can be configured in the Codat Portal to alert you to events affecting your companies and data.

## Account categories updated

**Trigger:** Anytime that Codat updates the `suggested` fields or a user updates the `confirmed` fields.  
**Additional data:** `modifiedDate`.

```json
{
"CompanyId": "f1c35bdc-1546-41b9-baf4-3f31135af968",
"ClientId": "4b6091c4-32b8-4e08-ac31-f7dc7477674b",
"ClientName": "Peach",
"DataConnectionId": "1a0efd26-1f06-4c48-803f-f8670535ff02",
"RuleId": "e6fd0b54-ae05-4c43-b7ea-0d340cee15a7",
"RuleType": "Account Categories Updated",
"AlertId": "c893d3c3-6e69-4b70-af18-7dca1557be6d",
"Message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
"Data": {
  "modifiedDate": "2022-09-08T16:00:13.7714779+00:00"
}
}
```

## Company data connection status changed

**Trigger:** A data connection's status changes.  
**Additional data:** `dataConnectionId`, `platformKey`, `newStatus`, `oldStatus`.

```json
{
 "CompanyId":"0ec09c80-e82b-4409-a150-5a5211c215f4",
 "RuleId":"ca3b6004-f1bb-43e7-860f-1386e108b684",
 "RuleType":"DataConnectionStatusChanged",
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

## Data sync completed

**Trigger:** Data synchronization is completed; a notification will be generated for each `dataType` as the sync completes.  
**Additional data:** `dataType`, `datasetId`.

```json
{
  "CompanyId": "7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "ClientId": "a9244b9d-7055-48f4-80a4-b758d39da98c",
  "ClientName": "Client",
  "DataConnectionId": "3d56b944-ff98-4d6b-94cd-fa879db3b74f",
  "RuleId": "92a65d4c-5d54-4f92-8f43-30cbe30bb86b",
  "RuleType": "Data sync completed",
  "AlertId": "5e364626-6b3d-41ed-9697-0b3b59603d8f",
  "Message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "Data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

## Dataset data changed

**Trigger:** A dataset synchronization has completed and this has resulted in updates within Codat's data cache - this could be through the creation of new records or a change to existing records.  
**Additional data:** `dataType`, `datasetId`.

```json
{
"CompanyId": "ac712d04-c107-424d-a801-be76d677e508",
"RuleId": "70328e0e-9d8d-48fd-9306-7a39973009c3",
"RuleType": "Dataset data changed",
"AlertId": "bbdbc217-9776-4cf2-9b67-0afad20bd10e",
"Message": "Data has changed for dataset type invoices, company ac712d04-c107-424d-a801-be76d677e508",
"Data": {
  "dataType": "invoices",
  "datasetId": "e05b0e4b-98f6-48e8-a231-f0720e644f26"
}
}
```

## Dataset status has changed to an error state

**Trigger:** The synchronization of a dataset fails.  
**Additional data:** `dataType`, `datasetStatus`, `datasetId`.

```json
{
 "CompanyId":"0ec09c80-e82b-4409-a150-5a5211c215f4",
 "RuleId":"ca3b6004-f1bb-43e7-860f-1386e108b684",
 "RuleType":"Data Sync Status Changed to Error",
 "AlertId":"40eda3e2-f098-47bd-b7d5-b6b08ae3819e",
 "Message":"ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z ",
 "Data":{
    "dataType":"payments",
    "datasetStatus":"ProcessingError",
    "datasetId":"8ee17d26-ac12-4e2d-92d0-a90147958ee3"
 }
}
```

## New company synchronized

**Trigger:** After a new company has successfully synchronised at least one dataType for the first time.

```json
{
  "CompanyId": "0ec09c80-e82b-4409-a150-5a5211c215f4",
  "RuleId": "dba7daa5-be88-40ae-a596-d23549498b17",
  "RuleType": "New company synchronised",
  "AlertId": "e848c2a1-ad15-41eb-915b-7a67c269bd2a",
  "Message": "Company 0ec09c80-e82b-4409-a150-5a5211c215f4 synced for the first time",
  "Data": {}
}
```

## Push operation status has changed

**Trigger:** A push operation's status changes.  
**Additional data:** `dataType`, `status`, `pushOperationKey`.

```json
{
 "CompanyId":"f6bc5f14-87fb-438f-8d2d-db6a0964aef1",
 "RuleId":"c40791fe-b6fd-45c3-9bf7-0a16abf1b8fd",
 "RuleType":"Push Operation Status Changed()",
 "AlertId":"a62bfb38-d73c-4aab-9bb6-d8014bba5f29",
 "Message":"invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
 "Data":{
    "dataType":"invoices",
    "status":"Success",
    "pushOperationKey":"476afa1c-9f27-4def-bf0d-0914ad89ed27"
 }
}
```

## Push operation has timed out

**Trigger:** A push operation times out.  
**Additional data:** `dataType`, `pushOperationGuid`.

```json
{
 "CompanyId":"f6bc5f14-87fb-438f-8d2d-db6a0964aef1",
 "RuleId":"c40791fe-b6fd-45c3-9bf7-0a16abf1b8fd",
 "RuleType":"Push Operation Timed Out",
 "AlertId":"a42bff38-d73c-4aab-9bb6-d8014bba5f29",
 "Message":"ERROR: pushing invoices never finished in time, timing out at 2020-09-07T08:42:13",
 "Data":{
    "dataType":"invoices",
    "pushOperationGuid":"476afa1c-9f27-4def-bf0d-0914ad89ed27"
 }
}
```

## Sync Connection Deleted

**Trigger:** A Sync connection is deleted.

**Note:** This rule is specific to Sync for Commerce and cannot be used for other products. This rule does not send a webhook.

```json Example webhook alert body
{
  "CompanyId": "e2876f0a-5102-4a7d-9743-f10133dba88f",
  "ClientId": "4f1fb082-0c62-4c74-be22-bc782b801e59",
  "ClientName": "The Wind in the Willows",
  "DataConnectionId": "00000000-0000-0000-0000-000000000000",
  "RuleId": "0b29ecef-1ec1-459a-b61a-9de996e0d20a",
  "RuleType": "Sync Connection Deleted",
  "AlertId": "fe42cd24-a05a-4e3c-80cb-06749a73ab1e",
  "Message": "Sync connection for company e2876f0a-5102-4a7d-9743-f10133dba88f deleted",
  "Data": {}
}
```
