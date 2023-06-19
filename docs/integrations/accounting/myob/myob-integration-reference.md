---
title: "MYOB integration reference"
description: "Things to know when synchronizing data with MYOB AccountRight and Essentials."
sidebar_label: Reference
---

Note the following information when building your application using Codat's MYOB integration.

## Direct incomes

Direct incomes are mapped from <a className="external" href="https://developer.myob.com/api/myob-business-api/v2/banking/receive_money/" target="_blank">Receive money transactions</a> in MYOB.

When pulling Direct incomes from MYOB, the `sourceModifiedDate` field is not available.

Additionally, `trackingCategoryRefs` is not available in data pulled from MYOB Essentials.

Codat's data model does not support negative unit amounts in line items of Direct incomes. If negative line amounts are pulled from MYOB, the `lineItems.unitAmount` is recorded as positive and the `quantity` is set to `-1`.

## Direct costs

Direct costs are mapped from <a className="external" href="https://developer.myob.com/api/myob-business-api/v2/banking/spend_money/" target="_blank">Spend money transactions</a> in MYOB.

When pulling Direct costs from MYOB, the `sourceModifiedDate` field is not available.

Additionally, `trackingCategoryRefs` is not available in data pulled from MYOB Essentials.

Codat's data model does not support negative unit amounts in line items of Direct costs. If negative line amounts are pulled from MYOB, the `lineItems.unitAmount` is recorded as positive and the `quantity` is set to `-1`.

## Invoices

Codat does not currently support updating item based invoices.

## Multiple currencies

MYOB Essentials does not support multiple currencies and records all transactions in local currency (AUD or NZD).

MYOB AccountRight supports multiple currencies, but still operates with base currency of AUD or NZD.

## Issue date timestamps

MYOB does not supply time information when the `issueDate` field is pulled by Codat. As such, the date field value is always `yyyy-mm-ddT00:00:00`.
