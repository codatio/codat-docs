---
title: "Idempotency in Codat's API calls"
sidebar_label: "Idempotency"
description: "Understand how to make idempotent requests to Codat's POST and PATCH endpoints"
---

## What is idempotency?

In the context of API requests, idempotency ensures that the outcome of executing multiple identical requests has the same outcome as executing the request once. It prevents the creation of duplicate records if an API request needs to be retried due to network issues or timeouts.

For example, if you submit the same POST request to create an invoice multiple times, including an idempotency key in the request ensures only one invoice is created.

## Idempotency in Codat requests

You can include an `Idempotency-Key` header with a unique GUID value when making `POST` or `PATCH` requests to all of Codat's endpoints that support these methods. Codat will cache the initial response and will use it on all following requests with the same `Idempotency-Key` header. This cache lasts 90 minutes. 

### 💡 Tips and traps

- The `Idempotency-Key` header must be a unique GUID.
- You can only include a single `Idempotency-Key` header into your request.
- You can only include the `Idempotency-Key` header in `POST` or `PATCH` requests.
- It's not possible to reuse the same `Idempotency-Key` header across different requests.

#### Possible error codes

- A request that reuses the same `Idempotency-Key` header with a different body will result in a `422 Unprocessable Content` status code.
- A request that uses an `Idempotency-Key` matching an existing in-progress requestwill result in a `409 Conflict` status code.
