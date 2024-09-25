---
title: Configure the QuickBooks Desktop Web Connector
description: Get help if you have questions or experience issues when configuring and authenticating the QuickBooks Desktop Web Connector
sidebar_label: Configure connector
hide_table_of_contents: false
---

With the QuickBooks Web Connector in place, you need to configure and authenticate it once you complete the prerequisites. 

## Prerequisites

1. Check that your machine is running Windows 10 or higher. 
2. Open QuickBooks Desktop and log in using a QuickBooks Desktop administrator account. 
3. In the QBD application, select and open your company. 
4. In the application, navigate to **File > Utilities > Verify Data** to verify your company data.
5. In the application, navigate to **File > App Management > Update Web Services**. This will open the QuickBooks Web Connector. 

Once you complete these steps, click **Next** in the connection flow and proceed to the next set of instructions. 

## Configure connector

1. Click the **Download config file** button in the connection flow. 

    If you're blocked from installing, contact your system administrator.
2. In the Web Connector application, go to **File > Add an Application**.
3. Select and open the **.qwc** configuration file you donwloaded, click **OK** in the pop-up window. 
4. In the Application Certificate window, choose Yes, always; allow access even if QuickBooks is not running.
5. In the pop-up Authorization window, click Yes. Click Continue..., then Done to confirm access. 
6. Check that you see a new row with your company name appear in QuickBooks Web Connector.

Once you complete these steps, click **Next** in the connection flow and proceed to the next set of instructions. 

## Authenticate connector

1. Copy the password that's generated for you in the connection flow. 
2. In the Web Connector, click on the blank **Password** field on the row with your company name. 
3. Paste the password you copied, press **Enter**, then press **Yes**. 
4. Ensure the *Auto-run* checkbox is selected on the row with your company name. 
5. In the Web Connector, click **Select All**, then click **Update Selected**.
6. Keep the Web Connector running and return to the connection flow.

Remain on the connection flow page. Once we hear from the QuickBooks Web Connector, the flow will automatically proceed to the next step to confirm your connection. This may take up to 30 seconds.

## Read next

- If you are notified of an issue with the connection, check how you can [resolve issues](/smb-help-hub/integrations/qb-desktop/troubleshooting).