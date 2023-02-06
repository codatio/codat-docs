---
title: "Transactions"
description: "Details of financial transactions recorded in a point of sale or commerce system"
createdAt: "2020-09-17T15:32:36.052Z"
updatedAt: "2022-11-22T13:13:47.683Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceTransactions" target="_blank">Commerce Transactions</a> endpoints in Swagger.

You can use data from the Transactions endpoints to calculate key metrics, such as:

- Transaction volumes
- Average transaction volume
- Average transaction value
- Returns
- Payouts

View the coverage for transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-transactions" target="_blank">Data coverage explorer</a>.

## Overview

Details of all financial transactions recorded in the commerce or point of sale system are added to the Transactions data type. For example, payments, service charges, and fees.

From the Transactions endpoints you can retrieve:

- A list of all the transactions for a company:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-transactions`.
- The details of a specific transaction:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-transactions/{transactionId}`.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id**",
"0-1": "_string_",
"0-2": "Identifier of the transaction, unique to the company.",
"1-0": "**totalAmount**",
"1-1": "_decimal_",
"1-2": "Amount of the transaction in the base currency of the commerce or point of sale system.",
"2-0": "**currency**",
"2-1": "_string_  
See [currency](/datamodel-shared-currency)",
"2-2": "Currency of the transaction.",
"3-0": "**transactionSourceRef**",
"3-1": "_[reference type](/datamodel-commerce-referencetypes#section-transactionsourceref)_",
"3-2": "Reference to an event that triggered a new transaction linked to the original, or source, transaction. For example, a card payment that pays for an order will be linked to that order.",
"4-0": "**type**",
"4-1": "_string_",
"4-2": "Types of transaction:

_ `Unknown`  
_ `FailedPayout` — Failed transfer of funds from the seller's merchant account to their bank account.  
_ `Payment` — Credit and debit card payments.  
_ `PaymentFee` — Payment provider's fee on each card payment.  
_ `PaymentFeeRefund` — Payment provider's fee that has been refunded to the seller.  
_ `Payout` — Transfer of funds from the seller's merchant account to their bank account.  
_ `Refund` — Refunds to a customer's credit or debit card.  
_ `Transfer` — Secure transfer of funds to the seller's bank account.",
"5-0": "**subType**",
"5-1": "_string_",
"5-2": "Non-standardised transaction type data from the commerce platform",
"6-0": "**createdDate**",
"6-1": "_string_  
See [date](/datamodel-shared-date)",
"6-2": "Date on which the transaction was first recorded in the commerce or point of sale platform.",
"7-0": "**modifiedDate**",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "Date the transaction was last updated in the Codat system.",
"8-0": "**sourceModifiedDate**",
"8-1": "_string_  
See [date](/datamodel-shared-date)",
"8-2": "Date the transaction was last changed in the commerce or point of sale platform."
},
"cols": 3,
"rows": 9,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Example data

```json
{
  "transactions": [
    {
      "id": "62fce855-4aff-41b0-8607-54e1cf4d35a4",
      "totalAmount": -18.42,
      "currency": "GBP",
      "type": "Refund",
      "transactionSourceRef": {
        "Id": "5bb8f0cb-168f-41ad-ab62-cd511a7e5282",
        "Type": "Order"
      },
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": "2019-05-28T00:44:17",
      "sourceModifiedDate": "2019-05-28T00:44:17"
    },
    {
      "id": "d499e1e4-4c99-4454-a121-e45513d1bf2c",
      "totalAmount": 24.695,
      "currency": "GBP",
      "type": "Payment",
      "transactionSourceRef": {
        "id": "cced057a-8087-4f53-8645-5a54608b3136",
        "type": "Order"
      },
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": "2019-10-18T17:19:07",
      "sourceModifiedDate": "2019-10-18T17:19:07"
    },
    {
      "id": "23054bf1-20ec-43e0-95ad-582cc48dc013",
      "totalAmount": 10.71,
      "currency": "GBP",
      "type": "Payment",
      "transactionSourceRef": {
        "id": "cced057a-8087-4f53-8645-5a54608b3136",
        "type": "Order"
      },
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": "2019-10-18T17:19:07",
      "sourceModifiedDate": "2019-10-18T17:19:07"
    },
    {
      "id": "bc478aeb-2e7c-461a-9465-0b7b96455b34",
      "totalAmount": 17.59,
      "currency": "GBP",
      "type": "Payment",
      "transactionSourceRef": {
        "id": "383c8987-3ddb-407f-8efb-17019c9f6bdf",
        "type": "Order"
      },
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": "2020-11-09T18:25:48",
      "sourceModifiedDate": "2020-11-09T18:25:48"
    },
    {
      "id": "68ba5bef-0cc4-4f63-9d2f-002315d1e907",
      "totalAmount": 12.76,
      "currency": "GBP",
      "type": "Payment",
      "transactionSourceRef": {
        "id": "383c8987-3ddb-407f-8efb-17019c9f6bdf",
        "type": "Order"
      },
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": "2020-11-09T18:25:48",
      "sourceModifiedDate": "2020-11-09T18:25:48"
    }
  ]
}
```
