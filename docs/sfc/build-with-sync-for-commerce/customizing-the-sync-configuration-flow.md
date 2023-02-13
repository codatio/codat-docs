---
title: "Customizing the Sync configuration flow"
description: Amend the adjustable elements of the Sync flow
createdAt: "2022-11-16T20:24:20.979Z"
updatedAt: "2023-01-16T17:31:55.362Z"
---

:::caution Customization vs. features

This section includes instructions on how to update the text values in the Sync Flow and change visibility of feature categories (accounts).

If you're looking to disable a feature (e.g., Fees), contact your Account Manager.
:::

The Sync configuration flow is a white-labelled solution that can be tailored to fit the needs of your clients.

To create a branded experience, you can:

- Set up your company name, logo, and icon via the [branding settings](/set-up-link) in the Portal.
- Update the text fields of the flow  
  Updating the text fields helps ensure that your users clearly understand what they are sharing via the Sync for Commerce flow and which accounts they should choose to ensure it works correctly.

### Updating the text

You can customize every bit of text in the Sync configuration flow.

1. [Main title](/customizing-the-sync-configuration-flow#main-title)

<img
  src="/img/old/1e4761e-Main_title.png"
  alt="Main title section of the Sync configuration flow"
/>

2. [Checkbox captions](/customizing-the-sync-configuration-flow#checkbox-captions)

<img
  src="/img/old/bd64beb-Checkbox_items.png"
  alt="Checkbox section section of the Sync configuration flow"
/>

3. [Text on the **Previous** and **Next** buttons](/customizing-the-sync-configuration-flow#buttons)

<img
  src="/img/old/e41eb47-Buttons.png"
  alt="Move buttons section of the Sync configuration flow"
/>

4. Feature title, feature description, and required field indicator description ([Sales](/customizing-the-sync-configuration-flow#sales-title-and-description), [Fees](/customizing-the-sync-configuration-flow#fees-title-and-description), [Payments](/customizing-the-sync-configuration-flow#payments-title-and-description))

<img
  src="/img/old/9c0450e-Feature_title.png"
  alt="Feature text section of the Sync configuration flow"
/>

5. Feature categories title, feature categories title description, and feature categories ([Sales](/customizing-the-sync-configuration-flow#sales-feature-categories), [Fees](/customizing-the-sync-configuration-flow#fees-feature-categories), [Payments](/customizing-the-sync-configuration-flow#payments-feature-categories))

<img
  src="/img/old/858fd2e-Feature_categories.png"
  alt="Feature categories text section of the Sync configuration flow"
/>

Keep in mind that this update will **only** affect the UI.

To get a complete list of all the customizable text fields and their values perform the following request:

```http
GET sync/commerce/config/ui/text
```

To update, remove or reset a text value, use the following request:

```http
PATCH sync/commerce/config/ui/text
```

Request body:

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

In the request above, the `data-textkey` is the key of the field that you want to configure.

You can find the `data-textkey` values in the tables below.

:::caution Update the text fields consistently

We recommend grouping your updates to ensure that related values are updated consistently. A feature name (e.g., Sales) appears as a check box item in the left pane (Set up sales) and as the main title on the right side of the window (Sales), so it is important to update both `configure-setupSidebar-checkboxes-sales` and `configure-content-sales-title`.
:::

#### Default text and text keys

##### Main title

| Default value                  | `data-textkey` value         |
| :----------------------------- | :--------------------------- |
| Set up Sync to {platform name} | configure-setupSidebar-title |

##### Checkbox captions

| Default value                         | `data-textkey` value                                  |
| :------------------------------------ | :---------------------------------------------------- |
| Connect to {Commerce platform name}   | configure-setupSidebar-checkboxes-connectToCommerce   |
| Connect to {Accounting platform name} | configure-setupSidebar-checkboxes-connectToAccounting |
| Set up sales                          | configure-setupSidebar-checkboxes-sales               |
| Set up fees                           | configure-setupSidebar-checkboxes-fees                |
| Set up payments                       | configure-setupSidebar-checkboxes-payments            |
| Set up sync schedule                  | configure-setupSidebar=checkboxes-syncSchedule        |

##### Buttons

| Default value | `data-textkey` value          |
| :------------ | :---------------------------- |
| Previous      | configure-misc-previousButton |
| Next          | configure-misc-nextButton     |

##### Required field indicator description

| Default value              | `data-textkey` value         |
| :------------------------- | :--------------------------- |
| Indicates a required field | configure-required-indicator |

##### Sales title and description

| Default value | data-textkey value |
|---|---|
| Sales | configure-content-sales-title |
| Sales title description: no value by default. | configure-content-sales-description |

##### Sales feature categories title and description

| Default value | data-textkey value |
|---|---|
| Accounts | configure-content-sales-accounts-title |
| Configure accounts mapping from {commerce platform name} to {accounting platform name}. | configure-content-sales-accounts-description |
| Tax rates | configure-content-sales-taxRates-title |
| Configure tax rates mapping from {commerce platform name} to {accounting platform name}. | configure-content-sales-taxRates-description |
| Other | configure-content-sales-other-title |
| Other title description: no value by default. | configure-content-sales-other-description |

##### Sales feature categories

| Default value   | `data-textkey` value                                 |
| :-------------- | :--------------------------------------------------- |
| Sales           | configure-content-sales-accounts-entries-sales       |
| Refunds         | configure-content-sales-accounts-entries-refund      |
| Gratuity        | configure-content-sales-accounts-entries-gratuity    |
| Prepaid         | configure-content-sales-accounts-entries-prepaid     |
| Other sales     | configure-content-sales-accounts-entries-sales-other |
| 0% tax rate     | configure-content-sales-accounts-taxRates-entries-0  |
| 5% tax rate     | configure-content-sales-accounts-taxRates-entries-10 |
| 10% tax rate    | configure-content-sales-accounts-taxRates-entries-15 |
| 20% tax rate    | configure-content-sales-accounts-taxRates-entries-20 |
| Invoice status  | configure-content-sales-other-entries-invoiceStatus  |
| Grouping period | configure-content-sales-other-entries-groupingPeriod |

##### Fees title and description

| Default value                                | data-textkey value                 |
|----------------------------------------------|------------------------------------|
| Fees                                         | configure-content-fees-title       |
| Fees title description: no value by default. | configure-content-fees-description |

##### Fees feature categories title and description

| Default value                                                                           | data-textkey value                          |
|-----------------------------------------------------------------------------------------|---------------------------------------------|
| Accounts                                                                                | configure-content-fees-accounts-title       |
| Configure accounts mapping from {commerce platform name} to {accounting platform name}. | configure-content-fees-accounts-description |

##### Fees feature categories

| Default value      | `data-textkey` value                                     |
| :----------------- | :------------------------------------------------------- |
| Payment fee        | configure-content-fees-accounts-entries-paymentFee       |
| Payment fee refund | configure-content-fees-accounts-entries-paymentFeeRefund |
| Loan               | configure-content-fees-accounts-entries-loan             |
| Loan payment       | configure-content-fees-accounts-entries-loanPayment      |
| Loan fee           | configure-content-fees-accounts-entries-loanFee          |
| Cashback           | configure-content-fees-accounts-entries-cashback         |

##### Payments title and description

| Default value                                    | data-textkey value                     |
|--------------------------------------------------|----------------------------------------|
| Payments                                         | configure-content-payments-title       |
| Payments title description: no value by default. | configure-content-payments-description |

##### Payments feature categories

| Default value  | `data-textkey` value                                       |
| :------------- | :--------------------------------------------------------- |
| Card           | configure-content-payments-accounts-entries-card           |
| Cash           | configure-content-payments-accounts-entries-cash           |
| Invoice        | configure-content-payments-accounts-entries-invoice        |
| Online card    | configure-content-payments-accounts-entries-onlineCard     |
| Payout         | configure-content-payments-accounts-entries-payout         |
| Custom         | configure-content-payments-accounts-entries-custom         |
| Store credit   | configure-content-payments-accounts-entries-storeCredit    |
| Paypal         | configure-content-payments-accounts-entries-paypal         |
| Paypal qr      | configure-content-payments-accounts-entries-paypalQr       |
| Mobile         | configure-content-payments-accounts-entries-mobile         |
| Vipps          | configure-content-payments-accounts-entries-vipps          |
| Swish          | configure-content-payments-accounts-entries-swish          |
| Prepaid pyment | configure-content-payments-accounts-entries-prepaidPayment |
| Manual         | configure-content-payments-accounts-entries-manual         |

### How to change the visibility of feature categories (accounts)

To update the visibility of feature categories for a commerce platform, perform the following request:

```json
POST sync/commerce/config/ui/accounts/platform/{commerceKey}

//Request body:
//To update the visible feature categories to the ones provided in the request body:
{
    "visibleAccounts": [
         "account-key-1",
      	 "account-key-2"
    ]
}

//To revert to the default settings and show all feature categories:
{}

//To show only the fields that are required:
{
  "visibleAccounts": []
}
```

In the request above, the `commerceKey` is the Codat platform key of the selected commerce platform. You can find a list of keys for the supported platforms in the [Accounting platform selection](/sync-platform-selection) section.  
To find the `account-key`, consult the tables below. Note that fields marked with an '\*' cannot be removed.

#### Sales feature categories

| Default value     | `account-key`              |
| :---------------- | :------------------------- |
| Sales\*           | sales-accounts-sales       |
| Refund\*          | sales-accounts-refund      |
| Gratuity          | sales-accounts-gratuity    |
| Prepaid           | sales-accounts-prepaid     |
| 0% tax rate\*     | sales-taxRates-0           |
| 5% tax rate\*     | sales-taxRates-5           |
| 10% tax rate\*    | sales-taxRates-10          |
| 20% tax rate\*    | sales-taxRates-20          |
| Invoice status\*  | sales-other-invoiceStatus  |
| Grouping period\* | sales-other-groupingPeriod |

#### Fees feature categories

| Default value      | `account-key`                  |
| :----------------- | :----------------------------- |
| Payment fee        | fees-accounts-paymentFee       |
| Payment fee refund | fees-accounts-paymentFeeRefund |
| Loan               | fees-accounts-loan             |
| Loan payment       | fees-accounts-loanPayment      |
| Loan fee           | fees-accounts-loanFee          |
| Cashback           | fees-accounts-cashback         |

#### Payments feature categories

| Default value   | `account-key`                    |
| :-------------- | :------------------------------- |
| Card\*          | payments-accounts-card           |
| Cash            | payments-accounts-cash           |
| Invoice         | payments-accounts-invoice        |
| Online card     | payments-accounts-onlineCard     |
| Payout          | payments-accounts-payout         |
| Custom          | payments-accounts-custom         |
| Store credit    | payments-accounts-storeCredit    |
| Paypal          | payments-accounts-paypal         |
| Paypal qr       | payments-accounts-paypalQr       |
| Mobile          | payments-accounts-mobile         |
| Vipps           | payments-accounts-vipps          |
| Swish           | payments-accounts-swish          |
| Prepaid payment | payments-accounts-prepaidPayment |
| Manual          | payments-accounts-manual         |
