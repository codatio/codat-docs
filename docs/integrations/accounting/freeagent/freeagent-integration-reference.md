---
title: "FreeAgent integration reference"
description: "Things to know when synchronizing data with FreeAgent."
createdAt: "2022-04-19T10:19:35.783Z"
updatedAt: "2022-11-23T10:13:00.662Z"
---

Note the following information when building your application using Codat's FreeAgent integration.

## Direct costs

Direct costs are mapped from [Bank Transaction Explanations](https://dev.freeagent.com/docs/bank_transaction_explanations) in FreeAgent. This object doesn't support multiple lines and therefore Direct costs pulled from FreeAgent only contain a single line in the `lineItems` array. You can also only push Direct costs that contain a single line, or an error is returned.

When pulling Direct costs in foreign currencies, the `currencyRate` field is not populated due to limitations of the provider's API.

When pushing Direct costs, the currency of the created object will be the same as that of the associated bank account. This is because FreeAgent doesn't allow users to post foreign currencies to bank accounts.

### Tax handling when pushing Direct costs

You should be aware of the following behavior when pushing Direct costs with tax:

- If `lineItems.taxAmount` is specified, and the account is taxable, the default tax rate for the account is ignored and overidden by this amount.
- If `lineItems.taxAmount` is not specified, the default tax rate for the account in FreeAgent is applied (this is set on account creation)
- To push a zero tax amount, set `lineItems.taxAmount` to `0`.

## Direct incomes

Direct incomes pulled from FreeAgent only contain a single line in the `lineItems` array.

The `currencyRate` field is not populated when pulling Direct incomes in foreign currencies due to limitations of the provider's API.

## Transfers

Transfers are mapped from [Bank transactions](https://dev.freeagent.com/docs/bank_transactions) in FreeAgent.

FreeAgent provides a unique transfer ID for each side of the transfer. Codat's data model requires a single unique ID to identify the transfer. In Codat, the transfer `id` identifies the _Transfer to Another Account_ side of the to/from Bank Transaction Explanation objects in FreeAgent. The transfer `id` is derived from the `url` property of the _Transfer to_ object.

FreeAgent does not support transferring funds between a bank account and a nominal account.

:::caution Negative amounts in FreeAgent transfers

When pushing a transfer transaction via the FreeAgent API, you can enter `gross_value` as a negative value, in effect changing the direction of the transfer. Codat's data model does not support pushing negative to/from transfer amounts.

You can achieve the same result by swapping the `to` and `from` bank accounts when pushing the data from Codat.

:::

When pulling and pushing Transfers from FreeAgent, the following fields are not available:

- `contactRef.id`
- `contactRef.name`
- `contactRef.datatype`
- `from.currency`
- `to.currency`

Therefore, when pushing Transfer currency fields to FreeAgent, Codat checks that the specified currency is the same as the associated bank account's currency.

Additionally, any values pushed in `description`and `trackingCategoryRefs` are ignored and auto-populated by FreeAgent.
