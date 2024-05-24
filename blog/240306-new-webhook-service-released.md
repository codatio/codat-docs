---
title: "[Updated 2024-05-22] Introducing our new webhooks service"
date: "2024-03-06"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---
We're excited to announce our new webhooks service, making it easier for you to build resilient applications with Codat.

<!--truncate-->

![Announcement of new webhooks service](/img/updates/240306-webhooks-announcement.png)

Here's what you can expect when you upgrade to our new webhooks service:

⚙️ **Smart retries**: We automatically retry missed events and failed webhook deliveries, ensuring your crucial messages reach their destination without hassle.

🔄 **Event replay**: We make it a breeze to replay successful and unsuccessful event deliveries, enabling you to recover from any system failures on your end.

📝 **Detailed event logging**: Use our detailed delivery attempt overview to gain deep insights into your webhook events, resolve issues, and view event payloads.

🧪 **Mocked events**: Test, debug, and refine your webhook consumers with ease using mocked events. Select the event type you want to trigger and we'll deliver it to your application. 

🛡️ **Improved stability**: Our new webhooks service is engineered for resilience and delivers unmatched performance and uptime to support your critical operations.

#### Migrating to the new service

Check out our [migration guide](/using-the-api/webhooks/migration-guide) to see if you can upgrade and how to make the request. Alternatively, have a look at our [webhooks documentation](/using-the-api/webhooks/overview) to learn more about the service.

#### Deprecations

As part of releasing our new webhooks service, we have announced the following deprecations:

- [`/rules/alerts` endpoints](/updates/240306-deprecation-rules-alerts).
- [RuleId in rules webhooks](/updates/240320-deprecation-ruleId).
- [Rule-based email notifications](/updates/240405-deprecation-rule-based-email-notifications).
- Addition from 2024-05-22 update: [Pagination and querying the *List /rules endpoint*](/updates/240521-deprecation-pagination-querying-rules-endpoint).