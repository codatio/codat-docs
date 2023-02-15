---
title: "Build your own auth flow"
sidebar_label: Overview
excerpt: "Explore how to create your own journey to connect your customers' financial platforms"
hidden: false
createdAt: "2022-06-28T14:27:30.620Z"
updatedAt: "2022-11-14T17:52:05.345Z"
---

Codat provides a series of endpoints that allow you to build the journey for your business customers to connect their financial platforms.

## What might a bespoke auth flow look like?

Below is a indicative demo of a where Codat might fit in to a digital lending onboarding experience. Copay is a fictional digital lender looking to gather financial data from prospective customers in order to make a credit decision.

<a href="https://codat-dev-link-demo.azurewebsites.net/home" target="_blank">
  See an indicative demo
</a> | <a href="https://github.com/codatio/demo-auth-flow" target="_blank">
  See the code
</a>

## Building your own auth flow

### 1. Create a Codat company when a user signs up for your app

1. In order to establish a connection to your customer's financial platform(s), you first need to create a Codat company for them. We recommend you create a company at the same time as your customer signs up within your app. That will allow you to track their connection status from day one. To create a company, follow the steps in [Create a Codat company](/using-the-api/managing-companies/managing-companies).

:::caution Use your merchant ID for the company name

We recommend that you populate the name value with the ID that you use for the merchant in **your** internal system so that it’s easier to identify the Codat company that corresponds to your record of the merchant.
:::

2. From the response to step 1, retain the company ID (hereafter referred to as `companyId`) (see an example below). It is crucial that you retain this value as you will need it for directing your customers to Link and managing their connections.
3. _(Optional)_ [Set up an alert](/auth-flow/customize/set-up-webhooks) to monitor the connection status of the newly created company.

### 2. Display a list of integrations for your users to select, including the integration name and logo

1. Retrieve a list of all integrations available to connect and display them in your UI:

    ```http
    GET /integrations",
    ```

    Use a query filter in the following format:

    ```http
    ?query=sourceType=accounting&&enabled=true
    ```

    In the query above, the `enabled` parameter allows you to filter the integrations based on whether or not they have been enabled via the Codat portal. The `sourceType` parameter allows you to filter the integrations by the data type: `accounting`, `banking` or `commerce`.

    Note that you need to URL encode the query:

    ```http
          "code": "//Non-encoded query:
          ?query=sourceType=accounting&&enabled=true

          //Encoded query:
          ?query=sourceType%3DAccounting%26%26enabled%3Dtrue",
    ```

More information about querying can be found in [Querying](/using-the-api/querying). If you are using the API reference, you don't need to encode the query, it happens automatically.

2. Retrieve branded assets, including logos and buttons, for the selected integrations:

```http
GET /integrations/{platformKey}/branding",
```

:::caution Cache branding assets
To ensure this page is performative for your users, we recommend caching the branding assets information rather than calling the branding endpoint each time a user visits the integration selection page.
:::

:::info Use the branded assets provided by Codat

We recommend using the assets provided by Codat as they meet the requirements of the supported integrations. For example, Intuit integrations (QuickBooks Online and QuickBooks Desktop) require the specific use of QuickBooks branded buttons, including specific hover states.
:::

### 3. Direct your user to enter their 3rd party credentials to authorize a connection with their selected platform

1. Create a data connection for the integration selected by your customer:

```http

POST /companies/{companyId}/connections

Request body:

"platformKey"",
```

The `platformKey` is the unique key Codat uses instead of financial platform names to remove the dependence on a platform's display name. Platform keys can be found [here](doc:accounting-platform-keys) for accounting and [here](doc:commerce-platform-keys) for commerce, or retrieved from [our API](https://docs.codat.io/reference/listintegrations).

2. Direct your user to the `linkUrl` found in the nested `dataConnection` object for the specified integration, returned in the response. It will prompt the user to enter their credentials for the 3rd-party platform, authorizing the connection and activating it.

:::info Platform-specific pages

For some integrations, the authorization flow will include additional setup instructions or steps. For example:

- Sage Intacct and NetSuite require complex user permissions
- Microsoft Dynamics 365 Business Central requires your users to install a package on their machine
- Xero requires the company to confirm their name before redirecting to Xero to connect
:::

3. Once the user has successfully authenticated in their platform and thus authorized a data connection, redirect them back to your app. Ensure you handle all possible redirect status codes and error messages so that your users understand when something has gone wrong. Read [Redirect URLs](/auth-flow/customize/set-up-redirects) to learn more about how redirect URLs are used with Codat's products.

If you don't set a redirect URL, the user will be presented with a pre-built success page.

If a redirect URL is not set, then pre-built UI will be presented to your user. This will be the success and overview page of Link - our pre-built white-labelled UI.

:::caution Rules on number of connections to different integration types

A company may link a single source of accounting data but multiple sources of banking or commerce data. Any combination of accounting, banking, and commerce connections is allowed. For more on data connections and connection statuses see [Data connections](/core-concepts/connections).
:::

### 4. Confirm successful authorization and data synchronization

1. Once the connection is complete (for guidance on how to monitor the connection, read [Set up alerts](/auth-flow/customize/set-up-webhooks)), mark the connection as authorized and confirm to your user the successful authorization of the connection.
2. Monitor the synchronization of data (also available in <a href="/codat-api#/operations/get-companies-companyId-dataStatus">Common API</a>):

```http
GET /dataStatus",
```

Once the initial synchronization of data is complete, you can inform the user accordingly and continue the flow of your app.

### 5. Allow your users to manage their ongoing connection(s)

Have the following values at hand:

- The company `id` of the Codat company that represents the user, hereafter referred to as `companyId`
- The `id` of the connection you want to modify, hereafter referred to as `connectionId`

To get these values:

```
GET /companies

//Example response:
{
        //Company ID
        "id": "40ef18ac-acf0-4ea1-8667-05398c0b75fa",
      //End of company ID
      "name": "Superapp",
      "platform": "",
      "redirect": "https://link.codat.io/company/40ef18ac-acf0-4ea1-8667-05398c0b75fa",
      "dataConnections": [],
      "created": "2022-05-16T15:51:03Z"
    },
    {
      //Platform connection ID
      "id": "1126743b-113d-4d72-b14f-36d6742df487",
      //End of platform connection ID
      "name": "Superapp",
      "platform": "Xero",
      "redirect": "https://link.codat.io/company/1126743b-113d-4d72-b14f-36d6742df487",
      "lastSync": "2022-05-16T15:52:15.6455941Z",
      "dataConnections": [
        {
          "id": "f42c2cbe-dfab-4b13-a16f-51729c75bd2e",
          "integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
          "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
          "platformName": "Xero",
          "linkUrl": "https://link-api.codat.io/companies/1126743b-113d-4d72-b14f-36d6742df487/connections/f42c2cbe-dfab-4b13-a16f-51729c75bd2e/start",
          "status": "Linked",
          "lastSync": "2022-05-16T15:52:15.6455938Z",
          "created": "2022-05-16T15:00:00Z",
          "sourceType": "Accounting"
        }
      ],
      "created": "2022-05-16T14:55:22Z"
    },
```

#### Allow users to view existing connections for their company

```http

GET /companies/{companyId}/connections",
```

This endpoint is also available in <a href="/codat-api#/operations/list-company-connections">Common API</a>.

In the request above, the `companyId` is the `companyId` that was returned to you when you created a Codat company for the user. It can also be found in the company's metadata.

#### Allow users to revoke access to their platform

Allow your users to prevent further synchronizations with a connection, whilst still allowing you to access data that has already been pulled or pushed:

```http
POST /companies/{companyId}/connections

Request body:

"platformKey"
```

This endpoint is also available in <a href="codat-api#/operations/create-data-connection">Common API</a>.

#### Allow users to delete a connection

To delete a connection entirely, preventing both further synchronizations and the ability to make any data pulls or pushes:

```http
DELETE /companies/{companyId}/connections/{connectionId}",
```

### Bonus: Show that your authorization flow is powered by Codat

To [boost your customers' trust](/auth-flow/optimize/privacy#show-that-your-authorization-flow-is-powered-by-codat), you can embed our "Powered by Codat logo" into your application.

You can [download the logo](https://static.codat.io/public/branding/powered-by-codat.svg") or link it from our content delivery network:

<img
  src="https://static.codat.io/public/branding/powered-by-codat.svg"
  alt="Powered by Codat"
/>
