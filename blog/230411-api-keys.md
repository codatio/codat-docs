---
title: "Upcoming 2023-04-11: Deprecation of API key management endpoints"
sidebar_label: "2023-04-11: API key management endpoints"
date: "2023-01-18"
tags: ["Deprecation", "API keys"]
draft: false
authors: mcclowes
---

On April 11, 2023, Codat will deprecate endpoints used to manage API keys. This is to support our extended API key management that allows multiple keys.

<!--truncate-->

We are extending our API key management to allow the generation of multiple API keys as part of our journey toward granular permission sets. Current public API endpoints are designed to manage a single API Key, so will need to be deprecated to avoid undesirable behavior.

The change impacts the following endpoints:

- Endpoint `PUT /Profile/apiKey` will be removed,
- Endpoint `GET /profile` will change to remove the property `apiKey`.

:::note Update - 2023/02/16

This was previously scheduled for 2023/04/10. This has been pushed back a day as this fell on a public holiday in the UK.
:::


## Action required

Use the Codat Portal to view and generate API keys in the interim. The API keys can be managed under **Developers > API keys**.

## Expected impact if no action is taken

After the change is implemented, a call to the `PUT /Profile/apiKey` endpoint will start returning a 404 response, and the `GET /profile` endpoint will return an object without the `apiKey` property.

## Additional information

Current public API endpoints are designed to manage a single API key, and their existing logic can result in unexpected behavior when faced with multiple API keys, such as:

- `PUT /Profile/apiKey`  
   A client, who created multiple API keys via the Portal, will have their existing API keys deleted and a new API key created instead.

- `GET /profile`  
   The `apiKey` property of this endpoint response will contain only the first API key.

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/other/portal/developers), or read our [change policy](https://docs.codat.io/introduction/change-policy).

:::
