---
title: "Overview"
description: "Explore the accounting platforms you can connect to through our API."
sidebar_label: Accounting
image: "/img/old/2b27c1b-info_banner.png"
displayed_sidebar: integrationsAccounting
---

import { IntegrationsList } from "@components/global/Integrations";

![](/img/old/2b27c1b-info_banner.png "info_banner.png")

Codat’s accounting integrations allow you to pull up-to-date accounting data from your customers' accounting software as well as push data to their software.

You can use [Codat's Sandbox integration](/integrations/accounting/sandbox/accounting-sandbox) to start exploring the data you can work with, without any set up (other than enabling the integration).

If you've got an existing integration that you'd like to migrate to Codat, we can migrate tokens for [most OAuth integrations](/get-started/migration).

## Supported accounting software

Codat's integrations are able to connect to the following accounting software. You can see more information, including set up instructions for each integration, by clicking through to the documentation at the links below.

You can also explore the data types supported by each integration in the interactive <a className="external" href="https://knowledge.codat.io/supported-features/accounting" target="_blank">Data coverage explorer</a>.

<IntegrationsList sourceType="accounting"/>

## Platform keys

Each integration has a unique 4-character key that identifies it in our APIs. For reference, a list of all accounting integration platform keys can be found below:

<iframe
  src="https://knowledge.codat.io/embeds/integrations/platform-keys?integrationType=Accounting"
  frameborder="0"
  style={{ top: 0, left: 0, background: "white", borderRadius: "4px", overflow: "hidden", width: "100%", height: "1105px" }}
></iframe>

## Integration registration and partnerships

Some integrations have more complex requirements in terms of registration and partnership agreements. Review each platform's own documentation for further details. 

| Platform                                | Registration complexity   | Marketplace partner program | Connection restrictions | Additional information                                                                                                                                                                                                                                                                       |
|-----------------------------------------|---------------------------|-----------------------------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Clear Books](https://www.clearbooks.co.uk/)                              | Registration not required | ❌                           | ❌                       |                                                                                                                                                                                                                                                                                              |
| [Microsoft Dynamics 365 Business Central](https://www.microsoft.com/en-gb/dynamics-365/products/business-central) | Medium                    | ❌                           | ❌                       | You must have a Microsoft Azure account to register.                                                                                                                                                                                                                                         |
| [Exact Online](https://www.exact.com/)                            | Medium                    | ✅                           | ❌                       | You must request permission to connect companies in production.                                                                                                                                                                                                                              |
| [FreeAgent](https://www.freeagent.com/)                               | Easy                      | ✅                           | ❌                       |                                                                                                                                                                                                                                                                                              |
| [FreshBooks](https://www.freshbooks.com/en-gb/)                              | Medium                    | ✅                           | ❌                       | Scopes are now required for all apps.                                                                                                                                                                                                                                                        |
| [Kashflow](https://www.kashflow.com/)                               | Registration not required | ❌                           | ❌                       |                                                                                                                                                                                                                                                                                              |
| [MYOB Business](https://www.myob.com/au)                           | Medium                    | ✅                           | ❌                       | New partners are approved manually within 72 hours after registration.                                                                                                                                                                                                                       |
| [Oracle NetSuite](https://www.netsuite.com/portal/home.shtml)                         | Registration not required | Yes*                        | ❌                       | * Rarely open to new joiners                                                                                                                                                                                                                                                                 |
| [Pandle](https://www.pandle.com/)                                  | Easy                      | ❌                           | ❌                       | Online app registrations are not supported and must be sent to support@pandle.com                                                                                                                                                                                                            |
| [QuickBooks Online](https://quickbooks.intuit.com/uk/online/)                       | Easy                      | ✅                           | ❌                       | You must complete a security questionnaire to access production data.                                                                                                                                                                                                                        |
| [QuickBooks Desktop](https://quickbooks.intuit.com/desktop/) <br/> `On-premise`   | Registration not required | ✅                           | ❌                       |                                                                                                                                                                                                                                                                                              |
| [Sage Business Cloud Accounting](https://www.sage.com/en-gb/sage-business-cloud/accounting/)          | Easy                      | ✅                           | ❌                       |                                                                                                                                                                                                                                                                                              |
| [Sage Intacct](https://www.sage.com/en-gb/sage-business-cloud/intacct/)                           | Registration not required | ✅                           | ✅                       | * You can request Codat's marketplace credentials to avoid registration by emailing solutions@codat.io                                                                                                                                                                                       |
| [Sage 50 UK & Ireland](https://www.sage.com/en-gb/products/sage-50-accounts/) <br/> `On-premise` | Registration not required | ✅                           | ❌                       |                                                                                                                                                                                                                                                                                              |
| [Sage 200 Cloud](https://www.sage.com/en-gb/products/sage-200/)                          | Hard                      | ❌                           | ❌                       | New partners are approved manually within several days after registration. Contact your solutions engineer in case of complications.                                                                                                                                                         |
| [Wave](https://www.waveapps.com/)                                    | Easy                      | ❌                           | ❌                       | Registrations completed before July 2022 need to request partner status via wave@codat.io to access profit & loss and balance sheet report. The reports are enabled by default for registrations completed after July 2022.                                                                  |
| [Xero](https://www.xero.com/)                                    | Easy                      | ✅                           | ✅                       | You must certify your integration and partner with Xero to connect more than 25 companies. This involves extra technical requirements and, in some cases, additional charges. Use cases such as financial brokering, insurance, FX hending, and lending (in some regions) are not permitted. |
| [ZohoBooks](https://www.zoho.com/uk/books/)                               | Easy                      | ✅                           | ❌                       |                                                                                                                                                                                                                                                                                              |

## Accounting platforms per region

Most popular accounting platforms per reigion are as follows: 

- __US:__ QuickBooks Online, QuickBooks Desktop, Sage Intacct, NetSuite, FreshBooks, Xero
- __UK:__ Xero, QuickBooks Online, Sage 50, Sage Accounting, FreeAgent, NetSuite
- __AUS:__ Xero, MYOB, QuickBooks Online, NetSuite

We can sometimes facilitate introductions to accounting platform providers, particularly in the case of Xero, Sage, and MYOB. Please ask your Solutions Engineer, Implementation Specialist or Account Manager for more details.
