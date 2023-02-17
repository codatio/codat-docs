---
title: "TrueLayer FAQs"
description: "Frequently asked questions about our TrueLayer integration"
createdAt: "2020-07-21T10:21:57.468Z"
updatedAt: "2022-10-20T10:38:48.216Z"
---

If your TrueLayer question isn't answered on this page, please contact our support team.

## What does a customer see when they link their bank account?

Codat uses TrueLayer's customer journey to link a bank account. This includes a standard landing page for all customers, and a login page for their banking institution. To find out exactly what your customers will see, set up a test company and generate a link URL as described in [Test TrueLayer](/integrations/banking/truelayer/test-truelayer#set-up-a-test-company-and-generate-a-link-url).

## Can I specify the bank we want to connect to when we're initiating the OAuth process?

Yes. When you create a data connection to sync banking data for a company, you also supply a platform key. For more information, see [Test TrueLayer](/integrations/banking/truelayer/test-truelayer#set-up-a-test-company-and-generate-a-link-url).

## Does Codat automatically sync banking data on a regular basis?

Banking data is synchronised in the same way as data from accounting integrations.  
[Configure sync settings](/core-concepts/data-type-settings) explains how to adjust the fetch order and sync frequency to suit your requirements.

## How are we billed for connections to TrueLayer accounts?

You'll be billed by Codat. Your invoice will include an additional line item for TrueLayer. For more information, get in touch with your commercial contact.

## Are there any FCA regulations that need to be accounted for such as registering as an AISP?

The structure of the TrueLayer and Codat distribution agreement is designed so that you don't require any direct regulatory authorization from the Financial Conduct Authority (FCA) to access data from businesses. Neither do you need to register as an account information service provider (AISP). However, you should ensure that you comply with the authorization flow requirements as detailed in the agreement. This is not legal advice. You should always consult your own advisers to confirm your regulatory requirements.

## Why can't I see running balances for some transactions?

TrueLayer doesn't currently provide running balance data for transactions from Monzo or Starling, because these are not provided by the underlying bank's API.
