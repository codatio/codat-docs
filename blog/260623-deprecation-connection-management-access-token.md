---
title: "Upcoming 2026-10-12: Deprecation of the connection management access token endpoint"
date: "2026-06-23"
tags: ["Deprecation"]
draft: true
authors: rachelcodat
---

<!--
TODO before publishing:
  1. Confirm the 2026-10-12 sunset date with the team (PEP-1751 acceptance criteria).
     This is the Q4 2026 enforcement date (first working day on/after Sat 10 Oct).
     The changelog entry MUST be live before the early-July quarterly developer email
     (practically ~7 July 2026) to make the Q4 window; otherwise the next date is
     2027-01-11. See https://docs.codat.io/using-the-api/change-policy#deprecation-schedule
  2. Set `date` to the publication date.
  3. Remove the `draft: true` line.
  4. Add a corresponding entry to the deprecations Google Calendar.
  5. Confirm with #team-documentation before publishing.
-->

On 2026-10-12, Codat will deprecate the `connectionManagement/accessToken` endpoint used to generate company-specific connection management access tokens.

<!--truncate-->

Codat now supports a single, global company access token that provides seamless access across multiple products. To improve efficiency and consistency, we are deprecating the older connection-management-specific endpoint in favour of this global token.

The following endpoint will be deprecated:

```http
GET /companies/{companyId}/connectionManagement/accessToken
```

## Action required

If you are using the endpoint above, you will need to instead use the global company access token endpoint:

```http
GET /companies/{companyId}/accessToken
```

The replacement endpoint returns an access token in the same way and requires no additional configuration. Update your integration to call the new endpoint ahead of the deprecation date.

## Expected impact if no action is taken

After 2026-10-12, calls to the deprecated endpoint will return a `404` error.

```json
{
  "statusCode": 404,
  "service": "PublicApi",
  "error": "NotFound",
  "correlationId": "2b60a2bafedd3238702c2186a2dc833f",
  "canBeRetried": "Unknown",
  "detailedErrorCode": 0
}
```
