---
title: "Lending dans le Portal"
description: "Le produit sans code de Codat qui fournit des informations sur les données d'une entreprise pour aider à prendre des décisions de prêt éclairées"
image: "/img/banners/social/lending.png"
draft: true
---

Lending dans le Portal exploite les API de Codat pour produire des fonctionnalités qui servent des données sur la santé d'une entreprise et fournissent les informations requises pour prendre des décisions de prêt éclairées. Lending comprend cinq sections : Profit and Loss, Balance Sheet, Commerce, Banking et Marketing.

Pour bénéficier de toutes les fonctionnalités de Lending, une entreprise doit être liée à des sources de données comptables, bancaires et commerciales. Explorez notre guide [Comment démarrer](/lending/get-started).

Les états catégorisés Profit and Loss et Balance Sheet mettent en valeur la puissance de la fonctionnalité [Categories](/lending/categories) qui standardise les données personnalisées à travers les PME. Une fois les données standardisées, des informations et mesures significatives sont produites pour la performance financière.

**Correspondance des données**

Le bouton de pourcentage de correspondance des données est situé à côté de l'en-tête **Lending** sur chaque page Lending et il exploite la fonctionnalité [Data Integrity](/lending/data-integrity/overview). Le pourcentage de correspondance est précalculé en utilisant l'endpoint [Data Integrity summaries](/lending/data-integrity/api-data-integrity#summaries).

Il prend le pourcentage de correspondance de l'endpoint summaries pour les `banking-transactions` et les `accountTransactions` pour calculer un pourcentage de correspondance global, et il prend en compte toutes les dates, pas seulement la plage de dates optimale.

En survolant le bouton, vous obtenez plus de détails sur la correspondance des données. En cliquant sur le bouton **Data match**, vous accédez à la page **Data Integrity** qui fournit des informations détaillées sur les correspondances. Explorez [Data Integrity](/lending/data-integrity/overview).

**Rapports**

Le bouton **Reports** est situé dans le coin supérieur droit de chaque page Lending et vous dirige vers la page [Reports](#reports) dans le Portal.

## Sections de Lending

- [Profit and Loss](#profit-and-loss)
- [Balance Sheet](#balance-sheet)
- [Commerce](#commerce)
- [Banking](#banking)
- [Marketing](#marketing)

## Profit and Loss

La page Profit and Loss est la page d'accueil lors de l'accès à Lending. La page comprend un graphique affichant les sélections pour l'état financier catégorisé et les ratios. Si vous avez des comptes non catégorisés, la fenêtre modale de catégorisation des comptes sera affichée. Seuls les comptes non catégorisés seront affichés et vous devrez attribuer manuellement des catégories. Notre documentation sur la [catégorisation des comptes](/lending/portal/categorization-of-accounts) fournit plus de détails.

### Panneau de sélection

![Une capture d'écran du panneau de sélection P&L](/img/old/e8a9d6f-PLSelectionPanel3.png)

**Devise** : La devise affichée dans l'état des résultats. Elle est prédéfinie pour le P&L et reflète la devise dans le logiciel de comptabilité.

**Début de période** : Les périodes sont définies en mois. Les états financiers sont rétrospectifs, donc c'est la période à partir de laquelle vous voulez commencer à regarder en arrière. Le système préremplira le dernier mois complet disponible dans les données de l'entreprise. Si vous sélectionnez un mois hors de la plage, le système vous notifiera du dernier mois disponible pour l'entreprise.

**Durée de la période** : Spécifiée en mois.

**Périodes à comparer** : Le nombre de périodes pour lesquelles les données calculées sont retournées et comparées.

Sélectionnez le **Period start**, la **Period length** et les **Periods to compare** pour obtenir les vues que vous souhaitez. Par exemple :

**Si vous voulez une vue mensuelle des 12 derniers mois :**

Period start = dernier mois (prérempli pour vous)
Period length = 1 (mois)
Periods to compare = 12

**Si vous voulez voir les 4 derniers trimestres complets :**
Period start = choisissez le dernier mois du dernier trimestre que vous voulez choisir, par exemple juin 2022
Period length = 3
Periods to compare = 4

### Mappage vers un plan d'état commun

Au chargement, nous catégoriserons automatiquement les lignes de l'état des résultats de l'entreprise. Les résultats seront présentés dans une fenêtre modale pour que vous les examiniez. Lorsque vous avez terminé de réviser chaque groupe, appuyez sur _Next_. Dans certains cas, nous pourrions ne pas être en mesure de mapper automatiquement chaque ligne d'état - celles-ci seront surlignées en rouge et vous devrez sélectionner la catégorie pertinente dans la liste. Une fois terminé, appuyez sur _Save_ pour voir l'état final.

### État

L'état des résultats catégorisé est obtenu à partir de l'endpoint **Enhanced Profit and Loss**. Il fournit un état entièrement catégorisé sur des périodes spécifiées, pour la connexion comptable d'une entreprise spécifique.

Les informations suivantes sont affichées :

- Income
- Expense
- Gross profit
- Net operating profit
- Net profit

![Graphique P&L et extrait d'un état basé sur les critères de sélection](/img/old/a1b310e-PL1.png)

Le tableau **Statement** rend les données de réponse de l'endpoint [Enhanced Profit and Loss](/lending/enhanced-financials/overview#endpoints) pour donner un visuel clair de la performance de l'entreprise sur les périodes spécifiées. Les flèches vertes et rouges à côté des chiffres indiquent respectivement une augmentation ou une diminution par rapport à la période précédente.

Les lignes peuvent être développées ou réduites pour montrer plus ou moins d'informations. Un maximum de 5 cases à cocher peuvent être cochées, comme Income ci-dessus, pour afficher la sélection sur le graphique. En survolant le graphique, une info-bulle s'affiche contenant des informations sur tous les points tracés pour cette date.

### Ratios

Les ratios sont produits à partir de l'endpoint [Financial Metrics](/lending/metrics/accounting/api-financial-metrics). Il fournit un ensemble de ratios et métriques précalculés utilisés pour évaluer la performance financière d'une entreprise. La fonctionnalité Financial Metrics effectue des calculs complexes sur des états financiers entièrement standardisés pour produire les métriques et ratios financiers suivants (voir [formules](/lending/metrics/accounting/api-financial-metrics#what-ratios-and-metrics-are-available)) :

- Gross Profit Margin
- EBITDA
- Debt Service Coverage Ratio
- Current Ratio
- Quick Ratio
- Free Cash Flow
- Working Capital
- Fixed-charge Coverage Ratio

Le tableau **Ratios** est affiché sous le tableau Statement. Chaque métrique/ratio peut être développé pour montrer les entrées et valeurs utilisées pour calculer la métrique (voir l'extrait du tableau Ratios ci-dessous).

![Un extrait d'un tableau de ratios P&L basé sur les critères de sélection](/img/old/b28af34-AssessPortal_3.png)

## Balance Sheet

La page Balance Sheet comprend un graphique affichant les sélections pour le bilan catégorisé, un état et des ratios.

L'état du bilan fournit l'état entièrement catégorisé sur des périodes spécifiées, pour la connexion comptable d'une entreprise spécifique.

Vérifiez les [prérequis](/lending/get-started#prerequisites) pour vous assurer que vous avez les types de données requis activés.

Le pourcentage de **Data match** affiché en haut à droite est une comparaison de la proximité entre les données comptables et les données bancaires.

### Panneau de sélection

![Une capture d'écran du panneau de sélection du bilan](/img/old/05c0127-BSSelectionPanel2.png)

**Devise** : La devise affichée dans l'état du bilan. Elle est prédéfinie pour le bilan et reflète la devise dans le logiciel de comptabilité.

**Début de période** : Les périodes sont définies en mois. Les états financiers sont rétrospectifs, donc c'est la période à partir de laquelle vous voulez commencer à regarder en arrière. Le système préremplira le dernier mois complet disponible dans les données de l'entreprise. Si vous sélectionnez un mois hors de la plage, le système vous notifiera du dernier mois disponible pour l'entreprise.

**Durée de la période** : Spécifiée en mois.

**Périodes à comparer** : Le nombre de périodes pour lesquelles les données calculées sont retournées et comparées.

Sélectionnez le **Period start**, la **Period length** et les **Periods to compare** pour obtenir les vues que vous souhaitez. Par exemple :

**Si vous voulez une vue mensuelle des 12 derniers mois**
Period start = dernier mois (prérempli pour vous)
Period length = 1 (mois)
Periods to compare = 12

**Si vous voulez voir les 4 derniers trimestres complets**
Period start = choisissez le dernier mois du dernier trimestre que vous voulez choisir, par exemple juin 2022
Period length = 3
Periods to compare = 4

### État du bilan et graphique

L'état affiche les données du bilan basées sur le **Period start**, la **Period length** et les **Periods to compare** spécifiés en haut de l'écran.

![Une capture d'écran d'un graphique de bilan et extrait d'un état basé sur les critères de sélection](/img/old/ec2864e-bs_graph_statement2.png)

#### Format de l'état

Chaque état a quatre niveaux. Le quatrième niveau est le poste original (compte du grand livre) dans le logiciel de comptabilité de l'entreprise. Les trois premiers niveaux représentent une couche de catégorisation intelligente que nous avons appliquée. Si vous souhaitez modifier le groupe dans lequel un poste est catégorisé, vous pouvez le faire en suivant les [instructions pour catégoriser les comptes](/lending/portal/categorization-of-accounts#how-to-categorize-accounts).

##### Catégorisation des comptes débiteurs

Les comptes débiteurs sont catégorisés comme **Asset > Current assets > Cash**. Cependant, lorsque le compte débiteur est en découvert sur une période donnée, l'**Enhanced Balance Sheet** le catégorise automatiquement comme **Liability > Non-current liabilities > Loans payable**, et change le signe de négatif à positif.

#### Options d'état et de graphique

**Flèches vertes et rouges** : Positionnées à côté des chiffres, elles indiquent respectivement une augmentation ou une diminution par rapport à la période précédente.

**Lignes d'état** : Celles-ci peuvent être développées pour voir une ventilation de chaque valeur. Un maximum de cinq cases à cocher peuvent être cochées, comme **Net Operating Profit** ci-dessus, pour afficher la sélection sur le graphique. En survolant le graphique, une info-bulle s'affiche contenant des informations sur tous les points tracés pour ce mois.

### Ratios

Les ratios et métriques sont calculés à partir des données de l'état ci-dessus et utilisent la même configuration de période que celle définie en haut de l'écran. Les métriques prises en charge sont (voir [formules](/lending/metrics/accounting/overview)) :

- Current Ratio
- Debt Service Coverage Ratio
- Free Cash Flow
- Quick Ratio
- Working Capital

Le tableau Ratios est affiché sous le tableau Statement. Chaque métrique/ratio peut être développé pour montrer les entrées et valeurs utilisées pour calculer la métrique (voir l'extrait du tableau Ratios ci-dessous).

![Un extrait d'un tableau de ratios du bilan basé sur les critères de sélection](/img/old/ec63022-bs_ratios.png)

### Développeur - Boîte de fonctionnalités

Si vous êtes développeur et que vous cherchez à reproduire les résultats de cette section, consultez la documentation API suivante :

- [Enhanced Balance Sheet](/lending/enhanced-financials/overview#endpoints) : Pour produire le tableau et le graphique de l'état du bilan.
- [Financial Metrics](/lending/metrics/accounting/api-financial-metrics) : Pour produire le tableau des ratios.
- [Data Integrity](/lending/data-integrity/api-data-integrity) : Pour produire le pourcentage de correspondance des données.

## Commerce

La page Commerce comprend l'analyse des ventes et les indicateurs clés de la santé du marchand. Les endpoints [Commerce Metrics](/lending/metrics/commerce/overview) sont utilisés pour générer les graphiques et métriques affichés sur cette page.

### Ventes

La section _Sales_ fournit un graphique de revenus généré à partir de l'endpoint [Revenue](/lending/metrics/commerce/api-revenue), et affiche la valeur moyenne des commandes pour la plage de dates sélectionnée. Le menu déroulant à droite du graphique vous donne l'option de mapper _Revenue_ (représenté en devise) ou _Revenue growth_ (représenté en pourcentage). En survolant le graphique, une info-bulle s'affiche contenant des informations sur le point tracé pour cette date.

![Graphiques de revenus et de croissance des revenus basés sur les critères de sélection](/img/old/4d18153-Sales_1.png)

### Santé du marchand

La section Merchant Health affiche les informations sur les clients. Vous pouvez sélectionner des graphiques pour _New vs. existing customers_ ou _Orders vs. refunds_. En survolant le graphique, la valeur de chacun de ceux-ci s'affiche à ce moment dans le temps.

![Graphiques de santé du marchand pour la sélection commandes vs remboursements](/img/old/108f299-AssessPortal_9.png)

Les métriques suivantes sont affichées comme suit :

- [New vs. existing customers](/lending/metrics/commerce/api-customer-retention) (graphique)
- [Orders](/lending/metrics/commerce/api-orders) vs. [Refunds](/lending/metrics/commerce/api-refunds) (graphique)
- [Refund rate](/lending/metrics/commerce/api-refunds) (indicateur)
- [Customer retention](/lending/metrics/commerce/api-customer-retention) (indicateur)
- [Lifetime value](/lending/metrics/commerce/api-lifetime-value) (indicateur)

## Banking

La page Banking affiche le solde courant le plus récent, la limite de découvert et un graphique soit des _soldes de comptes_ soit des _entrées vs sorties_ selon votre sélection.

Le panneau de sélection vous permet de choisir :

- Quel graphique vous voulez afficher &ndash; _Account balances_ ou _Inflows vs outflows_.
- Les comptes bancaires de l'entreprise inclus dans le graphique &ndash; par défaut, vous ne pouvez pas désélectionner tous les comptes.
- Mois de début et de fin.

Toutes les valeurs bancaires dans l'interface sont actuellement converties en GBP. La possibilité de convertir vers d'autres devises pourrait être disponible dans une version future.

Le _solde_ et les _Account limits_ affichés sont des vues agrégées pour les comptes bancaires sélectionnés et sont des valeurs à la date de fin du rapport.

![Une capture d'écran du panneau de sélection bancaire](/img/old/1513c65-banking_balances_4.png)

### Graphique des soldes de comptes

Ce graphique s'affiche lorsqu'il est choisi dans le menu déroulant _Select graph_. En survolant le graphique, une info-bulle s'affiche contenant le solde total du compte pour les comptes bancaires sélectionnés.

![Un graphique bancaire basé sur les critères de sélection](/img/old/11d2897-banking_balances_1.png)

### Graphique des entrées vs sorties

Ce graphique s'affiche lorsqu'il est choisi dans le menu déroulant _Select graph_. En survolant le graphique, une info-bulle s'affiche contenant le total des entrées et sorties pour les comptes bancaires sélectionnés pour ce mois.

Le graphique est produit à partir de la réponse de l'endpoint [Banking transactions](/banking-api#/schemas/banking-transactions).

![Un graphique à barres montrant les entrées vs sorties basé sur les critères de sélection](/img/old/2a880ed-Inflows_1.png)

### Tableau des transactions

Le tableau des transactions s'affiche sous le graphique _Inflows vs outflows_ et contient toutes les transactions pour les comptes bancaires sélectionnés, pour les dates sélectionnées. En cliquant sur l'en-tête de la colonne _Date_, les transactions sont triées par ordre croissant, décroissant ou non trié.

![Un extrait d'un tableau de transactions pour un compte bancaire sélectionné pour des dates sélectionnées](/img/old/969bb45-Transaction_table_1.png)

#### Exclure des transactions

:::info Non disponible pour Plaid
La fonctionnalité de filtrage et d'exclusion est actuellement non disponible pour les entreprises connectées à Plaid.
:::

Vous pouvez taper dans une barre de recherche située au-dessus du tableau pour trouver des correspondances dans la colonne _Description_. Au fur et à mesure que vous tapez, le tableau se rafraîchit avec toutes les transactions qui correspondent au terme de recherche. Dans la barre de recherche, à droite, le nombre de transactions correspondantes s'affiche en gris et le bouton _Exclude all_ devient actif.

![Une capture d'écran démontrant la fonctionnalité de la barre de recherche utilisant le mot « payment » comme exemple et montrant les résultats](/img/old/7142a41-Transaction_table_2.png)

En cliquant sur le bouton _Exclude all_, les résultats filtrés sont retirés du tableau des transactions. Le tableau des transactions revient alors à l'affichage des transactions restantes pour les dates sélectionnées et le graphique est mis à jour. La boîte _Excluded terms_ en haut à droite du tableau affiche tous les termes exclus dans un menu déroulant.

Les termes exclus sont stockés localement dans le navigateur et continueront d'être exclus chaque fois que vous accédez à _Inflows vs outflows_.

![Une capture d'écran montrant le bouton de termes exclus avec « direct cost » et « payment-customer » comme exemples de termes exclus](/img/old/b2e5be6-Transaction_table_3.png)

Pour examiner un terme exclu existant, cliquer sur le terme lui-même dans le menu déroulant _Excluded terms_ l'ajoute à la barre de recherche. Les transactions liées au terme sont affichées en gris dans le tableau. Pour réintégrer une transaction dans le tableau des transactions, cliquez sur le _X_ à côté du terme exclu. Le graphique et le tableau des transactions sont mis à jour pour inclure le terme.

## Marketing

La page Marketing affiche des graphiques pour les métriques **Marketing to revenue** et **Marketing to expense**, et un tableau des pourcentages et des entrées de métriques. Ces métriques marketing sont calculées à partir des données comptables. Elles sont générées à partir des données disponibles dans l'état des résultats du client (voir [formules](/lending/metrics/accounting/api-financial-metrics#marketing-metrics-formulas)).

### Panneau de sélection

![Une capture d'écran montrant le panneau de sélection marketing](/img/old/27785f4-MarketingSelectionPanel2.png)

La bannière fermable affichée en haut de la page _Marketing_ vous invite à notre <a className="external" href="https://portal.productboard.com/codat/7-product-roadmap/c/459-marketing-metrics" target="_blank">feuille de route produit</a> pour nous faire savoir quelles plateformes et informations vous intéresseraient.

**Devise** : Cela reflète la devise dans le logiciel de comptabilité.

**Début de période** : Les périodes sont définies en mois. Les états sont rétrospectifs, donc c'est la période à partir de laquelle vous voulez commencer à regarder en arrière. Le système préremplira le dernier mois complet disponible dans les données de l'entreprise. Si vous sélectionnez un mois hors de la plage, le système vous notifiera du dernier mois disponible pour l'entreprise.

**Durée de la période** : Spécifiée en mois.

**Périodes à comparer** : Le nombre de périodes pour lesquelles les données calculées sont retournées et comparées.

Sélectionnez le **Period start**, la **Period length** et les **Periods to compare** pour obtenir les vues que vous souhaitez. Par exemple :

**Si vous voulez une vue mensuelle des 12 derniers mois**
Period start = dernier mois (prérempli pour vous)
Period length = 1 (mois)
Periods to compare = 12

**Si vous voulez voir les 4 derniers trimestres complets**
Period start = choisissez le dernier mois du dernier trimestre que vous voulez choisir, par exemple juin 2022
Period length = 3
Periods to compare = 4

### Données et graphique marketing

![Une image montrant les graphiques marketing et un extrait d'un tableau de données marketing basé sur les critères de sélection](/img/old/288edbe-Mark_1.png)

L'endpoint [Marketing Metrics](/lending/metrics/accounting/api-marketing-metrics) est utilisé pour générer les graphiques et métriques affichés sur cette page. Les flèches vertes et rouges à côté des chiffres indiquent respectivement une augmentation ou une diminution par rapport à la période précédente.

Voir la [référence API](/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-accountingMetrics-marketing).

Les lignes peuvent être développées ou réduites pour montrer plus ou moins d'informations. En survolant le graphique, une info-bulle s'affiche contenant des informations sur les points tracés pour cette date.

## Rapports

Un bouton **Reports** est situé dans le coin supérieur droit de chaque page Lending. Il vous amène à la page **Reports** où vous pouvez générer et télécharger divers rapports au [format Excel](/lending/excel/overview).

![Une capture d'écran de la page des rapports montrant la ligne Audit Report avec une sous-ligne montrant un rapport qui a été généré](/img/old/a3d1d09-ReportsPage1.png)

Le **Report name** fournit le nom du rapport et une description informative des objectifs du rapport.

Cliquez sur le bouton **Generate report** pour produire un nouveau rapport. Le champ **Last generated** sera mis à jour à la date et l'heure auxquelles vous avez généré le rapport. Il conservera cet horodatage jusqu'à la prochaine fois que vous générerez le rapport.

Lorsqu'un rapport a été généré avec succès, le nom du rapport (qui est aussi le nom du fichier), avec la taille du fichier et le dernier horodatage sera disponible au téléchargement. En cliquant sur le bouton **Download**, le rapport Excel est enregistré sur votre machine locale.

### Types de rapports

- [Audit Report](/lending/excel/audit-report) : Identifie les indicateurs de comptes inexacts ou obsolètes, vous aidant à décider avec confiance
- [Enhanced Cash Flow Report](/lending/excel/enhanced-cash-flow-report) : Contient des données de flux de trésorerie améliorées
- [Enhanced Financials Report](/lending/excel/enhanced-financials-report) : Contient des données améliorées de résultats et de bilan, vous permettant de calculer des métriques clés
- [Enhanced Invoices Report](/lending/excel/enhanced-invoices-report) : Contient des factures améliorées qui sont liées aux paiements
