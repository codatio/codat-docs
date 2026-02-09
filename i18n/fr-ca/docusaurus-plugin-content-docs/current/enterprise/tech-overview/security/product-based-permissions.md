---
title: "Autorisations basées sur les produits"
description: "Gestion des autorisations basées sur les produits dans le portail Codat"
---

Les autorisations basées sur les produits donnent aux clients plus de contrôle sur les entreprises auxquelles les utilisateurs peuvent accéder, en fonction des produits qui leur sont attribués.

Ces autorisations fonctionnent en parallèle des rôles existants. Seuls les administrateurs peuvent attribuer des autorisations basées sur les produits.

---

## Fonctionnement des autorisations

### Rôles Administrateur et Développeur

- Accès complet à tous les produits
- Ne peuvent pas modifier leur propre attribution de produit, car ils ont déjà un accès illimité

### Rôles Analyste et Intégration

- Ne peuvent pas accéder à **Paramètres > Utilisateurs**
- Ne peuvent pas modifier les rôles des utilisateurs
- Ne peuvent pas modifier les attributions de produits
- Doivent se voir attribuer un produit avant de pouvoir créer ou visualiser des entreprises
- Du point de vue de l'utilisateur : jusqu'à ce qu'un produit soit attribué, aucune entreprise n'est visible et de nouvelles entreprises ne peuvent pas être créées

Une fois qu'un produit a été attribué, ces utilisateurs peuvent créer des entreprises.

---

## Aperçu des autorisations par rôle

| Rôle              | Accès au produit | Peut modifier les rôles d'utilisateur | Peut attribuer des produits | Peut accéder à **Paramètres > Utilisateurs** | Peut créer/visualiser des entreprises   |
| ----------------- | ----------------- | ------------------- | ------------------- | ------------------------------- | --------------------------- |
| **Administrateur** | Accès complet       | ✔                   | ✔                   | ✔                               | ✔                           |
| **Développeur**     | Accès complet       | ✘                   | ✘                   | ✔                               | ✔                           |
| **Analyste**       | Produit requis  | ✘                   | ✘                   | ✘                               | Seulement après attribution de produit |
| **Intégration**    | Produit requis  | ✘                   | ✘                   | ✘                               | Seulement après attribution de produit |

---

## Utilisation du SSO

- Si vous utilisez Enterprise SSO, assurez-vous que le groupe Active Directory correct est attribué à chaque utilisateur (**Administrateur**, **Développeur**, **Analyste** ou **Intégration**).
- Les nouveaux utilisateurs configurés en tant qu'**Analystes** ou **Intégrateurs** doivent se connecter au portail via SSO avant qu'un produit puisse être attribué.

---

## Notes

- Les modifications apportées aux attributions de produits d'une entreprise se mettent à jour automatiquement lorsque les utilisateurs actualisent le portail.
- Si un administrateur ajoute un produit à une entreprise à laquelle un utilisateur n'a pas accès, l'utilisateur peut toujours voir que le produit a été attribué mais n'y aura pas accès.
- Lorsqu'une entreprise a plusieurs produits attribués, les utilisateurs voient tous les produits auxquels ils ont la permission d'accéder.
