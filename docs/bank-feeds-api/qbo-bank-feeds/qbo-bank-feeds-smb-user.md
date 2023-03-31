---
title: "SMB user: Connects their chosen bank accounts to QuickBooks Online"
description: "Learn how your SMB users can connect their bank accounts to QuickBooks Online."
sidebar_label: "SMB user connects accounts"
---

When the SMB users visits the `linkUrl` returned from the `POST /connections` endpoint, they're directed to the QuickBooks Online Bank Feeds Link UI. This site allows the SMB user to generate a one-time username and password to use to connect one or more bank accounts to QuickBooks Online (QBO). Link can be custom branded with your company logo and colors.

:::caution Link URL expiry

For security reasons, the `linkUrl` will expire one hour after it was generated. 

:::

## Summary of SMB user connection flow

To connect their bank accounts to QBO, the SMB user performs the following steps in the QBO Bank Feeds Link UI and in their QBO account.

### Generate one-time credentials

1. From within your application, the SMB user opens the `linkUrl` in their browser.

2. They select the **Intuit QuickBooks Bank Feeds** tile, then click **Next**.

   ![Link flow QBO Bank Feeds](/img/old/643cba5-link-select-accounting-software-qbo-bank-feeds.png "The select your accounting software step in Link. Select the Quickbooks Bank Feeds tile.")

3. On the **Connect to QuickBooks Online Bank Feeds** step, they review the requested permissions, then click **Next**.

   The QBO Bank Feeds Link UI is loaded.

4. On the **Set up QuickBooks** page, they click **Get credentials** to generate their unique one-time username and password for connecting an account to QBO (see step six in the next procedure). The **Revoke credentials** button appears after their credentials are generated - see [Revoke credentials](#revoke-credentials).

   ![Image](/img/bank-feeds-api/qbo-bank-feeds/400590b-qbo-bank-feeds_smb-customer-steps-revised.png "The Set up QuickBooks page that allows your SMB user to get their credentials.")

5. They follow the instructions displayed in the UI and in the next procedure.

### Enter one-time credentials in QuickBooks

1. The SMB user signs in to QBO.

   - If in Accounting View, select **Banking**.
   - If in Business View, go to **Bookkeeping >Bank Transactions**.

2. They click the **Link account** button.

3. On the **Connect an account** screen, they find and select your organization from the list of institutions.

4. They agree to the terms and conditions.

5. They enter their one-time username and password into QuickBooks and complete the authentication prompt.

6. They select one or more bank accounts to connect to QBO for viewing bank feeds.

7. In the dropdown that appears, they select the account type—the chart of accounts—that they want to view bank feeds for.

8. They select a start date for the bank feed.

   :::caution Limitation on pushing historic transactions
   
   If the SMB user selects a bank feed start date older than seven days, it will be ignored. The integration only supports pushing historic transactions up to seven days old.

   :::

9. Finally, they click **Connect**.

Your SMB user has now successfully connected their chosen bank accounts to QBO. The status of the data connection is set to `Linked`, which allows you to [push bank transactions to QuickBooks Online](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) for the SMB user.

### Revoke credentials

The **Revoke credentials** button allows the SMB user to revoke their previously generated credentials. This option invalidates all their existing credentials; you can no longer push bank transactions to QBO from any bank accounts that used those credentials.
