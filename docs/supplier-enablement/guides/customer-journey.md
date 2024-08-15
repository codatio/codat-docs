---
title: "Understand your customer's journey"
sidebar_label: Customer journey
description: "Review the steps your customer goes through when sharing their financial and spend information"
---

import ReadNext from "@components/global/ReadNext";

## Overview

Our [Relationship Portal](https://relationships.codat.io/) is your one-stop shop to view the clients and relationships you are responsible for. Here, your organization's clients are represented as [companies](../../terms/company). 

In this guide, you will see the connection journeys your customer goes through when you send them a business data request. 

## Initial business data request

When you initiate a request for your customer's business data, you can ask them for one or both of these types of data:

- **Financials**, which includes a profit and loss statement and a balance sheet statement enriched with our [categorization](/lending/features/financial-statements-overview#categorized-financial-accounts) feature.

- **Spend analysis**, which provides accounts payable and supplier information to the level of individual transactions, payment methods, terms, etc.

We provide detailed guidance on requesting this data in our [Request information](/supplier-enablement/guides/manage-relationships) guide.

Once you submit the information request, your customer will receive an email that will prompt them to authorize your access to their data. The content of this email will differ based on the type of data you selected.

For any type of information you requested, they will need to follow a [software connection journey](/supplier-enablement/guides/customer-journey#software-connection-journey). If you requested spend analysis data, the customer will also go through [multi-entity journey](/supplier-enablement/guides/customer-journey#multi-entity-connection-journey) steps.

| Requested data type  | Software connection journey | Multi-entity journey |
|----------------------|-----------------------------|----------------------|
| Financials only      | ✔️                           | ❌                    |
| Spend analysis only           | ✔️                           | ✔️                    |
| Financials and spend analysis| ✔️                           | ❌                    |

## Connection journey overview

You can see how multi-entity steps and software connection steps relate to each other on the diagram below.

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0101-se-customer-journey-diagram.png)

Next, let's review the details of these journeys.

### Multi-entity journey

Your customer will receive an email when you request **spend analysis data** from them. To connect, they need to: 

1. Click the link provided in the email. The link will take the customer to the initial supplier information provision screen.

    Alternatively, you can share this link with the customer directly. Choose **Copy link** instead of **Request by email** when requesting business information. You can learn more in our [Request information](/supplier-enablement/guides/manage-relationships) article.

2. Choose the way they want to provide business data. 

    The customer can upload the data manually or connect their accounting software.

3. If **Upload file manually** is selected, upload the data manually.

    Customer should download the supplier information template, fill it with their business data, and upload it on the _Manual upload_ screen.

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0104-customer-journey-123.png)

:::tip Missing features?

Don't see the **Copy link** button, manual file upload option, or the multi-entity flow? It is possible these functions weren't enabled for your Relationship Portal. Speak to your Codat contact to discuss enabling these.

:::

If the customer selects the **Connect platform** option to connect their accounting software, they will go through the multi-entity steps:

1. Choose the number of legal entities in the organization.

    If a single entity is selected, the customer will move on to the [software connection steps](/supplier-enablement/guides/customer-journey#software-connection-journey).

2. Provide the name of the legal entity.

    Once an entity is added, the customer will move on to the [software connection steps](/supplier-enablement/guides/customer-journey#software-connection-journey) for the specified entity. Once connected, they will return to the entity flow to complete the next step.

3. Add another legal entity, if required.

    If the customer adds another entity, they will repeat the previous step for this entity. Alternatively, they can choose to finish the flow.

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0105-customer-journey-456.png)

Once the customer finishes the flow, they will see a summary view of their information request. Here, they can check the status of their request.

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0106-information-request.png)

In the Relationship Portal, you will see all the newly added entities and their information provision status. 

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0107-rm-multientity.png)

### Software connection journey



The information request email your client receives contains a call-to-action button that initiates 

will contain a call-to-action button 

For any type of information you requested, your customer will have to authorize a connection to their accounting software. This will allow you to see their business data via Codat's Relationship Portal. 




Regardless of the information type you requested, your customer will always have to go through the software connection journey to allow you to see their business data via Codat's Relationship Portal. 

They will receive a request email with a call-to-action that 

The information request email auto-sent to 

there will be a button

The content of the email will differ depending on the information type you selected.

they will press a button. This will initiate Codat's Link flow. the look, feel, and content of the flow will depend on the settings selected by your organization. 

in the flow, the customer will choose their software that they are going to let us access. They will then be redirected to that software to provide their credentials and authorize our access. 

1. blable

2. blable

3. On the file upload screen, the customer can download the supplier information template and upload it 

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0108-platform-123.png)

1. blable

2. blable

3. On the file upload screen, the customer can download the supplier information template and upload it 

![A diagram of customer journey steps when following a single or multi-entity flow depending on the type of data requested](/img/supplier-enablement/0109-platform-45.png)

link to status changes and downloading resulting reports








<ReadNext
  links={[
    ["Supplier Enablement overview", "/supplier-enablement/overview", ],
  ]}
>
</ReadNext>