---
title: "Personnalisation du flux de configuration de la synchronisation"
description: Modifier les éléments ajustables du flux Sync
createdAt: "2022-11-16T20:24:20.979Z"
updatedAt: "2023-01-16T17:31:55.362Z"
---

:::caution Personnalisation vs. fonctionnalités

Cette section inclut des instructions sur la façon de mettre à jour les valeurs de texte dans le flux de synchronisation et de modifier la visibilité des catégories de fonctionnalités (comptes).

Si vous souhaitez omettre une invite de fonctionnalité spécifique (par exemple, si vous ne prenez pas en charge le concept de frais), contactez votre gestionnaire de compte.

:::

Le flux de configuration de la synchronisation est une solution en marque blanche qui peut être adaptée pour répondre aux besoins de vos clients.

Pour créer une expérience de marque, vous pouvez :

- Configurer le nom de votre entreprise, votre logo et votre icône via les [paramètres de marque](/auth-flow/customize/customize-link) dans le portail.
- Mettre à jour les champs de texte du flux
  La mise à jour des champs de texte aide à garantir que vos utilisateurs comprennent clairement ce qu'ils partagent via le flux Sync for Commerce et quels comptes ils doivent choisir pour s'assurer qu'il fonctionne correctement.

### Mise à jour du texte

Vous pouvez personnaliser chaque élément de texte dans le flux de configuration de la synchronisation.

1. [Titre principal](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#main-title)

<img
  src="/img/old/1e4761e-Main_title.png"
  alt="Section du titre principal du flux de configuration de la synchronisation"
/>

2. [Légendes des cases à cocher](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#checkbox-captions)

<img
  src="/img/old/bd64beb-Checkbox_items.png"
  alt="Section des cases à cocher du flux de configuration de la synchronisation"
/>

3. [Texte sur les boutons **Précédent** et **Suivant**](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#buttons)

<img
  src="/img/old/e41eb47-Buttons.png"
  alt="Section des boutons de navigation du flux de configuration de la synchronisation"
/>

4. Titre de fonctionnalité, description de fonctionnalité et description de l'indicateur de champ obligatoire ([Ventes](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#sales-title-and-description), [Frais](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#fees-title-and-description), [Paiements](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#payments-title-and-description))

<img
  src="/img/old/9c0450e-Feature_title.png"
  alt="Section de texte de fonctionnalité du flux de configuration de la synchronisation"
/>

5. Titre des catégories de fonctionnalités, description du titre des catégories de fonctionnalités et catégories de fonctionnalités ([Ventes](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#sales-feature-categories), [Frais](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#fees-feature-categories), [Paiements](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#payments-feature-categories))

<img
  src="/img/old/858fd2e-Feature_categories.png"
  alt="Section de texte des catégories de fonctionnalités du flux de configuration de la synchronisation"
/>

Gardez à l'esprit que cette mise à jour n'affectera **que** l'interface utilisateur.

Pour obtenir une liste complète de tous les champs de texte personnalisables et de leurs valeurs, effectuez la requête suivante :

```http
GET sync/commerce/config/ui/text
```

Pour mettre à jour, supprimer ou réinitialiser une valeur de texte, utilisez la requête suivante :

```http
PATCH sync/commerce/config/ui/text
```

Corps de la requête :

```json
// Mettre à jour la valeur de texte avec la chaîne spécifiée
{
   "data-textkey": "Une nouvelle valeur"
}

// Afficher une chaîne vide
{
   "data-textkey": ""
}

// Utiliser la valeur par défaut
{
   "data-textkey": null
}
```

Dans la requête ci-dessus, le `data-textkey` est la clé du champ que vous souhaitez configurer.

Vous pouvez trouver les valeurs `data-textkey` dans les tableaux ci-dessous.

:::caution Mettre à jour les champs de texte de manière cohérente

Nous recommandons de regrouper vos mises à jour pour vous assurer que les valeurs associées sont mises à jour de manière cohérente. Un nom de fonctionnalité (par exemple, Ventes) apparaît comme un élément de case à cocher dans le volet de gauche (Configurer les ventes) et comme titre principal sur le côté droit de la fenêtre (Ventes), il est donc important de mettre à jour à la fois `configure-setupSidebar-checkboxes-sales` et `configure-content-sales-title`.
:::

#### Texte par défaut et clés de texte

##### Titre principal

| Valeur par défaut                | Valeur `data-textkey`        |
| :------------------------------- | :--------------------------- |
| Configurer la synchronisation vers `{platform name}` | configure-setupSidebar-title |

##### Légendes des cases à cocher

| Valeur par défaut                           | Valeur `data-textkey`                                     |
| :------------------------------------------ | :-------------------------------------------------------- |
| Se connecter à `{commerce software name}`   | configure-setupSidebar-checkboxes-connectToCommerce       |
| Se connecter à `{accounting software name}` | configure-setupSidebar-checkboxes-connectToAccounting     |
| Configurer les ventes                       | configure-setupSidebar-checkboxes-sales                   |
| Configurer les frais                        | configure-setupSidebar-checkboxes-fees                    |
| Configurer les paiements                    | configure-setupSidebar-checkboxes-payments                |
| Configurer le calendrier de synchronisation | configure-setupSidebar=checkboxes-syncSchedule            |

##### Boutons

| Valeur par défaut | Valeur `data-textkey`         |
| :---------------- | :---------------------------- |
| Précédent         | configure-misc-previousButton |
| Suivant           | configure-misc-nextButton     |

##### Description de l'indicateur de champ obligatoire

| Valeur par défaut          | Valeur `data-textkey`        |
| :------------------------- | :--------------------------- |
| Indique un champ obligatoire | configure-required-indicator |

##### Titre et description des ventes

| Valeur par défaut                                 | Valeur data-textkey                 |
| ------------------------------------------------- | ----------------------------------- |
| Ventes                                            | configure-content-sales-title       |
| Description du titre des ventes : aucune valeur par défaut. | configure-content-sales-description |

##### Titre et description des catégories de fonctionnalités des ventes

| Valeur par défaut                                                                                | Valeur data-textkey                          |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- |
| Comptes                                                                                          | configure-content-sales-accounts-title       |
| Configurer le mappage des comptes de `{commerce software name}` vers `{accounting software name}`. | configure-content-sales-accounts-description |
| Taux de taxe                                                                                     | configure-content-sales-taxRates-title       |
| Configurer le mappage des taux de taxe de `{commerce software name}` vers `{accounting software name}`. | configure-content-sales-taxRates-description |
| Autre                                                                                            | configure-content-sales-other-title          |
| Description du titre Autre : aucune valeur par défaut.                                           | configure-content-sales-other-description    |

##### Catégories de fonctionnalités des ventes

| Valeur par défaut   | Valeur `data-textkey`                                |
| :------------------ | :--------------------------------------------------- |
| Ventes              | configure-content-sales-accounts-entries-sales       |
| Remboursements      | configure-content-sales-accounts-entries-refund      |
| Pourboires          | configure-content-sales-accounts-entries-gratuity    |
| Prépayé             | configure-content-sales-accounts-entries-prepaid     |
| Autres ventes       | configure-content-sales-accounts-entries-sales-other |
| Taux de taxe 0 %    | configure-content-sales-accounts-taxRates-entries-0  |
| Taux de taxe 5 %    | configure-content-sales-accounts-taxRates-entries-10 |
| Taux de taxe 10 %   | configure-content-sales-accounts-taxRates-entries-15 |
| Taux de taxe 20 %   | configure-content-sales-accounts-taxRates-entries-20 |
| Statut de facture   | configure-content-sales-other-entries-invoiceStatus  |
| Période de regroupement | configure-content-sales-other-entries-groupingPeriod |

##### Titre et description des frais

| Valeur par défaut                                 | Valeur data-textkey                |
| ------------------------------------------------- | ---------------------------------- |
| Frais                                             | configure-content-fees-title       |
| Description du titre des frais : aucune valeur par défaut. | configure-content-fees-description |

##### Titre et description des catégories de fonctionnalités des frais

| Valeur par défaut                                                                                | Valeur data-textkey                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| Comptes                                                                                          | configure-content-fees-accounts-title       |
| Configurer le mappage des comptes de `{commerce software name}` vers `{accounting software name}`. | configure-content-fees-accounts-description |

##### Catégories de fonctionnalités des frais

| Valeur par défaut      | Valeur `data-textkey`                                    |
| :--------------------- | :------------------------------------------------------- |
| Frais de paiement      | configure-content-fees-accounts-entries-paymentFee       |
| Remboursement de frais de paiement | configure-content-fees-accounts-entries-paymentFeeRefund |
| Prêt                   | configure-content-fees-accounts-entries-loan             |
| Paiement de prêt       | configure-content-fees-accounts-entries-loanPayment      |
| Frais de prêt          | configure-content-fees-accounts-entries-loanFee          |
| Remise en argent       | configure-content-fees-accounts-entries-cashback         |

##### Titre et description des paiements

| Valeur par défaut                                     | Valeur data-textkey                    |
| ----------------------------------------------------- | -------------------------------------- |
| Paiements                                             | configure-content-payments-title       |
| Description du titre des paiements : aucune valeur par défaut. | configure-content-payments-description |

##### Catégories de fonctionnalités des paiements

| Valeur par défaut  | Valeur `data-textkey`                                      |
| :----------------- | :--------------------------------------------------------- |
| Carte              | configure-content-payments-accounts-entries-card           |
| Comptant           | configure-content-payments-accounts-entries-cash           |
| Facture            | configure-content-payments-accounts-entries-invoice        |
| Carte en ligne     | configure-content-payments-accounts-entries-onlineCard     |
| Versement          | configure-content-payments-accounts-entries-payout         |
| Personnalisé       | configure-content-payments-accounts-entries-custom         |
| Crédit magasin     | configure-content-payments-accounts-entries-storeCredit    |
| Paypal             | configure-content-payments-accounts-entries-paypal         |
| Paypal qr          | configure-content-payments-accounts-entries-paypalQr       |
| Mobile             | configure-content-payments-accounts-entries-mobile         |
| Vipps              | configure-content-payments-accounts-entries-vipps          |
| Swish              | configure-content-payments-accounts-entries-swish          |
| Paiement prépayé   | configure-content-payments-accounts-entries-prepaidPayment |
| Manuel             | configure-content-payments-accounts-entries-manual         |

### Comment modifier la visibilité des catégories de fonctionnalités (comptes)

Pour mettre à jour la visibilité des catégories de fonctionnalités pour un logiciel de commerce, effectuez la requête suivante :

```json
POST sync/commerce/config/ui/accounts/platform/{commerceKey}

//Corps de la requête :
//Pour mettre à jour les catégories de fonctionnalités visibles avec celles fournies dans le corps de la requête :
{
    "visibleAccounts": [
         "account-key-1",
      	 "account-key-2"
    ]
}

//Pour revenir aux paramètres par défaut et afficher toutes les catégories de fonctionnalités :
{}

//Pour afficher uniquement les champs obligatoires :
{
  "visibleAccounts": []
}
```

Dans la requête ci-dessus, le `commerceKey` est la clé de plateforme Codat du logiciel de commerce sélectionné. Vous pouvez trouver une liste de clés pour les plateformes prises en charge sur la page [Flux de sélection de plateforme](/sfc/build-with-sync-for-commerce/sync-platform-selection).
Pour trouver l'`account-key`, consultez les tableaux ci-dessous. Notez que les champs marqués d'un '\*' ne peuvent pas être supprimés.

#### Catégories de fonctionnalités des ventes

| Valeur par défaut     | `account-key`              |
| :-------------------- | :------------------------- |
| Ventes\*              | sales-accounts-sales       |
| Remboursement\*       | sales-accounts-refund      |
| Pourboires            | sales-accounts-gratuity    |
| Prépayé               | sales-accounts-prepaid     |
| Taux de taxe 0 %\*    | sales-taxRates-0           |
| Taux de taxe 5 %\*    | sales-taxRates-5           |
| Taux de taxe 10 %\*   | sales-taxRates-10          |
| Taux de taxe 20 %\*   | sales-taxRates-20          |
| Statut de facture\*   | sales-other-invoiceStatus  |
| Période de regroupement\* | sales-other-groupingPeriod |

#### Catégories de fonctionnalités des frais

| Valeur par défaut      | `account-key`                  |
| :--------------------- | :----------------------------- |
| Frais de paiement      | fees-accounts-paymentFee       |
| Remboursement de frais de paiement | fees-accounts-paymentFeeRefund |
| Prêt                   | fees-accounts-loan             |
| Paiement de prêt       | fees-accounts-loanPayment      |
| Frais de prêt          | fees-accounts-loanFee          |
| Remise en argent       | fees-accounts-cashback         |

#### Catégories de fonctionnalités des paiements

| Valeur par défaut   | `account-key`                    |
| :------------------ | :------------------------------- |
| Carte\*             | payments-accounts-card           |
| Comptant            | payments-accounts-cash           |
| Facture             | payments-accounts-invoice        |
| Carte en ligne      | payments-accounts-onlineCard     |
| Versement           | payments-accounts-payout         |
| Personnalisé        | payments-accounts-custom         |
| Crédit magasin      | payments-accounts-storeCredit    |
| Paypal              | payments-accounts-paypal         |
| Paypal qr           | payments-accounts-paypalQr       |
| Mobile              | payments-accounts-mobile         |
| Vipps               | payments-accounts-vipps          |
| Swish               | payments-accounts-swish          |
| Paiement prépayé    | payments-accounts-prepaidPayment |
| Manuel              | payments-accounts-manual         |
