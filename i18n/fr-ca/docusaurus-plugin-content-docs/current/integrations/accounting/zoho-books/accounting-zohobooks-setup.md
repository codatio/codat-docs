---
title: "Configurer l'intégration Zoho Books"
description: "Explorez notre intégration API avec Zoho Books."
sidebar_label: Configuration
---

Zoho Books est un logiciel comptable mondial avec des clients au Royaume-Uni, aux États-Unis, en Australie, en Inde et en Afrique du Sud.

Avant de pouvoir accéder aux données des clients utilisant Zoho Books pour leur comptabilité, vous devez configurer une intégration Zoho Books dans le Portail Codat. Vous devrez :

- Enregistrer votre application Zoho Books.
- Ajouter les clés sécurisées générées par votre inscription au Portail Codat.
- Activer votre intégration Zoho Books dans le Portail Codat.

Codat recommande de tester votre intégration avant d'envoyer des URL Link aux clients.

:::note Versions prises en charge

Codat prend actuellement en charge uniquement les régions du Royaume-Uni et des États-Unis pour Zoho Books.
:::

:::note Limites de taux de Zoho Books

Codat fonctionne dans les limites de taux définies par Zoho Books pour minimiser l'impact sur les synchronisations de données. Par défaut, les lignes sont exclues lors de la récupération des factures et des notes de crédit. Pour les clients, les informations d'adresse et de contact sont exclues.

Consultez [Limites de Zoho Books et lectures de données réduites](zoho-book-limits) pour mieux comprendre comment Zoho Books contrôle le volume de données que votre organisation peut récupérer, ainsi que le nombre de connexions de données par organisation.
:::

## Enregistrer votre application

:::note Détails du compte développeur

Si vous avez déjà un compte Zoho Books, ayez vos détails de compte à portée de main. Si vous n'en avez pas, [créez un compte](https://www.zoho.com/developer/signup.html) avant de commencer l'inscription.
:::

Pour enregistrer votre application Zoho Books.

1. Accédez à [https://api-console.zoho.com/](https://api-console.zoho.com/) et connectez-vous à Zoho Books. Si vous utilisez votre compte pour la première fois, sélectionnez **COMMENCER**.
   La **Console développeur** s'affiche. Si l'écran **Applications** s'affiche à la place, dans le coin supérieur gauche, sélectionnez **AJOUTER UN CLIENT**.
2. Sélectionnez **Applications basées sur serveur**.
   La page **Créer un nouveau client** s'affiche.
3. Ajoutez les détails suivants :
   - Dans la liste **Type de client**, sélectionnez **Applications basées sur serveur**.
   - Dans la case **Nom du client**, entrez le nom de votre entreprise. Vos clients voient ceci lorsqu'ils autorisent votre connexion à leur système comptable.
   - Dans la case **URL de la page d'accueil**, entrez l'adresse du site web de votre entreprise.
   - Dans la case **URI de redirection autorisés**, entrez `https://zohobooks.codat.io/oauth/callback`
4. Cliquez sur **Créer**.
   Zoho Books génère les clés sécurisées dont vous aurez besoin pour la prochaine étape du processus.
5. Lorsque la page s'actualise avec l'onglet **Secret client** sélectionné, soit :
   - Gardez cette page ouverte dans un onglet de navigateur séparé.
   - Copiez le **Client ID** et le **Client Secret** dans un document Word ou similaire.
6. Sélectionnez l'onglet **Paramètres** et activez l'une des régions répertoriées où se trouvent vos clients.

<img src="/fr-ca/img/old/da47829-Zoho_Books_Settings.png" />

7. Cochez la case **Utiliser les mêmes identifiants OAuth pour tous les centres de données**.
   Vos paramètres sont enregistrés automatiquement et un message de confirmation s'affiche.

## Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.
1. Localisez **Zoho Books** et cliquez sur **Configurer**.
1. Sous **Paramètres d'intégration**, entrez les valeurs pour le **Client ID** et le **Client secret** de votre application dans votre compte Zoho Books.
1. Cliquez sur **Enregistrer**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.
1. La boîte de dialogue **Activer Zoho Books** s'affiche. Choisissez d'activer l'intégration maintenant ou plus tard.

:::note

Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer votre intégration Zoho Books

Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.

1. Localisez **Zoho Books** et cliquez sur le bouton à bascule pour activer l'intégration.
2. Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

Votre intégration Zoho Books est maintenant configurée.

:::tip Test avec Zoho Books
Zoho Books vous permet de configurer une organisation de test et d'importer ou de créer des données de test. Inscrivez-vous gratuitement avec [Zoho Subscriptions](https://www.zoho.com/uk/subscriptions/?utm_source=zbooks&utm_medium=web-app&utm_content=topbar&utm_campaign=cross-sell), créez une nouvelle organisation de test et définissez une entreprise par défaut pour celle-ci. Cliquez sur **Gérer** à côté du nom de l'organisation, trouvez l'entreprise requise, puis appuyez sur **... -> Marquer comme par défaut**.
:::
