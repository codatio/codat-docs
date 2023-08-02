---
title: "Xero Bank Feeds"
sidebar_label: Overview
displayed_sidebar: bankfeeds
description: "Learn about our Xero Bank Feeds integration"
---

:::caution Xero Bank Feeds - Beta
Our new Xero Bank Feeds integration is currently in beta. You can provide feedback on the integration in <a href="https://codat.productboard.com/feature-board/1378101-feature-organization/features/15391330/detail" target="_blank">Productboard</a> or by contacting your Solutions Engineer or Account Manager.
:::

Our Xero Bank Feeds integration allows you to set up a bank feed from a bank account in your application (the source bank account) to an account within Xero (the target bank account). After a feed connection is established, you can push bank transactions from the source account to the target account.

![xero-bank-feeds-flowchart](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds-flow-amended.png "Flowchart showing bank transactions pushed from your application to Xero")

With access to bank feeds, your customers can more easily reconcile bank transactions against accounting entries, like invoices and bill payments.

Bank feeds functionality is part of our existing [Xero accounting integration](/integrations/accounting/xero/accounting-xero).

## Supported data types and operations​

Bank feeds are represented as streams of [Bank account transactions](/bank-feeds-api#/schemas/BankTransactions) pushed to Codat in chronological order. Target bank accounts are represented as [Bank feed accounts](/bank-feeds-api#/schemas/BankFeedAccount).

Bank feeds are pushed to Xero immediately, not on a schedule.

## How it works​

1. To start, create a Xero app in the <a href="https://developer.xero.com/" target="_blank">Xero developer portal</a>.

   :::caution Approval required
   You'll need to obtain Xero's approval for Bank Feeds.
   :::

2. [Set up the integration](/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup).

3. Your SMB users set up their bank feeds. They can start this process directly from your app's UI, or use the "Add bank account" feature in Xero to search for the name of your institution and then launch your UI. See [SMB user account connection](/bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user).

4. After authenticating with Xero, SMB users create account mappings and feed connections using the Codat-provided _account mapping UI_.

   :::info Coming soon: Build your own UI
   In a future release, you'll be able to build your own UI for account mapping and feed management for Xero Bank Feeds.
   :::

5. Using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint, you push bank transactions to Codat for authenticated users. See [Push bank transactions to Xero](/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions).

6. Users can manage and delete existing feed connections using the account mapping UI.

## Read next​

[Set up the Xero Bank Feeds integration](/bank-feeds/xero-bank-feeds/xero-bank-feeds-setup)
