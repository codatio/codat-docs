---
title: "Loan writeback for general lending"
description: "Lending API lets you explore the financial data underpinning the enhanced reports."
sidebar_label: "Loan writeback"
---

## what is loan writeback

 the write back process for general lending. The goal of the write back is to maintain the financial position in Xero for the customer at any point of the lending cycle. This will be achieved by recording the loan liability, the interest and/or fees, repayments, and facilitating the reconciliation of bank accounts.

As part of their App Partner process Xero requires lenders to handle the write back process to maintain the financial position for customer during the lending cycle.

This functionality needs to be built by the client into their application, giving their customers the option to enable the continuous publishing of relevant transactions to Xero.

benefits? - by ushing loans back, you can see an up to date state of a borrower. save time for your smb also

mention Xero - definitely requires this, perhaps some others too? -> ask Jasper

some accountancy platforms, such as xero, require loans to be reflected back in the acctg platform

## what does it do 

pushes loan withdrawals, repayments, and interest into the acctg platform, ensuring that the bookkeeping is done correctly and that the SMB has control over what accounts are used.

## how does it work

3 simple steps
a simplified sequence diagram 

### prerequisites
the optional bit of the process flow is a prerequisite
create a company and link it
if you re using codat for lending, you would have already connected 

pushing data - refer to the longer article, plus a small summary of the process

you ll need to have bank feeds enabled on xero credentials

we recommend enabling your customer to change their configuration at any time

The data flow is optional, so should come with the ability to switch on/off

The customer should be able to configure their account mapping and have the ability to update at any time.

### configure

detailed sequence for this specific section

prior to pushing the transactions, the smb  needs to configure loan writeback so that their acctg platform is set up correctly 
- create supplier
    the supplier is the lender in the smbs platform. this is to register any interest / money received

- create virtual bank account
    what is a virtual bank account. this will be used to act as a lender's bank account in the smb's system to accurately reconcile loan transactions

- create or select an expense account. this will be used to account for expenses

- select a deposit bank account. this will be used to 

### deposit

detailed sequence for this specific section

drawdown is a two step process

- create a bank transaction depositing the money into the lenders account - a transaction to say money has been deposited into this, and a transfer to say the money went form this account to the smbs 

- create a transfer from a lenders virtua bank account to the smbs nominated bank account 

todo: speak to Tom O'Neill re the reason for this process - the context of why this is done

### repay

detailed sequence for this specific section

- you repay back the loan amount

- you pay back the fees

depending on what s being paid back, different records are being created in the accounting platform

a concrete example with monetary values

in all instances, we create a transfer and a bank transaction, and we also create a direct cost where we are repaying fees or interest

if i have a loan of £1000, and charges of 20%, the total amount due will be £1200. if i had a repayment plan for 3 months of equal amounts, the payment would be £400 each month. so we withdraw £80 on fees, and the rest for the repayment of the loan. each months we create a bank transactoin and a transfer of £400