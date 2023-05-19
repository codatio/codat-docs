---
title: Bill Pay overview
sidebar_label: Overview
description: "Make it easier for SMBs to manage and pay suppliers from a single interface."
---


import { IntegrationsList } from "@components/global/Integrations";

import { billpayIntegrations } from "@components/global/Integrations/integrations";

![An image from the static](/img/use-cases/billpay/billPay.png)

# Overview

Bill pay integration make's it easier for SMBs to manage and pay their supplier invoices from a single interface with preferential payment methods and terms.

Many SMBs still rely on manual AP functions to run their business. One study shows that as many as 80% of all SMB invoices and 40% of all B2B payments are still settled via paper check. That’s led to a situation where a vast majority (80%) of finance leaders believe their company’s outdated AP process is holding them back and costing their business time and money

## Benefits

<ul className="card-container col-3">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Standardised API</h3>
    </div>
    <p>
      Faster, simpler and less expensive than building integrations in house. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Saves time</h3>
    </div>
    <p>
      Provides a core need for your small business customers, ultimately saving them time and effort when reconciling their accounts payable data with their accounting platform.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Increase Retention</h3>
    </div>
    <p>
      Attract and retain customers by providing them with the type of digital experience and connectivity they have come to expect as consumers
    </p>
  </li>
</ul>

## Features

![An image from the static](/img/use-cases/summary-pages/d0c6b0b7-automating-payables.png)


### [Connect to your SMB's accounting platform](/auth-flow/overview)

Codat handles authorization and linking to your SMB's accounting platform and takes into account intricate details such as rate limits.

### [Retrieve accounts payable invoices](bills)

A list of unpaid [bills](/accounting-api#/schemas/Bill) (accounts payable invoices) can be retrieved from the accounting platform, in the Accounting API a bill is an itemised record of goods purchased from or services provided by a supplier.
Alternatively, Bills can also be created within your application and then synchronised to the accounting platform.

### [Payment account mapping](mapping)

Once Authorised, you can use the bank accounts endpoint to retrieve a list of accounts which can be mapped enabling the user to dictate which account their payments should be reconciled to.

### [Payment reconciliation](payments)

Once the transaction is completed, a bill payment can then be pushed to the customers accounting platform and reconciled against the bill marking it as paid.


## Compatible integrations

<br />

<IntegrationsList integrations={billpayIntegrations} />

---

## Read next

- [Accounts Payable](/usecases/bill-pay/bills) - Retrieve and create bills using the Accounting API