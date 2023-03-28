---
title: "Xero App Partner guidance by use case"
description: "Understand the requirements for Financial Services, Lending, Payments, and App Store Partners"
---

The process of becoming a Xero App Partner depends on your use case. Xero has two categories of App Partner:

- [Financial Services App Partners](#financial-services-partners), including [Lending App Partners](#lending-partners) and [Payments App Partners](#payments-partners)
- [Xero App Store Partners](#xero-app-store-partners), also known as _Ecosystem App Partners_

For guidance on what category applies to your use case, consult your Codat account team.

To avoid unnecessary delays, we recommend progressing the commercial and technical aspects of App Partnership in parallel, if possible.

:::caution App partnership is not always possible

Note that Xero App Partnership is not possible for every use case.

:::

## Financial Services App Partners

There are several subcategories within Financial Services; follow the guidance for your specific use case. 

<details>
  <summary>Sync status codes</summary>
Text goes here
</details>

You are required to obtain Xero's written consent for each Financial Services use case that you implement.

## Lending App Partners

:::info Geographic restrictions for lending partners

App Partnership is currently only available to lenders operating in specific countries, including the UK, Australia, and New Zealand.

Lenders operating in the US, Canada, and Ireland are currently unable to become Xero App Partners.

:::

To become a Lending App Partner you need to:

- Implement *lending write-back* functionality within your application, as described below.
- Set up a Commercial Agreement with Xero.
- Comply with all the relevant [Xero Certification Checkpoints](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/).

### Lending write-back

Xero has one unique technical requirement for lenders: lending write-back.

The goal of the write-back is to maintain the customer's financial position in Xero at all points of the lending cycle. This is achieved by recording the loan liability, interest and/or fees, and repayments, and facilitating the reconciliation of bank accounts.

To learn about write-back in depth, see the [Xero developer documentation](https://developer.xero.com/documentation/guides/how-to-guides/general-lending-integration-guide/).

:::tip Work closely with your account team on write-back

We recommend you work closely with your Codat account team to implement lending write-back in your application. They can provide detailed guidance that is specific to the type of lending you do.

:::

### Commercial Agreement for Lending App Partners

Xero requires a commercial agreement in order for you to become a Xero App Partner for lending. When you're ready to apply for Xero App Partnership, please contact your Codat account team and we will connect you with a relevant contact at Xero. The commercial terms of this agreement are between you as a lender and Xero. Codat is not involved in the negotiation of that commercial agreement. 

When you're ready to apply for Xero App Partnership please contact your Codat account team and we'll connect you with a relevant contact at Xero.

### Certification Checkpoints for Lending App Partners

Lenders are required to complete all the mandatory Certification Checkpoints required of App Partners. We've broken down the Certification Checkpoints in [Joining the Xero App Partner Program](/integrations/accounting/xero/xero-app-partner-program).

For the most efficient implementation, we suggest completing the checkpoints in the following order:

**Lending App Partners**

1. Checkpoint 8 - Sign Up with Xero
2. Checkpoint 7 - Scopes
3. Checkpoint 3 - Connection
4. Checkpoint 4 - Error Handling
5. Checkpoint 2 - Branding
6. Checkpoint 1 - App Name

## Payments App Partners

To become a Payments App Partner you need to:

- Set up a Commercial Agreement with Xero.
- Comply with the relevant Certification Checkpoints.

### Commercial Agreement for Payments App Partners

Xero requires a commercial agreement in order for you to become a Xero App Partner for payments. When you're ready to apply for Xero App Partnership, please contact your Codat account team and we will connect you with a relevant contact at Xero. The commercial terms of this agreement are between you and Xero. Codat is not involved in the negotiation of that commercial agreement. 

When you're ready to apply for Xero App Partnership please contact your Codat account team and we'll connect you with a relevant contact at Xero.

### Certification Checkpoints for Payments App Partners

Payments providers are required to complete all the mandatory Certification Checkpoints required of App Partners. We've broken down the Certification Checkpoints in [Joining the Xero App Partner Program](/integrations/accounting/xero/xero-app-partner-program).

For the most efficient implementation, we suggest completing the checkpoints in the following order:

**Payments App Partners**

1. Checkpoint 8 - Sign Up with Xero
2. Checkpoint 7 - Scopes
3. Checkpoint 3 - Connection
4. Checkpoint 4 - Error Handling
5. Checkpoint 2 - Branding
6. Checkpoint 1 - App Name

Depending on the nature of your Payments solution, you may also need to implement the checkpoints required for Apps that POST or PUT data.

### FX hedging, Investments, and Financial Marketplaces

Currently, Xero does not permit App Partnership for FX hedging, Investments, and Financial Marketplaces use cases. Please consult your Codat account team for guidance if your App falls into one of those subcategories.

## Xero App Store Partners

To become an Ecosystem App Partner you need to:

- Create a Commercial Agreement with Xero.
- Comply with the relevant Certification Checkpoints.

### Commercial Agreement for App Store Partners

Xero's App Store is designed to support the go-to-market efforts of its Apps. Xero's commercial model with its App Store Partners is a referral revenue share model in which App Partners pay Xero 15% of monthly revenue (excluding fees) for net sales made through the Xero App store. 

These sales are tracked by the _Sign Up with Xero_ flow required by Xero's Certification checkpoints (Checkpoint 8). For more information about the checkpoints, see [Joining the Xero App Partner Program](/integrations/accounting/xero/xero-app-partner-program).

When you're ready apply for Xero App Partnership please contact your Codat account team and we'll connect you with a relevant contact at Xero so you can create your commercial agreement with them.

### Certification Checkpoints for App Store Partners

Ecosystem Partners are required to complete all the mandatory Certification Checkpoints required of App Partners. We've broken down the Certification Checkpoints in [Joining the Xero App Partner Program](/integrations/accounting/xero/xero-app-partner-program).

For the most efficient implementation, we suggest completing the checkpoints in the following order:

**App Store Partners**

1. Checkpoint 8 - Sign Up with Xero
2. Checkpoint 7 - Scopes
3. Checkpoint 3 - Connection
4. Checkpoint 4 - Error Handling
5. Checkpoint 2 - Branding
6. Checkpoint 1 - App Name

Depending on the nature of your solution, you may also need to implement the checkpoints required for Apps that POST or PUT data.
