---
title: "Webhook service at Codat"
sidebar_label: "Overview"
hide_table_of_contents: true
description: "Introduction to Codat's robust and streamlined webhook messaging solution"
---

![Webhooks at Codat](/img/updates/240306-webhooks-announcement.png)

_Webhooks_ are an automated way for an app to notify you when a specific event occurs. At their core, they are a `POST` request with a payload that is sent to a unique URL of an endpoint that you determine. 

We refer to the HTTP endpoints that you configure to subscribe to Codat's events as _webhook consumers_. A `200` response from the consumer indicates that the webhook message was successfully received. 

With our webhook service, you can leverage the following benefits:

- Automatic retries of failed webhook deliveries according to our [retry schedule](/using-the-api/webhooks/troubleshooting#retry-policy)
- Detailed event logging with a full overview of delivery attempts and payloads
- Make your solution robust with easy event replay to reprocess past events or retry failed events
- Mock event functionality to simplify your testing and development

:::note Using our legacy webhooks? 

If you have been using our webhooks before March 6, 2024, we recommend migrating them to the new service.
See how you can migrate in our [migration guide](/using-the-api/webhooks/migration-guide).

You can view the old webhook service documentation here: 

- [View rule types](/using-the-api/webhooks/legacy/core-rules-types)
- [Create or update rules](/using-the-api/webhooks/legacy/core-rules-create)
- [Listen to events](/using-the-api/webhooks/legacy/core-rules-webhooks)
- [Webhook security](/using-the-api/webhooks/legacy/core-rules-webhooksecurity)
- [Receive webhook events as emails](/using-the-api/webhooks/legacy/receive-webhooks-as-email)
:::

---

## Read next

- [Event types](/using-the-api/webhooks/event-types)
- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)
- [Migration guide](/using-the-api/webhooks/migration-guide)
- [Troubleshooting](/using-the-api/webhooks/troubleshooting)
