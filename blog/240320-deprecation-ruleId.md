---
title: "Upcoming 2024-07-10: Deprecation of RuleId in rules webhooks"
date: "2024-03-26"
tags: ["Deprecation"]
authors: dcoplowe
---

On **July 10, 2024**, all clients will be migrated onto our [new webhooks service](/updates/240306-new-webhook-service-released). As part of this migration, the `RuleId` webhook property will be deprecated in all our existing webhook payloads.

<!--truncate-->

The `RuleId` property will be deprecated in the following webhook rule schemas:

- [Company data connection status changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#company-data-connection-status-changed)
- [New company synchronized](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized)
- [Data sync completed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#data-sync-completed)
- [Dataset data changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#dataset-data-changed)
- [Dataset status has changed to an error state](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#dataset-status-has-changed-to-an-error-state)
- [Push operation status has changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#push-operation-status-has-changed)
- [Push operation has timed out](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#push-operation-has-timed-out)
- [Account categories updated](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#account-categories-updated)
- [Sync Connection Deleted](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#sync-connection-deleted)
- [Expenses sync completed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-completed)
- [Expenses sync failed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-failed)
- [Client rate limit reached](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reached)
- [Client rate limit reset](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reset)

As part of the move to the new webhooks service, the `RuleId` is no longer relevant and should not be used.   

### Action required

Review and update your application logic to remove any dependencies on the `RuleId`. This will help prevent any disruptions to your integration with Codat.

You should use `RuleType` to identify what event a given webhook corresponds with.

### Expected impact if no action is taken

If no action is taken, after **July 10, 2024**, your application will continue to receive events, but the `RuleId` will not be populated.
Any application logic using the `RuleId` property will function following your unhappy path for `RuleId` logic.
Depending on your implementation, this may impact your processing Codat's webhooks. 
