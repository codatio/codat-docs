---
title: "Idempotency"
description: "Understand how to make idempotent requests"
---

## What is idempotency

Idempotency means that multiple identical requests should have the same outcome as a single request. For example, if you submit the same POST request to create an invoice multiple times with an idempotency key, only one invoice should be created. This helps prevent duplicate records from being created if a request needs to be retried due to network issues or timeouts.

## Idempotency in Codat requests

Codat allows request idempotency on `POST` or `PATCH` requests through the inclusion of an `Idempotency-Key` header with a GUID value. When this is included Codat will cache the initial response for use on subsequent requests with the same `Idempotency-Key` header. This cache lasts 90 minutes. This is available across our API on all endpoints that support `POST` or `PATCH`.

### 💡 Tips and traps

- The `Idempotency-Key` must be a unique GUID.
- The request must have either `POST` or `PATCH` methods.
- There must be only one `Idempotency-Key` header included.
- A request that reuses an `Idempotency-Key` header with a different body will result in a `422 Unprocessable Content` status code.
- A request that with an `Idempotency-Key` that matches an existing request that's still in progress will result in a `409 Conflict` status code.