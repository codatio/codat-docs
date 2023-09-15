---
title: "Bank feeds mapping overview"
description: "Push bank transaction data into your customers' accounting platforms with an automated feed."
sidebar_label: Overview
displayed_sidebar: bankfeeds
hide_title: true
hide_description: true
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import {IntegrationsList} from '@components/global/Integrations'
import {bankfeedsExternalMappingIntegrations} from '@components/global/Integrations/integrations'


# Authorization and mapping

The method of connecting and mapping this source account to your target account varies depending on the accounting package your customer is using, typically there are three methods of mapping the source account to a target account.

## Internal Mapping

#### Supported integrations
<IntegrationsList integrations={bankfeedsExternalMappingIntegrations}/>

### Codat User Interface

The bank feeds mapping interface allows for customization with your own logo and primary color scheme. Designed to meet all third-party requirements, it enables a seamless launch of your bank feeds product, ensuring an outstanding experience for your customers with minimal development effort.

![Codat-bank-feeds_account-mapping-ui](/img/bank-feeds/mappingUi.png "Codat-provided account mapping UI")


##### Learn more [here](/bank-feeds/mapping/codat-ui)

---

### API

Should you desire a more integrated user experience, you have the option to allow users to map their accounts directly within your own application.

This can be achieved by utilizing the account mapping endpoints. These endpoints also drive the functionality of the white-labeled user interface. 


##### Learn more [here](/bank-feeds/mapping/api-mapping)

---

## External Mapping

### QuickBooks Online Bank Feeds

<IntegrationsList filter={['QuickBooks Online bank feeds']} />

For Bank Feeds in QuickBooks Online, the account mapping is conducted within the QuickBooks platform itself. Codat produces a secure username and password against a dataConnection which can be entered into QuickBooks, facilitating the account and transaction verification process.

There are two ways you can share credentials with a Company - either via a hosted and customizable Codat credentials page, or alternatively through the generate-credentials endpoint.


##### Learn more [here](/bank-feeds/mapping/qbo-mapping)

---

### Sage Bank Feeds

<IntegrationsList filter={['Sage bank feeds']} />

Codat's Sage Bank Feeds integration requires an authorization UI to authenticate an SMB user prior to creating source accounts within Codat.

After source accounts have been created, the user can then map these to existing or new accounts within Sage.

##### Learn more [here](/bank-feeds/mapping/sage-mapping)


