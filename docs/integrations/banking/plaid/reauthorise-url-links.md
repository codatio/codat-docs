---
title: "Reauthorize a company"
description: "Learn how to reauthorize companies that have become deauthorized"
sidebar_label: Reauthorizing companies
---

A previously linked company may become deauthorized. This means that Codat's link to a customer's banking data is no longer valid, and you can no longer queue data syncs. You can still query any historical data.

Reasons for deauthorization include:

- Open banking regulations. Every 90 days your customer must re-confirm their consent to share data.
- Any updates to the client ID or secret of your Plaid integration.
- If you remove or recreate your application in Plaid.

To reauthorize the company, you need to find and send the correct link URL to your customer.

## Link URLs for reauthorization

You can find the link URL for each company in the Codat portal.

1. Open the Codat portal and sign in.
2. In the navigation bar, select **Companies**.
3. On the **Companies** page, search for the company you're interested in.
4. Next to the company name, select **Request data**.
5. In the **Link URLs...** dialog box, under **Banking**, select **Reauthorize**.  
   Connections requiring reauthorization are clearly marked with an exclamation mark.
6. Copy the link URL for the deauthorized connection and send it to your customer.
