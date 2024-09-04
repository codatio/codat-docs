---
title: "Webhooks update: new event types"
date: "2024-09-29"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We're excited to announce our revamped webhook event types that better support stateless architectures and offer more contextual information within the payload. 

<!--truncate-->

## What's new?

### 18 either new or replacement event types

Checkout our new event types [here](/using-the-api/webhooks/event-types).
### Standard webhooks

Our webhooks are built according to [standard webhooks](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md#payload-structure) payload specification.
Here is what's new following the adoption of these standards:

#### Standardized top-level schema

Event types schemas now conform to the following default structure. This simplifies ingestion by ensuring the top-level properties are the same between all event types.

```json
{
  "id": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "eventType": "company.created",
  "generatedDate": "2024-09-29T20:26:10.344522Z",
  "payload": {
    // Event types specific properties
  }
}
```

#### Full payloads

Standard webhooks offer two options for the amount of data included in the payload: "thin" and "full."
Thin payloads contain only the record's ID, while full payloads include the entire record.
At Codat, we've chosen to support full payloads, enabling our webhooks to function more like a reverse API, providing complete data in each payload.

### Reference company property

Webhooks that include information about a specific company will have a `referenceCompany` property in their `payload`. This property provides access to the company’s ID, name, description, links, and tags. Tags are client-defined key-value pairs that can be set when creating or updating a company. They allow you to pass metadata, such as a foreign key, to your webhook consumer.

```json
{
    "id": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
    "eventType": "company.created",
    "generatedDate": "2024-09-29T20:26:10.344522Z",
    "payload": {
        "referenceCompany": {
        "id": "5e505642-9024-474d-9434-e5a44f505cc5",
        "name": "Toft stores",
        "description": "Looking to get a loan for refurd.",
        "links": {
            "portal": "https://app.codat.io/companies/{companyId}/summary"
        },
        "tags": {
            "clientDefinedKey": "clientDefinedValue",
        }
    },
    // Other event types specific properties
  }
}
```

## Who is this relevant for?

Any client currently using webhooks or clients looking to start using webhooks. 

## How to get started?

- Already using our legacy rules webhooks? [Learn how to migrate](/using-the-api/webhooks/migrating-to-new-event-types).
- Implementing webhooks for the first time? [Learn how to consume webhooks](/using-the-api/webhooks/create-consumer).