---
title: "Link: encourage connecting more banking accounts"
date: "2026-04-15"
tags: ["Product", "Update", "Link"]
hide_table_of_contents: false
authors: pmckinney
---

On **24 April 2026**, we will update the Link flow to encourage users to connect more than one banking account, giving lenders a fuller picture of their customers' cash flow.

<!--truncate-->

## What's new?

After a user successfully connects a banking account in Link, they are prompted to connect another. This happens in two places:

**On connection success**, users see a "We recommend adding more bank accounts" prompt with a primary **Connect another account** button and a secondary **Continue** option. There is also a tooltip providing users with information on why they should connect another account.

![Plaid connected — prompt to connect another account](/img/updates/260415-link-banking-plaid-connected.png)

**On the main Link screen**, the Banking step shows an **Add another** button tagged **Recommended**, alongside information on why this would provide extra value.

![Link screen — Add another banking account](/img/updates/260415-link-banking-add-another.png)

Previously, users would complete the flow after connecting a single account, with no clear suggestion to add more. Merchants who connect multiple accounts give their lenders a fuller picture of their cash flow, leading to better lending decisions and improved conversion rates. This addresses a commonly reported pattern where merchants connect only one account.

The prompt applies to banking integrations connected via both **Plaid** and **TrueLayer**.

## Who is this relevant for?

All clients using Link — either the [Hosted Link flow](/auth-flow/overview) or the [Link SDK](/auth-flow/authorize-embedded-link) — with banking integrations enabled.

## How to get started?

No action is required. The updated flow will be available to all customers using Link with banking integrations from **24 April 2026**.
