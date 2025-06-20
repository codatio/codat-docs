---
title: "2025-01-10: Deprecation of company-specific webhooks"
date: "2024-10-04"
tags: ["Deprecation"]
authors: dcoplowe
---

On **January 10, 2025**, we will deprecate company-specific webhooks delivered by our legacy rule services and replace them with recently introduced [company tags](/updates/240926-introducing-company-tags).

<!--truncate-->

This change is designed to simplify the way we handle metadata in webhook payloads.

## Action required

If you are currently using company-specific webhooks and want to avoid disruption in receiving webhook notifications:

- Move all metadata previously passed via URL paths into the `tags` property in the [company schema](/platform-api#/schemas/Company).
  See [Add metadata to a company](/using-the-api/managing-companies#add-metadata-to-a-company).
- Update all webhook consumers to retrieve metadata from the `payload.referenceCompany.tags` property.
  See [Filter webhooks by company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

Once updated, you will be able to access metadata from the `tags` property shown below:

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
```

## Expected impact

If no action is taken by **January 10, 2025**, you will no longer receive company-specific webhook notifications because the legacy rule services that deliver them will be sunset on **January 10, 2025**.
