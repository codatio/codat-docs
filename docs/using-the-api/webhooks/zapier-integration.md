---
title: "Zapier integration (pre-release or maybe early sign up?)"
# sidebar_label: "Event types"
hide_table_of_contents: true
description: "Create your own workflows triggered by our webhooks"
---

[Zapier](https://zapier.com/) allows users to create automated workflows called Zaps.
Zap workflows contain actions that get executed by triggers. [Learn more](https://zapier.com/apps/email/integrations/triggerapp?utm_source=codat-docs) about Zaps. 
Actions allow users to automate a task such as sending an email or a message in slack.
Our integration provides triggers from our [webhook events](/using-the-api/webhooks/event-types).

Our Zapier integration is currently in pre-release (or maybe early sign up). We hope to have our application available as a public integration on Zapier soon.

### Prerequisites

You need the following to build your own workflows:

- A Zapier account or [create one for free](https://zapier.com/sign-up).
- Access to our pre-release Zapier app. Invite yourself [here](https://zapier.com/developer/public-invite/202044/c35843349a2aa85193b9f9ec6a9556e7/?utm_source=codat-docs).
- You have Admin or Developer access to your Codat instance.

### Set up your trigger

Follow the steps below to create your own Zapier workflow:

1. Go to [Zapier](https://zapier.com/app/zaps).
2. Select **Create > Zaps** and give it an appropriate name.
3. Select **Trigger** and search for 'Codat'.
4. Choose the event you want to trigger the workflow and press continue.
5. Select **Sign in** and connect to Codat using your Client ID and Zapier integration key.

#### Get your client ID

Go to the [portal](https://app.codat.io/) and copy your client ID from the client selection dropdown.

![Image](/img/use-the-api/webhooks-zapier-integration-client-selector.png)

#### Get your Zapier integration key

To access your integration key you need an API key to securely retreive your key. Enter the [portal](https://app.codat.io/developers/api-keys) and go to **Developers > API keys**. Select or create an API key and copy the Authorization header.

![Image](/img/use-the-api/webhooks-zapier-integration-api-key.png)

Next, visit our [API reference](https://docs.codat.io/platform-api#/operations/get-zapier-key) and in **Webhooks > Get zapier key**, paste the Authorization header into Authorization field and press **Send API Request**.

Finally, use the `key` return in the response body as your Zapier integration key.

![Image](/img/use-the-api/webhooks-zapier-integration-get-key.png)

### Select an Action

Zapier offers hundreds of actions to add to your workflow.
We suggest using either email or slack messaging services. 

#### Email notification

@Max and @Polina: In the long term, we can make pre-built workflows for clients to use in Zapier. Also, video her might be nice?

Select **Action** and search for 'Email by Zapier'

![Image](/img/use-the-api/webhooks-zapier-integration-email-by-zapier.png)

Then, set Event to 'Send Outbound Email' and press **Continue**.

![Image](/img/use-the-api/webhooks-zapier-integration-send-outbound-email.png)

Finally, create your email, test and publish your Zap.

![Image](/img/use-the-api/webhooks-zapier-integration-construct-email.png)

#### Slack message

Zapier's Slack integration provides numerous ways of communicating with Slack. In this guide we use 'Send Channel Message'.

Select **Action** and search for 'Slack'

![Image](/img/use-the-api/webhooks-zapier-integration-slack.png)

Choose an event from the available options and press **Continue**. If this is your first time using slack you will be asked to authenticate your account. Otherwise, you can either use the account signed in already or sign-in to a different one. Once complete press **Continue**.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-event.png)

Setup the action by searching for a channel you want to send a message. Select a channel.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-channel.png)

Then, write your message

![Image](/img/use-the-api/webhooks-zapier-integration-slack-construct-message.png)

Before testing, and publishing your Zap. 

![Image](/img/use-the-api/webhooks-zapier-integration-slack-published-message.png)

## Troubleshooting

If you are using our webhooks service for the first time you may not be able to test your trigger at creation. This is because Zapier tests the trigger by checking if messages exist in Codat for the chosen event type. If you want to test, finish building your workflow, and publish. Zapier will generate a new webhook consumer in Codat, including a description of the event type to which the trigger subscribes. Follow [these](/using-the-api/webhooks/create-consumer#test-a-webhook-consumer) to test the Zapier webhook consumer. Alternatively, you can wait for a Codat product or service to trigger a Zap.