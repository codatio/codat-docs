---
title: "Webhooks: introducing transformations"
date: "2025-01-31"
tags: ["Product", "Update"]
authors: dcoplowe
---

Modify webhook properties in-flight with our new **webhook transformations** feature before they are sent to your application.

<!--truncate-->

## What's new?

We’ve introduced **webhook transformations**, allowing you to modify webhook properties before they are sent to your application. For example, you can:

- Change the webhook's HTTP method (`POST` or `PUT`).
- Redirect webhooks to a different target URL.
- Modify the webhook event schema.
- Cancel webhook delivery based on specific conditions.

![An example of a webhook transformation](/img/use-the-api/webhooks-transformation-edit.png)

## Who is this relevant for?

This update is useful for developers and teams who:

- Need to customize webhook event schemas to match their system’s requirements.
- Want to reroute webhooks dynamically.
- Require fine-grained control over webhook dispatching, such as filtering events based on company tags.

## How to get started?

1. In the [Codat Portal](https://app.codat.io/monitor/events), go to **Monitor > Webhooks > Events** and select an endpoint.
2. In the detailed endpoint view, click **Advanced**, then **Edit transformations**.
3. Modify the `WebhookObject` to adjust the properties you wish to change.
4. Save your changes — your transformation is now active.

For a step-by-step guide, read how to [Transform webhook properties](/using-the-api/webhooks/create-consumer#transform-webhook-properties).
