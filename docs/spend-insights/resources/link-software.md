---
title: "Continuous data streaming"
sidebar_label: "Data streaming"
description: "Support your customer in authorizing ongoing access to data in their accounting software"
displayed_sidebar: spendInsights
---

import { IntegrationsList } from "@components/Integrations";
import { spendInsightsDirectIntegrations } from "@components/Integrations/integrations";

You can get real-time access to your customer's data and most up-to-date insights if they authorize a digital connection between Codat and their accounting software.

## Connection journey

During [customer onboarding](/spend-insights/guides/onboard-customer), you shared a **Link URL** with them that initiates a digital connection journey. This journey consists of the following steps:

1. Customer clicks on the Link URL and is directed to the software selection screen.
2. Customer searches for and selects the software they wish to connect.
3. Customer reviews the details of data they are sharing and initiates the connection.

   This opens the customer's software in a new tab. They need to alternate between the software tab and the connection journey tab to complete the process.

4. Customer logs into the software and approves the data sharing request.

   The customer's credentials remain secure and aren't shared with Codat or your organization.

5. When the connection is confirmed, customer is prompted to complete and exit the flow.

## Software guides

**Spend Insights** supports continuous data streaming with the software listed below. To ensure a successful connection, we provide access instructions for all of these platforms. Some of them are more complex than others, so their connection journeys take more time.

Click on the software tile to access step-by-step connection instructions or visit our [Help Hub](https://help.codat.io). You can share the guides with your customer or use the instructions to provide in-person or on-call support.

:::tip Customer checklist

When prompting the customer to establish a digital connection, let them know that:

- They will need to follow the Link URL you shared with them.
- They will need to have Administrator access or equivalent within their accounting software.
- They will need to share their screen with you if they request on-call support.

You can also proactively share [answers to common questions](/spend-insights/resources/customer-faqs) with them.

:::

<IntegrationsList integrations={spendInsightsDirectIntegrations} />
