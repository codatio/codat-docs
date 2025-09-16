---
title: "Get started with Bill Pay solution"
sidebar_label: Configure solution
description: "View the core steps required to perform the initial setup for the Bill Pay solution"
image: "/img/banners/social/payables.png"
---

import { IntegrationsList } from "@components/Integrations";
import { integrationsFilterBillPayAsync } from "@components/Integrations/integrations";
import { integrationsFilterBillPaySync } from "@components/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Journey overview

The diagram below represents the overall activity flow when using Bill Pay. You can manage bills, suppliers, and payment methods in different ways and order.

We will take you through each of these elements so that you can build the flow that suits you and your customers best.

![Accounts payable process flow including customer steps](/img/payables/payables-process-flow.png)

Once you decide to build with Bill Pay, you need to configure Codat accordingly. Let's go through these requirements in detail.

## Enable Bill Pay

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Settings > Organizational settings > Products**.
3. In the list of products, find the relevant version of _Bill Pay_ (async or sync) and click **Enable**. Then, follow the on-screen prompt.

## Configure Bill Pay

### Data types

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. Enable the [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for Bill Pay and set them to `Fetch on first link`:

| Data source | Bill Pay (async)                                                                                                                                                                              | Bill Pay (sync)                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Accounting  | `bankAccounts`<br/> `bills`<br/> `billCreditNotes`<br/> `billPayments`<br/> `chartOfAccounts`<br/> `company`<br/> `paymentMethods`<br/> `suppliers`<br/> `taxRates`<br/> `trackingCategories` | `bankAccounts`<br/> `bills`<br/> `billPayments`<br/> `chartOfAccounts`<br/> `company`<br/> `paymentMethods`<br/> `suppliers`<br/> |

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency) on the same screen. We recommend setting it to a daily or a monthly sync.

### Manage data sources

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations** and click **Manage integrations**. Next, click **Manage** next to the specific integration you want to enable and set it up to serve as a data source for the solution.

You can also view detailed configuration instructions by clicking on the relevant tile:

#### Integrations supported by async Bill Pay

<IntegrationsList filter={integrationsFilterBillPayAsync} />

#### Integrations supported by sync Bill Pay

<IntegrationsList filter={integrationsFilterBillPaySync} />

### Authorization flow

As part of using Bill Pay, you will need your customers to authorize your access to their data. To do so, use [Link](/auth-flow/authorize-embedded-link) - our pre-built, embeddable, conversion-optimized, and white-labeled authorization flow.

The solution lets you tailor the authorization journey to your business needs. You can:

- [Customize Link settings](/auth-flow/customize/customize-link).
- [Set up company branding](/auth-flow/customize/branding).
- [Set up redirects](/auth-flow/customize/set-up-redirects).

### Webhooks

Codat supports a range of [event types](/using-the-api/webhooks/event-types) you can listen to that help you manage your data pipelines. In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Configure consumer** and click **Add endpoint** to add webhook consumer endpoints, or learn more about the [Webhook service at Codat](/using-the-api/webhooks/overview).

We recommend listening to the following [event types](/using-the-api/webhooks/event-types) to make the most of Bill Pay:

- `read.completed.initial`

  Listen to this event to track the completion of the _initial_ read of data types for a specific company. When you receive a message from this webhook, verify the payload before proceeding to the next steps of the bill pay process.

- `read.completed`

  This event indicates the read of data types has completed. This applies both to reads of changes to existing data and reads of new data records. You should then refresh the data in your platform.

- `bill.write.successful` and `bill.write.unsuccessful`

  Listen to these events to track the completion of the bill pay operation in the SMB's accounting software.

You may also want to listen to `client.rateLimit.reached` and `client.rateLimit.reset` events to track your request count to Codat's API in relation to your allocated quota.

### Client libraries

Use our comprehensive [Bill Pay libraries](/get-started/libraries) to kick-start and simplify your build. Simply install the library in one of the supported languages and pass your base64-encoded API key to the constructor.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

#### Install

##### NPM

```sh
npm add @codat/sync-for-payables
```

##### Yarn

```sh
yarn add @codat/sync-for-payables
```

#### Initialize

```javascript
import { CodatSyncPayables } from "@codat/sync-for-payables";

const payablesClient = new CodatSyncPayables({
    authHeader: "Basic BASE_64_ENCODED(API_KEY)",
});
```

</TabItem>

<TabItem value="python" label="Python">

#### Install

```sh
pip install codat-sync-payables
```

#### Initialize

```python
from codat_sync_for_payables  import CodatSyncPayables
from codat_sync_for_payables .models import operations, shared

payables_client = CodatSyncPayables(
    security=shared.Security(
        auth_header="Basic BASE_64_ENCODED(API_KEY)",
    ),
)
```

</TabItem>

<TabItem value="csharp" label="C#">

#### Install

```sh
dotnet add package Codat.Sync.Payables
```

#### Initialize

```csharp
using Codat.Sync.Payables;
using Codat.Sync.Payables.Models.Shared;
using Codat.Sync.Payables.Models.Operations;

var payablesClient = new CodatSyncPayables(authHeader: "Basic BASE_64_ENCODED(API_KEY)");
```

</TabItem>

<TabItem value="go" label="Go">

#### Install

```sh
go get github.com/codatio/client-sdk-go/sync-for-payables
```

#### Initialize

```go
import (
	"context"
	syncforpayables "github.com/codatio/client-sdk-go/sync-for-payables/v2"
	"github.com/codatio/client-sdk-go/sync-for-payables/v2/pkg/models/shared"
)

func main() {
	payablesClient := syncforpayables.New(
		syncforpayables.WithSecurity(shared.Security{
			AuthHeader: "Basic BASE_64_ENCODED(API_KEY)",
		}),
	)
}
```

</TabItem>

</Tabs>

:::tip Recap

You have enabled Bill Pay, set up the relevant integrations, configured auth flow parameters, and noted the recommended webhooks. This completes the initial setup of the solution.

Next, you will create a company and its connection to build out the core infrastructure required to manage accounts payable with Codat.

:::

---

## Read next

- [Set up your SMB customer](/payables/configure-customer) for Bill Pay's solution to continue building your AP management process.
- Check out our [client libraries](/get-started/libraries) to kickstart your Bill Pay build.
