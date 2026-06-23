---
title: "Upcoming 2026-10-12: Deprecation of the connection management access token endpoint"
date: "2026-06-23"
tags: ["Deprecation"]
authors: rachelcodat
---

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

The access token is returned in the same `accessToken` field, so if you read that field you can switch to the new endpoint with no further changes. The replacement response additionally includes `expiresIn` (seconds until the token expires) and `tokenType` (for example, `Bearer`). Update your integration to call the new endpoint ahead of the deprecation date.

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
