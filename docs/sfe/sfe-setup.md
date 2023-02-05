---
title: "Set up Sync for Expenses"
hidden: true
createdAt: "2022-09-29T14:49:40.128Z"
updatedAt: "2022-09-30T18:31:47.159Z"
---

## Prerequisites to enabling Sync for Expenses

- Sync for Expenses should be enabled for your account.

## How to set up Sync for Expenses

1. Create a Codat company. Establish and authorize a connection to the SMB's accounting platform.
2. POST to the configuration endpoint to set up how your customers expenses will be pushed:
   - Sync expense transactions as bank feeds, OR
   - Sync expense reconciliations as bank feeds
3. Present mapping options to the SMB and pass them to Codat
   - Accounts
   - Tracking categories
   - Tax rates
4. Push expenses
   - Configure the expenses
   - Configure the sync schedule
