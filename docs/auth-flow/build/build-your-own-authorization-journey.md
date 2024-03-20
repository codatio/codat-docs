---
title: "Build your own auth flow"
description: "Create your own journey to connect your customers' financial platforms"
unlisted: true
displayed_sidebar: docs
---

:::tip Codat recommends Link SDK

Instead of building your own solution, use the [Link SDK](/auth-flow/authorize-embedded-link) to fully embed our flexible, white-labeled auth flow in your application. 

You will benefit from our extensive experience combined with authorization best practices, providing your users with a native feel of the auth flow and achieving an **89%** conversion rate.

:::

If your business scenario and circumstances prevent you from using our Link SDK, you can use the endpoints that allow you to build the journey for your business customers to connect their financial platforms. Next, we will go through the steps and endpoints in detail.

## Create a Codat company

First, create a [company](../../terms/company.md) to represent your SMB in Codat. We recommend doing that at the time your SMB user signs up within your app. This way, you can track their connection status from day one. 

To create a new company, use the [Create company](/platform-api#/operations/create-company) endpoint and provide a name for the company in the request body. For details on managing and deleting existing companies, review [Manage companies with our API](/using-the-api/managing-companies).

:::tip Use your customer's ID for the company name

For the company `name` parameter, we recommend you pass the ID that you use for the customer in **your** internal system. This makes it easier to identify the Codat company that corresponds to your record of the customer.
:::

From the response, retain the company ID (`companyId`), because you will need it for directing your customers to Link and managing their connections.

Optionally, you can [set up a webhook](/using-the-api/webhooks/event-types) to monitor the connection status of the newly created company.

## Display a list of integrations

Next, you need to provide your customer with a list of platforms they can provide you access to, including the platform name and logo. 

#### Retrieve all available integrations

Use the [List integrations](/platform-api#/operations/list-integrations) endpoint to retrieve a list of all integrations available for the customer to connect. 

We recommend using a query to filter this list. For example, use the `enabled` parameter to only return the integrations enabled via the Codat Portal. The `sourceType` parameter allows you to filter integrations by their data type - `accounting`, `banking` or `commerce`. 

You need to encode the query, unless you are using our API reference, where that happens automatically. For more details on querying, see [Querying](/using-the-api/querying).

```http
  //Non-encoded query:
  ?query=sourceType=accounting&&enabled=true

  //Encoded query:
  ?query=sourceType%3DAccounting%26%26enabled%3Dtrue"
```

#### Retrieve branded assets

Call the [Get branding](/platform-api#/operations/get-integrations-branding) endpoint to retrieve branded assets for the required integrations, including logos and buttons, and use them on the integration selection page. Cache the assets instead of calling the endpoint each time a user visits the platform selection page.

Add a relevant platform key as a parameter to the call, choosing from the [accounting](/integrations/accounting/overview#platform-keys), [banking](/integrations/banking/overview#platform-keys) or [commerce](/integrations/commerce/overview#platform-keys) options. The `platformKey` is  a unique key Codat uses to remove the dependency on a platform's display name.

:::info Branded assets provided by Codat

We advise using the assets provided by Codat because they meet the requirements of the supported integrations. For example, Intuit integrations (QuickBooks Online and QuickBooks Desktop) mandate the use of QuickBooks branded buttons, including specific hover states.
:::

## Direct user to enter credentials

Next, direct your customer to enter their credentials and authorize your connection with their selected platform. 

To do that, create a data connection using the [Create connection](/platform-api#/operations/create-connection) endpoint. In response, you will receive a `linkUrl`.

Direct your user to the `linkUrl`. The page will prompt them to enter their credentials for the third-party platform, authorizing the connection and activating it in Codat.

:::info Platform-specific pages

For some integrations, the authorization flow may include additional instructions or steps. For example:

- Sage Intacct and NetSuite require complex user permissions.
- Microsoft Dynamics 365 Business Central requires your users to install a package on their machine.
- Xero requires your customer to confirm the company they want to link.
:::

Once the customer successfully authorized the data connection, redirect them back to your app. Make sure to handle all possible redirect status codes and error messages so that your users understand what has gone wrong. 

If you don't set a redirect URL, the user will be presented with our pre-built Link success page. To learn more about redirect URLs in Codat, see [Redirect URLs](/auth-flow/customize/set-up-redirects).

:::caution Limitations on number of connections

A company may only link a single source of accounting data, but multiple sources of banking or commerce data. Any combination of accounting, banking, and commerce connections is allowed. For more on data connections and connection statuses, see [Data connections](/core-concepts/connections).
:::

## Confirm successful authorization

Once the connection is complete, mark it as authorized and confirm successful authorization to the user. If you want to monitor the connection, you can [set up a webhook](/using-the-api/webhooks/overview) to be informed of the status change.

The connection completion triggers the initial synchronization of data for the newly connected company. You can monitor the progress of the sync in the [Codat Portal](/using-the-api/pull-history), using our API's [Get data status](/platform-api#/operations/get-company-data-status) endpoint, or with a [webhook](/using-the-api/webhooks/event-types).

Once the initial data sync completes, inform the user accordingly and continue the flow of your app.

## Allow users to manage connection

Going forward, your customer must have control over the data they've given you the permission to access. This is key from a regulatory perspective and builds trust between you and your customer. To build this capability, you will need these values: 

- The `companyId` of the Codat company that represents the user
- The `connectionId` of the connection the user wants to modify 

To get these values:


GET /companies


#### Allow users to view existing connections for their company

```http

GET /companies/{companyId}/connections",
```

This endpoint is also available in <a href="/platform-api#/operations/list-connections">Common API</a>.

In the request above, the `companyId` is the `companyId` that was returned to you when you created a Codat company for the user. It can also be found in the company's metadata.

#### Allow users to revoke access to their platform

Allow your users to prevent further synchronizations with a connection, whilst still allowing you to access data that has already been pulled or pushed:

```http
POST /companies/{companyId}/connections

Request body:

"platformKey"
```

This endpoint is also available in <a href="platform-api#/operations/create-connection">Common API</a>.

#### Allow users to delete a connection

To delete a connection entirely, preventing both further synchronizations and the ability to make any data pulls or pushes:

```http
DELETE /companies/{companyId}/connections/{connectionId}",
```

## Best practices


### Show that your authorization flow is powered by Codat

To [boost your customers' trust](/auth-flow/optimize/privacy#show-that-your-authorization-flow-is-powered-by-codat), you can embed our "Powered by Codat" logo into your application.

You can [download the logo](https://static.codat.io/public/branding/powered-by-codat.svg) or link it from our content delivery network:

<img
  src="https://static.codat.io/public/branding/powered-by-codat.svg"
  alt="Powered by Codat"
/>


If an end user has linked before, use the relevant existing company rather than creating a new company (even if they have previously deauthorized).

Where possible you should be using webhooks to be informed of when to fetch data, rather than polling our API for dataset status updates.
This will allow you to fetch fresh data as soon as it is available as well as reduce the amount of calls being made to our API.

We (currently) only support data access permissions, not data usage permissions.
This means that the user can consent to us accessing their data as a whole, not which parts or what is done with it.
If you want to manage how the data is used then they will need to manage the permissioning in their system.

Consent is done via OAuth2 and it means until you revoke permission we will be able to access all of the end users data on an on-going basis.

This data is also stored forever (until revoked) in our central data database. This means that it is always available to be accessed via our API and we don’t need to keep going to the accounting platform to get it (and thus not hitting rate limits).

### What do I do when my customer user doesn't have access to the sign in credentials for their accounting/banking/commerce platform?

Often your customer or user doesn't themselves have the sign in credentials to the platforms you need to access. For example, perhaps their accountant is the only stakeholder in their business that actually goes into their accounting platform.

If you're using our Hosted Link solution, your customer can just forward that stakeholder the hosted Link URL. However, for our Link SDK or a custom built auth flow, your authorization flow is likely only accessible when logged in, which means sharing around password and logins - not ideal!

Just because you're not using Link as your primary auth flow, it doesn't mean you can't benefit from it.

Why not try:

1. Making your auth flow an optional part of onboarding
2. Presenting your customers with a CTA inviting them to auth, but also giving them an alternative like 'Can't sign in to your {accounting/banking/commerce} platform?'
3. If a customer clicks this option, you could:
   1. Give them the Hosted Link URL to share themselves: `<https://link.codat.io/companies/{companyId}`>
   2. Use a `mailto:` link to make it easier. E.g.:

```html
<a href="mailto:https://link.codat.io/companies/{companyId}">Invite someone else</a>
```

You can even prefill the subject line and email body as you see fit.

It's important that the request to authorize comes from your customer rather than you to ensure that the need is communicated and trusted.