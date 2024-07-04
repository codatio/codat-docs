---
title: "Introducing improved categorization for bank statements"
date: "2024-03-14"
tags: ["Product", "Update", "Lending API"]
authors: rohoward
---

We’ve just released improvements to our bank transaction categorization, using the complimentary context available in accounting records to improve the accuracy of categorization. 

<!--truncate-->

## What’s new? 

This update introduces improvements to our [bank transaction categorisation enrichment feature](/lending/features/bank-statements-overview) to increase the confidence and reliability of categorization. 

Our bank transaction categorization engine can operate on banking data alone, but with this release lenders have the option to enhance it by adding accounting data. This allows for more comprehensive insight into the applicant’s transactions. 

When both banking and accounting data is connected, Codat will search for a match for the bank transaction in the accounting data based on the date, amount, and counterparty associated with the transaction. Where a match is found, we then use the account type details associated with that transaction (e.g. income, expense, asset, liability, or equity) to offer lenders additional context. 

You can learn more about [how it works here](https://www.codat.io/blog/how-does-bank-transaction-categorization-actually-work/). 

## Who is this relevant for? 

Lenders and underwriters looking to underwrite with accurate, real-time cash flows. 

## How to get started? 

For [Lending API](/lending/overview) companies where accounting and banking data is connected, the update is automatically available. To learn more about bank statement enrichments or connecting banking data via the Lending API, contact your Account Manager. 