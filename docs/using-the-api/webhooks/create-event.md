---
title: "Manage events"
description: "Managing new and existing rules via Codat Portal"
createdAt: "2019-02-20T11:20:32.835Z"
updatedAt: "2022-11-16T12:54:20.055Z"
---

## Adding an Endpoint
In order to start listening to messages sent through Svix, you will need to configure your  **endpoints**.

Adding an endpoint is as simple as providing a URL that you control and a list of  **event types**  that you want to listen to.

![add endpoint](https://docs.svix.com/assets/images/add-endpoint-6cbcc00b62087f2774cd90b965a3d197.png)

>Helpful Tip!
>
>If you don't have a URL or your service isn't quite ready to start receiving events just yet, just press the  **use Svix Play**  button to have a unique URL generated for you.
>
>You'll be able to view and inspect all operational webhooks sent to your Svix Play URL, making it effortless to get started.

If you don't specify any event types, by default, your endpoint will receive all events, regardless of type. This can be helpful for getting started and for testing, but we recommend changing this to a subset later on to avoid receiving unexpected messages.

### Testing your Endpoint
The easiest way to be more confident in your endpoint configuration is to start receiving events as quickly as possible.

That's why we have a "Testing" tab for you to send example events to your endpoint.

![testing endpoint](https://docs.svix.com/assets/images/testing-endpoint-3f325ed4f08a4b9c57c49a3dd8ef2e9f.png)

After sending an example event, you can click into the message to view the message payload, all of the message attempts, and whether it succeeded or failed.

## Webhook Signature Verification
Webhook signatures is your way to verify that webhook messages are sent by us. For a more detailed explanation, check out this article on [why you should verify webhooks](https://docs.svix.com/receiving/verifying-payloads/why).

### How to verify webhooks with Svix Libraries
Our webhook partner Svix offers a set of useful libraries that make verifying webhooks very simple. Here is a an example using Javascript:

```
import { Webhook } from "svix";

const secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
const headers = {
"svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",
"svix-timestamp": "1614265330",
"svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
};
const payload = '{"test": 2432232314}';

const wh = new Webhook(secret);
// Throws on error, returns the verified content on success
const payload = wh.verify(payload, headers);
```
For more instructions and examples of how to verify signatures, check out their [webhook verification documentation](https://docs.svix.com/receiving/verifying-payloads/how).

:::info Required permissions

You'll need to be an [Administrator](/configure/user-management/user-roles#administrator) or [Developer](/configure/user-management/user-roles#developer) user to create rules. [Analyst](/configure/user-management/user-roles#analyst) users can view events but not create or modify rules.

:::

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





## Create a new rule

1. Sign in to the [Codat Portal](https://app.codat.io).
2. In the navigation bar, select **Settings > Webhooks > Rules**.
3. Select **Create new rule**.
   The **Create new rule** modal is displayed.
4. From the **Rule type** dropdown, select the event you would like to be notified of. See [Rule types](/using-the-api/webhooks/core-rules-types) for more details of the events that trigger a webhook and the details included in the notification.
5. In the **Company** dropdown, select the company that you would like to monitor, or select **All companies** to make all companies trigger this rule.
6. By default, webhooks triggered by rules are shown in the Codat Portal, but you can also choose to send them by email or post them to a webhook. To do this:
    - In the **Email addresses to notify** box, enter a comma-separated list of email addresses that should receive the notification.
    - In the **Webhook notification URL** box enter the URL that you would like webhook details posted to. See [Rule types](/using-the-api/webhooks/core-rules-types) for more details.
7. Select **Save changes**.

## Update an existing rule

You can update the company you want to monitor, or the notification methods you want to use for a rule at any time.

1. Follow steps 1 and 2 in [Create a new rule](/using-the-api/webhooks/core-rules-create#create-a-new-rule).
2. On the **Rules** page, find the rule you're interested in and click its **Edit** icon.
3. Update the rule as required.
4. Select **Save changes**.
