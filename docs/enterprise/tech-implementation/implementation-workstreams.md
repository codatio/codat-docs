---

title: "Implementation Workstreams"
description: "Detailing the key workstreams that enterprise clients should mobilise to set their Codat implementation up for success"
sidebar_label: "Workstreams"

---

# Workstreams

This page is dedicated to detailing the essential workstreams that need to be mobilized to ensure a seamless and efficient implementation. By understanding and addressing these workstreams, your organization can achieve robust security, streamlined onboarding, optimal data handling, and effective internal and external stakeholder management.
 

## 1. Security and Compliance Requirements
Ensuring the security and compliance of your API integration will be top of mind for your Legal, Compliance and Data teams.  They’re likely to conduct a thorough risk assessment before implementation, but may be looking for the following to be delivered as part of the implementation: 

- data encryption on webhooks (such as mTLS, HMAC) 

- secure authentication methods (OAuth)

- adherance to relevant industry regulations (such as GDPR, HIPAA), and 

- continuous monitoring and auditing processes to detect and respond to potential threats in real time.  

We recommend engaging with these stakeholders early on, prior to implementation, to ensure their requirements are built into the implementation programme plan, with appropriately skilled resource and funding assigned to deliver.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| Your organization’s Data Governance Policy | Webhook encryption |
| Third Party Technology Risk Assessment | Compliant method for data ingestion, retention and transfer |
|  | Secure authentication method for customers to connect |


## 2. Front End Customer Onboarding Journeys
Designing seamless customer onboarding journeys is critical for user adoption and satisfaction. This involves creating intuitive user interfaces, integrating accounting platform requirements and automating consent capture, supported by clear instructions and guidance throughout the onboarding process to minimize friction and enhance user experience.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| Your organization’s Privacy Policy | Customer Journey Design |
| Your organization’s Design Principles | Data Privacy Impact Assessment |
| [Codat’s Link SDK](https://docs.codat.io/auth-flow/overview) | User Acceptance Test (UAT) Strategy |
| [Codat’s Connection Management SDK](https://docs.codat.io/auth-flow/optimize/connection-management) | External / Client Communications Strategy  |
 

## 3. Colleague Journey
Supporting your internal teams as they adapt to the new API integration is essential for operational efficiency. Key activities include providing comprehensive training programmes, developing user-friendly documentation and support materials, setting up dedicated support channels, and fostering a feedback loop to continuously improve the internal experience based on colleague input.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| | Colleague Journey Design |
| | Internal Communications Strategy |
 

## 4. Architectural Approach
Establishing a robust architectural approach involves selecting and integrating your own or a third-party user interface (UI) that can effectively consume and display the external data. This includes evaluating UI options for compatibility and scalability, designing a flexible and scalable architecture, ensuring seamless API integration, and conducting thorough testing to ensure data accuracy and performance.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| Third-party software / UI | Architecture Diagram |
| Internal Data Schema | Environment Strategy |
| System Impact Assessment | System Integration Test (SIT) Strategy |


## 5. Data Ingestion and Internal Data Sharing Approach
Effective data ingestion and internal data sharing are critical for maximizing the value of external data. Key activities include developing automated data ingestion pipelines, ensuring data quality and consistency, setting up secure and efficient data storage solutions, and implementing protocols for internal data sharing to enable the consuming product teams.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| Your organization’s preferred cloud platform | Architecture Diagram |
| Your organization’s preferred data tools | Ingestion Plan |
| | Test to Prod Deployment Plan |

## 6. Product Mapping
Mapping external data to your products, such as credit models for lending, requires meticulous planning and execution. Activities will be specific to the use case and product consuming external data, but could include analyzing external data sources to identify relevant data points, developing algorithms and models to integrate this data into your existing products, conducting rigorous testing and validation, and continuously refining the models based on performance and feedback.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| Product Roadmap | Solution Design |
| Your organization’s credit model | UAT Test Strategy |


## 7. Accounting Platform Set Up
Each accounting platform has it’s own process to set up the integration - the complexity varies across the board - and some require commercial agreements to be in place.  Codat will guide you through the process to enable your integration for a scaled launch.

Key activities involve configuring the accounting platform developer portals, retrieving API keys, completing questionnaire required by the platform and ensuring compliance with technical implementation requirements as well as best practice.

| Key Inputs | Key Outputs |
| ----------- | ----------- |
| Password manager with MFA capability | Commercial Agreements |
| Dedicated team mailbox | Compliant Integrations |
| | System Integration Test (SIT) Strategy |
| |Environment Strategy |


 
