---
title: "Set up the demo app"
description: "Prepare your Codat instance and local environment to run the demo app"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 In this section, you will...
* Create your Codat account
* Verify auth flow settings
* Configure webhooks
* Set up your local environment
* Run the demo app

### <input type="checkbox" unchecked/> Create a Codat account 

We provide a [free account](https://signup.codat.io/) that lets you explore and test our APIs and other products. It also comes equipped with a sample company. When you start working on your own invoice financing solution, you may want to explore our other [plans](https://www.codat.io/plans/).

Your new account already has the Accounting API product, the Codat Sandbox integration, and the relevant data types enabled to get you started quicker.

### <input type="checkbox" unchecked /> Update your auth flow settings

On the **Settings > Auth Flow > Link** [settings](https://app.codat.io/settings/link-settings/data-connections) page, check that **Sandbox integrations** and the **Accounting** integration category are both enabled. Disable the **Commerce** and **Banking** integration categories.

### <input type="checkbox" unchecked /> Listen for webhooks

The app uses several webhooks to track the completion of an accounting data connection and the completion of data syncs for the Invoice and Customer data types.

We will use [ngrok](https://ngrok.com/) to listen for Codat's webhooks. 

<Tabs>
   <TabItem value="win" label="Windows OS">  

   In Windows PowerShell, run the following commands:

   ```bash
   choco install ngrok
   ngrok http 5069
   ```
   
   This will install ngrok using [Chocolatey](https://chocolatey.org/) and run it at port 5069. 
   
   Copy the **forwarding address** - this will be the `<SERVER_URL>` for the webhooks.

   </TabItem>

   <TabItem value="mac" label="Mac OS">

   In the terminal, run the following commands:
   
   ```bash
   brew install ngrok
   ngrok http 5069
   ```  
   This will install ngrok using [Homebrew](https://brew.sh/) and run it at port 5069. 
   
   Copy the **forwarding address** - this will be the `<SERVER_URL>` for the webhooks.

   </TabItem>
</Tabs>

### <input type="checkbox" unchecked /> Configure Codat webhooks

On the **Monitor > Webhooks > [Rules](https://app.codat.io/monitor/rules)** page, create two rules for all companies, one for each webhook we will use:

   |  Rule type                                  | Webhook notification URL                                    |
   |---------------------------------------------|-------------------------------------------------------------|
   | Company Data Connection status has changed  | ```<SERVER_URL>/webhooks/codat/data-connection-status```       |
   | Data sync completed                         | ```<SERVER_URL>/webhooks/codat/datatype-sync-complete```       |

Click **Create rule** to open the new rule creation window. Select the rule type, apply it to all companies, and assign it a webhook URL. Make sure to replace the `<SERVER_URL>` with your forwarding address.

   ![](/img/use-cases/invoice-finance/rule-creation-screen.png)

### <input type="checkbox" unchecked /> Clone the code

Clone our demo repo on [GitHub](https://github.com/codatio/demo-invoice-finance) to download the invoice finance lending demo app. 

The main file directory for the demo app is `Codat.Demos.InvoiceFinancing.Api`. Key logic components of the app are located in the `Controllers`, `Orchestrator`, and `Services` directories.

The other directory in the repository, `Codat.Demos.InvoiceFinancing.Api.Tests`, contains a series of unit tests for the demo app and is not needed for you to run the demo project. 

```sh title="Codat.Demos.InvoiceFinancing.Api directory"
   ├──BindingModule.cs
   ├──Codat.Demos.InvoiceFinancing.Api.csproj
   ├──Program.cs
   ├──appsettings.Development.json
   ├──appsettings.json // Add your API key in this file
   |   
   ├──Controllers // Controllers for the API endpoints to manage expected actions and results
   |    ├──ApplicationController.cs // Front-end endpoint controller
   |    └──WebhooksController.cs    // Back-end endpoint controller
   |       
   ├──DataClients // A service to make API calls to Codat
   |    └──CodatDataClient.cs
   |       
   ├──Exceptions // Definitions for managing error events 
   |    ├──...
   |       
   ├──Models // Represents the shape of data that will be returned to the user
   |    ├──...
   |       
   ├──Orchestrators // Manages the methods that relate to endpoints used in the app
   |    ├──ApplicationOrchestrator.cs //
   |    └──FinancingProcessor.cs //
   |       
   ├──Properties // Setup for http, https, and IIS Express profiles
   |    └──launchSettings.json
   |       
   └──Services // Key application components that perform specified tasks
      ├──ApplicationStore.cs // Handles creating and storing the loan application in-memory
      ├──CustomerRiskAssessor.cs // Handles the assessment of a customer's risk
      └──InvoiceFinanceAssessor.cs // Handles the assessment of an eligible invoice
```
### <input type="checkbox" unchecked/> Set your API key

In the [Developers](https://app.codat.io/developers/api-keys) section of the Codat Portal, copy your API key from the **API key** column **(not the auth header)**. You can click **Create another API key** if one wasn't automatically generated for you. In the `Codat.Demos.InvoiceFinancing.Api` directory, edit the `appsettings.json` file and enter the API key you just copied as the `CodatApiKey`.

### <input type="checkbox" unchecked/> Run the app

<Tabs>
<TabItem value="cmd" label="Command line">

Run the following command in the root directory `Codat.Demos.InvoiceFinancing.Api`:

```sh
dotnet run --launch-profile http
```
Once running, open the Swagger page in your web browser: `http://localhost:7278/swagger/index.html` You will use it to call the demo's endpoints.

</TabItem>

<TabItem value="rider" label="Rider">

Make sure the `http` profile is set and press "Run". The IDE will automatically open [Swagger](http://localhost:7278/swagger/index.html) in a new tab of your browser. You will use it to call the demo's endpoints.

![](/img/use-cases/invoice-finance/rider.png)

</TabItem>

<TabItem value="vs" label="Visual studio">

Ensure the `http` profile is set and press the "Play" icon. The IDE will automatically open [Swagger](http://localhost:7278/swagger/index.html) in a new tab of your browser. You will use it to call the demo's endpoints.

![](/img/use-cases/invoice-finance/visual-studio-2022.png)

</TabItem>

</Tabs>

### Recap

You have now set up your Codat instance and your local environment in preparation for running the app. You have also cloned the repository and started running the app.

---

### Read next

- [Use the app to provide an invoice financing decision](/guides/invoice-finance/process-invoice).