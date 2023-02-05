---
title: "Authentication"
description: "Basics of authentication for Codat's APIs"
createdAt: "2019-02-20T09:38:52.916Z"
updatedAt: "2022-11-07T19:59:38.100Z"
---

Codat uses API keys to control access to the API.

You must keep the API key secret, so make sure it isn't available in publicly accessible areas, such as GitHub and client-side code. Codat recommends the API key is only inserted at release time, and the number of people at your organisation with access to your API key is minimised.

Codat expects the API key to be included in all API requests to the server, Base64 encoded within an 'Authorization' header.

`Authorization: Basic YOUR_ENCODED_API_KEY`

:::info
You must replace <code>YOUR_ENCODED_API_KEY</code> with your API key, Base64 encoded
:::

## Getting your authorization header

:::caution
Authorization headers can only be viewed and copied by users with Administrator or Developer roles.
:::

To get your authorization header from the Codat Portal:

1. In the navigation bar, click **Developers > API keys**.
2. In the **API Keys** section, copy your authorization header rather than the API key itself.
