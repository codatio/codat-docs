---
title: "Installation on a Right Networks hosted instance"
description: "Learn how to install our QuickBooks Desktop connector on Right Networks hosted instances of QBD."
createdAt: "2022-07-05T14:08:30.046Z"
updatedAt: "2023-01-11T09:40:44.879Z"
---

:::Caution Right Networks - Beta testing

Please note, support for installing the QBD connector in Right Networks hosted environments is in beta testing. If you're interested in using this functionality, please contact your Account Manager or Account Executive to find out more and gain access.
:::

Your SMB customers can install our QuickBooks Desktop connector on a hosted instance of QuickBooks Desktop (QBD) provided by <a  class="external" href="https://www.rightnetworks.com/" target="_blank">Right Networks</a>. In a hosted instance, users access QBD through a virtual desktop hosted in the cloud rather than by installing the program locally.

## Prerequisites for installation

Your organization must first be approved as a Right Networks independent software vendor (ISV). To request this, contact [cpadula@rightnetworks.com](mailto:cpadula@rightnetworks.com) and state that you are working with Codat.

To meet Right Networks requirements, you must have a **minimum of 10 users for your application** across one or more Companies in Codat.

Your SMB customers, who will share their data through the integration, must use one of the [supported hosted products](/install-qbd-connector-right-networks#supported-hosted-products) in order to install the connector.

## Setup overview

As a Codat client, you need to complete the following tasks to enable your SMB customers to install our QBD connector on Right Networks hosted instances.

1. Check your SMB customers are using a [supported hosted product](/install-qbd-connector-right-networks#supported-packages).
2. [Customize branding, upload installation files, and test your implementation](/install-qbd-connector-right-networks#customize-branding-upload-app-installation-files-and-test-your-implementation).
3. [Enable the QBD integration](/install-qbd-connector-right-networks#enable-the-qbd-integration) in the Codat Portal.
4. If you're using Link, [enable the Right Networks installation option](/install-qbd-connector-right-networks#optional-enable-right-networks-installation-for-your-smb-customers) in the Link flow.

:::Note Options for SMB authentication

Instead of using Link, you can provide your SMB customers with separate instructions for installing and licensing the QBD connector in their Right Networks hosted environment.
:::

Next, your SMB customers must do the following:

1. [Connect to QBD and request connector installation](/install-qbd-connector-right-networks#smb-customer-connects-to-qbd-and-requests-connector-installation).
2. [Connect to QuickBooks Desktop on Right Networks](/install-qbd-connector-right-networks#smb-customer-connect-to-quickbooks-desktop-on-right-networks).
3. [Open QBD on Right Networks](/install-qbd-connector-right-networks#smb-customer-open-qbd-on-right-networks).

## Supported hosted products

Your SMB customers must use one of the following supported products:

| Supported product                                                                                                           | Provider       |
| :-------------------------------------------------------------------------------------------------------------------------- | :------------- |
| [QuickBooks Application Cloud](https://www.rightnetworks.com/quickbooks-hosting/quickbooks-application-cloud/)              | Right Networks |
| [QuickBooks Enterprise with cloud access](https://quickbooks.intuit.com/desktop/enterprise/hosting/). **Deluxe tier only.** | Intuit         |

## Customize branding, upload app installation files, and test your implementation

If Right Networks approve your request to become a registered ISV, they'll provide instructions for uploading your connector app to a secure site. Your connector app files must be approved by Right Networks before your implementation is made live.

1. Sign in to the <a  class="external" href="https://app.codat.io" target="_blank">Codat Portal</a>.
2. Go to the <a className="external" href="https://app.codat.io/settings/organization" target="_blank">Organization settings</a> area.
3. Add your organization name, and upload a logo and an ICO file to use as the QBD connector icon.
4. Download your connector app installation files from the Codat Portal and provide them to Right Networks for evaluation.
   1. In the navigation bar, select **Settings > Integrations > Accounting**.
   2. Click **Manage** next to the **QuickBooks Desktop** integration.
   3. In the **Right Networks / QuickBooks enterprise with cloud access** section, click **Download**. The installation files are downloaded to your computer as a ZIP file.
   4. Upload the ZIP file to the secure site as advised by Right Networks.
5. Right Networks evaluate the connector app files.
6. Right Networks provide you with access to a test account in which a QBD instance and our QBD connector are both installed. Use the test account to validate that the implementation works as expected. You'll need to create a test company in the Codat Portal.
7. Inform Right Networks that you want to proceed with the implementation.
8. Right Networks set the implementation to _Live_.

## Optional: Enable Right Networks installation for your SMB customers

If you're using Link, you can enable the Right Networks installation path in the Codat Link flow. This lets your SMB customers choose whether to install the QBD connector locally, or in their Right Networks hosted environment.

1. Sign in to the <a  class="external" href="https://app.codat.io" target="_blank">Codat Portal</a>.
2. In the navigation bar, select **Settings > Integrations > Accounting**.
3. Click **Manage** next to the **QuickBooks Desktop** integration.
4. Select **Enable your customer users to see the Right Networks install guide in the QBD connector download UI**.

## Enable the QBD integration

In the Codat Portal:

1. In the navigation bar, select **Settings > Integrations > Accounting**.
2. Use the toggle to enable the **QuickBooks Desktop** integration.

You can now send Link URLs to your SMB customers.

## SMB customer: Requests connector installation

In the Link site, your SMB customer requests that Right Networks install the Codat connector App to their cloud instance.

Your SMB customer does the following:

1. Opens the Link URL.

2. In Link, they select the **Intuit QuickBooks Desktop / Pro** tile.

   ![Select your accounting software](/img/old/96cef1f-qbd-right-networks-link-flow-select-qbd-accounting-software.png "Select your accounting software")

3. On the **How do you use QuickBooks Desktop?** step, they select the second option:

   **I'm accessing QuickBooks Desktop hosted in the cloud by Right Networks, including QuickBooks Desktop Enterprise with cloud access**.

4. The **Connection steps** dialog is displayed, containing instructions for your SMB customers to request installation of the connector App and access their license key.

   ![Connection steps](/img/old/6074fa3-right-networks-dialog-connection-steps-new.png "Connection steps")

5. Finally, they copy their license key from the **License key** box to use in the next procedure.

When the connector App is installed, a shortcut named **QuickBooksDesktopUI.exe** appears on the SMB customer's cloud instance Start menu. They can now connect to QBD by following the next procedure.

## SMB customer: Connects to QuickBooks Desktop on Right Networks

Next, your SMB customer does the following:

1. Opens the **QuickBooksDesktopUI.exe** application from their Start menu.

   :::Note

   If the app doesn't open, they can try opening it from the Windows system tray.
   :::

2. In the connector app setup wizard, clicks **Add new connection**.

3. Enters their license key from Link into the **License Key** box (see step 5 of the previous task), then clicks **Next**.

<img src="/img/old/c57bf3e-qbd-connector-setup-wizard-add-company-license-details.png" />

4. To finish installing the connector, they must follow the steps in the **Setup Connection** and **Verify Connection** steps of the wizard. For more details, see procedures 3–5 in [Install the QuickBooks Desktop connector](/installing-the-quickbooks-connector).

To verify the connector is running, your SMB customer should look for the **QuickBooks Connector** app in the Windows system tray. The app uses your organization's logo.

## SMB customer: Opens QBD on Right Networks

Next, your SMB customer opens the **QuickBooks Desktop** application.

The QuickBooks Desktop connector is now ready to use.
