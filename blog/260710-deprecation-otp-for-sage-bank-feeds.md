---
title: "2026-07-10: Security enhancement to Sage Bank Feeds connection flow"
date: "2026-04-02"
tags: ["Deprecation"]
authors: a-diarra
---

On **July 10, 2026**, Codat will introduce a one-time passcode (OTP) step to the [Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/) connection flow.

<!--truncate-->

This change is part of our ongoing program of security enhancements across the Codat platform.  It follows similar updates already applied to QuickBooks Online and Xero.

## What's changing

From  **July 10, 2026**, clients using our out-of-the box [Authentication UI](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#optional-add-a-call-to-action-link) for the [Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/) connection flow will need their users to complete a one-time passcode verification step when connecting. 

You must update your user journey to surface the verification code during authentication.  

## Action required

Clients using [Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/) must update their application to include the new OTP generation step before **July 10, 2026**. See how to [Surface the one-time password (OTP) to the user](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-setup#surface-the-one-time-password-otp-to-the-user) for implementation instructions.

You may also want to update your internal and client-facing documentation in line with this change. Contact [Codat Support](support@codat.io) if you’d like additional help with this update.

## Expected impact if no action is taken

After  **July 10, 2026**, the existing out-of-the-box [Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/) flow will always require a valid OTP to establish the connection.

Clients who haven’t updated their integration won’t be able to establish new Sage Bank Feeds connections until the change is made.