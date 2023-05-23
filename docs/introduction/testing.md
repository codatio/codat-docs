---
title: "Test your Codat solution"
description: "Page TBC"
---

intro


test instance


create when upgrading startup
if enterprise, please speak to us

what settings are copied

codat's own sandbox

details of different integration accounts

sandboxes in billing






Page coming soon0





### Test client creation

When you upgrade to our start-up plan, we automatically create a test client to support you in testing your solution before go-live or validating that your live solution is performing as expected. 

We clone your

Feature overrides
 Client settings (One time sync, readonly)
Client integrations settings and credentials
Client sync settings
Client rules
Client link settings
All users will be migrated from prod client into new test client
Currently to see the new test client once it has been created a user will need to reauthenticate (log out/log in in portal, or get a new token if using APIs)
Test client creation happens in the background and is asynchronous so might be created quickly or might take a while to create, depending on demand
Limit of 50 connected companies



One question I had was: If there are any tricks for
for maintaining sort of a set of test companies with sandbox with, like the the sandbox plaid integrations connected to them. separated from our like live production companies.

So I some of our integrations. The you have some box in the name.
basically or excluded from any billing, so you could keep those maintained in your instance. You keep those on in your instance, that you won't get charge for those or anything like that. But 0
demo company stuff, or some instance, as some integrations basically you will be charged for. because just because the company itself is a demo company, the integration is
part of I pulled by isn't that sandbox integration


so to confirm my understanding. Like with the plaid integration the plan integration has really like. Although we can load up both sandbox secrets and production secrets.
we have one setting that switches it from using the sandbox cloud environment versus the production cloud environment. And so going forward once we switch that production, then all cloud integrations
that that go through those companies will will be using the plaque production credentials. Correct?
user avatar
Max Clayton Clowes
14:58
Exactly. So
basically you need 2 different code out clients today.
and 2 sets of Api keys. Now.

testing experience won't have those limitations. So once we roll that out, this new type of client will be able to migrate you over to that.
and I, i'll proactively reach out to you in the next kind of couple of days before that, and then we can rem you won't. Have those limits, so you both your production and your test.
we'll have a similar kind of experience.


yeah. So when when you upgrade, you get a confirmation model that you have successfully upgraded. and that we are asynchronously creating
a mirror of your production account
as a test account. And then
you can read about testing with coda here. and it links to a Doc Page. i'll have to do like a pretty rapid turnaround on it. But
