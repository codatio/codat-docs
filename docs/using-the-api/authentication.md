---
title: "Authentication"
description: "Basics of authentication for Codat's APIs"
createdAt: "2019-02-20T09:38:52.916Z"
updatedAt: "2022-11-07T19:59:38.100Z"
---

Codat uses API keys to control access to the API.

You must keep the API key secret, so make sure it isn't available in publicly accessible areas, such as GitHub and client-side code. Codat recommends the API key is only inserted at release time, and the number of people at your organization with access to your API key is minimised.

Codat expects the API key to be included in all API requests to the server, Base64 encoded within an 'Authorization' header.

`Authorization: Basic YOUR_ENCODED_API_KEY`

:::info
Replace *`YOUR_ENCODED_API_KEY`* with your API key, Base64 encoded
:::

## Finding your authorization header

:::caution Permissions
Authorization headers can only be created, viewed, and copied by Administrator or Developer users.
:::

To retrieve your authorization header from the Codat Portal:

1. In the navigation bar, click **Developers > API keys**.
2. Copy your authorization header from the relevant table column (rather than the API key itself).

## Managing keys

You can have up to 10 keys per client. You can create new keys in the Portal at **Developers > API keys**.

You can delete keys in the Portal too. Deleted keys will no longer authorize API calls.

:::tip Recap
You've learned:
- How to authorize API calls
- Where to find your auth header
- How to create and delete API keys
:::

---

## Read next

- [Managing companies](/using-the-api/managing-companies)
