---
title: Map payment methods
description: "Enable SMBs to choose how to make payments"
image: "/img/banners/social/payables.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

Users may have multiple bank accounts from which they might pay for a bill.

To enable users to select which bank account a payment should originate from, you can retrieve a list of these from the accounting platform you also have the option to create a new one should the account not exist in their platform. 

In some cases your platform may support multiple payment methods and each method can be mapped to an account. 
You should store the mapping of the relevant `accountId` as this will be needed when creating the [billPayment](/payables/payments).

:::tip Foreign exchange payments 💱

If you are facilitating payments in a foreign currency, then the payment should either be converted to the currency of the account, or you can create a new account with the import currency.

The [create account model](/sync-for-payables-api#/operations/get-create-chartOfAccounts-model) provides a list of the companies enabled currencies, this will return:

- *A single value*: base currency, where only the base currency is supported (e.g. USD for a company based in the United States)
- *Multiple values*: reflecting values selected/enabled by a user within the package
- *No values* (empty array): where all/any currencies can be selected

:::

### Retrieve a list of existing bank accounts

If the company is making payments from a pre-existing account, then you can retrieve a list of accounts and enable them to map payment methods against each one. For example, you might offer  the ability to make payments from a credit card, in which case the companies `billPayments` should be reconciled to a credit account.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="List bank accounts"
GET https://api.codat.io/companies/{companyId}/connections/{connectionId}/data/bankAccounts
```

</TabItem>

<TabItem value="Response Body" label="Response Body">

```json request title="QuickBooks Example"
{
	"results": [
		{
			"id": "164",
			"accountName": "BillPay Debit Card",
			"accountType": "Debit",
			"nominalCode": "123456788",
			"currency": "USD",
			"balance": 0,
			"availableBalance": 0,
			"modifiedDate": "2023-04-14T09:31:24Z",
			"sourceModifiedDate": "2023-04-14T09:31:23Z",
			"metadata": {
				"isDeleted": false
			}
		},
		{
			"id": "163",
			"accountName": "BillPay Credit Card",
			"accountType": "Credit",
			"nominalCode": "123456789",
			"currency": "USD",
			"balance": 0,
			"availableBalance": 0,
			"modifiedDate": "2023-04-14T09:30:03Z",
			"sourceModifiedDate": "2023-04-14T09:30:02Z",
			"metadata": {
				"isDeleted": false
			}
		}
	]
}
```

</TabItem>

</Tabs>

### Create a new account

If the company is making payments from a payment method or account that you provide, then you should create a new account to represent this in their accounting software. This will make the companies payment reconciliation workflows in their accounting software easier.

#### Pre-pay account

Typically if the payment method is one of the following:

- Automated clearing house (ACH) or Real Time Payments (RTP)
- Cheque / Check
- Electronic bank transfer
- BACS (Bankers' Automated Clearing System)

Then you should [create a bank account](/sync-for-payables-api#/operations/create-bank-account) with an `accountType` of `Debit` to represent the account the payments are being made from:

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Create Bank Account"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts
```

</TabItem>

<TabItem value="Request Body" label="Request Body">

```json request title="QuickBooks Example"
{
    "accountName": "BillPay Debit Account",
    "accountType": "Debit",
    "accountNumber": "123456789",
    "currency": "USD",
    "balance": 0,
    "availableBalance": 0,
    "modifiedDate": "2023-04-14T09:25:10Z"
}
```

</TabItem>

</Tabs>


#### Credit account

If you are providing a credit facility for the payment e.g.
- Commercial Credit Card
- BNPL (Buy now pay later)

Then you should create a bank account with an `accountType` of `Credit` to represent the account the payments are being made from:

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Create Credit Account"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts
```

</TabItem>

<TabItem value="Request Body" label="Request Body">

```json request title="QuickBooks Example"
{
    "accountName": "BillPay Credit Card",
    "accountType": "Credit",
    "accountNumber": "123456789",
    "currency": "USD",
    "balance": 0,
    "availableBalance": 0,
    "modifiedDate": "2023-04-14T09:25:10Z"
}
```

</TabItem>

</Tabs>

---

## Read next

- [Payments](/payables/payments) - Reconcile payments to the SMB's accounting software