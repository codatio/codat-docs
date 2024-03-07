---

title: "Managing platform credentials"
description: "Best practices for enterprise clients to register with accounting, banking or commerce platforms and storing the credentials."
sidebar_label: "Managing platform credentials "

---
# Managing platform credentials

Your organisation will usually need to register with each of your preferred platforms to enable production customer data to be shared to and from each integration, and in some cases, to access a developer account for development and testing.

## Before setting up
1. **Identify any existing agreement or relationship with the platforms your organisation would like to integrate with**

 For example, this could be any Open Banking relationship or a existing direct integration with an accounting platform.

2. **Contact the existing relationship owner/system administrator** and understand:
- the scope of existing agreement/relationship and use of data
- how to access credentials like API keys to enable the integration in Codat

3. **Request a vault or storage location to store the keys**

   This is likely to be a requirement set by your data governance teams and will need to be suitable for highly confidential classification.

   Keys can be securely stored in (and then retrieved from) the Codat portal before going live if required as an interim solution.

**Existing accounts are likely to use a generic mailbox email address at your organisation**

## How to set up
1. Refer to the [registration or partnership requirements for each platform](https://docs.codat.io/integrations/accounting/overview#integration-registration-and-partnerships)

2. Engage with your Implementation Specialist for platform specific guidance on establishing a commercial relationship

3. When creating new accounts with the platforms, it’s best to use a generic mailbox (e.g. system-admins@yourorganisation.com) where multiple users have controlled access - this is a requirement for some platforms, including Quickbooks - to reduce the risk of lost access

4. Once you have registered or created an account with each platform, you can retrieve the client ID/secret keys (or equivalent) from their developer portal and some platforms offer sandbox companies for testing 
