---
title: "Troubleshooting"
sidebar_label: "Troubleshooting"
description: "Use webhooks to build responsive and resilient applications on Codat data."
---

## Retries
Svix attempts to deliver each webhook message based on a retry schedule with exponential backoff.

### The schedule
Each message is attempted based on the following schedule, where each period is started following the failure of the preceding attempt:

-   Immediately
-   5 seconds
-   5 minutes
-   30 minutes
-   2 hours
-   5 hours
-   10 hours
-   10 hours (in addition to the previous)

If an endpoint is removed or disabled delivery attempts to the endpoint will be disabled as well.

For example, an attempt that fails three times before eventually succeeding will be delivered roughly 35 minutes and 5 seconds following the first attempt.

### Disabling failing endpoints
If all attempts to a specific endpoint fail for a period of 5 days, the endpoint will be disabled and a webhook (`EndpointDisabledEvent`) will be sent to your account (not to the failing endpoint).

### Manual retries
You can also use the application portal to manually retry each message at any time, or automatically retry ("Recover") all failed messages starting from a given date.

## Troubleshooting Tips
There are some common reasons why your webhook endpoint is failing:

### Not using the raw payload body
This is the most common issue. When generating the signed content, we use the raw string body of the message payload.

If you convert JSON payloads into strings using methods like stringify, different implementations may produce different string representations of the JSON object, which can lead to discrepancies when verifying the signature. It's crucial to verify the payload exactly as it was sent, byte-for-byte or string-for-string, to ensure accurate verification.

### Missing the secret key
From time to time we see people simple using the wrong secret key. Remember that keys are unique to endpoints.

### Sending the wrong response codes
When we receive a response with a 2xx status code, we interpret that as a successful delivery even if you indicate a failure in the response payload. Make sure to use the right response status codes so we know when message are supposed to succeed vs fail.

### Responses timing out
We will consider any message that fails to send a response within {timeout duration} a failed message. If your endpoint is also processing complicated workflows, it may timeout and result in failed messages.

We suggest having your endpoint simply receive the message and add it to a queue to be processed asynchronously so you can respond promptly and avoiding getting timed out.

## Failure Recovery

### Re-enable a disabled endpoint
If all attempts to a specific endpoint fail for a period of 5 days, the endpoint will be disabled. To re-enable a disabled endpoint, go to the webhook dashboard, find the endpoint from the list and select "Enable Endpoint".

### Recovering/Resending failed messages

#### Why Replay

-   If your service has downtime
-   If your endpoint was misconfigured

If you want to replay a single event, you can find the message from the UI and click the options menu next to any of the attempts.

![resend message](https://docs.svix.com/assets/images/resend-single-a4fb6e65f27f27e5700becb523135c2f.png)

From there, click "resend" to have the same message send to your endpoint again.

If you need to recover from a service outage and want to replay all the events since a given time, you can do so from the Endpoint page. On an endpoint's details page, click  `Options > Recover Failed Messages`.

![recover modal](https://docs.svix.com/assets/images/replay-modal-fa510bd82e4eccbbb01df28581ad8901.png)

From there, you can choose a time window to recover from.

For a more granular recovery - for example, if you know the exact timestamp that you want to recover from - you can click the options menu on any message from the endpoint page. From there, you can click "Replay..." and choose to "Replay all failed messages since this time."

## IP Whitelist
In case your webhook receiving endpoint is behind a firewall or NAT, you may need to allow traffic from Svix's IP addresses.

Codat's webhook rules are served from static IP addresses. This means that you are able to apply an allowlisting rule to grant network access to these notifications.

20.77.82.168/32
51.142.76.22/32

This is the full list of IP addresses that webhooks may originate from grouped by the region of the sender:

### US

```
44.228.126.217
50.112.21.217
52.24.126.164
54.148.139.208
```

### EU

```
52.215.16.239
54.216.8.72
63.33.109.123
```

### India (Private Beta)

```
13.126.41.108
15.207.218.84
65.2.133.31
```

>IMPORTANT
>
>Static source IPs are not guaranteed for the basic [pricing tiers](https://www.svix.com/pricing/).

## Logs and activities

