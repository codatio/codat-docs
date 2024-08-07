---
title: "Customize Link settings in the Portal"
sidebar_label: Link settings in Portal
description: "Settings available to you to tailor Link to your authorization journey's needs"
banner_image: "/img/banners/link.png"
---

## Overview

Our Link settings allow you to configure the authorization process based on your data needs and white-label Link to suit your brand. You can customize these settings in the [Codat Portal](https://app.codat.io/) in **[Settings > Auth flow > Link](https://app.codat.io/settings/link-settings)**.

## Data connections

### What data are you looking to connect?

#### Sandbox integrations

Allow sandbox and test integrations to appear in the link flow. 

Some integrations split their production and sandbox data into separate environments, each with its own unique credentials, e.g. QuickBooks Online. Enabling this feature would show both _QuickBooks Online_ and _QuickBooks Online Sandbox_ in the link flow. This would also include _Codat Sandbox_ integrations.

:::note Sandbox integrations in the auth flow

Sandbox integrations appear in the auth flow by default. You can override this behavior by appending the `link.showSandboxIntegrations` query parameter to the Link URL with a value of "true" or "false".
:::

#### Integration categories

Select which types of integrations (accounting, banking, or commerce) you'd like customers to connect. You can make each integration type optional if you want your customers to be able to skip sharing it.

Before enabling these, you need to [set up one or more integrations](/core-concepts/integrations) for each integration type. Otherwise, the Link UI will display a blank 'Select your platform' page when companies attempt to link their accounting, banking, or commerce data.

For the Business documents integration type, you need to enable it in **Settings > Integrations > Other integrations**. You can also let your users know what files they should upload for each integration category by providing a description under **File upload**.

:::tip Banking integrations in the auth flow

You should only enable one of the banking integrations at a time. This ensures optimal use of Link, as each banking integration is [represented differently](/integrations/banking/overview#banking-integrations-in-the-authorization-flow) in the auth flow and may confuse the customer.
:::

:::tip Enable users without credentials

In your customer's organization, the person signing up through Codat may not have their credentials to hand. For example, it may be their accountant who actually logs into their accounting software.

To enable them to proceed and explore your product, make upfront authorization for different integration categories optional. Later, remind them to authorize or give them an option to share a Link URL or even a `mailto:` link.

:::


### Retries  
Allow your customers to restart the linking process for accounting software in case their first connection attempt fails. The "Try again" button will appear on the error page.

The possibility to restart the linking process for commerce and banking platforms is available by default.

## Onboarding

#### Mobile support warning  
Let your users know that some integrations are not optimized or will not connect via mobile when accessing the connection journey on mobile.

#### Powered by Codat
Toggle whether the _Powered by Codat_ logo is shown on your authorization flow.

#### Landing page  
If enabled, an extra page will appear at the start of Link. The page's content is customizable, which is an excellent opportunity to explain the value of linking. You can customize the header and the body of the message.

#### Left panel  
Specify the messaging that appears on the left panel throughout the Link flow. This is an opportunity to clarify what the user is about to do. You can customize the header and the body of the message.

#### Data access consent  
This is a mandatory field where you need to specify the message you want to display to companies when sharing data with you.

Optionally, you can add a message and a URL for terms and conditions you'd like your clients to read before they share their data with you.

#### Data type information  
List the data you're going to collect for each of the integration categories (accounting, banking, or commerce). This informs the user which data types Codat will use after linking the data source. 

:::tip Data types with Plaid

If you enabled Plaid as your banking integration, the information from this section will not be shown in Link. This is because Plaid provides their own list of data types within their auth flow.
:::

**Exit confirmation dialog**  
Customize the message your customers see if they cancel before completing the linking process.

**Invite company page**  
Once you provide your customers with a Link URL, they reach a page where they provide their company name and start the linking process. You can customize the header and the body of the message on that page.

## Client information

#### Help and support  
Customize your help and support messages that are displayed throughout the Link flow.

#### Data security
Provide a link to your data security policy.

#### Terms and conditions content  
Specify the message you'd like to display to companies if you have specific terms and conditions you'd like them to view before linking.

---

## Read next

- [Set up your company branding](/auth-flow/customize/branding)
