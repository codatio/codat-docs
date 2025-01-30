---
title: "Introducing webhook transformations"
date: "2025-01-31"
tags: ["Product", "Update"]
authors: dcoplowe
---

![An example of a webhook transformation](/img/use-the-api/webhooks-transformation-example.png)

Modify webhook properties in-flight with our new **Webhook transformations** feature.
You can now dynamically adjust HTTP methods, target URLs, and message schemas before webhooks are sent to your application.

<!--truncate-->

## What's new?

We’ve introduced **Webhook transformations**, allowing you to modify webhook properties before they reach your application.  
With this update, you can:

- Change the webhook's **HTTP method** (`POST` or `PUT`).  
- Redirect webhooks to a different **target URL**.
- Modify the webhook **event** schema.
- **Cancel** webhook delivery based on specific conditions.  

## Who is this relevant for?

This update is useful for developers and teams who:
- Need to customize webhook event schemas to match their system’s requirements.
- Want to reroute webhooks dynamically.
- Require fine-grained control over webhook dispatching, such as filtering events based on company tags.

## How to get started?

1. In the [Codat Portal](https://app.codat.io/monitor/events), go to **Monitor > Webhooks > Events** and select an endpoint.  
2. In the **Transformations** section, click **Edit transformations**.  
3. Modify the `WebhookObject` to adjust the method, URL, event payload, or cancel conditions.  
4. Save your changes—your transformation is now active.

For a step-by-step guide, check out our documentation on [Webhook transformations](/using-the-api/webhooks/create-consumer#transform-webhook-properties-in-flight).
