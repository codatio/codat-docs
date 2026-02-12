---
title: "Aperçu"
description: "Explorez les logiciels comptables auxquels vous pouvez vous connecter via notre API."
sidebar_label: Comptabilité
image: "/fr-ca/img/old/2b27c1b-info_banner.png"
displayed_sidebar: integrationsAccounting
---

import { IntegrationsList } from "@components/Integrations";

![](/img/old/2b27c1b-info_banner.png "info_banner.png")

Les intégrations comptables de Codat vous permettent de lire les données comptables à jour depuis le logiciel comptable de vos clients ainsi que d'écrire des données dans leur logiciel.

Vous pouvez utiliser [l'intégration Sandbox de Codat](/integrations/accounting/sandbox/accounting-sandbox) pour commencer à explorer les données avec lesquelles vous pouvez travailler, sans aucune configuration (autre que l'activation de l'intégration).

Si vous avez une intégration existante que vous souhaitez migrer vers Codat, nous pouvons migrer les jetons pour [la plupart des intégrations OAuth](/get-started/migration).

## Logiciels comptables pris en charge

Les intégrations de Codat peuvent se connecter aux logiciels comptables suivants. Vous pouvez voir plus d'informations, y compris les instructions de configuration pour chaque intégration, en cliquant sur les liens de documentation ci-dessous.

<IntegrationsList sourceType="accounting" />

## Configuration des intégrations comptables

Certaines intégrations ont des exigences plus complexes en termes d'inscription et d'accords de partenariat. Consultez la propre documentation de chaque plateforme pour plus de détails.

| Plateforme                                                                                                         | Complexité d'inscription | Programme de partenariat marketplace | Restrictions de connexion | Informations supplémentaires                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------------------------------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Microsoft Dynamics 365 Business Central](https://www.microsoft.com/en-gb/dynamics-365/products/business-central) | Moyenne                  | ❌                                   | ❌                        | Vous devez avoir un compte Microsoft Azure pour vous inscrire.                                                                                                                                                                                                                               |
| [Microsoft Dynamics 365 Finance & Operations](https://www.microsoft.com/en-gb/dynamics-365/products/finance)      | Moyenne                  | ❌                                   | ❌                        | Vous devez avoir un compte Microsoft Azure pour vous inscrire. <br/> Cette intégration est uniquement prise en charge par notre solution [Spend Insights](/spend-insights/overview).                                                                                                        |
| [Exact Online](https://www.exact.com/)                                                                            | Moyenne                  | ✅                                   | ❌                        | Vous devez demander la permission de connecter des entreprises en production.                                                                                                                                                                                                               |
| [FreeAgent](https://www.freeagent.com/)                                                                           | Facile                   | ✅                                   | ❌                        |                                                                                                                                                                                                                                                                                              |
| [FreshBooks](https://www.freshbooks.com/en-gb/)                                                                   | Moyenne                  | ✅                                   | ❌                        | Les portées sont maintenant requises pour toutes les applications.                                                                                                                                                                                                                          |
| [MYOB Business](https://www.myob.com/au)                                                                          | Moyenne                  | ✅                                   | ❌                        | Les nouveaux partenaires sont approuvés manuellement dans les 72 heures suivant l'inscription.                                                                                                                                                                                               |
| [Oracle NetSuite](https://www.netsuite.com/portal/home.shtml)                                                     | Inscription non requise  | Oui\*                                | ❌                        | \* Rarement ouvert aux nouveaux arrivants                                                                                                                                                                                                                                                    |
| [QuickBooks Online](https://quickbooks.intuit.com/uk/online/)                                                     | Facile                   | ✅                                   | ❌                        | Vous devez compléter un questionnaire de sécurité pour accéder aux données de production.                                                                                                                                                                                                   |
| [QuickBooks Desktop](https://quickbooks.intuit.com/desktop/) <br/> `Sur site`                                     | Inscription non requise  | ✅                                   | ❌                        |                                                                                                                                                                                                                                                                                              |
| [Sage Accounting](https://www.sage.com/en-gb/sage-business-cloud/accounting/)                                     | Facile                   | ✅                                   | ❌                        |                                                                                                                                                                                                                                                                                              |
| [Sage Intacct](https://www.sage.com/en-gb/sage-business-cloud/intacct/)                                           | Inscription non requise  | ✅                                   | ✅                        | \* Vous pouvez demander les identifiants marketplace de Codat pour éviter l'inscription en envoyant un courriel à solutions@codat.io                                                                                                                                                        |
| [Sage 50 UK & Ireland](https://www.sage.com/en-gb/products/sage-50-accounts/) <br/> `Sur site`                    | Inscription non requise  | ✅                                   | ❌                        |                                                                                                                                                                                                                                                                                              |
| [Sage 200 Cloud](https://www.sage.com/en-gb/products/sage-200/)                                                   | Difficile                | ❌                                   | ❌                        | Les nouveaux partenaires sont approuvés manuellement dans les quelques jours suivant l'inscription. Contactez votre ingénieur solutions en cas de complications.                                                                                                                            |
| [Wave](https://www.waveapps.com/)                                                                                 | Facile                   | ❌                                   | ❌                        | Les inscriptions complétées avant juillet 2022 doivent demander le statut de partenaire via wave@codat.io pour accéder aux rapports de profits et pertes et de bilan. Les rapports sont activés par défaut pour les inscriptions complétées après juillet 2022.                             |
| [Workday](https://www.workday.com/)                                                                               | Inscription non requise  | ✅                                   | Aucune connue             | Cette intégration est uniquement prise en charge par notre solution [Spend Insights](/spend-insights/overview).                                                                                                                                                                              |
| [Xero](https://www.xero.com/)                                                                                     | Facile                   | ✅                                   | ✅                        | Vous devez certifier votre intégration et vous associer avec Xero pour connecter plus de 25 entreprises. Cela implique des exigences techniques supplémentaires et, dans certains cas, des frais supplémentaires. Les cas d'utilisation tels que le courtage financier, l'assurance, la couverture FX et les prêts (dans certaines régions) ne sont pas autorisés. |
| [Zoho Books](https://www.zoho.com/uk/books/)                                                                      | Facile                   | ✅                                   | ❌                        |                                                                                                                                                                                                                                                                                              |

## Logiciels comptables par région

Les logiciels comptables les plus populaires par région sont les suivants :

- **États-Unis :** QuickBooks Online, QuickBooks Desktop, Sage Intacct, NetSuite, FreshBooks, Xero
- **Royaume-Uni :** Xero, QuickBooks Online, Sage 50, Sage Accounting, FreeAgent, NetSuite
- **Australie :** Xero, MYOB, QuickBooks Online, NetSuite

Nous pouvons parfois faciliter les présentations aux fournisseurs de logiciels comptables, en particulier dans le cas de Xero, Sage et MYOB. Veuillez demander à votre ingénieur Solutions, spécialiste de mise en œuvre ou gestionnaire de compte pour plus de détails.

## Clés de plateforme

Chaque intégration possède une clé unique de 4 caractères qui l'identifie dans nos API. Pour référence, une liste de toutes les clés de plateforme d'intégration comptable peut être trouvée ci-dessous :

| Nom de la plateforme              | Clé de plateforme |
| --------------------------------- | ----------------- |
| Dynamics 365 Business Central     | trji              |
| Dynamics 365 Finance & Operations | rqwd              |
| Exact (Pays-Bas)                  | qudb              |
| Exact (RU)                        | pbbf              |
| FreeAgent                         | fbrh              |
| FreshBooks                        | vxvy              |
| MYOB Business                     | pdvj              |
| Oracle NetSuite                   | akxx              |
| QuickBooks Desktop                | pqsw              |
| QuickBooks Online                 | qhyg              |
| QuickBooks Online Sandbox         | ndsk              |
| Sage 200 Standard                 | jcrp              |
| Sage 50 (RU)                      | hbql              |
| Sage Accounting                   | tgff              |
| Sage Intacct                      | knfz              |
| Sandbox                           | mqjo              |
| Wave                              | pbtz              |
| Workday                           | rvam              |
| Xero                              | gbol              |
| Zoho Books                        | rwuv              |
