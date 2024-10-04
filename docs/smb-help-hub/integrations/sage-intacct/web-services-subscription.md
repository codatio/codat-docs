---
title: Enable the Web Services subscription
sidebar_label: Enable Web Services subscription
description: Get help if you have questions or experience issues when enabling the Web Services subscription in Sage Intacct
hide_table_of_contents: false
---

import ReadNext from "@components/ReadNext";

### What is a Web Services subscription?

A Web Services subscription is a mechanism that enables you to share information from your Sage Intacct instance with external software. Codat needs this subscription enabled so that we can quickly and easily read business data from your account and show it to your financial services provider. 

For more information on the Web Services subscription in Sage, see Sage's [Subscribe to Web Services](https://www.intacct.com/ia/docs/en_US/help_action/More/Customization_and_Platform_Services/Setup/subscribe-to-web-services.htm).

### How do I enable a Web Services subscription?

1. In Sage Intacct's menu dropdown, navigate to **Company > Admin > Subscriptions**.

    ![Screenshot of Sage Intacct interface displaying the dropdown menu that follows the Company to Admin to Subscriptions path. The Subscriptions menu option is highlighted.](/img/smb-help-hub/sage-intacct/0004-sageintacct-ws-subscription-menupath.png)

2. In the list of subscriptions, scroll down to _Web Services_ and use the toggle to enable the subscription. 

    :::caution Subscription already enabled?

    If the Web Services subscription is already enabled in your Sage Intacct instance, you don't need to toggle it on again. Simply move on to the next step of the connection flow.

    :::

    ![Screenshot of Sage Intacct interface displaying the Subscriptions list with the Web Services subscription option outlined.](/img/smb-help-hub/sage-intacct/0005-sageintacct-ws-subscription-enable.png)

3. In the pop-up window, click **Subscribe** in the pop-up window. You will not be charged any additional fees for this subscription, so you can proceed with confidence.

    ![Screenshot of Sage Intacct interface displaying the Web Services subscription confirmation pop-up window.](/img/smb-help-hub/sage-intacct/0006-sageintacct-ws-subscription-confirm.png)

### How do I add a Web Services authorization?

Web Services authorizations control which external software applications (represented by **Sender ID**) can make requests for your organization's business data. 

Codat's Sender ID must be authorized to make such requests so that we can establish a successful connection to your Sage Intacct instance. To authorize it:

1. In Sage Intacct's menu dropdown, navigate to **Company > Setup > Company**. 

    ![Screenshot of Sage Intacct interface displaying the dropdown menu that follows the Company to Setup to Company path. The Company menu option is highlighted.](/img/smb-help-hub/sage-intacct/0007-sageintacct-ws-authorization-menupath.png)

2. In the _Company information_ view, select the **Security** tab and click **Edit**.

    ![Screenshot of Sage Intacct interface displaying the Company information view opened on the Security tab. The Edit button is highlighted.](/img/smb-help-hub/sage-intacct/0008-sageintacct-ws-authorization-securitytab.png)

3. Scroll to the _Web Services Authorizations_ section and click **Add**.

    ![Screenshot of Sage Intacct interface displaying the Company information view and the Web Services authorizations section. The Add button is highlighted.](/img/smb-help-hub/sage-intacct/0009-sageintacct-ws-authorization-addauth.png)

4. Switch between Codat's connection flow and Sage Intacct to copy and paste the values from the flow into the pop-up _Web Services sender information_ window. 

    You must use the values provided in the flow, otherwise the connection will fail. 

    ![Screenshot of Sage Intacct interface displaying the Web Services sender information window. Next to it, an image of the connection flow is added with Sender ID and Description fields visible. There are arrows showing the process of copying and pasting Sender ID and Description values from the flow to the Sage Intacct window.](/img/smb-help-hub/sage-intacct/0010-sageintacct-ws-authorization-copyuser.png)

5. Leave the status of the sender as **Active** and click **Save**. You will see the Sender ID you added in the _Web Services Authorizations_ section.

    ![Screenshot of Sage Intacct interface displaying the Web Services sender information window with the fields filled in with Sender ID and Description. The Save button is highlighted.](/img/smb-help-hub/sage-intacct/0011-sageintacct-ws-authorization-saveuser.png)

For more information on the Web Services authorizations in Sage, see Sage's [Web Services authorizations](https://www.intacct.com/ia/docs/en_US/help_action/Company/Company_setup/Company_Information/Security/company-web-services-authorizations.htm).

<ReadNext
  links={[
    ["Get help with creating a Web Services user", "/smb-help-hub/integrations/sage-intacct/web-services-user", ],
  ]}
>
</ReadNext>