---
title: "QuickBooks Desktop requirements"
description: "Software, hardware, environment and network requirements and configurations"
sidebar_label: Requirements
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

## Limitations

The following limitations apply when using the connector with QBD running in either single-user or multi-user mode: 

- If QuickBooks Desktop is open on the SMB user's machine, the open QuickBooks company file must be the same as the company file that's configured for the connector.

- Only one instance of QBD can be open on a user's machine at a time.

- QBD performance may vary during the syncs. You cannot open an instance of QBD while a program is syncing, and its interface may behave unexpectedly.

## Supported operating systems

The Codat QuickBooks Desktop Connector is supported for QuickBooks running on Windows 10 or Windows 11 with the latest service pack(s) installed.

Users have successfully run the connector on older versions of Windows; however, we do not officially support this due to Microsoft's withdrawal of support for these operating systems.

The connector will not run on Mac OS.

## Supported environments

Our QuickBooks Desktop Connector is verified to work in single-tenant environments only, where a single Windows user is logged on to the computer used to access QuickBooks Desktop. 

Due to limitations of syncing with QBD, complications can occur when attempting to sync in multi-tenant environments. For example, if your company files are hosted on a different server to the one where you run and use QBD, you may see performance impact. To avoid this, you can install the web connector on this server, but you will need to install QBD there as well. 

You may also encounter issues in a hosted environment where multiple users log in and use QBD simultaneously, although this depends on the exact setup. This does not apply to Rightworks hosted instances.

:::note Rightworks hosted instances

Rightworks hosted instances already have the web connector installed and support our integration as a result.  Outside of the Rightworks solution, we cannot guarantee the behavior of the connector in multi-tenanted or hosted environments.

:::

## Hardware requirements

You will need to ensure that the host machine meets <a href="https://quickbooks.intuit.com/learn-support/en-us/help-article/install-products/system-requirements-quickbooks-desktop-2022/L9664spDA_US_en_US" class="external" target="_blank">Intuit's recommended specification</a> for running QuickBooks Desktop.

If you have a large number of companies, or particularly large company files, you should pay special attention to the consumption of CPU, memory, disk and network resources on the host machine and ensure there is sufficient headroom.

## Firewall rules

The QuickBooks Desktop connector communicates over port 443 to URLs hosted on `https://quickbooksdesktop.codat.io` in production.

If you experience problems with the connector transmitting data, please add the following URLs to your firewall allow list: 

`https://quickbooksdesktop.codat.io/`

`https://connectors.codat.io`


