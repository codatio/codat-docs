---
title: "FAQ sur Expenses"
sidebar_label: Aide sur la solution
description: "Questions fréquemment posées sur la solution Expenses de Codat"
displayed_sidebar: expenses
---

import Questions, { Question } from "@components/Questions";

<Questions>
	<Question
		question="Où puis-je voir une feuille de route pour l'intégration et la prise en charge des fonctionnalités pour Expenses ?"
		answer={`
Codat ne publie actuellement pas de feuille de route publique pour les solutions. Si vous souhaitez en savoir plus sur les prochaines versions de solutions, parlez à votre contact Codat.
		`}
	/>
	<Question
		question="Comment puis-je migrer notre intégration interne vers Codat ?"
		answer={`
Notre <a href="https://docs.codat.io/get-started/migration">processus de migration de jetons</a> vous permet de migrer de manière transparente les connexions de vos clients sans qu'ils aient besoin de se reconnecter. Nous offrons des migrations en libre-service et gérées, vous pouvez donc choisir l'option qui convient le mieux à votre cas d'utilisation.
		`}
	/>
	<Question
		question="Pourquoi devrais-je migrer nos intégrations comptables existantes vers Expenses ?"
		answer={`
Déplacer vos intégrations existantes vers Expenses vous permet de profiter des avantages suivants :

<ol>

<li>
  <b>Options de mappage à jour</b>
</li>

<p>
  Chaque entreprise a sa propre préférence pour représenter une dépense individuelle dans
  son logiciel de comptabilité. Avec Codat, vous pouvez récupérer le mappage de compte et
  configurer des notifications webhook pour vous informer lorsque votre client crée un nouveau
  compte de dépense ou une catégorie de suivi. Cela maintient la liste des catégories
  de suivi, des comptes et des taux de taxe utilisés pour mapper la dépense à jour.
</p>

<li>
  <b>Standardisation des données de dépenses</b>
</li>

<p>
  Expenses standardise les données de transaction en utilisant un modèle opiniâtre basé
  sur les retours de nos clients et l'expertise de l'industrie. Cela signifie que vous
  n'avez pas besoin de prendre de décisions sur la façon de gérer les différences de validation entre
  les logiciels de comptabilité. Envoyez simplement les transactions en fonction de ce qu'elles représentent et
  laissez Codat gérer le mappage vers leur meilleure représentation dans le logiciel
  de comptabilité.
</p>

<li>
  <b>Prise en charge de plusieurs transactions</b>
</li>

<p>
  Expenses gère l'écriture de plusieurs transactions dans un tableau pour rendre vos
  interactions plus efficaces. Vous pouvez récupérer le statut de ces transactions
  depuis le endpoint{" "}
  <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-sync-transaction">
    Get sync transaction
  </a>{" "}.
</p>

<li>
  <b>Expérience développeur améliorée</b>
</li>

<p>
  Notre documentation détaillée destinée aux développeurs et une variété de{" "}
  <a href="/get-started/libraries">bibliothèques clientes</a> dans plusieurs langages
  signifient que vous pouvez être opérationnel avec Expenses rapidement.
</p>

<li>
  <b>Proximité avec la gamme de solutions Codat</b>
</li>

<p>
  Vous pouvez utiliser Expenses parallèlement à toutes les solutions Codat. Par exemple, si vous
  émettez des cartes de crédit, la solution{" "}
  <a href="https://docs.codat.io/lending/overview" target="_blank">
    Lending
  </a>{" "}
  de Codat vous permettrait de déterminer le risque associé à l'entreprise
  qui a le même <code>companyId</code> et la même clé API.
</p>

<p>
  De même, vous pouvez utiliser notre type de données <code>billPayments</code> pour récupérer une
  liste de factures du logiciel de comptabilité de votre client et leur permettre de les payer
  et de rapprocher leurs paiements.
</p>

</ol>
		`}
	/>
	<Question
		question="Que pouvons-nous réutiliser de notre build Codat existant pour Expenses ?"
		answer={`
<p>Vous pouvez réutiliser le plan comptable, les catégories de suivi et les paramètres de taux de taxe. Cependant, nous recommandons d'utiliser le endpoint <a href="https://docs.codat.io/sync-for-expenses-api#/operations/get-mapping-options">Mapping options</a> pour les dépenses en raison de la prise en charge du type de transaction.</p>
<p>Les parcours d'authentification, de création d'entreprise et de liaison de connexion peuvent être réutilisés entre les builds. C'est parce que les entreprises peuvent utiliser le même Id entre les solutions Codat.</p>
		`}
	/>
	<Question
		question="Comment puis-je reconnecter une entreprise ?"
		answer={`
Si un utilisateur se déconnecte, vous pouvez utiliser un <a href="https://docs.codat.io/using-the-api/webhooks/event-types">webhook</a> et rediriger votre utilisateur vers le <code>linkUrl</code> de la connexion comptable pour se réauthentifier. Si une entreprise change de logiciel de comptabilité, il est préférable de supprimer complètement la connexion comptable et d'en créer une nouvelle.
		`}
	/>
	<Question
		question="Où puis-je trouver les fichiers de logo pour les logiciels de comptabilité pris en charge par Expenses ?"
		answer={`
Si vous souhaitez utiliser les logos des logiciels de comptabilité dans votre interface utilisateur, vous pouvez les obtenir via notre endpoint <a href="https://docs.codat.io/platform-api#/operations/get-integrations-branding">Get branding</a>.
		`}
	/>
	<Question
		question="Puis-je utiliser le compte Sandbox pour tester une synchronisation lors de l'implémentation d'Expenses ?"
		answer={`
<p>Expenses ne prend pas en charge Sandbox comme plateforme de destination pour synchroniser les transactions car il a été conçu spécifiquement pour lire, et non écrire, des données. Nous recommandons de créer un compte développeur gratuit QuickBooks ou Xero pour tester les synchronisations, ce qui vous donnera également accès au sandbox.</p>
<p>Pour plus d'informations sur la façon de configurer votre intégration de logiciel de comptabilité, consultez la <a href="https://docs.codat.io/integrations/accounting/overview">documentation spécifique à l'intégration</a>.</p>
		`}
	/>
	<Question
		question="Comment puis-je resynchroniser une transaction échouée lorsque je résous le problème avec la transaction ?"
		answer={`
<p>Une fois que vous résolvez le problème avec la transaction, vous pouvez créer un nouveau ensemble de données pour cet Id de transaction. Vous ne pouvez pas resynchroniser la transaction avec le même ensemble de données car Codat vérifie les métadonnées de transaction pour éviter les doublons. Si un Id de transaction a un statut de terminé, il n'est pas resynchronisé.</p>
<p>L'erreur suivante apparaîtra si une transaction a été précédemment synchronisée : <code>error: One or more transactions have previously been processed: {Transaction Id}</code>.</p>
		`}
	/>
	<Question
		question="Comment puis-je détecter si un compte de dépense a été désactivé ?"
		answer={`
Vous pouvez créer un consommateur de webhook dans le portail Codat pour vous informer lorsque le plan comptable a été modifié. En interrogeant le type de données Plan comptable et en utilisant le drapeau <code>isDeleted</code>, vous pouvez identifier quels comptes ont été supprimés avant qu'une synchronisation ne se produise. Pour plus d'informations, veuillez vous référer à la <a href="https://docs.codat.io/using-the-api/webhooks/overview">documentation</a> sur la création et la mise à jour des consommateurs de webhook.
		`}
	/>
	<Question
		question="Puis-je mettre à jour une pièce jointe lorsque j'ai déjà synchronisé la transaction de dépense ?"
		answer={`
Codat écrit les pièces jointes de manière synchrone aux transactions de dépenses. Pour mettre à jour l'un de ces documents, vous devez supprimer la pièce jointe directement du logiciel de comptabilité. Ensuite, vous devez téléverser le document correct soit directement dans le logiciel de comptabilité, soit en utilisant Expenses. Lorsque vous utilisez Expenses, vous bénéficiez de sa prise en charge de plusieurs pièces jointes.
		`}
	/>
	<Question
		question="Comment gérez-vous les transactions en devises étrangères ?"
		answer={`
Expenses valide chaque transaction de dépense impliquant des devises étrangères. Nous nous assurons que la combinaison des devises participantes sera acceptée par le logiciel de comptabilité cible comme une dépense valide. Vous pouvez en savoir plus sur les <a href="https://docs.codat.io/expenses/fx-management">dépenses en devises étrangères</a> et la prise en charge des différents types de transactions par les plateformes.
		`}
	/>
	<Question
		question="Quelle est la différence entre effectiveTaxRate et totalTaxRate ?"
		answer={`
<p>Si une transaction a plusieurs composants fiscaux, chaque composant peut être calculé séparément sur le montant original, puis additionné.</p>
<p>Alternativement, la taxe primaire peut être calculée sur le coût de l'article, et un autre composant fiscal est ajouté en plus de ce montant. C'est ce qu'on appelle la composition. Dans ce cas, le taux de taxe effectif est le taux qui résulte en le montant total de taxe avec composition lorsqu'il est appliqué au montant original.</p>
<p>Le <code>totalTaxRate</code> est la somme totale, non composée, des composants d'un taux de taxe. Vous pouvez en savoir plus à ce sujet dans notre <a href="https://docs.codat.io/accounting-api#/schemas/TaxRate#tax-components">documentation API couvrant les taux de taxe</a>.</p>
		`}
	/>
	<Question
		question="L'Id de transaction est-il unique pour chaque entreprise connectée ?"
		answer={`
Chaque Id de transaction est unique pour l'entreprise d'un client, mais ils ne sont pas uniques entre les connexions. Dans Codat, il n'est possible d'avoir qu'une seule connexion comptable par entreprise. Si une entreprise souhaite changer de logiciel de comptabilité ou souhaite se lier à une entité différente, nous recommandons de créer une nouvelle entreprise.
		`}
	/>
</Questions>

## À lire ensuite

- Essayez Expenses dans notre [référence API](/sync-for-expenses-api#/) interactive
