---
title: Frequent questions and issue resolution
sidebar_label: Resolve issues
description: Get help if you have questions or experience issues when connecting to Sage 50
hide_table_of_contents: false
---

## General queries 

#### How does my financial services provider benefit from me using Codat to connect to Sage 50?

When you connect to your Sage 50 account using Codat, this streamlines the sharing of financial data with your financial services provider. In turn, this enables them to make decisions faster.

You can learn more about our relationship with your provider in our [Codat FAQs](/smb-help-hub/codat/faq).

#### What kind of data does Codat transfer between my Sage 50 system and my provider?

Codat facilitates the transfer of key financial data such as invoices, payments, general ledger entries, and customer details, keeping both systems synchronized.

#### Can I customize what data is shared between Sage 50 and my provider through Codat?

The data and frequency of data shared is specified by your financial services provider. Please reach out to their representative if you have any concerns.

#### Is Codat’s connection compatible with Sage 50 UK and Ireland?

Codat smoothly connects to Sage 50 UK and Ireland versions, ensuring your financial data can be linked to your financial services provider smoothly.

#### How quickly will financial data sync between Sage 50 and my provider once connected?

The speed of sync depends on the volume and the types of data that are being synced. There is no exact estimate. 

## Compatibility and requirements

#### Is my Sage 50 version supported by Codat?

Codat supports versions 26, 27, 28, 29, and 30 of Sage 50c Accounts Standard & Professional for UK and Ireland. These are regularly updated to keep in line with Sage’s software lifecycle policy. 

#### Can I link multiple Sage 50 accounts to my financial services provider using Codat?

Yes, Codat allows you to connect multiple Sage 50 accounts, making it easier to manage various entities under one integration with your financial services provider.

#### Does Codat support both desktop and cloud-based versions of Sage 50?

Codat’s integration supports both the desktop and cloud versions of Sage 50.

#### What setup is required to ensure my business data is synced properly?

You will need to install Codat’s on-premise connector on the machine running Sage 50 and configure the connection to your financial services provider.

#### Do I need any additional hardware to link Sage 50 using Codat?

No additional hardware is needed, but you need to install Codat's on-premise connector on a Windows system where Sage 50 is operational.

## Data syncing and functionality 

#### How often does Codat sync accounting data between Sage 50 and my financial services provider?

The sync frequency is determined by your provider, but data can be updated in near real-time to ensure both Sage 50 and the provider have the latest information.

#### Does Codat support real-time data updates between Sage 50 and my provider?

Yes, Codat supports near real-time syncing, ensuring your financial services provider can promptly see the data updates from Sage 50.

## Security and privacy 

#### How secure is the connection between Sage 50, Codat, and my financial services provider?

Codat uses industry-standard encryption to secure the data transferred between Sage 50 and your financial services provider, ensuring sensitive financial information is protected. You can see thedetailes of our compliance with various standards and policies in our [Trust Portal](https://trust.codat.io/).

#### What measures does Codat take to protect sensitive financial data?

Codat encrypts data both in transit and at rest with strict access controls and authentication methods to protect your financial information during transmission.

#### Does my business’ financial data remain private when shared with my provider via Codat?

Yes, Codat doesn't share your financial data with any third parties. Only the systems you authorize, such as your financial services provider, will be able to access it.

#### Can I control who in my business has access to the connection with my provider?

Yes, you can set access permissions within your Sage 50 account to control who in your business can access and manage the connection with your financial services provider.

## Setup and installation

#### How do I set up Codat to connect Sage 50 and my financial services provider?

You need to install Codat’s on-premise connector, configure it to connect Sage 50, and follow Codat’s setup instructions to link it with your financial services provider.

#### How long does it take Codat to fully synchronize my Sage 50 data with my provider?

Depending on your business size and complexity, this can typically be completed in 30 minutes to a couple of hours.

#### Do I need technical expertise to connect?

Some technical knowledge may be required for setup, particularly to install the connector, but Codat’s guides make it accessible for non-technical staff.

#### What kind of support is available if I have issues connecting Sage 50 using Codat?

Please reach out to your relationship manager through your usual channels at your financial services provider if you have any trouble using Codat. 

#### Are there any common setup issues when linking Codat, Sage 50, and my provider?

Common issues may include network or permissions problems, but these are typically resolved by adjusting firewall settings or reconfiguring the on-premise connector. See [Troubleshooting and performance](/smb-help-hub/integrations/sage-50/troubleshooting#troubleshooting-and-performance) for more information. 

## Maintenance and support 

#### Does Codat provide ongoing support for the connection between Sage 50 and my financial services provider?

Yes, Codat offers ongoing support, including updates and troubleshooting, to keep the connection running smoothly.

#### What kind of maintenance is required for the connection between Sage 50 and my provider?

Minimal maintenance is needed, though you’ll need to ensure Sage 50 and the Codat connector are up-to-date and functioning correctly.

#### What should I do if the connection between Codat and my provider stops working?

Check the status of the on-premise connector, verify Internet connectivity, and contact Codat’s support team for further assistance, if needed.

## Troubleshooting and performance

#### What should I do if the data between Sage 50 and my financial services provider doesn’t sync properly?

If your data isn't syncing properly, follow this checklist to troubleshoot potential causes:

1. Check the status of the Codat on-premise connector and its configuration. 
2. Ensure that the computer running Sage 50 is online. 
3. Verify that Sage 50 is up-to-date, and check if the connector has access to the necessary files.
4. Check that the connection has the correct permissions for accessing Sage 50 data.
4. Ensure that the Sage 50 instance is closed while the connector operates, as conflicts arise when the application is open.
5. Review error logs within Codat's platform to identify specific issues.
6. Restart the on-premise connector, if necessary.

#### Can I monitor the performance of the connection between Sage 50 and my provider?

Yes. Codat provides a dashboard where you can monitor the syncing status and performance issues. You can also view error logs to diagnose data syncing problems quickly.

#### Does the connection affect Sage 50’s performance when syncing data with my provider?

The connection runs efficiently in the background, but you need to ensure that your system that is running Sage 50 has sufficient resources to handle syncing processes. Closing Sage 50 during synchronization can also improve performance and prevent conflicts.

## Resolutions to common errors

#### Connector errors

Restart Codat's on-premise connector and ensure your firewall settings permit the connector's access. Check that the machine running Sage 50 is not in sleep mode, and all necessary permissions are granted.

#### File access issues

Ensure that the connector has access to Sage 50 data directories and the correct file paths are configured.

#### Data format errors

If you notice data discrepancies (such as invalid date formats), review the logs for specific fields causing issues. Ensure your Sage 50 data follows the expected formats.

