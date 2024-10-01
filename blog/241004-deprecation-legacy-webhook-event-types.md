---
title: "2025-01-10: Deprecation of legacy webhook event types"
date: "2024-10-04"
tags: ["Deprecation"]
authors: dcoplowe
---

On **January 10, 2025**, we will deprecate the rule-based event types following the release of our [new webhook event types](/updates/241004-new-webhook-event-types).

<!--truncate-->

The new event types provide more contextual information in the webhook payload and are better suited for stateless architectures.

## Action Required

To avoid disruption in receiving webhook notifications, follow our [migration guide](/using-the-api/webhooks/migrating-to-new-event-types) to switch to the new event types.

### Event types being deprecated

- [Company data connection status changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#company-data-connection-status-changed)
- [New company synchronized](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized)
- [Data sync completed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#data-sync-completed)
- [Dataset data changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#dataset-data-changed)
- [Dataset status has changed to an error state](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#dataset-status-has-changed-to-an-error-state)
- [Push operation status has changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#push-operation-status-has-changed)
- [Push operation has timed out](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#push-operation-has-timed-out)
- [Sync Connection Deleted](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#sync-connection-deleted)
- [Expenses sync completed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-completed)
- [Expenses sync failed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-failed)
- [Client rate limit reached](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reached)
- [Client rate limit reset](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reset)

## Expected Impact

If you do not migrate by **January 10, 2025**, webhook notifications will no longer be delivered.