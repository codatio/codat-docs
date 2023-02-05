---
title: "Step 3: Explore"
slug: "step-3-explore"
hidden: true
createdAt: "2021-03-08T12:07:10.239Z"
updatedAt: "2022-12-14T10:02:11.233Z"
---

Gain immediate insight into the finances of the linked company by:

- Checking data freshness
- Accessing synchronized data
- Pushing data (creating/updating records)

## Check data freshness

1. Go to Codat's [Swagger page](https://api.codat.io/swagger/index.html).
2. Under Companies, use the [GET /companies/{companyId}/dataStatus](https://api.codat.io/swagger/index.html#/DataStatus/get_companies__companyId__dataStatus) endpoint to check the last time a data type was synchronized.
3. The status for the last time each data type was synced successfully: `lastSuccessfulSync`.

<img src="https://files.readme.io/75393fc-fresh_req.png" />

```json Successful synchronisation
{
  "chartOfAccounts": {
    "dataType": "chartOfAccounts",
    "lastSuccessfulSync": "2021-02-21T16:54:16.4132953Z",
    "currentStatus": "Complete",
    "latestSyncId": "4feecd4a-bfb1-4f75-b023-058706be2205",
    "latestSuccessfulSyncId": "4feecd4a-bfb1-4f75-b023-058706be2205"
  },
  "profitAndLoss": {
    "dataType": "profitAndLoss",
    "lastSuccessfulSync": "2021-02-21T16:54:16.8064765Z",
    "currentStatus": "Complete",
    "latestSyncId": "bb29b7f0-d391-4541-a719-3ec3ba1eba4b",
    "latestSuccessfulSyncId": "bb29b7f0-d391-4541-a719-3ec3ba1eba4b"
  },
```

##

## Access synchronised data

Codat exposes endpoints for easily querying each of the supported data types; each of these endpoints is detailed in our [Swagger documentation](https://api.codat.io/swagger/index.html#).

For example, when querying invoices, you can use the [GET /companies/{companyId}/data/invoices ](https://api.codat.io/swagger/index.html#/Invoices/get_companies__companyId__data_invoices) endpoint, with query string parameters as below:

`companyId` – ID of the company you wish to view a data type record (see [GET /companies](https://api.codat.io/swagger/index.html#/Companies/get_companies) endpoint to get `companyId`)  
`pageSize` – the size of page you wish to retrieve  
`page` – which page number you wish to retrieve  
`orderBy` – the property you wish to order the response by  
`query` – any filter you wish to perform on the returned data (see [Querying](https://docs.codat.io/docs/querying-1) for details)

<img src="https://files.readme.io/ac19411-invoices___data_pull.png" />

```json Invoice data
{
  "results": [
    {
      "id": "0736c578-3e50-458a-881a-f4326c88bd85",
      "invoiceNumber": "19959991",
      "customerRef": {
        "id": "06bf0258-4a11-4a44-b141-a991fcb1d7c7",
        "companyName": "Speedy Gonzales"
      },
      "issueDate": "2018-10-05T14:18:10",
      "dueDate": "2018-10-20T14:18:10",
      "modifiedDate": "2021-02-24T17:41:44",
      "sourceModifiedDate": "2018-10-05T14:18:10",
      "paidOnDate": "2018-10-05T15:13:26",
      "currency": "USD",
      "lineItems": [
        {
          "description": "ACMEDisintegratingPistol",
          "unitAmount": 25,
          "quantity": 2,
          "discountAmount": 0,
          "subTotal": 50,
          "taxAmount": 5,
          "totalAmount": 55,
          "trackingCategoryRefs": []
        }
      ],
```

## Push data (creating/updating records)

Codat supports two types of push to a company's data source:

- operations to create a record in a company's accounting software (POST) and
- operations to update an existing record (PUT).

## Create new data

The endpoint for pushing a record is as follows:  
`POST /companies/{companyId}/connections/{connectionId}/push/{dataType}`.  
An example would be [posting a new invoice to an accounting package for your company](https://api.codat.io/swagger/index.html#/Invoices/post_companies__companyId__connections__connectionId__push_invoices).

Required parameters  
`companyId` – ID of company you wish to create new data type record (see [GET /companies](https://api.codat.io/swagger/index.html#/Companies/get_companies) endpoint to get `companyId`)  
`connectionId` – ID of linked platform you wish to create new data type record (see [GET /companies/{companyid}/connections](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections) endpoint to get `connectionId`)

![](https://files.readme.io/759c24d-post_invoice.png "post invoice.png")

```json Sample request
{
  "invoiceNumber": "4000",
  "customerRef": {
    "id": "06bf0258-4a11-4a44-b141-a991fcb1d7c7",
    "companyName": "Codat INC"
  },
  "issueDate": "2021-02-22T22:40:50Z",
  "dueDate": "2021-12-25T00:00:00Z",
  "currency": "GBP",
  "lineItems": [],
  "paymentAllocations": [],
  "status": "Draft",
  "note": "Details of breakdown available on request."
}
```

```json Sample response
{
  "data": {
    "id": "1cee946c-7118-4a89-b924-e9e043b0a294",
    "invoiceNumber": "4000",
    "customerRef": {
      "id": "06bf0258-4a11-4a44-b141-a991fcb1d7c7",
      "companyName": "Codat INC"
    },
    "issueDate": "2021-02-22T22:40:50Z",
    "dueDate": "2021-12-25T00:00:00Z",
    "modifiedDate": "2021-03-01T15:38:09.0606776Z",
    "currency": "GBP",
    "lineItems": [],
    "paymentAllocations": [],
    "totalTaxAmount": 0,
    "totalAmount": 0,
    "amountDue": 0,
    "status": "Draft",
    "note": "Details of breakdown available on request."
  },
  "dataType": "invoices",
  "companyId": "9c3e7a15-de30-4ceb-8293-56763c10f5be",
  "pushOperationKey": "7f6b2d91-339a-4e9c-95dd-37609d55063e",
  "dataConnectionKey": "2c7a0f95-369a-4463-ba40-bec54aebf73b",
  "requestedOnUtc": "2021-03-01T15:38:08.8123391Z",
  "completedOnUtc": "2021-03-01T15:38:09.2462587Z",
  "status": "Success",
  "validation": {
    "errors": [],
    "warnings": []
  },
  "statusCode": 200
}
```

## Update existing data

In addition to POST type of push operation, Codat supports push operations to update an existing record - PUT.

The endpoint for pushing a record is as follows: `PUT/companies/{companyId}/connections/{connectionId}/push/{dataType}`.

An example would be [updating the status of an invoice in an accounting package for your company](https://api.codat.io/swagger/index.html#/Invoices/put_companies__companyId__connections__connectionId__push_invoices__invoiceId_).

Required parameters  
`companyId` – ID of company you wish to update existing data type record (see [GET /companies](https://api.codat.io/swagger/index.html#/Companies/get_companies) endpoint to get `companyId`)  
`connectionId` – ID of linked platform you wish to update existing data type record (see [GET /companies/{companyid}/connections](https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections)) endpoint to get `connectionId`  
`invoiceId` – ID of existing invoice data you wish to update (see [GET /companies/{companyId}/data/invoices](https://api.codat.io/swagger/index.html#/Invoices/get_companies__companyId__data_invoices) endpoint to get `invoiceId`)

![](https://files.readme.io/735abf7-update.png "update.png")

```json Sample request
{
  "status": "Submitted"
}
```

```text Sample response
{
  "data": {
    "id": "1cee946c-7118-4a89-b924-e9e043b0a294",
    "customerRef": {
      "id": "06bf0258-4a11-4a44-b141-a991fcb1d7c7",
      "companyName": "Codat INC"
    },
    "issueDate": "0001-01-01T00:00:00Z",
    "modifiedDate": "2021-03-01T15:54:09.3456723Z",
    "lineItems": [],
    "paymentAllocations": [],
    "totalTaxAmount": 0,
    "totalAmount": 0,
    "amountDue": 0,
    "status": "Submitted"
  },
  "dataType": "invoices",
  "companyId": "9c3e7a15-de30-4ceb-8293-56763c10f5be",
  "pushOperationKey": "18b557a7-5a9a-40a6-8894-60f9413eac3a",
  "dataConnectionKey": "2c7a0f95-369a-4463-ba40-bec54aebf73b",
  "requestedOnUtc": "2021-03-01T15:54:08.9565464Z",
  "completedOnUtc": "2021-03-01T15:54:09.4526621Z",
  "status": "Success",
  "validation": {
    "errors": [],
    "warnings": []
  },
  "statusCode": 200
}
```

:::note Data in Codat

For more information about data management in Codat go to:

- [Pulling data ](https://docs.codat.io/docs/data-flow)
- [Pushing data](https://docs.codat.io/docs/pushing-data)
