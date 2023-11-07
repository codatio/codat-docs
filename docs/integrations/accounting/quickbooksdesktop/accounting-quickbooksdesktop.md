---
title: "QuickBooks Desktop (on-premise)"
description: "Learn about our QuickBooks Desktop on-premise connector."
---

Our QuickBooks Desktop on-premise connector enables SMBs who use QuickBooks Desktop to share their consented accounting data through the Codat platform.

The connector utilizes the Intuit Web Connector, a Windows application that runs on the SMB user's local machine.

<div className="card">
  <h3>✨ Premium</h3>

  <p>This integration is only available as a premium add-on on our <a href="/configure/create-account">enterprise plans</a>.</p>
</div>

## Data type coverage

View the coverage of our QuickBooks Desktop on-premise connector in the [Data coverage explorer](https://knowledge.codat.io/supported-features/accounting?view=tab-by-integration&integrationKey=pqsw).

:::caution Attachments not supported

Uploading and downloading Attachments to QuickBooks Desktop is not supported for any data type. This functionality is not supported by the QuickBooks SDK.

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

Add your company branding: this is used in the link flow.

From the SMB user's perspective, they'll see the connector app as being owned and branded by Intuit.

### 2. Configure the link flow

You must configure the built-in Codat link flow for the connector. This will create a download link for the connector and provide the unique company ID (used as the license key) for each of your SMB users.

### 3. Enable the connector

Enable the QuickBooks Desktop connector in the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>.

1. Select **Settings > Integrations > Accounting**.
2. Click **Set up** next to **QuickBooks Desktop**.
3. Select the toggle to set the integration to **Enabled**.

## SMB user flow

Here's how your SMB users interact with the QBD connector.

- The SMB user downloads the connector as part of the link flow (unless the user is using Right Networks or QBD enterprise cloud, in which case they will skip this step)
  - The user needs to download and run the connector installer, this requires administrator privileges (admin rights) to run. Alternatively, a different administrator can approve the installation and run the connector.
- The SMB user then needs to download and run the configuration file (as described in [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector)). In summary, they'll need to:
  - Authorise the connector to access the QuickBooks Desktop company.
  - Enter the password into the connector, which is provided during the link flow.

When installed, the QBD connector doesn’t require any further interaction by the SMB user, and administrator privileges are no longer required.

The connector has a UI that is accessible from the system tray. Your SMB users do not usually need to interact with this, but there is functionality available for advanced users, such as adding connections to multiple companies, pausing syncs, and manually starting syncs.

## System requirements

See [QuickBooks Desktop requirements](/integrations/accounting/quickbooksdesktop/software-and-hardware-requirements) to learn about the supported versions of QuickBooks Desktop, and the hardware, software, environment and networking requirements for running the connector.

## Install the connector

See [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector) to learn how to set up and enable the connector.

:::info Installation in hosted environments

[Installation on Right Networks hosted instances](/integrations/accounting/quickbooksdesktop/install-qbd-connector-right-networks) is currently available in beta.

:::
