---
title: "Setting up for underwriting"
description: "Prepare your Codat instance and local environment for the underwriting app build"
---
By the end of this oage, you will...


## Setting up in the Codat Portal  

<input type="checkbox" unchecked/> <b>Create a Codat account</b>  

We provide a [free account](https://signup.codat.io/) that lets you explore and test our APIs and other products, including Assess. It also comes equipped with a sample company. When you start working on your own underwriting solution, you may want to explore other [plans](https://www.codat.io/plans/) that Codat offers. 

### Get your API key

Some intro text

1. In the Codat Portal, go to **Developers > API keys**.
2. Copy your API key from the **API key** column.

<input type="checkbox" unchecked /> <b>Enable data types needed for underwriting</b>  

Log in to the [Codat Portal](https://app.codat.io/) and click on the **Settings** tab in the top menu. Then, navigate to **Integrations > Data types** and make sure that data types required by Assess that you intend to use in the underwriting logic are set to fetch on first link. 

Demo app: data types

To successfully complete an underwriting request using the demo project, make sure that `balanceSheet` and `profitAndLoss` accounting data types are set to fetch on first link. 


<input type="checkbox" unchecked /> <b>Check your auth flow settings</b>

In the [Codat Portal](https://app.codat.io/), click on the **Settings** tab in the top menu. Then, navigate to **Auth flow > Link**. Scroll down to _Integration categories_ and ensure _Accounting_ integration category is enabled. You may want to explore and customize Codat's [auth flow](/auth-flow/customize/customize-link) further as part of working on an underwriting solution of your own.

:::tip Demo app: auth flow settings

To use Codat's Sandbox in the demo app, ensure the _Sandbox integrations_ switch is toggled on in the **Auth flow > Link** menu path.

:::

<input type="checkbox" unchecked /> <b>Enable the Assess product</b>  

Log in to the [Codat Portal](https://app.codat.io/) and click on the **Settings** tab in the top menu. Select **Organization settings**, then **Products**. Find **Assess** in the list of products and toggle the switch to enable it.

When assess is enabled, you get access to... These data types are enabled for you. Move this up to after APIkey. Why we are using the assess product is important. we are using the categorization feature. 

<input type="checkbox" unchecked /> <b>Configure Codat webhooks</b>

Introduction. WHat is this for? If your underwriting process needs more webhooks, this is where you can set these up. 
  
1. In the [Codat Portal](https://app.codat.io), go to **Monitor > Alerts > Alerting rules**.

2. Create three rules, one for each webhook, as shown in the following table. Make sure to replace the `<server-url>` with your relevant forwarding address.

   |  Rule name                                  | Webhook notification URL                                    |
   |---------------------------------------------|-------------------------------------------------------------|
   | Company Data Connection status has changed  | `<server-url>/webhooks/codat/data-connection-status`        |
   | Data sync completed                         | `<server-url>/webhooks/codat/datatype-sync-complete`        |
   | Account categories updated                  | `<server-url>/webhooks/codat/account-categorisation-update` |

**TODO**: Add a screenshot of the rules dialog box.

## Setting up your local environment for the demo app

:::tip Demo app
Perform these steps if you plan to explore our sample project and run the demo app.
:::

### Directory structure

Pick up our underwriting demo repository on [Github](https://github.com/codatio/build-guide-underwriting-be) and clone it. 

The main file directory for the demo app is `Codat.Demos.Underwriting.Api`. Key logic components of the app are located in `Controllers`, `Orchestrator`, and `Services` folders.

Note that the other directory in the repository, `Codat.Demos.Underwriting.Api.Tests`, contains a series of unit tests for the demo app and is not needed for you to run the demo project. 

```json title="Codat.Demos.Underwriting.Api"
├──BindingModule.cs
├──Codat.Demos.Underwriting.Api.csproj
├──Program.cs
├──appsettings.Development.json
├──appsettings.json // Maintain your API key and desired underwriting thresholds in this file
|   
├──Controllers // Controllers for the API endpoints to manage expected actions and results
|    ├──UnderwritingController.cs // Front-end endpoint controller
|    └──WebhooksController.cs     // Back-end endpoint controller
|       
├──DataClients // A service to make API calls to Codat
|    └──CodatDataClient.cs
|       
├──Exceptions // Definitions for managing error events 
|    ├──ApplicationOrchestratorException.cs
|    ├──ApplicationStatusStoreException.cs
|    ├──ApplicationStoreException.cs
|    ├──CodatDataClientException.cs
|    ├──ConfigurationMissingException.cs
|    ├──LoanUnderwriterException.cs
|    └──StreamHelperException.cs
|       
├──Extensions // Used to add new methods to the IEnumerable class
|    └──CollectionExtensions.cs
|       
├──Models // Represent the shape of data that will be returned to the user
|    ├──Application.cs
|    ├──CodatAlerts.cs
|    ├──CodatPaginatedResponse.cs
|    ├──Company.cs
|    ├──DataConnection.cs
|    ├──FinancialMetric.cs
|    ├──Platform.cs
|    ├──Report.cs
|    └──UnderwritingParameters.cs
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

### Prerequisites

You also need to install the following:

- .NET version 7.0 or higher
- [ngrok](https://ngrok.com/) (optional)

ngrok is a free tool for exposing services from a local server to the public Internet. You can use a different tool or method to do this, if you prefer. 

You can configure and run the demo app in the terminal, or use your preferred IDE or code editor.

### Configure ngrok to allow the demo app to access Codat's webhooks

If using ngrok to expose the demo app, perform these steps:

1. Go to the root directory where ngrok is installed.

2. Open the `ngrok.exe` file to launch the ngrok terminal.

3. Configure your local machine to receive web traffic on port 5069. The demo app is configured to listen for Codat's webhooks on this port.

   ```bash
   .\ngrok.exe http 5069
   ```   

4. ngrok starts a new session. Copy the **forwarding address**; for example, `https://aa111-bb222-cc333-dd444.eu.ngrok.io`. You'll need this in the next task.

### Configure Codat webhooks for the demo app

Create three rules, one for each webhook, to be used in the demo app. Follow the process steps described previously in **Configure Codat webhooks**, and make sure to replace the `<server-url>` with the right forwarding address. For example, if using ngrok:

   ```http
   https://pg5e-tf03-w9w-64fd-4000-2c87-.eu.ngrok.io/webhooks/codat/account-categorisation-update
   ```
### Set your API key

Follow the instructions for getting your API key (link). Next: 

1. Navigate to the `\DemosUnderwriting\Codat.Demos.Underwriting.Api\` directory.
2. Edit the `appsettings.json` file and enter your API key as the `CodatApiKey`.



TO DO: Add something about which profiles to use in `Properties/launchProperties.json`. 

## Recap

## Read next

- [Processing a loan application](/underwriting/process-loan)