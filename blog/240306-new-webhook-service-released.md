---
title: "🚀 Introducing our new webhooks service 🚀"
date: "2024-03-06"
tags: ["Product", "Update"]
authors: dcoplowe
---
We're thrilled to unveil our latest platform update that simplifies your development experience: our brand-new webhooks service!

<!--truncate-->

![Announcement of new webhooks service](/img/updates/240306-webhooks-announcement.svg)

Say goodbye to complex development processes and hello to streamlined efficiency with our best-in-class solution. Here's what you can expect from our new webhooks service:

⚙️ **Smart retries**: We automatically retry missed events and failed webhook deliveries, ensuring your crucial messages reach their destination without hassle.

📝 **Detailed event logging**: Use our detailed delivery attempt overview to gain deep insights into your webhook events, resolve issues, and view event payloads.

🔄 **Event replay**: We make it a breeze to replay successful and unsuccessful event deliveries, enabling you to recover from any system failures on your end.

🧪 **Mocked events**: Test, debug, and refine your webhook consumers with ease using mocked events. Select the event type you want to trigger and we'll deliver it to your application. 

🛡️ **Improved stability**: Our webhooks service is engineered for resilience and delivers unmatched performance and uptime to support your critical operations.

#### Migrating to the new service

Check out our [migration guide](/using-the-api/webhooks/migration-guide) to see if you can move over and how to request the move. Alternatively, have a look at our [webhooks documentation](/using-the-api/webhooks/overview) to learn more about the service.

#### Deprecation of `/rules/alerts` endpoints

As part of deploying our new webhooks service, we are deprecating the `/rules/alerts` endpoints. Learn more about this deprecation and required actions in the [dedicated deprecation notice](/updates/240306-deprecation-rules-alerts).
