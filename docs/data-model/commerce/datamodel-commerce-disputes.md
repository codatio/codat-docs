---
title: "Disputes"
description: "Details of a customer dispute"
createdAt: "2020-09-16T17:27:53.144Z"
updatedAt: "2022-11-22T12:57:07.781Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceDisputes" target="_blank">Commerce Disputes</a> endpoints in Swagger.

You can use data from the Disputes endpoints to calculate key metrics, such as the number of chargebacks.

View the coverage for disputes in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-disputes" target="_blank">Data coverage explorer</a>.

## Overview

A customer may file a payment dispute with their bank or other card issuer when they're unsatisfied with their purchase or believe they have been charged incorrectly. For example:

- They didn't receive an order.
- The product they received was different to the commerce store's description.
- They've been the victim of online fraud.

From the Disputes endpoints you can retrieve:

- A list of all the disputes for a commerce company:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-disputes`.
- The details of an individual dispute:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-disputes/{disputeId}`.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Decription",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier for the dispute, unique to the [company](https://docs.codat.io/docs/datamodel-commerce-companyinfo).",
"1-0": "**disputedTransactions**",
"1-1": "_array_  
See [transactionSourceRef](https://docs.codat.io/docs/datamodel-commerce-referencetypes#section-transactionsourceref)",
"1-2": "Transactions linked to the dispute.",
"2-0": "**totalAmount**",
"2-1": "_decimal_",
"2-2": "Total transaction amount that is under dispute.",
"3-0": "**currency**",
"3-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"3-2": "Currency of the disputed transaction.",
"4-0": "**status**",
"4-1": "_string_",
"4-2": "Current status of the dispute, either:

- `Unknown`

- `ChargeRefunded` - The seller decided not to challenge the dispute and refunded the customer.

- `EvidenceRequired` - The initial state of a dispute. If the seller decides to challenge the dispute, they must submit evidence before the due date.

- `Processing` - The seller missed the deadline for submitting evidence and the card issuer has begun to process the dispute.

- `InquiryProcessing` - Submitted evidence is being processed by the card issuer.

- `InquiryEvidenceRequired` - More evidence is required to determine a dispute.

- `WaitingThirdParty` - Evidence is required from a third party.

- `Won` - The seller wins the dispute and the disputed amount is released to their account.

- `Lost` - The seller loses the dispute.

- `Accepted` - The seller accepts that they have lost the dispute and refunds the customer.

- `InquiryClosed` - The inquiry is complete.",
  "5-0": "**reason**",
  "5-1": "_string_",
  "5-2": "Reason for the dispute.",
  "6-0": "**dueDate**",
  "6-1": "_string_  
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "6-2": "Date when the next action in the dispute resolution is due.",
  "7-0": "**createdDate**",
  "7-1": "_string_  
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "7-2": "Date on which the dispute was recorded in the commerce or point of sale platform.",
  "8-0": "**modifiedDate**",
  "8-1": "_string_  
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "8-2": "Date the dispute was last updated in the Codat system.",
  "9-0": "**sourceModifiedDate**",
  "9-1": "_string_  
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "9-2": "Date the customer details were last changed in the commerce or point of sale platform."
  },
  "cols": 3,
  "rows": 10,
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
  "id": "03e608e3-bd1c-454f-8c2b-fb0133e43b95",
  "disputedTransactions": [
    {
      "id": "e63ad857-7e12-4e64-9185-cdfd7c45d09d",
      "type": "Order"
    }
  ],
  "totalAmount": -47.66,
  "currency": "GBP",
  "status": "InquiryEvidenceRequired",
  "reason": "Unhappy with product",
  "dueDate": "2021-03-29T14:39:55",
  "createdDate": "2021-03-22T14:39:55",
  "modifiedDate": "2022-02-02T11:02:45Z",
  "sourceModifiedDate": "2021-03-22T14:39:55"
}
```
