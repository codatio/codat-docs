---
title: "Completed 2023-01-10: QuickBooks Online - change to invoice push validation"
date: "2022-08-26"
tags: ["Deprecation", "Completed"]
draft: false
authors: mcclowes
---

On January 10, 2023, we will be adding new validations when pushing invoices to QuickBooks Online.

<!--truncate-->

This means that when pushing an invoice:

The TotalAmount will need to equal the sum of line items, discounts, and tax.
The SubTotal will need to equal the sum of line items and discounts.
Action required
Please check that your code when pushing invoices complies with these rules. If not, you need to change the code to comply. The code must adhere to the following rules:

TotalAmount
- TotalAmount should be equal to the sum of line items minus the discount percentage plus tax.
- TotalAmount should be equal to the sum of line items minus the total discount plus tax.
- TotalAmount should be equal to the sum of line items minus the line discounts plus tax.

SubTotal
- SubTotal should be equal to the sum of line items minus the discount percentage.
- SubTotal should be equal to the sum of line items minus the total discount.
- SubTotal should be equal to the sum of line items minus the sum of line discounts.

#### Expected result if no action is taken

The push endpoint will return a validation error message and the push operation will fail.

You can get ahead of this change by enabling it now in the Portal.
