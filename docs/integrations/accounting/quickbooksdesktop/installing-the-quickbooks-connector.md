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

1. [Download and install the connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#1-download-and-install-the-connector)

2. [Run the configuration file to authorize access to QuickBooks](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#2-run-the-configuration-file-to-authorize-access-to-quickbooks)

3. [Authenticate the connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#3-authenticate-the-connector)

4. [Wait for the connector to complete first link](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#4-wait-for-the-connector-to-complete-first-link)

:::info Linking companies using the QuickBooks Desktop connector

The QuickBooks Desktop connector must be run on the same computer as the QuickBooks Desktop application. Advise your client to install the connector on the computer they normally use when working with QuickBooks Desktop.

Before they start the linking process, the user must open QuickBooks Desktop and log in to the company they want to link. 

:::

## 1. Download and install the connector

If the user selects "QuickBooks Desktop app" on the initial Link screen, they will be directed to download the web connector from a Codat Link URL.

If they select "QuickBooks Enterprise Cloud" or "Right Networks", they will immediately proceed to the [next step](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#2-run-the-configuration-file-to-authorize-access-to-quickbooks) as these hosted environments already have the web connector installed.

:::info Connector download file

The QuickBooks Desktop web connector is packaged as `QuickBooksDesktopConnector.exe`.

:::

**Administrator privileges (admin rights) are required to run the connector.** When you add a new company, a user with admin rights needs to run the installer, which will display the following dialog:

<img src="/img/integrations/accounting/quickbooksdesktop/NewQBD-DownloadInstaller.png" />

When your user runs the `QuickBooksDesktopConnector.exe`, it will launch the "QBWebConnector - InstallShield Wizard" to take them through the installation steps. It will be a fresh install or an update to the latest version if the web connector is already present on the machine.

:::info What if the SMB user isn't a Windows admin?

If the SMB user isn't a Windows administrator on their own system, a different administrator must approve the installation and run Quickbooks Desktop using the **Run as Administrator** option. This applies both during the initial link and when adding companies to an existing connector. When installed in this way, the connector is only able to sync data while Quickbooks Desktop is closed.

:::

## 2. Run the configuration file to authorize access to QuickBooks

Next, the user downloads the configuration file and runs it to create a connection to their QBD company via the web connector. The configuration file will detect and link to the open QBD company. QuickBooks Desktop will then display a prompt requesting to allow the application to read and modify the QuickBooks company file.

Options might vary between QuickBooks versions, but are similar to:

- **No**
- **Yes, always; allow access even if QuickBooks is not running**

The user should select **Yes, always; allow access even if QuickBooks is not running** to enable the connector to work.

<img src="/img/integrations/accounting/quickbooksdesktop/NewQBD-AppCertificate.png" />

They should check the details in the **Access Confirmation** dialog, and then click **Done**.

<img src="/img/integrations/accounting/quickbooksdesktop/NewQBD-AccessConf.png" />

## 3. Authenticate the connector

Once the user allows the connector access to the open QuickBooks Desktop company, they will see a new connection appear in the web connector. The user must then enter the password supplied in the Link flow UI into the relevant connection row's **Password** field.

<img src="/img/integrations/accounting/quickbooksdesktop/NewQBD-Password.png" />

Next, the user should click away from the field and respond **Yes** to the pop-up asking to save the password, use the checkbox to select their company file entry, then click **Update Selected**.

<img src="/img/integrations/accounting/quickbooksdesktop/NewQBD-UpdateSelected.png" />

## 4. Wait for the connector to complete first link

Once the password is saved, access to QuickBooks will be granted and the connector will process the datasets you have chosen to _fetch on first link_ (see [Data Sync Settings](/core-concepts/data-type-settings)).

If you have chosen to have your connectors perform a one-time synchronization, your company connection status will change to _deauthorized_ after the initial sync.

If you have chosen to install your connectors for ongoing synchronizations, the connector will periodically process any dataset syncs or pushes you have queued using the Codat Portal or API. The connector will also start automatically when the system reboots.

<img src="/img/integrations/accounting/quickbooksdesktop/NewQBD-SuccessfulConnection.png" />

## Installation path

The QuickBooks Desktop web connector is installed in Program Files.

```
  C:\Program Files (x86)\Common Files\Intuit\QuickBooks\QBWebConnector
```

For example:

<img src="/img/integrations/accounting/quickbooksdesktop/NEWQBD-FileLocation.png" />


## Uninstall the connector

If your user wants to remove the web connector and disconnect the service, they should navigate to **Windows Settings > Apps & features** from the menu and search for _Web Connector_ in the filter form. 

The QuickBooks web connector will then appear in the results list, and the user can click **Uninstall** to remove the connector.

The user will also need to navigate to `C:\Program Files (x86)\Common Files\Intuit\QuickBooks` and delete the `QBWebConnector` file from there.

### Remove the app certificate

Once the user has uninstalled the web connector, they may also want to remove the application certificate. To do this, they should open QuickBooks Descktop and navigate to **Edit > Preferences > Integrated Applications > Company Preferences**. 

Next, they need to select your application and click **Remove**.
