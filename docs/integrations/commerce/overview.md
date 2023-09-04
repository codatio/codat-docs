---
title: "Overview"
description: "Explore the range of commerce platforms you can connect to through our API."
sidebar_label: Commerce
displayed_sidebar: integrationsCommerce
---

Our suite of commerce integrations allow you to retrieve up-to-date ecommerce, payment, and point-of-sale data from your SMB customers' commerce platforms.

## Supported commerce platforms

You can connect to the following commerce platforms using our integrations:

- [Amazon Seller Central](/integrations/commerce/amazon-seller-central/commerce-amazon-seller-central)
- [BigCommerce](/integrations/commerce/bigcommerce/commerce-bigcommerce)
- [Chargebee](/integrations/commerce/chargebee/commerce-chargebee) \* (subscription data)
- [Clover](/integrations/commerce/clover/commerce-clover)
- [Lightspeed Restaurant (K Series)](/integrations/commerce/lightspeed-k/commerce-lightspeed-k)
- [Maxio](/integrations/commerce/chargify/commerce-chargify) \* (subscription data)
- [Mollie](/integrations/commerce/mollie/commerce-mollie)
- [PayPal](/integrations/commerce/paypal/commerce-paypal)
- [PrestaShop](/integrations/commerce/prestashop/commerce-prestashop)
- [Recurly](/integrations/commerce/recurly/commerce-recurly) \* (subscription data)
- [Shopify](/integrations/commerce/shopify/commerce-shopify)
- [Square](/integrations/commerce/square/commerce-square)
- [Stripe](/integrations/commerce/stripe/commerce-stripe)
- [SumUp](/integrations/commerce/sumup/commerce-sumup)
- [WooCommerce](/integrations/commerce/woocommerce/commerce-woocommerce)
- [Zettle](/integrations/commerce/zettle/commerce-zettle)

\* _Contact your account manager or contact [support](mailto:support@codat.io) to enable integration._

To view and compare commerce data coverage by integration, use the <a  class="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&integrationKey=aiwb&dataType=commerce-companyInfo" target="_blank">Data coverage explorer</a> and select the **Commerce API** product.

## Commerce sandbox

For testing and evaluation, you can use our Commerce Sandbox integration to explore the data you can work with. This doesn't need any setup apart from enabling the integration itself.

## Setting up commerce integrations

Most commerce platforms require you to register with them before you can access data from their platforms through Codat. In most cases, registration is free and only takes a few minutes.

Our documentation details the specific setup steps and requirements for each supported commerce platform.

| Platform                                                                                             | Registration required | Registration complexity | Marketplace partner program | Connection restrictions | Additional information                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------------------------------------------------------------------|-----------------------|-------------------------|-----------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Amazon seller central](/integrations/commerce/amazon-seller-central/commerce-amazon-seller-central) | Yes*                  | Hard                    | Yes                         | No                      | * You can request Codat's   marketplace credentials to avoid registration by emailing solutions@codat.io.                                                                                                                                                                                                                                                                                               |
| [BigCommerce](/integrations/commerce/bigcommerce/commerce-bigcommerce)                               | No                    | Not required            | No                          | No                      | To use this integration, a   merchant must have the correct scopes set. If they don't have these scopes   set, they need to create a new store API account and enter their new store   credentials in Link (see [SMB customer: Authenticate and connect your commerce   data](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-your-commerce-data)). |
| [Clover](/integrations/commerce/clover/commerce-clover)                                              | Yes                   | Easy                    | Yes                         | Yes                     | Companies that offer lending   services are not able to use the Clover API. <br/>There are Sandbox and   Production developer portals available. The Production portal differs for the   US & Canada and UK & Europe.                                                                                                                                                                                   |
| [Lightspeed Restaurant (K Series)](/integrations/commerce/lightspeed-k/commerce-lightspeed-k)        | Yes                   | Easy                    | Yes                         | No                      | Partner application review   typically takes up to 7 working days.                                                                                                                                                                                                                                                                                                                                      |
| [Mollie](/integrations/commerce/mollie/commerce-mollie)                                              | Yes                   | Easy                    | Yes                         | No                      |                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Paypal](/integrations/commerce/paypal/commerce-paypal)                                              | Yes                   | Easy                    | No                          | Yes                     | You must have and eIDAS   certificate and be regulated under open banking to access the Paypal API.                                                                                                                                                                                                                                                                                                     |
| [PrestaShop](/integrations/commerce/prestashop/commerce-prestashop)                                  | No                    | Not required            | Yes                         | No                      |                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Shopify](/integrations/commerce/shopify/commerce-shopify)                                           | Yes*                  | Hard                    | Yes                         | Yes                     | * Companies that provide capital   loans are not able to register a public app with Shopify. <br/> Public   app approval may take up to 2 weeks. Codat offers [connections via custom   apps](/integrations/commerce/shopify/commerce-shopify-custom-apps) as an   alternative.                                                                                                                         |
| [Square](/integrations/commerce/square/commerce-square)                                              | Yes                   | Easy                    | Yes                         | No                      |                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Stripe](/integrations/commerce/stripe/commerce-stripe)                                              | Yes                   | Easy                    | Yes                         | No                      | Production accounts must be   verified by Stripe.                                                                                                                                                                                                                                                                                                                                                       |
| [SumUp](/integrations/commerce/sumup/commerce-sumup)                                                 | Yes                   | Easy                    | No                          | No                      |                                                                                                                                                                                                                                                                                                                                                                                                         |
| [WooCommerce](/integrations/commerce/woocommerce/commerce-woocommerce)                               | No                    | Not required            | No                          | No                      |                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Zettle](/integrations/commerce/zettle/commerce-zettle)                                              | Yes                   | Easy                    | No                          | No                      | The Zettle APIs are not   currently supported in the United States.                                                                                                                                                                                                                                                                                                                                     |

## Platform keys

Each integration has a unique 4-character key that identifies it in our APIs. For reference, a list of all commerce integration platform keys can be found below

<iframe
  src="https://knowledge.codat.io/embeds/integrations/platform-keys?integrationType=Commerce"
  frameborder="0"
  style={{ top: 0, left: 0, background: "white", borderRadius: "4px", overflow: "hidden", width: "100%", height: "1155px" }}
></iframe>
