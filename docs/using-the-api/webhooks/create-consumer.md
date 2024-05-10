---
title: "Build webhook consumers to subscribe to events"
sidebar_label: "Consume webhooks"
description: "Configure new webhook consumers in Codat and manage existing configuration to receive webhook events"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

A _webhook consumer_ is your implementation of a POST endpoint that you built to receive Codat's webhooks. In general, you need one consumer per [event type](/using-the-api/webhooks/event-types).

This consumer must return a `2XX` (status code `200-299`) response within 15 seconds of receiving the POST request. We recommend passing the event to an internal message queue so that you can process it in time.

## Configure webhook consumer

<div
  style={{
    position: "relative",
    paddingBottom: "calc(55.43859649122807% + 41px)",
    height: 0,
    width: "100%",
    margin: "1em 0",
    borderRadius: "8px",
    overflow: "hidden",
  }}
>
  <iframe
    src="https://demo.arcade.software/wezqcAlTgJzlPt7P8LiX?embed&show_copy_link=true"
    title="Events | Monitor | Codat Portal"
    frameBorder={0}
    loading="lazy"
    webkitallowfullscreen=""
    mozallowfullscreen=""
    allowFullScreen=""
    allow="clipboard-write"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      colorScheme: "light"
    }}
  ></iframe>
</div>


Once you have built your webhook consumer, configure Codat to send events to this consumer. Navigate to **Settings > Webhooks > Events > Configure consumer** and click **Add endpoint** to create a new consumer. 

:::caution Building architectures with many consumers

If you are planning to create an application with more than 50 consumers, reach out to your Codat contact so that we can optimize the solution for your use case.

:::

Add the endpoint URL that you want to receive the messages, an optional description, and choose the events that this endpoint should listen to. You must specify a least one event type per endpoint. 

Browse our event catalog [in the Portal](https://app.codat.io/monitor/events) or in our [documentation](/using-the-api/webhooks/event-types) to choose the event types that suit your use case. 

:::tip Configure a consumer via the API

You can create a webhook consumer programmatically using our [Create webhook](/platform-api#/operations/create-webhook-consumer) endpoint.

:::

:::caution IP allowlist

If your consumer endpoint is behind a firewall or NAT, you'll need to allow-list IP addresses `4.159.114.108` and `20.117.190.191`.
:::

### Custom headers

Once you created your webhook consumer, you can use its advanced functionality to add a custom header to the endpoint. This can be useful in the following scenarios:

- If you are securing your webhook endpoints with an authorization header, you can add it as a custom `Authorization` header.

- If you are using multiple Codat instances and need to differentiate between them, add a `X-Codat-ClientId` header with the required client ID. You can find and copy your client ID in the [Portal](https://app.codat.io) by clicking on your instance dropdown.

    ![A fragment of the UI that displays the dropdown with client instances and current client details](/img/use-the-api/0049-clientid-portal.png)

It's not possible to add a custom header via our API. Instead, navigate to **Monitor > Webhooks > Events** and click on the relevant endpoint to see its detailed view. Then, select the **Advanced** tab and add your headers to the custom header section. 

![A fragment of the webhook UI that displays the detailed endpoint view with two custom headers added to it](/img/use-the-api/0050-custom-headers-section.png)

## View webhook consumers

In the [Codat Portal](https://app.codat.io/monitor/events), navigate to **Monitor > Webhooks > Events** to see the list of all consumer endpoints you have configured. 

Alternatively, you can use the [List webhooks](/platform-api#/operations/list-webhook-consumers) endpoint to return a list of all consumers that currently exist for your client. 

## Delete webhook consumers

In the [Codat Portal](https://app.codat.io/monitor/events), navigate to **Monitor > Webhooks > Events** to see the list of your webhook consumers. Click on the one you want to delete, then click on the triple-dot options menu and choose **Delete**. 

Alternatively, you can use the [Delete webhook](/platform-api#/operations/delete-webhook-consumer) endpoint to delete an existing webhook consumer. You need to provide its valid `webhookId` as a parameter. 

## Test a webhook consumer

When adding a webhook consumer endpoint, you may want to test it with an example event to confirm its configuration. Once you have [created the endpoint](/using-the-api/webhooks/create-consumer#create-a-webhook-consumer), click on it to see the detailed view, and navigate to the **Testing** tab. 

Next, choose the example event you want to send and click **Send example**. Once it's sent, you can click into the message to view its payload, attempts, and status. 

:::tip Troubleshoot failed messages

There are many reasons a message to your endpoint could fail. Have a look at our [troubleshooting guide](/using-the-api/webhooks/troubleshooting) to resolve the most common issues that occur. 

:::

## Verify webhook signature

A webhook signature is your way to verify that the messages are sent by Codat and helps you avoid impersonation or replay attacks. We sign every webhook and its metadata with a unique security key for each endpoint and include timestamps for when the message attempt occurred.

You can use this signature to verify that the message truly came from Codat before processing it. To do the verification, we suggest using a library called Svix.

### Install library

<Tabs>

<TabItem value="nodejs" label="JavaScript">

##### NPM
```sh
npm install svix
```

##### Yarn
```sh
yarn add svix
```
</TabItem>

<TabItem value="python" label="Python">

```sh
pip install svix
```
</TabItem>

<TabItem value="csharp" label="C#">

```sh
dotnet add package Svix
```
</TabItem>

<TabItem value="go" label="Go">

```sh
go get github.com/svix/svix-webhooks/go
```
</TabItem>

<TabItem value="java" label="Java">

#### Gradle

Add this dependency to your project's build file:
```sh
implementation "com.svix:svix:0.x.y"
```

#### Maven

Add this dependency to your project's POM:
```xml
<dependency>
  <groupId>com.svix</groupId>
  <artifactId>svix</artifactId>
  <version>0.x.y</version>
</dependency>
```
</TabItem>

<TabItem value="rust" label="Rust">

```sh
svix = "0"
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

#### Gradle

Add this dependency to your project's build file:
```sh
implementation "com.svix.kotlin:svix-kotlin:0.x.y"
```

#### Maven

Add this dependency to your project's POM:
```xml
<dependency>
  <groupId>com.svix.kotlin</groupId>
  <artifactId>svix-kotlin</artifactId>
  <version>0.x.y</version>
</dependency>
```
</TabItem>

<TabItem value="ruby" label="Ruby">

```sh
gem install svix
```
</TabItem>

<TabItem value="php" label="PHP">

```sh
composer require svix/svix
```
</TabItem>

<TabItem value="cli" label="CLI">

#### Homebrew

```sh
brew install svix/svix/svix
```

#### Scoop

```sh
scoop bucket add svix https://github.com/svix/scoop-svix.git
scoop install svix
```

</TabItem>

</Tabs>

### Verify webhook

To verify incoming webhooks, retrieve the secret key for your endpoint first. 

In the [Codat Portal](https://app.codat.io/monitor/events), navigate to **Monitor > Webhooks > Events**, click the endpoint you want to verify, and copy the **Signing secret** from the endpoint's detailed view.
 
  ![A fragment of the UI that highlights where to copy the signing secret](/img/use-the-api/0054-endpoint-detail-signing-secret.png)

Next, you need to pass the secret key, request body, and headers to the verification library as demonstrated below.  

:::info Use the raw request body

You need to use the raw request body when verifying webhooks because the cryptographic signature is very sensitive to changes. 

Watch out for frameworks that parse the request as JSON and then stringify it, because this will also break the signature verification.
::: 

<Tabs>

<TabItem value="nodejs" label="JavaScript">

```javascript
import { Webhook } from "svix";

const secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
const headers = {
  "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",
  "svix-timestamp": "1614265330",
  "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
};
const payload = '{"test": 2432232314}';

const wh = new Webhook(secret);
// Throws on error, returns the verified content on success
const payload = wh.verify(payload, headers);
```
</TabItem>

<TabItem value="python" label="Python">

```python
from svix.webhooks import Webhook

secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"

# These were all sent from the server
headers = {
  "svix-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",
  "svix-timestamp": "1614265330",
  "svix-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
}
payload = '{"test": 2432232314}'

wh = Webhook(secret)
# Throws on error, returns the verified content on success
payload = wh.verify(payload, headers)
```
</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using Svix;
using System.Net;

// These were all sent from the server
var headers = new WebHeaderCollection();
headers.Set("svix-id", "msg_p5jXN8AQM9LWM0D4loKWxJek");
headers.Set("svix-timestamp", "1614265330");
headers.Set("svix-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=");
var payload = "{\"test\": 2432232314}";

var wh = new Webhook("whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw/Je4ZJEGP1QFb");

// Throws on error
wh.Verify(payload, headers);
```
</TabItem>

<TabItem value="go" label="Go">

```go
import (
    svix "github.com/svix/svix-webhooks/go"
)

secret := "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"

// These were all sent from the server
headers := http.Header{}
headers.Set("svix-id", "msg_p5jXN8AQM9LWM0D4loKWxJek")
headers.Set("svix-timestamp", "1614265330")
headers.Set("svix-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=")

payload := []byte(`{"test": 2432232314}`)

wh, err := svix.NewWebhook(secret)
err := wh.Verify(payload, headers)
// returns nil on success, error otherwise
```
</TabItem>

<TabItem value="java" label="Java">

```java
import com.svix.Webhook;

String secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
HashMap<String, List<String>> headerMap = new HashMap<String, List<String>>();
headerMap.put("svix-id", Arrays.asList("msg_p5jXN8AQM9LWM0D4loKWxJek"));
headerMap.put("svix-timestamp", Arrays.asList("1614265330"));
headerMap.put("svix-signature", Arrays.asList("v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="));
HttpHeaders headers = HttpHeaders.of(headerMap, BiPredicate<String, String>)

String payload = "{\"test\": 2432232314}";

Webhook webhook = new Webhook(secret);

webhook.verify(payload, headers)
// throws WebhookVerificationError exception on failure. 
```
</TabItem>

<TabItem value="rust" label="Rust">

```rust
use svix::webhooks::Webhook;

let secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw".to_string();

let mut headers = http::header::HeaderMap::new();
headers.insert("svix-id", "msg_p5jXN8AQM9LWM0D4loKWxJek");
headers.insert("svix-timestamp", "1614265330");
headers.insert(
    "svix-signature",
    "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
);

let payload = b"{\"test\": 2432232314}";

let wh = Webhook::new(&secret)?;
wh.verify(&payload, &headers)?;
// returns Ok on success, Err otherwise
```
</TabItem>

<TabItem value="kotlin" label="Kotlin">

```java
import com.svix.kotlin.Webhook

val secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
val headersMap = mapOf(
    "svix-id" to listOf("msg_p5jXN8AQM9LWM0D4loKWxJek"),
    "svix-timestamp" to listOf("1614265330"),
    "svix-signature" to listOf("v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=")
)
val headers = HttpHeaders.of(headersMap) { _, _ -> true }

val payload = "{\"test\": 2432232314}";

val webhook = Webhook(secret);

webhook.verify(payload, headers)
// throws WebhookVerificationError exception on failure.
```
</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
require 'svix'

# These were all sent from the server
headers = {
  "svix-id" => "msg_p5jXN8AQM9LWM0D4loKWxJek",
  "svix-timestamp" => "1614265330",
  "svix-signature" => "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="
}
payload = '{"test": 2432232314}'

wh = Svix::Webhook.new("whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw")
# Raises on error, returns the verified content on success
json = wh.verify(payload, headers)
```
</TabItem>

<TabItem value="php" label="PHP">

```php
// import using composers autoload
require_once('vendor/autoload.php');
// or manually
require_once('/path/to/svix/php/init.php');

// These were all sent from the server
$payload = '{"test": 2432232314}';
$header = array(
        'svix-id'  => 'msg_p5jXN8AQM9LWM0D4loKWxJek',
        'svix-timestamp' => '1614265330',
        'svix-signature' => 'v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=',
    );

// Throws on error, returns the verified content on success
$wh = new \Svix\Webhook('whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw');
$json = $wh->verify($payload, $header);
```
</TabItem>

<TabItem value="cli" label="CLI">

```sh
export SVIX_AUTH_TOKEN="AUTH_TOKEN"
svix verify --secret whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw --msg-id msg_p5jXN8AQM9LWM0D4loKWxJek --timestamp 1614265330 --signature v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE= '{"test": 2432232314}'
```

</TabItem>

</Tabs>

---

## Read next

- [Event types](/using-the-api/webhooks/event-types)
- [Migration guide](/using-the-api/webhooks/migration-guide)
- [Troubleshooting](/using-the-api/webhooks/troubleshooting)
