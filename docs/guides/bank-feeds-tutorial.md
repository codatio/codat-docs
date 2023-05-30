---
title: "Bank feeds reconciliation"
sidebar_label: Bank feeds reconciliation
description: "Tutorial"
---

:::tip Who is this tutorial for?



:::

## Summary

🎯 With our demo app, you will go through the invoice financing process flow, from establishing a connection with a borrower's accounting platform to issuing a decision on selected invoices. You will see how Codat makes it easier for the borrower to raise capital against the amounts due from customers, and for the lender to make an invoice financing decision. 

⏳ Estimated time to complete: 15-25 minutes

🛠️ Code samples are in... provided for... 


* Rewrite the reconciling bank feeds page with Bank Feeds API instead of accounting api?


## Why we do this

benefits of bank feeds recon etc

One of the key considerations for SMBs in a post-pandemic world is
interoperability between their bank account and their accounting
software, and outdated methods like manual data reconciliation and
screen scraping no longer satisfy their demand for efficient, effortless
processes.
Instead, SMBs are turning to solutions like bank feeds, which
transmit standardized banking and expense data directly into their
accounting system.

Banks and neobanks need to be able to support a wide range of
services in real time—from accounts to loans to corporate cards—to
meet growing demand for instant, transparent solutions.
But banking data on its own is just numbers in a vacuum—it doesn’t
provide the contextual details SMBs need to make informed business
decisions. Someone from their finance team still has to spend hours
cross-referencing and reconciling each expense in their accounting
system to get a clear picture of the company’s finances.
Syncing an SMB’s bank statements digitally to their accounting
software and automatically reconciling transactions means saving
them time and giving them the context they need to properly analyze
and optimize their spend.


Codat helps by: 

Bank reconciliation is the process of ensuring that the information in a business’s accounting records matches the information in their bank account. Traditionally, this would be done by comparing a bank statement to the ledger entries, but our Accounting API makes it possible to upload bank transactions to the accounting platform.

This saves your customers time by removing manual entry and importing bank transactions, removes the potential for errors, and facilitates matching by providing additional details, like a merchant's name.

## Solution overview

### Video demo of Jake's designs?

### Functionality description

### Sequence diagram?

``` mermaid
    sequenceDiagram
        participant frontend as User 
        participant backend as Bank
        participant codat as Codat
        frontend ->>+ backend: Connect bank feed
        backend ->> codat: Create company with QBO connection
        codat -->> backend: Company id with QBO connection
        backend ->> codat: Create bank feed account
        codat -->> backend: Bank feed account
        %% %% backend ->> backend: Create new application with Codat companyId
        backend ->> codat: Proxy (QBO Auth.)
        codat -->> frontend: QBO Link flow
        loop batch of transactions
            backend ->> codat: Create bank transactions
            codat -->> backend: Push operation
        end
        %% loop while push operations 'Pending'
        %%     backend ->> codat: Get push operation status
        %%     codat ->> backend: Push operation status
        %% end
        backend ->> codat: Get bank transactions
        codat -->> backend: Bank transactions
        frontend ->> backend: View synced transactions
        %% %% Underwri
```

## Advice on implementing

Financial institutions can enable matching of bank accounts with
existing accounts in their SMB customers’ accounting system—or
allow them to create new accounts.
Bank transactions can be pushed against the relevant bank accounts
to show credits and debits, removing the administrative logjam
typically associated with manual reconciliation.

### code a

### code b

### code c





## Read next
