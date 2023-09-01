---
title: "SMB user account connection"
sidebar_label: Auth
description: "Learn how your SMB users can connect their bank accounts to Xero"
---

After setting up a company, data connection, and one or more source bank accounts, redirect your SMB user to the `linkUrl` (returned from `POST /companies/<COMPANY_ID>/connections`).

:::info Link URL expiry
For security reasons, the `linkUrl` will expire one hour after it was generated.
:::

## Account mapping UI

After authenticating with their Xero account, the SMB user is redirected to a generic account-mapping UI provided by Codat. This lets them map and connect their source bank accounts to Xero, creating _bank feed connections_.

![xero-bank-feeds_mapping-screen-example](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_annotated-manage-connected-accounts.png "Codat UI for connecting and mapping bank feed accounts to Xero.")

The SMB user can do the following:
1. Add one or more source bank accounts (the accounts you provided through the `POST /bankFeedAccounts` endpoint).
2. Map a source bank account to an existing target bank account in Xero.
3. Select **Create New Account** to map a source bank account to a new target bank account in Xero.
4. Select the **Feed start date**&mdash;the date a bank feed connection should start from. 
5. Connect the selected bank accounts to create bank feed connections.

You'll be able to push bank transactions dated from the **Feed start date** and later. However, Xero's API does not support pushing historical data older than one year.  

:::info Target account names
If the user chooses the **Create New Account** option, the target bank account is created with the same name as the source bank account it's mapped to. Bank account names can be changed in Xero at any time.
:::

:::caution Bank feeds must be pushed to Codat
Transactions are not automatically downloaded to Xero when the user successfully connects a bank account. You need to [Push bank transactions](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions).
:::

## Connection management
To allow your SMB users to view and manage their existing bank feed connections, you can direct them to a newly-generated `linkUrl`. When they open this URL and revisit the account mapping UI, their existing connections are displayed in the **Manage your connected accounts** panel:

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Codat-provided account mapping UI showing several connected accounts in the bottom panel.")

To disconnect a source bank account, the SMB user hovers over the **connected** status icon and selects **Disconnect**. This immediately disables the bank feed connection. The disconnected account will display in the source bank account dropdown menu when the user next refreshes the page.


## Read next

Now that your SMB users have mapped and connected their bank accounts, you're ready to [Push bank transactions to Xero](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-push-bank-transactions).
