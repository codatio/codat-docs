---
title: "Xero | Dépenses"
draft: true
---

Introduction

Pour répondre aux exigences du programme Partenaire App Xero pour les services financiers et fournir un processus de rapprochement complet, l'approche d'intégration a deux volets - les transactions Xero et le rapprochement bancaire.

Transactions Xero

Pour compléter le rapprochement, les transactions bancaires doivent être rapprochées avec les transactions Xero.

Les transactions Xero incluent :

Factures et paiements - ventes payées ultérieurement

Factures fournisseurs et paiements de factures - achats dus ultérieurement

Transactions de dépense d'argent - achats quotidiens

Transaction de réception d'argent - ventes quotidiennes ou remboursements

Rapprochement bancaire

Comme décrit par Xero, le rapprochement bancaire est le processus pour confirmer que toutes les transactions dans vos comptes bancaires sont enregistrées dans vos registres comptables d'entreprise.

Cela se fait en faisant correspondre les lignes de relevé bancaire d'une banque ou d'une source similaire (gauche), avec les transactions Xero (droite).

![](/img/integrations/accounting/xero/xero-expenses-1.png)

Les lignes de relevé bancaire sont les transactions bancaires importées depuis votre compte bancaire via un flux bancaire ou elles sont importées manuellement. Lorsqu'elles sont dans votre banque en ligne, elles sont appelées transactions bancaires, puis lorsqu'elles sont importées dans Xero, nous les appelons lignes de relevé bancaire.

Les transactions sont créées dans Xero. Il peut s'agir de factures, de factures fournisseurs, de demandes de remboursement de frais ou de transactions en espèces.

0. Prérequis
   0.1 Comptes bancaires
   Créer un compte de transit

Créez un nouveau compte bancaire de transit pour représenter les fonds traités par le fournisseur de dépenses.

Type de compte :

Banque (via intégration bancaire)

Carte de crédit (nécessite un numéro de carte de crédit)

Autre (nécessite un numéro de compte)

Codat

Mode de données : Compte bancaire

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App).

0.2 Compte de dépenses

Pour enregistrer les dépenses et les frais, un compte de dépenses est requis. L'utilisateur doit pouvoir sélectionner un compte existant de son logiciel comptable OU en créer un nouveau.

Note : pour une gestion détaillée des dépenses, un utilisateur peut mapper des comptes par catégorie de dépenses, par exemple voyage, divertissement

Mapper un compte de dépenses existant

Obtenir la liste des comptes de dépenses (type : expense)

Afficher à l'utilisateur

L'utilisateur sélectionne un compte bancaire

Stocker l'accountId pour être utilisé dans les futures transactions

Codat

Modèle de données : comptes

GET/companies/{companyId}/data/accounts (lien)
0.3 Fournisseurs
Créer un fournisseur

Créez un fournisseur pour représenter le fournisseur de dépenses.

Codat

Modèle de données : Fournisseur

POST /companies/{companyId}/connections/{connectionId}/push/suppliers (lien)
0.4 Taux de taxe
Mapper les taux de taxe existants

Obtenir la liste des taux de taxe

Afficher à l'utilisateur

L'utilisateur sélectionne un taux de taxe

Stocker TaxRateRef pour être utilisé dans les futures transactions

Codat

Modèle de données : Taux de taxe

GET/companies/{companyId}/data/taxRates (lien)

Note : La plupart des plateformes prennent également en charge les taux de taxe NON ou null pour représenter les transactions exonérées.

1. Dépenses
   1.1 Dépense d'argent

![](/img/integrations/accounting/xero/xero-expenses-2.png)

Publiez une transaction « dépense d'argent » représentant les dépenses effectuées un jour particulier. Les éléments de ligne peuvent être agrégés selon les besoins.

Publier un Coût direct

Fournisseur : Fournisseur de dépenses

Compte de paiement : Compte bancaire de transit

Éléments de ligne :

Référence de compte : Compte de dépenses

TaxRef : Taux de taxe sélectionné

Catégories de suivi : Xero prend en charge les clients (bientôt disponible)

Codat

Modèle de données : coûts directs (documentation à venir)

POST /companies/{companyId}/connections/{connectionId}/push/directCosts(Lien)
1.2 Transactions bancaires

Publiez une ligne de relevé bancaire correspondante pour chaque dépense.

Publier une transaction bancaire

Vers : compte bancaire de transit

Bénéficiaire : Fournisseur de dépenses

Montant : montant de la dépense

Codat

Modèle de données : Transactions bancaires

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App)

2. Frais

Enregistrement des frais dans Xero en publiant une transaction « dépense d'argent » sur le compte bancaire de paiement avec les éléments de ligne enregistrés sur le compte de dépenses.

1.1 Dépense d'argent

Publiez une transaction « dépense d'argent » représentant les dépenses effectuées un jour particulier. Les éléments de ligne peuvent être agrégés selon les besoins.

Publier un Coût direct

Fournisseur : Fournisseur de dépenses

Compte de paiement : Compte bancaire de transit

Éléments de ligne :

Référence de compte : Compte de dépenses

TaxRef : Taux de taxe sélectionné

Codat

Modèle de données : coûts directs (documentation à venir)

POST /companies/{companyId}/connections/{connectionId}/push/directCosts(Lien)
2.2 Transactions bancaires

Publiez une ligne de relevé bancaire correspondante pour chaque frais encouru.

Publier une transaction bancaire

Vers : Compte bancaire de transit

Bénéficiaire : Fournisseur de dépenses

Montant : montant de la dépense

Codat

Modèle de données : Transactions bancaires

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App)

3. Paiements et Recharges

Publiez un transfert pour chaque paiement ou recharge effectué du fournisseur de dépenses au compte bancaire professionnel des entreprises. Ces transferts doivent s'aligner sur la fréquence des paiements ou des recharges.

3.1 Transfert
Publier un transfert

|        |         Paiement         |         Recharge         |
| :----: | :----------------------: | :----------------------: |
|  Depuis  |  Compte bancaire de transit  | Compte bancaire désigné |
|   Vers   | Compte bancaire désigné |  Compte bancaire de transit  |
| Montant |    Montant du paiement    |    Montant de la recharge    |

Codat

Modèle de données : transferts

POST /companies/{companyId}/connections/{connectionId}/push/transfers (lien)
3.2 Transactions bancaires

Publiez une ligne de relevé bancaire correspondante pour chaque transfert.

Note : Pour le compte bancaire professionnel, les relevés bancaires sont gérés directement dans Xero, donc aucune action requise.

Publier une transaction bancaire

Vers : Compte bancaire de transit

Bénéficiaire : Fournisseur de dépenses

Montant : Montant du paiement ou de la recharge

Codat

Modèle de données : Transactions bancaires

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App)

4. Remboursements
   2.2 Réception d'argent

![](/img/integrations/accounting/xero/xero-expenses-3.png)

Publier un revenu direct

De : Fournisseur de dépenses

Compte de paiement : Compte bancaire de transit

Éléments de ligne :

Référence de compte : compte de dépenses d'origine

Taux de taxe : Taux de taxe sélectionné

Codat (Bientôt disponible)
4.2 Transactions bancaires

Publiez une ligne de relevé bancaire correspondante pour chaque remboursement.

Publier une transaction bancaire

Vers : Compte bancaire de transit

Bénéficiaire : Fournisseur de paiement

Montant : montant du remboursement

Codat

Modèle de données : Transactions bancaires

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App)
