---
title: "2025-01-10: Changes to the bankFeeds.sourceAccount webhook payload"
date: "2024-10-04"
tags: ["Deprecation"]
authors: dcoplowe
---

import Diff from "@components/Diff"

On **January 10, 2025**, we will update the webhook payloads for the `bankFeeds.sourceAccount.connected` and `bankFeeds.sourceAccount.disconnected` event types to align with our [new webhook schema definition](/updates/241004-new-webhook-event-types).

<!--truncate-->

The initial release did not include the top-level schema, which provides metadata about the event.

<Diff
  showDiffOnly={false}
  oldCode={`{
    "companyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
    "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "sourceAccount": {
      "id": "acc-002",
      "accountName": "account-081",
      "sortCode": "123456",
      "accountType": "Credit",
      "accountNumber": "12345670",
      "currency": "GBP",
      "balance": 99.99,
      "modifiedDate": "2023-01-09T14:14:14.1057478Z",
      "status": "pending"
    }
}`}
  newCode={`{
  "eventType": "bankFeeds.sourceAccount.connected",
  "generatedDate": "2022-10-23T00:00:00.000Z",
  "payload": {
    "companyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
    "connectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
    "sourceAccount": {
      "id": "acc-002",
      "accountName": "account-081",
      "sortCode": "123456",
      "accountType": "Credit",
      "accountNumber": "12345670",
      "currency": "GBP",
      "balance": 99.99,
      "modifiedDate": "2023-01-09T14:14:14.1057478Z",
      "status": "pending"
    }
  }
}`}
/>

## Action Required

To avoid disruption update your webhook consumer to handle the updated schema definition.

## Expected Impact

If you do not migrate by **January 10, 2025**, receiving the `bankFeeds.sourceAccount.connected` and `bankFeeds.sourceAccount.disconnected` event types will result in deserialization errors, preventing your application from processing these events correctly.