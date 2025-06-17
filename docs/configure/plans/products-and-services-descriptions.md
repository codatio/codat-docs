---
title: "Product and service descriptions"
description: "A breakdown of functionality and data type access by product."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Platform

Access to Codat platform for the given products required.

This includes:

- **Portal:** User interface for setup, configuration, and customization of a Codat solution, and viewing of Company data.
- **Link:** User interface and associated APIs allowing Company users to grant Codat access to their Accounting systems.
- **Common API:** Base set of APIs allowing Client programmatic creation of Companies, and other core functionalities.

---

## Implementation

Implementation period, covering Implementation Specialists and associated resources to ensure successful implementation and activation with Codat.

---

## Products

<Tabs>

<TabItem value="commerce" label="Sync for Commerce">

#### Features

- Commerce to accounting synchronization
- Client connector
- Config UI (Sync Flow)
- Config API

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/commerce/setup#available-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Commerce to Accounting synchronisation**  
Synchronisation of data from commerce data source(s) into accounting software(s).

**Client connector**  
Codat built and owned connector, which reads Company data from and/or writes Company data to the Client’s system, to enable Commerce to Accounting synchronization to function.

**Config UI (Sync Flow)**  
White labelled user interface enabling a Company to configure Commerce to Accounting synchronization.

**Config API**  
API endpoints allowing Codat Clients to configure Commerce Sync (typically via client-built Company interface).

<hr/>

This product will appear as **Sync for Commerce (v2)** on your order form.

</TabItem>

<TabItem value="expenses" label="Sync for Expenses">

#### Features

- Expense to accounting synchronisation
- Config API

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/expenses/overview#supported-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Expense to accounting synchronisation**  
Synchronisation of expense data provided by a Codat Client into accounting software(s).

**Config API**  
API endpoints allowing Codat Clients to configure Expense Sync (typically via client-built Company user interface).

<hr/>

This product will appear as **Sync for Expenses (v2)** on your order form.

</TabItem>

<TabItem value="payroll" label="Sync for Payroll">

#### Features

- Read accounting data
- Write accounting data

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/payroll/overview#compatible-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Read accounting data**  
Read data from connected Accounting software.

**Write accounting data**  
Read data from connected Accounting software.
 
[See the documentation for a list of supported data types](/payroll/data-types)

<hr/>

This product will appear as **Sync for Payroll** on your order form.

</TabItem>

<TabItem value="payables" label="Sync for Payables">

#### Features

- Read accounting data
- Write accounting data
- Update accounting data
- Delete accounting data

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/payables/overview#compatible-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Read accounting data**  
Get data from connected Accounting software.

**Write accounting data**  
Create data in connected Accounting software.

**Update accounting data**  
Update data in connected Accounting software.

**Delete accounting data**  
Delete data in connected Accounting software.

[See the documentation for a list of supported data types](/payables/data-types)

<hr/>

This product will appear as **Sync for Payables** on your order form.

</TabItem>

<TabItem value="bankfeeds" label="Bank Feeds API">

#### Features

- Write bank transactions
- Config UI
- Config API

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/bank-feeds/overview#supported-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Write bank transactions**  
Write Bank Transactions into connected accounting software as a bank statement

**Config UI**  
White labelled user interface enabling a Company to configure Bank Feeds (select accounting software accounts to which bank feeds should be written)

**Config API**  
API endpoints allowing clients to configure bank feeds (typically via client-built Company user interface)

<hr/>

This product will appear as **Bank feeds** on your order form.

</TabItem>

<TabItem value="lending" label="Lending API">

#### Features

- Read accounting data
- Read commerce data
- Read banking data
- Bank statements
- Sales
- Financial statements
- Liabilities
- Accounts receivable
- Accounts payable
- Accounting software writeback

<hr/>

#### Supported integrations

See our [Lending API documentation](https://docs.codat.io/lending/overview) for our supported integrations.

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

Open banking provider access is subject to separate access requirements.

<hr/>

#### Feature definitions

**Read accounting data**  
Read the following data from connected Accounting software: [Supported data types](https://docs.codat.io/lending/data-types#supported-data-types)

**Read commerce data**  
Read the following data from connected Commerce software: [Supported data types](https://docs.codat.io/lending/data-types#supported-data-types)

**Read banking data**  
Read the following data from connected Open Banking provider: [Supported data types](https://docs.codat.io/lending/data-types#supported-data-types)

**Bank statements**  
Review data from a linked company’s banking connections. Transactions are enriched with financial category and payment provider information. See [full details of this feature](https://docs.codat.io/lending/features/bank-statements-overview). 

**Sales**  
Offers data sourced from a linked company's commerce connections. Access valuable insights through aggregated metrics and a comprehensive breakdown of sales transactions from prominent eCommerce, PoS, and payment platforms.  See the [full details of this feature](https://docs.codat.io/lending/features/sales-overview).  

**Financial statements**  
Provides a comprehensive view of a borrower's financial data, including profit and loss, balance sheet, and operating cash flow statements. Includes features previously known as "Enhanced Financial Report" and "Enhanced Cashflow Report". See the [full details of this feature](https://docs.codat.io/lending/features/financial-statements-overview). 

**Liabilities**  
Our machine learning models automatically identify loans from connected sources and provide you with a clear overview of a borrower's outstanding loans and their repayment history. Includes features previously known as "Enhanced Liabilities Report". See the [full details of this feature](https://docs.codat.io/lending/features/liabilities-overview) . 

**Accounts receivable**  
Provides a breakdown of a borrower's debtors ledger sourced from their accounting software.  Includes features previously known as "Enhanced Invoices Report". See the [full details of this feature](https://docs.codat.io/lending/features/accounts-receivable-overview).  

**Accounts payable**  
Provides a breakdown of a borrower's creditors ledger sourced from their accounting software. See the [full details of this feature](https://docs.codat.io/lending/features/accounts-payable-overview).

**Accounting software writeback**  
Where mandated by the Accounting software, the ability to write back data pertaining to a loan or other credit facility that has been issued.

<hr/>

This product will appear as **Lending API** on your order form.

</TabItem>

</Tabs>


<br/>

[Product description referenced in your order form not listed above?](/configure/plans/additional-product-descriptions)

---

## Add-ons

<ul className="card-container">
  <li className="card">
    <h3>ERP integrations</h3>
    <p>Required for access to NetSuite, Sage Intacct or Microsoft Dynamics 365</p>
  </li>

   <li className="card">
    <h3>Desktop platforms</h3>
    <p>Required for access to QuickBooks Desktop and Sage 50 (UK & Ireland)</p>
  </li>

   <li className="card">
    <h3>Enterprise security</h3>
    <p>Security features relevant for larger enterprises:</p>
    <ul>
    	<li>Enterprise SSO</li>
		<li>Mutual TLS</li>
		<li>IP Filtering</li>
	</ul>
  </li>
</ul>


---

## Additional services

<ul className="card-container">
  <li className="card">
    <h3>Support</h3>
    <p>Basic, Standard, Advanced or Premium</p>
  </li>

   <li className="card">
    <h3>Professional Services</h3>
    <p>Statement of work based resourcing to deliver defined projects. Includes dedicated Codat engineering and implementation resources.</p>
  </li>
</ul>
