---
title: "Use the Maxio integration"
description: "When an SMB user has linked their Maxio account, access their subscriptions and billing data by making proxy requests to the Maxio API"
sidebar_label: Use the integration
---

The Maxio integration doesn't yet expose standardized data types or provide any data visualization or metrics (for example, in Assess).

Instead, when an SMB customer (a company) has [linked their Maxio account](/integrations/commerce/chargify/commerce-chargify-setup), you can access their subscriptions and billing data through the `proxy` endpoint in the Codat API. Only GET requests are currently supported.

By default, Codat disables users from making `proxy` requests. To enable proxy for Maxio, contact your account manager or [support](mailto:support@codat.io).

## Send a proxy request

To proxy to the Maxio API, send a GET request to the `proxy` endpoint:

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=MAXIO_ENDPOINT
```

Replace `MAXIO_ENDPOINT` with the desired Maxio API object, which must be URL encoded. For example, use `customers.json` to query a company's list of customers in Maxio.

To view a list of all available endpoints, see the <a className="external" href="https://developers.chargify.com/docs/api-docs/YXBpOjE0MTA4MjYx-chargify-api" target="_blank">Maxio API documentation</a>.

Note: Maxio's docs are still in the name of their old brand, Chargify.
