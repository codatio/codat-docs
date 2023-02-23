---
title: "Set up your local environment"
description: "Write a description"
---

Before you can run the demo underwriting app, you will need to set up your local environment. 

## Prerequisites

You need to have the following installed locally:

- [ngrok](https://ngrok.com/)

   Ngrok is a free tool for exposing services from a local server. You can use a different tool if you prefer. 
- .NET 7.0
- Visual Studio Code, JetBrains Rider, or a similar code editor

## Configure access to Codat from a locally hosted server

Intro

1. Open the ngrok terminal.

2. Run the following command to allow your local machine to receive web traffic on port 5069:

```
.\ngrok.exe http 5069

// use http or https
```

3. Copy the _forwarding address_ displayed in the ngrok terminal. For example, `https://aa111-bb222-cc-333-dd-444.eu.ngrok.io`

4. Go to the `\DemosUnderwriting\Codat.Demos.Underwriting.Api\` directory. 
   
5. Edit the following properties in the `appsettings.json` file:

   - For the `BaseWebhookUrl`, enter the ngrok forwarding address. 
   - For the `CodatApiKey`, enter your API key from the Codat Portal.

6. Run the demo app, for example:

   ```
   dotnet run
   ```

The demo app runs.
