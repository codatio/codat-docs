---
title: "Sync transactions"
sidebar_label: "Sync transactions"
description: "Record transactions in your customer's accounting software and monitor the progress of dataset syncs"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Sync transactions

Once you have created your customer's expense transaction data, a sync will initiated automatically that then records the expenses in the customer's accounting software. 

You can continue pushing new expenses to Codat while a sync is ongoing. 

```http title="Sync transactions"
 POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs
    {
       "syncIds": ["fd4cc60e-8666-4443-8fad-12c56d7420ee"]
    }
```

## Check sync status

Once you have initiated the sync, you may want to check whether the sync was completed successfully and view the details of any errors that may have occurred.

### Webhook events

We recommend you use webhooks to listen to events and track the sync status. To set up a [webhook consumer](/using-the-api/webhooks/create-consumer), navigate to **Settings > Webhooks > Configure consumer** in the [Codat Portal](https://app.codat.io/settings) and click **Add  endpoint** that listens to the following events:

* **Expenses sync failed** event of `SyncFailed` type is triggered if any failures occurred during the sync process.
* **Expenses sync completed** event of `SyncCompleted` type is triggered when a sync completes.

You can [read more](/using-the-api/webhooks/overview) about webhooks at Codat and various events we offer to monitor.

<details>
  <summary>Sync status codes</summary>

| Code | Reason                                        |
| :--- | :-------------------------------------------- |
| 1000 | In progress                                   |
| 1010 | In progress (Long running - over ten minutes) |
| 2000 | Success (Data pushed)                         |
| 2040 | Success (No data pushed)                      |
| 4000 | Configuration error                           |
| 4040 | Company deleted/de-authorized                 |
| 4220 | Company deleted/de-authorized                 |
| 4260 | Accounting platform billing expiry            |
| 5000 | Generic server error                          |
| 5080 | Duplication protection                        |
| 5120 | Data processing error                         |
| 5130 | Data push error                               |

</details>

### Sync status via API

Alternatively, you can check the sync status via our API using any of the following endpoints:

* [Latest sync status](/sync-for-expenses-api#/operations/get-latest-sync) to check the status of the last initiated sync.
* [Last successful sync](/sync-for-expenses-api#/operations/get-last-successful-sync) to view the most recent sync that completed successfully.
* [List sync statuses](/sync-for-expenses-api#/operations/list-syncs) to display status details of all syncs for a specified company.
* [Get sync status](/sync-for-expenses-api#/operations/get-sync-by-id) to check the status details of a specified sync.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/syncId/status
```

</TabItem>

<TabItem value="Success" label="Sync Successful">

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

</TabItem>

<TabItem value="Failed" label="Sync Failed">

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

</TabItem>

</Tabs>

### Transaction status

If you want to check the status of individual transactions, use the [Get sync transaction](/sync-for-expenses-api#/operations/get-sync-transaction) endpoint. It also returns errors associated with the transaction if it was unsuccessful.

Alternatively, use the [List sync transactions](/sync-for-expenses-api#/operations/list-sync-transactions) endpoint to view statuses for all transactions in a specified sync.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions
```

</TabItem>

<TabItem value="Success" label="Successful Transactions">

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

</TabItem>

<TabItem value="Failed" label="Failed Transactions">

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

</TabItem>

</Tabs>

## Monitor sync health

Use the Sync for Expenses product menu in the [Codat Portal](https://app.codat.io/) to navigate to [Sync Health](/products/sync-for-expenses) and monitor the status of your syncs, review detailed logs and error messages, and view and retry pushing failed items. This helps your support team to resolve common issues with the customer's settings or actions.

<img
  src="/img/sync-for-commerce/0006-sync-health-ui.png"
  alt="Sync Health page view with numbered annotations on the key page elements: the dashboard, filters, status filter, and the main data table"
/>

- Check the **dashboard** (1) for a visual summary of sync totals.
- Use the **search bar** (2) to narrow down the records by sync ID or company ID. 
- Display the sync history for a specific period by indicating a **date range** (3). 
- Review the possible statuses of the syncs and filter the records by their **status code** (4). 
- Use the **menu** (6) to sort and amend the **sync history** (5) table as needed.

#### View detailed records

To view more detailed information about a record, click on an item in your **sync history**. The information appears in the **Sync Details** window and provides sync start and end times, and sync source and target platforms. 

It also displays client-friendly notes and error messages in case of sync failures. 

You can also navigate to the **Config** tab to view and download the customer's sync configuration, which helps establish root causes for any errors that ocurred. 

#### View push items

In the same detailed record view, select the **Push items** tab to access a list of **push items**. The list contains an item for each accounting data type that was produced in the selected sync. 

Here, you can view each item's status, search the items by their core ID or data type, or filter them by status.  

#### Retry push items

On the **Push items** tab, you can also retry the push items in failed status. Click the **Retry failed items** button to trigger another attempt to push the data of all failed push items into the accounting platform. The button is only enabled if there are failed items to retry.

#### 💡 Tips and traps

- Syncs are shown as failed if any of the included items fail to push. Therefore, if a sync contains a mix of failed and successfully pushed records, it will still be marked as failed. 
- Sync history does not display the date range for data pulled from the platform that is used in the sync.

---

## Read next

* Attach receipts to the expense transaction using [attachment upload](/expenses/sync-process/uploading-receipts)
* Review our [FAQ](/expenses/faq) to find out more about Sync for Expenses
* Try Sync for Expenses in our interactive [API reference](/sync-for-expenses-api#/)
