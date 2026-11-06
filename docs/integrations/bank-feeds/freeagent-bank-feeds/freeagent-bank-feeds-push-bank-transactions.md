---
title: "Write bank transactions to FreeAgent"
sidebar_label: Write bank transactions
description: "Learn how to write your SMB users' bank transactions via our FreeAgent Bank Feeds integration"
---

When an SMB user has set up a bank feed connection, you can write bank transactions for source bank accounts to FreeAgent. Write them using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint, as described in [Write transactions](/bank-feeds/pushing-transactions).

## Prerequisites

- Your SMB user has an authorized FreeAgent connection and has [established a bank feed](/bank-feeds/mapping/overview).

## Transaction direction can come from the type

In Codat's bank transactions schema, the sign of the `amount` determines the direction of a transaction: positive is money in, negative is money out. The `transactionType` describes the kind of transaction.

For some transaction types, FreeAgent takes the direction from the `transactionType` and overrides the sign of the `amount`. `Xfer` is one of these types: FreeAgent always treats a transfer as money out.

Written as sent, a transaction with `amount: 1.60` and `transactionType: Xfer` would be £1.60 out in FreeAgent, while integrations that use the sign, such as Xero and QuickBooks Online, record £1.60 in.

## Codat converts a positive transfer

To keep the direction consistent with the `amount` you send, Codat writes a positive `Xfer` transaction to FreeAgent as `OTHER`. FreeAgent uses the sign for `OTHER` in both directions, so the transaction is recorded as money in, matching the sign of the `amount`.

A negative `Xfer` isn't converted, because the type and the sign already agree.

| Codat type  | FreeAgent                                   | Direction in FreeAgent                                 | Codat validation message? |
|-------------|---------------------------------------------|--------------------------------------------------------|---------------------------|
| Unknown     | OTHER                                       | Sign-respecting: follows the amount sign given         | none                      |
| Credit      | CREDIT                                      | Money in: forced positive regardless of sign           | warning if amount < 0     |
| Debit       | DEBIT                                       | Money out: forced negative                             | warning if amount > 0     |
| Int         | INT                                         | Sign-respecting                                        | none                      |
| Div         | DIV                                         | Money in                                               | warning if amount < 0     |
| Fee         | FEE                                         | Money out                                              | warning if amount > 0     |
| SerChg      | SRVCHG                                      | Money out                                              | warning if amount > 0     |
| Dep         | DEP                                         | Money in                                               | warning if amount < 0     |
| Atm         | ATM                                         | Sign-respecting                                        | none                      |
| Pos         | POS                                         | Sign-respecting                                        | none                      |
| Xfer        | XFER, but amount > 0 → overridden to OTHER  | amount ≤ 0: money out; amount > 0: sign-respecting     | warning if amount > 0     |
| Check       | CHECK                                       | Money out                                              | warning if amount > 0     |
| Payment     | PAYMENT                                     | Money out                                              | warning if amount > 0     |
| Cash        | CASH                                        | Money out                                              | warning if amount > 0     |
| DirectDep   | DIRECTDEP                                   | Money in                                               | warning if amount < 0     |
| DirectDebit | DIRECTDEBIT                                 | Money out                                              | warning if amount > 0     |
| RepeatPmt   | REPEATPMT                                   | Money out                                              | warning if amount > 0     |
| Other       | OTHER                                       | Sign-respecting                                        | none

[There is further information about this behaviour in Freeagent's documentation](https://dev.freeagent.com/docs/bank_transactions#upload-a-bank-statement)

### The type appears in the description

FreeAgent includes the transaction type in the description that the SMB user sees against the bank transaction. A transaction sent as `Xfer` reads as `//XFER/`, followed by the amount:

```text
your-transaction-description//XFER/£1.60
```

Because a positive `Xfer` is written as `OTHER`, the SMB user sees `//OTHER/` instead:

```text
your-transaction-description//OTHER/£1.60
```

### SMB users explain the transfer themselves

Because the transaction arrives as `OTHER` rather than `Xfer`, FreeAgent doesn't suggest a transfer when your SMB user explains it.

They can still explain it as a transfer exactly as they do now, using the **Transfer from Another Account** option. They select it themselves instead of FreeAgent proposing it.
