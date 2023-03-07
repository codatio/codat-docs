---
title: "Set up the demo app"
description: "Prepare your Codat instance and local environment to run the demo app"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 In this section, you will...
* Create your Codat account
* Enable the Assess product
* Configure webhooks
* Set up your local environment
* Run the demo app

### <input type="checkbox" unchecked/> Create a Codat account 

We provide a [free account](https://signup.codat.io/) that lets you explore and test our APIs and other products, including Assess. It also comes equipped with a sample company. When you start working on your own underwriting solution, you may want to explore our other [plans](https://www.codat.io/plans/).

### <input type="checkbox" unchecked/> Get your API key

In the [Developers](https://app.codat.io/developers/api-keys) section of the Codat Portal, copy your API key from the **API key** column. You will need this to run the demo app. Make sure you copy the API key, not the auth header.

### <input type="checkbox" unchecked /> Enable the Assess product 

In the [Products](https://app.codat.io/settings/products) section of the Codat Portal, find **Assess** in the list of products and enable it. This also enables data types required by this product. For example, `balanceSheet` and `profitandLoss`, which are used by the demo app, will be enabled.

We use Assess' [categorization](https://docs.codat.io/assess/reports/enhanced-financials/categorize-accounts) feature. It allows you to perform automated decisioning based on the categorized accounts. 

### <input type="checkbox" unchecked /> Check your auth flow settings

In the **Auth Flow > Link [settings](https://app.codat.io/settings/link-settings/data-connections)**, scroll to _Integration categories_. Ensure the _Accounting_ integration category is enabled, and the _Sandbox integrations_ switch is toggled on.

You may want to explore and customize Codat's [auth flow](/auth-flow/customize/customize-link) further as part of working on an underwriting solution of your own.

### <input type="checkbox" unchecked /> Configure ngrok

The app will use several webhooks to track completion of the financial data sync and the categorization of accounts, and Sandbox linking completion. 

We recommend using [ngrok](https://ngrok.com/) to access Codat's webhooks. After installing ngrok, go to its root directory. If working with Windows, open the `ngrok.exe` file to launch the ngrok terminal. Then, configure your local machine to receive web traffic on port 5069. The demo app is configured to listen for Codat's webhooks on this port.

<Tabs>
   <TabItem value="win" label="Windows OS">  

   Run the following command in the root directory `Codat.Demos.Underwriting.Api`:

   ```bash
   .\ngrok.exe http 5069
   ```  
   This triggers ngrok to start a new session. Copy the **forwarding address** - you will use it to set up webhooks.

   </TabItem>

   <TabItem value="mac" label="Mac OS">

   Run the following command in the root directory `Codat.Demos.Underwriting.Api`:
   
   ```bash
   brew install ngrok ngrok http 5069
   ```  
   This triggers ngrok to start a new session. Copy the **forwarding address** - you will use it to set up webhooks.

   </TabItem>
</Tabs>

### <input type="checkbox" unchecked /> Configure Codat webhooks

In the [Alerting rules](https://app.codat.io/monitor/rules) section of the Codat Portal, create three rules, one for each webhook we will use:

   |  Rule name                                  | Webhook notification URL                                    |
   |---------------------------------------------|-------------------------------------------------------------|
   | Company Data Connection status has changed  | `<server-url>/webhooks/codat/data-connection-status`        |
   | Data sync completed                         | `<server-url>/webhooks/codat/datatype-sync-complete`        |
   | Account categories updated                  | `<server-url>/webhooks/codat/account-categorisation-update` |

Click **Create rule** to open the new rule creation window. Select the rule type, apply it to all companies, and assign in a webhook URL. Make sure to replace the `<server-url>` with your forwarding address.

   ![](/img/use-cases/underwriting/rule-creation-screen.png)

### <input type="checkbox" unchecked /> Clone the app repository

Clone our demo repository on [GitHub](https://github.com/codatio/build-guide-underwriting-be) to download the underwriting demo app. 

The main file directory for the demo app is `Codat.Demos.Underwriting.Api`. Key logic components of the app are located in `Controllers`, `Orchestrator`, and `Services` folders.

Note that the other directory in the repository, `Codat.Demos.Underwriting.Api.Tests`, contains a series of unit tests for the demo app and is not needed for you to run the demo project. 

```go title="Codat.Demos.Underwriting.Api directory"
   ├──BindingModule.cs
   ├──Codat.Demos.Underwriting.Api.csproj
   ├──Program.cs
   ├──appsettings.Development.json
   ├──appsettings.json // Add your API key in this file
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
   ├──Extensions // Used to extend classes in C#
   |    └──CollectionExtensions.cs
   |       
   ├──Models // Represent the shape of data that will be returned to the user
   |    ├──...
   |       
   ├──Orchestrators // Manages the six methods that relate to endpoints used in the app
   |    └──ApplicationOrchestrator.cs
   |       
   ├──Properties // Setup for http, https, and IIS Express profiles
   |    └──launchSettings.json
   |       
   └──Services // Key application components that perform specified tasks
      ├──ApplicationStore.cs // Handles creating and storing the loan application in-memory
      └──LoanUnderwriter.cs  // Decision process method for the underwriting model used in the demo
```
### <input type="checkbox" unchecked/> Set your API key

In the `\Codat.Demos.Underwriting.Api\` directory, edit the `appsettings.json` file and enter the API key you copied previously as the `CodatApiKey`.

### <input type="checkbox" unchecked/> Run the app

<Tabs>
<TabItem value="cmd" label="Command line">

Run the following command in the root directory `Codat.Demos.Underwriting.Api`:

```sh
dotnet.exe run --launch-profile http
```
Once running, open the Swagger page in your web browser: `http://localhost:5069/swagger/index.html` You will use it to call the demo's endpoints.

</TabItem>

<TabItem value="rider" label="Rider">

Make sure the `http` profile is set and press "Run". The IDE will automatically open [Swagger](http://localhost:5069/swagger/index.html) in a new tab of your browser. You will use it to call the demo's endpoints.

![](/img/use-cases/underwriting/underwriting-guide-rider.png)

</TabItem>

<TabItem value="vs" label="Visual studio">

Ensure the `http` profile is set and press the "Play" icon. The IDE will automatically open [Swagger](http://localhost:5069/swagger/index.html) in a new tab of your browser. You will use it to call the demo's endpoints.

![](/img/use-cases/underwriting/underwriting-guide-visual-studio-2022.png)

</TabItem>

</Tabs>

### Recap

You have now set up your Codat instance and your local environment in preparation for running the app. You have also cloned the repository and initiated the app run.

Next, [see the app in action](/underwriting/process-loan).