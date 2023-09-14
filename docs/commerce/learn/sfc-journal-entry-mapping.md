---
title: "Sales as journal entries"
description: "Review the journal entry mapping for sales data and its examples"
image: "/img/banners/social/commerce.png"
---

With Sync for Commerce, your merchant can choose to reflect their sales data from e-commerce and point-of-sale (POS) software: 

- as an aggregated daily **sales invoice**, or
- as an aggregated daily **journal entry**.

Codat recommends using **journal entries** to benefit from these advantages:

- **Ease of use**

  Single daily journal entries are easier to manage, adjust, and reconcile than, for example, invoices, payments, and credit notes. 

- **Controlled impact on the general ledger**

  A journal entry is the most granular way to impact a company's general ledger without being confined to specific account types. 

- **Tax data made simple**

  Journal entries simplify the recording of tax data because tax rates and their associated accounts do not need to be managed separately.

:::note Journal entry coverage

[View](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=journalEntries) the accounting platforms where we provide coverage for Journal entries.
:::

## Choosing a sync type

Your merchant can choose the sync type they prefer while performing their company's configuration for the first time in the Sync Flow. Note that the selection cannot be changed after the initial configuration is complete.

<img
  src="/img/sync-for-commerce/2023-01-24_16-34-28.png"
  alt="An image of the Sync Flow Choosing the sync type in the Sync Flow"
/>

## Example journal entries

:::note Mapping journal entries

You can map sales journal entries to any account types, including liability, unless it is explicitly prohibited by the target accounting platform.
:::

### Sales

The example journal entry covers cash sales and deductions, including orders paid off total of £1000, tax total of £200, and gratuities/tips of £50.

| Account             | Account type        | Debits | Credits |
| :------------------ | :------------------ | :----- | :------ |
| Cash                | Asset               | £1250  |         |
| Sales / Revenue     | Income              |        | £1000   |
| Gratuities          | Income or liability |        | £50     |
| VAT / Tax liability | Liability           |        | £200    |

The example journal entry covers accounts receivable sales, like sales via invoices or "buy now, pay later" sales. This includes order total of £5500, discounts of £500 from the order total, and tax total of £1000.

| Account             | Account type | Debits | Credits |
| :------------------ | :----------- | :----- | :------ |
| Accounts Receivable | Asset        | £6000  |         |
| Sales / Revenue     | Income       |        | £5000   |
| VAT / Tax liability | Liability    |        | £1000   |

### Refunds

The example journal entry covers a cash refund with sales tax. This includes refunded order total of £100 and tax total of £20.

| Account             | Account type | Debits | Credits |
| :------------------ | :----------- | :----- | :------ |
| Cash                | Asset        |        | £120    |
| Sales / Revenue     | Income       | £100   |         |
| VAT / Tax liability | Liability    | £20    |         |

The example journal entry covers a refund issued as a credit note. This includes refunded order total of £200 and tax total of £40.

| Account             | Account type | Debits | Credits |
| :------------------ | :----------- | :----- | :------ |
| Accounts Receivable | Asset        |        | £240    |
| Sales / Revenue     | Income       | £200   |         |
| VAT / Tax liability | Liability    | £40    |         |

### Daily aggregated sales journal entry

The example journal entry covers payment processing fees and payment fees refunds, including orders total of £1000, tax total of £200, gratuities/tips of £50, payment processing fee of £60, and payment processsing refund of £30.

| Account              | Account type        | Debits | Credits |
| :------------------- | :------------------ | :----- | :------ |
| Cash                 | Asset               | £1220  |         |
| Sales / Revenue      | Income              |        | £1000   |
| Gratuities           | Income or liability |        | £50     |
| VAT / Tax liability  | Liability           |        | £200    |
| Payment Fee Expenses | Expense             | £60    |         |
| Payment Fee Refunds  | Expense             |        | £30     |

## Tax categorization in daily journals

The tax categorization feature is available to every merchant using daily journals, as long as their commerce platform supports tax components. It is aimed at merchants operating in places where products incur multiple taxes remitted to different authorities.

With this feature, the merchant can map multiple tax rates from their commerce solution to relevant tax accounts in their accounting system. It adds an extra screen to the Sync Flow, where the mapping takes place. This creates separate journal lines for the daily journal entry.

<img
  src="/img/old/b85cf3a-2023-01-13_08-29-50.png"
  alt="Sync Flow user interface displaying the tax mapping step with three sales tax categories with different mappings"
/>
