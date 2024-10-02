---
title: "Webhooks update: new event types"
date: "2024-10-04"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

We're excited to introduce our improved webhook event types. They offer more contextual information within the webhook message and provide better support for stateless architectures. 

<!--truncate-->

## What's new?

We are replacing our existing rule types with an updated set of event types. They add context to our webhooks, allow you to increase precision of your webhook messages, and provide detailed insights into the trigger events. 

:::tip New event types
Check out the full range of our new [webhook event types](/using-the-api/webhooks/event-types).
:::

We have also adopted the payload structure recommended by the [Standard Webhooks specification](https://github.com/standard-webhooks/standard-webhooks/blob/main/spec/standard-webhooks.md#payload-structure). As a result, here's what's new:

1. **Standardized top-level schema**

  Event type schemas now conform to the same structure. It ensures the top-level properties are the same between all event types, making ingestion simpler. 
  
  ```json title="Default schema structure"
  {
    "id": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
    "eventType": "company.created",
    "generatedDate": "2024-09-29T20:26:10.344522Z",
    "payload": {
      // Properties specific to event types
    }
  }
  ```

2. **Full payloads**

  We've chosen to support full webhook payloads, providing complete data in each payload. This lets our webhooks to function more like a reverse API.

3. **Reference company property**

Webhooks that include information about a specific company now have a `referenceCompany` property in their payload. It provides access to the company’s ID, name, description, links, and tags. 
  
Tags are key-value pairs you can define when creating or updating a company. Use them to pass metadata, such as a foreign key, to your webhook consumer. Start with our documentation to [Add tags to a company](/using-the-api/managing-companies#add-metadata-to-a-company) and [Filter webhooks by company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).
  
  ```json title="Reference company property"
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
              "yourUserDefinedKey": "yourUserDefinedValue",
          }
      },
      // Properties specific to event types
    }
  }
  ```

## Who is this relevant for?

Any client currently using our webhooks or clients looking to start using our webhook service. 

## How to get started?

- Already using our legacy rules webhooks? [Learn how to migrate to new event types](/using-the-api/webhooks/migrating-to-new-event-types).
- Implementing webhooks for the first time? [Learn how to use our webhook service](/using-the-api/webhooks/create-consumer).
