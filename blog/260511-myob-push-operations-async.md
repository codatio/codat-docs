---
title: "2026-05-11: MYOB push operations move to async"
date: "2026-05-07"
tags: ["Deprecation", "MYOB"]
authors: annasavinovacodat
---

On **May 11, 2026**, MYOB push operations will move from synchronous to asynchronous, aligning MYOB with the behavior of every other Codat integration.

<!--truncate-->

MYOB is currently the only integration where push operations return their final status synchronously. Migrating it to async brings MYOB in line with the rest of our integrations and simplifies our underlying push infrastructure, so we can continue to invest in reliability across the platform.

## What's changing

Today, when you push to MYOB, the API returns a final `Success` or `Failed` status immediately on the initial request.

From **May 11, 2026**, push requests to MYOB will return a `Pending` status on submission, and resolve to `Success` or `Failed` once the operation completes — the same pattern as every other integration.

The change only affects how you confirm the outcome of a push. Pushes themselves will continue to work as before.

## Action required

To track the final status of a push operation to MYOB, use one of the following:

- **Push webhooks** (recommended) — subscribe to the `{dataType}.write.successful` and `{dataType}.write.unsuccessful` events. See [Consume the data types write webhook](/using-the-api/push#consume-the-data-types-write-webhook).
- **Status endpoints** — poll the [Get push operation](/using-the-api/push#monitor-operation-status) endpoint using the `pushOperationKey` returned in the initial response.

If you already push to other Codat integrations, you'll likely already have this in place.

## Expected impact if no action is taken

If your integration relies on receiving a final `Success` or `Failed` status directly from the initial push response, that status will instead be `Pending` from **May 11, 2026** — and you won't be able to confirm whether the operation ultimately succeeded or failed without consuming the webhook or polling the status endpoint.

Pushes to MYOB will continue to be processed.

If you have questions or need help migrating, reach out to your Codat representative or our support team.
