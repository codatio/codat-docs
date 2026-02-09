---
title: "Configurer l'intégration BigCommerce"
description: "Explorez notre intégration API avec BigCommerce"
sidebar_label: Setup
---

Configurez l'intégration [BigCommerce](/integrations/commerce/bigcommerce/commerce-bigcommerce) pour récupérer les données commerce de vos clients PME qui vendent leurs produits sur le logiciel BigCommerce.

Avec cette intégration, vos clients PME (commerçants qui vendent sur le logiciel BigCommerce) doivent récupérer les identifiants sécurisés de leur boutique BigCommerce, puis les saisir dans Link dans le cadre du flux d'autorisation.

:::caution Testez d'abord l'intégration

Avant d'envoyer des URL Link à vos clients PME, nous vous recommandons de [tester l'intégration](/integrations/commerce/bigcommerce/commerce-bigcommerce-test) en utilisant des exemples de données d'une boutique sandbox.
:::

Voici les tâches impliquées dans la configuration de l'intégration :

**Vous effectuez ces tâches :**

1. [Activer l'intégration BigCommerce](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#enable-the-bigcommerce-integration) dans le portail Codat.
2. [Créer une entreprise dans Codat et partager l'URL Link avec vos clients PME](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#create-a-company-and-share-the-link-url).

**Vos clients PME effectuent cette tâche :**

1. Utiliser Link pour [autoriser Codat à accéder à leurs données commerce](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-their-commerce-data).

## Portées OAuth requises

Pour utiliser notre intégration BigCommerce, les portées OAuth suivantes doivent être définies avec l'autorisation `read-only` :

| Nom dans l'interface utilisateur | Paramètre de portée              |
| -------------------------------- | -------------------------------- |
| Orders                           | `store_v2_orders_read_only`      |
| Order Transactions               | `store_v2_transactions_read_only`|
| Products                         | `store_v2_products_read_only`    |
| Information & Settings           | `store_v2_information_read_only` |
| Customers                        | `store_v2_customers_read_only`   |

Si un commerçant n'a pas ces portées définies, il devra créer un nouveau compte API de boutique et saisir ses nouveaux identifiants de boutique dans Link (voir [Client PME : Authentifier et connecter vos données commerce](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-your-commerce-data)).

Notez que Codat ne peut pas déterminer quelles portées sont définies ou non définies pour un commerçant particulier.

## Activer l'intégration BigCommerce

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **BigCommerce** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Créer une entreprise et partager l'URL Link

Créez une entreprise pour représenter votre client PME. Fournissez l'URL Link au client pour lui permettre de connecter sa boutique BigCommerce à Codat en utilisant Link.

:::note Options pour l'autorisation

L'utilisation de Link pour autoriser la connexion de données est facultative. Vous pouvez également créer votre propre flux d'autorisation en utilisant l'API Codat.
:::

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Companies > New company**.
2. Dans la boîte de dialogue **Add new company**, entrez un nom pour l'entreprise, puis cliquez sur **Add**. L'URL Link s'affiche dans la boîte de dialogue.
3. Fournissez l'URL Link à votre client PME.

## Client PME : Authentifier et connecter vos données commerce

Dans Link, votre client PME connecte sa boutique BigCommerce à Codat. Pour autoriser une connexion de données à Codat, il crée un _compte API de boutique_, obtient les identifiants de la boutique, puis les saisit dans Link.

Pour plus de détails sur les étapes 4 à 7 de cette procédure, voir <a className="external" href="https://support.bigcommerce.com/s/article/Store-API-Accounts?language=en_US#creating" target="_blank">Creating an API Account</a> dans le centre d'aide BigCommerce.

Votre client PME effectue les actions suivantes :

1. Ouvre l'URL Link dans votre navigateur.

2. Sur l'étape Commerce du site Link, sélectionne la tuile **BigCommerce**, puis clique sur **Next**.

   ![BigCommerce Link flow](/img/old/55ada94-link-select-bigcommerce-tile.png "On the Commerce step in Link, select the BigCommerce tile.")

3. Examine les autorisations demandées sur l'étape **Connect to BigCommerce**, puis clique sur **Next**.
    La page **Your BigCommerce Credentials** s'affiche. Laisse cette page ouverte dans votre navigateur.

   ![Your BigCommerce credentials](/img/old/fecc242-your-big-commerce-credentials-border.png "Your BigCommerce credentials dialog with fields to enter your store credentials.")

4. Dans un nouvel onglet du navigateur, va sur <a className="external" href="https://www.bigcommerce.com/" target="_blank">www.bigcommerce.com</a> et se connecte à son tableau de bord.

5. Dans le panneau latéral, clique sur **Settings**.

6. Clique sur **API accounts > Create API account**.

7. Sur la page **Create account**, entre les détails suivants :
   - Laisse le **Token type** comme **V2/V3 API token**.
   - Entre le nom de votre organisation dans la zone **Name**.
   - Définis les [portées OAuth requises](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#required-oauth-scopes).
   - Clique sur **Save**.
     La boîte de dialogue **BigCommerce API credentials** s'affiche et un fichier texte contenant vos identifiants de compte API de boutique est téléchargé sur votre ordinateur.

   ![BigCommerce API credentials](/img/old/0c78323-bigcommerce-api-credentials-dialog-masked-border.png "The BigCommerce API credentials dialog showing the Client ID, Client secret, and Access token fields.")

8. Ouvre le fichier texte téléchargé pour afficher les identifiants du compte API de boutique.

9. Copie et colle les valeurs du fichier texte dans les zones correspondantes sur la page **Your BigCommerce Credentials** (voir étape trois). Les valeurs suivantes sont requises :
   - **Client ID**
   - **Client Secret**
   - **Access Token**
   - **API Path**

10. Clique sur **Continue**.

11. Si la connexion de données a réussi, clique sur **Finish** pour fermer Link. Vous avez maintenant connecté votre boutique BigCommerce à Codat.

:::caution Gardez vos identifiants de compte API de boutique en sécurité

Vous ne pouvez pas accéder à vos identifiants de compte API de boutique (Client ID, Client Secret, Access Token et API Path) à nouveau après avoir fermé la boîte de dialogue **BigCommerce API credentials**. Assurez-vous de stocker le fichier texte téléchargé contenant ces identifiants dans un emplacement sécurisé.

Si vous perdez vos identifiants de compte API de boutique, vous devrez créer un nouveau compte API de boutique et relier à nouveau votre boutique.
:::
