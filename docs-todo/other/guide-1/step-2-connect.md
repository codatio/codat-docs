---
title: "Step 2: Connect"
slug: "step-2-connect"
hidden: true
createdAt: "2021-03-08T11:25:04.796Z"
updatedAt: "2022-12-14T10:02:18.898Z"
---

Next, let's connect to a sandbox company. We'll show you how to:

- Add a new company
- Link the company to the Sandbox
- Synchronize company financial data

## Add a new company

Companies in Codat are your customers.

1. On Codat's [Swagger](https://api.codat.io/swagger/index.html) page, select `Companies > POST /companies`, and then **Try it out**.
2. To create a new company, provide a name you want to attribute to it. Parameter `name` is a required parameter to execute this request.

   You can also add the `platformType` parameter to specify an integration platform you would like to set up for the new company. [Retrieve the platform key](/your-first-call-to-the-api-using-api-explorer#retrieve-platform-keys) first and then use it in your request.

   For testing purposes, you may use the sample request below and paste it into the request body.

3. **Execute **the request to the Codat API. You will get a response code of 200 and the response body will contain details of the new company, including the redirect you will need in the next step.

```json Sample request
{
  "name": "Platypus Properties",
  "platformType": "mqjo"
}
```

```json Sample response
{
  "id": "19387529-551c-4d87-922b-023a7154d837",
  "name": "Platypus Properties",
  "platform": "Sandbox",
  "redirect": "https://link.codat.io/company/19387529-551c-4d87-922b-023a7154d837",
  "dataConnections": [],
  "created": "2022-08-19T15:52:31.0338929Z"
}
```

:::note Codat API offers many other company options

- [Change the name of your company ](https://api.codat.io/swagger/index.html#/Companies/put_companies__companyId_)
- [Delete a company ](https://api.codat.io/swagger/index.html#/Companies/delete_companies__companyId_)
- [Get metadata on your company ](https://api.codat.io/swagger/index.html#/Companies/get_companies__companyId_)
  :::

## Link the company to the Sandbox

With a new company created, you can now link it to the Codat Sandbox environment. The Sandbox is a replica of the Portal production environment, supporting all of the same API endpoints. The Sandbox contains dummy accounting data generated especially for the purpose of your testing.

1. Copy the redirect URL returned in the previous step in the response body.
2. Send the redirect URL to your customer. They will need to paste the Link URL into their browser. Next, they will be prompted to go to [Link](/link) where they can connect to the Sandbox and complete the linking process.

Once the company authorizes the connection, its status under [GET /companies/{companyId}](https://api.codat.io/swagger/index.html#/Companies/get_companies__companyId_) changes to: **linked**.

```json Linked company
{
  "id": "2432c867-9983-48c1-b42f-bb3efabfe4e1",
  "name": "Recipe test company",
  "platform": "Sandbox",
  "redirect": "https://link.codat.io/2432c867-9983-48c1-b42f-bb3efabfe4e1/link",
  "status": "Linked",
  "lastSync": "2021-03-01T12:35:19.7095473Z",
  "dataConnections": [
    {
      "id": "ea014f81-d3b4-4d99-a4fe-fd48f226b719",
      "integrationId": "9e0cc03b-3868-4543-98c0-568f0f1b12a3",
      "sourceId": "aff0f057-255f-42c4-8d4a-ae23b43e1615",
      "platformName": "Sandbox",
      "linkUrl": "https://link.codat.io/link/start/2432c867-9983-48c1-b42f-bb3efabfe4e1/ea014f81-d3b4-4d99-a4fe-fd48f226b719",
      "status": "Linked",
      "lastSync": "2021-03-01T12:35:19.7095468Z",
      "created": "2021-03-01T12:34:53Z",
      "sourceType": "Accounting"
    }
  ],
  "created": "2021-03-01T12:34:24Z"
}
```

<img src="https://files.readme.io/f13c824-Link_Site.png" />

## Synchronize company data

Before you can see the data of the linked company in the Codat Portal, they need to be synchronised. In simple terms, synchronization is needed to maintain consistency between the data on the Codat Portal and the data provided by the integration your company has linked to the Portal. When your customer authorises connection to their company data, Codat automatically obtains their datasets.

_Note_: You can configure which data types are synchronized during the first link under [Codat Portal data type settings](/data-sync-settings).

The data set is queued for synchronisation when you make a request to [POST /companies/{companyId}/data/all](https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_all). You can find your company ID in the Codat Portal on the **Companies** tab or in the [GET /companies](https://api.codat.io/swagger/index.html#/Companies/get_companies) endpoint.

![](https://files.readme.io/6045ad6-data_all.png "data all.png")

When Fetch on first link is turned off in the Codat Portal [sync settings](/data-sync-settings) for a data type, you can still synchronise individual data type making a request to POST [/companies/{companyId}/data/queue/{dataType}](https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_queue__dataType_).

<img src="https://files.readme.io/2ad35ec-data_types_bill.png" />

```json Sample response
{
  "id": "dec486c0-082b-4164-bc38-91fadad4c8a4",
  "companyId": "73f61a39-0d2b-4a9e-ab43-36495202f781",
  "connectionId": "6a582306-aab4-40f5-9a2c-03574ff8b9b7",
  "dataType": "bills",
  "status": "Initial",
  "requested": "2021-02-21T17:05:40.5730806Z",
  "progress": 10,
  "isCompleted": false,
  "isErrored": false
}
```
