---
title: "Oracle NetSuite FAQ"
description: "Frequently asked questions about our Oracle NetSuite integration."
sidebar_label: FAQs
---

## Does our NetSuite integration support Multi-Book Accounting

_Multi-Book Accounting_ is a NetSuite feature that allows users to post transactions to specific journals. Apart from Journal entries, our accounting data model is unable to represent this journal information for the data types supported by the NetSuite integration. All other transactional data is pulled to Codat if Multi-Book Accounting is enabled.

## Does our NetSuite integration support OneWorld?

Yes.

## What is NetSuite OneWorld?

NetSuite OneWorld supports global, multi-subsidiary organizations. Codat handles the synchronization of OneWorld licenses in the same manner as described above.

- NetSuite OneWorld supports global, multi-subsidiary organizations.
- OneWorld organizes both domestic and international subsidiaries into a single hierarchical structure.
- Each subsidiary is treated as a unique legal entity for taxation and regulation purposes.
- Each subsidiary has a specific nexus (tax jurisdiction) and a specific base currency. This base currency is the currency in which the subsidiary manages its financials. Subsidiary-specific data is available for reporting.

**Here's an example hierarchy in Netsuite:**

<img src="/img/old/4a3f5ef-image-20210611-134647.png" />

That same hierarchy would be 5 different companies on the Codat platform.
Company 1: Codat Limited
Company 2: Codat Europe
Company 3: Codat France
Company 4: Codat Germany
Company 5: Codat | London

## How are custom forms handled when pushing data to NetSuite?

NetSuite allows users to set custom forms for pages, including custom entry and custom transaction forms. This is an alternative to using the default standard forms.

If the target page has a custom form set, data is pushed using the standard form for the page. Any custom fields which have been added to the custom form are not pushed.

If the push operation fails, check the standard form for the page is active and is enabled for the required user role. Also check that the Codat bundle is updated to the latest version.

For more information, see <a className="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N2852749.html" target="_blank">Custom Forms</a> in the NetSuite documentation.

## How are subsidiaries handled in Codat?

Codat maintains a 1 to 1 relationship between an entity/subsidiary and a Codat company. The linking process will result in the data of each individual entity/subsidiary being synchronized to a separate and distinct Codat company.

In order for a client to get the full picture of a company that owns multiple legal entities, its customers will need to go through a separate linking process for each legal entity that exists in the accounting package.

:::caution Elimination subsidiaries

Elimination subsidiaries in Netsuite are used to record only journal entries and transactions between subsidiaries for consolidation purposes. This information is available on the non-elimination subsidiaries, so Codat won’t fetch elimination subsidiaries.
:::
