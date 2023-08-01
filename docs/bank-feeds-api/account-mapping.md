---
title: "Account mapping"
sidebar_label: Account mapping
description: "Learn how your SMB users can link their source accounts to target accounts"
displayed_sidebar: bankfeeds
---

If the account mapping UI is enabled for your client, your SMB user will be redirected to this UI at the end of the link flow. 

It is also possible to build your own mapping UI using endpoints available on the Codat API.

## Account mapping UI

After authenticating with their accounting integration, the SMB user is redirected to a generic account-mapping UI provided by Codat. This lets them map and connect their source bank accounts to target accounts in the accounting platform, creating _bank feed connections_.

![xero-bank-feeds_mapping-screen-example](/img/bank-feeds-api/xero-bank-feeds/xero-bank-feeds_annotated-manage-connected-accounts.png "Codat UI for connecting and mapping bank feed accounts.")

The SMB user can do the following:
1. Add one or more source bank accounts (the accounts you provided through the `POST /bankFeedAccounts` endpoint).
2. Map a source bank account to an existing target bank account in the accounting platform.
3. Select **Create New Account** to map a source bank account to a new target bank account.
4. Select the **Feed start date**&mdash;the date a bank feed connection should start from. 
5. Connect the selected bank accounts to create bank feed connections.

You'll be able to push bank transactions dated from the **Feed start date** and later.

:::info Target account names
If the user chooses the **Create New Account** option, the target bank account is created with the same name as the source bank account it's mapped to.
:::

## Connection management
To allow your SMB users to view and manage their existing bank feed connections, you can direct them to a newly-generated `linkUrl`. When they open this URL and revisit the account mapping UI, their existing connections are displayed in the **Manage your connected accounts** panel:

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds-api/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Codat-provided account mapping UI showing several connected accounts in the bottom panel.")

To disconnect a source bank account, the SMB user hovers over the **connected** status icon and selects **Disconnect**. This immediately disables the bank feed connection. The disconnected account will display in the source bank account dropdown menu when the user next refreshes the page.


## Building your own mapping UI

To build your own mapping UI you can use 2 endpoints availble on the Codat API:

1. [GET /mapping](/bank-feeds-api#/operations/get-bank-account-mapping) - this allows you to retrieve a list of provided source accounts as well as either the target account it is linked to, or a list of potential target accounts for that source account.
2. [POST /mapping](/bank-feeds-api#/operations/create-bank-account-mapping) - this allows you to create a _bank feed connection_ between the source and traget account, as well as prove a feed start date for that connection.

