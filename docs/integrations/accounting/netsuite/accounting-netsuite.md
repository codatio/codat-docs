---
title: "Oracle NetSuite"
description: "Learn about our Oracle NetSuite integration."
---

You can synchronize accounting data with Oracle NetSuite using our Oracle NetSuite integration.

[Oracle NetSuite](https://www.netsuite.com/portal/products/erp/financial-management/finance-accounting.shtml) is an online service that enables companies to manage all key business processes in a single system.

## Data type coverage

View the coverage of our Oracle NetSuite integration in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-integration&integrationKey=akxx" target="_blank">Data coverage explorer</a>.

For more details about the supported data types and operations, see [Oracle NetSuite integration reference](/integrations/accounting/netsuite/oracle-netsuite-integration-reference).

## Set up the integration

See [Set up the Oracle NetSuite integration](/integrations/accounting/netsuite/accounting-netsuite-setup) to learn how to set up and enable the integration.

## Syncing very large data volumes

You may experience poor performance when synchronizing over a million records from Oracle NetSuite using the integration. Syncs of this size can take a very long time to complete (up to 60 hours, for instance) and are subject to errors and timeouts.

To improve the performance of large syncs, we recommend using the `syncFromUtc` setting to reduce the time window for which data is synced. For more information about this setting, see [Additional sync settings](https://codat.zendesk.com/hc/en-gb/articles/360018829477-Additional-sync-settings) in the Codat Knowledgebase.

To improve sync performance, apply a more recent `syncFromUtc` time, such as 1 year ago, to the following data types:

- Invoices
- JournalEntries
- Payments

You can also apply a `syncFromUtc` time to BillCreditNotes and CreditNotes, if you have a large amount of this data.

The `syncFromUtc` setting can only be applied through the Codat API and to a subset of data types.

:::caution Contact NetSuite before adjusting sync settings

If you are experiencing poor performance in Oracle NetSuite during day-to-day operations, we recommend contacting NetSuite Support before adjusting the sync settings.

:::
