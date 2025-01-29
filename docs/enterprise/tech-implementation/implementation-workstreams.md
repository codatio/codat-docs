---
title: "Implementation workstreams"
description: "Details of the key workstreams that enterprise clients should mobilize to set their Codat implementation up for success"
sidebar_label: "Workstreams involved"
---

This page details the essential workstreams required to ensure a seamless and efficient implementation. By understanding and addressing these workstreams, your organization can achieve robust security, streamlined onboarding, optimal data handling, and effective internal and external stakeholder management.
 
## Security and compliance requirements

Ensuring the security and compliance of your API integration will be top of mind for your Legal, Compliance and Data teams.

They’re likely to conduct a thorough risk assessment before the implementation, but may be looking for the following to be delivered as part of it: 

- Data encryption on webhooks (such as mTLS, HMAC) 
- Secure authentication methods (OAuth)
- Adherence to relevant industry regulations (such as GDPR, HIPAA)
- Continuous monitoring and auditing processes to detect and respond to potential threats in real time

Engage with these stakeholders early on before the implementation to ensure their requirements are built into the implementation programme plan with appropriately skilled resources and funding assigned.

| Key inputs | Key outputs |
| ----------- | ----------- |
| - Your organization’s Data Governance Policy <br/> - Third Party Technology Risk Assessment| - Webhook encryption <br/> - Compliant method for data ingestion, retention, and transfer <br/> - Secure authentication method for customers to connect|


## Front-end customer onboarding journeys

Designing seamless customer onboarding journeys is critical for user adoption and satisfaction. 

This involves creating intuitive user interfaces, integrating accounting platform requirements, and automating consent capture. All this should be supported by clear instructions and guidance throughout the onboarding process to minimize friction and enhance user experience.

| Key inputs | Key outputs |
| ----------- | ----------- |
| - Your organization’s Privacy Policy <br/> - Your organization’s Design Principles <br/> - [Codat’s Link SDK](/auth-flow/overview) <br/> - [Codat’s Connection Management SDK](/auth-flow/optimize/connection-management)| - Customer journey design <br/> - Data privacy impact assessment <br/> - User Acceptance Test (UAT) strategy <br/> - External / client communications strategy|

## Colleague journey

Supporting your internal teams as they adapt to the new API integration is essential for operational efficiency. Key activities include providing comprehensive training programmes, developing user-friendly documentation and support materials, setting up dedicated support channels, and fostering a feedback loop to continuously improve the internal experience based on colleague input.

| Key inputs | Key outputs |
| ----------- | ----------- |
| | - Colleague journey design <br/> - Internal communications strategy|
 
## Architectural approach

Establishing a robust architectural approach involves selecting and integrating your own or a third-party user interface (UI) that can effectively consume and display the external data. 

This includes evaluating UI options for compatibility and scalability, designing a flexible and scalable architecture, ensuring seamless API integration, and conducting thorough testing to ensure data accuracy and performance.

| Key inputs | Key outputs |
| ----------- | ----------- |
| - Third-party software / UI <br/> - Internal data schema <br/> - System impact assessment| - Architecture diagram <br/> - Environment strategy <br/> - System Integration Test (SIT) strategy|

## Data ingestion and internal data sharing approach

Effective data ingestion and internal data sharing are critical for maximizing the value of external data. 

Key activities include developing automated data ingestion pipelines, ensuring data quality and consistency, setting up secure and efficient data storage solutions, and implementing protocols for internal data sharing to enable the consuming product teams.

| Key inputs | Key outputs |
| ----------- | ----------- |
| - Your organization’s preferred cloud platform <br/> - Your organization’s preferred data tools| - Architecture diagram <br/> - Ingestion plan <br/> - Test to Prod deployment plan|

## Product mapping

Mapping external data to your products, such as credit models for lending, requires meticulous planning and execution. 

Activities will be specific to the use case and solution consuming external data, but could include analyzing external data sources to identify relevant data points, developing algorithms and models to integrate this data into your existing products, conducting rigorous testing and validation, and continuously refining the models based on performance and feedback.

| Key inputs | Key outputs |
| ----------- | ----------- |
| - Product roadmap <br/> - Your organization’s credit model| - Solution design <br/> - UAT strategy|

## Accounting software setup

Each accounting software has its own process to set up the integration that varies in complexity. In addition, some software providers require commercial agreements to be in place. Codat will guide you through the process to enable your integration for a scaled launch.

Key activities involve configuring the accounting software developer portals, retrieving API keys, completing questionnaires required by the provider and ensuring compliance with technical implementation requirements as well as best practice.

| Key inputs | Key outputs |
| ----------- | ----------- |
| - Password manager with MFA capability <br/> - Dedicated team mailbox| - Commercial agreements <br/> - Compliant integrations <br/> - System Integration Test (SIT) strategy <br/> - Environment strategy|