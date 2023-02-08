---
title: "FreeAgent integration reference"
description: "Things to know when synchronizing data with FreeAgent."
createdAt: "2022-04-19T10:19:35.783Z"
updatedAt: "2022-11-23T10:13:00.662Z"
---

Note the following information when building your application using Codat's FreeAgent integration.

## Direct incomes

Direct incomes are mapped from <a className="external" href="https://dev.freeagent.com/docs/bank_transaction_explanations" target="_blank">Bank Transaction Explanations</a> in FreeAgent. This object does not support multiple lines, so Direct incomes pulled from FreeAgent only include a single object in the `lineItems` array.

The `currencyRate` field is not populated when pulling Direct incomes in foreign currencies due to limitations of the provider's API.

These notes also apply when pulling Direct costs from FreeAgent.

## Transfers

Transfers are mapped from <a className="external" href="https://dev.freeagent.com/docs/bank_transactions" target="_blank">Bank transactions</a> in FreeAgent.

FreeAgent provides a unique transfer ID for each side of the transfer. Codat's data model requires a single unique ID to identify the transfer. In Codat, the transfer `id` identifies the _Transfer to Another Account_ side of the to/from Bank Transaction Explanation objects in FreeAgent. The transfer `id` is derived from the `url` property of the _Transfer to_ object.

FreeAgent does not support transferring funds between a bank account and a nominal account.

:::Caution Negative amounts in FreeAgent transfers
When pushing a transfer transaction via the FreeAgent API, you can enter `gross_value` as a negative value, in effect changing the direction of the transfer. Codat's data model does not support pushing negative to/from transfer amounts.

You can achieve the same result by swapping the `to` and `from` bank accounts when pushing the data from Codat.

When pulling and pushing Transfers from FreeAgent, the following fields are not available:

- `contactRef.id`
- `contactRef.name`
- `contactRef.datatype`
- `from.currency`
- `to.currency`

Therefore, when pushing Transfer currency fields to FreeAgent, Codat checks that the specified currency is the same as the associated bank account's currency.

Additionally, any values pushed in `description`and `trackingCategoryRefs` are ignored and auto-populated by FreeAgent.
