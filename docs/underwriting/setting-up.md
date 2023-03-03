---
title: "Setting up for the demo app"
description: "Prepare your Codat instance and local environment for the underwriting app execution"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 In this section, you will...
* Create your Codat account, 
* Enable the Assess product, 
* Configure webhooks, 
* Set up your local environment, and
* Run the demo app.

### <input type="checkbox" unchecked/> Create a Codat account 

We provide a [free account](https://signup.codat.io/) that lets you explore and test our APIs and other products, including Assess. It also comes equipped with a sample company. When you start working on your own underwriting solution, you may want to explore other [plans](https://www.codat.io/plans/) that Codat offers. 

### <input type="checkbox" unchecked/> Get your API key

In the [Developers](https://app.codat.io/developers/api-keys) section of the Codat Portal, copy your API key from the **API key** column. You will need this to run the demo app. Make sure you copy the API key, not the auth header.

### <input type="checkbox" unchecked /> Enable the Assess product 

In the [Products](https://app.codat.io/settings/products) section of the Codat Portal, find **Assess** in the list of products and toggle the switch to enable it. This also enables the data types required by the product, for example, `balanceSheet` and `profitAndLoss` used by the demo app. 

In this app, we are using the [categorization](https://docs.codat.io/assess/reports/enhanced-financials/categorize-accounts) feature provided by Assess. It allows you to perform automating decisioning based on the categorized chart of accounts. 

### <input type="checkbox" unchecked /> Check your auth flow settings

In the **Auth Flow > Link** [settings](https://app.codat.io/settings/link-settings/data-connections), scroll to _Integration categories_. Ensure _Accounting_ integration category is enabled, and the _Sandbox integrations_ switch is toggled on.

You may want to explore and customize Codat's [auth flow](/auth-flow/customize/customize-link) further as part of working on an underwriting solution of your own.

### <input type="checkbox" unchecked /> Configure ngrok

We recommend using [ngrok](https://ngrok.com/) to access Codat's webhooks. After installing, go to its root directory. Open the `ngrok.exe` file to launch the ngrok terminal. 

Then, configure your local machine to receive web traffic on port 5069. The demo app is configured to listen for Codat's webhooks on this port.

   ```bash
   .\ngrok.exe http 5069
   ``` 
This triggers ngrok to start a new session. Copy the **forwarding address** - you will use it to set up webhooks.

### <input type="checkbox" unchecked /> Configure Codat webhooks

In the [Alerting rules](https://app.codat.io/monitor/rules) section of the Codat Portal, create three rules, one for each webhook we will use. These can be found below.

![](/img/use-cases/rule-creation-screen.png)

Make sure to replace the `<server-url>` with your relevant forwarding address. For example, if using ngrok:

   ```http
   https://pg5e-tf03-w9w-64fd-4000-2c87-.eu.ngrok.io/webhooks/codat/account-categorisation-update
   ```

   |  Rule name                                  | Webhook notification URL                                    |
   |---------------------------------------------|-------------------------------------------------------------|
   | Company Data Connection status has changed  | `<server-url>/webhooks/codat/data-connection-status`        |
   | Data sync completed                         | `<server-url>/webhooks/codat/datatype-sync-complete`        |
   | Account categories updated                  | `<server-url>/webhooks/codat/account-categorisation-update` |

### <input type="checkbox" unchecked /> Clone the app repository

Pick up our underwriting demo repository on [GitHub](https://github.com/codatio/build-guide-underwriting-be) and clone it. 

The main file directory for the demo app is `Codat.Demos.Underwriting.Api`. Key logic components of the app are located in `Controllers`, `Orchestrator`, and `Services` folders.

Note that the other directory in the repository, `Codat.Demos.Underwriting.Api.Tests`, contains a series of unit tests for the demo app and is not needed for you to run the demo project. 

```json title="Codat.Demos.Underwriting.Api"
├──BindingModule.cs
├──Codat.Demos.Underwriting.Api.csproj
├──Program.cs
├──appsettings.Development.json
├──appsettings.json // Maintain your API key in this file
|   
├──Controllers // Controllers for the API endpoints to manage expected actions and results
|    ├──UnderwritingController.cs // Front-end endpoint controller
|    └──WebhooksController.cs     // Back-end endpoint controller
|       
├──DataClients // A service to make API calls to Codat
|    └──CodatDataClient.cs
|       
├──Exceptions // Definitions for managing error events 
|    ├──...
|       
├──Extensions // Used to add new methods to the IEnumerable class
|    └──CollectionExtensions.cs
|       
├──Models // Represent the shape of data that will be returned to the user
|    ├──...
|       
├──Orchestrators // Manages the six methods that relate to endpoints used in the app
|    └──ApplicationOrchestrator.cs
|       
├──Properties // IDE setup for http, https, and IIS Express profiles
|    └──launchSettings.json
|       
└──Services // Key application components that perform specified tasks
     ├──ApplicationStore.cs // Handles creating and storing the loan application in-memory
     └──LoanUnderwriter.cs  // Decision process method for the underwriting model used in the demo
```
### <input type="checkbox" unchecked/> Set your API key

In the `\DemosUnderwriting\Codat.Demos.Underwriting.Api\` directory, edit the `appsettings.json` file and enter the API key you copied previously as the `CodatApiKey`.

### <input type="checkbox" unchecked/> Run the app

David will provide instruction for how to run the app using:
1. the command line
2. Rider
3. Visual Studio (to be confirmed)

<Tabs>
<TabItem value="cmd" label="Command line">

command line

</TabItem>

<TabItem value="rider" label="Rider">

rider

</TabItem>

<TabItem value="vs" label="Visual studio">

visual studio

</TabItem>

</Tabs>

### Recap

You have now set up your Codat Portal instance and your local environment in preparation for running the app. You have also cloned the repository, and initiated the app run.

Next, you will [process a loan application](/underwriting/process-loan).