---
title: "Syncing expenses"
description: "Syncing expense-transaction datasets to your customer's accounting software"
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

Sync for Expenses provides two webhooks that you can subscribe to.

:::caution Multiple syncs
Codat can't accept any requests to initiate another sync while a sync is ongoing.
:::

**Sync Failed**

The `Sync Failed` webhook is triggered if any failures occurred during the sync process.

```json title="Sync Failed webhook"
{
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "RuleId": "289c80dc-2aee-4b71-afff-9acd8d051080",
  "RuleType": "Sync Failed",
  "AlertId": "72c1103b-7f17-4a3a-8db5-67c2d360a516",
  "Message": "Sync 3bead2a1-1b3d-4d90-8077-cddc5ca68b01 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense has failed at step Pushing.",
  "Data": {
    "syncId": "3bead2a1-1b3d-4d90-8077-cddc5ca68b01",
    "syncType": "Expense",
    "SyncDateRangeStartUtc": "2023-05-03T12:57:58.7576091Z",
    "SyncDateRangeFinishUtc": "2023-05-03T12:57:59.7576091Z",
    "FailureStage": "Pushing"
  }
}
```

**Sync Completed**

The `Sync Completed` webhook is triggered when a sync completes without any failures.

```json title="Sync Completed webhook"
{
  "AlertId": "33a4f8e9-09ae-4334-9b00-7bbe83024672",
  "ClientId": "30e0f9d2-52c0-4c9f-a806-bcd98a3bcd7e",
  "ClientName": "Expense Sync",
  "CompanyId": "1f9559e7-8368-48c9-bdf4-f158e16b8b85",
  "Data": {
    "syncId": "321363b4-efa9-4fbc-b71c-0b58d62f3248",
    "syncType": "Expense",
    "SyncDateRangeStartUtc": "2023-05-03T09:56:17.4357111Z",
    "SyncDateRangeFinishUtc": "2023-05-03T09:56:18.4357111Z"
  },
  "Message": "Sync 321363b4-efa9-4fbc-b71c-0b58d62f3248 for company 1f9559e7-8368-48c9-bdf4-f158e16b8b85 of type Expense completed successfully.",
  "RuleId": "5c27631d-3b63-4b50-8228-ee502fd113eb",
  "RuleType": "Sync Completed"
}
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
