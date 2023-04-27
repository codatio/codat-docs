---
title: "Syncing expenses"
description: "Syncing expense-transaction datasets to your customers accounting software"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Once you have pushed data to Codat and created datasets you can then initiate the sync process.

The sync process includes fetching the transactional datasets from the data cache, validating and mapping the data, and then pushing it to the accounting platform.

:::tip Datasets

Syncs are independent of creating datasets, so you can continue to create new datasets while a sync is ongoing.

:::

```http title="Sync datasets"
 POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs
    {
       "datasetIds": ["fd4cc60e-8666-4443-8fad-12c56d7420ee"]
    }
```

### Webhook events

Codat provides three webhooks which you can subscribe to:

- `Sync Started`: this will be triggered when a sync process for a company starts.

:::caution Multiple Syncs
Codat will **not** be able to accept any new requests to initiate another sync whilst a sync is ongoing.
:::

- `Sync Failed`: This will be triggered if there are any failures during the sync process.

```curl -X 'POST' \
  'https://api.codat.io/rules' \
  -H 'accept: application/json' \
  -H 'Authorization: xxx' \
  -H 'Content-Type: application/json' \
  -d '{
  "type": "sync-failed",
  "notifiers": {
    "webhook": "https://api.dev.v2.infinnitytest.com/api/codat/callback/sync-error"
  }
}'
```

- `Sync Completed`: This will be triggered when a sync completes without any failures.

```curl -X 'POST' \
  'https://api.codat.io/rules' \
  -H 'accept: application/json' \
  -H 'Authorization: xxxxxx' \
  -H 'Content-Type: application/json' \
  -d '{
  "type": "sync-complete",
  "notifiers": {
    "webhook": "https://api.dev.v2.infinnitytest.com/api/codat/callback/sync-complete"
  }
}'
```

### Sync status

Once you have pushed data to Codat, you can use the sync status endpoints to check whether the sync was completed successfully and see the details of any errors that may have occurred.

<Tabs>

<Tabitem value="Request URL" label="Request URL">

```http
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/syncId/status
```

</Tabitem>

<Tabitem value="Success" label="Sync Successful">

```json
{
  "companyId": "71c1fdae-e104-4668-8a4c-7f795aafc2a4",
  "syncId": "ea86bb15-7a89-4b2d-a18d-626cc0e28137",
  "syncStatusCode": 2000,
  "syncStatus": "Complete",
  "errorMessage": "",
  "syncExceptionMessage": "",
  "syncUtc": "2022-08-03T01:30:09.0797213Z",
  "dataPushed": true
}
```

</Tabitem>

<Tabitem value="Failed" label="Sync Failed">

```json
{
  "companyId": "8cba59e5-ae8a-418b-918a-09f90850e8d8",
  "syncId": "2b5d5fd1-f4b2-49de-98c3-ca37a0dcd8cd",
  "syncStatusCode": 5130,
  "syncStatus": "PushError",
  "errorMessage": "An error occurred in a downstream service. Correlation ID: 1f6ab1bc-58c8-4c1a-a654-86464b065f69. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
  "syncExceptionMessage": "An error occurred in a downstream service. Correlation ID: 62f0f708-ae37-4b3a-81b1-41f1361f0b40. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
  "syncUtc": "2022-08-03T01:11:33.6279333Z",
  "dataPushed": false
}
```

</Tabitem>

</Tabs>


### Transactions status

In addition to sync status endpoints, Codat provides a transactions endpoint where you can see the status of individual transactions.

This enables you to see if the transaction has synced successfully, or details or the errors associated to the transaction if it was unsuccessful.



<Tabs>

<Tabitem value="Request URL" label="Request URL">

```http
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions
```

</Tabitem>

<Tabitem value="Success" label="Successful Transactions">

```json
{
  "results": [
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "Completed",
      "integrationType": "bankfeeds"
    },
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "Completed",
      "integrationType": "expense"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 134,
  "_links": {
    "current": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=1&pageSize=100"
    },
    "self": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions"
    },
    "next": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=2&pageSize=100"
    }
  }
}
```

</Tabitem>

<Tabitem value="Failed" label="Failed Transactions">

```json
{
  "results": [
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "PushError",
      "message": "An error occurred in a downstream service. Correlation ID: 0e7ee4bc-50d2-4e07-8f9e-25fdda6bc004. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
      "integrationType": "bankfeeds"
    },
    {
      "transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
      "status": "PushError",
      "message": "An error occurred in a downstream service. Correlation ID: 0e7ee4bc-50d2-4e07-8f9e-25fdda6bc004. Message:  Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organization.",
      "integrationType": "bankfeeds"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 134,
  "_links": {
    "current": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=1&pageSize=100"
    },
    "self": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions"
    },
    "next": {
      "href": "/companies/0c690bba-9fdc-435b-9790-b22928ce1c96/syncs/3f652c19-b6d8-477a-a853-5b726d145cde/transactions?page=2&pageSize=100"
    }
  }
}
```

</Tabitem>

</Tabs>
