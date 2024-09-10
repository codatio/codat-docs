---
title: Find resolutions for errors and issues
sidebar_label: Resolve errors
description: Get help if you have questions or experience issues when connecting to Sage Intacct
hide_table_of_contents: false
---

## I haven't received an email with credentials

If you haven't received an email with credentials for your newly created Web Services user, this could be because:

- The email ended up in your Spam or Junk folder.
- There is an issue with your Internet connection.
- You entered an incorrect email for your Web Services user.

To verify the email associated with your Web Services user, navigate to **Company > Admin > Web Services users** in the dropdown menu. Click **View** on the user record you created and check that the **account email address** is as expected. 

#### Need to change the email?

Navigate to **Company > Admin > Web Services users** in the dropdown menu. View the user record you need to change and complete these steps:

1. In the _Web Services user information_ screen, click on the **Contact name**. Click **Edit** in the _Contact information_ pop-up.

2. Enter the **Primary email address** you want to associate with the Web Services user, then click **Save**.

    ![Screenshot of Sage Intacct interface displaying the Contact information pop-up with the Primary email address field outlined.](/img/smb-help-hub/sage-intacct/0026-sageintacct-troubleshooting-1.png)

3. In the _Web Services user information_ screen, click **Edit**, then update the **Account email address** to match the email you added to the contact record.

    :::caution Emails must match

    The **Account email address** you enter must match the contact's **Primary email address**.

    :::

    ![Screenshot of Sage Intacct interface outlining the matching emails in the account email address and primary email address fields.](/img/smb-help-hub/sage-intacct/0027-sageintacct-troubleshooting-2.png)

4. Click **Save** and verify the action with your Sage Intacct password. You will be redirected to the _Web Services users_ table view.

5. Open the Web Services user record again and click **Edit**. At the bottom of the page, click **Reset password** and enter your Sage Intacct password to verify the action. 

    You should shortly receive the email with new credentials to the updated email address.

    ![Screenshot of Sage Intacct interface outlining the matching emails in the account email address and primary email address fields.](/img/smb-help-hub/sage-intacct/0028-sageintacct-troubleshooting-3.png)

#### Still haven't received the email?

If you didn't receive the credentials after troubleshooting, this could indicate a problem with your inbox's setup or with your Sage Intacct instance. Check and resolve these issues internally. 

For more information on amending Web Services users in Sage, see Sage's [Edit a Web Services user](https://www.intacct.com/ia/docs/en_US/help_action/Administration/Users/web-services-only-users.htm#EditaWebServicesuser).

## Resolve the 'Unable to connect to Intacct' error

You may encounter this error due to one of the following reasons:

1. Web Services user credentials are incorrect.

    Check that you entered the correct Web Services credentials from the email sent by Sage Intacct. 

2. Web Services subscription isn't active in your Sage Intacct instance.

    Navigate to **Company > Admin > Subscriptions**, activate the _Web Services_ subscription, and start the connection flow again. See [How do I enable a Web Services subscription?](/smb-help-hub/integrations/sage-intacct/web-services-subscription#how-do-i-enable-a-web-services-subscription) for a detailed walkthrough.

## Resolve the 'Missing permissions' error

You may encounter this error if your Web Services user doesn't have the right permissions assigned. 

To resolve, navigate to **Company > Admin > Roles**, view the role you assigned to the Web Services user, and **View subscriptions** for the role. Check that all permissions are enabled for the following modules and applications:

  ||||
  |------------------|---------------------|------------|
  | Administration  | Accounts Payable    | Order Entry |
  | Company         | Accounts Receivable | Purchasing  |
  | Cash Management | Projects            | Contracts   |
  | General Ledger  | Inventory Control   | Taxes       |

* If you need to set some of the missing permissions, see [How do I set role permissions?](/smb-help-hub/integrations/sage-intacct/web-services-user#how-do-i-set-role-permissions) to add.
* If you're managing permissions at a granular level, see [How do I set role permissions?](/smb-help-hub/integrations/sage-intacct/web-services-user#how-do-i-set-role-permissions) to verify.
* If you've set user-based permissions, see [How do I set user permissions?](/smb-help-hub/integrations/sage-intacct/web-services-user#how-do-i-set-user-permissions) to verify.

## Resolve the 'Top level access only' error

You may encounter this error if your Web Services user can't access the subsidiary. This is because your Sage Intacct instance is configured to restrict access to the top level entity. 

To resolve, navigate to **Company > Admin > Subscriptions** and complete these steps:

1. Find the **Multi-Entity Management** subscription and click **Configure** next to the toggle. 

    ![Screenshot of Sage Intacct Subscriptions screen with the Configure button outlined for the Multi-Entity Management subscription.](/img/smb-help-hub/sage-intacct/0029-sageintacct-troubleshooting-4.png)

2. In **Entity restrictions**, deselect the **Restrict access to top level only** checkbox. This enables users to work with Sage Intacct both at the top level and subsidiary level.

    ![Screenshot of Manage multiple entities screen with the deselected Restrict access to top level only checkbox outlined.](/img/smb-help-hub/sage-intacct/0030-sageintacct-troubleshooting-5.png)

3. In **Inter-entity transactions**, select **Inter Entity Journal** in the **IET credits journal** dropdown. Click **Save**. 

    ![Screenshot of Manage multiple entities screen with Inter Entity Journal selected in the IET credits journal dropdown.](/img/smb-help-hub/sage-intacct/0031-sageintacct-troubleshooting-6.png)