---
title: "Set up your local environment"
description: "Write a description"
---

Before you can run the demo underwriting app, you will need to set up your local environment. 

## Prerequisites

You need to have the following installed locally:

- .NET 7.0
- Visual Studio Code, JetBrains Rider, or a similar code editor
- [ngrok](https://ngrok.com/) or a similar tool that allows a local server to access remote systems, such as the Codat API 

## Configure access to Codat from a locally hosted server

Intro

1. Open ngrok exe

2. Run the following command to ??? port 5069:

```
.\ngrok.exe http 5069
```

3. Copy the forwarding address from the ngrok terminal. For example, `https://<guid>.eu.ngrok.io`

4. Edit the appsettings.json file in `\DemosUnderwriting\Codat.Demos.Underwriting.Api\`
   
5. Edit the following properties:

5. For the `BaseWebhookUrl`, enter the forwarding address. 

6. For the `CodatApiKey`, enter your API key from the Codat Portal.

7. Run the demo app:

   ```
   dotnet run
   ```

The demo app runs on `localhost:5069`.
