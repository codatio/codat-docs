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

### Usage-based limits

If a client breaks the limits, it usually means there is an overlooked issue in their system or product. We will get in touch with the client to discuss possible improvements to reduce the number of calls. This will enhance the Codat experience for the client and their users. 

### Client-based limits

:::note What is an ACC?

ACC, or Active Connected Company, is a company that has an active, linked, and syncing connection to an underlying platform.

:::

Client-based limits set an upper limit on the number of configuration changes in a day. Codat sets these limits at: 

- 1,000 requests per day, or
- 100 requests per day per ACC, **whichever is greater**. 

These transactions are intended to be low volume. Therefore, a high number of requests in this area indicates potentially erroneous behavior and should trigger contact with the client. 

:::tip Client rate limit reset

Client-based limits are calculated daily and reset at 00:00 UTC each day. You can use our dedicated [ClientRateLimitReset](/using-the-api/webhooks/event-types) webhook event type to be notified when the client-based limit resets.

:::


### Company-based limits

Company-based limits set an upper limit on the number of data-based requests an account can make against a company per day. This is to reduce the operational load. Codat sets these limits on the **ACC level** at: 

- 1,000 requests per day, and
- 10 concurrent requests.

Note that these limits represent a global request count.

:::tip Company rate limit reset

Company-based limits are calculated daily and reset at 00:00 UTC each day. 

:::

:::note Calculating rate limits: example 1

Account A has a production client with 2 active companies. The client-based daily limit is calculated as the greater of `(2*100 || 1,000)`, resulting in 1,000 allowed requests. Adding 1,000 \* 2 ACCs for the company-based limit gives Account A a total limit of 3,000 requests. 

They choose to make 1,100 requests against both companies for a total of 2,200 requests and have 800 requests remaining for the day. 

They then link a third company. Because the same daily total of requests still applies, they can use the remaining 800 requests to make calls against the third company.

When the rate limit resets the following day, the company limit will increase to 1,000 \* 3 = 3,000 to account for the newly linked company. This gives Account A a total limit of 4,000 requests.

:::

:::note Calculating rate limits: example 2

Account B has a production client with 140 active companies. The client-based limit is calculated as the greater of `(140* 100 || 1,000)`, resulting in 14,000 allowed requests. The company-based limit is calculated as `140*1,000`, resulting in 140,000 allowed requests. 

This gives Account B a total limit of 154,000 requests.

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