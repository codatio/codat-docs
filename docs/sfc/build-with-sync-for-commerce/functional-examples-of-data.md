---
title: "Example data"
description: "How Codat breaks down Orders, Payments, and Transactions data to represent it in the SMB’s accounting platform"
createdAt: "2022-06-18T11:57:17.385Z"
updatedAt: "2022-11-16T16:43:05.341Z"
---

Codat uses the Orders, Payments, and Transactions data you push to us to represent it in the SMB’s accounting platform.

We include some examples of how the data is represented **in the accounting platforms’ UI** in our [Xero mapping specification](/integrations/accounting/xero/xero-mapping-specification) and [QuickBooks Online mapping specification](/qbo-mapping-specification).

Our [Sync for Commerce Postman collection](https://postman.codat.io/#166a0b48-9f98-47f6-91cd-0986a3de626f) also includes some sample Orders, Payments, and Transactions `POST` requests that you can use as an example.

:::info Checking data mapping
To check whether the data has been mapped to the accounting platform successfully, follow the steps outlined in the [Data pushing](/sync-data-pushing) section.
:::

:::caution Required data types

**ALL** the data types listed for each feature are required. If you don’t push any of these data types, the sync will fail and no data will be displayed in the SMB’s accounting platform.
:::

## Sales

The Sales feature represents all sales made in the course of a company’s normal business activities during a set period of time.

To map Sales to a merchant’s accounting platform, perform these steps:

1. Push the [Orders](/commerce-api#/schemas/orders) that represent any Sales made during the day. See [Example 1](/functional-examples-of-data#example-1-an-order-representing-a-sale).
2. Push the [Payments](/commerce-api#/schemas/payments) associated with the Orders from Step 1. See [Example 2](/functional-examples-of-data#example-2-a-payment-associated-with-the-order-from-example-1).
3. Push the [Transactions](/commerce-api#/schemas/transactions) that will enable reconciliation of the Orders from Step 1 with the Payments from Step 2. See [Example 3](/functional-examples-of-data#example-3-a-transaction-that-reconciles-the-order-from-example-1-and-the-payment-from-example-2).
   Codat reconciles Payments and Orders using the `id` property, as shown in [Example 3](/functional-examples-of-data#example-3-a-transaction-that-reconciles-the-order-from-example-1-and-the-payment-from-example-2).
4. Push the [Transactions](/commerce-api#/schemas/transactions) that represent the commerce service [Payment fees](/integrations/accounting/xero/xero-mapping-specification#payment-fees) associated with the submitted Payments and Orders. This allows for reconciliation with the corresponding Payments and Orders. See [Example 4](/functional-examples-of-data#example-4-a-transaction-that-reconciles-the-order-from-example-1-and-the-payment-of-commerce-provider-fees-associated-with-this-order).
   Note that this only applies if you receive processing fees from your SMBs.
   Codat reconciles the Payment fee Transaction with the associated Payments and Orders using the `id` property, as shown in [Example 4](/functional-examples-of-data#example-4-a-transaction-that-reconciles-the-order-from-example-1-and-the-payment-of-commerce-provider-fees-associated-with-this-order).

### Example 1: An Order representing a sale

```json
{
"id": "1f463dc2-51c2-46a1-891d-bb4b279f8e36",
"orderNumber": "1f463dc2-51c2-46a1-891d-bb4b279f8e36",
"country": "GB ",
"currency": "GBP",
"createdDate": "2022-02-14T15:46:18Z",
"closedDate": "2022-02-14T15:46:18Z",
"totalAmount": 85,
"totalRefund": 0,
"totalTaxAmount": 0,
"totalDiscount": 0,
"totalGratuity": 0,
"orderLineItems": [
  {
    "id": "01e1f4f6-2e5d-4e24-908c-2f46e7456928",
    "quantity": 1,
    "taxPercentage": 0,
    "totalAmount": 85,
    "totalTaxAmount": 0,
    "unitPrice": 85,
    "discountAllocations": []
  }
],
"payments": [],
"serviceCharges": [],
"locationRef": {
    "id": "52a50627-c0f5-42c3-90d5-8bf42ae6020b"
},
"sourceModifiedDate": "2022-02-14T15:46:18Z"
}

```

To learn how you can use the Order data type and what is represented by each field, read [Orders](/commerce-api#/schemas/orders).

### Example 2: A Payment associated with the Order from Example 1

```json
{
"id": "0944c8e6-eb01-4b28-a842-d0693f459395",
"amount": 85,
"currency": "GBP",
"type": "Card",
"status": "Paid",
"dueDate": "2022-02-14T15:46:17Z",
"createdDate": "2022-02-14T15:46:17Z",
"modifiedDate": "2022-02-15T06:53:11Z",
"sourceModifiedDate": "2022-02-14T15:46:20Z"
}

```
This example represents a card payment. Including the payment type in the Payment allows the SMB to reconcile payments of different types with different asset accounts.

To learn how you can use the Payments data type and what is represented by each field, read [Payments](/accounting-api#/schemas/payments).

### Example 3: A Transaction that reconciles the Order from Example 1 and the Payment from Example 2

```json
{
//This id should match the id of the associated Payment
"id": "0944c8e6-eb01-4b28-a842-d0693f459395",
"totalAmount": 85,
"currency": "GBP",
"type": "Payment",
"transactionSourceRef": {
//This id should match the ID of the associated Order
"id": "1f463dc2-51c2-46a1-891d-bb4b279f8e36",
"type": "Order"
},
"createdDate": "2022-02-14T15:46:17Z",
"modifiedDate": "2022-02-15T06:53:11Z",
"sourceModifiedDate": "2022-02-14T15:46:20Z"
}

```

To learn how you can use Transactions data type and what is represented by each field, read [Transactions](/commerce-api#/schemas/transactions).

### Example 4: A Transaction that reconciles the Order from Example 1 and the Payment of commerce provider fees associated with this Order
```json

{
//This id should match the id of the associated Payment
"id": "0944c8e6-eb01-4b28-a842-d0693f459395",
"totalAmount": -1.49,
"currency": "GBP",
"type": "PaymentFee",
"transactionSourceRef": {
//This id should match the `id` of the associated Order
"id": "0944c8e6-eb01-4b28-a842-d0693f459395",
"type": "Payment"
},
"createdDate": "2022-02-14T15:46:17Z",
"modifiedDate": "2022-02-15T06:53:11Z",
"sourceModifiedDate": "2022-02-14T15:46:20Z"
}

```

To learn how you can use Transactions data type and what is represented by each field, read [Transactions](/commerce-api#/schemas/transactions).