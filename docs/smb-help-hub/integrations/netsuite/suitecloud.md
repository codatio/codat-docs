---
title: Configure SuiteCloud
description: Understand which features you need to enable for SuiteCloud and see how it's done
sidebar_label: Configure SuiteCloud
hide_table_of_contents: false
---

import Arcade from '@components/global/Arcade'

Your financial service provider has asked you to share the data from your NetSuite account with them. For this, they asked you to complete a set of steps, one of which requires you to **configure SuiteCloud** by enabling some SuiteCloud features. 

## What is SuiteCloud?

[**SuiteCloud**](https://www.netsuite.co.uk/portal/uk/platform.shtml) is a set of tools and applications that lets a NetSuite customer customize their NetSuite experience and adapt it to their specific needs. 

We require you to enable certain features of SuiteCloud as part of creating a flow of data between your NetSuite account and your financial service provider.

## How do I configure SuiteCloud?

#### Interactive tutorial

Follow our tutorial below to see each action in detail. Click the blue pulsing dot to begin. 

<Arcade
  url="https://app.arcade.software/5ChtxJYRG4xv085vKYFc?embed&show_copy_link=true"
  title="Enable Features - SuiteCloud"
/>


:::info Tutorial controls

- To view the tutorial full-screen, press the double arrow icon in the top right corner.  
- To replay the tutorial, click the circle arrow next to the _Enable Features - NetSuite_ header.

:::

#### Step-by-step instructions

When completing the steps your provider shared with you, you will reach the **Configure SuiteCloud** screen. Once there, do the following: 

1. Click **Enable Features**.  
  This will take you to the _Setup - Enable Features_ screen in NetSuite. 

2. In the _Setup - Enable Features_ screen, locate the **SuiteCloud** settings. 

  Depending on your chosen NetSuite layout, this may be a tab on the right-hand side of the settings ribbon, or a collapsed view at the bottom of the page.

3. Locate the settings listed below and tick the selection box next to each setting. 

  Some of these settings may already be enabled for your account. In that case, you don't need to tick them again. 

  :::info Enable features
  
  <br/>

  #### SuiteScript
  
    - CLIENT SUITESCRIPT  
      This setting lets us implement a custom script that runs on your NetSuite browser.
    - SERVER SUITESCRIPT  
      This setting lets us implement a custom script that runs on the NetSuite server.
  
  <br/>

  #### SuiteTalk (Web Services)
  
    - REST WEB SERVICES  
      This setting provides us with an additional interface for interacting with NetSuite.
  
  <br/>

  #### Manage Authentication
  
    - TOKEN-BASED AUTHENTICATION  
      This setting enables us to interact with NetSuite using a stronger security mechanism.
  :::

4. Click **Save** to apply the settings you selected and move to the next step. 