---
title: "Zapier integration (beta)"
# sidebar_label: "Event types"
# hide_table_of_contents: true
description: "Create your own notification workflows triggered by our webhooks"
---

## Overview

The Codat [Zapier](https://zapier.com/) app exposes all of the [Codat webhooks](/using-the-api/webhooks/event-types) as *triggers*. This means you can start building workflows on top of Codat without writing a line of code.

Some simple use cases might include:
- Posting a message on Slack or via email whenever a new Company has shared data.
- Posting a message when sync errors occur.
- Adding companies that you onboard to a spreadsheet automatically.

This integration will be in beta in 9 July 2024.

## What is Zapier?

[Zapier](https://zapier.com/apps/Codat/integrations) lets you connect Codat to 2,000+ other web services. Automated connections called Zaps, set up in minutes with no coding, can automate your day-to-day tasks and build workflows between apps that otherwise wouldn't be possible.

Each Zap has one app as the **Trigger**, where your information comes from and which causes one or more **Actions** in other apps, where your data gets sent automatically.


There are two parts to a 'Zap' automation:
- *Triggers* (If X happens in Source A...)
- *Actions* (...do Y in Target B)

With our Zapier app, you can use our webhook events as triggers and drive actions in all of the tools you use - from Google Sheets to SalesForce.

:::tip Learn more
You can learn more about Zaps in Zapier's [own documentation](https://zapier.com/apps/email/integrations/triggerapp?utm_source=codat-docs).
:::

## Prerequisites

To build your own workflows, you need:

- **A Zapier account** -  you can [create one for free](https://zapier.com/sign-up).
- **Admin or Developer access** to your Codat instance.

## Create your workflow

Go to [Zapier](https://zapier.com/app/zaps) and follow the steps below to create your own workflow. 

<script src="https://zapier.com/zapbook/embed/widget.js?services=Codat&container=true&limit=5,"></script>

### Set up the trigger

1. In [Zapier](https://zapier.com/app/zaps), select **Create > Zaps** to start a new Zap and give it an appropriate name.

2. Click **Trigger** to select an event that starts your Zap, search for _Codat_ and click the tile to select.

3. Choose the _Receive Webhook Messages_ trigger from the **Event** dropdown. 

4. Click **Continue**, then **Sign in** and connect to Codat using your Client ID and Zapier integration key.

  To copy your **Client ID**, use the client selection dropdown in the [Codat Portal](https://app.codat.io/).
  ![Image](/img/use-the-api/webhooks-zapier-integration-client-selector.png)

  To get your **Zapier integration key**:
    - Grab your authorization header from **Developers > API keys** in the [Codat Portal](https://app.codat.io/). You can use an existing API key or create a new one specifically for this integration.
    - Using our [Rotate Zapier key](https://docs.codat.io/platform-api#/operations/rotate-zapier-key) endpoint, paste the authorization header into the `Authorization` field and press **Send API Request**.
    - Use the `key` returned in the response body as your Zapier integration key.

  :::caution Multi-user limitations
  For each Codat instance, you can only have one live Zapier integration key. Generating a new key invalidates the previous one. To overcome this, you can: 
    - Have a single user manage your Zapier integration.
    - Add your key to a secure password storage provider and share the key in your team. 
  :::

5. Choose the webhook event type you want to trigger the workflow and click **Continue**.

6. Test the trigger and click **Continue with selected record** once the test is successful.
   
   If you see that no messages exist in Codat matching the event type, you may need to create some test events first. You can skip this for now and return to this step later once you've fired some corresponding webhook events. See [Troubleshooting](#troubleshooting) for more.

### Set up the action

Click **Action** to select an event that Zap performs after the workflow starts. While Zapier offers hundreds of actions, we suggest starting with their email or Slack messaging services.

#### Email notification

1. In the action selection pop-up, search for _Email by Zapier_ and click the tile to select.

  ![Image](/img/use-the-api/webhooks-zapier-integration-email-by-zapier.png)

2. Choose the _Send Outbound Email_ action from the **Event** dropdown and click **Continue**.

  ![Image](/img/use-the-api/webhooks-zapier-integration-send-outbound-email.png)

3. Enter the action details, including the email address for the notifications and the subject and body of the email. Click **Continue**.
  ![Image](/img/use-the-api/webhooks-zapier-integration-construct-email.png)

4. Finally, test and publish your Zap.

#### Slack message

Zapier's Slack integration provides numerous ways of communicating with Slack. In this example, we chose to set up a Zap that sends a message to a specified channel. 

1. In the action selection pop-up, search for _Slack_ and click the tile to select.

  ![Image](/img/use-the-api/webhooks-zapier-integration-slack.png)

2. Choose the _Send channel message_ action from the **Event** dropdown and click **Continue**. Alternatively, choose an action that is relevant for your use case.

  If this is your first time using Slack, you will be asked to authenticate your account. Once ready, click **Continue**. 
  ![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-event.png)

3. Search for the channel you want to receive the message and select it.

  ![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-channel.png)

4. Create the message text that the channel should receive. Click **Continue**.

  ![Image](/img/use-the-api/webhooks-zapier-integration-slack-construct-message.png)

5. Finally, test and publish your Zap.

  ![Image](/img/use-the-api/webhooks-zapier-integration-slack-published-message.png)

## Troubleshooting

If you are using our webhooks service for the first time, you may not be able to test your trigger at creation. This is because Zapier tests the trigger by checking if messages exist in Codat for your chosen event type, and it will only pick up relevant events once the trigger has been set up for the first time. 

For example, if you're using the [NewCompanySynchronized](/using-the-api/webhooks/event-types) as a trigger, you'd have to have set up the trigger and then have a new company sync happen.

To perform the test, build and publish your workflow first. Zapier will generate a new webhook consumer in Codat, including a description of the event type to which the trigger subscribes. Follow [our testing instructions](/using-the-api/webhooks/create-consumer#test-a-webhook-consumer) to test the Zapier webhook consumer.

Alternatively, you can wait for a Codat product or service to trigger your Zap.
