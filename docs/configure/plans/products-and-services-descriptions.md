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
Synchronisation of data from commerce data source(s) into accounting package(s).

**Client connector**  
Codat built and owned connector, which pulls Company data from and/or pushes Company data to the Client’s system, to enable Commerce to Accounting synchronization to function.

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
Synchronisation of expense data provided by a Codat Client into accounting package(s).

**Config API**  
API endpoints allowing Codat Clients to configure Expense Sync (typically via client-built Company user interface).

<hr/>

This product will appear as **Sync for Expenses (v2)** on your order form.

</TabItem>

<TabItem value="payroll" label="Sync for Payroll">

#### Features

- Pull accounting data
- Push accounting data

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/payroll/overview#compatible-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Pull accounting data**  
Pull data from connected Accounting packages.

**Push accounting data**  
Pull data from connected Accounting packages.
 
[See the documentation for a list of supported data types](/payroll/data-types)

<hr/>

This product will appear as **Sync for Payroll** on your order form.

</TabItem>

<TabItem value="payables" label="Sync for Payables">

#### Features

- Pull accounting data
- Push accountant data
- Update accounting data
- Delete accounting data

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/payables/overview#compatible-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Pull accounting data**  
Get data from connected Accounting packages.

**Push accounting data**  
Create data in connected Accounting packages.

**Update accounting data**  
Update data in connected Accounting packages.

**Delete accounting data**  
Delete data in connected Accounting packages.

[See the documentation for a list of supported data types](/payables/data-types)

<hr/>

This product will appear as **Sync for Payables** on your order form.

</TabItem>

<TabItem value="bankfeeds" label="Bank Feeds API">

#### Features

- Push bank transactions
- Config UI
- Config API

<hr/>

#### Supported integrations

[See supported intergrations in our documentation](https://docs.codat.io/bank-feeds/overview#supported-integrations).

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

<hr/>

#### Feature definitions

**Push bank transactions**  
Push Bank Transactions into connected accounting package as a bank statement

**Config UI**  
White labelled user interface enabling a Company to configure Bank Feeds (select accounting package accounts to which bank feeds should be pushed)

**Config API**  
API endpoints allowing clients to configure bank feeds (typically via client-built Company user interface)

<hr/>

This product will appear as **Bank feeds** on your order form.

</TabItem>

<TabItem value="lending" label="Lending API">

#### Features

- Pull accounting data
- Pull commerce data
- Pull banking data
- Bank statements
- Sales
- Financial statements
- Liabilities
- Accounts receivable
- Accounts payable
- Accounting package writeback

<hr/>

#### Supported integrations

See our [Lending API documentation](https://docs.codat.io/lending/overview) for our supported integrations.

**Note:** A separate Add on is required to access ERP integrations and Desktop platforms.

Open banking provider access is subject to separate access requirements.

<hr/>

#### Feature definitions

**Pull accounting data**  
Pull the following data from connected Accounting packages: [Supported data types](https://docs.codat.io/lending/data-types#supported-data-types)

**Pull commerce data**  
Pull the following data from connected Commerce platforms: [Supported data types](https://docs.codat.io/lending/data-types#supported-data-types)

**Pull banking data**  
Pull the following data from connected Open Banking provider: [Supported data types](https://docs.codat.io/lending/data-types#supported-data-types)

**Bank statements**  
Review data from a linked company’s banking connections. Transactions are enriched with financial category and payment provider information. See [full details of this feature](https://docs.codat.io/lending/features/bank-statements-overview). 

**Sales**  
Offers data sourced from a linked company's commerce connections. Access valuable insights through aggregated metrics and a comprehensive breakdown of sales transactions from prominent eCommerce, PoS, and payment platforms.  See the [full details of this feature](https://docs.codat.io/lending/features/sales-overview).  

**Financial statements**  
Provides a comprehensive view of a borrower's financial data, including profit and loss, balance sheet, and operating cash flow statements. Includes features previously known as "Enhanced Financial Report" and "Enhanced Cashflow Report". See the [full details of this feature](https://docs.codat.io/lending/features/financial-statements-overview). 

**Liabilities**  
Our machine learning models automatically identify loans from connected sources and provide you with a clear overview of a borrower's outstanding loans and their repayment history. Includes features previously known as "Enhanced Liabilities Report". See the [full details of this feature](https://docs.codat.io/lending/features/liabilities-overview) . 

**Accounts receivable**  
Provides a breakdown of a borrower's debtors ledger sourced from their accounting platform.  Includes features previously known as "Enhanced Invoices Report". See the [full details of this feature](https://docs.codat.io/lending/features/accounts-receivable-overview).  

**Accounts payable**  
Provides a breakdown of a borrower's creditors ledger sourced from their accounting platform. See the [full details of this feature](https://docs.codat.io/lending/features/accounts-payable-overview).

**Accounting package writeback**  
Where mandated by the Accounting package, the ability to write back data pertaining to a loan or other credit facility that has been issued.

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
    <p>This is required for access to NetSuite, Sage Intacct or Microsoft Dynamics 365</p>
  </li>

   <li className="card">
    <h3>Desktop platforms</h3>
    <p>This is required for access to Quickbooks Desktop and Sage 50 (UK & Ireland)</p>
  </li>

   <li className="card">
    <h3>Enterprise security</h3>
    <p>Security features relevant for larger enterprises</p>
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
