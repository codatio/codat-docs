---
title: "Platform selection flow"
description: "Enable your merchant to select a target accounting platform before they move on to the Sync configuration flow."
createdAt: "2022-02-09T13:30:23.915Z"
updatedAt: "2022-11-25T09:42:09.130Z"
---

:::info Use our Swagger to follow along

All the endpoints mentioned in this guide are available in our <a href="https://api.codat.io/sync/swagger" target="_blank">Sync for Commerce Swagger</a>. You can use it to try the API requests from this guide directly in your browser. Before you use Swagger, make sure to [authenticate](https://docs.codat.io/reference/authentication).
:::

## Build a platform selection flow

Within your application, present your merchant with a list of accounting platforms they can connect to.

On select, your merchant should be [redirected to the Sync configuration flow URL](/sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration) where they will be prompted to authorize access to their accounting data.

:::info Data requirements

Over the steps in this guide, you'll need to retain several variables:

- `companyId` - the unique identifier of your merchant in the Codat system
- `platformKey` - the unique identifier of the integration your merchant wants to use

You'll need these for the next page.
:::

### 1. Create your merchant as a Company

Your merchant needs to exist as a Company in the Codat system. Start by creating it:

```http
  POST /meta/companies/sync
```

You just need to set a name in the request body.

We'll return that merchant's `companyId` for you to retain (returned here as `id`):

```json
{
  "id": "d5211e9b-3cb6-47c8-826c-1b283f5621c7",
  "clientId": "4a7fc22d-b4e6-407c-bf46-5509f7f71d8a",
  "name": "Sample Company Name",
  ...
}
```

:::info Checkpoint

You've made a POST API call to create your merchant and received a response that includes the merchant's `name` and `companyId`.
:::

### 2. Get available integrations

Get a list of the integrations you've enabled, as well as the associated metadata. These will be the integrations you'll present in your UI.

Our available integrations for Sync for Commerce:

- [Xero](/accounting-xero)
- [QuickBooks Online](/accounting-quickbooksonline)
- [FreeAgent](/accounting-freeagent)

Call our `GET /integrations` endpoint, querying for enabled integrations.

```http
GET /config/integrations?page=1&pageSize=100&query=enabled%253Dtrue
```

Sample response:

```json
{
  "results": [
    {
      "key": "gbol",
      "logoUrl": "https://static.codat.io/public/platforms/gbol.png",
      "name": "Xero",
      "enabled": true,
      "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
      "integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
      "sourceType": "Accounting",
      "isOfflineConnector": false,
      "isBeta": false,
      "supportedEnvironments": "LiveAndSandbox",
      "linkedConnectionsCount": 0,
      "totalConnectionsCount": 0,
      "dataProvidedBy": "Codat",
      "datatypeFeatures": [
        {
          "datatype": "chartOfAccounts",
          "supportedFeatures": [
            {
              "featureType": "Get",
              "featureState": "Release"
            },
            {
              "featureType": "Post",
              "featureState": "Release"
            },
            {
              "featureType": "Categorization",
              "featureState": "Beta"
            },
            {
              "featureType": "Put",
              "featureState": "NotImplemented"
            }
          ]
        },
        ...
      ]
    },
    ...
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 125,
  "_links": {
    "current": {
      "href": "/integrations?page=1&pageSize=100"
    },
    "self": {
      "href": "/integrations"
    },
    "next": {
      "href": "/integrations?page=2&pageSize=100"
    }
  }
}
```

:::info Checkpoint

**Retain the integration's `platformKey`**.

For reference:

- Xero - `gbol`
- QuickBooks Online - `qhyg`
- FreeAgent - `fbrh`

:::

### 3. Get branding for the integrations

Populate your UI with branded logos of the selected accounting platform.

To an integration's branding, call:

```http
GET /config/integrations/{platformKey}/branding
```

Sample response where the `platformKey` is `gbol` (Xero):

```json
{
  "logo": {
    "full": {
      "image": {
        "src": "https://static.codat.io/public/officialLogos/Full/Xero_Full.png",
        "alt": "xero full icon"
      }
    },
    "square": {
      "image": {
        "src": "https://static.codat.io/public/officialLogos/Full/Xero_Square.png",
        "alt": "xero square icon"
      }
    }
  },
  "button": {},
  "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607"
}
```

### 4. Render the integrations

Display each of these integrations, using the branding to aid the user.

Depending on your frontend stack, this will vary. Using React, it might look something like this:

```html
<div>
  {
    integrations.map((integration, i) => (
      <div
        key={i}
        onClick={selectIntegration(integration.key)}
      >
        <img
          src={branding[integration.key].logo.full.image.src}
          alt={branding[integration.key].logo.full.image.alt}
        />

        <h3>{integration.name}</h3>

        <div>Link your {integration.name} account</div>
      </div>
    )
  }
</div>
```

### 5. Handle the platform selection

When the user selects the integration you're ready to progress them to the Sync configuration flow, where your merchant will authorize the integration and configure their settings.

**Retain the `platformKey` of the integration your merchant selected.** In the example above, this is passed to the `onClick` function, which would take care of that.

:::caution Incorrect platform selection

If your merchant accidentally selects the wrong accounting package, you can resolve this by [deleting that Connection](/core-concepts/connections#how-do-i-delete-a-data-connection) for the incorrectly selected accounting software and returning them to the accounting platform selection stage.
:::

When you're ready to proceed, you can get the URL of the sync configuration flow using the variables you've retained.

```http
GET /config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}
```

:::info Checkpoint

You're ready to move to the next page, where we'll cover what to do with this response, and more.
:::

---

## Use our Hosted Link and Embedded Link authorization flows

Our no-code and low-code flows take care of platform selection and authorization for you.

You can read more about those here:

- [Authorize with Embedded Link](/authorize-embedded-link)
- [Authorize with Hosted Link](/authorize-hosted-link)

### 1. Authorize

Each of those options will mean that you:

- Have created a Company for your merchant
- Have created a connection with their preferred account platform

### 2. Redirect the user to the sync configuration flow

When you're ready to proceed, get the URL of the sync configuration flow.

You should have retained the `companyId`.

You can retrieve the `platformKey` when you need it.

:::info Verifying the connections

Call `GET /companies/{companyId}/connections`. There should only be one connection returned if your settings are configured correctly. The `platformKey` is called `integrationKey` in the response.

For Embedded Link, you can use the `onConnection` callback function to retain the connection and its `platformKey`.
:::