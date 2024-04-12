---
title: "Plaid Troubleshooting and FAQs"
description: "Frequently asked questions and troubleshooting advice for our Plaid integration"
sidebar_label: Troubleshooting
---

## Why do I receive a "Connectivity not supported" error when trying to connect a bank account via Plaid?

If you receive the "Connectivity not supported" error message when trying to connect a bank account via Plaid, it is likely because of one of these reasons:

- The institution does not support one of the products specified in Link initialization.
- The institution is associated with a country not specified in Link initialization.
- The institution is associated with a country your Plaid account hasn't been enabled for.

In practice this means that the selected Plaid institution does not support [Instant Auth](https://plaid.com/docs/auth/coverage/instant/#instant-auth) as an authentication method. Fortunately, there is an alternative to Instant Auth called [Instant Match](https://plaid.com/docs/auth/coverage/instant/#instant-match), which Codat uses as an authentification fallback.

## Why do I receive a banking transactions fetch error on my first sync?

You may very occasionally notice fetch errors upon your first attempt to sync banking transactions for companies linked to the Plaid integration with subsequent attempts completing without issue. 


When fetching transaction data from Plaid, we make an outbound call to their API to initiate a background job that collates the requested data. Once the job is complete, Plaid sends the results to Codat via a webhook. Sometimes the data preparation can take more than 15 minutes, which will trigger a timeout on our side. As a result, we will return an error for the operation. This happens when a particularly large volume of data is involved, for example, during the first sync.

The subsequent requests to fetch this data will succeed because the initial job would have already progressed form the earlier request. This often happens shortly afterwards. Simply initiate another sync for the data type to resolve the issue. 

## Why do I receive a "Action required with your account" error when connecting a bank account via Plaid?
This error is likely due to the user authorising the connection not having the right permissions assigned to their user account within the bank platform. The steps to resolve this will vary from bank to bank but most will have instructions detailed in their documentation e.g. [Chase](https://www.chase.com/digital/customer-service/helpful-tips/business-banking/security/add-users-assign-rights).