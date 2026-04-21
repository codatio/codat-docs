---
title: "Link: drive more bank account connections"
date: "2026-04-17"
tags: ["Product", "Update", "Link"]
hide_table_of_contents: false
authors: pmckinney
---

On **April 24, 2026**, we will update the Link flow to encourage users to connect more than one bank account.

<!--truncate-->

## What's new?

When a user successfully connects a bank account in Link, they are now prompted to connect another. The prompt appears in two places:

1. **On the connection success screen**, users see a _We recommend adding more bank accounts_ message with a primary **Connect another account** button.

    A secondary **Continue** button on the screen skips additional account creation. A tooltip explains why connecting additional accounts is beneficial.

    ![Plaid connected — prompt to connect another account](/img/updates/260415-link-banking-plaid-connected.png)

2. **On the main Link screen**, the Banking step displays an **Add another** button tagged _Recommended_ and provides context on the value of connecting more accounts.

    ![Link screen — Add another banking account](/img/updates/260415-link-banking-add-another.png)

Previously, users completed the flow after connecting a single account and didn't receive a suggestion to add more. The update aims to change this common connection pattern. Merchants who connect multiple accounts give their lenders a fuller picture of their cash flow, which leads to better lending decisions and improves conversion rates. 

The change applies to banking integrations connected via **Plaid** and **TrueLayer**.

## Who is this relevant for?

This change is relevant to all clients using Link with banking integrations enabled. This includes the [Hosted Link flow](/auth-flow/overview) and the [Link SDK](/auth-flow/authorize-embedded-link) solutions.

## How to get started?

No action is required. The updated flow will be available to all customers using Link with banking integrations from **April 24, 2026**.
