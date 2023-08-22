---
title: "Merchant configuration"
description: "DESCRIPTION PLEASE"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Enable merchants to connect their systems and specify how they want their sales data to be synchronized into their Accounting package.

The Sync Configuration UI handles:

- Authenticating users, to gain authorization to access the merchant’s Commerce platform and Accounting Package.

- Recording merchant sales data synchronization preferences

The Sync Configuration UI can be customized to integrate seamlessly into your software.

## Merchant configuration
Within the Sync Configuration UI, once they have authorized access to their systems, a merchant can:

- Decide whether to handle sales as Invoices or Journal Entries within their Accounting package
- Scheduled the start date and time from which sales data should be synchronise
- Configure how Sales should be accounted for, including
    - Aggregation of sales by product category
    - Tracking of sales by location
    - Handling of gift cards, gratuities and refunds
    - Tax totals 
- Configure how Payments should be accounted for (for each type of Payment you support/your customer uses)
- Configure how payment fees should be accounted for

For each of the last 3 configuration steps above (configuring how to account for Sales, Payments and Fees should be accounted for), Codat retrieves relevant data from the connected Commerce platform and Accounting package, and the UI requires the user to ‘map’ different types of sales/payment/fees to the relevant account in their Accounting package (for example, sales of Food may be mapped to the ‘Food income' account, and payment fees may be mapped to the ‘Payment costs’ account).

The Sync Configuration UI allows your customer to create a new account in their Accounting package where necessary.

:::tip
You can implement your own UI to capture a merchants sync configuration using our API. Consult your Solutions Engineer for support in doing this. 
:::

## Customize the Sync Configuration UI

Customization options include:

- Branding, including your company name, logo, icon and brand colours
- Text content of the Sync Configuration UI

:::tip
This section describes most commonly implemented Sync Configuration UI customization. Further customization is possible; please consult your Solutions Engineer for more details. 
:::

### Branding customization
You can configure your branding options in the [Branding settings](/auth-flow/customize/branding) section of the Codat Portal.

### Text content customization
Updating the text fields helps ensure that your users clearly understand what is required of them to correctly configure their sales data synchronization, and how data will be synchronized.

#### UI element customization
The Sync Configuration UI is organised in 6 stages:

| Stage                                     | Action required from user                              |
|-------------------------------------------|--------------------------------------------------------|
| 1. Connection to Commerce system          | Authenticate with Commerce platform                    |
| 2. Connection to Accounting System        | Authenticate with Accounting package                   |
| 3. Sales synchronization configuration    | Configure how sales should be accounted for            |
| 4. Fees synchronization configuration     | Configure how fees should be accounted for             |
| 5. Payments synchronization configuration | Configure how payments should be accounted for         |
| 6. Sync schedule configuration            | Set start date and time for sales data synchronization |

The following elements of the UI are customizable:

- Main title
- Checkbox options
- Previous and Next buttons on each stage
- Stage title, description and required field indicator description
- Sub-section titles and descriptions within each stage
- Dropdown labels for Sales, Fees and Payments configuration stages (3, 4 & 5)

Each customizable element is identified by its data-textkey; you can get a full list of customizable elements by calling the following API:

`GET sync/commerce/config/ui/text`

This will return all customizable UI elements, with the current text configured for each.
```
{
  "configure-setupSidebar-checkboxes-sales": "Set up sales",
  "configure-setupSidebar-checkboxes-fees": "Set up fees",
  "configure-setupSidebar-checkboxes-payments": "Set up payments"
  //etc
}
```
You can update text values by calling the following API, and providing desired text strings in the request body for each `data-textkey`:

`PATCH sync/commerce/config/ui/text`

Example request body:

```
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
##### Summary of data-textkeys and default values 

<Tabs>
   <TabItem value="main" label="Main title">  

    | Default value                  | `data-textkey` value           |
    |--------------------------------|------------------------------|
    | Set up Sync to {platform name} | `configure-setupSidebar-title` |

   </TabItem>

   <TabItem value="checkbox" label="Checkbox options">

    | Default value                         | `data-textkey` value                                    |
    |---------------------------------------|-------------------------------------------------------|
    | Connect to {Commerce platform name}   | `configure-setupSidebar-checkboxes-connectToCommerce`   |
    | Connect to {Accounting platform name} | `configure-setupSidebar-checkboxes-connectToAccounting` |
    | Set up sales                          | `configure-setupSidebar-checkboxes-sales`               |
    | Set up fees                           | `configure-setupSidebar-checkboxes-fees`                |
    | Set up payments                       | `configure-setupSidebar-checkboxes-payments`            |
    | Set up sync schedule                  | `configure-setupSidebar=checkboxes-syncSchedule`        |

   </TabItem>

   <TabItem value="buttons" label="Previous and Next buttons">

    | Default value | `data-textkey` value            |
    |---------------|-------------------------------|
    | Previous      | `configure-misc-previousButton` |
    | Next          | `configure-misc-nextButton`     |

   </TabItem>

   <TabItem value="stage" label="Stage title, description and required field indicator description">  

    <b>Title and description</b>

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

   <TabItem value="subsection" label="Sub-section titles and description">

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

In stages 3, 4 & 5 (Sales, Fees and Payments synchronization configuration), it is likely that not all drop downs will be relevant for you, so you can choose to show only dropdowns that are applicable to your product. 

:::tip
All dropdowns are shown by default
:::

Each dropdown is identified by an account-key; you can get a full list of dropdowns by calling

`GET clients/{clientId}/config/ui/accounts/platform/{commerceKey}`

This will return all dropdowns, identified by their `account-key`

```
{
    "visibleAccounts": [
         "sales-accounts-sales",
         "sales-accounts-refund"
         //etc
    ]
}
```

You can update the list of dropdowns to show, but calling the following API:

`POST sync/commerce/config/ui/accounts/platform/{commerceKey}`

Example request body:

```
//To update the visible dropdowns to the ones provided in the request body:
{
    "visibleAccounts": [
         "account-key-1",
         "account-key-2"
    ]
}

//To revert to the default settings and show all dropdowns:
{}

//To show only the dropdowns that are required:
{
  "visibleAccounts": []
}
```

##### Summary of `account-keys` available

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

    `account-keys` marked with an '*'must be shown to users.
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
    | Display name (unless customized) | `account-key `                     |
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

    `account-keys` marked with an '*'must be shown to users.
   </TabItem>

</Tabs>

---

## Read next