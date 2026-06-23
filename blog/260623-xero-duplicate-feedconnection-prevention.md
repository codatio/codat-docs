---
title: "Improved validation for Xero bank feed account mapping"
date: "2026-06-23"
tags: ["Product", "Update", "Bank feeds", "Xero"]
authors: Huweey
---

We are improving how Xero bank feed accounts are mapped to prevent the same Xero bank account being connected under more than one company that shares the same Xero application.

<!--truncate-->

## What's new?

Today it's possible to create a duplicate mapping where the target Xero bank account is already connected to a different company using the same Xero application. When that happens, multiple source accounts across different companies point to the same Xero bank feed, making it unclear which is the true source of data.

This update introduces two improvements:

- **Validation**: when a target Xero bank account is already connected under a different company, the mapping request now returns a clear `400` error with a suggested resolution, instead of silently creating a duplicate.
- **Filtered options**: target Xero bank accounts already connected to a bank feed under any company using the same Xero app are excluded from the available mapping options.

If a source account is already mapped to a Xero target account, attempting to create the same mapping again still succeeds without errors. That behaviour is unchanged. Existing mappings are not modified.

### Xero API limitation

Xero's API only shows feed connections that share the same OAuth application. If a target account is already connected through a *different* Xero OAuth application, it still appears as available. The mapping attempt then fails with an error explaining that the account is already in use.

## Who is this relevant for?

This change is relevant for Xero bank feeds clients whose setup meets **all** of the following:

1. Multiple companies share the same Xero OAuth application.
2. Those companies connect to the same Xero organization.
3. A user tries to map a source account to a Xero target account already used by a different company.

## How to get started?

**No changes to your integration are required.** Once the update is live, you will see:

- Target accounts already connected under another company using the same Xero application no longer appear in the available mapping options.
- Target accounts connected through a different Xero application still appear, but attempts to map them return an error.

### Remapping a Xero bank account

If a customer needs to remap a Xero bank account:

1. Remove the existing bank feed connection that uses the account. This makes the target account available again.
2. Create a new mapping to the required company.

Contact Codat Support or your Account Manager if you'd like help with this change.
