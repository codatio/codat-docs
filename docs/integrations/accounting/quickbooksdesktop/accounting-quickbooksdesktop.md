---
title: "QuickBooks Desktop (on-premise)"
description: "Learn about our QuickBooks Desktop on-premise connector"
---

:::caution New web connector documentation

This documentation describes the use of our new QuickBooks Desktop web connector. If you are using our legacy on-premise connector, refer to the previous version of our documentation:

* [QuickBooks Desktop (on-premise) overview](/integrations/accounting/quickbooksdesktop/legacy/accounting-quickbooksdesktop)
* [Install the QuickBooks Desktop connector on Right Networks](/integrations/accounting/quickbooksdesktop/legacy/install-qbd-connector-right-networks)
* [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/legacy/installing-the-quickbooks-connector)
* [FAQs](/integrations/accounting/quickbooksdesktop/legacy/quickbooks-desktop-faq)
* [Troubleshooting](/integrations/accounting/quickbooksdesktop/legacy/quickbooks-desktop-troubleshooting)
* [QuickBooks Desktop requirements](/integrations/accounting/quickbooksdesktop/legacy/software-and-hardware-requirements)

:::

Our QuickBooks Desktop connector enables SMBs who use QuickBooks Desktop to share their consented accounting data through the Codat platform, supporting the following ways of connecting to QBD:

- QuickBooks Desktop app
- QuickBooks Enterprise Cloud
- Right Networks

The connector utilizes the Intuit Web Connector, a Windows application that runs on the SMB user's local machine.

## Data type coverage

View the coverage of our QuickBooks Desktop connector in the [Data coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-integration&integrationKey=pqsw).

:::caution Attachments not supported

Uploading and downloading attachments to QuickBooks Desktop is not supported for any data type. This functionality is not supported by the QuickBooks SDK.

:::

## Features and benefits

Our connector provides a seamless and full featured integration to QuickBooks Desktop.

<ul className="card-container col-2">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Runs in the background</h3>
    </div>
    <p>
      The connector runs as a background process and doesn't require any daily
      interaction by SMB users.
    </p>
  </li>
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Auto restarts and updates</h3>
    </div>
    <p>
      The connector starts up automatically after a system reboot. And it
      updates silently in the background.
    </p>
  </li>
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Auto and manual syncs</h3>
    </div>
    <p>
      Accounting data is synced automatically. SMB users can manually sync their
      data whenever they want to.
    </p>
  </li>
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Intuitive user interface</h3>
    </div>
    <p>
      A connector UI enables manual syncs and advanced features, like adding
      connections to multiple companies.
    </p>
  </li>
</ul>

## Initial setup

Before your SMB users can download and install the on-premise connector, you'll need to perform the following tasks in the Codat Portal.

### 1. Add your branding

Add your company branding: this is used in the Link flow.

From the SMB user's perspective, they'll see the connector app as being owned and branded by Intuit.

### 2. Enable the connector

Enable the QuickBooks Desktop connector in the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>.

1. Select **Settings > Integrations > Accounting**.
2. Click **Set up** next to **QuickBooks Desktop**.
3. Select the toggle to set the integration to **Enabled**.

## SMB user flow

Here's how your SMB users interact with the QBD connector.

- The user selects the way they connect QBD at the start of the flow. If they choose the `QuickBooks Desktop app` option, they will download the connector. Selecting any of the other options skips this step because hosted environments already have the web connector installed.
- The user downloads and runs the connector installer. This requires the user to have administrator privileges (admin rights), or a different administrator to approve the installation and run the connector.
- The SMB user then downloads and runs the configuration file (as described in [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector)). In summary, they'll need to:
  - Authorise the connector to access the QuickBooks Desktop company.
  - Enter the password into the connector, which is provided during the Link flow.

When installed, the QBD connector doesn’t require any further interaction by the SMB user, and administrator privileges are no longer required.

The connector has a UI that is accessible from the system tray and the Start menu. Your SMB users do not usually need to interact with this, but there is functionality available for advanced users, such as adding connections to multiple companies, pausing syncs, and manually starting syncs.

## System requirements

See [QuickBooks Desktop requirements](/integrations/accounting/quickbooksdesktop/software-and-hardware-requirements) to learn about the supported versions of QuickBooks Desktop, and the hardware, software, environment and networking requirements for running the connector.

## Install the connector

See [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector) to learn how to set up and enable the connector.
