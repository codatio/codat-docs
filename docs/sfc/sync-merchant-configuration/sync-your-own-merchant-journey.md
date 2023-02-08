---
title: "Building your own merchant configuration"
hidden: true
createdAt: "2022-02-09T14:35:17.586Z"
updatedAt: "2022-08-16T10:27:41.705Z"
---

:::Caution Sync for Commerce: beta testing

Note that Sync for Commerce is in the beta phase.
:::

Building your own merchant configuration requires you to complete the following steps:

1. [Create a Codat company to push the merchant’s commerce data into and establish an accounting data connection.](/sync-your-own-merchant-journey#creating-a-company-and-establishing-a-data-connection)
2. [Enable the merchant to configure the mapping of their commerce data into their accounting platform.](/sync-your-own-merchant-journey#data-mapping-configuration)
3. [Enable the merchant to perform ongoing integration configuration](/sync-your-own-merchant-journey#ongoing-configuration) and [disable their connection](/sync-your-own-merchant-journey#disabling-a-data-connection).

## Before you start

Before you start, prepare the following details:

- The `key` of the accounting integration selected by the merchant which you obtained at the [Accounting platform selection](/sync-platform-selection) stage.
- The ID that you use for the merchant in _your_ internal system.

You can use our Postman collection to help you follow the steps outlined in this guide.

<div>
  <a
    href="https://postman.codat.io/#166a0b48-9f98-47f6-91cd-0986a3de626f"
    target="_blank"
    style={{
      minHeight: "32px",
      minWidth: "128px",
      border: "none",
      backgroundImage: 'url("https://run.pstmn.io/button.svg")',
      cursor: "pointer",
    }}
  >
    <button class="postman-button"></button>
  </a>
</div>

All the endpoints mentioned in this guide are also available in the <a href="https://api.codat.io/sync/swagger" target="_blank">Sync for Commerce Swagger</a>. Before you use Swagger, make sure to [authenticate](/step-1-authenticate).

As an alternative, you can also use our Sync for Commerce Postman collection.

## Creating a company and establishing a data connection"

After the merchant [selects the accounting platform](/sync-platform-selection) to pull the data from, perform the following steps:

1. Create a Codat company for the merchant:

```
POST /meta/companies/sync
```

**Request body:**

```
{
  "name": "value"
}
```

:::info Use your merchant ID for the company name

We recommend that you populate the `name` value with the ID that you use for the merchant in _your_ internal system so that it’s easier to identify the Codat company that corresponds to your record of the merchant.
:::

:::Caution Forbidden characters

Company names may only contain letters, numbers, spaces, and the following symbols: `-`, `'`, `&`, `@`, `.`, `,`, `?`, `!`.
:::

Any forbidden characters will be removed from your company name. For example, `Example Company (Codat[1])` will be created as `Example Company Codat1`.

This API request creates a company in Codat and a respective connection representing your platform.

The response to this request includes the parameters of a newly created company, including the Codat company ID (hereafter referred to as `companyId`) that you will need at later stages of building your merchant configuration.

```
{
"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
"name": "string",
"created": "2022-03-29T18:07:13.181Z",
"dataConnections": [
  {
    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "integrationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "sourceId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "platformName": "string",
    "linkUrl": "string",
    "status": "string",
    "lastSync": "2022-03-29T18:07:13.181Z",
    "created": "2022-03-29T18:07:13.181Z",
    "sourceType": "string",
    "dataConnectionErrors": [
      {
        "statusCode": "string",
        "statusText": "string",
        "errorMessage": "string",
        "erroredOnUtc": "2022-03-29T18:07:13.181Z"
      }
    ]
  }
]
}",
      "language": "json",
      "name": "Creating a Codat company: sample response"
    }
  ]
}
[/block]

:::Caution Keep track of the `companyId`

It's important that you keep track of the Codat `companyId` that is returned at step 1:
* It is required for the next stage of the setup, [ data pushing,](/sync-data-pushing) and any time you need to synchronize data for this merchant or interact with their configuration.
* It is required to enable disconnected merchants to reauthorize the connection to their original Codat company without losing the history of data.

:::

Here is an example of a Codat `companyId`:

```

"id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"

```
2. Establish an accounting data connection with the company created at the previous step of this guide:

```

POST /meta/companies/{companyId}/connections

```
**Request body**: `“key”`, for example `“gbol”` for Xero

3. From the response, identify the `linkUrl` value for the accounting platform. Direct the merchants to this linkUrl to enable them to grant access to their accounting platform. As soon as the access is provided, Codat automatically pulls [all the accounting data required to enable the merchant configuration](/sync-commerce/overview#sync-for-commerce-prerequisistes).

```

{
"id": "b7898332-7886-4e27-8c34-9615a3721bbe",
"integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
"sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
"platformName": "Xero",
"linkUrl": "https://link-api-uat.codat.io/companies/63e34e58-6843-4f2d-b9c5-aee32ca31f40/connections/b7898332-7886-4e27-8c34-9615a3721bbe/start",
"status": "PendingAuth",
"created": "2022-03-29T18:14:41Z",
"sourceType": "Accounting"
}",
"language": "json",
"name": null
}
]
}
[/block] 4. After the merchant completes the authorization and grants access to their accounting platform, ensure they are redirected to your data mapping configuration UI by [configuring relevant redirect URLs](/redirect-urls)..

## Data mapping configuration

Before the merchant can move on to the data mapping configuration stage, the initial pull of their accounting data must be completed. It usually takes less than a minute to complete.

To check whether the data has been processed successfully, `(GET) /meta/companies/{companyId}/pull/history/`.

Use the dataType query parameter to filter the result by the data type, for example: `query=dataType=bankAccounts`

Here are the data types that need to be synced before the mapping configuration stage:

- `chartOfAccounts`
- `taxRates`
- `bankAccounts`
- `suppliers`
- `customers`
- `company`

To enable the merchant to configure their data mapping, perform the following steps:

1. Perform this call to get the available configuration options:

```
GET /config/companies/{companyId}/sync/commerce
```

2. Based on these configuration options, build a UI that allows the merchant to:

- Enable or disable each section of the synchronization
- Choose which accounts within their accounting platform to push the data into
- Group data based on a time period, tax rates, and any custom grouping types
- Link tax rates from their accounting platform to those used for their eCommerce or POS data
- Update mapping at any point in time, should the underlying data in their accounting platform change (e.g. due to account deletion)
- Schedule the start date, start time, and frequency of the regular data synchronization

To learn more about scheduling data synchronization, you can read [this article](/synchronization-schedule).

:::danger Scheduling

As sales data is typically represented on a calendar day basis, we strongly recommend scheduling the synchronization to start at 12:00 AM of your merchant’s calendar zone provided in the UTC format, rather than allowing a merchant to configure a time of their choice. For example, for UTC-2 time zone, schedule the time to 2 AM UTC.

Such an approach ensures that a full calendar day’s worth of data is synchronized, which facilitates the reconciliation of data between the merchant’s commercial and accounting platforms.
:::

:::info
You can see [Codat’s merchant configuration flow](/implementing-codats-no-code-merchant-configuration) for an example of a UI implementing this functionality.
:::

3. Update the configuration via the Create Config endpoint:

```
POST /config/companies/{companyId}/sync/commerce
```

See the [Data model](/sync-data-model) section for details on account mapping and validation requirements.

## Ongoing configuration

Enable merchants to view or update their integration settings via the Config API.

To retrieve the current configuration and available configuration options:

```
GET /config/companies/{companyId}/sync/commerce
```

To save a new configuration based on the user’s selections:

```
POST /config/companies/{companyId}/sync/commerce
```

## Disabling a data connection

To disable a data connection, deauthorize the access to your merchant’s accounting platform using the following request:

```
PATCH /meta/companies/{companyId}/connections/{connectionId}

{
"status": "Unlinked"
}
```

In the request above, the `connectionId` is the ID of the accounting data connection that you want to deauthorize that can be retrieved from:

```
GET meta/companies/{companyId}/connections
```

When you disable a data connection, the next scheduled data sync will fail, and no further data syncs will be attempted.

Only the data from the latest synchronization is removed. Your configuration is retained, and, if the connection is restored, the next synchronization will happen as scheduled.

:::info

It is not possible to deauthorize a connection using the [no-code Sync for Commerce merchant configuration flow UI](docs:implementing-codats-no-code-merchant-configuration), only delete it. If you delete the connection, the configuration will be removed, as well as any data that has been synchronized.
:::

To restore the connection, access to the merchant’s accounting data must be restored and the data syncs must be re-enabled:

- The merchant must complete the Sync for Commerce flow to re-authorize access to their accounting platform. Make sure to provide them with the same Sync for Commerce URL as used to establish the original connection to ensure they connect to the right Codat company.
- You must re-enable the synchronization of data by updating the merchant’s company configuration and setting the `enabled` property to `true`:

```
POST /config/companies/{companyId}/sync/commerce
```

To remove the merchant’s data from Codat completely, you can delete the company:

```
DELETE /companies/{companyId}
```

This request deletes the company, its data connections, the data mapping configuration, and the related data. The next scheduled data sync will not take place, and no further data syncs will be attempted.

:::danger
Company deletion is not reversible!
:::

## How to trigger data synchronization for testing

Sync for Commerce is intended to be used with a set data synchronization schedule. However, you can trigger data syncs manually for testing purposes:

1. Identify the time range for the sync. To avoid duplicates, the start date should not be earlier than the date of the latest successful synchronization.

To find the date of the latest successful sync:

```
GET /companies/{companyId}/sync/status/lastSuccessful
```

2. Deactivate the scheduled syncs to avoid duplicate data: update the [Data mapping configuration object](/sync-your-own-merchant-journey#data-mapping-configuration) and set the `enabled` property to `false`.

:::danger Disable scheduled synchronization for testing

Note that if you trigger a manual sync without disabling scheduled syncs, it will lead to duplicate data in the target accounting platform. For example, if you trigger a sync at 3 PM, it will take place immediately. However, the next scheduled sync will still include the payload of the latest 24 hours, including the period that’s already been synchronized.
:::

3. Push the data:

```http
POST /companies/{companyId}/sync/historic",
```
