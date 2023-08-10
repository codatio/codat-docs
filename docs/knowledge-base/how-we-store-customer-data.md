---
title: "How and where we store customer data"
---



Workflow 

SME selects the accounting package they wish to link.

They authorize the sharing of data with the Client, using Codat as the data processor.

This includes them using their username and password but this is never shared with Codat.

We use OAuth2 to securely access the data which they consent to.

Using the configured sync schedule this data is then pulled into Codat and stored in our data cache

This will stay here forever until is requested to be deleted.

We only pull data in given intervals per company.

We only pull the data which has been configured to be pulled.

We handle all rate limits and retrying the underlying platform may require.

The client accesses the SME data via our API.

This data is always available via our API.

It is accessed on a per company per data-type basis.

We don’t support batch exports.

You are informed when this data is available by using webhooks/rules configured in Codat.

Why

We often get asked why we need to store all our SME data.

Having it all available in our data cache provides a number of advantages:

Our rate limits are much more forgiving than many of the underlying platforms.

You are able to query our data more frequently and be able to access it whenever you require.

As we handle the rate limits to the underlying platform unless you are planning to access us over 1000 times a minute they’re not something you will need to worry about.

It’s much faster.

As we don’t need to call the underlying platform every time you request data from us it takes much less time for us to serve the SME data back to you.

We can tell you when data has changed rather than you needing to blindly poll our API.

As we know what the data was before and is now when we pull it we know if it has changed, allowing us to tell you if something has changed without the need for you to make any requests to us.

This reduces the number of requests you need to make to us as you only make a call when necessary.

Ability to provide additional value on top of the contributed data.

Now that we have the data ourselves we are also able to use it to power a suite of extra products; Assess, categorization, our portal

This increases the benefit you can get from Codat which wouldn’t be possible otherwise