---
title: "Create source account"
description: "Push bank transaction data into your customers' accounting platforms with an automated feed"
sidebar_label: Create account
displayed_sidebar: bankfeeds
hide_description: true
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

To establish a bank feed with your customer's accounting software, you'll first need to [set up source accounts](/bank-feeds-api#/operations/create-source-account). These accounts serve as representations of the company's financial accounts within the Codat platform. 

During the subsequent mapping process, these source accounts can be linked to corresponding accounts in the customer's accounting software.


:::note UK specific requirements

For GBP bank accounts, `sortCode` is also a required field. 



:::

Codat categorizes bank accounts into either credit or debit types for standardization. 

Below is a list that matches Open Banking's AccountSubType with Codat's standardized accountType:

| AccountSubType   | accountType (Codat) | 
| ---------------- | ------------------- |
| `ChargeCard`     | `Credit`            |
| `CreditCard`     | `Credit`            |
| `CurrentAccount` | `Debit`             |
| `EMoney`         | `Debit`             |
| `Loan`           | `Credit`            |
| `Mortgage`       | `Credit`            |
| `PrePaidCard`    | `Debit`             |
| `Savings`        | `Debit`             |


<Tabs>

  <TabItem value="source-request" label="Request">

Example request body for creating a debit account:


```json 
POST /companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts
{
    "id": "ac-001",
    "accountName": "Checking Account",
    "accountType": "Debit",
    "accountNumber": "12345670",
    "currency": "GBP",
    "balance": 4002
}
 ```

  </TabItem >

  <TabItem value="source-response" label="Response">

Example of a response for a credit card received upon source account creation: 

```json
{
    "id": "a3f28138-e2b9-4daa-92e1-5a99fb29ac42",
    "accountName": "Checking Account",
    "accountType": "credit",
    "accountNumber": "4243",
    "currency": "GBP",
    "balance": 100.00,
    "status": "pending",
    "modifiedDate": "2023-09-06T09:13:40.2266667"
}   
```

Note that this is a **synchronous response** - assuming the sourceAccount passes validation, you should expect a `200` status code indicating a successful operation.
   
  </TabItem >

</Tabs>

The account status will stay as `pending` until the company associates the source account with a corresponding target account in their accounting software. 

You must wait for the status to change to `linked` before you can successfully transmit any bank transactions.

Once the source account is successfully created you can then guide the company through the **mapping process**.

:::tip Adding multi currency accounts 💱

You can create multiple accounts in different currencies using the same POST endpoint for the company and data connection.

If the user has not enabled multi-currency in their accounting software you will get an error message which you can display to the user.

:::


<details>
  <summary>Updating a source account</summary>

In certain situations, you might wish to modify a source account prior to its mapping. This could occur if the user at the company has a preference for a specific bank account name to appear in their accounting software.

To achieve this, you can use the [update-source-accounts](/bank-feeds-api#/operations/update-source-account) endpoint.

```json
PUT /companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts/:accountId
{
    "id": "ac-001",
    "accountName": "Bank of X Checking Account",
    "accountType": "Debit",
    "accountNumber": "12345670",
    "currency": "GBP",
    "balance": 4002
}

```

</details>

<details>
  <summary>Removing a source account</summary>

If your customer decides to close their account, you can also [remove it from Codat](/bank-feeds-api#/operations/delete-source-account) . Doing so will not delete the account from their accounting software, but it will disable the bank feed, preventing any new transactions from appearing.

```json
DELETE /companies/:companyId/connections/:connectionId/connectionInfo/bankFeedAccounts/:accountId
```


</details>


---

## Read next

* [Authorization and mapping](/bank-feeds/mapping)

