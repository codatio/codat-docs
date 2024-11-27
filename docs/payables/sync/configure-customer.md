---
title: "Configure customer in Codat"
description: "Create a company and its connection that form the structure required to execute the bill pay process"
sidebar_label: Set up customer
displayed_sidebar: payables
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CustomerOverview from '../_customer-overview.md';
import CreateCompany from '../_create-company.md';
import CreateConnection from '../_create-connection.md';
import UnlinkConnection from '../_unlink-connection.md';

<CustomerOverview />

<CreateCompany endpointlink="/sync-for-payables-v2-api#/operations/create-company" />

<CreateConnection endpointlink="/sync-for-payables-v2-api#/operations/create-connection" />

#### Accounting platform keys

| Accounting software | platformKey |
| ---  | ---  |
| FreeAgent | `fbrh` |
| Oracle NetSuite | `akxx` |
| QuickBooks Online | `qhyg` |
| Xero | `gbol` |

<UnlinkConnection endpointlink="/sync-for-payables-v2-api#/operations/unlink-connection" />

:::tip Recap

You have created the structure of key objects required by Codat's Bill Pay product: a company and its connection to an accounting data source.

Next, you can choose to manage your customer's suppliers, bills or payment methods prior to paying the bills.

:::

---

## Read next

* [Manage your customer's suppliers](/payables/suppliers)
* [Manage your customer's bills](/payables/bills)
* [Manage your customer's payment methods](/payables/mapping)

