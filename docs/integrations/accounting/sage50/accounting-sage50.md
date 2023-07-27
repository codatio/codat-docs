---
title: "Sage 50 (UK & Ireland) (on-premise)"
slug: "accounting-sage50"
description: "Learn about our Sage 50 (UK & Ireland) on-premise connector."
sidebar_label: Overview
---

The Codat Sage 50 (UK & Ireland) on-premise connector is a Windows application that enables SMBs using Sage 50 (UK & Ireland) to fully integrate with the Codat platform.

<div className="card">
  <h3>✨ Premium</h3>

  <p>This integration is only available as a premium add-on on our <a href="/configure/create-account">enterprise plans</a>.</p>
</div>

## Data type coverage

View the coverage of our Sage 50 (UK & Ireland) integration in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-integration&integrationKey=hbql" target="_blank">Data coverage explorer</a>.

## Branding, link journey and enabling the integration

Before your SMB users will be able to download and install the on-premise connector, you will need to perform the following steps in the Codat portal.

From the SMB perspective, they will see the on-premise connector app as being owned and branded by you rather than Codat.

- Create your branding - this will be used on the link site and the on-premise connector app.
- Optionally, configure the Codat link flow. This will create a download link for the connector and provide the unique company ID for each of your SMB users. Alternatively, you can choose to build this functionality yourself by pulling the download end point and customer ID from the Codat API e.g. to offer this from within your own site, or to implement a specific workflow, to maintain tighly branded look/feel etc.
- Enable the on-premise connector (QBD/Sage 50) integration

## The on-premise connector

- The connector will be downloaded by the SMB user as part of the link flow
- The connector installer requires administrator privileges (admin rights) to initially run
- The SMB user will need to complete some simple steps to complete the install (see the install guide for detail):
  - Paste in their unique license number (company ID) - this is provided to the user during the link journey
  - Complete a couple of straightforward steps to point the connector at the correct accounting package data file
- Thereafter the connector doesn’t need any further user interaction or administrator privileges
- The connector runs as a background process
- The connector starts up automatically after reboots
- All updates are performed automatically and silently
- Requests to sync data can be made at will and will be fulfilled as soon as a machine is online e.g. when it is booted up un the morning
- The connector does have a UI that is accessible from the system tray icon. Your SMB users do not usually need to interact with this, but there is functionality available for advanced users such as adding connections to multiple companies, pausing and manually instigating syncs

## Requirements

See [Sage 50 requirements](sage-50-requirements) to learn about the supported versions, and the hardware, software, environment and networking requirements for running the connector.

## Install the connector

See [Install the Sage 50 connector](/integrations/accounting/sage50/installing-the-sage-50-connector) to learn how to set up and enable the connector.
