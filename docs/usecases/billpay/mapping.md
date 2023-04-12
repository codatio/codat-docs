---
title: Payment Method Mapping
description: "Enable SMB's to choose how to make payments"
---

To enable users to select which account a payment should originate from, you can retrieve a list of these from the accounting platform you also have the option to create a new one should the account not exist in their platform. In some cases your platform may support multiple payment methods and each method can be mapped to an account. 
You should store the mapping of the relevant `accountId` as this will be needed when creating the [billPayment](/usecases/billpay/payments).

### Create a new account
- Bank
  - supports cheques
  - bank transfers such as bacs
- Credit Card
  - for payments made with credit
- Clearing/suspense account

### Retrieve a list of accounts
- Query by account type