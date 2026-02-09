---
title: "Comment fonctionne la prise de décision"
description: "Page de référence avec des détails sur notre logique de prise de décision, la récupération des données et l'arrivée à une décision"
sidebar_label: "Logique de décision de l'application"
---

### 🚀 Dans cette section, vous allez...

- Examiner la logique de prise de décision de l'application,
- Comprendre comment nous récupérons les données requises,
- Voir comment l'application prend une décision basée sur ces données.

### Examiner la logique de prise de décision de l'application

Chaque prêteur a généralement son propre ensemble de points de données qu'il utilise pour examiner une demande.

Le modèle de qualification de prêt que nous utilisons comme exemple dans le service [LoanUnderwriter](https://github.com/codatio/demo-loan-qualification/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) est un modèle basé sur des règles qui exige que certains seuils soient atteints pour la **marge bénéficiaire brute**, le **revenu** et le **ratio d'endettement**. Les valeurs seuils pour ces points de données sont maintenues dans `appsettings.json`.

Il nécessite également des détails de demande validés et les comptes entièrement catégorisés de l'entreprise.

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<Tabs>
<TabItem value="gpm" label="Gross profit margin">

La **marge bénéficiaire brute** utilise les valeurs `Income.Operating` et `Expense.CostOfSales` retournées par l'endpoint [`profitAndLoss`](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) de Lending. Elle est calculée en soustrayant le coût des ventes des ventes nettes et en divisant le bénéfice brut résultant par les ventes nettes. Elle est ensuite exprimée sous forme de ratio et indique la rentabilité d'une entreprise.

Son seuil est maintenu comme `MinGrossProfitMargin` dans `appsettings.json`. Dans l'application de démonstration, la valeur est fixée à 0,4.

</TabItem>

<TabItem value="rev" label="Revenue">

Le **revenu** repose sur l'endpoint [`profitAndLoss`](https://docs.codat.io/assess-api#/operations/get-enhanced-profit-and-loss) et la valeur `Income.Operating` qu'il retourne, ainsi que les valeurs `loanAmount` et `loanTerm` fournies dans le formulaire de demande. Il utilise la valeur du revenu d'exploitation pour déterminer si le revenu mensuel de l'entreprise couvre le remboursement mensuel proposé à un seuil suffisant. Il peut servir d'indicateur utile de la croissance globale de l'entreprise.

Son seuil est maintenu comme `RevenueThreshold` dans `appsettings.json`. Dans l'application de démonstration, la valeur est fixée à 0,3.

</TabItem>

<TabItem value="grat" label="Gearing ratio">

Le ratio d'endettement utilisé dans le modèle d'exemple est le **ratio de dette**, calculé en divisant la dette totale par l'actif total. Il utilise l'endpoint [`balanceSheet`](https://docs.codat.io/assess-api#/operations/get-enhanced-balance-sheet) et ses valeurs `Asset` et `Liability.NonCurrent.LoansPayable`. Avoir trop de dette peut indiquer un risque financier plus élevé associé à l'entreprise.

Son seuil est maintenu comme `MaxGearingRatio` dans `appsettings.json`. Dans l'application de démonstration, la valeur est fixée à 0,5.

</TabItem>

</Tabs>

### Comprendre comment nous générons une décision automatique

Une fois que l'application de démonstration récupère les données, elle utilise les résultats pour calculer les points de données que nous utilisons dans notre modèle de qualification de prêt : la marge bénéficiaire brute, le revenu et le ratio d'endettement. Dans l'industrie de la qualification de prêt, il existe d'autres modèles et points de données qui peuvent être utilisés pour prendre une décision. Le choix dépend des besoins de votre entreprise.

Le service [LoanUnderwriter](https://github.com/codatio/demo-loan-qualification/blob/main/Codat.Demos.Underwriting.Api/Services/LoanUnderwriter.cs) vérifie ensuite comment ces valeurs se comparent aux seuils définis dans l'application :

1. La marge bénéficiaire brute doit être supérieure au seuil `MinGrossProfitMargin` fixé à 0,4,
2. Le revenu doit dépasser le `RevenueThreshold` fixé à 0,3, et
3. Le ratio d'endettement doit être inférieur au seuil `MaxGearingRatio` fixé à 0,5.

Ce n'est que si tous les seuils sont atteints ou dépassés par le demandeur que l'application met automatiquement à jour la demande de prêt avec un statut _Accepted_. Sinon, la demande est mise à jour avec un statut _Rejected_. L'application gère également un scénario d'erreurs programmatiques signifiant qu'une décision n'a pas pu être prise avec un statut _UnderwritingFailure_.

### Accéder à des ressources supplémentaires

🗝️ Vous pourriez vouloir enrichir ce guide de travail simple avec quelques éléments d'interface utilisateur - pourquoi ne pas utiliser [Link](https://docs.codat.io/auth-flow/authorize-embedded-link) pour intégrer de manière transparente notre parcours d'autorisation dans votre application?

📊 Si vous êtes intéressé par les modèles de qualification de prêt utilisés par les prêteurs dans l'industrie, vous pouvez lire le [blogue de Bigfoot Capital](https://www.bigfootcap.com/revenue-based-financing/) sur le financement basé sur les revenus ou l'[article de Workweek](https://workweek.com/2023/03/02/unlocking-lending-innovation) sur le déverrouillage de l'innovation en qualification de prêt.

🧠 Voyez ce que [Codat recommande](https://www.codat.io/blog/how-to-underwrite-eCommerce-merchants-effectively/) pour construire votre processus de qualification de prêt efficacement.

🗣️ Quelque chose n'est pas clair dans ce guide? Vous avez des commentaires? Nous travaillons sur une foule de nouveaux contenus pour vous, alors [faites-le nous savoir](https://github.com/codatio/codat-docs/issues/new?assignees=&labels=&projects=&template=issue-with-codat-docs.md&title=).

### Récapitulatif

Dans cette section de référence, vous avez appris et compris en détail les points de données que nous avons choisis pour notre modèle de qualification de prêt, comment nous avons récupéré les données utilisées dans le calcul de ces points de données, et comment tout cela a influencé la décision sur le prêt prise automatiquement.

Ensuite, vous pouvez en apprendre davantage sur [Lending](/lending/overview), ou explorer d'autres cas d'utilisation.
