---
title: "Idempotency in Codat's API calls"
sidebar_label: "Idempotency"
description: "Understand how to make idempotent requests to Codat's POST and PATCH endpoints"
---

## What is idempotency?

In the context of API requests, idempotency ensures that the outcome of executing multiple identical requests has the same outcome as executing the request once. It prevents the creation of duplicate records if an API request needs to be retried due to network issues or timeouts.

For example, if you submit the same `POST` request to create an invoice multiple times, including an idempotency key in the request ensures only one invoice is created.

## Idempotency in Codat requests

You can include an `Idempotency-Key` header with a unique GUID value when making `POST` or `PATCH` requests to all of Codat's endpoints that support these methods. Codat will cache the initial response and will use it on all following requests with the same `Idempotency-Key` header. This cache lasts 90 minutes.

### 💡 Tips and traps

- The `Idempotency-Key` header must be a unique GUID.
- You can only include a single `Idempotency-Key` header into your request.
- You can only include the `Idempotency-Key` header in `POST` or `PATCH` requests.
- It's not possible to reuse the same `Idempotency-Key` header across different requests.

#### Possible error codes

- A request that reuses the same `Idempotency-Key` header with a different body will result in a `422 Unprocessable Content` status code.
- A request that uses an `Idempotency-Key` matching an existing in-progress request will result in a `409 Conflict` status code.

### Rate-limited requests and idempotency

Codat does not cache rate-limited responses against an `Idempotency-Key`. If a request returns a `429 Too Many Requests` status code - whether the limit was applied by [Codat](/using-the-api/rate-limits) or by the underlying financial platform - the response is not stored and the `Idempotency-Key` is released.

This means you can safely retry the request with the **same** `Idempotency-Key` once the rate limit clears. The retry is forwarded to its destination as a fresh attempt, rather than the earlier `429` being replayed from the cache.

:::tip Retrying after a 429

Use the `Retry-After` header to determine when to retry, and reuse your original `Idempotency-Key` so that the eventual successful write is still protected against duplication. For more detail, see [Rate limits](/using-the-api/rate-limits).

:::

This behavior is specific to `429` responses. All other responses are cached as usual and replayed for matching `Idempotency-Key` requests, including deterministic `4xx` errors such as `400`, `409`, and `422`, and `5xx` server errors.
