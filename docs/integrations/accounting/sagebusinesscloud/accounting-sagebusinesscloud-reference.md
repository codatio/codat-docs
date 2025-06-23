---
title: "Sage Accounting integration reference"
description: "Things to know when synchronizing data with Sage Accounting."
sidebar_label: Reference
---

Note the following information when building your application using Codat's Sage Accounting integration.

## Transfers

Transfers are mapped from <a className="external" href="https://ie-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=222001000100784" target="_blank">Bank Transfers</a> and <a  class="external" href="https://ie-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=222001000100784" target="_blank">Bank Deposits</a> in Sage Accounting.

When writing Transfers to Sage Accounting, the type of business object created depends on the bank accounts that are specified in the Transfer.

- If the `FROM` account in Sage Accounting is a _Cash account_ and the `TO` account is either a _Current account_ or _Savings account_, then a Bank Deposit object is created.
- In all other scenarios a Bank Transfer object is created.

When writing Transfers to Sage Accounting, the following fields are not populated in Bank Transfer objects:

- `Method`
- `Description`

The following types of Bank Transfer objects can be read from Sage Accounting, but not written:

- Bank Transfers between a base currency account and a foreign currency account.
- Bank Transfers where both accounts have the same foreign currency.

The following types of Transfer are not supported within Sage Accounting (and therefore can't be read or written):

- Transfers between two accounts of different foreign currencies.
- Transfers between a bank account and a nominal account.
