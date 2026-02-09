---
title: "2025-01-10: Deprecation of legacy webhooks"
date: "2024-10-04"
tags: ["Deprecation"]
authors: dcoplowe
---

On **January 10, 2025**, we will deprecate our legacy rule-based webhooks service following the release of our new [webhooks service](/updates/240306-new-webhook-service-released) and [webhook event types](/updates/241004-new-webhook-event-types).

<!--truncate-->

Here's what our new webhooks service provides:

⚙️ **Smart retries**: We automatically retry missed events and failed webhook deliveries, ensuring your crucial messages reach their destination without hassle.

🔄 **Event replay**: We make it a breeze to replay successful and unsuccessful event deliveries, enabling you to recover from any system failures on your end.

📝 **Detailed event logging**: Use our detailed delivery attempt overview to gain deep insights into your webhook events, resolve issues, and view event payloads.

🧪 **Mocked events**: Test, debug, and refine your webhook consumers with ease using mocked events. Select the event type you want to trigger and we'll deliver it to your application. 

🛡️ **Improved stability**: Our new webhooks service is engineered for resilience and delivers unmatched performance and uptime to support your critical operations.

## Action required

If you are using our legacy rules-based webhook service, migrate to the new webhooks service following our [Migration guide for basic webhook setup](/using-the-api/webhooks/migration-guide).

Additionally, you need to change your notification configuration to use the new event types instead. Follow our [New event types migration guide](/using-the-api/webhooks/migrating-to-new-event-types) to switch to the new types.

### Company-specific rules

If you are currently using company-specific rules with our legacy service, use company tags with our updated webhook service instead. You can add metadata to a company using tags and filter the webhooks based on them.

#### Company information using tags

For example, if you previously passed company information via the webhook consumer's path (such as `POST /region/{regionId}/accounts/{accountId}`), you can use `tags` when creating or updating a company as follows:

```json
{
  "name": "{you company name}",
  "tags": {
    "region": "{regionId}",
    "account": "{accountId}"
  }
}
```

This metadata will then be passed to your webhook consumer in the `payload.referenceCompany.tags` property. See [Add metadata to a company](/using-the-api/managing-companies#add-metadata-to-a-company)

#### Filter webhooks based on tags

To route specific companies to designated webhook consumers, use the company tags filter for your webhook consumer. This allows you to send messages only for companies with tags that match **any** of the tags defined on the webhook consumer.

For additional information, see [Filter webhooks by company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

## Expected impact

If no action is taken by **January 10, 2025**, you will no longer receive webhook notifications from us.
