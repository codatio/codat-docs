---
title: "2025-01-10: Deprecation of company-specific webhooks"
date: "2024-10-04"
tags: ["Deprecation"]
authors: dcoplowe
---
On **January 10, 2025**, we will deprecate company-specific webhooks in favor of our newly introduced [company tags](/updates/240926-introducing-company-tags).

<!--truncate-->

This change is designed to simplify how metadata is handled in webhook payloads.

## Action Required

To avoid disruption in receiving webhook notifications, you must move all metadata previously passed via URL paths into the `tags` property in the [company schema](/platform-api#/schemas/Company). Additionally, update all webhook consumers to retrieve metadata from the `payload.referenceCompany.tags` property. Once updated, the you will be able to access metadata from the tags property shown below:

```json
{
  "id": "ba29118f-5406-4e59-b05c-ba307ca38d01",
  "type": "connection.created",
  "generatedDate": "2024-08-08T17:10:34.015Z",
  "payload": {
    "referenceCompany": {
      "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
      ...
      "tags": {
        "customerRegion": "us",
        "uid": "335a086e-8563-4b03-94e3-39544225ecb6"
      }
    },
    ...
  }
}

Adding tags to a company can be done when [creating](/platform-api#/operations/create-company) or [updating](/platform-api#/operations/update-company) a company.

## Expected Impact

If you do not migrate by **January 10, 2025**, webhook notifications will no longer be received as this is delivered by the legacy rule services that is being sunset on **January 10, 2025**.