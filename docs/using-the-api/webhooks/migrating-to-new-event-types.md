---
title: "Migrating to our new event types"
sidebar_label: "Migrating to our new event types"
description: "Learn how to migrate your existing webhooks to our new event types"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Diff from "@components/Diff"
import { DiffMethod } from 'react-diff-viewer-continued';

Following the release of our [new webhook event types](link-to-announcement) here's our simple guide to help you migrate your existing webhooks. 

We will cover

- How your existing event types relate to our new event types.
- How the schemas map between new and old.
- How to reproduce behavours on the clients side for event types that will not be replaced. 

## How to migrate to a new event type
To ensure a smooth transition to the new event type, we recommend using an "expand/contract" strategy. This approach allows your system to handle both the old and new event types during the migration, minimizing potential disruptions. Below are the detailed steps:

### 1. Update your application logic

Modify your application logic to handle both the existing and the new event types concurrently. This ensures that your system can process either type during the migration period.

#### Create a new webhook consumer

- Implement a new POST endpoint specifically designed to consume the new event type.
- Introduce a feature toggle (a switch that controls the activation of a feature) to manage this new endpoint. Initially, keep the feature toggle disabled to prevent the new endpoint from processing any events.

#### Update the existing webhook consumer

Apply the same feature toggle to your existing webhook consumer. When this toggle is enabled, it should stop processing events from the old event type.

### 2. Configure the new webhook consumer in the portal

- In the portal, configure the new webhook consumer to point to the newly created endpoint.
- [Read more about configuring webhook consumers](/using-the-api/webhooks/create-consumer).

### 3. Validate the new webhook consumer

Test the new webhook consumer to ensure it is correctly receiving and processing the new event type. You can perform this validation by sending test events and checking the logs in the portal (**Monitor > Events** and view the endpoint).

### 4. Enable the feature toggle for the new event type

Once you’ve confirmed that the new webhook consumer is functioning correctly, enable the feature toggle. This will direct your application to process events via the new webhook consumer without losing events.

### 5. Disable the old webhook consumer

Once you are happy with the new webhook consumer delete old endpoint in the portal and remove the application logic consuming the old event type. 

Jump to event type

- [AccountCategoriesUpdated](#accountcategoriesupdated)
- [ClientRateLimitReached](#clientratelimitreached)
- [ClientRateLimitReset](#clientratelimitreset)
- [DataConnectionStatusChanged](#dataconnectionstatuschanged)
- [DataSyncCompleted](#datasynccompleted)
- [DataSyncStatusChangedToError](#datasyncstatuschangedtoerror)
- [DatasetDataChanged](#datasetdatachanged)
- [NewCompanySynchronized](#newcompanysynchronized)
- [PushOperationStatusChanged](#pushoperationstatuschanged)
- [PushOperationTimedOut](#pushoperationtimedout)
- [SyncCompleted](#synccompleted)
- [SyncConnectionDeleted](#syncconnectiondeleted)
- [SyncFailed](#syncfailed)

## AccountCategoriesUpdated

| RuleType | Maps to eventType |
|---|---|
| `Account Categories Updated` | `financialStatements.{categorized,recategorized}` |


Put this in an expand:
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Account Categories Updated",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "Data": {
    "modifiedDate": "2019-08-24T14:15:22Z"
  }
}
```
</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id":"a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType":"financialStatements.{categorized,recategorized}",
  "generatedDate":"2019-08-24T14:15:27Z",
  "payload":{
    "referenceCompany": {
      "id":"8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      }
    },
    "categorizationDate": "2019-08-24T14:15:22Z"
  }
}
```
</TabItem>

</Tabs>

| Old schema property | Maps to new schema property |
|--|--|
| AlertId | id |
| RuleType | eventType |
| RuleId | - |
| ClientId | - |
| ClientName | - |
| CompanyId | payload.referenceCompany.id |
| DataConnectionId | - |
| Message | - |
| Data.modifiedDate | payload.categorizationDate |

## ClientRateLimitReached

| RuleType | Maps to eventType |
|---|---|
| `Rate Limit Reached` | `client.rateLimit.reached` |


Put this in an expand:
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Rate Limit Reached",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "Message": "The current daily rate limit quota of 1000 requests for bae71d36-ff47-420a-b4a6-f8c9ddf41140 has been reached.",
  "Data": {
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z"
  }
}
```
</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id":"a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType":"client.rateLimit.reached",
  "generatedDate":"2024-08-24T14:15:27Z",
  "payload":{
    "dailyQuota": 1000,
    "expiryDate": "2023-05-03T00:00:00Z",
    "quotaRemaining": 1000,
  }
}
```
</TabItem>

</Tabs>

| Old schema property | Maps to new schema property |
|--|--|
| AlertId | id |
| RuleType | eventType |
| RuleId | - |
| ClientId | - |
| ClientName | - |
| Message | - |
| Data.DailyQuota | payload.dailyQuota |
| Data.ExpiresUtc | payload.expiryDate |

## ClientRateLimitReset

| RuleType | Maps to eventType |
|---|---|
| `Rate Limit Reset` | `client.rateLimit.reset` |


Put this in an expand:
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Rate Limit Reset",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "Message": "The current daily rate limit quota for client 30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e has been reset to 1000 requests.",
  "Data": {
    "DailyQuota": 1000,
    "ExpiresUtc": "2023-05-03T00:00:00Z",
    "ResetReason": "The quota was reset because it is a new day.",
    "QuotaRemaining": 1000
  }
}
```
</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id":"a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType":"client.rateLimit.reached",
  "generatedDate":"2024-08-24T14:15:27Z",
  "payload":{
    "dailyQuota": 1000,
    "expiryDate": "2023-05-03T00:00:00Z",
    "quotaRemaining": 1000,
  }
}
```
</TabItem>

</Tabs>

| Old schema property | Maps to new schema property |
|--|--|
| AlertId | id |
| RuleType | eventType |
| RuleId | - |
| ClientId | - |
| ClientName | - |
| Message | - |
| Data.DailyQuota | payload.dailyQuota |
| Data.ExpiresUtc | payload.expiryDate |
| Data.ResetReason | - |
| Data.QuotaRemaining | payload.quotaRemaining |

## DataConnectionStatusChanged

| RuleType | oldStatus | newStatus | Maps to eventType |
|---|--|--|--|
| `DataConnectionStatusChanged` | -                             | `PendingAuth`                 | `connection.created`          |
| `DataConnectionStatusChanged` | `PendingAuth`                 | `Linked`                      | `connection.connected`        |
| `DataConnectionStatusChanged` | `Linked`                      | `Unlinked` or  `Deauthorized` | `connection.disconnected`     |
| `DataConnectionStatusChanged` | `Unlinked` or  `Deauthorized` | `Linked`                      | `connection.reconnected`      |
| `DataConnectionStatusChanged` | -                             | -                             | `connection.deleted`          |



Put this in an expand:
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "DataConnectionStatusChanged",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Data connection for SandBox status changed from PendingAuth to Linked",
  "Data": {
    "dataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "newStatus": "Linked",
    "oldStatus": "PendingAuth",
    "platformKey": "gbol"
  }
}
```
</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id":"a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType":"connection.{created,conneected,disconnected,reconnected,deleted}",
  "generatedDate":"2024-08-24T14:15:27Z",
  "payload":{
    "referenceCompany": {
      "id":"8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      }
    },
    "connection":{
      "id":"2e9d2c44-f675-40ba-8049-353bfcb5e171",
      "integrationId":"bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey":"gbol",
      "sourceId":"bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "platformName":"Xero",
      "linkUrl":"https://link-api.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/start",
      "status":"Linked",
      "lastSync":"2022-10-27T10:22:43.6464237Z",
      "created":"2022-10-27T09:53:29Z",
      "sourceType":"Banking"
    }
  }
}
```
</TabItem>

</Tabs>

| Old schema property | Maps to new schema property |
|--|--|
| AlertId | id |
| RuleType | eventType |
| RuleId | - |
| ClientId | - |
| ClientName | - |
| CompanyId | payload.referenceCompany.id |
| DataConnectionId | payload.connection.id|
| Message | - |
| Data.dataConnectionId | payload.connection.id |
| Data.newStatus | payload.connection.status |
| Data.oldStatus | - |
| Data.platformKey | payload.connection.integrationKey |


<!-- ## TBC

| RuleType | Maps to eventType |
|---|---|
| `` | `` |


Put this in an expand:
<Tabs>
<TabItem value="old" label="Old schema">

```json

```
</TabItem>

<TabItem value="new" label="New schema">

```json

```
</TabItem>

</Tabs>

| Old schema property | Maps to new schema property |
|--|--|
| AlertId | id |
| RuleType | eventType |
| RuleId | - |
| CompanyId | payload.referenceCompany.id |  -->