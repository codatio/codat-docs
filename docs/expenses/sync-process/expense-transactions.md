---
title: "Expense transactions"
description: Create expense-transaction datasets to represent your customers spend
---

An [expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction) represents the context behind the purchase.

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
      "type": "Payment",
      "issueDate": "2023-12-13T00:00:00+00:00",
      "currency": "GBP",
      "currencyRate": 1.26,
      "contactRef":{
          "id":"an-id-to-a-suppliers-record",
          "type": "Supplier"
      },
      "postAsDraft": false,
      "merchantName": "Amazon UK",
      "lines": [
        {
          "netAmount": 110.42,
          "taxAmount": 14.43,
          "taxRateRef": {
            "id": "an-id-to-a-taxRates-record"
          },
          "accountRef": {
            "id": "id-of-the-expense-nominal-account"
          },
          "trackingRefs": [
            {
              "id": "an-id-to-a-trackingCategories-record",
              "dataType": "trackingCategories"
            }
          ],
          "invoiceTo": {
              "id": "an-id-to-a-customers-record",
              "dataType": "customers"
          }
        }
      ],
      "notes": "Amazon UK | Online Purchase | Order 123XX45"
    }
  ]
}
```
### Drafted state transactions
Some accounting platforms allow users to push their transactions into a drafted state. This state means users can review the transaction in the accounting platform before the expense is posted into a more final state prior to reconcilaton. By using the `postedAsDraft` item you can choose if the expense should either by pass the posted state or go into the drafted state. This functionality is currently only supported by Dynamics 365 Business Central. 

### taxRateRef default values
In some cases you may wish to remove an associated tax rate from an expense. For each accounting platform there is a default value to use so it has no impact on the expense:
- QBO: `NON`
- Xero: `NONE`
- Netsuite: `-7`

## Transaction types

The way Codat handles, maps and processes a transaction is based on the specified `type` of the transaction.


<ul className="card-container col-2">
  <li className="card">
    <div class="header">
      <h3>Payment</h3>
    </div>
    <p>
      Is used to represent any spend that takes place on the account and interest on credit purchases. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>Refund</h3>
    </div>
    <p>
      Can be used to represent any refunds and returns on an original transaction.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>Reward</h3>
    </div>
    <p>
      Can be used to represent reward redemptions such as cashback.
    </p>
  </li>
<li className="card">
    <div class="header">
      <h3>Chargeback</h3>
    </div>
    <p>
      Is similar to a refund in behavior and represents a return of transaction or payment sum which may have been disputed.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>TransferIn</h3>
    </div>
    <p>
      A transfer that decreases the balance of the credit card account or increases the balance of a bank account. </p>
<p>Can be used to represent a top up of debit card account, a pay down of a credit card account or a balance transfer to another credit card.</p>
    
  </li>

  <li className="card">
    <div class="header">
      <h3>TransferOut</h3>
    </div>
    <p>
      A transfer that increases the balance of the credit account or decreases the balance of a bank account.</p>
<p> Can be used to represent cash withdrawals or balance transfer to another credit card.</p>
    
  </li>
  <li className="card">
    <div class="header">
      <h3>AdjustmentIn</h3>
    </div>
    <p>
      An adjustment that decreases the balance of the credit account or increases the balance of a bank account. </p>
      <p>Can be used to represent write-offs & transaction adjustments such as foreign exchange adjustments. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <h3>AdjustmentOut</h3>
    </div>
    <p>
      An adjustment that increases the balance of the credit account or decreases the balance of a bank account. </p>
<p>Can be used to represent write-offs & transaction adjustments such as foreign exchange adjustments. 
    </p>
  </li>

</ul>

