---
title: "Build your own auth flow"
description: "Create your own journey to connect your customers' financial platforms"
unlisted: true
displayed_sidebar: docs
---

:::tip Codat recommends Link SDK

Instead of building your own solution, use the [Link SDK](/auth-flow/authorize-embedded-link) to fully embed our flexible, white-labeled auth flow in your application. 

You will benefit from our extensive experience combined with authorization best practices, providing your users with a native feeling of the auth flow and achieving an **89%** conversion rate on average.

:::

If your business scenario and circumstances prevent you from using our Link SDK, you can use the endpoints that allow you to build the journey for your business customers to connect their financial platforms. Next, we will go through the steps and endpoints in detail.

## Create a Codat company

First, create a [company](../../terms/company.md) to represent your SMB in Codat. We recommend doing that at the time your SMB user signs up within your app. This way, you can track their connection status from day one. 

To create a new company, use the [Create company](/platform-api#/operations/create-company) endpoint and provide a name for the company in the request body. If your user has previously authorized with you, use the company you previously created for them. For details on managing and deleting existing companies, review [Manage companies with our API](/using-the-api/managing-companies).

:::tip Use your customer's ID for the company name

For the company `name` parameter, we recommend you pass the ID that you use for the customer in **your** internal system. This makes it easier to identify the Codat company that corresponds to your record of the customer.
:::

From the response, retain the company ID (`companyId`), because you will need it for directing your customers to Link and managing their connections.

Optionally, you can [set up a webhook](/using-the-api/webhooks/event-types) to monitor the connection status of the newly created company.

## Display a list of integrations

Next, you need to provide your customer with a list of platforms they can provide you access to, including the platform name and logo. For additional guidance on best practices of integration selection, see [Platfrom selection](/auth-flow/optimize/platform-selection). 

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

:::tip One-time passwords for Link

Hosted Link supports one-time password (OTP) functionality. Reach out to your Codat contact to learn more.

:::

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

Use the [Get company](/platform-api#/operations/get-company) endpoint if you need to get these values from company metadata. 

#### Allow users to view existing connections

Call the [List connections](/platform-api#/operations/list-connections) endpoint to get all the existing connections for a company and display them to your customer. 

#### Allow users to deauthorize 

User's consent is collected via OAuth2, which means we are able to access your customer's data on an ongoing basis. 

Therefore, your customers should be able to deauthorize an existing connection, essentially revoking your access to their platform. You will still be able to access previously synced data, but unable to perform any further syncs. 

Use the [Unlink connection](/platform-api#/operations/unlink-connection) endpoint to deauthorize the connection without deleting it. 

#### Allow users to delete a connection

Your customer's data is also permanently stored in our central data database, unless the connection has been deleted. We do this so that the data is always accessible via our API and we don’t need to go to the platform to get it, avoiding rate limits as a result. 

However, your customer may want to delete a connection entirely, preventing you from synchronizing new data or viewing synced data. To do that, use the [Delete connection](/platform-api#/operations/delete-connection) endpoint. 

The end user would need to authorize a new data connection if you wish to view new data for this company.

:::tip Codat's connection management

Codat is releasing a low-code embeddable UI component for connection management. Please [let us know](https://forms.gle/d1zuh2iHBLJCNCsj9) if you are interested in using it.

For a detailed best practices article on connection management, see [Connection management](/auth-flow/optimize/connection-management).

:::

## Best practices

We summarized our extensive experience in building authorization flows and maximizing conversion in the following best practice suggestions.

1. **Show that your authorization flow is powered by Codat**

To boost your customers' trust, you can [download our "Powered by Codat" logo](https://static.codat.io/public/branding/powered-by-codat.svg) and embed it into your application.

2. **Use webhooks to monitor updates**

Where possible, use our [webhooks service](/using-the-api/webhooks/overview) to receive updates on company and data statuses. This will allow you to fetch fresh data as soon as it is available and reduce the amount of calls to our API.

3. **Manage data usage permissions**

We only support the management of data access permissions, not data usage permissions. This means your customer can consent to us accessing their data, and not to what is done with it. If you want to manage how the data is used, you need to do that in your system.

4. **Enable users without credentials**

In your customer's organization, the person signing up through Codat may not have their credentials to hand. For example, it may be their accountant who actually logs into their accounting platform.

To enable them to proceed and explore your product, make upfront authorization for different integration categories optional in **Settings > Auth flow > Link**. Later, remind them to authorize or give them an alternative, such as `Can't sign in to your platform?`.

If the customer selects this option, you can:

- Provide them with a Link URL they can share
- Use a `mailto:` link, optionally even prefilling the subject line and email body

It's important that the request to authorize comes from your customer to ensure that the message is trusted.

---

## Read next

- Learn more about our [Link SDK](https://docs.codat.io/auth-flow/authorize-embedded-link)
