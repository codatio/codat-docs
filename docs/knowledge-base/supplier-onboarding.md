---
title: "Onboarding to Codat"
---
Introduction

Support your customers accounts payable processes by integrating seamlessly with their suppliers accounting platforms using the Codat API.

Near real time connectivity with the suppliers accounting platforms makes it easier for suppliers to submit their invoices removing friction and admin logjam from this process. 

![](/img/knowledge-base/supplierOnboarding.png)


Supplier Onboarding Features

Connecting to your customers accounting platform

Codat handles the authorisation, linking and intricate details such as rate limits to your customers accounting platforms.

Retrieving Invoices

Once a supplier has linked their accounting platform, A list of customers and the associated invoices can be retrieved from the accounting platform, this can include line-item breakdowns and pdf copy of the invoice where available.

Going forwards, invoices could be automatically synchronised on a schedule.

Payment Reconciliation

Once the transaction is completed, a payment can then be pushed to the customers accounting platform and reconciled against the invoice marking it as paid.




Pulling accounts receivable

A list of invoices with line-item detail and attachments where available can be pulled from the accounting platform.
If only invoices for a specific company are required, then a query parameter can be used to filter for these.

Example request for invoice

GET

	/companies/{companyId}/data/invoices?page=1&pageSize=100&query=customerRef.companyName={customer name}


Mapping

To enable users to select which account a payment should be deposited to, you can retrieve a list of these from the accounting platform you also have the option to create a new one should the account not exist in their platform.


Example request to retrieve Bank Accounts

GET

	/companies/{companyId}/data/invoices?page=1&pageSize=100&query=customerRef.companyName={customer name}

Example request to create Bank Account

POST

	/companies/{companyId}/connections/{connectionId}/data/bankAccounts


Payment Reconciliation

When the user has completed their mapping and receives a payment from their customer, this can then be reconciled back to the users accounting platform.

POST

	/companies/{companyId}/connections/{connectionId}/push/payments


Refunds

If the bill is refunded by the supplier, a bill credit note can be pushed back to the accounting platform to represent this.

POST

	/companies/{companyId}/connections/{connectionId}/push/creditNote