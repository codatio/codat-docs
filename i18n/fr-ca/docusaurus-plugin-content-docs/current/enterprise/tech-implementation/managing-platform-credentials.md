---
title: "Obtenir les identifiants de plateforme"
description: "Recommandations de meilleures pratiques pour l'inscription auprès des logiciels comptables, bancaires ou commerciaux et le stockage des identifiants"
sidebar_label: "Obtenir les identifiants"
---

## Aperçu

Votre organisation doit généralement s'inscrire auprès de chacun de vos fournisseurs de logiciels préférés afin que les données client de production puissent être partagées vers et depuis le logiciel. Dans certains cas, l'inscription est également requise pour accéder à un compte développeur pour le développement et les tests.

## Prérequis

1. **Identifier les accords ou relations existants avec les logiciels que vous prévoyez d'intégrer**

   Cela pourrait être toute relation Open Banking ou une intégration directe existante avec un logiciel comptable.

   :::tip Localiser les comptes existants

   Les détails de compte pour toute intégration directe existante sont susceptibles d'utiliser une adresse e-mail de boîte mail générique au sein de votre organisation.
   :::

2. **Contacter le propriétaire de la relation existante ou l'administrateur système**

   Comprendre la portée de l'accord ou de la relation existante et l'utilisation des données reçues du logiciel. Vérifier comment accéder aux identifiants (tels que les clés API) pour activer l'intégration correspondante dans Codat.

3. **Demander un coffre-fort ou un emplacement de stockage pour stocker les identifiants**

   Cette exigence est susceptible d'être définie par votre propre équipe de gouvernance des données, donc la solution doit être adaptée au stockage de données hautement confidentielles.

   Si vous avez besoin d'une solution provisoire, vous pouvez stocker et récupérer les identifiants en toute sécurité dans le portail Codat avant la mise en ligne.

## Obtenir les identifiants

1. Examinez les exigences d'inscription ou de partenariat pour les plateformes que vous prévoyez d'utiliser.

   Codat fournit les conseils récapitulatifs suivants :
   - [Configuration des intégrations comptables](/integrations/accounting/overview#setting-up-accounting-integrations)
   - [Configuration des intégrations commerciales](/integrations/commerce/overview#setting-up-commerce-integrations)

2. Engagez-vous avec votre spécialiste d'implémentation pour obtenir des conseils spécifiques à la plateforme sur l'établissement d'une relation commerciale.

3. Inscrivez-vous ou créez un nouveau compte auprès de la plateforme.

   Nous recommandons d'utiliser une boîte mail générique pour cela (par exemple `system-admins@yourorganization.com`). Fournir à plusieurs utilisateurs un accès contrôlé réduit le risque de perte d'accès et constitue une exigence pour certaines plateformes, telles que QuickBooks.

4. Une fois inscrit, récupérez l'ID client, les clés secrètes ou un équivalent, depuis le portail développeur de la plateforme.

   Certaines plateformes offrent des entreprises sandbox que votre organisation peut utiliser pour les tests. Nous offrons des conseils récapitulatifs pour cela dans [Test de votre solution Codat](/using-the-api/testing).
