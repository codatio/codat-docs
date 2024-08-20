---
title: Sage Intacct overview
description: Summary view of the Sage Intacct connection flow and available support
sidebar_label: Overview
hide_table_of_contents: false
---

Your financial services provider has requested access to your Sage Intacct account and its data. They need to view, create or modify your business's financial data so that they can deliver their services to you. They use Codat to establish the connection to your Sage Intacct account and asked you to follow our Sage Intacct connection flow.

:::info What is Codat?

To learn more about the role we play in your provider's business processes, read our dedicated [FAQs](/smb-help-hub/codat/faq).

:::

## Prerequisites

To successfully connect your Sage Intacct account, you need to have login details for a user ID that has:

1. **Full administrator privileges**

    Administrator privileges give you the ability to subscribe to applications and create new users. You will need to do this when following the connection flow. 

    You can check if the user ID you logged in with has full administrator privileges by navigating to **Company > Admin > Users**. Verify that the _Admin privileges_ column next to this user has them set to **Full**.

    For more information on administrator privileges in Sage, see [Administrators in Sage Intacct](https://www.intacct.com/ia/docs/en_US/help_action/Administration/Admins/admin-users.htm).

2. **Access to the top-level entity**

    This requirement is relevant if your organization has multiple subsidiaries in Sage Intacct. You can check this by navigating to **Company > Setup > Entities**. If you see a single entry on this page, it's not likely your organization uses multiple entities. 

    To navigate to the top-level entity, click on the entity dropdown next to your organization's name and logo at the top of the page, click **All entities**, then select the **Top level** radiobutton. The page will refresh to reflect the new selection.

    ![](/img/smb-help-hub/sage-intacct/0003-sageintacct-top-level-entity.png)

If the user ID you logged in with doesn't fulfil these requirements, speak to your organization to add the permissions or use a different set of credentials.

## Support articles

For key steps of our Sage Intacct flow and associated troubleshooting, we provide dedicated support guides:

- [Create Web Services subscription](/smb-help-hub/integrations/sage-intacct/web-services-subscription)
- [Create Web Services user](/smb-help-hub/integrations/sage-intacct/web-services-user)
- [Resolve errors](/smb-help-hub/integrations/sage-intacct/error-messages)
