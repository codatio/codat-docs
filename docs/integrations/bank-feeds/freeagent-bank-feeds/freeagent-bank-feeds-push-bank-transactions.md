---
title: "Write bank transactions to FreeAgent"
sidebar_label: Write bank transactions
description: "Learn how to write your SMB users' bank transactions via our FreeAgent Bank Feeds integration"
---

When an SMB user has set up a bank feed connection, you can write bank transactions for source bank accounts to FreeAgent. Write them using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint, as described in [Write transactions](/bank-feeds/pushing-transactions).

This article explains how FreeAgent decides whether a transaction is money in or money out, because it differs from other bank feeds integrations.

## Prerequisites

- Your SMB user has an authorized FreeAgent connection and has [established a bank feed](/bank-feeds/mapping/overview).

## Transaction direction comes from the type

In Codat's bank transactions schema, the sign of the `amount` determines the direction of a transaction: positive is money in, negative is money out. The `transactionType` describes the kind of transaction.

FreeAgent takes the direction from the `transactionType` instead, and overrides the sign of the `amount` for most types.

| FreeAgent behavior | Transaction types                                                                        |
| ------------------ | ---------------------------------------------------------------------------------------- |
| Always money out   | `Debit`, `Fee`, `SerChg`, `Xfer`, `Check`, `Payment`, `Cash`, `DirectDebit`, `RepeatPmt` |
| Always money in    | `Credit`, `Div`, `Dep`, `DirectDep`                                                      |
| Uses the sign      | `Int`, `Atm`, `Pos`, `Other`, `Unknown`                                                  |

So for a transaction sent as `amount: 1.60` with `transactionType: Xfer`, FreeAgent records £1.60 out, while integrations that use the sign, such as Xero and QuickBooks Online, record £1.60 in.

## Codat converts a positive transfer

To keep the direction consistent with the `amount` you send, Codat writes a positive `Xfer` transaction to FreeAgent as `OTHER`. FreeAgent uses the sign for `OTHER` in both directions, so the transaction is recorded as money in, matching the sign of the `amount`.

A negative `Xfer` isn't converted, because the type and the sign already agree. Codat converts no other type, but it does rename `SerChg` to FreeAgent's `SRVCHG` and writes `Unknown` as `OTHER`, neither of which changes the direction.

:::caution Other conflicting types aren't converted

Codat only converts `Xfer`. If you send a positive amount with any other type in the **Always money out** group, FreeAgent records it as money out. Send those transactions with a type that matches the direction you want, or use `OTHER`.

:::

## The type appears in the description

FreeAgent includes the transaction type in the description that the SMB user sees against the bank transaction. A transaction sent as `Xfer` reads as `//XFER/`, followed by the amount:

```text
your-transaction-description//XFER/£1.60
```

Because a positive `Xfer` is written as `OTHER`, the SMB user sees `//OTHER/` instead:

```text
your-transaction-description//OTHER/£1.60
```
