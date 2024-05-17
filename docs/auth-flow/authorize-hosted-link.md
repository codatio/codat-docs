---
title: "Authorize with Hosted Link"
description: "See how to integrate Hosted Link into your authorization flow"
unlisted: true
displayed_sidebar: docs
---

<head>
  <meta property="og:image" content="/img/link/link-banner.png"/>
</head>

:::tip Codat recommends Link SDK

Instead of Hosted Link, use the [Link SDK](/auth-flow/authorize-embedded-link) to fully embed our flexible, white-labeled auth flow in your application. 

You will benefit from our extensive experience combined with authorization best practices, providing your users with a native feeling of the auth flow that achieves an **89%** conversion rate on average.

::: 

## Overview

If you're not able to use our Link SDK, you can choose Hosted Link as your out-of-the-box authorization solution built, provided, and hosted by Codat. 

To connect your customers' financial software with Hosted Link, you can:

- Direct your customer from your existing app to the Hosted Link auth flow programmatically, or
- Manually share the Link URL with your customer. 

![](/img/link/link-banner.png)

:::info Indicative demo

Curious where Codat's Hosted Link flow might fit in your customer's experience? See how a fictional fintech company uses it [in our demo](https://links.codat.io/client/873ff19e-6fe0-47b0-a4e1-e19f344c78f6?user=8ee6c557-949c-40a8-b31d-e1fa02ef7fbc).

:::

## Integrate Link in your app

First, create a [company](../terms/company.md) to represent your SMB in Codat. We recommend doing that at the time your SMB user signs up within your app. This way, you can track their connection status from day one. 

To create a new company, use the [Create company](/platform-api#/operations/create-company) endpoint and provide a name for the company in the request body. For details on managing and deleting existing companies, review [Manage companies with our API](/using-the-api/managing-companies).

:::tip Use your customer's ID for the company name

For the company `name` parameter, we recommend you pass the ID that you use for the customer in **your** internal system. This makes it easier to identify the Codat company that corresponds to your record of the customer.
:::

Review the parameters in the example response to creating a new company:

```json
{
  // companyId - retain this
  "id": "1126743b-113d-4d72-b14f-36d6742df487",
  "name": "Superapp",
  "platform": "",
  // redirect - use to redirect your customer to Hosted Link
  "redirect": "https://link.codat.io/company/1126743b-113d-4d72-b14f-36d6742df487", 
  "dataConnections": [],
  "created": "2022-05-16T14:55:21.6076495Z"
}
```
From the response, retain the following:

   - `companyId`, because you will need it for directing your customers to Link and managing their connections;
   - `redirect` URL value, because you will use this URL in your app to direct the customer to start their Link journey.

:::tip One-time passwords for Link

Hosted Link supports one-time password (OTP) functionality. Reach out to your Codat contact to learn more.
:::

Once your customer finishes the Link flow, they will be redirected back to the URL you have set in the [Link settings](/auth-flow/customize/set-up-redirects). You can also present your customer with a confirmation screen that shows the platforms they have linked. 

#### Monitor the connection status

To enhance your Hosted Link experience, [set up a webhook](/using-the-api/webhooks/event-types) for when a user authorizes a data connection of the newly created company so that you can action it within your app.

#### Manage existing users with active connections

Direct the user to the `redirect` Link URL that you can retrieve from a company's metadata. This allows them to modify their existing connections via the Hosted Link UI.

If you create a new company and establish a new connection for a customer previously connected, you may be billed for it based on your contract.

#### Manage existing users with pending connections

When a user initiates a connection but fails to authorize access to their financial platform, a data connection is created in a [pending status](/core-concepts/connections#data-connection-status) in the respective Codat company.

In this scenario, allow your user to authorize this connection by sending them directly to the third-party authentication screen. Use the `linkUrl` value from the `dataConnections` array in the company's metadata. This will prompt the user to authorize the connection to their financial platform.

## Use URL to initiate Link

#### Use the Hosted Link URL

Use the Hosted Link URL if your customer's connection is meant to be persistent, and your customer may need to view or update their connection in the future.

To initiate the flow, follow these steps:

1. Create a [company via Portal](/configure/portal/companies#add-a-new-company) for your customer.
2. Navigate to the **Companies** page in the Portal.
3. Find the company that you created for the customer, and click **Request data** next to the company name.
4. Copy the Link URL from the box that appears and share it with the customer. This will allow the customer to create and authorize a data connection.

If a user already has an integration connection that hasn't been authorized and is not in an active state, click the integration name and copy the URL from the **Connections** section instead of the Link URL. Share this link with the user to allow them to authorize the specific connection.

<img
  src="/img/old/4c41ef0-manage.png"
  alt="Connection URL modal to manage an existing connection"
/>

#### Use the Invite company URL

We recommend using the _Invite company URL_ if both of these criteria apply to your use case:

- You want to onboard a large number of new companies without needing to specify company names or references, and
- Your company and your customer do not need to manage, view, or update connections in the future.

To obtain the _Invite company URL_, navigate to the **Companies** page in the [Codat Portal](https://app.codat.io/companies) and click the **Invite company button**. Before sharing the URL, check that you have [customized](/auth-flow/customize/customize-link) the Link flow as desired.

## Customize the Link flow

Our Link settings allow you to configure the authorization process based on your data needs and manage Link's visuals to suit your brand. You can customize these settings in the [Codat Portal](https://app.codat.io/settings) in **Settings > Auth flow > Link**.

We provide detailed instructions on the use of each setting in our documentation:

- [Customize Link settings](/auth-flow/customize/customize-link)
- [Set up your company branding](/auth-flow/customize/branding)
- [Set up redirect URLs](/auth-flow/customize/set-up-redirects)

## Limitations

Note the following limitations of the Hosted Link solution:

- Hosted Link is not compatible with iframes because this is against our security policies.
- Some users may be concerned sharing their data at a `codat.io` domain. Consider warning them about visiting a third-party website for the authorization process.

To avoid these, try our [Link SDK solution](https://docs.codat.io/auth-flow/authorize-embedded-link) instead.

---

## Read next

- Learn more about our [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)
