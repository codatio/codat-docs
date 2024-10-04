---
title: "Sage Bank Feeds"
displayed_sidebar: integrationsBankFeeds
description: "Learn about our Sage Bank Feeds integration"
---

## Overview

With our Sage Bank Feeds integration, you can enable a Sage user to set up a bank feed from a bank account in your application (the source account) to an account in a supported Sage product (the target account). You can then write [Bank transactions](/bank-feeds-api#/operations/create-bank-transactions) from the source account to the target account.

![screenshot](/img/old/4185821-sage-bank-feeds-flowchart-test-white-border-wider.png "Writing Bank transactions from a source to a target bank account.")

With access to bank feeds, your customers can more easily reconcile bank transactions against accounting entries, like invoices and bills.

:::note Supported Sage products

You can write bank transactions to several [supported Sage products](/integrations/bank-feeds/sage-bank-feeds/#supported-sage-products).
:::

## Supported data types and operations

Bank feeds are represented as streams of [Bank transactions](/bank-feeds-api#/operations/create-bank-transactions) written to Codat in chronological order.

## How it works

1. [Set up the integration](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup).
2. Your end user can set up a bank feed using the _Connect Bank_ feature in a supported Sage product. They find your institution and then select a source bank account to send bank transactions from.
  
  They are redirected to a Codat UI to enter their data connection ID to authenticate with the integration - see the [SMB user flow](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#smb-user-flow-connect-a-source-bank-account-to-sage) for details. Alternatively, you can [authenticate users through your own web app](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app).
3. You write transactions for authenticated users to Codat using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint - see [Use your Sage Bank Feeds integration](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-use) for details.

## Supported Sage products

Our integration supports writing bank feeds to several Sage products, including Sage Business Cloud, Sage Intacct, and Sage 50. For a complete list, see the [supported regions and products](https://developer.sage.com/banking-service/provider-api/banking-service/supported-regions-products/).

---

## Read next

See [Set up the Sage Bank Feeds integration](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup) to learn how to set up and enable the integration.
