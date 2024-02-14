---
title: "Webhook events at Codat"
description: "Managing new and existing rules via Codat Portal"
---
streamlined efficiency with our best-in-class solution

## Introduction to {Service Name} Webhooks
Webhooks are how services notify each other of events. At their core they are just a  `POST`  request to a pre-determined endpoint. The endpoint can be whatever you want, and you can just  [add them from the UI](#adding-an-endpoint). You normally use one endpoint per service, and that endpoint listens to all of the event types. For example, if you receive webhooks from Acme Inc., you can structure your URL like:  `https://www.example.com/acme/webhooks/`.

The way to indicate that a webhook has been processed is by returning a  `2xx`  (status code  `200-299`) response to the webhook message within a reasonable time-frame (15s). It's also important to disable  `CSRF`  protection for this endpoint if the framework you use enables them by default.

WEBHOOK CONSUMER



⚙️ **Smart Retries**: No more worrying about missed events or failed deliveries. Our intelligent system automatically retries failed webhook deliveries, ensuring your crucial messages reach their destination without any hassle.

📝 **Detailed Event Logging**: Gain deep insights into every aspect of your webhook events. With detailed event logging, you'll have a comprehensive overview of delivery attempts, allowing you to resolve any issues as well as view webhook event payloads.

🔄 **Event Replay**: Need to reprocess past events or retry failed event? Our Event Replay feature makes it a breeze to replay both successful and unsuccessful events deliveries, enabling you to recover from any system failures your end.

🧪 **Mocked Events**: Simplify testing and development with our mocked events functionality. Mocked events makes it a breeze to test, debug, and refine your webhook consumer with ease. Simply select the event type you want to trigger and we'll deliver it to your application.

🛡️ **Improved Stability**: Trust in a robust and reliable solution that prioritizes stability. Our Webhooks Service is engineered for resilience, delivering unmatched performance and uptime to support your mission-critical operations.


CALLOUT TO THE OLD ONE - IF YOU ARE USING WEBHOOKS BEFORE THIS DATE, READ THESE DOCS

## Retries
Svix attempts to deliver each webhook message based on a retry schedule with exponential backoff.

### The schedule
Each message is attempted based on the following schedule, where each period is started following the failure of the preceding attempt:

-   Immediately
-   5 seconds
-   5 minutes
-   30 minutes
-   2 hours
-   5 hours
-   10 hours
-   10 hours (in addition to the previous)

If an endpoint is removed or disabled delivery attempts to the endpoint will be disabled as well.

For example, an attempt that fails three times before eventually succeeding will be delivered roughly 35 minutes and 5 seconds following the first attempt.
