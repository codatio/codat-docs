---
title: "Webhook security"
description: "Securing your webhook to prevent unauthorized use"
createdAt: "2020-04-02T10:24:15.274Z"
updatedAt: "2022-11-24T12:14:59.848Z"
---

To prevent unauthorized users from posting content to your webhook, Codat can add an `Authorization` header to the requests sent. You can set this up either via the Codat portal or API.

## Enable webhook security in the Codat portal

To enable security for your organisation's webhooks.

1. Sign in to the Codat Portal.
2. Select **Monitor > Alerts > Alert settings**.
3. Select the authorization method you're interested in and enter the required information. By default, **No Authorization** is selected so security is turned off.

| Authorization method or scheme | Description                                                                                        |
| :----------------------------- | :------------------------------------------------------------------------------------------------- |
| Basic                          | A base-64 encoded username and password are added to the authorization header of the HTTP request. |
| Bearer                         | A custom value or token is added to the authorization header.                                      |

## Enable webhook security via the API

To enable webhook security, use any valid header value in ASCII in the **alertAuthHeader**. For example:

`PUT <https://api.codat.io/profile>`

```json
{
    "name": "Client Name"
    "logoUrl": "https://logo.png"
    "iconUrl": "https://icon.ico"
    "redirectUrl": "https://link.com/complete"
    "apiKey": "API-KEY"
    "alertAuthHeader": "Basic amFzb246cGFzc3dvcmQ=" // API accepts any raw string value
    "confirmCompanyName": false

}
```

The authorization header is included in all webhook alerts sent to your account.

## Disable webhook security for specific rules

If you want to override webhook security for specific rules, please contact [support](mailto:support@codat.io?subject=Disable%20webhook%20security%20for%20specific%20rules).

## Allowlisting Codat IP addresses for webhooks

Codat's alerting rules are served from static IP addresses. This means that you are able to apply an allowlisting rule to grant network access to these notifications.

- 20.77.82.168/32
- 51.142.76.22/32
