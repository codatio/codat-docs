---
title: "Webhook alerts"
description: "Basics of webhook alerts when using Codat's APIs"
createdAt: "2020-04-01T20:16:29.839Z"
updatedAt: "2022-11-24T12:56:40.816Z"
---

If you've added a webhook URL to your rule, Codat will `POST` to that URL each time an alert is raised.

The body of the request will include details such as the `RuleId`, the `RuleType` and the `CompanyId` that triggered the alert as well as data relevant to the particular rule type. Example bodies are detailed for each rule in our [Rule types](https://docs.codat.io/docs/core-rules-types) page.

## Expected response codes

| Response code                                                                       | Description                                                                       |
| :---------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **200** or **2xx** range status code                                                | Alert was received successfully.                                                  |
| **300** or **3xx** range status code                                                | Redirects the alert to another URL. Codat doesn't permanently cache the redirect. |
| **408**, **420**, **429**, **460**, **502**, **503**, **504**, **522**, and **524** | Transient error or a timeout. Codat retries the webhook alert.                    |
| Any other status code, including **400**                                            | Unrecoverable, no retry is attempted.                                             |

## Alert retries

Webhook alerts automatically retry a maximum of three times over a 2 minute period before failing permanently. The retry interval increases each time to a maximum of 60 seconds.

To override the retry interval, include a [**Retry-After** header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) in your response.

For example:  
`Retry-After: Wed, 21 Oct 2015 07:28:00 GMT`  
`Retry-After: 120`

## Filtering webhooks by client

If you’re a Codat partner with a single webhook endpoint for multiple clients, you can filter webhook calls by client.

The HTTP header of the standard webhook call contains an `X-Codat-ClientId` which uniquely identifies each client account. To find out the ID for the Codat client you’re logged in as, use [GET /profile/syncSettings](ref:get_profile-syncsettings) or contact our [solutions team](mailto:Solutions@codat.io).

## Webhook security

If you'd like to secure your webhook endpoints, you can add an `Authorization` header to the notifications Codat sends using the settings on the Portal's Alert settings page, or read more about [Webhook security](https://docs.codat.io/docs/core-rules-webhooksecurity).

| Authorization method or scheme | Description                                                                                       |
| :----------------------------- | :------------------------------------------------------------------------------------------------ |
| Basic                          | A base-64 encoded username and password is added to the authorisation header of the HTTP request. |
| Bearer                         | A custom value or token is added to the authorisation header.                                     |
