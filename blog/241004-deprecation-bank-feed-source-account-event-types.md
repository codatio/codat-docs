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

## Action required

If you are currently using `bankFeeds.sourceAccount.connected` and `bankFeeds.sourceAccount.disconnected` webhook event types, you will need to update your webhook consumer that listens to these event types to handle the updated schema definition.

## Expected impact

If no action is taken to handle the updated schema definition by **January 10, 2025**, receiving the `bankFeeds.sourceAccount.connected` and `bankFeeds.sourceAccount.disconnected` event types to your webhook consumer will result in deserialization errors. This means your application will not process these events correctly.
