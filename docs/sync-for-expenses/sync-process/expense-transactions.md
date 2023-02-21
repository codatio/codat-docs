---
title: "Expense transactions"
description: Create expense-transaction datasets to represent your customers spend
---

An [expense transaction](/sync-for-expenses-api#/operations/create-expense-dataset) represents the context behind the purchase.

It can include details about the purchase from the mapping options, for example:

- The type of transaction, e.g. a payment or refund

- Which account in the general ledger the transaction should be reconciled to `accountRef`

- The associated tax rates `taxRateRef`

- Any applicable tracking categories `trackingRefs`

When pushing expenses, use your transaction `id` so that it can serve as an idempotency key. Codat validates `id`'s to ensure that every `id` is unique to a company. 
This approach prevents duplicate transactions being created in your SMBs' accounting software.

```json title="Expense transaction"
{
  "items": [
    {
      "id": "08ca1f02-0374-11ed-b939-0242ac120002",
      "type": "payment",
      "issueDate": "2021-05-21T00:00:00+00:00",
      "currency": "GBP",
      "currencyRate": 1.18,
      "merchantName": "Amazon UK",
      "lines": [
        {
          "netAmount": 110.42,
          "taxAmount": 14.43,
          "taxRateRef": {
            "id": "08ca1c6e-0374-11ed-b939-0242ac120002"
          },
          "accountRef": {
            "id": "08ca1c6e-0374-11ed-b939-0242ac120002"
          },
          "trackingRefs": [
            {
              "id": "08ca1c6e-0374-11ed-b939-0242ac120002"
            }
          ]
        }
      ],
      "notes": "Amazon UK | Online Purchase | Order 123XX45"
    }
  ]
}
```

## Transaction Types

The way Codat handles, maps and processes a transaction is based on the specified `type` of the transaction.


<ul className="card-container col-2">
  <li className="card">
    <div class="header">
      <h3>payment</h3>
    </div>
    <p>
      Is used to represent any spend that takes place on the account and interest on credit purchases. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>refund</h3>
    </div>
    <p>
      Can be used to represent any refunds and returns on an original transaction.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>reward</h3>
    </div>
    <p>
      Can be used to represent reward redemptions such as cashback.
    </p>
  </li>
<li className="card">
    <div class="header">
      <h3>chargeback</h3>
    </div>
    <p>
      Is similar, to a refund in behaviour and represents a return of transaction/payment sum which may have been disputed.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>transferIn</h3>
    </div>
    <p>
      A transfer that decreases the balance of the credit card account or increases the balance of a bank account. </p>
<p>Can be used to represent a top up of debit card account, a pay down of a credit card account or a balance transfer to another credit card.</p>
    
  </li>

  <li className="card">
    <div class="header">
      <h3>transferOut</h3>
    </div>
    <p>
      A transfer that increases the balance of the credit account or decreases the balance of a bank account.</p>
<p> Can be used to represent cash withdrawals or balance transfer to another credit card.</p>
    
  </li>
  <li className="card">
    <div class="header">
      <h3>adjustmentIn</h3>
    </div>
    <p>
      An adjustment that decreases the balance of the credit account or increases the balance of a bank account. </p>
      <p>Can be used to represent write-off's & transaction adjustments such as foreign exchange adjustments. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>adjustmentOut</h3>
    </div>
    <p>
      An adjustment that increases the balance of the credit account or decreases the balance of a bank account. </p>
<p>Can be used to represent write-off's & transaction adjustments such as foreign exchange adjustments. 
    </p>
  </li>

</ul>

