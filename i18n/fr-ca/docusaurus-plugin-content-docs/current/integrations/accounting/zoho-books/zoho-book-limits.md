---
title: "Limites de Zoho Books et lectures de données réduites"
description: "Informations sur les limites de taux de l'API Zoho Books et quand Codat lit des ensembles de données réduits."
sidebar_label: Limitations
---

Pour minimiser l'impact sur les performances des [limites de taux](zoho-book-limits#zoho-books-rate-limits) décrites ci-dessous, par défaut Codat lit un ensemble de données réduit depuis Zoho Books pour certains types de données.

Le tableau suivant résume les champs qui sont exclus lors de la lecture d'ensembles de données réduits depuis Zoho Books.

| Type de données lu | Champs exclus                                                                                                                                                                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bills              | <p>`purchaseOrderRefs`, `lineItems`, `subTotal`, `taxAmount`, `note`</p> <p>Si la lecture d'ensembles de données complets, les champs suivants sur les lignes de compte sont toujours remplis à 0,00 dans Codat :</p><p>`discountAmount`, `subTotal`, `taxAmount`</p> |
| Credit Notes       | Lignes                                                                                                                                                                                                                                          |
| Customers          | Informations d'adresse et de contact                                                                                                                                                                                                            |
| Invoices           | Lignes                                                                                                                                                                                                                                          |

Pour supprimer ces restrictions et lire des ensembles de données complets pour les types de données Zoho Books pris en charge, veuillez soumettre un ticket via notre [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new). **Après avoir supprimé les restrictions, la récupération de gros volumes de données des types de données ci-dessus peut prendre plusieurs jours.**

:::info totalTaxAmount pour les factures

Zoho Books ne prend pas en charge la récupération du **totalTaxAmount** pour une facture. Par conséquent, lorsque les lignes sont exclues des factures, Codat ne peut pas calculer la taxe totale due et affiche le **totalTaxAmount** comme `0.00`.
:::

## Limites de taux de Zoho Books

L'API Zoho Books a les limites de connexion et limites de taux suivantes :

- Limite de taux quotidienne de l'API
- Limite de taux par minute
- Limite de taux simultanée
- Limite de jeton d'actualisation

Notre intégration Zoho Books fonctionne dans ces limites pour minimiser l'impact sur les performances de la lecture et de l'écriture de gros volumes de données. Pour ce faire, l'intégration maximise le nombre d'enregistrements récupérés par appel API pour la plupart des types de données. Cependant, pour certains types de données, l'intégration ne peut récupérer qu'un seul enregistrement pour chaque appel API à Zoho Books, ce qui impacte les performances. Cela s'applique également aux types de données supplémentaires où les restrictions sur la lecture d'ensembles de données réduits décrites ci-dessus sont supprimées.

#### Limite de taux quotidienne de l'API

La _limite de taux quotidienne de l'API_ permet aux organisations de faire un nombre limité d'appels API à Zoho Books par jour. La limite varie en fonction du plan utilisé par votre organisation (voir [Limite d'appel API](https://www.zoho.com/books/api/v3/introduction/#api-call-limit) de Zoho Books).

Si le nombre cumulé d'appels API à l'organisation que vous essayez de lier dépasse la limite quotidienne, vous pourriez rencontrer les problèmes suivants :

- **Récupérations de données en file d'attente :** celles-ci sont incluses dans la limite du jour suivant.
- **Récupérations de données échouées :** celles-ci sont indiquées dans Codat comme des erreurs de récupération.

Le taux quotidien est partagé entre toutes les demandes API faites à une organisation depuis tous les utilisateurs et tout fournisseur de services, tel que Codat, qui peut accéder aux données via l'API Zoho Books.

#### Limite de taux par minute

Les utilisateurs de Zoho Books peuvent faire environ 100 appels API par minute pour chaque organisation — la _limite de taux par minute_.

Cette limite de taux peut affecter les performances de l'intégration lors de la lecture de données depuis et l'écriture de données dans Zoho Books.

#### Limite de taux simultanée

Zoho Books limite également le nombre maximum d'appels API qui peuvent être simultanément actifs pour la même organisation en utilisant sa _limite de taux simultanée_.

La limite de taux simultanée varie en fonction du plan de l'organisation et est notée dans le [Limiteur de taux simultané](https://www.zoho.com/books/api/v3/introduction/#concurrent-rate-limiter) de Zoho Books.

#### Limite de jeton d'actualisation

La _limite de jeton d'actualisation_ s'applique à chaque utilisateur.

Vous pouvez connecter une [organisation Zoho Books](https://www.zoho.com/uk/books/help/settings/organization-profile.html) à une ou plusieurs entreprises Codat un maximum de 20 fois.

La limite de jeton d'actualisation s'applique aux actions suivantes dans Codat :

- Liaison de nouvelles entreprises.
- Re-liaison d'entreprises existantes.

Après 21 connexions, le jeton d'actualisation de l'entreprise initialement liée (c'est-à-dire la connexion la plus ancienne) est défini comme invalide. Toutes les synchronisations depuis cette entreprise échoueront jusqu'à ce que l'entreprise soit re-liée.
