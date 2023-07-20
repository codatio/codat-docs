---
title: "Order form"
description: "A breakdown of functionality and data type access by product."
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

An order should include:

- Platform (unless PAYG)
- Implementation (unless PAYG)
- Products (1+)
- Add-ons (optional)
- Additional services (optional)

---

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
<TabItem value="assess" label="Assess">

#### Functionality

- Pull  
- One time or ongoing Sync  
- API  
- Lending write-back

#### Data sources

- Accounting  
- Commerce
- Banking

#### Accounting data types

- Company Info  
- Financial Statements  
- Accounts Receivable  
- Accounts Payable  
- Ref Data  

</TabItem>

<TabItem value="sfc" label="Sync for Commerce">

#### Functionality

- Pull & Push ongoing Sync API

#### Data sources

- Accounting  

#### Accounting data types

- Accounts Receivable  
- Account Transactions  
- Ref Data  
- At request: *Suppliers, Bills, Bill Credit Notes*  

</TabItem>

<TabItem value="accounting-api" label="Accounting API">

#### Functionality

- Pull
- Ongoing Sync
- API

#### Data sources

- Accounting  

#### Data types

- All

</TabItem>

<TabItem value="banking-api" label="Banking API">

#### Functionality

- Pull
- Ongoing Sync
- API

#### Data sources

- Banking  

#### Data types

- All

</TabItem>

<TabItem value="commerce-api" label="Commerce API">

#### Functionality

- Pull
- Ongoing Sync
- API

#### Data sources

- Commerce  

#### Data types

- All

</TabItem>

</Tabs>

---

## Add-ons

### ERP integrations
This is required for access to NetSuite, Sage Intacct or Microsoft Dynamics 365 

### Desktop platforms
This is required for access to Quickbooks Desktop and Sage 50 (UK & Ireland)

### Enterprise security
Security features relevant for larger enterprises

- Enterprise SSO
- Mutual TLS
- IP Filtering
- `COMING SOON` Bring Your Own Key (BYOK)
- `COMING SOON` Audit Logs Access

### Other Enterprise product add-ons

- `COMING SOON` Higher rate limits
- `COMING SOON` Company Cohorts

---

## Additional services

### Enhanced support

Enhanced Support SLAs

### Professional Services

Statement of work based resourcing to deliver defined projects. Includes dedicated Codat engineering and implementation resources.
