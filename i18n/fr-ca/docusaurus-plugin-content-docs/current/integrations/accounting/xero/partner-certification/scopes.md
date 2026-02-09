---
title: "Portées Xero par cas d'utilisation"
description: "Guide détaillé sur les portées d'accès requises pour la certification du partenariat Xero"
---

[Checkpoint 7: Scopes](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/certification-checkpoints/#required-for-all-integrations), partie du programme de certification Partenaire App Xero, exige que les applications aient un accès minimal aux données tel que requis par leur cas d'utilisation.

Pour vous conformer, vous devez définir les portées d'accès dont vous avez besoin pour votre cas d'utilisation prévu. Lors de la révision de l'application, Xero vous demandera de justifier votre utilisation des portées et d'expliquer pourquoi vous accédez aux données connexes.

Nous avons défini les portées Xero qui s'appliquent à chaque cas d'utilisation Codat spécifique dans le tableau ci-dessous. Vous aurez également besoin de ces portées quel que soit le cas d'utilisation :

- `offline_access`
- `accounting.settings`

| **Type de Partenariat Xero**                | **Cas d'utilisation Codat**                 | **Portées Xero suggérées**                                                                                                                                       |
| ------------------------------------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Services Financiers - Bank Feeds           | Rapprochement des transactions bancaires   | `bankfeeds`                                                                                                                                                      |
| Services Financiers - Prêt                 | Prêt - Qualification de prêt                | `accounting.reports.read` <br/> `accounting.transactions`<br/>`accounting.contacts` <br/> `accounting.attachments`<br/>`accounting.reports.bankstatement.read`   |
| Services Financiers - Prêt                 | Prêt - Financement de factures              | `accounting.reports.read` <br/> `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments`<br/>`accounting.reports.bankstatement.read` |
| App Store et Services Financiers - Bank Feeds | Gestion des dépenses                     | `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments` <br/> `bankfeeds`                                                           |
| App Store                                   | Tableaux de bord                            | Configuration en lecture seule requise. Veuillez travailler avec votre spécialiste de mise en œuvre pour configurer les portées.                                |
| App Store                                   | Automatisation des comptes fournisseurs     | `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments`                                                                             |
| App Store                                   | Automatisation des comptes clients          | `accounting.transactions` <br/> `accounting.contacts` <br/> `accounting.attachments`                                                                             |
| App Store                                   | Intégration des données commerciales        | `accounting.journals.read` <br/> `accounting.transactions` <br/> `accounting.contacts`                                                                           |
| App Store                                   | Gestion de la paie                          | `accounting.journals.read` <br/> `accounting.transactions`                                                                                                       |
