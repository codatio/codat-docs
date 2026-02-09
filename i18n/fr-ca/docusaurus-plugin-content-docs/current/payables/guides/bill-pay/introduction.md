---
title: "Guide de construction de Bill Pay"
description: "Utilisez ce guide et l'application de démonstration qui l'accompagne pour simplifier les processus de comptes fournisseurs de vos clients"
---

:::tip À qui s'adresse ce guide?

Ce guide est destiné aux développeurs qui construisent une solution de paiement de factures ou d'autres applications utilisant les données des comptes fournisseurs. L'application démontre un exemple de solution que vous pourriez construire.

:::

### Résumé

Notre _application de démonstration de paiement de factures_ présente un flux de travail simple d'automatisation des CF (comptes fournisseurs), construit à l'aide des points de terminaison standards de [Bill Pay](/payables/overview). Elle vous aide à comprendre les fonctionnalités de base d'une solution de paiement de factures et comment vous pouvez construire vos propres solutions pour simplifier et automatiser les comptes fournisseurs (CF).

L'application de démonstration est construite avec Next.js et React. Vous pouvez utiliser une version hébergée ou exécuter le code localement. Le code est stocké dans un [dépôt GitHub public](https://github.com/codatio/demo-bill-pay). [Hosted Link](/auth-flow/authorize-hosted-link) est utilisé pour le flux d'autorisation.

Temps estimé pour compléter :

- 5&ndash;10 minutes pour essayer la version hébergée de l'application
- 20&ndash;30 minutes pour compléter le guide complet et exécuter l'application localement

### Ce dont vous avez besoin

Pour utiliser ce guide, vous avez besoin d'un compte [QuickBooks Online (QBO)](https://quickbooks.intuit.com/) gratuit. Vous devrez entrer les identifiants de votre compte lors de la connexion de l'application de démonstration à QuickBooks Online.

Votre compte inclura une entreprise sandbox américaine contenant des données exemples. Vous pouvez ouvrir cette entreprise et examiner certaines factures, paiements de factures et autres données sandbox pertinentes.

### Objectifs du guide

Ce guide vise à vous aider à implémenter votre propre solution de paiement de factures en utilisant l'API de Codat. Il vous guide à travers [l'utilisation de la version hébergée de l'application de démonstration](/payables/guides/bill-pay/use-bill-pay-demo-app) avec des données provenant d'une entreprise sandbox QuickBooks Online.

Après avoir utilisé la version hébergée, vous pouvez cloner le dépôt et [exécuter l'application de démonstration sur votre machine locale](/payables/guides/bill-pay/run-demo-app-locally). Enfin, vous pouvez apprendre [comment fonctionne l'application de démonstration](/payables/guides/bill-pay/how-the-demo-app-works).

### À propos de l'application de démonstration

<p>
  <a href="https://github.com/codatio/demo-bill-pay" target="_blank">
    Cliquez ici
  </a>{" "}
  pour consulter le code de l'application de démonstration. Explorez le code au
  fur et à mesure afin de comprendre l'approche que nous avons adoptée dans
  l'application de démonstration.
</p>

L'application illustre trois tâches courantes dans un flux de travail typique de paiement de factures :

1. Se connecter au logiciel comptable de votre client.

2. Visualiser les factures.

3. Payer les factures.

### Récapitulatif

Vous avez compris les fonctionnalités de l'application de démonstration de paiement de factures et ce dont vous aurez besoin pour commencer.

---

### À lire ensuite

- [Utiliser l'application hébergée](/payables/guides/bill-pay/use-bill-pay-demo-app) pour découvrir le paiement de factures
