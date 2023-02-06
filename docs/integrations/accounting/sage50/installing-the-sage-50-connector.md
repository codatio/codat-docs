---
title: "Install the Sage 50 connector"
slug: "installing-the-sage-50-connector"
description: "Guide for SMB users to set up our Sage 50 on-premise connector."
createdAt: "2019-05-06T23:45:25.650Z"
updatedAt: "2022-11-25T12:15:40.507Z"
---

:::note Linking companies using the Sage 50 connector

Customers must install and run the Sage 50 connector on the same computer where Sage 50 (UK) is installed. If in doubt, ask your customer to link their accounting data from the computer that they normally use to access Sage 50 (UK).
:::

To install the Sage 50 connector, the user who is connecting their company data—the SMB user—must complete the following tasks:

1. [Download the connector](/installing-the-sage-50-connector#1-download-the-connector)
2. [Launch the connector and enter their licence key](/installing-the-sage-50-connector#2-launch-the-connector-and-enter-their-licence-key)
3. [Verify company data file](/installing-the-sage-50-connector#3-verify-company-data-file)
4. [Select a company data file](/installing-the-sage-50-connector#4-select-a-company-data-file)
5. [Enter their Sage 50 credentials](/installing-the-sage-50-connector#5-enter-their-sage-50-credentials)
6. [Verify company data](/installing-the-sage-50-connector#6-verify-company-data)

## 1. Download the connector

First, the user downloads the Sage 50 on-premise connector from a Codat Link URL.

If you're using the Codat Link flow, the user can download the connector after they've selected Sage 50 as their accounting package in Link. To start the download, they click **Download Connector**:

![](https://files.readme.io/c15ec77-Download_connector.png "Download connector.png")

Next, the user copies their license key (which is the same as their _CompanyId_ in Codat) to use in the next step.

If you've built your own Link flow, the **linkUrl** field on the company's Sage 50 data connection will initiate the installer download.

:::note About the connector download file

The Sage 50 connector is packaged as a .exe file. To increase your clients' trust in the download, the filename is prefixed with your company name; that is, the name of the company the user is connecting their data to. For example: `YourCompanyName-sage50-connector.exe`. Symbols in the filename are replaced with dashes.

Additionally, the file is signed with an Extended Validation Code Signing Digital Certificate issued by GlobalSign.
:::

## 2. Launch the connector and enter their licence key

When the connector has been downloaded and run, a screen similar to the following is displayed.

<img src="https://files.readme.io/1b40e3b-Connect_to_Sage_50.png" />

If the user's computer has anti-virus software installed, they might be asked to confirm they trust the source of the file. This confirmation is specific to each anti-virus program.

The user should have been provided with a _Licence Key_ when they downloaded the Sage 50 connector. They should enter this in the **Licence Key** box and then click **Install**.

The user's licence key is their Codat company ID.

<img src="https://files.readme.io/7955324-Connect_to_Sage_50_License_Key.png" />

If the licence key is valid, the connector will be installed; this takes a few minutes to complete. The user will see an error if the licence key is not valid.

The progress bar shows the status of the installation; for example:

![](https://files.readme.io/888be28-Connect_to_Sage_50_License_Key_-_starting_connector.png "Connect to Sage 50 License Key - starting connector.png")

Once the installation is complete, the user will be taken to the Sage 50 Connector's configuration screen as described in the next step.

## 3. Verify company data file

The connector will start automatically once the installation is complete and display the **Verify company data file** step:

![](https://files.readme.io/b585819-Verify_company_data_file.png "Verify company data file.png")

Before progressing to the next step, the user should open Sage 50 for the company data file they want to connect to, and check the file for errors.

For more information on how to check the file for errors, see <a className="external" href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112158551&hypermediatext=null" target="_blank">Check your data is in good health</a> in the Sage 50 documentation.

## 4. Select a company data file

On the **Select a company data file** step, the user selects the company data file to link with. Once selected, the **Data file location** box is automatically populated with the file path where the company data file resides in the user's system.

![](https://files.readme.io/39c7a88-Select_company_data_file.png "Select company data file.png")

Alternatively, you can manually enter the data file location path in the **Data file location** box.

If you want to sync demo data, you can enter the following path:

```
C:\PROGRAMDATA\SAGE\ACCOUNTS\2022\DEMODATA
```

For example:

![](https://files.readme.io/476eff9-Select_company_data_file_demodata.png "Select company data file (demodata).png")

## 5. Enter their Sage 50 credentials

On the **Set your credentials** step, the user enters their Sage 50 username and password in the boxes provided. The username and password entered must be for a Sage 50 user account with permission to read all the data you plan to synchronize.

:::caution Create a separate login for pushing data

If your product requires pushing data to Sage 50, the user should create a separate user login in Sage 50 to be used solely by the Sage 50 Connector. This is required to prevent concurrent access issues.

For more information, see the separate article about [pushing data to Sage 50](/pushing-data-to-sage-50).
:::

Once the Sage 50 information has been entered, the user should click **Next** to proceed to the final step.

![](https://files.readme.io/1861510-Set_your_credentials.png "Set your credentials.png")

If the user enters an incorrect username, password, or data directory location, the connector will show them an error message.

## 6. Verify company data

If valid information was entered in the previous step, a confirmation dialog is displayed that gives helpful information about the company that will be linked. This includes:

- The full company name
- The last transaction date
- The Sage version
- The file location in the user's system (Data directory)

![](https://files.readme.io/3daca42-Verify_company_data.png "Verify company data.png")

This helps to ensure the correct company data will be synced and prevent incorrect company data from being processed.

Assuming this is the correct file to link, the user should select the **I confirm I want to link this company** checkbox, then click **Next**.

The user is then redirected to the Codat Link flow, where they can see that the connection was successful.

![](https://files.readme.io/9a9caa6-after_successful_Verify_company_data.png "after successful Verify company data.png")

The initial synchronization will take several minutes to complete, although larger Sage 50 files (for example, files with a high number of transactions) might take up to 30 minutes.

Depending on the configuration as [documented here](/offline-connectors), the connector will perform one of two possible actions after the initial synchronization is complete. The connector will either:

- Run in the background and automatically synchronize data when new datasets are queued; or
- Uninstall itself once the initial one-time sync is complete.
