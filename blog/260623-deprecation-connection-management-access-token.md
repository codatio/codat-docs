---
title: "Upcoming YYYY-MM-DD: Deprecation of the connection management access token endpoint"
date: "2026-06-23"
tags: ["Deprecation"]
draft: true
authors: rachelcodat
---

<!--
TODO before publishing:
  1. Agree the sunset date with the team (PEP-1751 acceptance criteria), following the
     deprecation schedule in the change policy:
     https://docs.codat.io/introduction/change-policy#deprecation-schedule
  2. Replace every YYYY-MM-DD placeholder below (title + body) with the agreed date.
  3. Set `date` to the publication date.
  4. Remove the `draft: true` line.
  5. Confirm with #team-documentation before publishing.
-->

On YYYY-MM-DD, Codat will deprecate the `connectionManagement/accessToken` endpoint used to generate company-specific connection management access tokens.

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

After YYYY-MM-DD, calls to the deprecated endpoint will return a `404` error.

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
