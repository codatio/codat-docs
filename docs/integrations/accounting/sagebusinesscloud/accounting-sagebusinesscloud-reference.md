---
title: "Sage Business Cloud Accounting integration reference"
description: "Things to know when synchronizing data with Sage Business Cloud Accounting."
createdAt: "2022-07-27T14:58:23.404Z"
updatedAt: "2022-10-17T16:21:25.785Z"
---

Note the following information when building your application using Codat's Sage Business Cloud Accounting integration.

## Transfers

Transfers are mapped from <a className="external" href="https://help.accounting.sage.com/en-ie/accounting/banking/extra-transfer-funds-between-bank-accounts.html?tocpath=Banking%20and%20bank%20feeds%7CTransfers%7C_____1#Recordabanktransfer" target="_blank">Bank Transfers</a> and <a  class="external" href="https://help.accounting.sage.com/en-ie/accounting/banking/extra-transfer-funds-between-bank-accounts.html?tocpath=Banking%20and%20bank%20feeds%7CTransfers%7C_____1#Recordabankdeposit" target="_blank">Bank Deposits</a> in Sage BC.

When pushing Transfers to Sage BC, the type of business object created depends on the bank accounts that are specified in the Transfer.

- If the `FROM` account in Sage BC is a _Cash account_ and the `TO` account is either a _Current account_ or _Savings account_, then a Bank Deposit object is created.
- In all other scenarios a Bank Transfer object is created.

When pushing Transfers to Sage BC, the following fields are not populated in Bank Transfer objects:

- `Method`
- `Description`

The following types of Bank Transfer objects can be pulled from Sage BC, but not pushed:

- Bank Transfers between a base currency account and a foreign currency account.
- Bank Transfers where both accounts have the same foreign currency.

The following types of Transfer are not supported within Sage BC (and therefore can't be pulled or pushed):

- Transfers between two accounts of different foreign currencies.
- Transfers between a bank account and a nominal account.
