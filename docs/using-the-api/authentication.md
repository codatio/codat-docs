---
title: "Authenticate"
description: "Use your auth header or API key to authenticate with Codat's APIs"
aidebar_label: "API keys"
---

API keys are tokens used to control access to the API. Codat expects the API key to be included in all requests to the server, Base64 encoded within an 'Authorization' header:

```json
Authorization: Basic YOUR_ENCODED_API_KEY // Replace *YOUR_ENCODED_API_KEY* with your API key, Base64 encoded
```

When using API keys in your application, you can either store the raw API key and encode it yourself, or just store the pre-encoded authroization header we expose.

## Managing keys

You can view API keys and their authorization headers in the Codat Portal. By default, your client will come with one API key pre-provisioned.

1. Click **Developers > API keys** to navigate to the [API keys](https://app.codat.io/developers/api-keys) page.
2. Copy your API key or authorization header from the relevant table column.

You can also revoke (delete) existing API keys, and create new keys. When creating new keys, you'll be asked to name them - this will help you track what a given key is being used for, which is helpful when revoking keys later.

### Managing keys via the API

To manage API keys by making API calls, use the following endpoints:

1. [Create API keys](https://docs.codat.io/platform-api#/operations/create-api-key)
2. [List API keys](https://docs.codat.io/platform-api#/operations/list-api-keys)
3. [Delete API keys](https://docs.codat.io/platform-api#/operations/delete-api-key)

You can only view API keys, and not the corresponding authorization headers, via the API.


:::caution Permissions

Authorization headers and API keys can only be created, viewed, copied, and deleted by Administrator or Developer users.
:::

## 💡 Tips and traps

- Your first API key is created for you. Pick it up in the [Codat Portal](https://app.codat.io/developers/api-keys) to perform any subsequent API calls.
- Keep the API key secret and ensure it is not available in publicly accessible areas, such as GitHub and client-side code. 
- We recommend you insert the API key at release time, and minimize the number of people at your organization with access to them.
- The number of API keys is limited to 10. If you reached the maximum number of keys, delete an unused key first.
- It is not possible to delete the last remaining API key. To delete this key, create a new one and delete the key you no longer need.

:::tip Recap
You have learned:
- How to authorize API calls
- Where to find your auth header
- How to create and delete API keys
:::

---

## Read next

- [Managing companies](/using-the-api/managing-companies)
