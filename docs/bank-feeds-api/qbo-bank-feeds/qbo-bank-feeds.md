---
title: "QuickBooks Online Bank Feeds"
sidebar_label: Overview
displayed_sidebar: bankfeeds
description: "Learn about our QuickBooks Online Bank Feeds integration."
---

:::info Limited availability

If you're interested in using our QuickBooks Online Bank Feeds integration, please contact your Account Manager or Account Executive.

Connecting to QuickBooks Online bank feeds through the integration is only supported for SMB users who are located in the US and Canada.

:::

## Overview

With our integration, your SMB customers can connect source bank accounts in your application to target accounts QuickBooks Online (QBO) using one-time credentials. You can then push [Bank transactions](/accounting-api#/schemas/BankTransactions) from source accounts to target accounts via Codat.

SMB users connect their bank accounts using the QBO Bank Feeds Link UI, which is built and hosted by Codat. Then they can view transactions from source accounts as bank feeds in QBO, allowing them to easily reconcile transactions against accounting entries.

Note that bank transactions are sent from Codat to QBO on a daily schedule. Your SMB users can override this in QBO by updating their transactions at any time.

## About this guide

In this guide, we'll walk you through the following functionality:

1. [Set up the QuickBooks Online Bank Feeds integration](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup) to work with your application.
2. The SMB user [connects a bank account to QBO](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-user) using a one-time username and password they generated in the QBO Bank Feeds Link UI.
3. When connected, you can [push bank transactions to QBO](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) so they're available as bank feeds.

## Pushing historic transactions

You can push historic transactions up to seven days old based on the _feed start date_ chosen by the SMB user in the QBO UI. All bank transactions must be _cleared_ and have a `clearedOnDate` set to the current or the prior day.

Pushing future (future-dated) bank transactions to QBO is not supported.

## Considerations

### How often are bank transactions sent to QuickBooks?

Pushed bank transactions are automatically sent from Codat to QBO on a daily schedule. The SMB user can click **Update** in the **Transactions** area in QBO to override the daily schedule and view their latest transactions immediately.

### Disconnecting bank feeds

To disable bank feeds from your application, an SMB user can disconnect one or more of their target accounts in QBO from receiving bank feeds. When a target account is disconnected, it won't receive any further transactions, so any subsequent pushes you make to the source account will fail.

If a bank feed is disabled by an SMB user, it takes 10 days for the status of the source bank account in Codat to change to `disconnected`.

A data connection can be linked to multiple source bank accounts. The status of a data connection only changes to `Unlinked` if all the available source bank accounts have a connection status of `disconnected` (to view this information, call [GET /connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds)). This might take up to one day.

It's not possible to directly remove a bank account from QBO using the QuickBooks Online Bank Feeds integration.

### Customize the Link UI

We recommend you customize the appearance of the QBO Bank Feeds Link UI to increase your SMB users' confidence when they're connecting their bank accounts to QBO.

You can:
- Upload your organization's logo on the [Manage organization](https://app-integration.codat.io/settings/organization) page of the Codat Portal.
- [Add a custom callout](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup#add-a-custom-callout-to-the-link-site), in French or English, to provide your SMB users with additional guidance on connecting their accounts.

### Localization options

SMB users can switch between English and French text using the language button in the QBO Bank Feeds Link UI. If you've added a [custom callout](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup#add-a-custom-callout-to-the-link-site) in French, this will also switch based on the selected language.

---

## Read next

How to [set up the integration](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup).