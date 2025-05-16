---
title: "Intelligent file upload"
sidebar_label: "Intelligent file upload"
description: "Help your customer provide their spend data using Codat's intelligent file upload"
displayed_sidebar: spendInsights
---

import { IntegrationsList } from "@components/Integrations";
import { spendInsightsDirectIntegrations, spendInsightsFileUpload } from "@components/Integrations/integrations";

Your customer may be using a software that doesn't have a direct integration with Codat. Instead, guide your customers through a straightforward, low-effort process to obtain and upload their supplier and bill information for insightful spend analysis and card offers.

## Connection journey

During [customer onboarding](/spend-insights/guides/onboard-customer), you shared a **Link URL** with them that initiates a file sharing journey. This journey consists of the following steps: 

1. Customer clicks on the Link URL and is directed to the software selection screen. 
2. Customer searches for and selects the software they wish to connect. 

    ![User interface of Codat's Link flow with the Workday file upload integration selected.](/img/spend-insights/si-file-upload-selection.png)

3. Customer reviews the details of data they are sharing and initiates the connection.

    ![User interface of Codat's Link flow with the consent screen that lists the data that will be shared.](/img/spend-insights/si-file-upload-disclaimer.png)

4. Customer is informed of the file collection and upload process. They will alternate between their software and the upload journey to complete the process.

    ![User interface of Codat's Link flow with the disclaimer screen that explains the file sharing process.](/img/spend-insights/si-file-upload-process.png)

5. Customer follows on-screen instructions to obtain and upload the _Suppliers_ report from their software.

    ![User interface of Codat's Link flow with the Suppliers file upload process displayed.](/img/spend-insights/si-file-upload-suppliers-upload.png)

6. Customer follows on-screen instructions to obtain and upload the _Bills_ report from their software.

    ![User interface of Codat's Link flow with the Bills file upload process displayed.](/img/spend-insights/si-file-upload-bills-upload.png)

7. Customer completes the intelligent file upload journey once both files are uploaded.

    ![User interface of Codat's Link flow with the file upload process completion displayed.](/img/spend-insights/si-file-upload-complete.png)

:::tip Customer checklist

When prompting the customer to share their files, let them know that:

- They will need to follow the Link URL you shared with them.
- They will need to have Administrator access or equivalent within their accounting software.
- They will need to share their screen with you if they request on-call support.

You can also proactively share [answers to common questions](/spend-insights/resources/customer-faqs) with them.

:::

## Software support

Codat's **Spend Insights** solution can ingest files with supplier and bill data from the software listed below to prepare the spend analysis. The file upload process is identical across these platforms.

<IntegrationsList integrations={spendInsightsFileUpload} />