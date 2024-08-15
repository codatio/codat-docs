---
title: "Zoho Books integration reference"
description: "Things to know when synchronizing data with Zoho Books."
sidebar_label: Reference
---

Note the following information when building your application using Codat's Zoho Books integration.

## Bill payments

Bill Payments are mapped from Vendor Payments and Vendor Credits in Zoho Books.

When syncing Bill payments with Zoho Books:

- The `paymentMethodRef` field is not populated.
- Manual journal transactions are not supported. Zoho Books doesn't support modifying AR or AP using manual journals.
- Discount transactions are not supported.

  Zoho Books doesn't support processing discounts on Vendor Payments at the point of payment (for example, early settlement discounts). Instead, users add a Vendor Credit for the discounted amount to the bill payment.

## Tracking categories

Tracking categories are supported for the following data types:

- Invoices (read and write)
- Credit Notes (read)
- Bills (read and write)

Tracking categories are mapped from _Reporting Tags_ in Zoho Books. [Reporting Tags](https://www.zoho.com/uk/books/help/settings/reporting-tags.html) are created using a _Tag Name_ and one or more child _Tag Options_. The Tag Name and Tag Options are read to Codat as separate tracking categories. Tracking category IDs are assigned based on the values of the `tag_id` (for Tag Name) and `tag_option_id` (for Tag Options) fields.
