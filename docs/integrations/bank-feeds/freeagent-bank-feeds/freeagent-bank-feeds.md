---
title: "FreeAgent Bank Feeds"
displayed_sidebar: integrationsBankFeeds
description: "Learn about our FreeAgent Bank Feeds integration"
---

Our FreeAgent Bank Feeds integration allows you to set up a bank feed from a bank account in your application (the source bank account) to an account within FreeAgent (the target bank account). After a feed connection is established, you can write bank transactions from the source account to the target account.

Bank feeds functionality is part of our existing [FreeAgent accounting integration](/integrations/accounting/freeagent/accounting-freeagent).

## Supported data types and operations

Bank feeds are represented as streams of [Bank account transactions](/bank-feeds-api#/schemas/BankTransactions) written to Codat in chronological order. Target bank accounts are represented as [Bank feed accounts](/bank-feeds-api#/schemas/BankFeedAccount).

## How it works

1. [Create a company and a data connection](/bank-feeds/create-account) using the `fbrh` platform key.

2. Your SMB users authorize the connection with FreeAgent using our [Link auth flow](/auth-flow/overview).

3. Your SMB users create account mappings and feed connections. See [Establish a bank feed](/bank-feeds/mapping/overview).

4. Using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint, you write bank transactions to Codat for authenticated users. See [Write bank transactions to FreeAgent](/integrations/bank-feeds/freeagent-bank-feeds/freeagent-bank-feeds-push-bank-transactions).

## Read next

[Write bank transactions to FreeAgent](/integrations/bank-feeds/freeagent-bank-feeds/freeagent-bank-feeds-push-bank-transactions)
