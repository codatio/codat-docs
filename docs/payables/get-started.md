---
title: "Get started with Sync for Payables"
sidebar_label: Get started
description: "View the core steps required to perform the initial setup for Sync for Payables"
image: "/img/banners/social/payables.png"
---

import { IntegrationsList } from "@components/global/Integrations";
import { integrationsFilterPayables } from "@components/global/Integrations/integrations";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Journey overview

The diagram below represents the overall activity flow when using Sync for Payables. You can manage bills, suppliers, and payment methods in different ways and order. 

We will take you through each of these elements so that you can build the flow that suits you and your customers best.

![Accounts payable process flow including customer steps](/img/payables/payables-process-flow.png)

Once you decide to build with Sync for Payables, you need to configure Codat accordingly. Let's go through these requirements in detail.

## Enable Sync for Payables

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Settings > Organizational settings > Products**.
3. In the list of products, find _Sync for Payables_ and click **Enable**. Then, follow the on-screen prompt.

## Configure Sync for Payables

### Data types

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. Enable the [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for Sync for Payables and set them to `fetch on first link`: 

| Data source | Accounting                                                                                                                                                                     |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Data types  | `bankAccounts`<br/> `bills`<br/> `billCreditNotes`<br/> `billPayments`<br/> `chartOfAccounts`<br/> `paymentMethods`<br/> `suppliers`<br/> `taxRates`<br/> `trackingCategories` |

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency) on the same screen. We recommend setting it to a daily or a monthly sync.

### Manage data sources

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations** and click **Manage integrations**. Next, click **Manage** next to the specific integration you want to enable and set it up to serve as a data source for the product. 

You can also view detailed configuration instructions by clicking on the relevant tile:

<IntegrationsList filter={integrationsFilterPayables} />

### Authorization flow

As part of using Sync for Payables, you will need your customers to authorize your access to their data. To do so, use [Embedded Link](/auth-flow/authorize-embedded-link) - our pre-built, embeddable, conversion-optimized, and white-labeled authorization flow.

The solution lets you tailor the authorization journey to your business needs. You can:

* [Customize Link settings](/auth-flow/customize/customize-link).
* [Set up company branding](/auth-flow/customize/branding).
* [Set up redirects](/auth-flow/customize/set-up-redirects).

### Webhooks

Codat supports a range of [event types](/using-the-api/webhooks/event-types) you can listen to that help you manage your data pipelines. In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Configure consumer** and click **Add endpoint** to add [webhook consumer endpoints](/using-the-api/webhooks/create-consumer) and get the most out of Sync for Payables:

- [NewCompanySynchronized](/using-the-api/webhooks/event-types)

  Listen to this event to track the completion of all enabled data type syncs for a newly connected company. When you receive a message from this webhook, you can proceed to the next steps of the bill pay process. 

- [DataSyncCompleted](/using-the-api/webhooks/event-types)

  This event indicates that a data sync is successfully completed for a specific data type. You can use your webhook consumer to track retrieval of suppliers, bills or bank accounts as part of the accounts payable process.

- [DatasetDataChanged](/using-the-api/webhooks/event-types)

  If you receive a message from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

- [PushOperationStatusChanged](/using-the-api/webhooks/event-types)  

  Listen to this event to track the completion of the operation to pay bills in the SMB's accounting platform. When you receive a message from this webhook, check the `status` value in the body. A `Success` status means the bill payment or the bill credit note has been successfully pushed to the accounting software.

### Client libraries
Use our comprehensive [Sync for Payables library](/get-started/libraries) to kick-start and simplify your build. Simply install the library in one of the supported languages and pass your base64-encoded API key to the constructor.

<Tabs>

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
        security: {
            authHeader: "Basic BASE_64_ENCODED(API_KEY)",
        },
    });
```

</TabItem>

<TabItem value="python" label="Python">

#### Install

```sh
pip install codat-sync-for-payables
```

#### Initialize

```python
import codatsyncpayables
from codatsyncpayables.models import operations, shared

payables_client = codatsyncpayables.CodatSyncPayables(
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

var payablesClient = new CodatSyncPayables(
    security: new Security() {
        AuthHeader = "Basic BASE_64_ENCODED(API_KEY)",
    }
);
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

You have enabled Sync for Payables, set up the relevant integrations, configured auth flow parameters, and noted the recommended webhook. This completes the initial setup of the product.

Next, you will create a company and its connection to build out the core infrastructure required to manage accounts payable with Codat.

:::

--- 

## Read next

* Check out our [client libraries](/get-started/libraries) to kick start your Sync for Payables build.
* [Configure customer](/payables/configure-customer) to continue building your accounts payable management process.