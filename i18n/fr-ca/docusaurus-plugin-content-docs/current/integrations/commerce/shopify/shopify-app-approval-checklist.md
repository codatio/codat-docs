---
title: "Liste de vérification d'approbation d'application"
draft: true
---

Pour accéder aux données Shopify, vous devez répondre aux [exigences du Shopify App Store](https://shopify.dev/apps/store/review).

Dans le cadre de ce guide, nous avons défini les points de contrôle clés qui nécessitent votre attention. Notez que cette liste n'est pas exhaustive et est purement basée sur notre expérience et celle de nos clients lors du processus d'approbation. Veuillez vous référer aux [exigences de Shopify](https://shopify.dev/apps/store/requirements) pour les informations les plus récentes.

Des conseils supplémentaires de Codat sont disponibles pour [configurer votre intégration Shopify](https://docs.codat.io/integrations/commerce/shopify/commerce-shopify).

Exigences

1. Configurations d'application interdites et restreintes
   Application web uniquement
   Doit utiliser correctement les API Shopify dans toute leur mesure
   Pas de traitement de paiements en dehors de Shopify
   Pas d'hébergement de places de marché
   Pas d'offre de prêts
   Pas d'exigence d'extensions de navigateur
   Pas de traitement de remboursements Shopify
   Pas de connexion à d'autres passerelles de paiement
2. Installation
   L'installation doit provenir du Shopify App Store
   Votre application doit rediriger vers [OAuth immédiatement](/integrations/commerce/shopify/commerce-shopify)
   Demande uniquement les portées requises - si vos exigences de portée sont inférieures aux valeurs par défaut, veuillez contacter votre ingénieur de solutions ou spécialiste de l'implémentation pour les limiter.
   Contient des instructions de configuration si nécessaire
   Éviter les fenêtres contextuelles
3. Fonctionnalité et qualité
   Une interface utilisateur est requise, incluant boutons, contrôles et toutes instructions de configuration
   Si des frais sont appliqués, l'application utilise l'API de facturation Shopify
   Identifiants de test inclus
   Capable d'être testée et fonctionnelle
   Dernière version de l'API utilisée
4. Performance

Ne doit pas réduire les scores de performance [Lighthouse](https://developers.google.com/web/tools/lighthouse) de plus de 10 %.

5. Liste d'application
   Le nom de l'application ne peut pas inclure le mot « Shopify ».
   Le nom de l'application doit contenir 30 caractères ou moins.
   Le nom de l'application ne peut pas être une description générique de la fonctionnalité de votre application, comme « Curseur de bannière ».
   Le nom de votre application doit être court et distinct.
   Le nom de l'application ne peut pas se terminer par le nom de votre compte Shopify Partner. Par exemple, votre nom d'application ne peut pas être « Nom d'application par nom de compte Shopify Partner ».
   L'icône doit être au format JPG ou PNG et mesurer 1200px par 1200px
   Pas de texte dans l'icône
   Ne pas référencer d'autres applications dans le contenu
   Ne pas lister de concurrents
   Suivre les [directives pour le contenu de la liste](https://shopify.dev/apps/store/requirements#1-app-introduction)
   Inclure des captures d'écran
   S'assurer que les captures d'écran n'incluent pas d'informations sensibles
   Inclure une vidéo de présentation
   Le nom de soumission à l'app store correspond au nom dans Partners
   Coordonnées de contact de développement d'urgence remplies

Endpoints RGPD remplis

Politique de confidentialité propre listée

L'application doit pointer vers la production
