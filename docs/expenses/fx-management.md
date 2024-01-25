---
title: "Expenses in foreign currency"
sidebar_label: Expenses in foreign currency
description: "Management of foreign currency transactions with Sync for Expenses"
displayed_sidebar: expenses
---

## Overview

While running their business, your customer might purchase stock for their small business from a foreign supplier online, paying them in the supplier's local currency. 

Alternatively, they might travel abroad on business, carrying a card linked to a bank account in their home currency. When they spend money at a local merchant, they incur a business expense.

These scenarios result in **multicurrency transactions**, or transactions where one or more foreign currencies are involved. 

Whether you provide a separate bank account for each currency or convert the amount back to the currency of your customer's bank account, you can sync these transactions to your SMB's accounting platform with Sync for Expenses. 

### Currency variables

For multicurrency transactions, you have to consider the following variables:

- The base currency of the business and its expense account in its accounting platform
- The currency of the bank account used to perform the transaction
- The currency of the expense transaction itself

Certain combinations of the above may not be supported by the accounting platform your customer uses or not relevant for a specific transaction type. We will go through this in detail in subsequent sections. 

Sync for Expenses includes built-in validations against such scenarios for every platform we support. Your customer's multicurrency transactions will be checked to ensure the transaction sync is successful.

### Tips and traps

- When the transaction or card currency differ from the company's base currency, you must specify the exchange rate to be used to convert the amount in the `currencyRate` field. It's mandatory to express transactions in the base currency for accounting and reporting purposes.

- It is not possible to perform currency conversion when two or more non-base currencies participate in the transaction. For example, if a company's base currency is USD and the transaction currency is GBP, then the bank account used must be in USD or GBP.

## Payments

Payments are a transaction type that represents regular spend taking place on an account. You can [read more](/expenses/sync-process/expense-transactions#transaction-types) about transaction types used in Sync for Expenses. 

In multicurrency scenarios, there are five possible combinations of currencies that participate in a payment:

| Currency variables       | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
|--------------------------|------------|------------|------------|------------|------------|
| Base and expense account | GBP        | GBP        | GBP        | GBP        | GBP        |
| Bank account             | GBP        | USD        | USD        | GBP        | USD        |
| Transaction              | GBP        | USD        | GBP        | USD        | EUR        |

:::info Foreign currency in Xero

When recording transactions in foreign currency, Xero does not take transaction currency into account. As a result, some of the currency combinations outlined above become redundant.

:::

We validate the multicurrency transactions you push to Sync for Expenses to ensure the currency combination will be accepted by the target accounting platform as a valid expense.

<table>
<thead>
  <tr>
    <th>Integration</th>
    <th>Card type</th>
    <th>Option 1</th>
    <th>Option 2</th>
    <th>Option 3</th>
    <th>Option 4</th>
    <th>Option 5</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Dynamics</td>
    <td></td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">NetSuite</td>
    <td>Credit</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Prepaid</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Sage Intacct</td>
    <td></td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">QuickBooks Online</td>
    <td>Credit</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Prepaid</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Xero</td>
    <td></td>
    <td>✔️</td>
    <td>✔️</td>
    <td>Same as O2</td>
    <td>Same as O1</td>
    <td>Same as O2</td>
  </tr>
</tbody>
</table>


## Refunds

Refunds are a transaction type that represents any refunds and returns on an original transaction. You can [read more](/expenses/sync-process/expense-transactions#transaction-types) about transaction types used in Sync for Expenses. 

In multicurrency scenarios, there are five possible combinations of currencies that participate in a refund:

| Currency variables       | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
|--------------------------|------------|------------|------------|------------|------------|
| Base and expense account | GBP        | GBP        | GBP        | GBP        | GBP        |
| Bank account             | GBP        | USD        | USD        | GBP        | USD        |
| Transaction              | GBP        | USD        | GBP        | USD        | EUR        |

:::info Foreign currency in Xero

When recording transactions in foreign currency, Xero does not take transaction currency into account. As a result, some of the currency combinations outlined above become redundant.

:::

We validate the multicurrency transactions you push to Sync for Expenses to ensure the currency combination will be accepted by the target accounting platform as a valid expense.

<table>
<thead>
  <tr>
    <th>Integration</th>
    <th>Card type</th>
    <th>Option 1</th>
    <th>Option 2</th>
    <th>Option 3</th>
    <th>Option 4</th>
    <th>Option 5</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Dynamics</td>
    <td></td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">NetSuite</td>
    <td>Credit</td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Prepaid</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Sage Intacct</td>
    <td></td>
    <td>✔️</td>
    <td>❌</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">QuickBooks Online</td>
    <td>Credit</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td>Prepaid</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>❌</td>
    <td>✔️</td>
    <td>❌</td>
  </tr>
  <tr>
    <td rowspan="2">Xero</td>
    <td>Credit</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>Same as O2</td>
    <td>Same as O1</td>
    <td>Same as O2</td>
  </tr>
  <tr>
    <td>Prepaid</td>
    <td>✔️</td>
    <td>✔️</td>
    <td>Same as O2</td>
    <td>Same as O1</td>
    <td>Same as O2</td>
  </tr>
</tbody>
</table>

## Transfers

A transfer is a transaction type that represents the movement of money between two bank accounts. This can be a bank withdrawal, a top-up of a debit card account, or a pay-down of a credit card account. As a result, different variables participate in the possible currency combinations: the company's base currency, and the currencies of the sender and receiver bank accounts. 

You can [read more](/expenses/sync-process/expense-transactions#transaction-types) about transaction types used in Sync for Expenses. 

| Currency variables       | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
|--------------------------|------------|------------|------------|------------|------------|
| Base | GBP        | GBP        | GBP        | GBP        | GBP        |
| Bank account (from)            | GBP        | USD        | USD        | GBP        | USD        |
| Bank account (to)              | GBP        | USD        | GBP        | USD        | EUR        |

We validate the multicurrency transactions you push to Sync for Expenses to ensure the currency combination will be accepted by the target accounting platform as a valid expense. 

| Integration       | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
|-------------------|----------|----------|----------|----------|----------|
| QuickBooks Online | ✔️        | ✔️        | ✔️        | ✔️        | ❌        |
| Xero              | ✔️        | ✔️        | ✔️        | ✔️        | ✔️        |

---
## Read next

- [API reference](/sync-for-commerce-api#/)
- [Sync for Expenses overview](/expenses/overview)
- [Expense transaction types](/expenses/sync-process/expense-transactions#transaction-types)

