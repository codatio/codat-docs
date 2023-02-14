---
title: "Sage Bank Feeds"
sidebar_label: Overview
description: "Learn about our Sage Bank Feeds integration"
createdAt: "2022-10-05T10:36:56.241Z"
updatedAt: "2023-01-17T17:05:51.486Z"
---

:::caution Sage Bank Feeds - Beta

Our Sage Bank Feeds integration is currently in beta. You can provide feedback on the integration in <a className="external" href="https://codat.productboard.com/feature-board/1378101-feature-organization/features/11073763/detail" target="_blank">Productboard</a> or by contacting your Solutions Engineer or Account Manager.
:::

## Overview

With our Sage Bank Feeds integration, you can enable a Sage user to set up a bank feed from a bank account in your application (the source account) to an account in a supported Sage product (the target account). You can then push [Bank transactions](/accounting-api#/schemas/BankTransactions) from the source account to the target account.

![screenshot](/img/old/4185821-sage-bank-feeds-flowchart-test-white-border-wider.png "Pushing Bank transactions from a source to a target bank account.")

With access to bank feeds, your customers can more easily reconcile bank transactions against accounting entries, like invoices and bills.

:::note Supported Sage products

You can push bank transactions to several [supported Sage products](/bank-feeds-api/sage-bank-feeds/#supported-sage-products).
:::

## Supported data types and operations

Bank feeds are represented as streams of [Bank transactions](/accounting-api#/banktransactions) pushed to Codat in chronological order.

## Setup overview

First, you need to [set up the integration](/bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-setup).

Once the integration is set up, an end user (your SMB customer) can set up a bank feed using the _Connect Bank_ feature in a supported Sage product. They find your institution and then select a source bank account to send bank transactions from.

They are redirected to a Codat UI to enter their data connection ID to authenticate with the integration - see [SMB user flow: Connects a source bank account to Sage](/bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-setup#smb-user-flow-connect-a-source-bank-account-to-sage) for details. Alternatively, you can [authenticate users through your own web app](/bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-authenticate-users-web-app).

You push transactions for authenticated users to Codat using the [POST /bankTransactions](/codat-api#/operations/create-data-connection) endpoint - see [Use your Sage Bank Feeds integration](/bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-use) for details.

## Supported Sage products

Our integration supports pushing bank feeds to several Sage products, including Sage Business Cloud, Sage Intacct, and Sage 50. For a complete list, see <a className="external" href="https://developer.sage.com/banking-service/provider-api/what-is-sage-banking-service/supported-regions-products/" target="_blank">Supported regions and products</a> in the Sage Banking Service documentation.

## Next steps

See [Set up the Sage Bank Feeds integration](/bank-feeds-api/sage-bank-feeds/bank-feed-sage-bank-feeds-setup) to learn how to set up and enable the integration.
