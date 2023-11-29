---
title: "Enterprise SSO"
description: "Set up for enterprise SSO"
---


:::tip Turning on enterprise SSO

If you wish to use enterprise SSO and don't already have it enabled, please speak with your Account Manager first.
:::

Before doing any set up on your side, please fill out this questionaire and send the answers to your Account Manager.

#### Customer Questionnaire

- What Identity Provider do you use?

- Do you require federated (full SSO) sign-out?  This is a sign-out of both the application level session and SSO session.  If so please specify the sign-out URL.

- What environments do you require? (Test & Prod, Prod only?) If you need multiple environments, the users need to be on different domains.

- Do you require the SAML authentication request to be signed?  If so please specify the Algorithm (RSA-SHA1, RSA-SHA256) and Algorithm Digest (SHA1, SHA256).  We can provide the public key for signature verification.

- Do you required IdP Initiated Log out?  This means, in your AD if a user logs out (or other profile change), do you require us to log out the individual.

#### Connecting your Active Directory (AD) or Identity provider (IdP) to support SSO to Codat.

In your AD or IdP you will need to: 
- Set up groups corresponding to the 4 Codat roles (Administrator, Analyst, Onboarding, Developer) for each Codat instance you have. 
- Add at least one test user to a group for later testing.

- Send us the group name to role mappings, including ID and mapping to our roles: 

| Codat role name | Your group name | Your group ID |
| :- | :- | :-|
| Administrator |  | |
| Analyst |  | |
| Onboarding |  | |
| Developer |  | |

- Provision an SSO app registration (or equivalent) in the IDP. This should be configured to: 

    - Return SAML responses that include the groups claim. This will ensure that an ID representing each AD group to which the user belongs is sent to us for mapping to client/role access. 

    - Set the Reply URL (Assertion Customer Service URL) to https://authentication.codat.io/login/callback?connection= . 

    - Ensure a Redirect URL of https://authentication.codat.io/login/callback?connection= is set. 
    - SAML Responses from the authenticating IDP must include the following claims for each user:

        - `email`

        - `groups` array, (one ID representing each AD group to which the user belongs and matches the mapping for client/role access)

        - `displayname` (comprised of first name and last name)

        - If claims are not named as above, please let us know the names of the claims (and namespaces)

- Send us the `metadata.xml` file or alternatively:

    - IdP sign-in URL.

    - IdP sign-out URL (if required)

    - Signing Certificate.

    - SAML claim attributes including Name and Namespace (see 4b. above).

- Once we have the above info we can send our SAML `metadata.xml` file containing EntityId, Signing Key and Urls.
<br />

When this is all set up you will be provided with a unique login url per environment (Codat instance) to be used for logging in. Users will **not** be able to login via the normal Codat Portal login page. 

### Adding a new user

Instead of using our users section in the Codat Portal you will instead add a user in your IdP to one of the groups you set up above. 

Once this is done they can use the login url provided and will be added to your Codat instance.

Similarly, to remove a user you can remove them from the group in your IdP.

# FAQs:

| SAML configuration | Format |
| :- | :- |
| Identifier (Entity ID) | 	This will be a client specific urn such as: <br />urn:auth0:codat:[client-name]-[instance-name]-saml-connection   |
| ReplyURL (assertion consumer service) | This will be a client specific urn such as: <br /> https://authentication.codat.io/login/callback?connection=[client-name]-[instance-name]-saml-connection  | 
| Sign on URL | This will be a client specific urn such as: <br /> https://app.codat.io/sso/signin/[client-name]-[instance-name]-saml-connection | 
| Logout URL | None | 