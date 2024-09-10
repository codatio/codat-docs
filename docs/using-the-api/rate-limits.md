---
title: "Rate limits"
description: "Learn about Codat's API rate limits and their usage"
---

## Third-party rate limits

Many of the financial platforms that Codat integrates with impose rate limits on the use of their APIs. These limits are enforced and reported separately by each API.

Handling rate limits is a challenging aspect of building financial integrations. With Codat, you benefit from our bespoke rate limit handling across all supported providers. This gives you the maximum possible access to your SMB users' contributed data.

## Codat rate limits

Rate limits listed on this page are enforced by `api.codat.io`, and it is not possible to make API calls that exceed the quota.

Codat will return a `429` status code for all requests to the API that are received while rate limiting is active. The body of the response will look like any other [error that gets returned by Codat](/using-the-api/errors).

The response will also include a `Retry-After` header that will advise your calling system when the current rate limiting will deactivate.

### How rate limits are calculated 

Codat calculates its rate limits based on the number of active connected companies (ACCs).
The rate limits are as follows:

- `1,000 + 1,000 x number of ACCs` requests per day
- 10 concurrent requests per ACC

For example, if you have 100 ACCs, you can make up to 101,000 requests per day.

:::note What is an ACC?

ACC, or Active Connected Company, is a company that has an active, linked, and syncing connection to an underlying platform.

:::

### Why am I exceeding my quota?

If you are regularly exceeding our limits, it usually means there is an overlooked issue in your application or product.
We will get in touch with the client to discuss possible improvements to reduce the number of calls.
This will enhance the Codat experience for you and your customers. 

:::tip Client rate limit reset

Client-based limits are calculated daily and reset at 00:00 UTC each day. You can use our dedicated [ClientRateLimitReset](/using-the-api/webhooks/event-types) webhook event type to be notified when the client-based limit resets.

:::

### Rate limit headers

Every response from our API includes a set of headers that show how your use compares to your rate limits: 
- `X-Rate-Limit-Limit` tells you the maximum number of requests for the current quota period.
- `X-Rate-Limit-Remaining` tells you the number of remaining requests you have in the quota period.
- `X-Rate-Limit-Reset` tells you the date when the quota will be reset.

Once the limit is exceeded, all further requests will also contain the standard `Retry-After` header that informs your system when the request can be performed next. 

## Hard DoS-based limits

Hard DoS-based limits are set to protect against bad actors and do not prevent sensible usage. Codat sets these limits at: 

- 1,000 requests per minute from any IP Address.

We may block an IP's traffic without warning if, in our view, it significantly interferes with the operation of our API.

---

## Read next

- [Optimize calls to our API](/using-the-api/optimizing-api-calls)