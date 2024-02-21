---
title: "Manage webhook consumers to subscribe to events"
sidebar_label: "Manage webhook consumers"
description: "Create new webhook consumers and manage existing ones to receive webhooks using the Portal or the API"
---


## overview

A webhook consumer is a HTTP endpoint that developers can configure to subscribe to Codat's supported event types.

## Create a webhook consumer



For example, if you receive webhooks from Acme Inc., you can structure your URL like:  `https://www.example.com/acme/webhooks/`.


### Custom headers

In order to start listening to messages sent through Svix, you will need to configure your  **endpoints**.

Adding an endpoint is as simple as providing a URL that you control and a list of  **event types**  that you want to listen to.

![add endpoint](https://docs.svix.com/assets/images/add-endpoint-6cbcc00b62087f2774cd90b965a3d197.png)

If you don't specify any event types, by default, your endpoint will receive all events, regardless of type. This can be helpful for getting started and for testing, but we recommend changing this to a subset later on to avoid receiving unexpected messages.

THIS ALL CAN ALSO BE DONE PROGRAMMATICALLY

Monitor -> Webhooks -> Events 

will be replaced with the svix component

in the settuings, the rules button will redirect to the events list. 

(SETTINGS MENU WILL CHANGE - NO LONGER IS RULES AND SECURITY, JUST WEBHOOKS -> EVENTS -> CONFIGURE CONSUMER)

Add an endpoint URL / Create a consumer is what we will refer to this as

select the event type you want to subscribe to 

talk about the event catalog

add customer headers - SCREENSHOTS FROM CONFLUENCE AND THOSE DESCRIPTIONS 

https://codatdocs.atlassian.net/wiki/spaces/PRTL/pages/3246784546/Deprecations+and+migration+prep#:~:text=Based%20on%20the%20above%20here%20we%20outline%20whether%20they%20can%20migrate%20over%20to%20the%20new%20service%20completely%2C%20or%20swith%20to%20the%20new%20service%20but%20use%20the%20old%20endpoints%20or%20remain%20on%20the%20existing%20service.

OAS - preview in the new repo - 


Use the *Create webhooks* endpoint to create a new webhook consumer for your application to subscribe.
[Webhook consumer](https://docs.codat.io/DOCS_PATH#/schemas/webhookConsumer) is an endpoint URL and a list of event type you want your application to subscribe to.

Use the Create webhooks endpoint to create a new webhook consumer for your application to subscribe.

Webhook consumer is an endpoint URL and a list of event type you want your application to subscribe to.

:::tip

In case your webhook receiving endpoint is behind a firewall or NAT, you may need to allow traffic from Svix's IP addresses.

Codat's webhook rules are served from static IP addresses. This means that you are able to apply an allowlisting rule to grant network access to these notifications.

20.77.82.168/32
51.142.76.22/32

:::

## View event consumers

Use the List Webhook consumers endpoint to return a list of all webhook consumers that currently exist for your client.

Webhook consumer is an endpoint URL and a list of event type you want your application to subscribe to.

## Delete event consumers


Use the Delete webhook consumer endpoint to delete an existing webhoook consumer, providing its valid id as a parameter.

Webhook consumer is an endpoint URL and a list of event type you want your application to subscribe to.



## Test your webhook
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

---

## Read next