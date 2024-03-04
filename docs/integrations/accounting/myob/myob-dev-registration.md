---
title: "Endpoints for MYOB Developer Partner Registration"
draft: true
---

Before you can use Codat to access accounting data from customers using MYOB AccountRight and Essentials, you will need to register for a developer account with MYOB. The MYOB developer registration document asks which of their API endpoints you want to use.

Audience

Anyone, regardless of technical acumen, that is working on enabling and configuring Codat's MYOB AccountRight and Essentials integration.

Pre-requisites

You are ready to register for the MYOB Developer Partner program in order to enable the MYOB AccountRight and Essentials integration via Codat.

Endpoints for MYOB Developer Partner Registration

This chart shows the endpoints and methods that Codat uses:

| Endpoint | GET / PUT / POST |
| :- | :- |
|{cf_uri}/Banking/BankAccount | GET |
|{cf_uri}/Banking/ReceiveMoneyTxn | GET |
|{cf_uri}/Banking/SpendMoneyTxn | GET |
|{cf_uri}/Company | GET |
|{cf_uri}/Company/Preferences | GET |
|{cf_uri}/Contact/Customer | GET / POST |
|{cf_uri}/Contact/Customer/{customerId} | GET / PUT |
|{cf_uri}/Contact/Supplier | GET / POST |
|{cf_uri}/Contact/Supplier/{supplierId} | GET |
|{cf_uri}/GeneralLedger/Account | GET / POST |
|{cf_uri}/GeneralLedger/AccountingProperties | GET |
|{cf_uri}/GeneralLedger/Category | GET |
|{cf_uri}/GeneralLedger/Currency | GET |
|{cf_uri}/GeneralLedger/JournalTransaction | GET |
|{cf_uri}/GeneralLedger/LinkedAccount | GET |
|{cf_uri}/GeneralLedger/TaxCode | GET |
|{cf_uri}/Inventory/Item | GET |
|{cf_uri}/Purchase/Bill/Item | GET |
|{cf_uri}/Purchase/Bill/Miscellaneous | GET |
|{cf_uri}/Purchase/Bill/Professional | GET |
|{cf_uri}/Purchase/Bill/Service | GET / POST |
|{cf_uri}/Purchase/DebitRefund | GET |
|{cf_uri}/Purchase/DebitSettlement | GET |
|{cf_uri}/Purchase/SupplierPayment | GET / POST |
|{cf_uri}/Report/BalanceSheetSummary | GET |
|{cf_uri}/Report/ProfitAndLossSummary | GET |
|{cf_uri}/Sale/CreditRefund | GET |
|{cf_uri}/Sale/CreditSettlement | GET |
|{cf_uri}/Sale/CustomerPayment | GET / POST |
|{cf_uri}/Sale/Invoice/{invoiceId} | GET |
|{cf_uri}/Sale/Invoice/{invoiceType}/{invoiceId} | GET |
|{cf_uri}/Sale/Invoice/Item | GET |
|{cf_uri}/Sale/Invoice/Miscellaneous | GET |
|{cf_uri}/Sale/Invoice/Professional | GET |
|{cf_uri}/Sale/Invoice/Service | GET / POST |
|{cf_uri}/Sale/Invoice/Service/{invoiceId} | PUT |
|{cf_uri}/Sale/Invoice/TimeBilling | GET |


------------------------

If you have any questions on the information shared above, please raise a ticket with our support team through [this form](https://codat.zendesk.com/hc/en-gb/requests/new).