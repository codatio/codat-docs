---
title: "Xero | Prêt général"
draft: true
---

Contenu

Introduction

0. Prérequis

1. Décaissement du prêt

2. Remboursement

3. Publication des intérêts et/ou des frais

4. Rapprochement

Introduction
Prêt général

Dans le cadre de leur processus de Partenaire App, Xero exige que les prêteurs gèrent le processus de write back pour maintenir la position financière du client pendant le cycle de prêt.

Cette fonctionnalité doit être créée par le client dans son application, donnant à leurs clients l'option d'activer la publication continue des transactions pertinentes vers Xero.

Considérations clés :

Le flux de données est optionnel, il doit donc être accompagné de la possibilité d'activer/désactiver

Le client doit pouvoir configurer son mappage de compte et avoir la possibilité de le mettre à jour à tout moment.

0. Prérequis

L'utilisateur devra configurer son mappage avant toute opération d'écriture réussie. Nous recommandons une page de configuration à laquelle ils peuvent accéder à tout moment. Exemple :

![](/img/integrations/accounting/xero/xero-general-lending-1.PNG)

0.1 Compte bancaire
Créer un compte bancaire

Créez un nouveau compte bancaire dans Xero pour servir de conteneur pour les transactions du Prêteur.

Type de compte :

Banque (via intégration bancaire)

Carte de crédit (nécessite un numéro de carte de crédit)

Autre (nécessite un numéro de compte)

Codat

Modèle de données : Compte bancaire

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App).

Mapper le compte bancaire désigné

Le client sélectionnera son compte bancaire professionnel où ses paiements seront transférés.

Obtenir la liste des comptes bancaires

Afficher à l'utilisateur

L'utilisateur sélectionne un compte bancaire

Stocker l'accountId pour être utilisé dans les futures transactions

Codat

Modèle de données : Compte bancaire

GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts (lien)
0.2 Compte de dépenses

Pour enregistrer les frais, un compte de dépenses est requis. L'utilisateur doit pouvoir sélectionner un compte existant de son logiciel comptable OU en créer un nouveau.

Mapper un compte de dépenses existant

Obtenir la liste des comptes (filtrer éventuellement par Type : Dépense)

Afficher à l'utilisateur

L'utilisateur sélectionne un compte de dépenses

Stocker l'accountId pour être utilisé dans les futures transactions

Codat

Modèle de données : comptes

GET /companies/{companyId}/data/accounts (lien)
OU, Créer un nouveau compte de dépenses

Type : expense

Codat

Modèle de données : comptes

POST /companies/{companyId}/connections/{connectionId}/push/accounts (lien)

0.3 Fournisseur

Pour enregistrer une transaction de dépense d'argent, un contact fournisseur est requis. Vous devrez sélectionner un compte fournisseur existant si celui-ci est déjà dans le compte Xero du client ou vous devrez vous créer en tant que fournisseur.

Rechercher un compte fournisseur existant
Obtenir une liste de fournisseurs
Recherche par correspondance floue pour le nom exact

Modèle de données : fournisseurs

GET /companies/{companyId}/data/suppliers (lien)
OU, Créer un nouveau fournisseur
POST ​/companies​/{companyId}​/connections​/{connectionId}​/push​/suppliers

Modèle de données : fournisseurs

1. Décaissement du prêt

Pour chaque décaissement, publiez un Transfert bancaire entre le compte bancaire du Prêteur dans Xero et le compte bancaire « réel » désigné dans Xero où le décaissement du prêt sera déposé.

1.1 Transfert bancaire
Publier un transfert bancaire

Depuis : Compte du prêteur

Vers : compte bancaire désigné

Montant : montant du décaissement

![](/img/integrations/accounting/xero/xero-general-lending-2.png)

Codat

Modèle de données : transferts

POST /companies/{companyId}/connections/{connectionId}/push/transfers(lien) 2. Remboursement

Pour chaque remboursement, publiez un Transfert bancaire entre le compte bancaire « réel » désigné dans Xero et le compte bancaire du Prêteur.

2.1 Transfert bancaire
Publier un transfert bancaire

Depuis : compte bancaire désigné

Vers : Compte du prêteur

Montant : montant du paiement final

Statut : Rapproché

![](/img/integrations/accounting/xero/xero-general-lending-3.png)

Codat

Modèle de données : transferts

POST /companies/{companyId}/connections/{connectionId}/push/transfers(lien) 3. Publication des intérêts et/ou des frais

Enregistrez les intérêts et/ou les frais dans Xero en publiant une transaction bancaire « dépense d'argent » sur le compte bancaire du Prêteur avec l'élément de ligne enregistré sur un compte de dépenses. Le client doit pouvoir choisir quel Compte de Dépenses, ou avoir l'option de configurer un nouveau Compte de Dépenses.

3.1 Dépense d'argent
Publier une transaction de Dépense d'argent

Vers : Compte du prêteur (Fournisseur)

Élément de ligne : À déterminer

Compte : compte de dépenses désigné

![](/img/integrations/accounting/xero/xero-general-lending-4.png)

Codat

Modèle de données : coûts directs

POST /companies/{companyId}/connections/{connectionId}/push/directCosts(lien) 4. Rapprochement

Il y a trois choses qui doivent être rapprochées :

Le décaissement dans le compte bancaire du Prêteur,

compte bancaire principal (aucune action requise car géré via Xero),

le remboursement et les frais

4.1 Transactions bancaires
Créer une ligne de relevé bancaire

Vers : compte du prêteur

Montant : montant du paiement

|        |      Décaissement      |      Remboursement      |      Frais       |
| :----: | :--------------------: | :---------------------: | :--------------: |
|   Vers   |   Compte du prêteur   |   Compte du prêteur    | Compte du prêteur |
| Montant | Montant du décaissement | Montant du remboursement | Montant des frais  |

![](/img/integrations/accounting/xero/xero-general-lending-5.png)

Modèle de données : Transactions bancaires

POST /companies/{companyId}/connections/{connectionId}/push/bankAccounts/{accountId}/bankTransactions (lien)

Nécessite que les Bank feeds soient activés sur les identifiants Xero (approuvé via le processus de partenariat App).
