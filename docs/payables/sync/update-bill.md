---
title: Update bills
description: "Update existing bills using Codat's Bill Pay solution"
sidebar_label: Update a bill
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

:::tip Invoices or bills?

We distinguish between invoices where the company _owes_ money and those where the company _is owed_ money. If the company receives an invoice and owes money as a result, we call this a **bill**.
:::

## Update a bill

:::info Software coverage

This action is currently only supported for FreeAgent, Oracle NetSuite, QuickBooks Online, Sage Intacct, Xero, and Zoho Books.

:::

In some cases, your SMB customer may want to update their existing bill: for example, to change a tax rate, change a nominal code for a line item, or associate it to a different supplier.

Use our [Update bill](/sync-for-payables-v2-api#/operations/update-bill) endpoint to perform this operation. The following rules apply:

- You can only update the bills in `Open` status, and updates to bills in any other states will be rejected.
- During the update, all existing bill line items will removed and replaced with new line items.
- You can change the following values:
  - `reference`
  - `supplierRef.id`
  - `issueDate`
  - `dueDate`
  - `currency`
  - `currencyRate`
  - `lineItems[]`

For integration-specific rules and errors, review the [Software requirements](/payables/sync/update-bill#software-requirements) section.

---

### Example payloads

<Tabs groupId="software">

<TabItem value="gen" label="Request structure">

```json
PUT /companies/{companyId}/connections/{dataConnectionId}/payables/bills/{billId}

{
  "reference": "INV-001",
  "supplierRef": { "id": "supplier-id" },
  "issueDate": "2026-01-28",
  "dueDate": "2026-02-28",
  "currency": "GBP",
  "currencyRate": 1.0,
  "status": "Open",
  "lineItems": [
    {
      "description": "Service fee",
      "unitAmount": 100.00,
      "quantity": 1,
      "accountRef": { "id": "account-id" },
      "taxRateRef": { "id": "tax-rate-id" },
      "taxAmount": 20.00,
      "trackingRefs": [{ "id": "tracking-id" }]
    }
  ]
}
```

</TabItem>

<TabItem value="fa" label="FreeAgent example">

```json
{
  "description": "Consulting",
  "unitAmount": 500,
  "quantity": 2,
  "accountRef": { "id": "<nominal-code>" },
  "taxAmount": 200,
  "trackingRefs": [{ "id": "<project-id>", "isBillable": true }]
}
```

</TabItem>

<TabItem value="qbo" label="QBO example">

```json
{
  "description": "Consulting",
  "unitAmount": 500,
  "quantity": 2,
  "accountRef": { "id": "<account-id>" },
  "taxRateRef": { "id": "<tax-rate-id>" }
}
```

</TabItem>

<TabItem value="netsuite" label="NetSuite example">

```json
{
  "description": "Consulting",
  "unitAmount": 500,
  "quantity": 2,
  "accountRef": { "id": "<account-internal-id>" },
  "taxRateRef": { "id": "<tax-code-internal-id>" },
  "trackingRefs": [
    {
      "id": "department-<department-internal-id>",
      "dataType": "trackingCategories"
    },
    {
      "id": "location-<location-internal-id>",
      "dataType": "trackingCategories"
    },
    {
      "id": "<customer-internal-id>",
      "dataType": "customers",
      "isBillable": true
    }
  ]
}
```

</TabItem>

<TabItem value="intacct" label="Sage Intacct example">

```json
{
  "description": "Consulting",
  "unitAmount": 500,
  "quantity": 2,
  "accountRef": { "id": "<account-record-number>" },
  "taxRateRef": { "id": "<tax-detail-id>" },
  "taxAmount": 200
}
```

</TabItem>

<TabItem value="xero" label="Xero example">

```json
{
  "description": "Consulting",
  "unitAmount": 500,
  "quantity": 2,
  "accountRef": { "id": "<account-guid>" },
  "taxRateRef": { "id": "<tax-rate-code>" },
  "trackingRefs": [{ "id": "<tracking-option-guid>" }]
}
```

</TabItem>

<TabItem value="zoho" label="Zoho Books example">

```json
{
  "description": "Consulting",
  "unitAmount": 500,
  "quantity": 2,
  "accountRef": { "id": "<account-id>" },
  "taxRateRef": { "id": "<tax-rate-id>" },
  "taxAmount": 200,
  "trackingRefs": [
    { "id": "<tag-id>-<tag-option-id>", "dataType": "trackingCategories" },
    { "id": "<customer-id>", "dataType": "customers", "isBillable": true }
  ]
}
```

</TabItem>

</Tabs>

### Software requirements

We have summarized the key differences between the integrations that support updates to bills below:

| Feature                  | FreeAgent            | NetSuite                          | QBO                 | Sage Intacct                      | Xero                | Zoho Books                           |
| ------------------------ | -------------------- | --------------------------------- | ------------------- | --------------------------------- | ------------------- | ------------------------------------ |
| **Reference max length** | 255 characters       | 45 characters                     | 21 characters       | 100 characters                    | 255 characters      | 50 characters                        |
| **`TaxRateRef`**         | Must be `null`       | Required with `taxAmount`         | Required            | Required with `taxAmount`         | Required            | Required with a non-zero `taxAmount` |
| **Tax handling**         | Use `taxAmount` only | Use `taxRateRef.id` + `taxAmount` | Use `taxRateRef.id` | Use `taxRateRef.id` + `taxAmount` | Use `taxRateRef.id` | Use `taxRateRef.id` + `taxAmount`    |
| **`AccountRef` format**  | Nominal code         | Internal ID                       | Numeric string      | Account record number             | GUID                | Numeric ID                           |
| **Max line items**       | 40                   | No limit                          | No limit            | No limit                          | No limit            | No limit                             |

### Validation errors

You may encounter a validation error when sending a request to update a bill. In the sections below, we`ve included general and software-specific errors to help resolve these.

#### General validation errors

| Validation                  | Error message                                            |
| --------------------------- | -------------------------------------------------------- |
| Missing `supplierRef`       | `Supplier Ref` must not be empty.                        |
| Missing `supplierRef.id`    | `Supplier Ref Id` must not be empty.                     |
| Missing `issueDate`         | `Issue Date` must not be empty.                          |
| Missing `dueDate`           | `Due Date` must not be empty.                            |
| Missing currency            | `Currency` must not be empty.                            |
| Invalid currency            | `Currency Length` must be equal to `3`.                  |
| Currency rate `<=0`         | `Currency Rate` must be greater than `0`.                |
| Missing status              | `Status` must not be empty.                              |
| Invalid status              | `Status` must be equal to `Open`.                        |
| Missing or empty line items | `Line Items` must not be empty.                          |
| Negative line items total   | Sum of `LineItems` must be greater than or equal to `0`. |
| Reference too long          | `Reference Length` must be less than or equal to `255`.  |
| Bill not found              | 404 Not Found                                            |

#### Software-specific errors

<Tabs groupId="software">

<TabItem value="fa" label="FreeAgent">

| Issue                | Error message                                 |
| -------------------- | --------------------------------------------- |
| Invalid account code | `Account Ref` was not found in FreeAgent.     |
| Invalid supplier ID  | `Supplier Ref Id` was not found in FreeAgent. |

</TabItem>

<TabItem value="netsuite" label="NetSuite">

| Issue                           | Error message                             |
| ------------------------------- | ----------------------------------------- |
| Invalid supplier ID             | `Supplier Ref` was not found in NetSuite. |
| Invalid account ID              | `Account Ref` was not found in NetSuite.  |
| Invalid tax rate ID             | `Tax Rate Ref` was not found in NetSuite. |
| Changed or unsupported currency | `Currency` is not supported for supplier. |

</TabItem>

<TabItem value="intacct" label="Sage Intacct">

| Issue                     | Error message                                                           |
| ------------------------- | ----------------------------------------------------------------------- |
| Bill fully or partly paid | This bill has been paid or partially paid and can no longer be updated. |
| Invalid supplier ID       | The Supplier with Id `<id>` was not found.                              |

</TabItem>

<TabItem value="qbo" label="QuickBooks Online">

| Issue                                  | Error message                                                              |
| -------------------------------------- | -------------------------------------------------------------------------- |
| Bill currency doesn`t match supplier   | Ensure that the currency of the bill matches the currency of the supplier. |
| Supplier doesn`t support bill currency | The chosen `supplierId` doesn`t handle the bills currency.                 |

</TabItem>

<TabItem value="xero" label="Xero">

| Issue                | Error message                           |
| -------------------- | --------------------------------------- |
| Invalid account GUID | `Account Ref` was not found in Xero.    |
| Invalid supplier ID  | `SupplierRef Id` was not found in Xero. |
| Currency not enabled | No currency exists for code `currency`. |

</TabItem>

<TabItem value="zoho" label="Zoho Books">

| Issue                      | Error message                                     |
| -------------------------- | ------------------------------------------------- |
| Duplicate reference        | Reference has already been used for this supplier |
| Invalid supplier ID        | `SupplierRef Id` was not found in ZohoBooks.      |
| Negative bill total        | The total amount due cannot be negative.          |
| Due date before issue date | `dueDate` must be after `issueDate`.              |

</TabItem>

</Tabs>

---

## Read next

- Enable your customers to [pay single bills](/payables/sync/pay-bill) to complete the Bill Pay process.
