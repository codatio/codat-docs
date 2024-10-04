---
title: "2025-01-10: Deprecation of rules service (legacy webhooks)"
date: "2024-10-04"
tags: ["Deprecation"]
authors: dcoplowe
---

On **January 10, 2025**, we will deprecate our legacy rule service following the release of our new webhooks service released earlier this year and [new webhook event types](/updates/241004-new-webhook-event-types) released on October 4, 2024.

<!--truncate-->

The new service offers:

⚙️ **Smart retries**: We automatically retry missed events and failed webhook deliveries, ensuring your crucial messages reach their destination without hassle.

🔄 **Event replay**: We make it a breeze to replay successful and unsuccessful event deliveries, enabling you to recover from any system failures on your end.

📝 **Detailed event logging**: Use our detailed delivery attempt overview to gain deep insights into your webhook events, resolve issues, and view event payloads.

🧪 **Mocked events**: Test, debug, and refine your webhook consumers with ease using mocked events. Select the event type you want to trigger and we'll deliver it to your application. 

🛡️ **Improved stability**: Our new webhooks service is engineered for resilience and delivers unmatched performance and uptime to support your critical operations.

## Action required

If you are using our legacy rules service you will need to migrate over to the new webhooks service. Follow our [migration guide](/using-the-api/webhooks/migration-guide).

Additionally, you need to change your notification configuration to use the new event types instead. Follow our [migration guide](/using-the-api/webhooks/migrating-to-new-event-types) to switch to the new types.

### What if I'm using company-specific rules?

The updated webhook service now supports passing metadata about a company and filtering companies using company tags.

#### Passing metadata to a webhook consumer

You can now pass metadata about a company by setting tags on your companies.

For example, if you previously passed metadata via the webhook consumer's path, such as:

```
POST /region/{regionId}/accounts/{accountId}
```

You will now set this information when creating or updating a company:

```json
{
    "name": "{you company name}",
    "tags": {
        "region": "{regionId}",
        "account": "{accountId}"
    }
}
```

This metadata will then be passed to your webhook consumer in the `payload.referenceCompany.tags` property.

For more details, [read our guide on adding metadata to a company](/using-the-api/managing-companies#add-metadata-to-a-company).

#### Filter webhooks by company tags

To route specific companies to designated webhook consumers, use the company tags filter for your webhook consumer.

This feature allows you to send messages only for companies with tags that match any of the tags defined on the webhook consumer.

For additional information, [read about filtering webhooks by company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

## Expected impact

If no action is taken by **January 10, 2025**, you will no longer receive webhook notifications from us.
