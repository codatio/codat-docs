---
title: "QuickBooks Online FAQ"
description: "Frequently asked questions about our QuickBooks Online integration."
createdAt: "2020-01-14T00:44:32.573Z"
updatedAt: "2022-10-17T16:12:22.938Z"
---

## How is sales tax handled for US companies that use QuickBooks?

Excerpt from QuickBooks - \*US QuickBooks Online companies created after November 10, 2017 manage sales tax calculations via an automated sales tax (AST) engine. Sales tax is determined based on the source and destination address. The source address is the company’s legal address as available in the company settings. The destination address is the shipping address provided on the sales transaction. If a shipping address is not provided, the company address is considered as the destination address. The ability to customize the source address based on location of a given transaction is not supported.

## How does the Quickbooks Automated Sales Tax engine (AST) affect pushing data to QBO?

At the line level of an invoice, bill, or credit note the taxable status of each line is noted as either `TAX` or `NON`. TaxCode objects in this context are referred to as pseudo tax codes.

A TaxCode object is used to track the taxable or non-taxable status of products, services, and customers. Users can assign a sales tax code to each of their products, services, and customers based on their customers’ taxable or non-taxable status in QBO, via the Codat API.

In QBO, users can then use these codes to generate reports that provide information to the tax agencies about the taxable or non-taxable status of certain sales.

If a US company has enabled the automated sales tax (AST) option in QBO, then the tax is calculated automatically by QBO. The 'taxAmount' is ignored if it's supplied in a push request.

AST is supported by the following Codat data types: Invoices, Credit Notes, and Direct Incomes.

When the Options endpoint is called for one of these data types and an AST-enabled company, then the `taxAmount` is returned as not available. The AST status of the company is indicated in an `information` field in the response body; for example:

```json
"validation": {
  "information": [
    {
        "details": "Automated Sales Tax is enabled for this company."
    }
  ]
}
```

## Is QuickBooks Online (FR) supported?

Yes. Codat supports the same functionality for QuickBooks Online France (FR) as for QuickBooks Online UK and US.

France-locale companies require that _journal codes_ (represented in QBO as `JournalCode` objects) are assigned to journal entries. Therefore, when pushing Journal Entries to a QBO (FR) company, Codat assigns each Journal Entry with a journal code, choosing any journal code that has a `Type` of `Others` or `Autres`. If a journal code of `Type` `Others` or `Autres` does not exist, a validation error is returned.

The Journal Entries object in Codat's accounting data model does not have a field for journal code.

## Is QuickBooks Self Employed supported?

Unfortunately, QuickBooks Self Employed uses a different API to QuickBooks Online. This API is not made public by Intuit and therefore it is not currently supported by Codat.

## How does Codat handle QuickBooks Online's "Expense" transactions

QuickBooks Online uses _expenses_ to record purchases that are paid immediately. Where these are recorded against a [supplier](/accounting-api#/schemas/Suppliers), they are made available in Codat's [Bills](/accounting-api#/schemas/bills) and [Bill payments](/accounting-api#/schemas/billpayments) datasets.

## Why can't I sync purchase orders from a QuickBooks Online Demo account?

Intuit only make Purchase Orders available on paid QuickBooks Online subscriptions, so are not available on any free demo or trial accounts.

## Tracking categories

In Codat, QBO's "classes" and "locations" are mapped to [tracking categories](/accounting-api#/schemas/trackingcategories).
