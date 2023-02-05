---
title: "Step 5: Monitor your syncs"
hidden: true
createdAt: "2022-09-30T19:00:32.333Z"
updatedAt: "2022-09-30T19:02:14.003Z"
---

Once you have pushed data to Codat, we will initiate the sync process. The process includes fetching the transactional data from the data cache, mapping and validating the data, and then pushing it to the accounting platform.

## Monitor using webhook events

Codat provides three webhooks which you can subscribe to:

:::danger
Initially Codat will not be able to accept any new expenseTransactions or expenseReconciliations whilst a sync is ongoing.
:::

- Sync Started: this will be triggered when a sync process for a company starts.
- Sync Failed: This will be triggered if there are any failures during the sync process.
- Sync Completed: This will be triggered when a sync completes without any failures.

## Sync Status

Once you have pushed data to Codat, you can use the sync status endpoints to check whether the sync was completed successfully and see the details of any errors that may have occurred.

`GET /companies/{companyId}/connections/{connectionId}/sync/expenses/status/{syncId}`

```
{
"companyId": "71c1fdae-e104-4668-8a4c-7f795aafc2a4",
"syncId": "ea86bb15-7a89-4b2d-a18d-626cc0e28137",
"syncStatusCode": 2000,
"syncStatus": "Complete",
"errorMessage": "",
"syncExceptionMessage": "",
"syncUtc": "2022-08-03T01:30:09.0797213Z",
"dataPushed": true
}",
      "language": "json",
      "name": "Sample response (success)"
    }
  ]
}
[/block]

```

{
"companyId": "8cba59e5-ae8a-418b-918a-09f90850e8d8",
"syncId": "2b5d5fd1-f4b2-49de-98c3-ca37a0dcd8cd",
"syncStatusCode": 5130,
"syncStatus": "PushError",
"errorMessage": "An error occurred in a downstream service. Correlation ID: 1f6ab1bc-58c8-4c1a-a654-86464b065f69. Message: Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organisation.",
"syncExceptionMessage": "An error occurred in a downstream service. Correlation ID: 62f0f708-ae37-4b3a-81b1-41f1361f0b40. Message: Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organisation.",
"syncUtc": "2022-08-03T01:11:33.6279333Z",
"dataPushed": true
}",
"language": "json",
"name": "Sample response (error)"
}
]
}
[/block.

## Sync Transactions

In addition to sync status endpoints, Codat provides a transactions endpoint where you can see the status of individual transactions.

This enables you to see if the transaction has synced successfully, or details or the errors associated to the transaction if it was unsuccessful.

`/companies/{companyId}/connections/{connectionId}/sync/expenses/status/{syncId}`

```
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
      },
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
}",
      "language": "json",
      "name": "sample response(success)"
    }
  ]
}
[/block]

```

{
"results": [
{
"transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
"status": "PushError",
"message": "An error occurred in a downstream service. Correlation ID: 0e7ee4bc-50d2-4e07-8f9e-25fdda6bc004. Message: Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organisation.",
"integrationType": "bankfeeds"
},
{
"transactionId": "0331d9b9-a1cd-4d46-84d3-5a17dc6ad43e",
"status": "PushError",
"message": "An error occurred in a downstream service. Correlation ID: 0e7ee4bc-50d2-4e07-8f9e-25fdda6bc004. Message: Feed Connection failed(409): The AccountToken, AccountId or AccountNumber is already connected to another Xero Bank Account in the selected Xero Organisation.",
"integrationType": "bankfeeds"
}
],
"pageNumber": 1,
"pageSize": 100,
"totalResults": 134,
"\_links": {
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
}",
"language": "json",
"name": "Sample response (failure)"
}
]
}
[/block]
