---
title: "Upcoming 2023-11-15: Deprecation of the `PUT bankFeedAccounts` endpoint"
date: "2023-06-30"
tags: ["Deprecation"]
draft: false
authors: jyorston
---

On November 15, 2023, Codat will deprecate the `PUT bankFeedAccounts` endpoint and introduce a new `POST bankFeedAccounts` endpoint. Using the same schema, the new endpoint will allow the creation of a single new bank feed account only. It will return an error if the account ID already exists for the data connection.

<!--truncate-->

Currently, the `PUT bankFeedAccounts` endpoint handles creation and updating of bank feed accounts. This mixed functionality has caused some complexity and occasional misuse, such as unintended updates to bank account numbers.

After November 15, 2023, the POST bankFeedAccounts endpoint will only manage the creation of new bank feed accounts, providing clearer and more functional API.

## Action required​

This is a modification aimed at improving the clarity and reliability of our API. If you are utilizing the `PUT bankFeedAccounts` endpoint, you will need to update your workflows to use the new `POST bankFeedAccounts` endpoint for creating new bank feed accounts.

The `PUT bankFeedAccounts` endpoint will be flagged as deprecated on the the public OAS documentation and will be removed on November 15th 2023. We recommend planning the transition to the new endpoint as early as possible.

## Expected impact if no action is taken​

The `PUT bankFeedAccounts` endpoint will no longer be available after November 15, 2023. If you continue to use this endpoint, your requests for creating new bank feed accounts will fail.