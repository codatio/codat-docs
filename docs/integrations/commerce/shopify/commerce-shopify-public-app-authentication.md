---
title: "Set up your public app authentication endpoint"
description: "Learn how to set up an endpoint to identify merchants during"
sidebar_label: Public apps authentication
---

When a merchant adds your app to their store we need to be able to identify who this is on your end.

During the auth flow, we will redirect the user to the **App Redirect URL** endpoint entered in the [integration settings](/integrations/commerce/shopify/commerce-shopify-setup#add-your-apps-credentials-to-the-shopify-integration). This page should allow the user to authenticate themselves with you and then create (or use an existing) Codat company & data connection that can be returned to us to complete the link flow.

## Technical Details

![Merchent Authentication Flow](/img/integrations/commerce/shopify/merchant-auth-flow)