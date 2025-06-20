---
title: "Listening to events"
description: "Basics of webhook events when using Codat's APIs"
---

:::caution New webhook service available

This page describes the functionality of our legacy webhook offering. [Learn more](/using-the-api/webhooks/overview) about our new webhook service and see how you can [migrate](/using-the-api/webhooks/migration-guide) to use it instead.

:::

If you've added a webhook URL to your rule, Codat will `POST` to that URL each time a webhook event is raised.

The body of the request will include context such as the `RuleId`, the `RuleType` and the `CompanyId` that triggered the event as well as data relevant to the particular webhook type. Example bodies are detailed for each rule in our [Rule types](/using-the-api/webhooks/legacy/core-rules-types) page.

## Expected response codes

| Response code                                                                       | Description                                                                       |
| :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **200** or **2xx** range status code                                                | Webhook event was received successfully.                                          |
| **300** or **3xx** range status code                                                | Redirects the event to another URL. Codat doesn't permanently cache the redirect. |
| **408**, **420**, **429**, **460**, **502**, **503**, **504**, **522**, and **524** | Transient error or a timeout. Codat retries the webhook event.                    |
| Any other status code, including **400**                                            | Unrecoverable, no retry is attempted.                                             |

## Retries

Raised webhook events automatically retry a maximum of three times over a 2 minute period before failing permanently. The retry interval increases each time to a maximum of 60 seconds.

To override the retry interval, include a [Retry-After header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) in your response.

For example:  
`Retry-After: Wed, 21 Oct 2015 07:28:00 GMT`  
`Retry-After: 120`

## Filtering events by client

If you’re a Codat partner with a single webhook endpoint for multiple clients, you can filter webhook calls by client.

The HTTP header of the standard webhook call contains an `X-Codat-ClientId` which uniquely identifies each client account.

## Webhook security

If you'd like to secure your webhook endpoints, you can add an `Authorization` header to the notifications Codat sends using the settings on the Portal's Settings page, or read more about [Webhook security](/using-the-api/webhooks/legacy/core-rules-webhooksecurity).

| Authorization method or scheme | Description                                                                                       |
| :----------------------------- | :------------------------------------------------------------------------------------------------ |
| Basic                          | A base-64 encoded username and password is added to the authorization header of the HTTP request. |
| Bearer                         | A custom value or token is added to the authorization header.                                     |
