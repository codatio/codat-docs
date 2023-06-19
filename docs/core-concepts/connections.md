---
title: "Connections"
description: "Concept overview and key details"
createdAt: "2021-03-31T21:11:15.467Z"
updatedAt: "2023-01-16T15:23:20.370Z"
tags:
  - Core concept
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

A data connection represents a [company's](/core-concepts/companies) connection to a data source and allows you to synchronize data (pull and/or push) with that source.

A company can have multiple data connections depending on the type of data source it is connecting to. For example, a single company can link to:

- [Accounting data](/accounting-api/overview) - 1 active connection.
- [Banking data](/banking-api/overview) - Multiple active connections.
- [Commerce data](/commerce-api/overview) - Multiple active connections.

Any combination of accounting, banking, and commerce data connections is allowed.

Before you can use a data connection to pull or push data, the company must grant you access to their business data by [linking the connection](/auth-flow/overview).

## Connection status

Connections can have one of the statuses described in the following table.

| Status         | Definition                                                                                                                                                                                                                                                                                                                                                                                                   |
| :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Linked`        | The connection is linked to a data source; you can use it to pull and push a company's consented data to and from the underlying provider's platform.                                                                                                                                                                                                                                                        |
| `PendingAuth`    | The company hasn't authorized access to their financial platform (the data source). The SMB customer selected the platform in Link but did not complete the authorization flow.                                                                                                                                                                                                                              |
| `Deauthorized`   | The connection was linked but is no longer able to access data from the underlying provider's platform.<br/>You can access any data that was already pulled or pushed using this data connection. However, you can't perform any new pulls or pushes until the connection is re-linked.<br/>A data connection usually becomes Deauthorized if the company revoked your access or an expiry time was reached. |
| `Unlinked`       | The data connection was previously linked but you asked for your access to be revoked (see Disconnect a data connection to revoke your access to a data source).<br/>Similar to Deauthorized, you can still access any data that was already pulled or pushed using the data connection, but can't perform any new pulls or pushes unless the connection is re-linked.                                       |
| No connections | The company has been created but does not have any connections to financial platforms established in any of the above statuses. |

## Linked data connection example

Verify that a connection returns a Linked `status` using one of our [Connections](/codat-api#/operations/list-company-connections) endpoints. 

In the response, note the following fields:

- `sourceId` identifies the source of information, like a bank or accounting software; 
- `integrationId` identifies the Codat integration that supports the data source.

```json title="GET /companies/{companyId}/connections"
{
  "id": "00000000-0000-0000-0000-000000000000",
  "integrationId": "18cb53c4-3807-4a5a-8da9-303053a40002",
  "sourceId": "58e1d32f-a092-438a-bffb-3bf6af9ba8ec",
  "platformName": "Sage 50 (UK & Ireland)",
  "linkUrl": "https://link.codat.io/companies/00000000-0000-0000-0000-000000000000/connections/00000000-0000-0000-0000-000000000000/start",
  "status": "Linked",
  "lastSync": "2022-01-01T12:00:00.0000000Z",
  "created": "2021-01-01T12:00:00Z",
  "sourceType": "Accounting"
}
```

## Disconnect a data connection to revoke your access to a data source

You can disconnect a data connection using the <a href="/codat-api#/operations/unlink-company-connection" target="_blank">PATCH /connectionId endpoint</a>. This revokes your access to synchronize data with the linked company and sets the data connection's status to `Unlinked`.

To disconnect a data connection, you'll need to provide:

- The `companyId` of the linked company as a path parameter.
- The `connectionId` of the data connection to disconnect as a path parameter.
- A `status` of `Unlinked` in the request body.

When a connection is set to `Unlinked`, you can continue to access any data that was already pulled or pushed to the data source, but you can't perform any new pulls or pushes (unless the connection is re-linked).

:::note

Only `Linked` data connections can be unlinked.
:::

#### Example: Disconnect a data connection

<Tabs>

<Tabitem value="Request URL" label="Request URL">

```http request title="Disconnect connection"
PATCH /companies/COMPANY_ID/connections/CONNECTION_ID
```

</Tabitem>

<Tabitem value="Request Body" label="Request Body">

```json
{
  "status": "Unlinked"
}
```

</Tabitem>

</Tabs>


#### Sample response to `Unlinked` request

```json Sample response to "Unlinked" request
{
  "id": "69c25cc8-e1cd-4b63-b43d-75da021df35d",
  "integrationId": "43b64770-a953-46d6-ab30-46c21094a276",
  "sourceId": "9a96f326-226a-4e0f-923a-6758fdba40cc",
  "platformName": "Stripe",
  "linkUrl": "https://link.codat.io/link/start/c9219b93-4eff-4806-99d8-ed3337b6ded2/69c25cc8-e1cd-4b63-b43d-75da021df35d",
  "status": "Unlinked",
  "lastSync": "2021-02-11T12:12:13.1988465Z",
  "created": "2021-02-11T12:04:53Z",
  "sourceType": "Commerce"
}
```

## Delete a data connection

To delete a data connection, send a request to the <a href="/codat-api#/operations/delete-company-connection" target="_blank">DELETE /connectionId endpoint</a> and provide the `companyId` and `connectionId` as path parameters.

```http
DELETE /companies/COMPANY_ID/connections/CONNECTION_ID
```

When you delete a data connection:

- You can't make any data pulls or pushes against the underlying data provider.
- The data connection isn't returned by `GET /connections` or `GET / companies`.

## Provide credentials or tokens for a data connection

If you are migrating an existing integration to use Codat, you can provide tokens for the connection to migrate your users access. You can read more about how to do this on our [migration page here](/introduction/migration)

---

## Read next

- Next concept: [Integrations](/core-concepts/integrations)
- [`GET /connections`](/codat-api#/operations/list-company-connections) API reference
