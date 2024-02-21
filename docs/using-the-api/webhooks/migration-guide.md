---
title: "Webhooks migration guide"
sidebar_label: "Migration guide"
description: "Check how you can transition your existing Codat webhooks setup to our new service and endpoints"
---

## Can I migrate?

If you have not been contacted by Codat already to discuss the migration of your existing webhooks setup, use the table below to check if you can start using our new webhooks service and endpoints. 

Simply find the scenarios applicable to your existing setup and see what we recommend.

| I am using...                                                                    | New service and endpoints | New service and old endpoints | Old service and endpoints |
|----------------------------------------------------------------------------------|---------------------------|-------------------------------|---------------------------|
| ...email notification functionality                                              | ✔️                         | ❌                             | ❌                         |
| ...event log endpoints (e.g. `/rules/alerts`)                                    | ❌                         | ❌                             | ✔️                         |
| ...only company-agnostic webhook functionality                                   | ✔️                         | ❌                             | ❌                         |
| ...company-specific webhook functionality                                        | ❌                         | ✔️                             | ❌                         |
| ...`X-Codat-ClientId` header to determine the source Codat instance of the event | ✔️                         | ❌                             | ❌                         |
| ...webhook auth header via the `/profile` endpoint                               | ✔️                         | ❌                             | ❌                         |
| ...webhook auth header via the Portal                                            | ✔️                         | ❌                             | ❌                         |
| ...`Retry-After` header to control the time between retries                      | ✔️                         | ❌                             | ❌                         |
| ...`RuleId` in my application's existing logic                                   | ❌                         | ❌                             | ✔️                         |

## How do I migrate?

Reach out to your Codat contact with a request to be migrated to the new webhooks service. Depending on the scenarios that apply to you, there may be additional steps you need to take during the migration. We describe these in more detail in the sections below. 

### Email notifications

Our new service does not currently support email notifications for events. Start using our new service and endpoints now and check back soon for updates on email notification support.

### Event log endpoints

Our new service has a robust [retry policy](/using-the-api/webhooks/troubleshooting#retry-policy) that ensures we attempt to deliver an event multiple times over a 28-hour period. Therefore, you don't need to write any complex logic to manage undelivered events. 

If your application goes down for a longer period, you can retry all the failed events using the Portal. We walk you through this in detail in our [troubleshooting](/using-the-api/webhooks/troubleshooting#recover-failed-messages) documentation.

### Company-agnostic webhooks

If you are not using any of our existing company-specific webhooks, you can simply move to our new webhook endpoints: 

- [Create webhook consumer](/platform-api#/operations/create-webhook-consumer)
- [List webhook consumers](/platform-api#/operations/list-webhook-consumers)
- [Delete webhook consumer](/platform-api#/operations/delete-webhook-consumer)

### Company-specific webhooks

If you are using company-specific webhooks, please remain on our existing endpoints. We will work with you to arrange the next steps. With the new service, you are able to see the `companyId` in the **Channels** field of the endpoint's detailed view or the message log. 

![A fragment of the UI that displays the Channels column of the message log with the company ID value recorded in it](/img/use-the-api/0047-message-channels.png)

### Source client header

If you are using multiple Codat instances and need to differentiate between them, you can filter the messages by client. Add a custom `X-Codat-ClientId` header with the required client ID to the webhook endpoint using our Portal. 

You can find and copy your client ID in the [Portal](https://app.codat.io) by clicking on your instance dropdown.

![A fragment of the UI that displays the dropdown with client instances and current client details](/img/use-the-api/0049-clientid-portal.png)

For more information on creating custom headers in webhook consumers, see [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).

### Webhook auth header

If you are currently securing your webhook endpoints with an authorization header, you can add it as a custom `Authorization` header to the webhook consumer endpoint using our Portal. It is no longer possible to do this via our API.

For more information on creating custom headers in webhook consumers, see [Custom headers](/using-the-api/webhooks/create-consumer#custom-headers).

### Time between retries

Our new service has a robust [retry policy](/using-the-api/webhooks/troubleshooting#retry-policy) that ensures we attempt to deliver an event multiple times over a 28-hour period. As a result, you no longer need to set a `Retry-After` header to control the time between retries. 

### Rule Ids in app logic

If you are using `RuleId` properties returned by our existing webhooks in your application logic, please remain on our existing service and endpoints. We will work with you to arrange the next steps so that you can rewrite the logic to avoid using `RuleId`.

---

## Read next

- [Event types](/using-the-api/webhooks/event-types)
- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)
- [Troubleshooting](/using-the-api/webhooks/troubleshooting)