---
title: "Configurer l'intégration MYOB"
description: "Explorez notre intégration API avec MYOB Business."
sidebar_label: Configuration
---

:::note AccountRight ou Essentials?

MYOB a migré son API Essentials vers une nouvelle version. La nouvelle version utilisera l'API AccountRight. Vous pouvez en savoir plus sur la mise à jour sur le <a href="https://developer.myob.com/api/accountright/v2//" target="_blank">site web MYOB</a>.

Le nouvel Essentials utilisera la même API que leur plateforme AccountRight Live. Par conséquent, vous n'avez besoin d'effectuer la configuration décrite ci-dessous qu'une seule fois pour accéder aux deux logiciels comptables.

Certains utilisateurs peuvent encore être sur l'ancienne version non migrée de MYOB Essentials qui utilise une API héritée, qui n'est pas prise en charge par Codat. Si votre client ne peut pas connecter son compte MYOB Essentials non migré, veuillez lui conseiller de contacter le support MYOB pour obtenir des conseils sur la migration vers la nouvelle version.
:::

Avant de pouvoir accéder aux données comptables des clients utilisant MYOB Business, vous devez configurer l'intégration dans le portail Codat.

Vous devrez :

- Vous inscrire pour un compte développeur auprès de MYOB.
- Enregistrer une nouvelle application auprès de MYOB.
- Ajouter les clés sécurisées de votre application au portail Codat.

## Rejoindre le programme développeur MYOB

Vous devez prévoir un minimum de 72 heures pour que MYOB configure votre compte développeur. Si vous avez déjà un compte développeur MYOB, vous pouvez sauter cette section.

1. Allez sur <a className="external" href="https://developer.myob.com/become-a-myob-developer-partner/" target="_blank">la page MYOB pour les développeurs</a>.
2. Faites défiler jusqu'en bas de la page et sélectionnez **Join the MYOB Developer Program Today**.
3. Complétez le formulaire **Developer Registration**. Vous pouvez utiliser le niveau 'Open Access' (gratuit) pour créer les identifiants d'application requis, mais si vous avez besoin d'un sandbox MYOB privé pour les tests, vous pouvez explorer l'un des niveaux payants. Contactez MYOB directement pour plus d'informations à ce sujet.
4. Pour compléter votre inscription, sélectionnez **Submit**.
   Un message de confirmation s'affiche.
5. Attendez que l'équipe MYOB crée votre compte développeur et envoie une notification par e-mail.
6. Lorsque vous recevez la notification par e-mail de MYOB, ouvrez l'e-mail et sélectionnez **Set your password**.
7. Suivez les instructions à l'écran, puis sélectionnez **Create Password**.

## Enregistrer votre application

1. Connectez-vous à votre <a className="external" href="https://my.myob.com.au/pages/login.aspx" target="_blank">compte développeur MYOB</a>.
2. Dans le menu supérieur, sélectionnez **Developer**, puis sélectionnez **Register App**.
   La page **Application Details** s'affiche.
3. Dans la case **App Name**, saisissez un nom court pour votre application. Vos clients verront ce nom pendant le processus de liaison.
4. Dans la case **Redirect URi**, saisissez `https://myobaccountright.codat.io/oauth/callback`
5. Dans la case **Website**, vous devez mettre un lien vers le site web de votre entreprise dans le format suivant : `https://www.[exemple].com`.
6. Dans la case **Description**, vous devez mettre une brève description de ce que votre application permettra à vos clients de faire.
7. Sélectionnez **Register App**.
8. Dans le **Developer Dashboard**, vous trouverez maintenant votre clé d'application et votre secret. Vous en aurez besoin pour la prochaine étape du processus.

:::caution Limitation MYOB

MYOB n'activera automatiquement que les deux premières clés API que vous créez. Toutes les clés API supplémentaires devront être activées manuellement par l'équipe de support MYOB avant utilisation, même si les clés d'origine ont été supprimées. Pour plus d'informations à ce sujet, consultez l'<a href="https://apisupport.myob.com/hc/en-us/articles/360000490416" target="_blank">article </a> dans la base de connaissances MYOB.
:::

## Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **MYOB Business** et cliquez sur **Set up**.

3. Sous **Integration settings**, saisissez les valeurs pour le **Client ID** et le **Client secret** de votre application dans votre compte développeur MYOB.
   - Saisissez votre clé d'application dans la case **Client Key**.
   - Saisissez votre secret d'application dans la case **Client secret**.

4. Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

5. La boîte de dialogue **Enable MYOB Business** s'affiche. Sélectionnez si vous souhaitez activer l'intégration maintenant ou plus tard.

:::note

Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

## Activer l'intégration MYOB

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **MYOB Business** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Liaison à MYOB AccountRight Live

Lors de la liaison, l'utilisateur sera d'abord invité à sélectionner parmi ses fichiers de données MYOB disponibles. Si un fichier de données AccountRight est choisi, l'entreprise sera ensuite invitée à saisir le nom d'utilisateur et le mot de passe du fichier de données de l'entreprise qu'elle souhaite lier. Codat les stockera en toute sécurité et les utilisera pour synchroniser leurs données. Ce nom d'utilisateur et ce mot de passe sont distincts des identifiants qu'ils utilisent pour se connecter à leur compte MYOB - ce sont les identifiants sécurisant le fichier lui-même, similaire à Sage 50.

![](/img/old/761a123-myob_link.png "myob link.png")
