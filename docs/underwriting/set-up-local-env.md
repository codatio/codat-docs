---
title: "Set up your local environment"
description: "Write a description"
---

Before you can run the demo underwriting app, you will need to set up your local environment. 

## Prerequisites

You need to have the following installed locally:

- [ngrok](https://ngrok.com/) (optional)

   Ngrok is a free tool for exposing services from a local server to the public Internet. You can use a different tool or method, if you prefer. 
- .NET 7.0 or higher

You can configure and run the app in the terminal. Alternatively, use an IDE or editor like Visual Studio, Visual Studio Code, or JetBrains Rider.

## Optional: Configure ngrok to allow the demo app to access Codat's webhooks

1. Go to the root directory where ngrok is installed.

1. Open the `ngrok.exe` executable file. The ngrok terminal is displayed.

1. In the ngrok terminal, allow your local machine to receive web traffic on port 5069:

   ```bash
   .\ngrok.exe http 5069

   // use http or https
   ```

   The demo app is configured to listen for Codat's webhooks on port 5069.

1. ngrok starts a new session. Copy the _forwarding address_ displayed in the ngrok terminal; for example, `https://aa111-bb222-cc333-dd444.eu.ngrok.io`

## Configure webhooks in the Codat Portal

1. Sign in to the [Codat Portal](https://app.codat.io).
   
1. Go to **Monitor > Alerts > Alerting rules**.

1. Create three rules, one for each webhook, as shown in the following table:

|  Rule type                                  | Webhook notification URL       |
|---------------------------------------------|--------------------------------|
| Company Data Connection status has changed  | <server-url>                            |
| Data sync completed:                        | <server-url>//webhooks/codat/datatype-sync-complete       |
| Account categories updated                  | <server-url>/webhooks/codat/account-categorisation-update |


go to Codat portal, set three rules

DataconnectionStatus changed

use screenshots of the portal

table of endpoints

| Rule                                          |  Webhook
|      Webhook name - your public server URL
| 
| 

^ generic

then show an example if using ngrok.

1. In your editor, navigate to `\DemosUnderwriting\Codat.Demos.Underwriting.Api\`. 


1. Edit the following properties in the `appsettings.json` file:

   - For the `BaseWebhookUrl`, enter the ngrok forwarding address.
   // David - We're actually going to get them to do this in the portal so we'll have to add a section on configuring webhooks in the portal.
   - For the `CodatApiKey`, enter your API key from the Codat Portal.

// David - need to add something about which profiles they can use in `Properties/launchProperties.json`. 

1. Run the demo app from your editor; for example:

   ```
   dotnet run
   ```

The demo app runs.
