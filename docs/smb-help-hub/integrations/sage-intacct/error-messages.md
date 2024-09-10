---
title: Find resolutions for error messages
sidebar_label: Resolve errors
description: Get help if you have questions or experience issues when connecting to Sage Intacct
hide_table_of_contents: false
---

## I haven't received an email with credentials

- it s in spam- obvi check your spam or internet connection
- you entered the wrong email - go to company > admin > web service users, view the user you created row and check that the account email address is what you wanted. 

if you need to change the email, navigate to the company > admin > web service users, fin dthe user you created and click view. click on the contact name. in the contact information pop up, click edit and enter the email address you want to use. then click save.

in the web services user information view, click edit, update the acocunt email address to match the email of the contact, and click save. enter your sage intacct password to verify the action. 

you will be redirected to the we services users table view, locate your web services user again and lcick edit. click the reset password button enter your sage intacct password to verify the action.

you should now have received the email. 

if you still havent received it, this could be a problem with your inbox's setup or with your sage intacct instance. please check and resolve these issues internally. 


https://www.intacct.com/ia/docs/en_US/help_action/Administration/Users/web-services-only-users.htm#EditaWebServicesuser

## How do I resolve the 'Unable to connect to Intacct' error?

Check that you entered the correct Web Services user credentials from the email you received, and that you have enabled the Web Services subscription.

this could be for one of two reasons - 

1. wrong credentials

tro resolve, check the email and try entering them again

2. web services subscription is not active

to resolve, enable it and start the flow agian/ here is the detail article on this.



## How do I resolve the 'Missing permissions' error?

the web services user doesnt have the correct permissions or roles assigned to it. to resolve, cklikc try agian, go back to the permissions / roles assignment step and check that all the required permissions have been assigned. 
you can also use this detailed artucle to verify and assign missing roles or permissions

here we can list the full permissions, and if you still want them grnaular, then definitely look at the detailed article.

## How do I resolve the 'Top level access only' error?

you had multi entity turned on, but had restricted access.
The Web Services user cannot access your subsidiary.

we need clarity on what the erorr mesage in Link will say. 
to resolve, go to Cmpany > Admin > Siubscriptions. scroll down to Multi-entity Management and click Configure next to the toggle. on the Manage multiple enities screen, untick the "Restrict access to top level only" checkbox and you also need to fill in the IET credits journal  with Inter Entity Journal. After that you can click save.

This will make your instance similar to what it was as a single entity. You can uncheck this box if you would like which will allow users to select to work at the Top Level or the Entity Level.
You will also need to fill in the IET credits journal. This journal is used when credits are applied to AR invoices or AP bills that generate an inter-entity transaction (IET) with no source payment record.