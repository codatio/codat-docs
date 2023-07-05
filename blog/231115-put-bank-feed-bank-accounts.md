---
title: "Upcoming 2023-11-15: Deprecation of the `PUT bankFeedAccounts` endpoint"
date: "2023-06-30"
tags: ["Deprecation", "Bank Feeds API"]
draft: false
authors: jyorston
---

On November 15, 2023, Codat will deprecate the `PUT bankFeedAccounts` endpoint and introduce a new `POST bankFeedAccounts` endpoint instead. The new endpoint will only allow the creation of a single new bank feed account. 

<!--truncate-->

Currently, the `PUT bankFeedAccounts` endpoint handles the creation and updates of bank feed accounts. After November 15, 2023, it will be replaced by the new `POST bankFeedAccounts` endpoint. The new endpoint will use the same schema and will only manage the creation of new bank feed accounts, providing a clearer and more functional API. It will return an error if the account ID already exists for the data connection.


## Action required​

This change improves the clarity and reliability of our API. If you use the `PUT bankFeedAccounts` endpoint, you will need to update your workflows to call the new `POST bankFeedAccounts` endpoint for creating new bank feed accounts instead.

We recommend planning the transition to the new endpoint as early as possible.


## Expected impact if no action is taken​

The `PUT bankFeedAccounts` endpoint will no longer be available after November 15, 2023. If you continue to use this endpoint, your requests for creating new bank feed accounts will fail.