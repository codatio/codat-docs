---
title: "New webhook event type: connection.failed"
date: "2024-10-30"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

Following the release of our new event types earlier this month, we have expanded our support for connection-related notifications.
The `connection.failed` webhook can be used to alert teams about any issues an SMB encounters while attempting to connect their business software.

<!--truncate-->

## What's new?

You can now subscribe to the connection.failed webhook, which details the failed connection and includes information on the specific error that occurred.
This helps you quickly identify and address the issue at hand.

```json title="Connection event type schema structure"
{
  "id": "ba29118f-5406-4e59-b05c-ba307ca38d01",
  "eventType": "connection.failed",
  "generatedDate": "2024-08-08T17:10:34.015Z",
  "payload": {
    "referenceCompany": {
      "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
      "name": "Toft stores",
      "links": {
        "portal": "https://app.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/summary"
      },
      "tags": {
        "region": "us",
        "uid": "335a086e-8563-4b03-94e3-39544225ecb6"
      }
    },
    "connection": {
      "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
      "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
      "integrationKey": "dfxm",
      "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
      "platformName": "Basiq",
      "linkUrl": "https://link-api.codat.io/companies/0498e921-9b53-4396-a412-4f2f5983b0a2/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
      "status": "PendingAuth",
      "created": "2022-10-27T09:53:29.000Z",
      "sourceType": "Banking",
      "dataConnectionErrors": [
        {
          "statusCode": "403",
          "statusText": "User cancelled linking",
          "errorMessage": "User cancelled",
          "erroredOnUtc": "2022-10-27T09:53:29.000Z",
          "status": "Active"
        }
      ]
    }
  }
}
```

:::tip New event types
Check out the full range of our new [webhook event types](/using-the-api/webhooks/event-types).
:::

## Who is this relevant for?

Any client currently using our webhooks or clients looking to improve link conversion through calls to action. 

## How to get started?

- Already using our legacy rules webhooks? [Learn how to migrate to new event types](/using-the-api/webhooks/migrating-to-new-event-types).
- Implementing webhooks for the first time? [Learn how to use our webhook service](/using-the-api/webhooks/create-consumer).
