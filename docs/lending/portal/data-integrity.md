---
title: "In the Portal"
description: "Displays the Data Integrity percentages and describes the records that were matched and not matched"
image: "/img/banners/social/lending.png"
draft: true
---

## Data integrity in the Codat Portal

To view the Data Integrity feature in the Portal, a company needs to:

- Be linked to an accounting and banking source of data. You can do this either in the Codat [Portal](https://app.codat.io/) or using the Codat API.
- Have bank accounts and bank transactions set to [sync](/core-concepts/data-type-settings).
- Select **View data > Data integrity** by the linked company to display the cross-referenced results. All matched transactions are listed under the **Records found** tab. Transactions for which no matches were found are listed under **Records not found**.

![An image of the Data Integrity page showing the records found percentage and a table of records found](/img/old/3e145f8-DataIntegrity5.png)

The red exclamation mark indicates that a matching accounting account could not be found for the banking account. Click the indicator to reveal more information, as shown in the following image. This is not an error &mdash; it's an indication that a bank account exists but was not matched against the accounting platform.

![An image of the popup for connected accounts](/img/old/a52c29c-DataIntegrity6.png)

**Transaction type abbreviations used in the user interface**

|Abbreviations| | |
|----|----|----|
|UNK - Unknown, <br/> CR - Credit <br/> DR - Debit, <br/> INT - Interest <br/> DIV - Dividend, <br/> FEE - Fee|SCHG - Service Charge, <br/> DEP - Deposit, <br/> ATM - Automated Teller Machine, <br/> POS - Point of Sale, <br/> TFR - Transfer, <br/> CHK - Check|PMT - Payment, <br/> CSH - Cash, <br/> DDEP - Direct Deposit, <br/> DDR - Direct Debit, <br/> RPMT - Repeat Payment, <br/> OTH - Other|


