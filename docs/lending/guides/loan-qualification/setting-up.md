---
title: "Set up the demo app"
description: "Prepare your Codat instance and local environment to run the demo app"
sidebar_label: "Demo app setup"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 In this section, you will...

- Create your Codat account
- Enable the Lending solution
- Configure webhooks
- Set up your local environment
- Run the demo app

### Log into your Codat account

Log into your Codat Test account. When you start working on your own loan qualification solution, you may want to contact our [Sales team](https://codat.io/#get-in-touch) to implement it in Production.

### Enable the Lending product

In the **Settings > Organization settings > [Products](https://app.codat.io/settings/products)** section of the Codat Portal, find **Lending** in the list of products and enable it. This also enables the data types required by this solution. For example, `balanceSheet` and `profitandLoss`, which are used by the demo app, will be enabled.

We use Lending's [categorization](/lending/features/financial-statements-overview#categorized-financial-accounts) feature. It allows you to perform automated decisioning based on the categorized accounts.

### Update your auth flow settings

In the **Settings > Auth Flow > Link** [settings](https://app.codat.io/settings/link-settings/data-connections), ensure the _Sandbox integrations_ switch is toggled on. Check that the _Accounting_ integration category is enabled, and disable _Commerce_ and _Banking_ integration categories.

### Listen for webhooks

The app will use several webhooks to track the completion of the financial data sync and the categorization of accounts, and Sandbox linking completion.

We will use [ngrok](https://ngrok.com/) here to listen for Codat's webhooks.

<Tabs>
   <TabItem value="win" label="Windows OS">

In Windows PowerShell, run the following commands:

```bash
choco install ngrok
ngrok http 5069
```

This will install ngrok using [Chocolatey](https://chocolatey.org/) and run it at port 5069.

Copy the **forwarding address** - this will be the `<server-url>` for the webhooks.

   </TabItem>

   <TabItem value="mac" label="Mac OS">

In the terminal, run the following commands:

```bash
brew install ngrok
ngrok http 5069
```

This will install ngrok using [Homebrew](https://brew.sh/) and run it at port 5069.

Copy the **forwarding address** - this will be the `<server-url>` for the webhooks.

   </TabItem>
</Tabs>

### Configure Codat webhooks

In the **Settings > Webhooks > [Rules](https://app.codat.io/settings/webhooks/rules)** section of the Codat Portal, create three rules, one for each webhook we will use:

| Rule type                                  | Webhook notification URL                                    |
| ------------------------------------------ | ----------------------------------------------------------- |
| Company Data Connection status has changed | `<server-url>/webhooks/codat/data-connection-status`        |
| Data sync completed                        | `<server-url>/webhooks/codat/datatype-sync-complete`        |
| Account categories updated                 | `<server-url>/webhooks/codat/account-categorisation-update` |

Click **Create rule** to open the new rule creation window. Select the rule type, apply it to all companies, and assign it a webhook URL. Make sure to replace the `<server-url>` with your forwarding address.

![](/img/use-cases/loan-qualification/rule-creation-screen.png)

### Clone the code

Clone our demo repo on [GitHub](https://github.com/codatio/demo-loan-qualification) to download the loan qualification demo app.

The main file directory for the demo app is `Codat.Demos.Underwriting.Api`. Key logic components of the app are located in `Controllers`, `Orchestrator`, and `Services` folders.

Note that the other directory in the repository, `Codat.Demos.Underwriting.Api.Tests`, contains a series of unit and integration tests for the demo app and is not needed for you to run the demo project.

```sh title="Codat.Demos.Underwriting.Api directory"
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
   ├──Exceptions // Definitions for managing error events
   |    ├──...
   |
   ├──Extensions // Used to extend classes in C#
   |    └──CollectionExtensions.cs
   |
   ├──Models // Represent the schemas used in this solution
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

### Set your API key

In the [Developers](https://app.codat.io/developers/api-keys) section of the Codat Portal, copy your API key from the **API key** column **(not the auth header)**. You can click **Create another API key** if one wasn't automatically generated for you. In the `Codat.Demos.Underwriting.Api\` directory, edit the `appsettings.json` file and enter the API key you just copied as the `CodatApiKey`.

### Run the app

<Tabs>
<TabItem value="cmd" label="Command line">

Run the following command in the root directory `Codat.Demos.Underwriting.Api`:

```sh
dotnet run --launch-profile http
```

Once running, open the Swagger page in your web browser: `http://localhost:5069/swagger/index.html` You will use it to call the demo's endpoints.

</TabItem>

<TabItem value="rider" label="Rider">

Make sure the `http` profile is set and press "Run". The IDE will automatically open [Swagger](http://localhost:5069/swagger/index.html) in a new tab of your browser. You will use it to call the demo's endpoints.

![](/img/use-cases/loan-qualification/underwriting-guide-rider.png)

</TabItem>

<TabItem value="vs" label="Visual studio">

Ensure the `http` profile is set and press the "Play" icon. The IDE will automatically open [Swagger](http://localhost:5069/swagger/index.html) in a new tab of your browser. You will use it to call the demo's endpoints.

![](/img/use-cases/loan-qualification/underwriting-guide-visual-studio-2022.png)

</TabItem>

</Tabs>

### Recap

You have now set up your Codat instance and your local environment in preparation for running the app. You have also cloned the repository and started running the app.

---

### Read next

- [Use the app to underwrite a loan](/lending/guides/loan-qualification/process-loan).
