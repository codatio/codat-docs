---
title: "QuickBooks Online mapping specification"
description: "Guidelines for data mapping configuration from a commerce platform to QuickBooks Online (QBO)"
createdAt: "2022-04-21T14:02:26.215Z"
updatedAt: "2022-11-23T15:21:21.160Z"
---

## Overview

This document provides guidelines for data mapping configuration from a commerce platform to QuickBooks Online (QBO).

In Codat's Sync Flow UI, the data types are grouped under the three features:

- [Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales)
- [Fees](/sfc/mapping-specifications/qbo-mapping-specification#fees)
- [Payments](/sfc/mapping-specifications/qbo-mapping-specification#payments)

## Sales

The **Sales** feature represents all sales made in the course of a company’s normal business activities during a set period of time.

### Sales account mapping

#### Sales

Sales are booked on a nominal account of the QBO type **Income**. This is the account that the merchant would typically use to book their sales.

The merchant can select an existing account from QBO. If an account is not available, it needs to be created in QBO for this purpose.

Codat pushes a single sales invoice to QBO daily. This invoice represents all sales made over the course of that day.

The invoice is issued to the commerce services provider.

The invoice contains one line item for each tax rate the merchant trades in, with this line item representing the total of all sales at that tax rate.

If no sales have been made for a given tax rate on that day, the corresponding line item will be omitted.

:::caution Rounding

Discounts are applied to the total of the purchase once all the items have been summed up rather than at an item level. As we are splitting out items into VAT percentages across all sales for the day, discounts need to be applied at the item level which may lead to slight rounding discrepancies compared to applying the discount at the summed level. As per the advice of most accounting packages, we add an invoice line of ± 0.01 to bring the total in line with the correct total.
:::

When the merchant receives payment for the reported sales, the invoice is marked as paid and balanced against an invoice payment (see [Payments](/sfc/mapping-specifications/qbo-mapping-specification#payments)).

#### Refunds

Refunds represent a catch-all for all refunds, cash or non-cash.

Similar to **[Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales)**, **Refunds** are usually booked on a nominal account that the merchant uses to book their revenue, of the QBO type **Income**.

Typically, merchants would push **[Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales)** and **Refunds** into the same account. However, they can use a different account if they wish to report them separately.

Codat pushes a credit note to QBO daily. The credit note represents all refunds made over the course of that day.

The credit note contains one line item for each tax rate the merchant trades in, with this line item representing the total of all refunds at that tax rate. If no refunds have been made for a given tax rate on that day, the corresponding line item will be omitted.

When purchase refunds are recorded in QBO, the negative revenue is booked to the selected account.

:::caution Payments

The following information is related to the **Payments** feature. To learn more about the configuration of **Payments**, navigate to the [Payments](/sfc/mapping-specifications/qbo-mapping-specification#payments) section.
:::

To represent the money going back to the customer, a journal entry is pushed crediting the cash account and debiting the debtor’s account.

This is then linked to the credit note through a zero-value ‘receive payment’, which effectively changes the credit note status to paid and creates a payment link on the journal entry.

#### Gratuity

**Gratuity** represents tips collected by the merchant from their customers on payment.

Depending on the merchant’s preference, **Gratuity** can be booked in an **Income** or a **Liability** account.

Gratuity is pushed to QBO as part of the daily [Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales) invoice as a separate line item.

#### Prepaid

The **Prepaid** feature covers the transactions pertaining to selling and redeeming prepaid items, such as gift cards.

Transactions of the type **Prepaid** should be booked into a **Liability** account.

The purchase of prepaid items will appear as a line item on the daily [Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales) invoice in QBO.

Note that when a customer uses the prepaid item (for example, purchases an item with a gift card), this is processed as a normal sale (see **[Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales)**).

## Fees

The Fees feature encompasses the transactions that involve the commerce service provider, including **[Payment fees](/sfc/mapping-specifications/qbo-mapping-specification#payment-fees)** that a commerce platform charges the merchant for processing their card transactions and **[Payment fee refunds](/sfc/mapping-specifications/qbo-mapping-specification#payment-fee-refunds)**.

### Fees account mapping

#### Payment fees

Fees are booked on a nominal account of type **Expense**.

If there's no account of such type, users need to create an account in QuickBooks for this purpose.

Codat pushes a single bill to QBO daily. This bill represents all fees taken by the commerce platform over the course of that day. The bill can have more than one line if there are different types of transactions that occur throughout the day.

#### Payment fee refund

When a merchant refunds a payment accepted using a commerce platform, the commission taken when the payment was taken is simultaneously refunded to their commercial account. In the Codat Sync flow UI, such refunds are referred to as **Payment fee refunds**.

Payment fee refunds should be booked to the same accounts configured for **Payment fees**:

A single bank deposit is pushed each day representing all fee refunds processed that day.

## Payments

Payment accounts contain cash. This is in contrast to all the accounts discussed above in the **Sales**, **Refunds**, and **Fees** sections, which are nominal accounts and represent accounting concepts rather than hard cash.

Codat supports either bank accounts or current accounts for payment accounts. They should be of a QBO nominal type **Cash at bank and in hand** (**Asset**).

<img
  src="/img/old/d91d4ee-cash_at_bank.png"
  alt="Account settings screen for payment accounts in QBO"
/>

:::caution Deposit accounts

A deposit account cannot be used for payments.
:::

We recommend having the following core payment types enabled:

- Card
- Cash
- Payout

Sync for Commerce supports additional payment types that can be switched on as applicable including invoices, specific payment types, or custom types.

### Payments account mapping

Codat has provided functionality to allow users to select different accounts for each different payment type.

:::caution New payment types after setup

If the user starts using other payments types after initial setup, the synchronization will stop until the accounts have been re-mapped via returning to the configuration page.
:::

Codat pushes a single payment to QBO per day, per type of payment used that day.

If a merchant processed ten card payments and twenty cash payments in one day, two payments are pushed. These payments are recorded against the daily sales invoice (see [Sales](/sfc/mapping-specifications/qbo-mapping-specification#sales)).
