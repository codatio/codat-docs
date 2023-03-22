---
title: "QuickBooks Online Bank Feeds"
sidebar_label: Overview
displayed_sidebar: bankfeeds
description: "Learn about our QuickBooks Online Bank Feeds integration."
---

:::info Availability and geographical support

Please contact your Account Manager or Account Executive if you're interested in using our QuickBooks Online Bank Feeds integration.

Connecting to QuickBooks Online bank feeds through this integration is only supported for SMB users who are located in the US and Canada.

:::

## Overview

With our integration, your SMB customers can connect their bank accounts in your application to QuickBooks Online (QBO). You can then push bank transactions from those accounts to QBO, via Codat, in a standardized format.

SMB users can view their transactions in the **Transactions** area in QBO. From here they can easily reconcile transactions from your application against accounting entries.

Note that bank transactions are sent from Codat to QBO on a daily schedule. Your SMB users can override this by updating their transactions in the QBO UI at any time.

## About this guide

In this guide, we show you how to set up the QuickBooks Online Bank Feeds integration with your application. We also explain the account connection process for SMB users and how to push bank transactions from your application.

1. [Set up the QuickBooks Online Bank Feeds integration](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup).
2. Your SMB users [connect one or more bank accounts to QBO](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-user) using a one-time username and password.
3. You can then [push bank transactions for connected accounts to QuickBooks Online](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions).


## Bank transactions support

Bank feeds are represented as streams of accounting [Bank transactions](/accounting-api#/schemas/BankTransactions) pushed in chronological order.

You can push historic transactions up to seven days old, based on the _feed start date_ chosen by the SMB user in QBO. All bank transactions must be cleared, with a `clearedOnDate` set to the current day or the prior day.

Pushing future (future-dated) bank transactions is not supported.

## Considerations

### How often are bank transactions sent to QuickBooks?

Bank transactions are automatically sent from Codat to QBO on a daily schedule. To view the latest bank transactions, SMB users can click **Update** in the **Transactions** area in QBO. This triggers an immediate push of bank transactions and overrides the daily schedule.

### Disconnecting bank feeds

Your SMB users can disable bank feeds for their target accounts using the options in QBO. This stops the target account from receiving any further transactions, and so any subsequent pushes will fail.

When a bank feed is disabled in QBO, it will take 10 days for the status of the connected bank account in Codat to change to `disconnected`. 

### Customize Link for your SMB users

We recommend you customize the appearance of the QBO Bank Feeds Link site to increase your SMB users' confidence when they're connecting their bank accounts to QBO.

You can upload your organization logo to Link on the <a className="external" href="https://app-integration.codat.io/settings/organization" target="_blank">Manage organization</a> page of the Codat Portal.

You can also customize the colors and text used in the Link flow. For more information, see [Set up your company branding](/auth-flow/customize/branding).

To provide your SMB users with additional guidance, you can also [add a custom callout](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup#add-a-custom-callout-to-the-link-site) to the QBO Bank Feeds Link site.

---

## Read next

How to [set up the integration](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup)