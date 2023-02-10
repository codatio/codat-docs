---
title: "Data integrity"
description: "Displays the Data Integrity percentages and describes the records that were matched and not matched"
createdAt: "2021-06-08T11:13:26.297Z"
updatedAt: "2022-11-02T14:48:33.149Z"
---

## Data integrity in the Codat Portal

To view the Data Integrity feature in the Portal, a company needs to:

- Be linked to an accounting and banking source of data. You can do this either in the Codat [Portal](/get-started-2-connect) or using the Codat [API](/step-2-connect).
- Have bank accounts and bank transactions set to [sync](/data-sync-settings).
- Select **View data > Data integrity** by the linked company to display the cross-referenced results. All matched transactions are listed under the **Records found** tab. Transactions for which no matches were found are listed under **Records not found**.

![An image of the Data Integrity page showing the records found percentage and a table of records found](/img/old/3e145f8-DataIntegrity5.png)

The red exclamation mark indicates that a matching accounting account could not be found for the banking account. Click the indicator to reveal more information, as shown in the following image. This is not an error&mdash;it's an indication that a bank account exists but was not matched against the accounting platform.

![An image of the popup for connected accounts](/img/old/a52c29c-DataIntegrity6.png)

**Transaction type abbreviations used in the user interface**

{
"data": {
"0-0": "UNK - Unknown
CR - Credit
DR - Debit
INT - Interest
DIV - Dividend
FEE - Fee",
"0-1": "SCHG - Service Charge
DEP - Deposit
ATM - Automated Teller Machine
POS - Point of Sale
TFR - Transfer
CHK - Check",
"0-2": "PMT - Payment
CSH - Cash
DDEP - Direct Deposit
DDR - Direct Debit
RPMT - Repeat Payment
OTH - Other",
"h-0": "Abbreviations",
"h-1": "Abbreviations",
"h-2": "Abbreviations"
},
"cols": 3,
"rows": 1
}

