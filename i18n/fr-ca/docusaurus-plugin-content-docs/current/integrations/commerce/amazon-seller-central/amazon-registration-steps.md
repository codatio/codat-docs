---
title: "Amazon Web Services, IAM et inscription des développeurs"
description: "Configurez vos identifiants AWS et Amazon Seller Central"
createdAt: "2021-09-08T11:11:09.951Z"
updatedAt: "2022-10-20T09:40:42.443Z"
---

Avant de configurer votre intégration Amazon Seller Central, vous devrez :

- Vous inscrire en tant que partenaire vendeur Amazon sur Seller Central
- Enregistrer ou avoir un compte Amazon Web Services (AWS) existant
- Créer un utilisateur Identity and Access Management (IAM) et générer une clé d'accès secrète AWS
- Créer une politique IAM
- Créer un rôle IAM qui fait confiance à votre utilisateur IAM
- Ajouter une politique AWS Security Token Service à votre utilisateur IAM.

  :::caution Exigences d'inscription
  Amazon a des étapes de vérification manuelles dans le cadre de leur processus d'inscription des développeurs. Veuillez noter qu'il peut s'écouler un certain temps avant que votre demande soit examinée avant que vous puissiez commencer à utiliser l'intégration Amazon Seller Central de Codat.
  :::

:::info Frais et charges
Amazon facture des frais mensuels dépendant de la localisation pour s'inscrire à Seller Central. Veuillez consulter votre site Web Amazon Seller Central local pour plus de détails.

Un compte AWS est également requis, bien qu'Amazon ne facture actuellement pas l'utilisation des services IAM. D'autres utilisations de votre compte AWS peuvent entraîner des frais séparés.
:::

## S'inscrire en tant que développeur d'applications Amazon Seller Central

1. Connectez-vous à Amazon Seller Central en utilisant les identifiants que vous souhaitez associer à votre compte développeur.
2. Dans le menu Apps & Services, cliquez sur **Develop Apps**. La page Developer Central apparaît.
3. Vous devrez remplir le formulaire d'inscription des développeurs.

   **Section d'accès aux données**
   Veuillez sélectionner Mon organisation construit et offre des applications publiquement disponibles.

   **Section des cas d'utilisation**
   Vous devrez seulement sélectionner les API « Selling Partners ». Vous devrez être clair sur les données qui vous intéressent et pouvoir justifier comment vous aiderez l'entreprise du commerçant à se développer sur Amazon.

   **Section des contrôles de sécurité**
   Vous devrez décrire les contrôles que vous avez en place pour assurer la sécurité de toutes les données synchronisées. Amazon exige que vous démontriez que vous serez conforme à leurs politiques de confidentialité et de partage de données ; et vous devrez fournir la politique de réponse aux incidents de votre entreprise.

:::caution Informations personnellement identifiables (PII)
Amazon est très sensible aux données PII des clients de leurs commerçants.

En raison des restrictions strictes, Codat ne lit aucune donnée PII d'Amazon pour remplir notre type de données Customers.
:::

:::info Examen du statut de votre demande
Après la soumission de la demande d'inscription en tant que développeur, Amazon évaluera et examinera la demande. Vous devriez recevoir une notification lorsque votre demande aura été examinée. Vous devriez également voir une bannière « Your developer registration is under review » sur la page ASC qui reflétera le statut de votre demande.
:::

## S'inscrire pour un compte AWS

Si vous n'avez pas encore de compte AWS, vous pouvez vous inscrire pour un compte de niveau gratuit [ici](https://aws.amazon.com/free/).

## Créer votre utilisateur IAM, votre politique d'accès et votre rôle

Veuillez suivre les étapes 2 à 5 du guide d'instructions d'Amazon [ici](https://developer-docs.amazon.com/sp-api/docs/creating-and-configuring-iam-policies-and-entities) pour créer l'utilisateur, la politique et le rôle requis.

:::danger Important - Étape 2.8

C'est votre seule opportunité d'afficher ou de télécharger la clé d'accès secrète AWS de votre utilisateur, dont vous aurez besoin pour authentifier vos appels à l'API Selling Partner. Enregistrez l'ID de clé d'accès AWS et la clé d'accès secrète AWS dans un endroit sûr et sécurisé.

**Vous n'aurez plus accès à la clé d'accès AWS après cette étape.**

Si vous perdez votre clé d'accès secrète AWS, vous devrez créer un nouvel utilisateur IAM avec son propre nouvel ensemble de clés.
:::

## Créer votre application Amazon Seller Central

1. Sur la [page des développeurs Amazon Seller Central](https://sellercentral.amazon.co.uk/sellingpartner/developerconsole), choisissez « Add new app client »
2. Choisissez un nom pour votre application et sélectionnez « SP API » dans le menu déroulant « API Type »
3. Entrez l'ARN IAM pour le rôle IAM que vous avez créé ci-dessus.
4. Sélectionnez « Sellers » pour « Business Entities Supported »
5. Sélectionnez tous les rôles disponibles
6. Sous « OAuth Login URI » entrez `https://codat.io`
7. Sous « OAuth Redirect URI » entrez `https://amazonsellercentral.codat.io/oauth/callback`
8. Cliquez sur Save and Exit

Avant de pouvoir lier une entreprise Amazon dans votre environnement Codat, vous devez soumettre votre application Amazon Seller Central pour inscription sur le marché. Les applications doivent être examinées et approuvées par Amazon, ce qui peut prendre jusqu'à deux semaines. Pour plus de détails, voir [Utiliser les applications Amazon Seller Central pour accéder aux données en direct](/integrations/commerce/amazon-seller-central/amazon-registration-steps#using-amazon-seller-central-apps-to-access-live-data), ci-dessous.

## Utiliser les applications Amazon Seller Central pour accéder aux données en direct

Pour utiliser les identifiants d'application Amazon Seller Central dans un environnement de production (connexion à des données en direct), vous devez d'abord inscrire l'application sur le réseau de partenaires Amazon Seller Central (Amazon SCPN). Pour des informations détaillées sur le formulaire et le processus d'inscription de l'application, consultez le <a href="https://docs.developer.amazonservices.com/en_UK/dev_guide/DG_AppListingGuide.html" target="_blank">guide officiel</a>. Alternativement, suivez ces étapes pour soumettre votre application pour inscription :

1. Sur la barre de navigation d'Amazon Seller Central, survolez **Partner Network**.

2. Dans le menu déroulant, cliquez sur **Develop Apps**.

3. Dans la liste des applications clients sur Developer Central, sélectionnez l'application que vous souhaitez inscrire en cliquant sur **Authorise** dans le menu déroulant de la colonne **Action**.

4. Retournez au portail Developer Central et cliquez sur **View App listings**.

5. Vous êtes redirigé vers une autre page ; cliquez sur **Add App Listing**.

6. Sur le formulaire **List your App**, complétez les sections requises :
   - **App information**
   - **Pricing**
   - **Details**

7. Lorsque vous avez complété les sections ci-dessus, cliquez sur **Save and submit** pour soumettre le formulaire.

8. Amazon communiquera le résultat de la soumission de votre formulaire en temps voulu.
   Après approbation, les applications prennent environ **2 semaines** pour être publiées et rendues disponibles pour une utilisation dans les environnements de production.

:::caution Dimensions des images d'application

Certaines sections du formulaire nécessitent que vous téléchargiez des images de votre application dans des dimensions spécifiques. Ces exigences doivent être respectées.
:::
