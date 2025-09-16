---
title: "Get started with Lending"
sidebar_label: Get started
description: "Learn how to perform the initial setup for the Lending solution"
image: "/img/banners/social/lending.png"
---

import { IntegrationsList } from "@components/Integrations";
import {
  accountingIntegrations,
  bankingIntegrations,
  commerceIntegrations,
} from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import ReadNext from "@components/ReadNext";

:::tip Your lending journey

Our Lending solution supports the data collection step of your lending journey, which starts in your own web application. Enable Lending and configure it, then embed our [Link SDK](/auth-flow/authorize-embedded-link) in your app to handle the auth flow. Determine where the collected data will be stored and manage the subsequent steps of the lending process in your app.

:::

## Enable Lending

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Settings > Organizational settings > Products**.
3. In the list of products, find _Lending_ and click **Enable**. Then, follow the on-screen prompt.

## Configure Lending

### Data sources

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations** to enable and set up the integrations that will serve as a data source for the solution. Follow the respective guides for integration-specific instructions.

Data source coverage varies by feature, so be sure to review the coverage for the features you want to use.

#### Accounting

<IntegrationsList integrations={accountingIntegrations} />

#### Banking

<IntegrationsList integrations={bankingIntegrations} />

#### Commerce

<IntegrationsList integrations={commerceIntegrations} />

### Authorization flow

As part of using Lending, you will need your customers to authorize your access to their data. To do so, use [Link](/auth-flow/overview) - our pre-built, conversion-optimized white-label authorization flow.

We recommend you fully embed this auth flow in your experience by using our [Link SDK](/auth-flow/authorize-embedded-link) in your front-end code. You can also choose our out-of-the-box [Hosted Link](/auth-flow/authorize-hosted-link) auth flow option to get up and running as quick as possible.

The solution lets you tailor the authorization journey to your business needs. You can:

- [Customize Link settings](/auth-flow/customize/customize-link)
- [Set up company branding](/auth-flow/customize/branding)
- [Set up redirects](/auth-flow/customize/set-up-redirects)

### Data types

Set the minimum set of [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for Lending to `fetch on first link`. Each feature may also have additional data type requirements, so be sure to review these for the feature you want to use.

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. As a minimum, you need the following data types enabled:

| Data source | Accounting                                                                                                       | Banking                                                                                                         | Commerce                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Data types  | `company`<br/>`chartOfAccounts`<br/>`balanceSheet`<br/>`profitAndLoss`<br/>`bankAccounts`<br/>`bankTransactions` | `banking-accounts`<br/>`banking-transactions`<br/>`banking-transactionCategories`<br/>`banking-accountBalances` | `commerce-companyInfo`<br/>`commerce-customers`<br/>`commerce-orders` |

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency) on the same screen. We recommend setting it to a daily or a monthly sync.

### Webhooks

Codat supports a range of [event types](/using-the-api/webhooks/event-types) you can listen to that help you manage your data pipelines. Many of these events send a message for each `dataType` separately.

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Create consumer** and click **Add endpoint** to add a new [webhook consumer endpoint](/using-the-api/webhooks/overview) and get the most out of Lending:

- [`DataSyncStatusChangedToError`](/using-the-api/webhooks/event-types)

  This means an issue occurred when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again.

- [`Dataset data changed`](/using-the-api/webhooks/event-types)

  This means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

- [`Account categories updated`](/using-the-api/webhooks/event-types)

  This means categories associated with accounts have been updated for the [categorized profit and loss statement](https://docs.codat.io/lending-api#/operations/get-enhanced-profit-and-loss-accounts) and the [categorized balance sheet statement](https://docs.codat.io/lending-api#/operations/get-enhanced-balance-sheet-accounts) components.

## Use Lending

Before you can collect your SMB customer's data, you need to create a Codat [company](../terms/company) and connect it to a data source (for example, an accounting software). You can do that in two ways:

- In the [Codat Portal](https://app.codat.io) by navigating to **Companies > Create company**
- By calling the [Create company](/lending-api#/operations/create-company) endpoint of our API

Remember to [authenticate](/using-the-api/authentication) if you are making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.

To establish a connection to a data source and sync business data, your customer must grant you access. They can do so using our [Link auth flow](/auth-flow/overview) solution, which we recommend you use in your app.

Once the connection is established, Codat will retrieve data for the data types you have previously set up to fetch on first link. You can listen for the `NewCompanySynchronized` [event](/using-the-api/webhooks/event-types) to get notified once these initial syncs are complete, and at least one of them is successful.

<ul className="card-container col-2">
  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Underwriters</h3>
    </div>
    <p>
      Make use of our <a href="/lending/features/excel-download-overview">Excel export reports</a> to audit source data and perform underwriting with confidence.
    </p>
  </li>
  
  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Developers</h3>
    </div>
    <p>
      Interact with our <a href="/lending-api">Lending reference</a> to understand required body parameters, responses, and errors. Use our <a href="/get-started/libraries">client SDKs</a> to simplify your implementation journey.
    </p>
  </li>

  </ul>

### Client libraries

Use our comprehensive [Lending library](/get-started/libraries) to kick-start and simplify your build.
Simply install the library in one of the supported languages and pass your base64-encoded API key to the constructor.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

#### Install

##### NPM

```sh
npm add @codat/lending
```

##### Yarn

```sh
yarn add @codat/lending
```

#### Initialize

```javascript
import { CodatLending } from "@codat/lending";

const lendingClient = new CodatLending({
  security: {
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
  },
});
```

</TabItem>

<TabItem value="python" label="Python">

#### Install

```sh
pip install codat-lending
```

#### Initialize

```python
from codat_lending import CodatLending
from codat_lending.models import shared

lending_client = CodatLending(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)
```

</TabItem>

<TabItem value="csharp" label="C#">

#### Install

```sh
dotnet add package Codat.Lending
```

#### Initialize

```csharp
using Codat.Lending;
using Codat.Lending.Models.Shared;

var lendingClient = new CodatLending(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);
```

</TabItem>

<TabItem value="go" label="Go">

#### Install

```sh
go get github.com/codatio/client-sdk-go/lending
```

#### Initialize

```go
import (
	"context"
	lending "github.com/codatio/client-sdk-go/lending/v4"
	"github.com/codatio/client-sdk-go/lending/v4/pkg/models/operations"
	"github.com/codatio/client-sdk-go/lending/v4/pkg/models/shared"
	"log"
)

func main() {
	lendingClient := lending.New(
		lending.WithSecurity(shared.Security{
			AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
		}),
	)
}
```

</TabItem>

</Tabs>

<ReadNext
  links={[
    ["Bank statements", "/lending/features/bank-statements-overview"],
    ["Sales", "/lending/features/sales-overview"],
    ["Financial statements", "/lending/features/financial-statements-overview"],
    ["Liabilities", "/lending/features/liabilities-overview"],
    ["Accounts receivable", "/lending/features/accounts-receivable-overview"],
    ["Accounts payable", "/lending/features/accounts-payable-overview"],
  ]}
>
  <p>Explore the features that make up our Lending:</p>
</ReadNext>
