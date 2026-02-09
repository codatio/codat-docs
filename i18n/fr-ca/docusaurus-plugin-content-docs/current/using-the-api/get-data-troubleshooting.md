---
title: "Résoudre les problèmes de lecture de données"
sidebar_label: "Dépannage"
description: "Apprenez à résoudre les problèmes qui peuvent survenir lors de la lecture des données"
---

Pour consulter les instructions sur le dépannage efficace et la résolution des problèmes, naviguez vers le type de problème que vous avez rencontré.

### warning.validation<a name="warning.validation"></a>

**Détails :** Un avertissement de validation a été signalé lors de la lecture des données pour un type de données donné.

**Cause :** Cela se produit lorsque les données récupérées ne répondent pas aux critères de validation attendus.

**Solution :**
Examinez les journaux de validation pour déterminer si les critères de validation s'appliquent à votre cas d'utilisation :

- Si les critères ne s'appliquent pas, vous pouvez ignorer l'avertissement en toute sécurité.
- S'ils s'appliquent, mettez à jour votre logique applicative pour gérer cette exception en conséquence.

:::tip Couverture de la validation

Notre logique de validation évolue continuellement à mesure que nous améliorons la plateforme, introduisons de nouveaux types de données et affinons les règles en fonction de l'utilisation réelle. Certains de nos avertissements sont dépendants du contexte, déclenchés par des modèles de données spécifiques, des paramètres d'intégration ou des normes tierces en évolution.

Par conséquent, il n'est pas possible de fournir une liste complète des avertissements de validation potentiels. Pour les informations les plus à jour, utilisez notre API pour recevoir des retours de validation en temps réel.

:::
