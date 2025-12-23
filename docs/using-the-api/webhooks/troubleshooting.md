---
title: "Webhook troubleshooting"
sidebar_label: "Troubleshooting"
description: "Learn how to replay failed events, resolve common issues, check webhook logs, and review our retry policy"
---

## Retry policy

With our webhook service, we attempt to deliver an event multiple times over a 28-hour period in case of a delivery failure. Our attempts are based on the following schedule, where each period starts once the preceding attempt fails:

- Immediately
- 5 seconds
- 5 minutes
- 30 minutes
- 2 hours
- 5 hours
- 10 hours
- Additional 10 hours

If you remove your webhook consumer endpoint, this will remove any remaining delivery attempts which are scheduled as part of the retry policy. In the case of disabled endpoints, no attempts will be made for the period that consumer endpoint remains disabled. If the endpoint is re-enabled, and there are still attempts scheduled, then these attempts will be sent.

:::tip Retry schedule examples

An event that fails three times and then succeeds will be delivered roughly 35 minutes and 5 seconds after the initial attempt.

A webhook consumer endpoint which is disabled after the 5 min retry, but then re-enabled approx 3 hours after that, should have 3 more message attempts scheduled, (5 hours, 10 hours, Additional 10 hours).

:::

## Message Status

- "Success" indicates that there was at least one attempt for that message that succeeded against it's endpoint.
- "Failure" indicates that all attempts were exhausted, and none of them succeeded.
- "Attempting" indicates that at least one attempt has been sent and there are further attempts scheduled as part of the retry policy.
- "Sending" indicates that the process of sending the webhook has begun but there have been no delivery attempts yet.

## Recover failed and missed messages

Our webhooks service can recover two types of messages:

- **Failed messages** occur when the message wasn't delivered even after all attempts to deliver the message have been exhausted. You can **recover** such messages.
- **Missed messages** occur when the endpoint has been disabled, the endpoint didn't exist at the time of sending the message (but created afterward), or the endpoint initially configured to listen to other event types and has been updated to include additional ones. You can **replay** such messages.

For each message to recover, we will attempt to send a new message, irrespective of whether or not there are further attempts scheduled as part of the retry policy.

If you want to replay or recover one or more messages in case of your app's downtime or incorrect configuration, you can do so in the [Codat Portal](https://app.codat.io/monitor/events).

Navigate to **Monitor > Webhooks > Events > Endpoints** to view your consumer endpoints and retry the messages manually or automatically.

You can also select **Monitor > Webhooks > Events > Logs** to view and filter messages in an event-agnostic list.

### Single message

If you want to replay a single event (i.e. resend a single message), click on the consumer endpoint on the **Webhook events** page and scroll to view its message attempts.

Next, click the triple-dot menu next to the message and click **Resend**. This will send the same message to your endpoint again.

![A fragment of the UI that displays a Resend button next to a failed attempt](https://docs.svix.com/assets/images/resend-single-a4fb6e65f27f27e5700becb523135c2f.png)

### Multiple messages

If you want to automatically recover all failed messages or resend missing messages for a certain date range, click on the consumer endpoint on the **Webhook events** page.

Then, click the triple-dot menu on the right and choose one of the applicable options. In the pop-up window, select the time period you want to recover messages for.

![A fragment of the UI that displays multiple message recovery options](/img/use-the-api/0046-multiple-message-retry.png)

For more granular date control, you can scroll to the endpoint's message attempts, click the triple-dot options menu of a specific message, and choose **Replay > Replay all failed messages since this time**.

During the recovery of multiple messages, all messages will be sent at once with some jitter applied in order to prevent overloading the webhook consumer endpoint. If your system has rate-limiting in place, the number of messages to recover may be an important consideration to avoid further failures. Please reach out to Codat Support if unsure.

### Idempotency

Whilst the Codat system's webhook functionality aims for exactly once delivery of a message, due to the fact messages can be resent, this isn't always possible to guarantee. If idempotency is important for your system, we recommend making use of the HTTP request's webhook-id header, which functions as an idempotency key for a given message, (i.e remains constant across all attempts to deliver that message), and can therefore be used by your system to ensure messages are not reprocessed.

## Endpoint failures

Your webhook consumer endpoint could fail due to a variety of reasons. Let's have a look at resolving the most common ones.

#### Disabled endpoint

If all delivery attempts to the endpoint fail for a period of 5 days, this endpoint will be disabled. To re-enable it, navigate to **Monitor > Webhooks > Events > Endpoints**, click to see the detailed view of the endpoint, then choose **Enable endpoint** in the triple-dot options menu.

![A fragment of the UI that displays the Enable endpoint option in the endpoint details view](/img/use-the-api/0048-enable-disabled-webhook.png)

#### Converted payload body

When generating the signed content of the message, we use the raw string body of its payload. If you convert JSON payloads into strings, the method you choose may produce different string representation of these payloads.

This can create discrepancies when verifying the webhook signature. To resolve, make sure to verify the payload exactly as it was sent.

For more information, see [Webhook signature verification](/using-the-api/webhooks/create-consumer#webhook-signature-verification).

#### Missing secret key

A message can fail if the wrong secret key is used. Keys are unique to endpoints, so make sure you are using the correct one.

#### Wrong response codes

When your webhook endpoint responds with a `2xx` status code, we consider this to be a successful message delivery even if the response payload indicates a failure. Ensure you're using the right response status codes so that we can interpret successes and failures correctly.

#### Response timeout

When your webhook endpoint fails to respond to the message within 15 seconds, we consider this to be a failed message.

We recommend you set up the endpoint to simply receive the message and respond to it, and add it to a queue for asynchronous processing. This will help avoid timeouts.

#### IP allowlist

If your webhook consumer endpoint is behind a firewall or NAT, the message can fail if the traffic from our IP addresses is blocked.

Codat's webhook messages are served from static IP addresses. Apply an allowlisting rule to grant network access to messages from this address:

```
4.159.114.108

20.117.190.191
```

## Logs and activity

If you need to track down a particular message that was sent to one of your endpoints, you can check the endpoint's detailed view page that has a filtered list of all messages sent to it. You can filter the list by event type and date.

Alternatively, you can navigate to **Monitor > Webhooks > Events > Logs** to view the full list of messages sent to all endpoints and each message's payload directly in the [Portal](https://app.codat.io/monitor/events).

Finally, you can view webhook activity in the graph form by going to **Monitor > Webhooks > Events > Activity**. The graph shows the last six hours of attempts to send you events.

---

## Read next

- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)
- [Migration guide](/using-the-api/webhooks/migration-guide)
