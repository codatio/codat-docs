---
title: "Zapier integration"
# sidebar_label: "Event types"
hide_table_of_contents: true
description: "Create your own Zaps triggered by our webhooks event types"
---

Zapier allows users to create automated workflows called Zaps.
Our integration provides triggers that set off actions in Zapier.
Actions allow users to automate a task such as sending an email or writing a message in slack.

### Prerequisites

You need the following to build your own workflows:

- A Zapier account or [create one for free](https://zapier.com/sign-up).
- You have Admin or Developer access to your Codat instance.

### Set up your trigger

Follow the steps below to create your own Zapier workflow:

1. Go to [Zapier](https://zapier.com/app/zaps).
2. Select **Create > Zaps** and give it an appropriate name.
3. Select **Trigger** and search for 'Codat'.
4. Choose the event you want to trigger the workflow and press continue.
5. Select **Sign in** and connect to Codat using your Client ID and Zapier integration key.

#### Get your client ID

Go to the [portal](https://app.codat.io/) and copy your client ID from the client selector pane.

![Image](/img/use-the-api/webhooks-zapier-integration-client-selector.png)

#### Get your integration key

To access your integration key enter the [portal](https://app.codat.io/developers/api-keys) and go to **Developers > API keys**. Select or create a key and copy the Authorization header.

![Image](/img/use-the-api/webhooks-zapier-integration-api-key.png)

Next, visit our [Platform API reference](https://docs.codat.io/platform-api#/operations/get-zapier-key) and under **Webhooks > Get zapier key**, paste the Authorization header into Authorization and press **Send request**.

Finally, use the `key` from the response body as your Zapier integration key.

![Image](/img/use-the-api/webhooks-zapier-integration-get-key.png)

### Select an action

Zapier offers hundreds of actions to add to your workflow.
We suggest using either email notifications or slack messages to be triggered by our webhooks. 

#### Email notification




#### Slack message



<!-- 5. Define the action you want to perform. -->

