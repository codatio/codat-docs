---
title: "QBO app assessment questionnaire"
---
Introduction

As part of Intuit's new app assessment process all apps who intend to access Quickbooks online production data will need to fill in a security questionnaire.

We've partnered with Intuit to make this process easier and faster for you. Codat clients will receive a shortened version of the questionnaire which will be sent directly from Intuit.

Please see below for a summary of the recommended answers for the App Assessment Questionnaire.

Questionnaire
General questions

1. Has your company ever received any complaints, lawsuits, or investigative requests from regulatory authorities or government agencies?

a	Yes, Was the inquiry resolved? Yes / No	Client owned
b	No

2. Have you worked with legal counsel to understand any regulatory requirements or other considerations related to your business activities and use of user data?

a	Yes	Client owned
b	No

3. Have you reviewed and confirmed that you will comply with the security policies found here?

a	Yes, I confirm that my app will comply with the security policies found above.	Client owned
b	No

4. Apps that use Intuit APIs (whether public or private) need to be relevant and clearly related to QuickBooks, accounting, payments, workflows, finance, and other acceptable uses. Is your app designed for either of the following:

To enhance, streamline, or improve yours or others’ QuickBooks experience
To facilitate a business process (e.g. syncing QBO data to another service)
a	Yes	

Client owned


b	No

5. Will your app use QuickBooks customer data for any purposes other than to provide products and services to small business customers?

a	Yes, Do you clearly describe those purposes to customers, and get their agreement before using a customer’s data for those purposes? Yes/No	Client owned
b	No

6.Are you or any of your representatives (including owners, affiliated parties, associated parties or any beneficiaries): (i) on any sanctions lists in the countries available in the app store or (ii) doing business in any of the US embargoed countries (which includes the Crimea region of Ukraine, North Korea, Iran, Cuba, and the Syrian Arab Republic)?

a	Yes	Client owned
b	No

7. Does your app include any functionality involving any of the following regulated services?

a	None of the below	Client owned
b	Lending (including the brokering or marketing of loan or credit services)
c	Payments/Money Movement
d	Insurance
e	Investment/Financial Planning
App Information

1. Which of the following is true about your app (at least one option must be checked):

a	You built your app from scratch and wrote the code that lets it interact with Intuit APIs and data	 
b	You used another platform or tool to build and code your app i. What’s the name of the platform or tool? Codat
ii. Provide a link to the platform or tool’s website www.codat.io
iii. Describe how your app interacts with the platform. We access our integration to QuickBooks online via Codat’s API	Codat response
c	Your app act as a platform that lets other app developers (outside your team or company) integrate with QuickBooks i. Provide a link to your website ii. Provide a link to any steps you give developers so they can integrate with QuickBooks	

d	You require your app users to create an additional app or profile on your platform in order to use your app i. Explain why. ii. Provide a link to any steps  you give to customers so they can connect to QuickBooks	

e	You were asked to create this app in order to get credentials/keys to be used on another platform that integrates with QuickBooks i. Provide a link to the instructions that told you to create a new app.	


2. What platform(s) does your app utilize and make API calls from? (Select all that apply)

a	Web/SaaS	Client owned
b	Web/Browser
c	Mobile
d	Desktop app connecting to QuickBooks Online

>3. How does your app interact with Intuit product data? (Select all that apply)

a	It reads data from Intuit product(s)	 Client owned
b	It writes data to Intuit product(s)  (including Charge/ECheck transactions for payment processing)
c	It deletes data from Intuit product(s)
d	Other ( specify)

4. Are you building a private app for your team or business? Or, do you plan to make it publicly available?

a	We're building a private app 	 
b	We plan to make our app publicly available	Codat response

How many QuickBooks Online customers do you anticipate connecting to your app?

5. Which types of QuickBooks Online users can use your app?

a	Only the QuickBooks Online company admin who connected the app	 
b	Any admin of the QuickBooks Online company	 
c	Any user of the QuickBooks Online company	Codat response

6. Does your app integrate with platforms other than Intuit?

a	Yes, Name the platforms	Client owned
b	No
Authorization & Authentication

1. Have you tested connecting, disconnecting, and reconnecting your app with a sandbox or non-production company?

a	Yes	Client owned (testing required)
b	No (hard stop)

2. How often does your app refresh access tokens?

a	very time it  makes an API call	 
b	Only when access tokens expire 	Codat response
c	More than once a day 	 
d	Daily	 
e	Weekly	 
f	Other - specify a timeframe
	 

3. Does your app retry authorization and authentication requests that have failed?

a	Yes	Codat response
b	No	 

4. If your app encounters an authorization and authentication error, do you ask customers to reconnect to your app?

a	Yes	Codat response
b	No	 

5. Did you use the Intuit discovery document to get the latest endpoints required in the OAuth2.0 flow?

a	Yes	Codat response
b	No	 

6. Can your app handle the following scenarios (yes/no):

a	Errors due to expired access tokens Yes	Codat response
b	Errors due to expired refresh tokens Yes
c	Invalid grant errors Yes
d	CSRF errors Yes

7. Does your app rely on the OAuth playground or other offline tools to get access or refresh tokens tokens?

a	Yes	

b	No	Codat response
API Usage

1. Which of the broad API categories does your app use? (multiple choice)

a	Accounting API Yes	Codat response
b	Payments API No (Not supported by Codat)

2. How often does  your app call  our APIs for each customer? (multiple choice)

a	Daily	Client owned
b	Weekly
c	Monthly 
d	Seasonally (e.g.i.e. tax season, payroll schedule, etc), How many times a year will your app call our APIs?
e	Once only
f	Only on-demand during customer interaction with your app
g	Other (please describe)
Accounting API

Required if response to Question 1 API Usages includes the Accounting API.

1. Which  customer-facing version of QuickBooks Online is your app designed for? (Select all that apply)

a	Simple Start No	Codat response
b	Essentials Yes
c	Plus Yes
d	Advanced Yes

2. Users often change versions of QuickBooks Online. This means they may get access to new features, or lose certain features, at any time. Can your app handle situations where users gain or lose access to version-specific features?

a	Yes i. Tell us how you plan to handle this situation For gains in features there is no impact to the end user. For Lose of features error messages are generated where permissions for the required features are missing.	Codat response
b	No	 

3. Does your app utilize any of the following features ? (Select all that you've verified and thoroughly tested)

a	Multicurrency Yes	Codat response 
b	Sales tax - For QuickBooks companies in the United States Yes
c	Sales tax - For QuickBooks companies outside of the United States Yes
d	None of the above	 

4. Do you use webhooks for your app?

a	Yes, Is the endpoint URL active and functional?	 
b	No Codat do not use QuickBooks online webhooks although we have our own. 	Codat response 

5. Do you use the CDC operation for your app?

a	Yes i. Why do you use the CDC operation?
Using webhooks doesn't give me the information I need
Querying specific entities doesn't give me the information I need
Other (Tell us why you use the CDC operation) Codat uses CDC to queue syncs for changes in specific endpoints (customers and refund receipts)
ii. How often do you poll the CDC service?
Weekly
Daily
Hourly
More than once an hour
Other - specify a timeframe Adhoc on requests for new data.
	 Codat response
b	No	 
Payments API

Required if response to Question 1 API Usages includes the Payments API.

Not supported via Codat.

Error Handling

1. Have you tested if your app can handle API errors, including syntax and validation errors?

a	Yes	 Codat response
b	No	 

2. Does your app capture the value of the intuit_tid field from response headers?
Tip: We recommend you capture this field. It will help our support team quickly identify issues when troubleshooting.

a	Yes	 Codat response
b	No	 

3. Does your app have a mechanism for storing all error information in logs that can be shared for troubleshooting purposes, if required?
Tip: We recommend you maintain logs. It will help our support team quickly identify issues when troubleshooting.

a	Yes	 Codat response
b	No	 

4. Do you provide a way for customers to contact you for support from within your app?

a	Yes, How?	 Client owned
b	No
Security

1. Has your company ever had a security breach that required notification to customers or government agencies/authorities?

a	Yes
i. Was the breach resolved? Yes / No ii. Please describe what occurred and how it was remediated.	Client owned
b	No

2. Do you have a security team that regularly assesses vulnerabilities and risks for your app?

a	Yes
	Client owned
b	No

3. Are the client ID and client secret for your app stored securely (i.e. not hardcoded within your app or displayed in browser console logs)?

a	Yes
	Codat response
b	No	 

4. Does your app use multi-factor authentication?

a	Yes
	Client owned
b	No

5. Does your app use Captcha for authentication?

a	Yes
	Client owned
b	No

6. Does your app use WebSocket?

a	Yes
	Client owned
b	No

7. Once a customer's Intuit data is in your system, do you allow it to be used by or shown to anyone other than that customer?

a	No, all Intuit customer data processed by our app is only used for the benefit of the original customer
	Client Owned
b	Yes, but the data is aggregated or anonymized before it's used or displayed to others
c	Yes, we run Intuit customer data through data modelling systems for the benefit of all out customers

