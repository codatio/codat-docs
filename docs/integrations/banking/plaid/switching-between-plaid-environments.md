---
title: "Switch between Plaid environments"
description: "Differences between Plaid Development and Production environments. Learn how to switch between these environments in the Codat Portal or the API."
createdAt: "2020-07-29T13:22:03.620Z"
updatedAt: "2022-12-16T17:22:03.406Z"
---

When you've set up Plaid connecting to their Sandbox environment, and confirmed that you can connect and pull data from Plaid's sandbox, you might want to connect to Plaid Development or Production to complete your testing.

## About Plaid Development

Plaid's development environment gives you free access to live bank accounts for testing.

Instant access to the development environment is available on [request from Plaid](https://dashboard.plaid.com/overview).

## About Plaid Production

Plaid's production environment gives you access to the live products and services that you've subscribed to. You might switch Codat's UAT environment to point to Plaid's production environment for final testing before go live.

Access to the production environment is available on [request from Plaid](https://dashboard.plaid.com/overview).

## Switch between environments

:::caution Creating new companies after switching environments

To avoid data inconsistencies, we recommend that you create new companies when you change environments. Any companies originally created in another environment are deauthorised and require [reauthorisation](https://docs.codat.io/docs/reauthorise-url-links).
:::

## Switch environments using the Codat portal

This is the simplest way to switch between Plaid's sandbox, development, and production environments.

In the Codat Portal:

1. On the navigation bar, select **Settings > Integrations > Banking**.
2. Find **Plaid** and select **Manage** next to it.
3. From the **Environment** list, select the Plaid environment that you want to connect to.
4. Select **Save**.

## Switch environments using the Codat API

The following example shows how to switch Codat to point to Plaid Development instead of the sandbox from the API.

Get your existing environment credentials.

1. Open the <a href="https://api.codat.io/swagger/ui/index.html#/Integrations/Integrations_GetCredentials" target="_blank">GET /integrations/credentials/{platformKey}</a> endpoint.
2. Replace {platformKey} with `plaid` and send your request to return your current credentials. Save the JSON, you'll need it later.

```json
{
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXabdd", // For integrations set up before Aug 20, 2020
  "clientId": "XXXXXXXXXXXXXXXXXXXX2a6b",
  "clientSecret": "XXXXXXXXXXXXXXXXXXXXXXXXXX1ad1"
}
```

Find the secret for Plaid's development environment.

1. Go to <a href="https://plaid.com" target="_blank">https://plaid.com</a> and log in.
2. From the top menu bar, select **Team Settings > Keys** and copy the **Development** secret.

Update your environment credentials.

1. Open the <a href="https://api.codat.io/swagger/ui/index#!/Integrations/Integrations_PutCredentials" target="_blank">  
   PUT /integrations/credentials/{platformKey}</a> endpoint.
2. Replace **{platformKey}** with `plaid` and send the following details:
   - The existing environment credentials you fetched earlier, replacing the original **clientSecret** with the secret for the development environment.
   - The name of the environment that you want to switch to. In this case, `development`.

```json
{
  "clientId": "XXXXXXXXXXXXXXXXXXXX2a6b",
  "clientSecret": "999a3ac412bf7e3ea93dd1fcb14931",
  "environment": "development" // Environment names are "sandbox", "development" and "production"
}
```

3. Send your request.
4. Create new companies in the Codat portal for testing.
