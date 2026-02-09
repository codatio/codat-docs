---
title: "FAQ sur TrueLayer"
description: "Questions fréquemment posées sur notre intégration TrueLayer"
sidebar_label: FAQs
---

Si votre question sur TrueLayer ne trouve pas de réponse sur cette page, veuillez contacter notre équipe d'assistance.

## Que voit un client lorsqu'il lie son compte bancaire ?

Codat utilise le parcours client de TrueLayer pour lier un compte bancaire. Cela inclut une page d'accueil standard pour tous les clients et une page de connexion pour leur institution bancaire. Pour savoir exactement ce que vos clients verront, configurez une entreprise test et générez une URL Link comme décrit dans [Tester TrueLayer](/integrations/banking/truelayer/test-truelayer#set-up-a-test-company-and-generate-a-link-url).

## Puis-je spécifier la banque à laquelle nous voulons nous connecter lors de l'initiation du processus OAuth ?

Oui. Lorsque vous créez une connexion de données pour synchroniser les données bancaires d'une entreprise, vous fournissez également une clé de plateforme. Pour plus d'informations, consultez [Tester TrueLayer](/integrations/banking/truelayer/test-truelayer#set-up-a-test-company-and-generate-a-link-url).

## Est-ce que Codat synchronise automatiquement les données bancaires régulièrement ?

Les données bancaires sont synchronisées de la même manière que les données des intégrations comptables.
[Configurer les paramètres de synchronisation](/core-concepts/data-type-settings) explique comment ajuster l'ordre de récupération et la fréquence de synchronisation pour répondre à vos besoins.

## Comment sommes-nous facturés pour les connexions aux comptes TrueLayer ?

Vous serez facturé par Codat. Votre facture comprendra un poste supplémentaire pour TrueLayer. Pour plus d'informations, contactez votre contact commercial.

## Y a-t-il des réglementations de la FCA à prendre en compte, comme l'inscription en tant qu'AISP ?

La structure de l'accord de distribution TrueLayer et Codat est conçue de manière à ce que vous n'ayez besoin d'aucune autorisation réglementaire directe de la Financial Conduct Authority (FCA) pour accéder aux données des entreprises. Vous n'avez pas non plus besoin de vous inscrire en tant que fournisseur de services d'information sur les comptes (AISP). Cependant, vous devez vous assurer de respecter les exigences du flux d'autorisation telles que détaillées dans l'accord. Ceci n'est pas un conseil juridique. Vous devriez toujours consulter vos propres conseillers pour confirmer vos exigences réglementaires.

## Pourquoi ne puis-je pas voir les soldes courants pour certaines transactions ?

TrueLayer ne fournit actuellement pas de données de solde courant pour les transactions de Monzo ou Starling, car celles-ci ne sont pas fournies par l'API de la banque sous-jacente.

## Pourquoi ne puis-je voir que 90 jours de données lors de la première liaison ?

Dans le cadre des normes techniques réglementaires requises par certaines institutions dans les connexions Open Banking, la SCA (Strong Customer Authentication) peut imposer différentes exigences spécifiques à chaque connexion bancaire individuelle. L'un des objectifs de la SCA est de limiter la récupération de données de transaction sensibles ou historiques à une période définie après le consentement initial et l'authentification d'un utilisateur final.

Cela signifie qu'en fonction de la banque, les clients peuvent n'être autorisés à accéder qu'aux données transactionnelles autorisées par la banque pendant une période de 5 minutes après l'authentification initiale par l'utilisateur final. Après cette période, les banques qui appliquent la SCA ne retourneront que 90 jours de données de transaction.

En termes simples, Codat récupérera autant de données que possible suite à l'authentification par votre utilisateur final. Cependant, les normes réglementaires peuvent limiter la quantité de données initialement récupérées à 90 jours.
