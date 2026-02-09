---
title: "Catégorisation des comptes (ancienne version)"
description: "La catégorisation des comptes standardise les états financiers utilisés pour produire des informations sur la santé financière de vos clients"
image: "/img/banners/social/lending.png"
draft: true
---

:::caution Versions de catégorisation des comptes - ancienne version

Il existe deux versions de catégorisation des comptes actuellement disponibles dans le Portal Codat.

La _Version 2_ prend en charge nos endpoints [Enhanced Financials](/lending/enhanced-financials/legacy/financials) anciens. Continuez à utiliser cette version comme version de vos catégories si vous appelez encore ces endpoints, comme décrit dans cet article.
:::

Le plan comptable définit la structure financière d'une entreprise en fournissant une liste de tous les comptes utilisés dans le grand livre général de l'entreprise.

Chaque compte se voit attribuer l'une des 162 catégories de Codat. Cela permet à Codat de produire des informations sur vos clients PME indépendamment de la source de données comptables qu'ils utilisent. Les catégories attribuées s'appliquent uniquement dans la plateforme Codat, pas dans la source de données comptables.

Vous pouvez obtenir la dernière liste des catégories Codat à partir de notre documentation de <a href="/assess-api#/operations/get-data-assess-accounts-categories">référence API</a> en appelant l'endpoint correspondant.

## Avantages de la catégorisation des comptes

1. Facile d'identifier des comptes comparables à travers le portefeuille d'entreprises d'une société.
2. Codat utilise les données catégorisées pour produire des informations supplémentaires, par exemple des ratios et des états financiers.
3. Économise du temps en automatisant la prise de décision, y compris certains critères de qualification de premier niveau.
4. Vous permet d'utiliser les catégories pour remplir vos propres modèles de crédit internes ou outils d'analyse.
5. Vous permet de visualiser le plan comptable dans notre modèle catégorisé standard OU dans le format original de la petite entreprise.
6. Améliore la surveillance car vous pouvez l'utiliser pour créer des alertes pour les tendances en détérioration.

## Comment les catégories sont-elles attribuées?

Les catégories de comptes ont trois sous-catégories :

- Type de compte - la classification de plus haut niveau d'un compte, par exemple Actif, Passif, etc.
- Sous-type de compte - la catégorie souvent utilisée pour les ratios financiers traditionnels, par exemple Actifs courants, Passifs courants, etc.
- Type de détail du compte - le niveau de catégorisation le plus granulaire, par exemple Trésorerie, Inventaire, Amortissement, etc.

Les catégories sont attribuées de deux manières. Premièrement, Codat suggère automatiquement des catégories pour les comptes. Deuxièmement, vous ou votre client PME [attribue une catégorie](#how-to-categorize-accounts) dans le Portal Codat.

Codat essaie de suggérer une catégorie pour chaque compte mais ce n'est pas toujours possible. Vous serez invité à sélectionner des catégories pour les comptes que Codat n'a pas pu catégoriser lorsque vous accédez à Assess. Cela se fait en sélectionnant la catégorie appropriée dans Assess ou en suivant les [instructions pour catégoriser les comptes](#how-to-categorize-accounts) ci-dessous.

Les catégories suggérées doivent être confirmées par vous ou votre client PME. Cela garantit que les catégories attribuées aux comptes sont correctes. Si vous n'êtes pas d'accord avec la suggestion, vous pouvez sélectionner une catégorie différente. Vous pouvez également **réinitialiser** une catégorie qui reviendra à sa suggestion originale.

## Comptes non catégorisés

Codat essaie de suggérer une catégorie pour chaque compte, mais ce n'est pas toujours possible. Si une action supplémentaire est nécessaire, le bouton **Categorize accounts** à droite du nom de l'entreprise sera remplacé par un bouton rouge **Categorization required**. Par exemple, cela se produit si Codat ne peut pas catégoriser les comptes avec succès. Notez que les boutons de catégorisation ne s'affichent que si vous avez Assess activé.

Cliquer sur le bouton vous amène à la page **Account categorization** qui affiche une liste de tous les comptes non catégorisés. Si vous ignorez le bouton **Categorization required** et cliquez sur **Assess** dans le menu de gauche, une fenêtre contextuelle vous notifie que l'entreprise a des comptes non catégorisés. Cela est dû au fait que les métriques Profit and Loss et Balance Sheet dans Assess dépendent de comptes entièrement catégorisés. Vous pouvez ignorer la catégorisation des comptes, mais alors ces métriques ne s'afficheront pas.

## Catégorisation des comptes

Les onglets en haut de la page montrent uniquement les types de comptes, qui est le plus haut niveau de classification, ayant des comptes non catégorisés. Un onglet **Unknown** est également affiché si un type de compte n'a pas pu être suggéré pour un compte.

Vous pouvez sélectionner le **Account type**, le **Account subtype** et le **Account detail** à partir de listes déroulantes. Le champ **Account name** n'est pas modifiable. Un **Account type** choisi aura des **Account subtypes** spécifiques que vous pouvez choisir. De même, un **Account subtype** choisi aura des **Account details** spécifiques que vous pouvez choisir.

Lorsque vous avez catégorisé tous les comptes non catégorisés sous un onglet, vous pouvez soit cliquer sur l'un des autres onglets, soit cliquer sur **Next** pour passer à l'onglet suivant. Le bouton **Save** ne devient actif qu'après que tous les comptes ont été catégorisés.

Notez que vous pouvez mettre à jour les catégories de comptes à tout moment en suivant les étapes dans [Comment catégoriser les comptes](#how-to-categorize-accounts).

## À quelle fréquence les catégories d'une entreprise sont-elles mises à jour?

Les catégories d'une entreprise sont mises à jour chaque fois qu'elle se synchronise. Les catégories précédemment confirmées ne reviendront pas à la catégorie suggérée à moins qu'une catégorie mieux adaptée n'ait été ajoutée à la liste des catégories de Codat. Vous ou votre client PME confirmerez alors si la catégorie suggérée est correcte pour le compte.

## Comment catégoriser les comptes

Vous pouvez examiner les mappages de catégories suggérées dans le Portal Codat et pouvez confirmer ou recatégoriser si vous constatez que certains comptes ont été mal catégorisés.

Vous pouvez ouvrir la page **Account Categorization** en cliquant sur le bouton **Categorize accounts** à droite du nom de l'entreprise. Suivez les étapes 3 à 5 ci-dessous pour attribuer une catégorie à un compte.

Alternativement, vous pourriez suivre ces étapes :

1. Dans l'onglet **Companies**, cliquez sur l'entreprise et sélectionnez **Accounting API** dans le menu de gauche.
2. Dans le champ `Data type`, sélectionnez **Accounting data > Accounts**, et cliquez sur le bouton **Categorize accounts** (le bouton ne s'affiche que si vous avez Assess activé).

   Vous pouvez en apprendre davantage sur le **Account subtype** et le **Account detail type** dans le <a className="external" href="https://links.codat.io/account-categorization/help" target="_blank">guide de terminologie</a>.

3. Sélectionnez **Categorize** à côté de la catégorie de compte qui contient le type de compte pour lequel vous souhaitez définir une catégorie.
4. Définissez un **Account type**, un **Account subtype** et un **Account detail** pour chaque compte listé.

   Note : Chaque **Account name**, qui n'est pas modifiable, a une icône d'information cliquable montrant les catégories que nous suggérons d'utiliser pour le compte.

5. Enregistrez vos paramètres pour confirmer vos catégories.

## Comment exclure une catégorie de la catégorisation

Si vous ne souhaitez pas définir une catégorie pour un compte, accédez à la page **Account Categorization** en suivant l'une des méthodes décrites dans la section précédente et en suivant les étapes 1 et 2. Cochez la case **Unset** à côté du compte et enregistrez vos paramètres. Le compte sera alors traité comme un **Unconfirmed account** et aura un cercle jaune à côté. Vous pourrez toujours revenir et revoir vos paramètres ultérieurement.

Notez que l'application de l'option **Unset** à une catégorie déjà confirmée la rétablit à la catégorie suggérée par Codat. Cela signifie que lorsque vous ouvrirez à nouveau la fenêtre modale de mappage, les cases de catégories réinitialisées ne seront pas vides, mais auront la suggestion faite par Codat et auront un cercle jaune pour indiquer que la catégorie n'a pas encore été confirmée.

## Comment exporter un plan comptable catégorisé

Vous pouvez exporter le plan comptable dans un fichier Excel :

1. À droite du nom de l'entreprise, cliquez sur le lien **Export data** puis cliquez sur **Create new report**.
2. Lorsque le fichier est généré ou régénéré, cliquez sur **Download** pour télécharger le fichier au format XLSX.

Le fichier Excel téléchargé contient :

- L'onglet **Categorized Account Balances**.
- La sortie de l'endpoint <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-accounts-categories">List suggested and confirmed account categories</a>.

```http
GET /data/companies/{companyId}/connections/{connectionId}/lending/accounts/categories
```

- Un solde de la catégorie de compte pour chaque période financière disponible dans les états financiers.
