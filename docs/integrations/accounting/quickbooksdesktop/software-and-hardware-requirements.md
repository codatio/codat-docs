---
title: "QuickBooks Desktop requirements"
description: "Software, hardware, environment and network requirements and configurations"
createdAt: "2022-11-22T16:23:10.327Z"
updatedAt: "2022-11-25T12:38:32.711Z"
---

## Supported QBD versions

Codat follows <a className="external" href="https://quickbooks.intuit.com/learn-support/en-us/help-article/feature-preferences/quickbooks-desktop-service-discontinuation-policy/L17cXxlie_US_en_US" target="_blank">Intuit’s service discontinuation policy</a> for QuickBooks Desktop and fully supports the following versions, version tiers and special editions:

The latest three versions of:

- QuickBooks Desktop (UK)
- QuickBooks Desktop (US)
- QuickBooks Desktop (Canada)

Version tiers:

- Accountant
- Pro
- Pro Plus
- Premier
- Premier Plus
- Enterprise

Special editions:

- Contractor edition
- Manufacturing and Wholesale edition
- Accountant edition
- Professional Services edition
- Nonprofit edition

Codat does not fix issues related to older versions of the software. Please upgrade to the latest version of QuickBooks Desktop to continue to use our QuickBooks Desktop connector.

If you experience compatibility issues with companies using older versions of the software, Codat support will advise you to upgrade to a supported version.

:::caution QuickBooks Desktop for Mac

Codat does not currently support Intuit QuickBooks for Mac OS. Only the QuickBooks Desktop for Windows versions listed above are supported.
:::

## Supported QBD modes

The QBD connector works with QBD running in single-user or multi-user mode. In QBD multi-user mode, users on different machines with different QBD data files can sync data to Codat.

Note the following limitations when using QBD in multi-user mode:

- The QuickBooks company file that is open on a user's machine must be the same as the configured company file for the Codat QBD connector.
- Only one instance of QBD can be open on a user's machine at a time.

## Supported operating systems

The Codat QuickBooks Desktop Connector is supported for QuickBooks running on Windows 10 or Windows 11 with the latest service pack(s) installed.

Users have successfully run the connector on older versions of Windows; however, we do not officially support this due to Microsoft's withdrawal of support for these operating systems.

The connector will not run on Mac OS.

:::note Supported environments

Our QuickBooks Desktop Connector is designed to work in single-tenant environments only, where one Windows user logs on to the same computer they use to access QuickBooks Desktop.

[Installation on Right Networks hosted instances](/integrations/accounting/quickboksdesktop/install-qbd-connector-right-networks) is currently in beta.
:::

## Hardware requirements

You will need to ensure that the host machine meets <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/install-products/system-requirements-quickbooks-desktop-2022/L9664spDA_US_en_US" class="external" target="_blank">Intuit's recommended specification</a> for running QuickBooks Desktop.

If you have a large number of companies, or particularly large company files, you should pay special attention to the consumption of CPU, memory, disk and network resources on the host machine and ensure there is sufficient headroom.

## Firewall rules

The QuickBooks Desktop connector communicates over port 443 to URLs hosted on `<https://quickbooksdesktop.codat.io`> in production.

If you experience problems with the connector transmitting data, please add the following URL to your firewall allow list: `<https://quickbooksdesktop.codat.io/`>
