---
title: "Test your Basiq integration"
sidebar_label: Testing
---

When you've [set up and enabled Basiq](/integrations/banking/basiq/banking-basiq-setup), you can test your integration with Basiq's test bank "Hooli". You'll need to:

- Set up a test company.
- Generate a Link URL for your test company
- Connect your test company to "Hooli"

## Set up a test company

1. Go to the <a href="https://app.codat.io/#/login" target="_blank">Codat Portal</a> and sign in.
2. Go to **Companies**.
3. On the right side of the page, select **New company**.
4. Enter a name for your test company and select **Add**.
5. Copy the generated link URL and open it in a new browser tab. Keep the **Companies** page open as well - you'll need it for the next stage of the process.

## Link to Basiq's test bank

6. Use the link URL generated above to start the link process. You can optionally skip any accounting or commerce connections, and when prompted choose to connect banking data using Basiq.

7. Enter user details
   :::info User details form
   Each of your merchants will need to complete this once you're live. It will create an individual user in the Basiq application that will be associated with the individual merchant only. This is then used to provide one-time password to the merchant using the email or mobile number provided at this step.
   :::


8. When prompted to choose a bank or institution, select "Hooli". For the login information for Hooli, consult the table on Basiq's website <a href="https://api.basiq.io/reference/testing" class="external" target="_blank">here</a>. You can choose from a number of different logins to retrieve different personas with different banking data available.

## View data in Codat

Once you have completed linking to Basiq's test bank, you will be able to view data in the Codat portal.

Click on the company you created in step 4 above, and choose "Data > Banking" from the left hand menu to explore the data.
