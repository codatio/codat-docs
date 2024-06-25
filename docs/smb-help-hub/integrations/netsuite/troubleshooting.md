---
title: Troubleshooting
description: Find help if you experience issues when connecting NetSuite
hide_table_of_contents: false
---

Unable to access data 

we were unable to connect to netsuite because we couldnt find the bundles. make sure all the bundles have completed installing before proceeding. 

the integration is blocked - - go into the integration page and set a field from blocked to enabled. 
 
select applinkprod 

make sure you show inactives

the bundle is not installed

try again - is to try and install the bundle again

first checkt he bundle, then check the intgration


Ensure the bundle is still installed
if you’ve deleted it, you can reinstall it here



SuiteCloud not configured correctly

We were unable to connect to netsuite because some required suitecloud features are not enabled. please check again. 

Ensure SuiteCloud features are still enabled

Make sure the integration is not blocked

You will need to go through the flow, directed by your financial service provider, installing is not enough


pay your license or reinvoke the user



smb wouldnt know that anything has gone wrong unless we or the client emails them that the fetch has failed. we will display the error in the 




import Questions, { Question } from '@components/global/Questions';

Filter our troubleshooting help using the search bar below or scroll through the available questions.

<Questions>
  <Question
    question="How do I resolve the 'SuiteCloud not configured correctly' error?"
    answer={`
<p>If you encountered the 'SuiteCloud not configured correctly' error, this means SuiteCloud features that we need to connect to NetSuite haven't been enabled.</p>
<p>To resolve, navigate to <b>Setup -> Company -> Enable Features</b> in NetSuite and ensure the checboxes for the following <b>SuiteCloud</b> features are ticked, and the changes have been saved:

SuiteScript
CLIENT SUITESCRIPT
This setting lets us implement a custom script that runs on your NetSuite browser.
SERVER SUITESCRIPT
This setting lets us implement a custom script that runs on the NetSuite server.

SuiteTalk (Web Services)
REST WEB SERVICES
This setting provides us with an additional interface for interacting with NetSuite.

Manage Authentication
TOKEN-BASED AUTHENTICATION
This setting enables us to interact with NetSuite using a stronger security mechanism.


  <ul>
    <li>
    
    </li>

  </ul>

<a href="https://docs.codat.io/integrations/accounting/overview">integration-specific documentation</a>

</p>
<p>If you encountered the 'SuiteCloud not configured correctly' error, this means SuiteCloud features that are required haven't been enabled.</p>    
    `}
  />
    <Question
    question="W"
    answer={`
Ensure the bundle is still installed
if you’ve deleted it, you can reinstall it here
    `}
  />
    <Question
    question="W"
    answer={`
Make sure the integration is not blocked
    `}
  />
    <Question
    question="I"
    answer={`
You will need to go through the flow, directed by your financial service provider, installing is not enough
    `}
  />
    <Question
    question="W"
    answer={`
Codat dsds
    `}
  />
    <Question
    question="W"
    answer={`
Codat dsds
    `}
  />
    <Question
    question="W"
    answer={`
Codat dsds
    `}
  />
    <Question
    question="W"
    answer={`
Codat dsds
    `}
  />
</Questions>
