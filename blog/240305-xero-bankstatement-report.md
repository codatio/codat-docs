---
title: "Upcoming 2024-04-02: Xero BankStatement Report breaking change"
date: "2024-03-05"
tags: ["Deprecation"]
authors: mcclowes
---

On April 2, 2024, Xero are implementing a breaking change to their `BankStatement` Report.

<!--truncate-->

If this affects you, your organization should have received an email from Xero:

> On 2 April 2024 PDT/3 April 2024 NZT/AEST we plan to release a breaking change to how the Bank Statement report within the Reports endpoint of the Accounting API is accessed. **This change will make the Bank Statement report inaccessible unless you confirm that you meet some additional terms and conditions about your security practices.** We’re making this change as part of our ongoing efforts to improve the security of the Xero ecosystem.
> 
> You’ve been sent this email because you have accessed the Bank Statement report in the last six months.  If you don’t need access to the Bank Statement report anymore then you don’t need to do anything.  We will remove your access to this report through the API on 2 April 2024 PDT/3 April 2024 NZT/AEST.
> 
> If you want to continue accessing the Bank Statement report using the Xero API you will need to take the following steps **before 2 April 2024 PDT/3 April 2024 NZT/AEST**:
>
> 1. Read, understand and sign [the addendum to our developer terms and conditions here](https://au1.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBJeUiW3R6TEmiCOk1pgDH5Dkj52mWSuBQoofU2fw8p6TtE69YTVk2lKYzbpQm9_WI*)
> 2. Start requesting the accounting.reports.bankstatement.read scope when establishing new connections. Existing connections will not be affected at this stage.
> 3. Confirm by replying to this email that you’ve taken these steps.
> 
> Importantly, there will be **no extensions to the 2 April 2024 deadline granted**, so please make sure you are prepared.
> 
> If you have any questions or if there is anything we can do to help please reply to this email and one of our team will get back to you.

The `BankStatement` Report report is used by Codat to populate the `Balance` fields within the `Bank Accounts` and `Bank Transactions` datatypes.

From April 2, 2024, these fields will not be populated in Codat’s datatypes, unless you complete Xero’s required steps (as below).

## New behavior

Unless the Xero required steps outlined below are completed, we will no longer populate the `Balance` fields within the `Bank Accounts` and `Bank Transactions` datatypes.

## Action required

**If you consume and use the affected datatypes and fields** you will need to: 

1. **Read, understand and sign the addendum** to Xero’s developer terms and conditions here: https://au1.documents.adobe.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhBJeUiW3R6TEmiCOk1pgDH5Dkj52mWSuBQoofU2fw8p6TtE69YTVk2lKYzbpQm9_WI* 
2. **Confirm with Xero that you’ve taken these steps** by replying to Xero’s email (or email [api@support.xero.com](mailto:api@support.xero.com)).
3. **Confirm with Codat you’ve done this.** Forward a copy of your email to Xero to [partners@codat.io](mailto:partners@codat.io).

:::note Note
Xero’s communication requires changes to be made to scopes that are requested for new connections. This will handled by Codat on your behalf, **as long as we are notified** that you have completed the required steps with Xero as above. 

:::

**If you do not use these datatypes or do not have a need for the `Balance` field, then no action is required. **

## Expected impact if no action is taken

The `Balance` fields within the `Bank Accounts` and `Bank Transactions` datatypes will no longer be populated from Xero connections.

There is no impact to other integrations, datatypes, or other fields within the affected datatypes.
