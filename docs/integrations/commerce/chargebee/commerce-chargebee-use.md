---
title: "Use the Chargebee integration"
description: "When an SMB user has linked their Chargebee account, access their subscriptions and billing data by making proxy requests to the Chargebee API"
sidebar_label: Use the integration
unlisted: true
---

The Chargebee integration doesn't yet expose standardized data types or provide any data visualization or metrics (for example, in Lending).

Instead, when an SMB user has [linked their Chargebee account](/integrations/commerce/chargebee/commerce-chargebee-setup#smb-customer-authenticate-and-connect-your-commerce-data), you can access their subscriptions and billing data through the `proxy` endpoint in the Codat API. Only GET requests are currently supported. 

By default, Codat disables users from making `proxy` requests. To enable proxy for Chargebee, contact your account manager or raise a ticket with our support team through our [support request form](https://codat.zendesk.com/hc/en-gb/requests/new).

## Send a proxy request

To proxy to the Chargebee API, send a GET request to the `proxy` endpoint:

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=CHARGEBEE_ENDPOINT
```

Replace `CHARGEBEE_ENDPOINT` with the desired Chargebee API object, which must be URL encoded.

For example, to view a company's customers in Chargebee, send the following request:

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=v2/customers
```

To view a list of all available endpoints, see the <a className="external" href="https://apidocs.eu.chargebee.com/docs/api" target="_blank">Chargebee API documentation</a>.
