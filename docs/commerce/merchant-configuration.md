---
title: "Merchant configuration"
description: "Enable merchants to connect their systems and specify how they want their sales data to be synchronized into their accounting package"
displayed_sidebar: commerce
image: "/img/banners/social/commerce.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Our Sync configuration UI allows merchants to authenticate to gain access to their commerce platform and accounting package and records the merchants' sales data synchronization preferences. It can be customized to integrate seamlessly into your software.

## Merchant configuration

Once a merchant authorized access to their systems, they can use the Sync configuration UI to perform the following configuration:

- Decide whether to handle sales as invoices or journal entries within their accounting package.
- Schedule the start date and time from which sales data should be synchronized.
- Configure how their sales should be accounted for, including:
    - Aggregation of sales by product category,
    - Tracking of sales by location,
    - Handling of gift cards, gratuities, and refunds,
    - Tax totals.
- Configure how to account for payments for each payment type you support and your customer uses. 
- Configure how to account for payment fees.

### Mapping sales, payments, and fees

The configuration of accounting for sales, payments, and fees happens in the form of mapping. 

First, Codat retrieves relevant data from the connected commerce platform and accounting package. 

The UI then requests the user to map different types of sales, payments, and fees to the relevant accounts in their accounting system. For example, they may map sales of food to the "Food income" account and map payment fees to the "Payment costs" account. 

The Sync configuration UI also allows your customer to create a new account in their accounting package where necessary.

:::tip Implementing your own UI
You can implement your own UI to capture a merchant's desired sync configuration using our API. Consult your Solutions Engineer for support in doing this. 
:::

## Customize the Sync configuration UI

Customization options available for the configuration UI include:

- Branding, including your company name, logo, icon and brand colours
- Text content of the Sync configuration UI

:::tip Further UI customization
This section describes most commonly implemented Sync configuration UI customization. However, further customization is possible. Please consult your Solutions Engineer for details. 
:::

### Branding customization

You can configure your branding options in the [Branding settings](https://app.codat.io/settings/branding) section of the Codat Portal. Learn more about the branding options available to you in our [Company branding](/auth-flow/customize/branding) documentation.

### Text content customization

Updating the text fields helps ensure that your users clearly understand how to correctly configure their sales data synchronization and how exactly that data will be synced.

#### UI element customization

The Sync configuration UI is organised in 6 stages, each with customizable text elements:

| Stage                                     | Action required from user                              |
|-------------------------------------------|--------------------------------------------------------|
| 1. Connection to commerce system          | Authenticate with commerce platform                    |
| 2. Connection to accounting system        | Authenticate with accounting package                   |
| 3. Sales synchronization configuration    | Configure how sales should be accounted for            |
| 4. Fees synchronization configuration     | Configure how fees should be accounted for             |
| 5. Payments synchronization configuration | Configure how payments should be accounted for         |
| 6. Sync schedule configuration            | Set start date and time for sales data synchronization |

Each customizable element is identified by its `data-textkey`. You can customize the following elements: 

- Main title
- Checkbox options
- Previous and Next buttons on each stage
- Stage title, description, and the description of the required field indicator
- Subsection titles and descriptions within each stage
- Dropdown labels for sales, fees, and payments configuration (stages 3, 4, and 5)

You can also call the [Get preferences for text fields](/sync-for-commerce-api#/operations/get-config-text-sync-flow) endpoint to retrieve the full list of customizable elements:

```http
GET sync/commerce/config/ui/text
```

This returns all customizable UI elements with the current text configured for each. You can also find the full list of elements and their default values in the [Summary of `data-textkeys` and default values](/commerce/merchant-configuration#summary-of-text-elements-and-default-values) section below.

```json
{
  "configure-setupSidebar-checkboxes-sales": "Set up sales",
  "configure-setupSidebar-checkboxes-fees": "Set up fees",
  "configure-setupSidebar-checkboxes-payments": "Set up payments",
  ... // etc.
}
```
To update the text values via our API, use the [Update preferences for text fields](/sync-for-commerce-api#/operations/update-config-text-sync-flow) endpoint and include the desired text strings in the request body for each `data-textkey`:

```http
PATCH sync/commerce/config/ui/text
```

Example request body:

```json
// Update the text value to the specified string
{
"data-textkey": "A new value"
}

// Display an empty string
{
   "data-textkey": ""
}

// Use the default value
{
   "data-textkey": null
}
```

##### Summary of text elements and default values 

<Tabs>
   <TabItem value="main" label="Main title">  

   | Default value                  | `data-textkey` value           |
   |--------------------------------|------------------------------|
   | Set up Sync to {platform name} | `configure-setupSidebar-title` |

   </TabItem>

   <TabItem value="checkbox" label="Checkboxes">

   | Default value                         | `data-textkey` value                                    |
   |---------------------------------------|-------------------------------------------------------|
   | Connect to {commerce platform name}   | `configure-setupSidebar-checkboxes-connectToCommerce`   |
   | Connect to {accounting platform name} | `configure-setupSidebar-checkboxes-connectToAccounting` |
   | Set up sales                          | `configure-setupSidebar-checkboxes-sales`               |
   | Set up fees                           | `configure-setupSidebar-checkboxes-fees`                |
   | Set up payments                       | `configure-setupSidebar-checkboxes-payments`            |
   | Set up sync schedule                  | `configure-setupSidebar=checkboxes-syncSchedule`        |

   </TabItem>

   <TabItem value="buttons" label="Navigation buttons">

   | Default value | `data-textkey` value            |
   |---------------|-------------------------------|
   | Previous      | `configure-misc-previousButton` |
   | Next          | `configure-misc-nextButton`     |

   </TabItem>

   <TabItem value="stage" label="Stage text values">  

   <b>Stage title and description</b>

   | Default value                                    | `data-textkey` value                     |
   |--------------------------------------------------|----------------------------------------|
   | Sales                                            | `configure-content-sales-title`          |
   | Sales title description: no value by default.    | `configure-content-sales-description`    |
   | Fees                                             | `configure-content-fees-title`           |
   | Fees title description: no value by default.     | `configure-content-fees-description`     |
   | Payments                                         | `configure-content-payments-title`       |
   | Payments title description: no value by default. | `configure-content-payments-description` |

   <b>Required field indicator</b>

   | Default value              | `data-textkey` value           |
   |----------------------------|------------------------------|
   | Indicates a required field | `configure-required-indicator` |

   </TabItem>

   <TabItem value="subsection" label="Subsection text values">

   <b>Sales</b>

   | Default value                                                                            | `data-textkey` value                           |
   |------------------------------------------------------------------------------------------|----------------------------------------------|
   | Accounts                                                                                 | `configure-content-sales-accounts-title`       |
   | Configure accounts mapping from {commerce platform name} to {accounting platform name}.  | `configure-content-sales-accounts-description` |
   | Tax rates                                                                                | `configure-content-sales-taxRates-title`       |
   | Configure tax rates mapping from {commerce platform name} to {accounting platform name}. | `configure-content-sales-taxRates-description` |
   | Other                                                                                    | `configure-content-sales-other-title`          |
   | Other title description: no value by default.                                            | `configure-content-sales-other-description`    |

   <b>Fees</b>

   | Default value                                                                           | `data-textkey` value                          |
   |-----------------------------------------------------------------------------------------|---------------------------------------------|
   | Accounts                                                                                | `configure-content-fees-accounts-title`       |
   | Configure accounts mapping from {commerce platform name} to {accounting platform name}. | `configure-content-fees-accounts-description` |

   </TabItem>

   <TabItem value="labels" label="Dropdown labels">

   <b>Sales (stage 3)</b>

   | Default value                                                                            | `data-textkey` value                           |
   |------------------------------------------------------------------------------------------|----------------------------------------------|
   | Accounts                                                                                 | `configure-content-sales-accounts-title`       |
   | Configure accounts mapping from {commerce platform name} to {accounting platform name}.  | `configure-content-sales-accounts-description` |
   | Tax rates                                                                                | `configure-content-sales-taxRates-title`       |
   | Configure tax rates mapping from {commerce platform name} to {accounting platform name}. | `configure-content-sales-taxRates-description` |
   | Other                                                                                    | `configure-content-sales-other-title`          |
   | Other title description: no value by default.                                            | `configure-content-sales-other-description`    |

   <b>Fees (stage 4)</b>

   | Default value                                                                           | `data-textkey` value                          |
   |-----------------------------------------------------------------------------------------|---------------------------------------------|
   | Accounts                                                                                | `configure-content-fees-accounts-title`       |
   | Configure accounts mapping from {commerce platform name} to {accounting platform name}. | `configure-content-fees-accounts-description` |

   <b>Payments (stage 5)</b>

   | Default value   | `data-textkey` value                                   |
   |-----------------|------------------------------------------------------|
   | Sales           | `configure-content-sales-accounts-entries-sales`       |
   | Refunds         | `configure-content-sales-accounts-entries-refund`      |
   | Gratuity        | `configure-content-sales-accounts-entries-gratuity`    |
   | Prepaid         | `configure-content-sales-accounts-entries-prepaid`     |
   | Other sales     | `configure-content-sales-accounts-entries-sales-other` |
   | 0% tax rate     | `configure-content-sales-accounts-taxRates-entries-0`  |
   | 5% tax rate     | `configure-content-sales-accounts-taxRates-entries-10` |
   | 10% tax rate    | `configure-content-sales-accounts-taxRates-entries-15` |
   | 20% tax rate    | `configure-content-sales-accounts-taxRates-entries-20` |
   | Invoice status  | `configure-content-sales-other-entries-invoiceStatus`  |
   | Grouping period | `configure-content-sales-other-entries-groupingPeriod` |

   </TabItem>

</Tabs>

#### Customizing dropdowns 


When surfacing the Sales, Fees, and Payments synchronization configuration to your merchant (stages 3, 4, and 5), it is likely that not all dropdown options will be applicable to your product. 

All dropdown list options are shown to your merchants by default, but you can choose to only display those relevant to you.

You can get a full list of dropdown items by calling the [List visible accounts](/sync-for-commerce-api#/operations/get-visible-accounts) endpoint:

```http
GET clients/{clientId}/config/ui/accounts/platform/{platformKey}
```

This will return all dropdown items, identified by their `account-key`.

```json
{
    "visibleAccounts": [
         "sales-accounts-sales",
         "sales-accounts-refund",
         ... // etc.
    ]
}
```

You can update the list of dropdown items displaued to your merchant by calling the [Update visible accounts](/sync-for-commerce-api#/operations/update-visible-accounts-sync-flow) endpoint:

```http
POST sync/commerce/config/ui/accounts/platform/{commerceKey}
```

```json title="Example request body for managing dropdown item visibility" 
//To update the visible dropdown items to the ones provided in the request body:
{
    "visibleAccounts": [
         "account-key-1",
         "account-key-2"
    ]
}

//To revert to the default settings and show all dropdown items:
{}

//To show only the dropdown items that are required:
{
  "visibleAccounts": []
}
```

##### Summary of dropdown items available for customization

<Tabs>
   <TabItem value="stage3" label="Stage 3: Sales">  

   | Display name (unless customized) | `account-key`                |
   |----------------------------------|----------------------------|
   | Sales*                           | `sales-accounts-sales`       |
   | Refund*                          | `sales-accounts-refund`      |
   | Gratuity                         | `sales-accounts-gratuity`    |
   | Prepaid                          | `sales-accounts-prepaid`     |
   | 0% tax rate*                     | `sales-taxRates-0`           |
   | 5% tax rate*                     | `sales-taxRates-5`           |
   | 10% tax rate*                    | `sales-taxRates-10`          |
   | 20% tax rate*                    | `sales-taxRates-20`          |
   | Invoice status*                  | `sales-other-invoiceStatus`  |
   | Grouping period*                 | `sales-other-groupingPeriod` |  

   `account-keys` marked with an '*' must be shown to users.
   </TabItem>

   <TabItem value="stage4" label="Stage 4: Fees">  

   | Display name (unless customized) | `account-key`                   |
   |----------------------------------|--------------------------------|
   | Payment fee                      | `fees-accounts-paymentFee`       |
   | Payment fee refund               | `fees-accounts-paymentFeeRefund` |
   | Loan                             | `fees-accounts-loan`             |
   | Loan payment                     | `fees-accounts-loanPayment`      |
   | Loan fee                         | `fees-accounts-loanFee`          |
   | Cashback                         | `fees-accounts-cashback`         |
   </TabItem>

   <TabItem value="stage5" label="Stage 5: Payments">  

   | Display name (unless customized) | `account-key`                     |
   |----------------------------------|----------------------------------|
   | Card*                            | `payments-accounts-card`           |
   | Cash                             | `payments-accounts-cash`           |
   | Invoice                          | `payments-accounts-invoice`        |
   | Online card                      | `payments-accounts-onlineCard`     |
   | Payout                           | `payments-accounts-payout`         |
   | Custom                           | `payments-accounts-custom`         |
   | Store credit                     | `payments-accounts-storeCredit`    |
   | Paypal                           | `payments-accounts-paypal`         |
   | Paypal QR                        | `payments-accounts-paypalQr`       |
   | Mobile                           | `payments-accounts-mobile`         |
   | Vipps                            | `payments-accounts-vipps`          |
   | Swish                            | `payments-accounts-swish`          |
   | Prepaid payment                  | `payments-accounts-prepaidPayment` |
   | Manual                           | `payments-accounts-manual`         |  

   `account-keys` marked with an '*' must be shown to users.
   </TabItem>

</Tabs>

---

## Read next

- [Data synchronization](/commerce/data-synchronization)