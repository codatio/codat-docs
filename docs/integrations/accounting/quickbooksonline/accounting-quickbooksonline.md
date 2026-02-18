---
title: "QuickBooks Online"
description: "Learn about our QuickBooks Online integration."
---

You can synchronize accounting data with <a className="external" href="https://quickbooks.intuit.com/uk/online/" target="_blank">QuickBooks Online</a> using our QuickBooks Online integration.

For more details about the supported data types and operations, see [QuickBooks Online integration reference](/integrations/accounting/quickbooksonline/quickbooks-online-integration-reference).

:::tip Supplemental data
This integration supports the ability to include additional fields within our standard data types when fetching, creating or updating records. Read more about [supplemental data](/using-the-api/supplemental-data/overview) and how you can read it for this integration.
:::

## Set up the integration

See [Set up the QuickBooks Online integration](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup) to learn how to set up and enable the integration.

## Intuit App Partner Program

Intuit's [App Partner Program](https://blogs.intuit.com/2025/05/15/introducing-the-intuit-app-partner-program/) supports providers of applications built on Intuit's platform with higher security standards, early access to new features, and more reliable data synchronization.

If you plan to publish an app in the QuickBooks ecosystem, you must register with the partner program and fill in the app assessment questionnnaire. We created an [App assessment questionnaire guide](/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire) to help you answer its questions.

#### Tiered usage model

The Intuit App Partner Program operates a tiered usage model. Under this model, Intuit classifies API calls into two categories:

- Core API calls - free and unlimited routine tasks, such as creating or updating invoices, bills, and customers
- CorePlus API calls - data-heavy tasks, such as running reports or retrieving deep historical data

The [API classification for the Intuit App Partner Program](https://help.developer.intuit.com/s/article/API-classification-for-the-Intuit-App-Partner-Program) article explains how API calls are classified into Core and CorePlus.

:::caution Track API call usage to avoid extra charges

Each tier is allocated a monthly limit of CorePlus API calls, and exceeding this limit may result in additional charges. Track your app's usage of API calls to avoid this.

:::

#### Track usage

To avoid unexpected costs, track your app's usage of API calls following these steps:

1. Log in to the [Intuit Developer Portal](https://developer.intuit.com/dashboard?tab=apps).
2. Navigate to the _App dashboard_ and select the app you want to review.
3. In the left-hand menu, click **Analytics**.
4. In _Analytics_, toggle the environment to **Production**. You will see a chart detailing your Core and CorePlus usage.

#### Optimize usage

Optimizing your API call usage may reduce the overall fees owed to Intuit. We recommend the following:

- Limit the number of data refresh requests built into your product.
- Adjust the frequency of data type syncs to our recommended levels.

If you have questions about optimization, reach out to your Account Manager.

## Additional information

- [QuickBooks Online FAQ](/integrations/accounting/quickbooksonline/faq-quickbooks-online)
- [QuickBooks Online integration reference](/integrations/accounting/quickbooksonline/quickbooks-online-integration-reference)
- [Intuit App Partner Program](https://blogs.intuit.com/2025/05/15/introducing-the-intuit-app-partner-program/)
- [App assessment questionnaire guide](/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire)
