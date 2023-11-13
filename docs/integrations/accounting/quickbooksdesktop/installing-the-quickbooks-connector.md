---
title: "Install the QuickBooks Desktop connector"
description: "Guide for SMB users to install our QuickBooks Desktop on-premise connector."
sidebar_label: Install the connector
---
:::info QuickBooks Desktop installation checklist

<input type="checkbox" unchecked/> <b>Check version is supported</b>

Your customer needs to be running a supported version of QuickBooks Desktop Pro, Enterprise or Professional. QuickBooks for Mac is not supported. 

<input type="checkbox" unchecked/> <b>Check operating system requirements</b>

The connector works on Windows 10, Windows 11, and Windows Server 2019, and may not work correctly on earlier versions of Windows. Your customer will need administrator permissions on your computer to complete the installation.

<input type="checkbox" unchecked/> <b>Consider antivirus and firewall</b>

The user's local antivirus or firewall settings may prevent the download and running of the connector. To resolve, you need to allowlist the connector.

:::

To install the QuickBooks Desktop connector, the user who is connecting their company data must complete the following tasks:

CHANGE THESE
1. [Download the connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#1-download-the-connector)

2. [Launch the connector and enter the licence key](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#2-launch-the-connector-and-enter-the-licence-key)

3. [Verify files, select a region and initiate Link](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#3-verify-files-select-a-region-and-initiate-link)

4. [Authorize the connector to access QuickBooks](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#4-authorize-the-connector-to-access-quickbooks)

5. [Wait for the connector to complete first link](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#5-wait-for-the-connector-to-complete-first-link)


:::info Linking companies using the QuickBooks Desktop connector

The QuickBooks Desktop connector must be run on the same computer as the QuickBooks Desktop application. Advise your client to install the connector on the computer they normally use when working with QuickBooks Desktop.

Before they start the linking process, the user must open QuickBooks Desktop and log in to the company they want to link. 

:::


## 1. Download and install the connector

First, the user downloads the connector from a Codat Link URL. The user will only be directed to do this if they have selected "QuickBooks Desktop app" on the intial Link screen.

If the user selected "QuickBooks Enterprise cloud" or "Right Networks" they proceed immediately to ADD STEP LINK as these hosted environments already have the web connector installed.

:::info Connector download file

The QuickBooks Desktop connector is packaged and named "QuickBooksDesktopConnector.exe".

Additionally, the file is signed with an Extended Validation Code Signing Digital Certificate issued by GlobalSign. IS IT??

:::

**Administrator privileges (admin rights) are required to run the connector.** When you add a new company, a user with admin rights needs to run the installer, which will display the following dialog:

<img src="/img/old/420dc1e-QBDLinkNew.JPG" />

Running the "QuickBooksDesktopConnector.exe" will launch the "QBWebConnector - InstallShield Wizard", taking the user through the installation steps. This will either be a fresh install or if the QB web connector is already present, will present an option to "Modify", ensuring the web connector is updated to the latest version.

:::info What if the SMB user isn't a Windows admin?
If the SMB user isn't a Windows administrator on their own system, a different administrator must approve the installation and run Quickbooks Desktop using the **Run as Administrator** option, both during the initial link and when adding companies to an existing connector. When installed in this way, the connector is only able to sync data while Quickbooks Desktop is closed.
:::

## 2. Download and run the configuration file to authorize the connector to access QuickBooks

Next, the user downloads the configuration file, and runs it to create a connection to the QBD company via the web connector. The configuration file will detect and link to the open QBD company, prompting QuickBooks Desktop to display a prompt to allow the application to read and modify the QuickBooks company file.

Options might vary between QuickBooks versions but are similar to:

- **No**
- **Yes, always; allow access even if QuickBooks is not running**

The user will need to select "Yes, always; allow access even if QuickBooks is not running" to enable the connector to work.

<img src="/img/old/c650d8d-QBD-Auth.png" />   NEED A NEW IMG OF APP CERTIFICATE SCREEN

Check the details in the **Access Confirmation** dialog, and then click **Done**.

<img src="/img/old/7db6c59-Access_Confirmation.png" />

## 3. Authenticate the connector

Having allowed the connector access to the open QuickBooks Desktop company, the user will see a new connection appear in the QB web connector. The user must then authenticate the connector by entering the password, supplied in the link flow UI, into the QB web connector connection row "Password" field.

Once entered the password must be saved by selecting "Select All", then click "Update Selected".

## 4. Wait for the connector to complete first link

Once the password is saved, access to QuickBooks will be granted and the connector will process the datasets you have chosen to _fetch on first link_ (see [Data Sync Settings](/core-concepts/data-type-settings)).

If you have chosen to have your connectors perform a one-time synchronization, your company connection status will change to _deauthorised_ after initial sync.

If you have chosen to install your connectors for ongoing synchronizations, the connector will periodically process any dataset syncs or pushes you have queued using the Codat portal or API. The connector will also be set to automatically start when the system reboots.

<img src="/img/old/e435017-Linked_Succesfully.png" />  NEED AN IMG of QBWC

## Installation path

The QuickBooks Desktop connector is installed in Program Files inside a directory named with your client name in Codat. WHAT IS THE FILE DIRECTORY?

```
  C:\\Program Files (x86)\\<Client Name>\\QuickBooks-connector
```

For example:

<img src="/img/old/8fa7d87-qbd-connector-installation-path-border.png" /> NEED NEW IMG OF FILE LOCATION


## Uninstalling

If your user wants to remove the QuickBooks Desktop connector and disconnect the service, there are two ways they achieve this on their computer.

### System Settings

The web connector can be deleted by going to Windows Settings > Apps & features from the menu and then search for "Web Connector" in the filter form.

The QuickBooks Connector will then show as a result in the list, and the user can select Uninstall to remove the connector.

The user will also need to navigate to ADD FILE DIRECTORY and delete the QBWebConnector file.

### Removing the App Certificate

Once the user has removed the Connector, they may still want to remove the application certificate. To do this they should open QuickBooks and go to:

Edit > Preferences > Integrated Applications > Company Preferences

You will then need to select the application named 'QuickBooks Connector' and click Remove.
