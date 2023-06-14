---
title: "QuickBooks Desktop (on-premise)"
description: "Learn about our QuickBooks Desktop on-premise connector."
sidebar_label: Overview
---

Our QuickBooks Desktop on-premise connector enables SMBs who use QuickBooks Desktop to share their consented accounting data through the Codat platform.

The connector is a Windows application that runs on the SMB user's local machine.

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

Add your company branding: this is used in the link flow and in the connector app.

From the SMB user's perspective, they'll see the connector app as being owned and branded by you, rather than by Codat.

### 2. Configure the link flow

You can choose to configure the built-in Codat link flow for the connector. This will create a download link for the connector and provide the unique company ID (used as the license key) for each of your SMB users.

Here's how that looks to your users:

![](/img/old/c266e47-qbd-connector_download-page-end-of-link-flow.png)

Alternatively, you can choose to build this functionality yourself using the Codat API. This involves calling the QuickBooks Desktop connector download endpoint (provided in the data connection response) and the customer ID. This allows you to maintain the look and feel of your company's brand, or to implement a specific workflow.

### 3. Enable the connector

Enable the QuickBooks Desktop connector in the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>.

1. Select **Settings > Integrations > Accounting**.
2. Click **Set up** next to **QuickBooks Desktop**.
3. Select the toggle to set the integration to **Enabled**.

## SMB user flow

Here's how your SMB users interact with the QBD connector.

- The SMB user downloads the connector as part of the link flow.
- The user needs administrator privileges (admin rights) to run the connector installer. Alternatively, a different administrator can approve the installation and run the connector.
- The SMB user completes some simple steps to complete the installation (as described in [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector)). In summary, they'll need to:
  - Enter their unique license number (their Codat Company ID), which is provided during the link flow.
  - Complete some steps to point the connector at the correct accounting package data file on their local machine.

When installed, the QBD connector doesn’t require any further interaction by the SMB user, and administrator privileges are no longer required.

The connector has a UI that is accessible from the system tray. Your SMB users do not usually need to interact with this, but there is functionality available for advanced users, such as adding connections to multiple companies, pausing syncs, and manually starting syncs.

## System requirements

See [QuickBooks Desktop requirements](/integrations/accounting/quickbooksdesktop/software-and-hardware-requirements) to learn about the supported versions of QuickBooks Desktop, and the hardware, software, environment and networking requirements for running the connector.

## Install the connector

See [Install the QuickBooks Desktop connector](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector) to learn how to set up and enable the connector.

:::info Installation in hosted environments

[Installation on Right Networks hosted instances](/integrations/accounting/quickbooksdesktop/install-qbd-connector-right-networks) is currently available in beta.

:::
