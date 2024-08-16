---
title: "Exact Online integration reference"
description: "Things to know when synchronizing data with Exact Online (NL and UK)."
sidebar_label: Reference
---

Be aware of the following information when building your application using Codat's Exact Online (NL and UK) integration.

## Attachments

File extensions are not indicated when syncing Bill attachments with Exact.

## Items

When reading Items from Exact Online, the `type` field indicates whether the source business object is a stock-controlled item.

- Stock-controlled items have a `type` of `Inventory`.
- Non stock-controlled items have an `type` of `Unknown`.

## Journals

You can read the following types of journals from Exact Online:

- General
- Cash
- Bank
- Payment service
- Sales
- Purchase

## Journal entries

The `postedOn` field is not populated when reading journal entries from Exact Online. This information is not available from the Exact API.

## Transfers (Exact UK)

Writing Transfers is only supported for transfers between a bank account and a nominal account of type Balance Sheet.
