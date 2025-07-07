---
title: "Migrate to our new event types"
sidebar_label: "Use new event types"
description: "Learn how you can migrate your existing webhooks to use our new event types"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

We have recently released our [new webhook event types](/updates/241004-new-webhook-event-types). To ensure a smooth transition to these types, we recommend using an "expand/contract" strategy. It allows your system to handle both the old rule types and the new event types during the migration, minimizing potential disruptions.

:::info In this guide:

- View recommended steps to migrate your existing webhooks to the new event types.
- Understand how the existing rule types and their schemas map to the new event types.
- See how you can manage notifications for rule types that will not be replaced.
  :::

## Migrate to new event types

To switch to new event types using the recommended "expand/contract" strategy, follow these steps:

1. **Update your application logic**

   Modify your application logic to handle the existing and the new event types at the same time:
   - Create a new POST endpoint specifically designed to consume the new webhook event type.
   - Create a feature toggle to control the activation of the **new** endpoint. **Enabling** the toggle should **activate** the endpoint to start processing events.
   - Create another feature toggle to control your **existing** webhook consumer. **Disabling** the toggle should **stop** the endpoint from processing the old rule types.

2. **Configure the new webhook consumer in the Portal**

   In the [Codat Portal](https://app.codat.io), configure a new webhook consumer that points to your newly created endpoint. See [Build webhook consumers to subscribe to events](/using-the-api/webhooks/create-consumer) for a step-by-step walkthrough.

3. **Validate the new webhook consumer**

   Test the new webhook consumer to ensure it is correctly receiving and processing the new event type. You can send test events and check the logs in the [Codat Portal](https://app.codat.io). Navigate to **Monitor > Events** and select the relevant endpoint to do this. See [Test a webhook consumer](/using-the-api/webhooks/create-consumer#test-a-webhook-consumer) for a step-by-step walkthrough.

4. **Enable the new webhook consumer**

   When you’ve confirmed that the new webhook consumer is functioning correctly, activate the endpoint by enabling the feature toggle you created to control it. This will direct your application to process events via the new webhook consumer without losing events.

   At this stage both webhook consumers will be active and may receive and process the same events as a result. Include logic in your application that prevents the same event from being processed by both endpoints to avoid duplication.

5. **Disable the old webhook consumer**

   Once you are happy with the new webhook consumer, deactivate your old endpoint by disabling the feature toggle you created to control it, delete the old consumer from the Portal, and remove the application logic consuming the old rule types.

## Understand new event types

Below is the summary of old rule types and new event types that replace them. Click on the required event type to check the fields and schema of the replacement event type and how it maps to legacy rule types.

You can also view the dedicated page for our new [webhook event types](/using-the-api/webhooks/event-types).

| Existing rule type                                            | Replacement event type                                                                                                              |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [ClientRateLimitReached](#clientratelimitreached)             | `client.rateLimit.reached`                                                                                                          |
| [ClientRateLimitReset](#clientratelimitreset)                 | `client.rateLimit.reset`                                                                                                            |
| [DataConnectionStatusChanged](#dataconnectionstatuschanged)   | `connection.created`<br/>`connection.connected`<br/>`connection.disconnected`<br/>`connection.reconnected`<br/>`connection.deleted` |
| [DataSyncCompleted](#datasynccompleted)                       | `read.completed`                                                                                                                    |
| [DataSyncStatusChangedToError](#datasyncstatuschangedtoerror) | `read.completed`                                                                                                                    |
| [DatasetDataChanged](#datasetdatachanged)                     | `read.completed`                                                                                                                    |
| [NewCompanySynchronized](#newcompanysynchronized)             | `read.completed.initial`                                                                                                            |
| [PushOperationStatusChanged](#pushoperationstatuschanged)     | `{dataType}.write.successful`<br/>`{dataType}.write.unsuccessful`                                                                   |
| [PushOperationTimedOut](#pushoperationtimedout)               | `{dataType}.write.unsuccessful`                                                                                                     |
| [SyncCompleted](#synccompleted)                               | `expenses.sync.successful`                                                                                                          |
| [SyncFailed](#syncfailed)                                     | `expenses.sync.unsuccessful`                                                                                                        |
| [SyncConnectionDeleted](#syncconnectiondeleted)               | `connection.deleted`                                                                                                                |

#### ClientRateLimitReached

Called when the client's requests to Codat's API exceed the current quota. This event now follows our updated schema standards.

| Rule type            | Maps to event type                                                                  |
| -------------------- | ----------------------------------------------------------------------------------- |
| `Rate Limit Reached` | [`client.rateLimit.reached`](/platform-api#/webhooks/client.rateLimit.reached/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
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
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "client.rateLimit.reached",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "dailyQuota": 1000,
    "expiryDate": "2023-05-03T00:00:00Z",
    "quotaRemaining": 1000
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.DailyQuota`   | `payload.dailyQuota`                                                                                                                                                             |
| `Data.ExpiresUtc`   | `payload.expiryDate`                                                                                                                                                             |

</details>

#### ClientRateLimitReset

Called when the client's rate limit quota is reset, allowing more requests to Codat's API. This event now follows our updated schema standards.

| Rule type          | Maps to event type                                                              |
| ------------------ | ------------------------------------------------------------------------------- |
| `Rate Limit Reset` | [`client.rateLimit.reset`](/platform-api#/webhooks/client.rateLimit.reset/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
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
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "client.rateLimit.reached",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "dailyQuota": 1000,
    "expiryDate": "2023-05-03T00:00:00Z",
    "quotaRemaining": 1000
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property   | New schema property                                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`             | `id`                                                                                                                                                                             |
| `RuleType`            | `eventType`                                                                                                                                                                      |
| `RuleId`              | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`            | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`          | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `Message`             | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.DailyQuota`     | `payload.dailyQuota`                                                                                                                                                             |
| `Data.ExpiresUtc`     | `payload.expiryDate`                                                                                                                                                             |
| `Data.ResetReason`    | Not replaced. This property is not relevant for use in a webhook.                                                                                                                |
| `Data.QuotaRemaining` | `payload.quotaRemaining`                                                                                                                                                         |

</details>

#### DataConnectionStatusChanged

Called whenever a data connection's status changes, this event has been replaced by more precise webhooks that offer more detailed context on the state transition.

The new webhooks now include the [full connection schema](/platform-api#/schemas/Connection), ensuring consistency across our APIs and webhooks.

| Rule type                     | Old status                    | New status                    | Maps to event type                                                                |
| ----------------------------- | ----------------------------- | ----------------------------- | --------------------------------------------------------------------------------- |
| `DataConnectionStatusChanged` | -                             | `PendingAuth`                 | [`connection.created`](/platform-api#/webhooks/connection.created/post)           |
| `DataConnectionStatusChanged` | `PendingAuth`                 | `Linked`                      | [`connection.connected`](/platform-api#/webhooks/connection.connected/post)       |
| `DataConnectionStatusChanged` | `Linked`                      | `Unlinked`<br/>`Deauthorized` | [`connection.disconnected`](/platform-api#/webhooks/connection.disconnected/post) |
| `DataConnectionStatusChanged` | `Unlinked`<br/>`Deauthorized` | `Linked`                      | [`connection.reconnected`](/platform-api#/webhooks/connection.reconnected/post)   |
| `DataConnectionStatusChanged` | -                             | -                             | [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post)           |

<details>
  <summary><b>Compare webhook schemas</b></summary>
  
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
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "connection.{created,conneected,disconnected,reconnected,deleted}",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connection": {
      "id": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "gbol",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "platformName": "Xero",
      "linkUrl": "https://link-api.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/2e9d2c44-f675-40ba-8049-353bfcb5e171/start",
      "status": "Linked",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "created": "2022-10-27T09:53:29Z",
      "sourceType": "Banking"
    }
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property     | New schema property                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`               | `id`                                                                                                                                                                             |
| `RuleType`              | `eventType`                                                                                                                                                                      |
| `RuleId`                | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`              | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`            | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`             | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`      | `payload.connection.id`                                                                                                                                                          |
| `Message`               | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataConnectionId` | `payload.connection.id`                                                                                                                                                          |
| `Data.newStatus`        | `payload.connection.status`                                                                                                                                                      |
| `Data.oldStatus`        | Not replaced. The new event types specify the status transition, so the previous status is not needed.                                                                           |
| `Data.platformKey`      | `payload.connection.integrationKey`                                                                                                                                              |

</details>

#### DataSyncCompleted

Called when a data synchronization completes, the legacy event generates a notification for each `dataType` as it finishes syncing regardless of the outcome.

The `read.completed` replacement event uses the same trigger, but now provides detailed information about the read operation's outcome, including the status of the sync and whether any records were modified. See [Retrieve company data](/using-the-api/get-data).

:::tip Adopting the new schema
When adopting the new schema, ensure that you handle all elements in the `dataTypes` array to maintain future compatibility.
:::

| Rule type             | Maps to event type                                              |
| --------------------- | --------------------------------------------------------------- |
| `Data sync completed` | [`read.completed`](/platform-api#/webhooks/read.completed/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Data sync completed",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Data sync of type creditNotes completed for company 7626befb-0c7d-49a4-9366-bc4c81b4e4b7",
  "Data": {
    "dataType": "creditNotes",
    "datasetId": "1541a5ee-0d84-4b6e-a7f7-c07c1f216333"
  }
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "creditNotes",
        "recordsModified": true,
        "status": "Complete"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`  | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataType`     | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetId`    | Not replaced. If you encounter an issue, provide the company ID to support to assist with troubleshooting.                                                                       |

</details>

#### DataSyncStatusChangedToError

Called when the synchronization of a dataset fails, the replacement `read.completed` webhook now includes information on whether the data was successfully read into Codat's cache.

This provides insight into both the completion of the read operation and its outcome. See [Retrieve company data](/using-the-api/get-data).

:::tip Adopting the new schema
When adopting the new schema, ensure that you handle all elements in the `dataTypes` array to maintain future compatibility.
:::

#### Property mapping

| Old schema property                 | New schema property                                             |
| ----------------------------------- | --------------------------------------------------------------- |
| `Data Sync Status Changed To Error` | [`read.completed`](/platform-api#/webhooks/read.completed/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Data Sync Status Changed To Error",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "ERROR: syncing payments triggered a ProcessingError notification at 2020-04-21T12:12:57.4250446Z.",
  "Data": {
    "dataType": "invoices",
    "datasetStatus": "ProcessingError",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "invoices",
        "recordsModified": true,
        "status": "ProcessingError"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property  | New schema property                                                                                                                                                              |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`            | `id`                                                                                                                                                                             |
| `RuleType`           | `eventType`                                                                                                                                                                      |
| `RuleId`             | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`           | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`         | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`          | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`   | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`            | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataType`      | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetStatus` | `payload.dataTypes[].status`                                                                                                                                                     |
| `Data.datasetId`     | Not replaced. If you encounter an issue, provide the company ID to support to assist with troubleshooting.                                                                       |

</details>

#### DatasetDataChanged

Called when a dataset synchronization completes and results in updates within Codat's data cache, such as the creation of new records or changes to existing ones.

The replacement `read.completed` webhook now provides information on when the data in Codat's cache was last modified and whether any records within a data type have been updated since the previous read operation.

To replicate the behavior of the legacy `DatasetDataChanged` webhook, check if the `recordsModified` Boolean value for the data type is `true`.

See [Retrieve company data](/using-the-api/get-data).

:::tip Adopting the new schema
When adopting the new schema, ensure that you handle all elements in the `dataTypes` array to maintain future compatibility.
:::

| Rule type              | Maps to event type                                              |
| ---------------------- | --------------------------------------------------------------- |
| `Dataset data changed` | [`read.completed`](/platform-api#/webhooks/read.completed/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Dataset data changed",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Data has changed for dataset type invoices, company 8a210b68-6988-11ed-a1eb-0242ac120002",
  "Data": {
    "dataType": "invoices",
    "datasetId": "6586f21b-ad4d-4d06-a309-712af47184a2"
  }
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "invoices",
        "recordsModified": true,
        "status": "ProcessingError"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`  | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataType`     | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetId`    | Not replaced. If you encounter an issue, provide the company ID to support to assist with troubleshooting.                                                                       |

</details>

#### NewCompanySynchronized

Called when initial syncs are complete for all data types queued for a newly connected company, and at least one of those syncs is successful.

The replacement `read.completed.initial` webhook is called the first time the data type is stored in Codat's cache and uses the same payload as the `read.completed` webhook.

:::tip Adopting the new schema
When adopting the new schema, ensure that you handle all elements in the `dataTypes` array to maintain future compatibility.
:::

| Rule type                  | Maps to event type                                                              |
| -------------------------- | ------------------------------------------------------------------------------- |
| `New company synchronized` | [`read.completed.initial`](/platform-api#/webhooks/read.completed.initial/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "New company synchronized",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Company 8a210b68-6988-11ed-a1eb-0242ac120002 synced for the first time"
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "read.completed.initial",
  "generatedDate": "2024-08-07T12:02:32.15033Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "modifiedFromDate": "2024-08-06T12:00:00.00Z",
    "dataTypes": [
      {
        "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
        "dataType": "invoices",
        "recordsModified": true,
        "status": "ProcessingError"
      }
    ]
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`  | `payload.dataTypes[].connectionId`                                                                                                                                               |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataType`     | `payload.dataTypes[].dataType`                                                                                                                                                   |
| `Data.datasetId`    | Not replaced. If you encounter an issue, provide the company ID to support to assist with troubleshooting.                                                                       |

</details>

#### PushOperationStatusChanged

Called when the status of a write operation changes, this event has been replaced by two more precise webhooks: `{dataType}.write.successful` and `{dataType}.write.unsuccessful`.

These event types provide detailed information, including whether the push operation was successful, the record ID, and the attachment ID when creating, updating, or deleting records.

| Rule type                         | Data status            | Maps to event type                                                                           |
| --------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------- |
| `Push Operation Status Changed()` | `Successful`           | [`{dataType}.write.successful`](/platform-api#/webhooks/dataType-.write.successful/post)     |
| `Push Operation Status Changed()` | `TimedOut` or `Failed` | [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
  
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Push Operation Status Changed()",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "invoices triggered notification for PushOperationStatusChanged at 2019-05-22T18:19:42.742Z",
  "Data": {
    "dataType": "invoices",
    "status": "Success",
    "pushOperationKey": "c2f8847d-3047-4619-a157-6d947d8e4a73"
  }
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "invoices.write.successful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "id": "c2f8847d-3047-4619-a157-6d947d8e4a73",
    "type": "Create",
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "requestedOnDate": "2022-10-23T00:00:00.000Z",
    "completedOnDate": "2022-10-23T00:00:00.000Z",
    "status": "Success",
    "record": {
      // only populated on success for records, and always populated for attachments.
      "id": "inv_sedi984199smdjsua9124"
    },
    "attachmentId": null
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property     | New schema property                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`               | `id`                                                                                                                                                                             |
| `RuleType`              | `eventType`                                                                                                                                                                      |
| `RuleId`                | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`              | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`            | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`             | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`      | `payload.connectionId`                                                                                                                                                           |
| `Message`               | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataType`         | `eventType`                                                                                                                                                                      |
| `Data.status`           | `payload.status`                                                                                                                                                                 |
| `Data.pushOperationKey` | `payload.id`                                                                                                                                                                     |

</details>

#### PushOperationTimedOut

Called when a write operation times out. This webhook has been replaced by the `{dataType}.write.unsuccessful` event type.

| Rule type                  | Data status | Maps to event type                                                                           |
| -------------------------- | ----------- | -------------------------------------------------------------------------------------------- |
| `Push Operation Timed Out` | `TimedOut`  | [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
  
<Tabs>
<TabItem value="old" label="Old schema">

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

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "invoices.write.successful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "id": "c2f8847d-3047-4619-a157-6d947d8e4a73",
    "type": "Create",
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "requestedOnDate": "2022-10-23T00:00:00.000Z",
    "completedOnDate": "2022-10-23T00:00:00.000Z",
    "status": "TimedOut",
    "record": null,
    "attachmentId": null
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property      | New schema property                                                                                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`                | `id`                                                                                                                                                                             |
| `RuleType`               | `eventType`                                                                                                                                                                      |
| `RuleId`                 | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`               | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`             | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`              | `payload.referenceCompany.id`                                                                                                                                                    |
| `DataConnectionId`       | `payload.connectionId`                                                                                                                                                           |
| `Message`                | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.dataType`          | `eventType`                                                                                                                                                                      |
| `Data.pushOperationKey`  | `payload.id`                                                                                                                                                                     |
| `Data.pushOperationGuid` | `payload.id`                                                                                                                                                                     |

</details>

#### SyncCompleted

The original rule type is Called when a [Expenses](/expenses/overview) expense sync is completed. The replacement event type is Called only when the sync completes successfully.

| Rule type        | Maps to event type                                                                           |
| ---------------- | -------------------------------------------------------------------------------------------- |
| `Sync Completed` | [`expenses.sync.successful`](/sync-for-expenses-api#/webhooks/expenses.sync.successful/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "RuleType": "Sync Completed",
  "RuleId": "5c27631d-3b63-4b50-8228-ee502fd113eb",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Message": "Sync 321363b4-efa9-4fbc-b71c-0b58d62f3248 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense completed successfully.",
  "Data": {
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248",
    "syncType": "Expense"
  }
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "eventType": "expenses.sync.successful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "referenceCompany": {
      "id": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/1f9559e7-8368-48c9-bdf4-f158e16b8b85/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248"
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.syncId`       | `payload.syncId`                                                                                                                                                                 |
| `Data.syncType`     | `eventType`                                                                                                                                                                      |

</details>

#### SyncFailed

Called anytime a [Expenses](/expenses/overview) expenses sync fails, this event now follows our updated schema standards.

| Rule type     | Maps to event type                                                                               |
| ------------- | ------------------------------------------------------------------------------------------------ |
| `Sync Failed` | [`expenses.sync.unsuccessful`](/sync-for-expenses-api#/webhooks/expenses.sync.unsuccessful/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "RuleType": "Sync Failed",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Message": "Sync 3bead2a1-1b3d-4d90-8077-cddc5ca68b01 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense has failed at step Pushing.",
  "Data": {
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01",
    "syncType": "Expense",
    "FailureStage": "Pushing"
  }
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "eventType": "expenses.sync.unsuccessful",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "referenceCompany": {
      "id": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb.",
      "links": {
        "portal": "https://app.codat.io/companies/1f9559e7-8368-48c9-bdf4-f158e16b8b85/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01"
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |
| `Data.syncId`       | `payload.syncId`                                                                                                                                                                 |
| `Data.syncType`     | `eventType`                                                                                                                                                                      |
| `Data.FailureStage` | Not replaced. This property is no longer supported.                                                                                                                              |

</details>

#### SyncConnectionDeleted

This legacy event is specific to our legacy [Sync for Commerce](/commerce/overview) solution and indicates that a data connection has been deleted. This has now been replaced by the platform-wide `connection.deleted` event type.

| Rule type                 | Maps to event type                                                      |
| ------------------------- | ----------------------------------------------------------------------- |
| `Sync Connection Deleted` | [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post) |

<details>
  <summary><b>Compare webhook schemas</b></summary>
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Sync Connection Deleted",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "Message": "Sync connection for company 8a210b68-6988-11ed-a1eb-0242ac120002 deleted"
}
```

</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType": "connection.deleted",
  "generatedDate": "2024-08-24T14:15:27Z",
  "payload": {
    "referenceCompany": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      },
      "tags": {
        // Contains custom tags associated with the company.
        "yourUserDefinedKey": "yourUserDefinedValue"
      }
    },
    "connection": {
      "id": "8a210b68-6988-11ed-a1eb-0242ac120002",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "gbol",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "platformName": "Xero",
      "linkUrl": "https://link-api.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/connections/8a210b68-6988-11ed-a1eb-0242ac120002/start",
      "status": "Linked",
      "lastSync": "2022-10-27T10:22:43.6464237Z",
      "created": "2022-10-27T09:53:29Z",
      "sourceType": "Banking"
    }
  }
}
```

</TabItem>

</Tabs>

#### Property mapping

| Old schema property | New schema property                                                                                                                                                              |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AlertId`           | `id`                                                                                                                                                                             |
| `RuleType`          | `eventType`                                                                                                                                                                      |
| `RuleId`            | ![Static Badge](https://img.shields.io/badge/Deprecated-red)                                                                                                                     |
| `ClientId`          | Not replaced. If you need the Codat client ID, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).   |
| `ClientName`        | Not replaced. If you need the Codat client name, include it as a custom header in the API request. See [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers). |
| `CompanyId`         | `payload.referenceCompany.id`                                                                                                                                                    |
| `Message`           | Not replaced. Our email and webhooks services are no longer combined into a single service, making this property redundant.                                                      |

</details>

---

## Read next

- Review [webhook event types](/using-the-api/webhooks/event-types)
- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)
- [Support email notifications with Zapier](/using-the-api/webhooks/zapier-integration)
- [Troubleshooting](/using-the-api/webhooks/troubleshooting)
