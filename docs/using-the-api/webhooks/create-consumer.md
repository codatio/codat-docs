---
title: "Manage webhook consumers to subscribe to events"
sidebar_label: "Manage webhook consumers"
description: "Create new webhook consumers and manage existing ones to receive webhooks using the Portal or the API"
---

## Create a webhook consumer

To start listening to messages we send you, configure your webhook consumer endpoints. Navigate to **Settings > Webhooks > Events > Configure consumer** and click **Add endpoint** to create a new consumer. 

Add the endpoint URL that you want to receive the messages, an optional description, and choose the events that this endpoint should listen to. If you don't specify the event types, your endpoint will receive all events by default. 

Browse our event catalog [in the Portal](https://app.codat.io/monitor/events) or in our [documentation](/using-the-api/webhooks/event-types) to choose the event types that suit your use case. 

:::tip Create a consumer via the API

You can create a webhook consumer programmatically using our [Create webhook](/platform-api#/operations/create-webhook-consumer) endpoint.

:::

:::caution IP allowlist

If your consumer endpoint is behind a firewall or NAT, make sure to allow messages from these addresses: `20.77.82.168/32` and `51.142.76.22/32`.
:::

### Custom headers

Once you created your webhook consumer, you can use its advanced functionality to add a custom header to the endpoint. This can be useful in the following scenarios:

- If you are securing your webhook endpoints with an authorization header, you can add it as a custom `Authorization` header.

- If you are using multiple Codat instances and need to differentiate between them, add a `X-Codat-ClientId` header with the required client ID. You can find and copy your client ID in the [Portal](https://app.codat.io) by clicking on your instance dropdown.

    ![A fragment of the UI that displays the dropdown with client instances and current client details](/img/use-the-api/0049-clientid-portal.png)

It's not possible to add a custom header via our API. Instead, navigate to **Monitor > Webhooks > Events** and click on the relevant endpoint to see its detailed view. Then, select the **Advanced** tab and add your headers to the custom header section. 

![A fragment of the webhook UI that displays the detailed endpoint view with two custom headers added to it](/img/use-the-api/0050-custom-headers-section.png)

## View webhook consumers

In the [Codat Portal](https://app.codat.io/monitor/events), navigate to **Monitor > Webhooks > Events** to see the list of all consumer endpoints you have configured. 

Alternatively, you can use the [List webhooks](/platform-api#/operations/list-webhook-consumers) endpoint to return a list of all consumers that currently exist for your client. 

## Delete webhook consumers

In the [Codat Portal](https://app.codat.io/monitor/events), navigate to **Monitor > Webhooks > Events** to see the list of your webhook consumers. Click on the one you want to delete, then click on the triple-dot options menu and choose **Delete**. 

Alternatively, you can use the [Delete webhook](/platform-api#/operations/delete-webhook-consumer) endpoint to delete an existing webhook consumer. You need to provide its valid `webhookId` as a parameter. 

## Test a webhook consumer

When adding a webhook consumer endpoint, you may want to test it with an example event to confirm its configuration. Once you have [created the endpoint](/using-the-api/webhooks/create-consumer#create-a-webhook-consumer), click on it to see the detailed view, and navigate to the **Testing** tab. 

Next, choose the example event you want to send and click **Send example**. Once it's sent, you can click into the message to view its payload, attempts, and status. 

:::tip Troubleshoot failed messages

There are many reasons a message to your endpoint could fail. Have a look at our [troubleshooting guide](/using-the-api/webhooks/troubleshooting) to resolve the most common issues that occur. 

:::

## Webhook signature verification

A webhook signature is your way to verify that the messages are sent by Codat and helps you avoid impersonation or replay attacks. We sign every webhook and its metadata with a unique key for each endpoint and include timestamps for when the message attempt occurred.

You can use this signature to verify that the message truly came from Codat and process it. Our webhook service partner provides instructions, examples, and libraries in their [webhook verification documentation](https://docs.svix.com/receiving/verifying-payloads/how).

---

## Read next

- [Event types](/using-the-api/webhooks/event-types)
- [Migration guide](/using-the-api/webhooks/migration-guide)
- [Troubleshooting](/using-the-api/webhooks/troubleshooting)