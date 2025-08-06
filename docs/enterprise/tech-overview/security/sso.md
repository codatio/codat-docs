---
title: "Enterprise SSO"
description: "Learn about the prerequisites for setting up enterprise SSO"
---

:::tip Enabling enterprise SSO

If you wish to use enterprise SSO but don't already have it enabled, please speak with your Account Manager first.
:::

Before performing any setup on your side, please fill out the questionaire below and share the answers with your Account Manager.

### Customer questionnaire

- What identity provider do you use?

- Do you require federated (full SSO) sign-out, i.e. a sign-out of both the application level session and the SSO session? If so, please specify the sign-out URL.

- What environments do you require (e.g. Test & Prod, Prod only)? If you need multiple environments, the users need to be on different domains.

- Do you require the SAML authentication request to be signed? If so, please specify the algorithm (RSA-SHA1, RSA-SHA256) and the algorithm digest (SHA1, SHA256). We can provide the public key for signature verification.

- Do you require IdP-initiated logout, i.e. if a user logs out in your AD or performs another profile change, do you require us to log out the individual?

### Connect your Identity Provider

In order to support SSO, you need to connect your Identity Provider (IdP) to Codat. Common examples of integrating IdPs include Active Directory (AD), PingFederate or OKTA.
In your IdP, perform the following setup:

1. Set up groups corresponding to the four Codat roles (Administrator, Analyst, Onboarding, Developer) for each Codat instance you have, and add at least one test user to each group for later testing.

   Send us the group name to role mappings, including ID and mapping to our roles:

   | Codat role name | Your group name | Your group ID |
   | :-------------- | :-------------- | :------------ |
   | Administrator   |                 |               |
   | Analyst         |                 |               |
   | Onboarding      |                 |               |
   | Developer       |                 |               |

2. Provision an SSO app registration (or equivalent) in the IdP. This should be configured to:

   a. Return SAML responses that include the `groups` claim. This ensures that an ID representing each AD group the user
   belongs to is sent to us for mapping the client/role access.

   b. Set the `Reply URL (Assertion Customer Service URL)` and `Redirect URL` to
   `https://authentication.codat.io/login/callback?connection=[client-name]-[instance-name]-saml-connection`

   c. Include the following claims for each user in the SAML responses from the authenticating IdP:

   - `email`
   - `groups` array (one ID representing each AD group the user belongs to and matches the mapping for the client/role access)
   - `displayname` (comprised of the first and last name)

   If claims are not named as above, please let us know the names and namespaces of the claims.

3. Send us the `metadata.xml` file or, alternatively, all of the following:

   - IdP sign-in URL
   - IdP sign-out URL (if required)
   - Signing certificate
   - SAML claim attributes, including name and namespace (see 2d above)

4. Once we have the above information, we can send our SAML `metadata.xml` file containing EntityId, Signing Key and Urls.

Once this setup is complete, we will provide you with a unique login URL to be use for logging in.
This should be used instead of the normal Codat Portal login page.

Note: to help maintain best in class security we support SP-Initiated and not IdP-Initiated flows. Please refer to Auth0's documentation
on [IdP-Initiated Risks and considerations](https://auth0.com/docs/authenticate/protocols/saml/saml-sso-integrations/identity-provider-initiated-single-sign-on#risks-and-considerations)
for more information on this.

### User management

While using SSO, you will no longer use the `Users` page within the Codat Portal to manage user. Instead this will be done within your identity provider.

#### Add a new user

The adding of a user is done through adding them to one (or many) of the groups supplied as part of setup. Note - users will assume the highest level of privilege when added to multiple groups.

After a user has been added to the relevant group within your identity provider, they can use the login URL provided and will be added to your Codat instance.

#### Removing a user

Preventing a user from accessing the Codat Portal can be done through:
- Removal from all specified access groups in your identity provider.
- Prevention of authentication via your identity provider.

### FAQ

What are the SAML configuration urls?

| SAML configuration                    | Format                                                                                                                                        |
| :------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier (Entity ID)                | Client-specific urn, such as <br />`urn:auth0:codat:[client-name]-[instance-name]-saml-connection`                                            |
| ReplyURL (assertion consumer service) | Client-specific urn, such as <br /> `https://authentication.codat.io/login/callback?connection=[client-name]-[instance-name]-saml-connection` |
| Sign-on URL                           | Client-specific urn, such as <br /> `https://app.codat.io/sso/signin/[client-name]-[instance-name]-saml-connection`                           |
| Logout URL                            | None                                                                                                                                          |
