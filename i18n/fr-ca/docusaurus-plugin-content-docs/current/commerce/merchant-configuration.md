---
title: "Configuration du commerçant"
description: "Permettre aux commerçants de connecter leurs systèmes et de spécifier comment ils souhaitent que leurs données de ventes soient synchronisées dans leur logiciel de comptabilité"
displayed_sidebar: commerce
image: "/img/banners/social/commerce.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Notre interface utilisateur de configuration Sync permet aux commerçants de s'authentifier pour accéder à leur logiciel de commerce et de comptabilité et enregistre les préférences de synchronisation des données de ventes des commerçants. Elle peut être personnalisée pour s'intégrer parfaitement dans votre logiciel.

## Configuration du commerçant

Une fois qu'un commerçant a autorisé l'accès à ses systèmes, il peut utiliser l'interface utilisateur de configuration Sync pour effectuer la configuration suivante :

- Décider s'il faut gérer les ventes comme des factures ou des écritures de journal dans leur logiciel de comptabilité.
- Planifier la date et l'heure de début à partir desquelles les données de ventes doivent être synchronisées.
- Configurer comment leurs ventes doivent être comptabilisées, incluant :
  - L'agrégation des ventes par catégorie de produit,
  - Le suivi des ventes par emplacement,
  - La gestion des cartes-cadeaux, des pourboires et des remboursements,
  - Les totaux de taxes.
- Configurer comment comptabiliser les paiements pour chaque type de paiement que vous prenez en charge et que votre client utilise.
- Configurer comment comptabiliser les frais de paiement.

### Mappage des ventes, paiements et frais

La configuration de la comptabilité pour les ventes, les paiements et les frais se fait sous forme de mappage.

Tout d'abord, Codat récupère les données pertinentes du logiciel de commerce et du logiciel de comptabilité connectés.

L'interface utilisateur demande ensuite à l'utilisateur de mapper différents types de ventes, de paiements et de frais aux comptes pertinents dans leur système comptable. Par exemple, ils peuvent mapper les ventes de nourriture au compte "Revenus alimentaires" et mapper les frais de paiement au compte "Coûts de paiement".

L'interface utilisateur de configuration Sync permet également à votre client de créer un nouveau compte dans son logiciel de comptabilité si nécessaire.

:::tip Implémenter votre propre interface utilisateur
Vous pouvez implémenter votre propre interface utilisateur pour capturer la configuration de synchronisation souhaitée d'un commerçant en utilisant notre API. Consultez votre ingénieur Solutions pour obtenir de l'aide à ce sujet.
:::

## Personnaliser l'interface utilisateur de configuration Sync

Les options de personnalisation disponibles pour l'interface utilisateur de configuration incluent :

- Image de marque, incluant le nom de votre entreprise, votre logo, votre icône et vos couleurs de marque
- Contenu textuel de l'interface utilisateur de configuration Sync

:::tip Personnalisation supplémentaire de l'interface utilisateur
Cette section décrit les personnalisations d'interface utilisateur de configuration Sync les plus couramment implémentées. Cependant, une personnalisation supplémentaire est possible. Veuillez consulter votre ingénieur Solutions pour plus de détails.
:::

### Personnalisation de l'image de marque

Vous pouvez configurer vos options d'image de marque dans la section [Paramètres d'image de marque](https://app.codat.io/settings/branding) du portail Codat. Apprenez-en plus sur les options d'image de marque disponibles dans notre documentation [Image de marque d'entreprise](/auth-flow/customize/branding).

### Personnalisation du contenu textuel

La mise à jour des champs de texte aide à garantir que vos utilisateurs comprennent clairement comment configurer correctement leur synchronisation de données de ventes et comment exactement ces données seront synchronisées.

Le texte peut être personnalisé séparément pour l'anglais (É.-U.) et le français. Vos utilisateurs peuvent sélectionner la langue qu'ils voient depuis l'interface utilisateur de configuration.

Un ensemble de valeurs par défaut est fourni pour l'anglais (É.-U.) et le français.

#### Personnalisation des éléments d'interface utilisateur

L'interface utilisateur de configuration Sync est organisée en 6 étapes, chacune avec des éléments de texte personnalisables :

| Étape                                         | Action requise de l'utilisateur                               |
| --------------------------------------------- | ------------------------------------------------------------- |
| 1. Connexion au système de commerce           | S'authentifier avec le logiciel de commerce                   |
| 2. Connexion au système comptable             | S'authentifier avec le logiciel de comptabilité               |
| 3. Configuration de synchronisation des ventes | Configurer comment les ventes doivent être comptabilisées     |
| 4. Configuration de synchronisation des frais  | Configurer comment les frais doivent être comptabilisés       |
| 5. Configuration de synchronisation des paiements | Configurer comment les paiements doivent être comptabilisés |
| 6. Configuration du calendrier de synchronisation | Définir la date et l'heure de début pour la synchronisation des données de ventes |

Chaque élément personnalisable est identifié par son `data-textkey`. Vous pouvez personnaliser les éléments suivants :

- Titre principal
- Options de case à cocher
- Boutons Précédent et Suivant sur chaque étape
- Titre de l'étape, description et description de l'indicateur de champ obligatoire
- Titres et descriptions des sous-sections au sein de chaque étape
- Étiquettes déroulantes pour la configuration des ventes, des frais et des paiements (étapes 3, 4 et 5)

Vous pouvez également appeler le endpoint [Get preferences for text fields](/sync-for-commerce-api#/operations/get-config-text-sync-flow) pour récupérer la liste complète des éléments personnalisables.

Ajoutez un paramètre de requête `locale` pour sélectionner la langue.
Les options valides sont :

- `en-us` (anglais É.-U.)
- `fr-fr` (français)

```http
GET sync/commerce/config/ui/text?locale=en-us
```

Cela retourne tous les éléments d'interface utilisateur personnalisables avec le texte actuel configuré pour chacun. Vous pouvez également trouver la liste complète des éléments et leurs valeurs par défaut dans la section [Résumé des `data-textkeys` et valeurs par défaut](/commerce/merchant-configuration#summary-of-text-elements-and-default-values) ci-dessous.

```json
{
  "configure-setupSidebar-checkboxes-sales": "Configurer les ventes",
  "configure-setupSidebar-checkboxes-fees": "Configurer les frais",
  "configure-setupSidebar-checkboxes-payments": "Configurer les paiements",
  ... // etc.
}
```

Pour mettre à jour les valeurs de texte via notre API, utilisez le endpoint [Update preferences for text fields](/sync-for-commerce-api#/operations/update-config-text-sync-flow) et incluez les chaînes de texte souhaitées dans le corps de la requête pour chaque `data-textkey`.

Les valeurs de texte peuvent être mises à jour avec des valeurs différentes pour chaque langue, déterminée par le paramètre de requête `locale`.
Les options valides sont :

- `en-us` (anglais É.-U.)
- `fr-fr` (français)

```http
PATCH sync/commerce/config/ui/text?locale=en-us
```

Exemple de corps de requête :

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

##### Résumé des éléments de texte et valeurs par défaut

<Tabs>
   <TabItem value="main" label="Titre principal">

| Valeur par défaut                            | Valeur `data-textkey`          |
| -------------------------------------------- | ------------------------------ |
| Configurer la synchronisation vers `{platform name}` | `configure-setupSidebar-title` |

   </TabItem>

   <TabItem value="checkbox" label="Cases à cocher">

| Valeur par défaut                           | Valeur `data-textkey`                                     |
| ------------------------------------------- | --------------------------------------------------------- |
| Se connecter à `{commerce software name}`   | `configure-setupSidebar-checkboxes-connectToCommerce`     |
| Se connecter à `{accounting software name}` | `configure-setupSidebar-checkboxes-connectToAccounting`   |
| Configurer les ventes                       | `configure-setupSidebar-checkboxes-sales`                 |
| Configurer les frais                        | `configure-setupSidebar-checkboxes-fees`                  |
| Configurer les paiements                    | `configure-setupSidebar-checkboxes-payments`              |
| Configurer le calendrier de synchronisation | `configure-setupSidebar=checkboxes-syncSchedule`          |

   </TabItem>

   <TabItem value="buttons" label="Boutons de navigation">

| Valeur par défaut | Valeur `data-textkey`           |
| ----------------- | ------------------------------- |
| Précédent         | `configure-misc-previousButton` |
| Suivant           | `configure-misc-nextButton`     |

   </TabItem>

   <TabItem value="stage" label="Valeurs de texte d'étape">

<b>Titre et description de l'étape</b>

| Valeur par défaut                                     | Valeur `data-textkey`                    |
| ----------------------------------------------------- | ---------------------------------------- |
| Ventes                                                | `configure-content-sales-title`          |
| Description du titre des ventes : aucune valeur par défaut. | `configure-content-sales-description`    |
| Frais                                                 | `configure-content-fees-title`           |
| Description du titre des frais : aucune valeur par défaut.  | `configure-content-fees-description`     |
| Paiements                                             | `configure-content-payments-title`       |
| Description du titre des paiements : aucune valeur par défaut. | `configure-content-payments-description` |

<b>Indicateur de champ obligatoire</b>

| Valeur par défaut            | Valeur `data-textkey`          |
| ---------------------------- | ------------------------------ |
| Indique un champ obligatoire | `configure-required-indicator` |

   </TabItem>

   <TabItem value="subsection" label="Valeurs de texte de sous-section">

<b>Ventes</b>

| Valeur par défaut                                                                                | Valeur `data-textkey`                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| Comptes                                                                                          | `configure-content-sales-accounts-title`        |
| Configurer le mappage des comptes de `{commerce software name}` vers `{accounting software name}`. | `configure-content-sales-accounts-description`  |
| Taux de taxe                                                                                     | `configure-content-sales-taxRates-title`        |
| Configurer le mappage des taux de taxe de `{commerce software name}` vers `{accounting software name}`. | `configure-content-sales-taxRates-description` |
| Autre                                                                                            | `configure-content-sales-other-title`           |
| Description du titre Autre : aucune valeur par défaut.                                           | `configure-content-sales-other-description`     |

<b>Frais</b>

| Valeur par défaut                                                                                | Valeur `data-textkey`                          |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| Comptes                                                                                          | `configure-content-fees-accounts-title`        |
| Configurer le mappage des comptes de `{commerce software name}` vers `{accounting software name}`. | `configure-content-fees-accounts-description` |

   </TabItem>

   <TabItem value="labels" label="Étiquettes déroulantes">

<b>Ventes (étape 3)</b>

| Valeur par défaut                                                                                | Valeur `data-textkey`                           |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| Comptes                                                                                          | `configure-content-sales-accounts-title`        |
| Configurer le mappage des comptes de `{commerce software name}` vers `{accounting software name}`. | `configure-content-sales-accounts-description`  |
| Taux de taxe                                                                                     | `configure-content-sales-taxRates-title`        |
| Configurer le mappage des taux de taxe de `{commerce software name}` vers `{accounting software name}`. | `configure-content-sales-taxRates-description` |
| Autre                                                                                            | `configure-content-sales-other-title`           |
| Description du titre Autre : aucune valeur par défaut.                                           | `configure-content-sales-other-description`     |

<b>Frais (étape 4)</b>

| Valeur par défaut                                                                                | Valeur `data-textkey`                          |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| Comptes                                                                                          | `configure-content-fees-accounts-title`        |
| Configurer le mappage des comptes de `{commerce software name}` vers `{accounting software name}`. | `configure-content-fees-accounts-description` |

<b>Paiements (étape 5)</b>

| Valeur par défaut   | Valeur `data-textkey`                                   |
| ------------------- | ------------------------------------------------------- |
| Ventes              | `configure-content-sales-accounts-entries-sales`        |
| Remboursements      | `configure-content-sales-accounts-entries-refund`       |
| Pourboires          | `configure-content-sales-accounts-entries-gratuity`     |
| Prépayé             | `configure-content-sales-accounts-entries-prepaid`      |
| Autres ventes       | `configure-content-sales-accounts-entries-sales-other`  |
| Taux de taxe 0 %    | `configure-content-sales-accounts-taxRates-entries-0`   |
| Taux de taxe 5 %    | `configure-content-sales-accounts-taxRates-entries-10`  |
| Taux de taxe 10 %   | `configure-content-sales-accounts-taxRates-entries-15`  |
| Taux de taxe 20 %   | `configure-content-sales-accounts-taxRates-entries-20`  |
| Statut de facture   | `configure-content-sales-other-entries-invoiceStatus`   |
| Période de regroupement | `configure-content-sales-other-entries-groupingPeriod` |

   </TabItem>

</Tabs>

#### Personnalisation des listes déroulantes

Lors de la présentation de la configuration de synchronisation des ventes, des frais et des paiements à votre commerçant (étapes 3, 4 et 5), il est probable que toutes les options déroulantes ne soient pas applicables à votre produit.

Toutes les options de liste déroulante sont affichées à vos commerçants par défaut, mais vous pouvez choisir d'afficher uniquement celles qui vous sont pertinentes.

Vous pouvez obtenir une liste complète des éléments déroulants en appelant le endpoint [List visible accounts](/sync-for-commerce-api#/operations/get-visible-accounts) :

```http
GET sync/commerce/config/ui/accounts/platform/{platformKey}
```

Cela retournera tous les éléments déroulants, identifiés par leur `account-key`.

```json
{
    "visibleAccounts": [
         "sales-accounts-sales",
         "sales-accounts-refund",
         ... // etc.
    ]
}
```

Vous pouvez mettre à jour la liste des éléments déroulants affichés à votre commerçant en appelant le endpoint [Update visible accounts](/sync-for-commerce-api#/operations/update-visible-accounts-sync-flow) :

```http
POST sync/commerce/config/ui/accounts/platform/{commerceKey}
```

```json title="Exemple de corps de requête pour gérer la visibilité des éléments déroulants"
//Pour mettre à jour les éléments déroulants visibles avec ceux fournis dans le corps de la requête :
{
    "visibleAccounts": [
         "account-key-1",
         "account-key-2"
    ]
}

//Pour revenir aux paramètres par défaut et afficher tous les éléments déroulants :
{}

//Pour afficher uniquement les éléments déroulants obligatoires :
{
  "visibleAccounts": []
}
```

##### Résumé des éléments déroulants disponibles pour personnalisation

<Tabs>
   <TabItem value="stage3" label="Étape 3 : Ventes">

| Nom affiché (sauf personnalisation) | `account-key`                |
| ------------------------------------ | ---------------------------- |
| Ventes\*                             | `sales-accounts-sales`       |
| Remboursement\*                      | `sales-accounts-refund`      |
| Pourboires                           | `sales-accounts-gratuity`    |
| Prépayé                              | `sales-accounts-prepaid`     |
| Taux de taxe 0 %\*                   | `sales-taxRates-0`           |
| Taux de taxe 5 %\*                   | `sales-taxRates-5`           |
| Taux de taxe 10 %\*                  | `sales-taxRates-10`          |
| Taux de taxe 20 %\*                  | `sales-taxRates-20`          |
| Statut de facture\*                  | `sales-other-invoiceStatus`  |
| Période de regroupement\*            | `sales-other-groupingPeriod` |

Les `account-keys` marqués d'un '\*' doivent être affichés aux utilisateurs.

   </TabItem>

   <TabItem value="stage4" label="Étape 4 : Frais">

| Nom affiché (sauf personnalisation) | `account-key`                    |
| ------------------------------------ | -------------------------------- |
| Frais de paiement                    | `fees-accounts-paymentFee`       |
| Remboursement de frais de paiement   | `fees-accounts-paymentFeeRefund` |
| Prêt                                 | `fees-accounts-loan`             |
| Paiement de prêt                     | `fees-accounts-loanPayment`      |
| Frais de prêt                        | `fees-accounts-loanFee`          |
| Remise en argent                     | `fees-accounts-cashback`         |

   </TabItem>

   <TabItem value="stage5" label="Étape 5 : Paiements">

| Nom affiché (sauf personnalisation) | `account-key`                      |
| ------------------------------------ | ---------------------------------- |
| Carte\*                              | `payments-accounts-card`           |
| Comptant                             | `payments-accounts-cash`           |
| Facture                              | `payments-accounts-invoice`        |
| Carte en ligne                       | `payments-accounts-onlineCard`     |
| Versement                            | `payments-accounts-payout`         |
| Personnalisé                         | `payments-accounts-custom`         |
| Crédit magasin                       | `payments-accounts-storeCredit`    |
| Paypal                               | `payments-accounts-paypal`         |
| Paypal QR                            | `payments-accounts-paypalQr`       |
| Mobile                               | `payments-accounts-mobile`         |
| Vipps                                | `payments-accounts-vipps`          |
| Swish                                | `payments-accounts-swish`          |
| Paiement prépayé                     | `payments-accounts-prepaidPayment` |
| Manuel                               | `payments-accounts-manual`         |

Les `account-keys` marqués d'un '\*' doivent être affichés aux utilisateurs.

   </TabItem>

</Tabs>

---

## Lire ensuite

- [Synchronisation des données](/commerce/data-synchronization)
