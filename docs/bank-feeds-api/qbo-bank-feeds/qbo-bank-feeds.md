---
title: "QuickBooks Online Bank Feeds"
sidebar_label: Overview
displayed_sidebar: bankfeeds
description: "Learn about our QuickBooks Online Bank Feeds integration."
createdAt: "2022-07-15T11:21:08.729Z"
updatedAt: "2023-01-11T14:52:11.575Z"
---

Our QuickBooks Online Bank Feeds integration makes it possible for your customers to connect bank accounts from your application to QuickBooks Online (QBO). Transactions from connected accounts are then available to view as _bank feeds_. By having visibility of bank feeds, your customers can more easily perform reconciliation of bank transactions against accounting entries.

With our integration, you can push your customers' bank transactions from connected accounts to Codat in a standardized format. These bank transactions are pushed from Codat to QBO and are available to view in the **Transactions** area.

:::note Availability of our QBO Bank Feeds integration

Please contact your Account Manager or Account Executive if you're interested in using this integration.
:::

:::caution Geographical support

Connecting to QuickBooks Online bank feeds through this integration is only supported for SMB users who are located in the US and Canada.
:::

## Supported data types and operations

Bank feeds are represented as streams of [Bank transactions](/accounting-api#/schemas/BankTransactions) pushed to Codat in chronological order.

:::caution Pushing historic and future bank feeds

Codat does not currently support pushing historic (backdated) or future (future-dated) bank feeds to QBO.
:::

## How it works

1. See [Set up the QuickBooks Online Bank Feeds integration](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup) to learn how to set up and enable the integration.
2. Your SMB users must [connect one or more bank accounts to QBO](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-user) by using Link, Codat's authentication solution, to generate a one-time username and password for QBO authorization.
3. You can then [push bank transactions to QuickBooks Online](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) for connected accounts.

## Other considerations

### How often are bank transactions pushed to QuickBooks?

Bank transactions are automatically pushed from Codat to QBO on a daily basis. To view the latest bank transactions, SMB users can click **Update** in the Transactions area in QBO. This triggers an immediate push of bank transactions and overrides the daily schedule.

### Disabling bank feeds

If an SMB customer turns off a bank feed for a connected account, you won't be able to push further bank transactions to that account.

### Customize Link for your SMB users

We recommend you customize the appearance of the QBO Bank Feeds Link site to increase your SMB users' confidence when they're connecting their bank accounts to QBO.

You can upload your organization logo to Link on the <a className="external" href="https://app-integration.codat.io/settings/organization" target="_blank">Manage organization</a> page of the Codat Portal.

You can also customize the colors and text used in the Link flow. For more information, see [Set up your company branding](/auth-flow/customize/branding).

To provide your SMB users with additional guidance, you can also [add a custom callout](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup#add-a-custom-callout-to-the-link-site) to the QBO Bank Feeds Link site.

---

## Read next

How to [set up the integration](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup)