---
title: "Workstreams involved in implementation"
description: "Details of the key workstreams to mobilize to set your Codat implementation up for success"
sidebar_label: "Workstream functions"
---

This page details the essential workstreams required to ensure a seamless and efficient implementation. By understanding and addressing these workstreams, your organization can achieve robust security, streamlined onboarding, optimal data handling, and effective internal and external stakeholder management.

## Security and compliance requirements

Ensuring the security and compliance of your API integration will be top of mind for your Legal, Compliance, and Data teams. They’re likely to conduct a thorough risk assessment before the implementation, and may be looking for the following to be delivered as part of it:

- Data encryption on webhooks (such as mTLS, HMAC)
- Secure authentication methods (OAuth)
- Adherence to relevant industry regulations (such as GDPR, HIPAA)
- Continuous monitoring and auditing processes to detect and respond to potential threats in real time

Engage with these stakeholders early or before the implementation to ensure their requirements are built into the implementation programme plan with appropriately skilled resources and funding assigned.

| Key inputs                                                                                  | Key outputs                                                                                                                                             |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Your organization’s Data Governance Policy <br/> - Third Party Technology Risk Assessment | - Webhook encryption <br/> - Compliant method for data ingestion, retention, and transfer <br/> - Secure authentication method for customers to connect |

## Front-end customer onboarding journeys

Designing seamless customer onboarding journeys is critical for user adoption and satisfaction.

This involves creating intuitive user interfaces, integrating accounting software requirements, and automating consent capture. This should be supported by clear instructions and guidance throughout the onboarding process to minimize friction and enhance user experience. Codat provides detailed connection instructions on our [Help Hub](https://help.codat.io/).

| Key inputs                                                                                                                                                                                                                          | Key outputs                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Your organization’s Privacy Policy <br/> - Your organization’s Design Principles <br/> - [Codat’s Link solution](/auth-flow/overview) <br/> - [Codat’s Connection Management solution](/auth-flow/optimize/connection-management) | - Customer journey design <br/> - Data privacy impact assessment <br/> - User Acceptance Test (UAT) strategy <br/> - External / client communications strategy |

## Colleague journey

Supporting your internal teams as they adapt to the new API integration is essential for operational efficiency.

| Key activities                                                                                                                                                                                                                                                  | Key inputs | Key outputs                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| - Provide comprehensive training programmes <br/> - Develop user-friendly documentation and support materials <br/> - Set up dedicated support channels <br/> - Foster a feedback loop to continuously improve the internal experience based on colleague input |            | - Colleague journey design <br/> - Internal communications strategy |

## Architectural approach

Establishing a robust architectural approach involves selecting and integrating your own or a third-party user interface (UI) that can effectively consume and display the external data.

| Key activities                                                                                                                                                                                                                 | Key inputs                                                                                | Key outputs                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| - Evaluating UI options for compatibility and scalability <br/> - Design a flexible and scalable architecture <br/> - Ensure seamless API integration <br/> - Conduct thorough testing to ensure data accuracy and performance | - Third-party software / UI <br/> - Internal data schema <br/> - System impact assessment | - Architecture diagram <br/> - Environment strategy <br/> - System Integration Test (SIT) strategy |

## Data ingestion and internal data sharing approach

Effective data ingestion and internal data sharing are critical for maximizing the value of external data.

| Key activities                                                                                                                                                                                            | Key inputs                                                                                      | Key outputs                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| - Develop automated data ingestion pipelines <br/> - Ensure data quality and consistency <br/> - Set up secure and efficient data storage solutions <br/> - Implement protocols for internal data sharing | - Your organization’s preferred cloud platform <br/> - Your organization’s preferred data tools | - Architecture diagram <br/> - Ingestion plan <br/> - Test to Prod deployment plan |

## Product mapping

Mapping external data to your products, such as credit models for lending, requires meticulous planning and execution.

| Key activities                                                                                                                                                                                                                                                      | Key inputs                                                 | Key outputs                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------- |
| Specific to use case and solution, e.g.: <br/> - Analyze external data sources to identify relevant data points <br/> - Develop algorithms and models to integrate data into existing products <br/> - Continuously refine models based on performance and feedback | - Product roadmap <br/> - Your organization’s credit model | - Solution design <br/> - UAT strategy |

## Accounting software setup

Each accounting software has its own process to set up the integration that varies in complexity. In addition, some software providers require commercial agreements to be in place. Codat will guide you through the process to enable your integration for a scaled launch.

| Key activities                                                                                                                                                                                                              | Key inputs                                                            | Key outputs                                                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| - Configure accounting software developer portals <br/> - Retrieve API keys <br/> - Complete questionnaires required by the provider <br/> - Ensure compliance with technical implementation requirements and best practice | - Password manager with MFA capability <br/> - Dedicated team mailbox | - Commercial agreements <br/> - Compliant integrations <br/> - System Integration Test (SIT) strategy <br/> - Environment strategy |
