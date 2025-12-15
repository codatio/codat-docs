---
title: "Overview"
description: "Explore the accounting software you can connect to through our API."
sidebar_label: Accounting
image: "/img/old/2b27c1b-info_banner.png"
displayed_sidebar: integrationsAccounting
---

import { IntegrationsList } from "@components/Integrations";

![](/img/old/2b27c1b-info_banner.png "info_banner.png")

Codat’s accounting integrations allow you to read up-to-date accounting data from your customers' accounting software as well as write data to their software.

You can use [Codat's Sandbox integration](/integrations/accounting/sandbox/accounting-sandbox) to start exploring the data you can work with, without any set up (other than enabling the integration).

If you've got an existing integration that you'd like to migrate to Codat, we can migrate tokens for [most OAuth integrations](/get-started/migration).

## Supported accounting software

Codat's integrations are able to connect to the following accounting software. You can see more information, including set up instructions for each integration, by clicking through to the documentation at the links below.

<IntegrationsList sourceType="accounting" />

## Setting up accounting integrations

Some integrations have more complex requirements in terms of registration and partnership agreements. Review each platform's own documentation for further details.

| Platform                                                                                                          | Registration complexity   | Marketplace partner program | Connection restrictions | Additional information                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------- | --------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Microsoft Dynamics 365 Business Central](https://www.microsoft.com/en-gb/dynamics-365/products/business-central) | Medium                    | ❌                          | ❌                      | You must have a Microsoft Azure account to register.                                                                                                                                                                                                                                         |
| [Exact Online](https://www.exact.com/)                                                                            | Medium                    | ✅                          | ❌                      | You must request permission to connect companies in production.                                                                                                                                                                                                                              |
| [FreeAgent](https://www.freeagent.com/)                                                                           | Easy                      | ✅                          | ❌                      |                                                                                                                                                                                                                                                                                              |
| [FreshBooks](https://www.freshbooks.com/en-gb/)                                                                   | Medium                    | ✅                          | ❌                      | Scopes are now required for all apps.                                                                                                                                                                                                                                                        |
| [MYOB Business](https://www.myob.com/au)                                                                          | Medium                    | ✅                          | ❌                      | New partners are approved manually within 72 hours after registration.                                                                                                                                                                                                                       |
| [Oracle NetSuite](https://www.netsuite.com/portal/home.shtml)                                                     | Registration not required | Yes\*                       | ❌                      | \* Rarely open to new joiners                                                                                                                                                                                                                                                                |
| [QuickBooks Online](https://quickbooks.intuit.com/uk/online/)                                                     | Easy                      | ✅                          | ❌                      | You must complete a security questionnaire to access production data.                                                                                                                                                                                                                        |
| [QuickBooks Desktop](https://quickbooks.intuit.com/desktop/) <br/> `On-premise`                                   | Registration not required | ✅                          | ❌                      |                                                                                                                                                                                                                                                                                              |
| [Sage Accounting](https://www.sage.com/en-gb/sage-business-cloud/accounting/)                                     | Easy                      | ✅                          | ❌                      |                                                                                                                                                                                                                                                                                              |
| [Sage Intacct](https://www.sage.com/en-gb/sage-business-cloud/intacct/)                                           | Registration not required | ✅                          | ✅                      | \* You can request Codat's marketplace credentials to avoid registration by emailing solutions@codat.io                                                                                                                                                                                      |
| [Sage 50 UK & Ireland](https://www.sage.com/en-gb/products/sage-50-accounts/) <br/> `On-premise`                  | Registration not required | ✅                          | ❌                      |                                                                                                                                                                                                                                                                                              |
| [Sage 200 Cloud](https://www.sage.com/en-gb/products/sage-200/)                                                   | Hard                      | ❌                          | ❌                      | New partners are approved manually within several days after registration. Contact your solutions engineer in case of complications.                                                                                                                                                         |
| [Wave](https://www.waveapps.com/)                                                                                 | Easy                      | ❌                          | ❌                      | Registrations completed before July 2022 need to request partner status via wave@codat.io to access profit & loss and balance sheet report. The reports are enabled by default for registrations completed after July 2022.                                                                  |
| [Workday](https://www.workday.com/)                                                                               | Registration not required | ✅                          | None known              | This integration is only supported by our [Spend Insights](/spend-insights/overview) solution.                                                                                                                                                                                               |
| [Xero](https://www.xero.com/)                                                                                     | Easy                      | ✅                          | ✅                      | You must certify your integration and partner with Xero to connect more than 25 companies. This involves extra technical requirements and, in some cases, additional charges. Use cases such as financial brokering, insurance, FX hending, and lending (in some regions) are not permitted. |
| [Zoho Books](https://www.zoho.com/uk/books/)                                                                      | Easy                      | ✅                          | ❌                      |                                                                                                                                                                                                                                                                                              |

## Accounting software per region

Most popular accounting software per reigion are as follows:

- **US:** QuickBooks Online, QuickBooks Desktop, Sage Intacct, NetSuite, FreshBooks, Xero
- **UK:** Xero, QuickBooks Online, Sage 50, Sage Accounting, FreeAgent, NetSuite
- **AUS:** Xero, MYOB, QuickBooks Online, NetSuite

We can sometimes facilitate introductions to accounting software providers, particularly in the case of Xero, Sage, and MYOB. Please ask your Solutions Engineer, Implementation Specialist or Account Manager for more details.

## Platform keys

Each integration has a unique 4-character key that identifies it in our APIs. For reference, a list of all accounting integration platform keys can be found below:

| Platform name                 | Platform key |
| ----------------------------- | ------------ |
| Dynamics 365 Business Central | trji         |
| Exact (Netherlands)           | qudb         |
| Exact (UK)                    | pbbf         |
| FreeAgent                     | fbrh         |
| FreshBooks                    | vxvy         |
| MYOB Business                 | pdvj         |
| Oracle NetSuite               | akxx         |
| QuickBooks Desktop            | pqsw         |
| QuickBooks Online             | qhyg         |
| QuickBooks Online Sandbox     | ndsk         |
| Sage 200 Standard             | jcrp         |
| Sage 50 (UK)                  | hbql         |
| Sage Accounting               | tgff         |
| Sage Intacct                  | knfz         |
| Sandbox                       | mqjo         |
| Wave                          | pbtz         |
| Workday                       | rvam         |
| Xero                          | gbol         |
| Zoho Books                    | rwuv         |
