---
title: "Sync configuration flow"
description: "How to implement a Sync for Commerce authentication and configuration flow, allowing your merchant to configure their desired data mapping."
createdAt: "2022-05-12T14:01:29.011Z"
updatedAt: "2022-11-17T11:02:46.252Z"
---

:::caution Beta testing

Sync for Commerce is in beta. If you are interested in building with Sync for Commerce, please [get in touch](mailto:sync-for-commerce@codat.io).
:::

Before Codat can accept the data from your merchant, the merchant must:

- Authorize access to their data
- Define how the data should be be mapped to their accounting platform
- Set a synchronization schedule

Our Sync configuration flow handles this for you.

You can [customize your flow](https://docs.codat.io/docs/customizing-the-sync-configuration-flow) to give your users the best experience.

:::note Use our Swagger to follow this guide

All the endpoints mentioned in this guide are available in our <a href="https://api.codat.io/sync/swagger/" target="_blank">Sync for Commerce Swagger</a>. You can use it to try the API requests from this guide directly in your browser. Before you use Swagger, make sure to [authenticate](https://docs.codat.io/reference/authentication).
:::

### 1. Retrieve the Sync configuration flow URL

After the merchant selects their accounting platform, they should be immediately redirected to a secure URL leading them to the Sync configuration flow. To retrieve the secure URL, make the following request:

```http
GET config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}
```

Sample response:

```json
{
  "url": "https://sync-flow.codat.io/df074e52-0267-4707-879b-0cc2adbd20e3/partnercommerce/xero/start?merchantIdentifier=demo merchant&otp=479149"
}
```

#### One-time password (OTP)

The URL that you will receive in response includes a one-time password which will expire after 30 seconds. The OTP eliminates the possibility of unwanted third-parties accessing the URL, ensuring security for your merchants.

Because of our OTP security, URLs are only valid for 30-seconds - make sure the merchant is redirected within that time. Once that has expired, they'll see a 401 error.

If the link does expire, just call the request again to generate a new URL with a new OTP.

#### (Optional) Custom redirects

At the end of the flow, the merchant will see a success message. **You can instead redirect the merchant to a custom URL.**

Add a `redirectUrl` query parameter and the absolute URL as the value to the previous `GET` request.

```http
GET config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}&redirectUrl=app.codat.io
```

The resulting Sync Flow URL will include the redirect URL as shown in this example:

```json
{
  "url": "https://sync-flow.codat.io/06de067c-1d6c-416a-8e61-676e6c135e68/lqai/gbol/start?merchantIdentifier=CoPay&otp=615853&redirectUrl=app.codat.io"
}
```

### 2. Authorization

The merchant will be redirected to an authorization page for the accounting platform they selected. They need to enter their credentials.

Once successful, they will have created a valid Connection, and will be redirected to the configuration step.

:::note

If you used our Embedded Link or Hosted Link solutions for platform selection, this step will be skipped automatically.
:::

### 3. Configuration

Once authorized, the merchant is presented with Codat’s white-labeled configuration flow and is prompted to configure the data synchronization:

- Choose which accounts within their accounting platform to push the data into
- Link tax rates from their accounting platform to those used for their ecommerce or POS data
- Schedule the start date, start time, and frequency of the [regular data synchronization](https://docs.codat.io/docs/synchronization-schedule)
- Set up the default invoice status
- Set up the data grouping period

:::note

To provide your merchants with a branded experience, we recommend that you customize your [Sync configuration flow](https://docs.codat.io/docs/customizing-the-sync-configuration-flow), including your logo and primary color.
:::

### 4. Allow the merchant to review their configuration

To allow the merchants to review and modify their connection, present them with the same URL as the one used for the original setup. It will redirect the merchant to a settings page where they will be able to:

- Enable and disable data synchronization
- Schedule the start date, start time, and frequency of the [regular data synchronization](https://docs.codat.io/docs/synchronization-schedule)
- See the date and time of the last sync and the next one
- Review and change which accounts within their accounting platform to push the data into (see [Mapping specifications](https://docs.codat.io/docs/mapping-specifications) for more information)
- Review and change the tax rates mapping
- Set up the default invoice status
- Set up the data grouping period
- De-authorize the connection to their accounting platform

:::caution

> In case the merchant severs the connection, the next scheduled data sync will fail, and no further data syncs will be attempted.
>
> You can [set up an alert](https://docs.codat.io/docs/core-rules-create) for the [Sync Connection Deleted](https://docs.codat.io/docs/core-rules-types#sync-connection-deleted) rule to be notified if a merchant severs their connection.

### 5. (Optional) Check the configuration status

If you want to double-check that the merchant has successfully authorized and configured, and is ready to sync:

1. Get the company

You should already have the merchant's `companyId`.

```text
GET /companies/{companyId}
```

Sample response:

```http
{
  "results": [
    {
      "id": "8f810334-2846-4898-828e-dd7b5318ecbb",
      "integrationId": "9e0cc03b-3868-4543-98c0-568f0f1b12a3",
      "integrationKey": "gbol",
      "sourceId": "aff0f057-255f-42c4-8d4a-ae23b43e1615",
      "platformName": "Xero",
      "linkUrl": "https://link-api.codat.io/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections/8f810334-2846-4898-828e-dd7b5318ecbb/start",
      "status": "Linked",
      "lastSync": "2022-04-22T16:58:32.512646Z",
      "created": "2022-04-22T16:58:17Z",
      "sourceType": "Accounting"
    },
    {
      "id": "cd4a4f4f-0117-4815-83aa-c12ac71ab535",
      "integrationId": "b27611c5-c104-4360-b979-e8f6b16db164",
      "integrationKey": "lqai",
      "sourceId": "fac84d06-5a70-4e9e-bf46-7607e647b036",
      "platformName": "PlatformCommerce",
      "linkUrl": "https://link-api.codat.io/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections/cd4a4f4f-0117-4815-83aa-c12ac71ab535/start",
      "status": "Linked",
      "lastSync": "2022-04-22T16:58:26.8185875Z",
      "created": "2022-04-22T16:58:17Z",
      "sourceType": "Commerce"
    },
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 2,
  "_links": {
    "current": {
      "href": "/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections?page=1&pageSize=100"
    },
    "self": {
      "href": "/companies/c37c7d07-dc91-4f7f-9106-322fa27f0aa6/connections"
    }
  }
}
```

The response should have both accounting and commerce data connections present and with the `Linked` status.

2. Get the status of the merchant's configuration:

```http
GET /config/companies/{companyId}/sync/commerce
```

Partial sample response:

```json
{
  "companyId": "d5211e9b-3cb6-47c8-826c-1b283f5621c7",
  "accountingSoftwareCompanyName": "Sample Company Name",
  "enabled": true,
  "configured": true,
  ...
}
```

Both the `enabled` and `configured` parameters should be set to `true`.

You're ready to start [pushing commerce data](https://docs.codat.io/docs/sync-data-pushing) to this company.

:::note

Don't forget to customize your [Sync configuration flow](https://docs.codat.io/docs/customizing-the-sync-configuration-flow).
:::
