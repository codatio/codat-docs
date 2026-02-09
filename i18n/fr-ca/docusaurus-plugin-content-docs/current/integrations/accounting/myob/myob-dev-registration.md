---
title: "Points de terminaison pour l'inscription au programme partenaire développeur MYOB"
draft: true
---

Avant de pouvoir utiliser Codat pour accéder aux données comptables des clients utilisant MYOB AccountRight et Essentials, vous devrez vous inscrire pour un compte développeur auprès de MYOB. Le document d'inscription développeur MYOB demande quels points de terminaison API vous souhaitez utiliser.

Audience

Toute personne, quel que soit son niveau technique, travaillant sur l'activation et la configuration de l'intégration MYOB AccountRight et Essentials de Codat.

Prérequis

Vous êtes prêt à vous inscrire au programme partenaire développeur MYOB afin d'activer l'intégration MYOB AccountRight et Essentials via Codat.

Points de terminaison pour l'inscription au programme partenaire développeur MYOB

Ce tableau montre les points de terminaison et méthodes que Codat utilise :

| Endpoint                                        | GET / PUT / POST |
| :---------------------------------------------- | :--------------- |
| {cf_uri}/Banking/BankAccount                    | GET              |
| {cf_uri}/Banking/ReceiveMoneyTxn                | GET              |
| {cf_uri}/Banking/SpendMoneyTxn                  | GET              |
| {cf_uri}/Company                                | GET              |
| {cf_uri}/Company/Preferences                    | GET              |
| {cf_uri}/Contact/Customer                       | GET / POST       |
| {cf_uri}/Contact/Customer/{customerId}          | GET / PUT        |
| {cf_uri}/Contact/Supplier                       | GET / POST       |
| {cf_uri}/Contact/Supplier/{supplierId}          | GET              |
| {cf_uri}/GeneralLedger/Account                  | GET / POST       |
| {cf_uri}/GeneralLedger/AccountingProperties     | GET              |
| {cf_uri}/GeneralLedger/Category                 | GET              |
| {cf_uri}/GeneralLedger/Currency                 | GET              |
| {cf_uri}/GeneralLedger/JournalTransaction       | GET              |
| {cf_uri}/GeneralLedger/LinkedAccount            | GET              |
| {cf_uri}/GeneralLedger/TaxCode                  | GET              |
| {cf_uri}/Inventory/Item                         | GET              |
| {cf_uri}/Purchase/Bill/Item                     | GET              |
| {cf_uri}/Purchase/Bill/Miscellaneous            | GET              |
| {cf_uri}/Purchase/Bill/Professional             | GET              |
| {cf_uri}/Purchase/Bill/Service                  | GET / POST       |
| {cf_uri}/Purchase/DebitRefund                   | GET              |
| {cf_uri}/Purchase/DebitSettlement               | GET              |
| {cf_uri}/Purchase/SupplierPayment               | GET / POST       |
| {cf_uri}/Report/BalanceSheetSummary             | GET              |
| {cf_uri}/Report/ProfitAndLossSummary            | GET              |
| {cf_uri}/Sale/CreditRefund                      | GET              |
| {cf_uri}/Sale/CreditSettlement                  | GET              |
| {cf_uri}/Sale/CustomerPayment                   | GET / POST       |
| {cf_uri}/Sale/Invoice/{invoiceId}               | GET              |
| {cf_uri}/Sale/Invoice/{invoiceType}/{invoiceId} | GET              |
| {cf_uri}/Sale/Invoice/Item                      | GET              |
| {cf_uri}/Sale/Invoice/Miscellaneous             | GET              |
| {cf_uri}/Sale/Invoice/Professional              | GET              |
| {cf_uri}/Sale/Invoice/Service                   | GET / POST       |
| {cf_uri}/Sale/Invoice/Service/{invoiceId}       | PUT              |
| {cf_uri}/Sale/Invoice/TimeBilling               | GET              |

---

Si vous avez des questions sur les informations partagées ci-dessus, veuillez utiliser notre [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new) pour créer un ticket.
