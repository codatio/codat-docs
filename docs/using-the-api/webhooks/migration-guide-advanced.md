---
title: "Webhooks migration guide (advanced)"
sidebar_label: "Advanced"
description: "Learn about how you can transition to our new service based on your specific setup"
---

## I'm an exception and...

### Using event log endpoints?

Our new service has a robust [retry policy](/using-the-api/webhooks/troubleshooting#retry-policy) that ensures we attempt to deliver an event multiple times over a 28-hour period. Therefore, you don't need to write any complex logic to manage undelivered events. 

If your application goes down for a longer period, you can retry all the failed events using the Portal. We walk you through this in detail in our [troubleshooting](/using-the-api/webhooks/troubleshooting#recover-failed-messages) documentation.


### Using email notification functionality?  

Our new service does not currently support email notifications for events. Start using our new service and endpoints now and check back soon for updates on email notification support.

### Using `RuleId` in my application's existing logic?

If you are using `RuleId` properties returned by our existing webhooks in your application logic, please remain on our existing service and endpoints. We will work with you to arrange the next steps so that you can rewrite the logic to avoid using `RuleId`.

## Additional considerations

Depending on your setup you may need to further configure your webhook consumers or be aware of changes to the UI. 

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


### Company-specific webhooks

If you are using company-specific webhooks, please remain on our existing endpoints. We will work with you to arrange the next steps. With the new service, you are able to see the `companyId` in the **Channels** field of the endpoint's detailed view or the message log. 

![A fragment of the UI that displays the Channels column of the message log with the company ID value recorded in it](/img/use-the-api/0047-message-channels.png)

## Can I start using the new webhook endpoints?

If you are considering using Codat's new webhook management endpoints make sure you check your setup is compatible first.
Simply find the scenarios applicable to your existing setup and see if you can migrate.

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

---

## Read next

- [Event types](/using-the-api/webhooks/event-types)
- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)
- [Troubleshooting](/using-the-api/webhooks/troubleshooting)
