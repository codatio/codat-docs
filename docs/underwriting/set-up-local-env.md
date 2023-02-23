---
title: "Set up your local environment"
description: "Write a description"
---

Before you can run the demo underwriting app, you will need to set up your local environment. 

## Prerequisites

You need to have the following installed locally:

- .NET version 7.0 or higher
- [ngrok](https://ngrok.com/) (optional)

   ngrok is a free tool for exposing services from a local server to the public Internet. You can use a different tool or method to do this, if you prefer. 

You can configure and run the demo app in the terminal. Alternatively, use an IDE or code editor like Visual Studio, Visual Studio Code, or JetBrains Rider.

## Optional: Configure ngrok to allow the demo app to access Codat's webhooks

If using ngrok, perform these steps:

1. Go to the root directory where ngrok is installed.

2. Open the `ngrok.exe` file to launch the ngrok terminal.

3. The demo app is configured to listen for Codat's webhooks on port `5069`. So, you must allow your local machine to receive web traffic through that port.

   Run the following command in the ngrok terminal:

   ```bash
   .\ngrok.exe http 5069
   ```   

4. ngrok displays information about the session. Copy the _forwarding address_; for example, `https://aa111-bb222-cc333-dd444.eu.ngrok.io` to use in the next procedure.

## Configure webhooks in the Codat Portal

1. Sign in to the [Codat Portal](https://app.codat.io).
   
2. Go to **Monitor > Alerts > Alerting rules**.

3. Create three rules, one for each webhook, as shown in the following table:

   |  Rule type                                  | Webhook notification URL                                    |
   |---------------------------------------------|-------------------------------------------------------------|
   | Company Data Connection status has changed  | `<server-url>/webhooks/codat/data-connection-status`        |
   | Data sync completed                         | `<server-url>/webhooks/codat/datatype-sync-complete`        |
   | Account categories updated                  | `<server-url>/webhooks/codat/account-categorisation-update` |

   If you're using ngrok, use the forwarding address as the `<server-url>`. For example:

   ```http
   https://pg5e-tf03-w9w-64fd-4000-2c87-.eu.ngrok.io/webhooks/codat/account-categorisation-update
   ```

  TODO: Add a screenshot of the rules dialog

## Set your API key

1. Navigate to the `\DemosUnderwriting\Codat.Demos.Underwriting.Api\` directory. 

2. Edit the following properties in the `appsettings.json` file:

   - For the `CodatApiKey`, enter your API key from the Codat Portal.

3. Run the demo app from your editor; for example:

   ```
   dotnet run
   ```

The demo app runs. ???

TO DO: Add something about which profiles to use in `Properties/launchProperties.json`. 
