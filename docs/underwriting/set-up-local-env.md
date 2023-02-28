---
title: "Set up your local environment"
description: "Write a description"
---

Before you can run the demo underwriting app, you will need to set up your local environment. 

## Prerequisites

You need to install the following:

- .NET version 7.0 or higher
- [ngrok](https://ngrok.com/) (optional)

   ngrok is a free tool for exposing services from a local server to the public Internet. You can use a different tool or method to do this, if you prefer. 

You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

## Configure ngrok to allow the demo app to access Codat's webhooks

If using ngrok to expose the demo app, perform these steps:

1. Go to the root directory where ngrok is installed.

2. Open the `ngrok.exe` file to launch the ngrok terminal.

3. Configure your local machine to receive web traffic on port 5069. The demo app is configured to listen for Codat's webhooks on this port.

   ```bash
   .\ngrok.exe http 5069
   ```   

4. ngrok starts a new session. Copy the **forwarding address**; for example, `https://aa111-bb222-cc333-dd444.eu.ngrok.io`. You'll need this in the next task.

## Configure Codat webhooks

Introduction.
  
1. In the [Codat Portal](https://app.codat.io), go to **Monitor > Alerts > Alerting rules**.

2. Create three rules, one for each webhook, as shown in the following table:

   |  Rule type                                  | Webhook notification URL                                    |
   |---------------------------------------------|-------------------------------------------------------------|
   | Company Data Connection status has changed  | `<server-url>/webhooks/codat/data-connection-status`        |
   | Data sync completed                         | `<server-url>/webhooks/codat/datatype-sync-complete`        |
   | Account categories updated                  | `<server-url>/webhooks/codat/account-categorisation-update` |

   If using ngrok, replace the `<server-url>` with the forwarding address. For example:

   ```http
   https://pg5e-tf03-w9w-64fd-4000-2c87-.eu.ngrok.io/webhooks/codat/account-categorisation-update
   ```

  TODO: Add a screenshot of the rules dialog box.

## Set your API key

1. In the Codat Portal, go to **Developers > API keys**.
2. Copy your API key from the **API key** column.

:::tip Demo app: Setting your API key 

If you're using our demo app, perform the following steps to set your API key:

1. Navigate to the `\DemosUnderwriting\Codat.Demos.Underwriting.Api\` directory.
2. Edit the `appsettings.json` file and enter your API key as the `CodatApiKey`.

:::

TO DO: Add something about which profiles to use in `Properties/launchProperties.json`. 
