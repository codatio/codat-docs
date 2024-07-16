---
title: "QBO app assessment questionnaire"
--- 

## Introduction

As part of Intuit's app assessment process all apps who intend to access Quickbooks Online production data will need to fill in an app assessment questionnaire.
Many of these questions require you to provide information about your organisation and use case that you need to complete yourself. However, some questions can be answered with Codat template answers. Below is a guide with template answers for the sections relating to Codat.

## Questionnaire

### General questions

There are no Codat-specific questions in this section. Developers can answer all questions in this section according to their own circumstances.

### Lending

This section will only appear in your questionnaire if you confirmed that you are a lender earlier in the process. 
If you are not a lender, you can skip this section. If you are a lender and do not see these lending questions in your questionnaire, please go back to the Production Settings screen in the Quickbooks developer dashboard and ensure the 'Lending' box is ticked before proceeding.

There are no Codat-specific questions in this section. Developers can answer all questions in this section according to their own circumstances.

### App Information

This section has several questions with template Codat answers.

1. Which of the following is true about your app (at least one option must be checked):

|   | **Codat template answer**|
|---|------------------------------------------|
| a | You built your app from scratch and wrote the code that lets it interact with Intuit APIs and data |
| **b** | **You used another platform or tool to build and code your app** |
| c | Your app act as a platform that lets other app developers (outside your team or company) integrate with QuickBooks |
| d | You require your app users to create an additional app or profile on the Intuit Developer platform in order to use your app |
| e | You were asked to create this app in order to get credentials/keys to be used on another platform that integrates with QuickBooks |

After selecting option B, provide these answers to the follow on questions:
| What's the name of the platform or tool?  | Codat                                     |
| Provide a link to the platform or tool’s website | www.codat.io                             |
| Describe how your app interacts with the platform | We access our integration to QuickBooks Online via Codat’s API |

2. What platform(s) does your app utilize and make API calls from? (Select all that apply)

Developer to answer.

3. How does your app interact with Intuit product data?

Developer to answer.

4. Are you building a private app for your team or business? Or, do you plan to make it publicly available?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | We're building a private app  |
| **b** | **We plan to make our app publicly available** |

After selecting option B, provide an estimate for the number of Quickbooks Online users you expect to connect.

5. Which types of QuickBooks Online users can use your app?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | Any admin of the QuickBooks Online company  |
| **b** | **Any user of the QuickBooks Online company** |

6. Does your app integrate with platforms other than Intuit?

Developer to answer.

### Authorization and Authentication

1. Have you tested connecting, disconnecting, and reconnecting your app with a sandbox or non-production company?

Developer to answer - however testing is a requirement. Answering 'No' will result in a hard stop.

2. How often does your app refresh access tokens?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | Every time it  makes an API call  |
| **b** | **Only when access tokens expire** |
| c | More than once a day  |
| d | Daily |
| e | Weekly  |
| f | Other - specify a timeframe  |

3. Does your app retry authorization and authentication requests that have failed?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

4. If your app encounters an authorization and authentication error, do you ask customers to reconnect to your app?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

5. Did you use the Intuit discovery document to get the latest endpoints required in the OAuth2.0 flow?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

6. Can your app handle the following scenarios (yes/no):

|   | **Codat template answer**|
|---|------------------------------------------|
| Errors due to expired access tokens |  **Yes**   |
| Errors due to expired refresh tokens |  **Yes**  |
| Invalid grant errors |  **Yes**   |
| CSRF errors |  **Yes**  |

7. Does your app rely on the OAuth playground or other offline tools to get access or refresh tokens tokens?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | Yes |
| **b** | **No**  |

### API Usage

1. Which of the broad API categories does your app use? (multiple choice)

|   | **Codat template answer**|
|---|------------------------------------------|
| Accounting API |  **Yes**   |
| Payments API |  **No** |
| Payroll API |  **No**   |

Codat does not integrate with the Payments or Payroll APIs.

2. How often does  your app call  our APIs for each customer? (multiple choice)

Developer to answer.

### Accounting API

1. Which  customer-facing version of QuickBooks Online is your app designed for? (Select all that apply)

|   | **Codat template answer**|
|---|------------------------------------------|
| Simple Start |  **No**   |
| Essentials  |  **Yes**  |
| Plus |  **Yes**   |
| Advanced |  **Yes**  |

2. Users often change versions of QuickBooks Online. This means they may get access to new features, or lose certain features, at any time. Can your app handle situations where users gain or lose access to version-specific features?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

After selecting option A, provide this answer to the follow on question:
| Tell us how you plan to handle this situation | For gains in features there is no impact to the end user. For Loss of features, error messages are generated where permissions for the required features are missing. |

3. Does your app utilize any of the following features ? (Select all that you've verified and thoroughly tested)

|   | **Codat template answer**|
|---|------------------------------------------|
| Multicurrency |  **Yes**   |
| Sales tax - For QuickBooks companies in the United States  |  **Yes**  |
| Sales tax - For QuickBooks companies outside of the United States |  **Yes**   |
| 	None of the above | N/A  |

4. Do you use webhooks for your app?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | Yes |
| **b** | **No**  |

Note: Codat do not use QuickBooks Online webhooks although we have our own.

5. Do you use the [CDC](https://developer.intuit.com/app/developer/qbo/docs/learn/explore-the-quickbooks-online-api/change-data-capture) operation for your app?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

After selecting option A, provide these answers to the follow on questions:
i. Why do you use the CDC operation?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | Using webhooks doesn't give me the information I need  |
| b | Querying specific entities doesn't give me the information I need |
| **c** | **Other** |

After selecting Option C, provide this further information:
**Codat uses CDC to queue syncs for changes in specific endpoints (customers and refund receipts)**

ii. How often do you poll the CDC service?

|   | **Codat template answer**|
|---|------------------------------------------|
| a | Weekly  |
| b | Daily |
| c | Hourly |
| d | More than once an hour |
| **e** | **Other**  |

After selecting Option E, provide this further information:
**Adhoc on requests for new data.**

### Error Handling

1. Have you tested if your app can handle API errors, including syntax and validation errors?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

2. Does your app capture the value of the intuit_tid field from response headers?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

3. Does your app have a mechanism for storing all error information in logs that can be shared for troubleshooting purposes, if required?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

4. Do you provide a way for customers to contact you for support from within your app?

Developer to answer.

### Security

1. Has your company ever had a security breach that required notification to customers or government agencies/authorities?

Developer to answer.

2. Do you have a security team that regularly assesses vulnerabilities and risks for your app?

Developer to answer.

3. Are the client ID and client secret for your app stored securely (i.e. not hardcoded within your app or displayed in browser console logs)?

|   | **Codat template answer**|
|---|------------------------------------------|
| **a** | **Yes** |
| b | No  |

4. Does your app use multi-factor authentication?

Developer to answer.

5. Does your app use Captcha for authentication?

Developer to answer.

6. Does your app use WebSocket?

Developer to answer.

7. Once a customer's Intuit data is in your system, do you allow it to be used by or shown to anyone other than that customer?

Developer to answer.
