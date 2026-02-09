---
title: "QuickBooks Online"
description: "Découvrez notre intégration QuickBooks Online."
---

Vous pouvez synchroniser les données comptables avec <a className="external" href="https://quickbooks.intuit.com/uk/online/" target="_blank">QuickBooks Online</a> en utilisant notre intégration QuickBooks Online.

Pour plus de détails sur les types de données et les opérations pris en charge, consultez [Référence de l'intégration QuickBooks Online](/integrations/accounting/quickbooksonline/quickbooks-online-integration-reference).

:::tip Données supplémentaires
Cette intégration prend en charge la possibilité d'inclure des champs supplémentaires dans nos types de données standard lors de la récupération, de la création ou de la mise à jour d'enregistrements. En savoir plus sur les [données supplémentaires](/using-the-api/supplemental-data/overview) et comment vous pouvez les lire pour cette intégration.
:::

## Configurer l'intégration

Consultez [Configurer l'intégration QuickBooks Online](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup) pour apprendre comment configurer et activer l'intégration.

## Programme de partenaires d'applications Intuit

Le [Programme de partenaires d'applications](https://blogs.intuit.com/2025/05/15/introducing-the-intuit-app-partner-program/) d'Intuit prend en charge les fournisseurs d'applications construites sur la plateforme Intuit avec des normes de sécurité plus élevées, un accès anticipé aux nouvelles fonctionnalités et une synchronisation des données plus fiable.

Si vous prévoyez de publier une application dans l'écosystème QuickBooks, vous devez vous inscrire au programme de partenaires et remplir le questionnaire d'évaluation d'application. Nous avons créé un [guide du questionnaire d'évaluation d'application](/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire) pour vous aider à répondre à ses questions.

#### Modèle d'utilisation à niveaux

Le Programme de partenaires d'applications Intuit fonctionne selon un modèle d'utilisation à niveaux. Dans ce modèle, Intuit classe les appels API en deux catégories :

- Appels API Core - tâches de routine gratuites et illimitées, telles que la création ou la mise à jour de factures, de comptes et de clients
- Appels API CorePlus - tâches gourmandes en données, telles que l'exécution de rapports ou la récupération de données historiques profondes

L'article [Classification des API pour le Programme de partenaires d'applications Intuit](https://help.developer.intuit.com/s/article/API-classification-for-the-Intuit-App-Partner-Program) explique comment les appels API sont classés en Core et CorePlus.

:::caution Suivez l'utilisation des appels API pour éviter des frais supplémentaires

Chaque niveau se voit attribuer une limite mensuelle d'appels API CorePlus, et dépasser cette limite peut entraîner des frais supplémentaires. Suivez l'utilisation des appels API de votre application pour éviter cela.

:::

#### Suivre l'utilisation

Pour éviter des coûts inattendus, suivez l'utilisation des appels API de votre application en suivant ces étapes :

1. Connectez-vous au [Portail des développeurs Intuit](https://developer.intuit.com/dashboard?tab=apps).
2. Accédez au _Tableau de bord de l'application_ et sélectionnez l'application que vous souhaitez examiner.
3. Dans le menu de gauche, cliquez sur **Analytics**.
4. Dans _Analytics_, basculez l'environnement vers **Production**. Vous verrez un graphique détaillant votre utilisation Core et CorePlus.

#### Optimiser l'utilisation

L'optimisation de l'utilisation de vos appels API peut réduire les frais globaux dus à Intuit. Nous recommandons ce qui suit :

- Limitez le nombre de demandes d'actualisation de données intégrées dans votre produit.
- Ajustez la fréquence de synchronisation des types de données à nos niveaux recommandés.

Si vous avez des questions sur l'optimisation, contactez votre gestionnaire de compte.

## Informations supplémentaires

- [FAQ QuickBooks Online](/integrations/accounting/quickbooksonline/faq-quickbooks-online)
- [Référence de l'intégration QuickBooks Online](/integrations/accounting/quickbooksonline/quickbooks-online-integration-reference)
- [Programme de partenaires d'applications Intuit](https://blogs.intuit.com/2025/05/15/introducing-the-intuit-app-partner-program/)
- [Guide du questionnaire d'évaluation d'application](/integrations/accounting/quickbooksonline/qbo-app-assessment-questionnaire)
