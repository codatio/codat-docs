---
title: "Upcoming 2023-07-10: Deprecation of the Company metrics endpoint"
date: "2023-07-10"
tags: ["Deprecation"]
authors: pzaichkina
---

On July 10, 2023, Codat will deprecate the `GET /metrics/companies` endpoint previously used to display the status of companies on the Portal dashboard. 

<!--truncate-->

It provided the following status metrics:
- Currently linked,
- No longer linked,
- Not yet linked,
- All time linked. 

The internal logic of the dashboard has changed, and the endpoint is no longer in use. After the change is implemented, any requests made to `GET /metrics/companies` will return a 404 error. 

## Action required​

If you are using the current `GET /metrics/companies` endpoint to perform monitoring outside of the Portal dashboard, make sure to use alternative API calls instead. You can obtain data connection statuses from the `GET /companies` instead. 

## Expected impact if no action is taken​

After July 10, 2023, calls made to the `GET /metrics/companies` endpoint will return a `404 Endpoint deprecated` error.

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/other/portal/developers), or read our [change policy](https://docs.codat.io/introduction/change-policy).

:::