---
title: "Comment fonctionne la prise de décision"
description: "Page de référence avec des détails sur notre logique de décision, la récupération des données et la prise de décision"
sidebar_label: "Logique de décision de l'application"
---

### 🚀 Dans cette section, vous allez...

- Comprendre comment nous récupérons les données requises,
- Examiner comment nous évaluons le risque associé aux clients et aux factures,
- Voir comment l'application prend une décision basée sur ces données.

### Récupérer les factures impayées et les données associées

Une fois que l'application est notifiée par le webhook que les synchronisations des factures et des clients sont terminées, elle récupère une liste filtrée de factures contre lesquelles nous pourrions potentiellement prêter.

Dans notre démonstration, nous nous concentrons sur les factures impayées et partiellement payées évaluées entre 50 et 1000 USD, en utilisant le paramètre `query` sur notre endpoint [List invoices](/lending-api#/operations/list-accounting-invoices) :

```
query = {status=submitted||status=partiallyPaid}&&currency=USD&&{amountDue>50&&amountDue<=1000}
```

À partir de cet ensemble de données, nous récupérons une liste d'identifiants clients uniques (`customerRef.id`) pour les factures impayées, puis les détails des clients associés en utilisant l'endpoint [Get customer](/lending-api#/operations/get-accounting-customer).

Enfin, nous récupérons toutes les factures payées pour chacun de ces clients afin d'évaluer leur comportement de paiement antérieur. Après cela, nous sommes prêts à effectuer l'évaluation des risques.

### Évaluer le risque pour chaque client

Pour effectuer l'évaluation des risques des clients, nous calculons la mesure de **concentration client**. Il s'agit du pourcentage des revenus du demandeur qui provient d'un seul client.

Le seuil de concentration est fixé à 5% dans le fichier `appSettings.json`, que vous pouvez modifier ultérieurement si vous souhaitez voir l'application exécuter un scénario différent.

:::info Concentration client

Concentration = Solde client / Solde total en souffrance pour tous les clients, ou, en termes Codat, c'est la somme de tous les `amountDue` des factures impayées pour un client divisée par la somme de tous les `amountDue` des factures impayées.

:::

Dans notre démonstration, nous excluons également tous les clients qui correspondent aux critères ci-dessous, ce qui signifie que les factures qui leur sont liées ne seront pas éligibles pour le prêt :

- La concentration est supérieure au seuil de 5%,
- Le `country` du client n'est pas `US`, excluant ainsi les clients commerciaux étrangers,
- Le `registrationNo` du client est nul, excluant ainsi les travailleurs autonomes, et
- Le nombre de factures payées est inférieur à 2, réduisant ainsi le risque en fonction du comportement passé.

### Évaluer le risque pour chaque facture

Pour chaque facture restante, nous calculons ce qui suit :

- **Conditions**, exprimées comme (`dueDate` — `issueDate`),
- **Jours restants pour payer**, exprimés comme (`dueDate` - date du jour),
- **Ratio de temps restant pour payer**, exprimé comme (Jours restants pour payer / Conditions).

Nous éliminons ensuite toutes les factures où la valeur `Jours restants pour payer` est inférieure à 14 jours. Pour les factures restantes, nous calculons un **taux de frais** basé sur le ratio de temps restant pour payer.

:::info Taux de frais

Taux de frais = 5 - (4 \* Ratio), où Ratio est le taux de temps restant pour payer entre 1% et 5%, arrondi à 1 décimale.

:::

### Retourner un tableau de décisions

Enfin, nous sommes prêts à retourner un tableau de décisions au demandeur. Il leur montre contre quelles factures nous acceptons de prêter, et selon quelles conditions. Le tableau peut être obtenu en appelant l'endpoint `GET applications/{applicationId}`.

```json title="Exemple de réponse de décision"
  {
    "status": "Complete" // La réponse affiche un statut de demande "Complete" lorsque l'évaluation est terminée
    "decisions": [ // Un tableau de décisions par identifiant de facture trouvé éligible pour le prêt
      {
        "invoiceId": "string", // Identifiant interne Codat associé aux factures récupérées
        "invoiceNo": "string", // Numéro d'identification de la facture dans le système comptable du demandeur
        "amountDue": decimal,  // Montant à payer sur la facture émise au client
        "offerAmount": decimal, // Montant que l'application offre de prêter, calculé comme 90% de amountDue
        "rate": decimal, // Taux avec lequel l'application offre de prêter, basé sur le risque de chaque facture
      }
                 ]
  }
```

### Accéder à des ressources supplémentaires

🗝️ Vous voudrez peut-être améliorer ce guide de travail simple avec quelques éléments d'interface utilisateur - pourquoi ne pas utiliser [Link](/auth-flow/authorize-embedded-link) pour inclure de manière transparente notre parcours d'autorisation dans votre application?

🛍️ Allez plus loin avec votre solution de prêt numérique en utilisant la fonctionnalité d'enrichissement [Factures rapprochées](/lending/features/accounts-receivable-overview#reconciled-invoices) de Lending.

📈 Si vous souhaitez comprendre le potentiel de croissance des services de financement de factures, vous pouvez consulter [le blog de Credit Connect](https://www.credit-connect.co.uk/news/demand-for-invoice-finance-predicted-to-grow/).

💸 Consultez notre [étude de cas Wayflyer](https://www.codat.io/case-studies/wayflyer/) pour voir comment Codat soutient les prêteurs numériques dans la fourniture de décisions de crédit plus rapides et plus intelligentes et l'offre de services de prêt plus personnalisés.

### Récapitulatif

Dans cette section de référence, vous avez appris et compris en détail les vérifications que nous avons effectuées au cours de notre processus de décision de financement de factures, comment nous avons récupéré et filtré les données, et comment tout cela a influencé la décision sur le prêt effectuée automatiquement.

Ensuite, vous pouvez en savoir plus sur [Lending](/lending/overview), ou [explorer d'autres cas d'utilisation](/usecases/overview).
