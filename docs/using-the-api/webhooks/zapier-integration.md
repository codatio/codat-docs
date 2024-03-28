---
title: "Zapier integration (pre-release or maybe early sign up?)"
# sidebar_label: "Event types"
hide_table_of_contents: true
description: "Create your own Zaps triggered by our webhook event types"
---

[Zapier](https://zapier.com/) allows users to create automated workflows called Zaps.
Our integration provides triggers that set off actions in Zapier.
Actions allow users to automate a task such as sending an email or writing a message in slack.

Our Zapier integration is currently in pre-release (or maybe early sign up). We hope to have our application available as a public integration soon.

### Prerequisites

You need the following to build your own workflows:

- A Zapier account or [create one for free](https://zapier.com/sign-up).
- Access to our pre-release Zapier app. Invite yourself [here](https://zapier.com/developer/public-invite/202044/c35843349a2aa85193b9f9ec6a9556e7/).
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

#### Get your integration key

To access your integration key enter the [portal](https://app.codat.io/developers/api-keys) and go to **Developers > API keys**. Select or create a key and copy the Authorization header.

![Image](/img/use-the-api/webhooks-zapier-integration-api-key.png)

Next, visit our [Platform API reference](https://docs.codat.io/platform-api#/operations/get-zapier-key) and under **Webhooks > Get zapier key**, paste the Authorization header into Authorization and press **Send API Request**.

Finally, use the `key` from the response body as your Zapier integration key.

![Image](/img/use-the-api/webhooks-zapier-integration-get-key.png)

### Select an Action

Zapier offers hundreds of actions to add to your workflow.
We suggest using either email notifications or slack messages to be triggered by our webhooks. 

#### Email notification

@Max and @Polina: In the long term, we can make pre-built workflows for clients to use in Zapier. Also, video her might be nice?

Select *Action* and search for 'Email by Zapier'

![Image](/img/use-the-api/webhooks-zapier-integration-email-by-zapier.png)

Then, set Event to 'Send Outbound Email' and press *Continue*.

![Image](/img/use-the-api/webhooks-zapier-integration-send-outbound-email.png)

Finally, configure you email, test and publish your Zap.

![Image](/img/use-the-api/webhooks-zapier-integration-construct-email.png)

#### Slack message

Zapier's Slack integration provides numerous ways of communicating with Slack. In this guide we use 'Send Channel Message'.

Select *Action* and search for 'Slack'

![Image](/img/use-the-api/webhooks-zapier-integration-slack.png)

Choose an event from the available options and press *Continue*. If this is your first time using slack you will be asked to authenticate your account. Otherwise, you can either use the account signed in already or sign-in to a different one. Once complete press continue.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-event.png)

Setup the action by searching for a channel you want to send a message. Select a channel.

![Image](/img/use-the-api/webhooks-zapier-integration-slack-select-channel.png)

Then, construct a message

![Image](/img/use-the-api/webhooks-zapier-integration-slack-construct-message.png)

Before testing, and publishing your Zap. 

![Image](/img/use-the-api/webhooks-zapier-integration-slack-published-message.png)

## Troubleshooting

If you are new to using our webhooks you will need to create some test messages for Zapier to verify your integration is working. Learn how to test a webhook consumer [here](webhooks-zapier-integration-email-by-zapier). We advise creating a single endpoint to `https://example.com` and sending different event types you want Zapier trigger from.