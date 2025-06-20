---
title: "MYOB troubleshooting and integration reference"
description: "Frequently asked questions, things to know, and troubleshooting guidance for our MYOB integration"
sidebar_label: Troubleshooting
---

## Data type behavior

### Direct incomes

Direct incomes are mapped from <a className="external" href="https://developer.myob.com/api/myob-business-api/v2/banking/receive_money/" target="_blank">Receive money transactions</a> in MYOB.

When reading Direct incomes from MYOB, the `sourceModifiedDate` field is not available.

Additionally, `trackingCategoryRefs` is not available in data read from MYOB Essentials.

Codat's data model does not support negative unit amounts in line items of Direct incomes. If negative line amounts are read from MYOB, the `lineItems.unitAmount` is recorded as positive and the `quantity` is set to `-1`.

### Direct costs

Direct costs are mapped from <a className="external" href="https://developer.myob.com/api/myob-business-api/v2/banking/spend_money/" target="_blank">Spend money transactions</a> in MYOB.

When reading Direct costs from MYOB, the `sourceModifiedDate` field is not available.

Additionally, `trackingCategoryRefs` is not available in data read from MYOB Essentials.

Codat's data model does not support negative unit amounts in line items of Direct costs. If negative line amounts are read from MYOB, the `lineItems.unitAmount` is recorded as positive and the `quantity` is set to `-1`.

## Invoices

Codat does not currently support updating item based invoices.

## Integration behavior

### Synchronous integration

Our MYOB integration is a synchronous integration. However, for simplicity and consistency with the rest of Codat's integrations, you should treat it as asynchronous. Learn more about what that means when [creating, updating or deleting data](/using-the-api/push).

### Multiple currencies

MYOB Essentials does not support multiple currencies and records all transactions in local currency (AUD or NZD).

MYOB AccountRight supports multiple currencies, but still operates with base currency of AUD or NZD.

### Issue date timestamps

MYOB does not supply time information when the `issueDate` field is read by Codat. As such, the date field value is always `yyyy-mm-ddT00:00:00`.

### Performance

MYOB recommend that company files in their system are kept below 2GB. If a company has a large amount of data, some timeouts will be expected when consuming their service. If Codat encounters a timeout error when fetching data from MYOB, we will retry the operation a number of times. This may lead to some datasets taking longer than expected to complete or fetch errors.

To learn more, see the [504 Gateway Time out errors](https://apisupport.myob.com/hc/en-us/articles/6366818637583-504-Gateway-Time-out-errors) article in MYOB's support knowledge base.

## FAQs

### Where must company data be stored?

It must be stored online. Whilst MYOB AccountRight Live gives the option to store a company data file locally, this will make it inaccessible for Codat's integration.

**See <a href="https://www.myob.com/au/support/myob-business/product-account/working-online/put-your-company-file-online" target="_blank">MYOB's How to put your company online</a> for how companies can easily move their company file to the cloud if it is currently stored on their local machine.**

### How do I check whether company data is stored online?

When a company data file is correctly stored online (to enable linking with the Codat integration), the file should be visible when selecting 'Online' from the 'Open' menu within MYOB AccountRight.

<img src="/img/old/9c4e75a-AR_Live_Cloud_docs.PNG" />

### Does the integration support multiple company data files for the same linked connection?

The integration does not currently support this. This will be implemented in the future.

### How do I create a customer or a supplier without an address?

You may want to create or update a contact (a customer or a supplier) in MYOB without adding an address for them. Because a contact is expected to be either a billing or a shipping contact, you can alter the body of your request to add or change a contact without an address as follows:

```json
{
  "id": "customerId",
  "customerName": "customerName",
  "contactName": "contactName", /// must match contacts.name
  "emailAddress": "contact@contactEmail.com", /// must match contacts.email
  "phone": "", /// must match contacts.phone "addresses": [],
  "contacts": [
    {
      "name": "contactName", /// this should match the contactName
      "email": "contact@contactEmail.com", /// this should match the emailAddress
      "phone": [], /// must match phone
      "address": {
        "type": "Billing" /// this needs to be included as Billing
      }
    }
  ],
  "taxNumber": "taxNumber",
  "status": "Active",
  "modifiedDate": "2021-04-16T10:13:55.665Z",
  "sourceModifiedDate": "2021-04-16T10:13:55.665Z"
}
```
