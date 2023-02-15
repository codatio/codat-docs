---
title: "SMB user: Connects their chosen bank accounts to QuickBooks Online"
description: "Learn how your SMB users can connect their bank accounts to QuickBooks Online."
createdAt: "2022-09-05T13:14:59.159Z"
updatedAt: "2023-01-11T15:20:53.814Z"
---

When the SMB users visits the `linkUrl` returned from the `POST /connections` endpoint, they're directed to the QuickBooks Online Bank Feeds Link site. This site allows the SMB user to generate a one-time username and password to use to connect one or more bank accounts to QuickBooks Online (QBO).

Link can be custom branded with your company logo and colors.

## Summary of SMB user steps

To connect their bank accounts to QBO, the SMB user performs the following steps in the QBO Bank Feeds Link site and in their QBO account.

1. They select the **Intuit QuickBooks Bank Feeds** tile, then click **Next**.

   ![Link flow QBO Bank Feeds](/img/old/643cba5-link-select-accounting-software-qbo-bank-feeds.png "The select your accounting software step in Link. Select the Quickbooks Bank Feeds tile.")

2. On the **Connect to QuickBooks Online Bank Feeds** step, they review the requested permissions, then click **Next**.

3. On the **Set up QuickBooks bank feeds** page, they click **Get credentials** to reveal their one-time username and password.

   ![Image](/img/bank-feeds-api/qbo-bank-feeds/400590b-qbo-bank-feeds_smb-customer-steps-revised.png "The Set up QuickBooks page that allows your SMB user to get their credentials.")

4. Sign in to QuickBooks Online.

<<<<<<< HEAD:docs/bank-feeds-api/qbo-bank-feeds/bank-feed-qbo-bank-feeds-smb-user.md
5. If in Accounting View, select **Banking**.

6. If in Business View, go to **Bookkeeping >Bank Transactions**.

7. Click the **Link account** button.

8. On the **Connect an account** screen, find and select your organization from the list of institutions.

9. Agree to the terms and conditions.

10. Enter their one-time username and password into QuickBooks and complete the authentication prompt.

11. Select one or more bank accounts to connect to QBO for viewing bank feeds.

12. In the dropdown that appears, select the account type—the chart of accounts—that they want to view bank feeds for.

Your SMB user has now successfully connected their chosen bank accounts to QuickBooks Online. The status of the data connection is set to `Linked`, which allows you to [push bank feeds to QuickBooks Online](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-push-bank-transactions) for the SMB user.
