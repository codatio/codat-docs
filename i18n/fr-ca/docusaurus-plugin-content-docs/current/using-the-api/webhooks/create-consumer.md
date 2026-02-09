---
title: "Créer des consommateurs de webhooks pour s'abonner aux événements"
sidebar_label: "Consommer les webhooks"
description: "Configurez de nouveaux consommateurs de webhooks dans Codat et gérez la configuration existante pour recevoir des événements webhook"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

import Arcade from "@components/Arcade";

## Aperçu

Un _consommateur de webhook_ est votre implémentation d'un point de terminaison POST que vous avez créé pour recevoir les webhooks de Codat. En général, vous avez besoin d'un consommateur par [type d'événement](/using-the-api/webhooks/event-types).

Ce consommateur doit retourner une réponse `2XX` (code de statut `200-299`) dans les 15 secondes suivant la réception de la requête POST. Nous recommandons de transmettre l'événement à une file d'attente de messages interne afin de pouvoir le traiter à temps.

## Configurer un consommateur de webhook

<Arcade
  url="https://demo.arcade.software/wezqcAlTgJzlPt7P8LiX?embed&show_copy_link=true"
  title="Creating webhooks"
/>

Une fois que vous avez créé votre consommateur de webhook, configurez Codat pour envoyer des événements à ce consommateur. Naviguez vers **Settings > Webhooks > Events > Configure consumer** et cliquez sur **Add endpoint** pour créer un nouveau consommateur.

:::caution Création d'architectures avec plusieurs consommateurs

Si vous prévoyez créer une application avec plus de 50 consommateurs, contactez votre interlocuteur Codat afin que nous puissions optimiser la solution pour votre cas d'utilisation.

:::

Ajoutez l'URL du point de terminaison où vous souhaitez recevoir les messages, une description facultative, et choisissez les événements que ce point de terminaison doit écouter. Vous devez spécifier au moins un type d'événement par point de terminaison.

Parcourez notre catalogue d'événements [dans le Portail](https://app.codat.io/monitor/events) ou dans notre [documentation](/using-the-api/webhooks/event-types) pour choisir les types d'événements qui correspondent à votre cas d'utilisation.

:::tip Configurer un consommateur via l'API

Vous pouvez créer un consommateur de webhook par programmation en utilisant notre point de terminaison [Create webhook](/platform-api#/operations/create-webhook-consumer).

:::

:::caution Liste d'autorisation IP

Si votre point de terminaison consommateur se trouve derrière un pare-feu ou NAT, vous devrez autoriser les adresses IP `4.159.114.108` et `20.117.190.191`.
:::

### En-têtes personnalisés

Une fois que vous avez créé votre consommateur de webhook, vous pouvez utiliser sa fonctionnalité avancée pour ajouter un en-tête personnalisé au point de terminaison. Cela peut être utile dans les scénarios suivants :

- Si vous sécurisez vos points de terminaison webhook avec un en-tête d'autorisation, vous pouvez l'ajouter en tant qu'en-tête personnalisé `Authorization`.

- Si vous utilisez plusieurs instances Codat et devez les différencier, ajoutez un en-tête `X-Codat-ClientId` avec l'ID client requis. Vous pouvez trouver et copier votre ID client dans le [Portail](https://app.codat.io) en cliquant sur le menu déroulant de votre instance.

  ![A fragment of the UI that displays the dropdown with client instances and current client details](/img/use-the-api/0049-clientid-portal.png)

Il n'est pas possible d'ajouter un en-tête personnalisé via notre API. À la place, naviguez vers **Monitor > Webhooks > Events** et cliquez sur le point de terminaison concerné pour voir sa vue détaillée. Ensuite, sélectionnez l'onglet **Advanced** et ajoutez vos en-têtes à la section d'en-tête personnalisé.

![A fragment of the webhook UI that displays the detailed endpoint view with two custom headers added to it](/img/use-the-api/0050-custom-headers-section.png)

### Filtrer les webhooks par balises d'entreprise

Vous pouvez configurer un consommateur de webhook pour filtrer les entreprises en fonction des [balises que vous pouvez ajouter à un profil d'entreprise](/using-the-api/managing-companies#adding-metadata-to-a-company).
Par exemple, si vous souhaitez recevoir des webhooks uniquement pour les entreprises marquées avec une région ou un service spécifique, vous pouvez configurer le consommateur pour qu'il corresponde à ces balises.

Pour configurer cela dans le [Portail Codat](https://app.codat.io/), naviguez vers **Monitor > Webhooks > Events** et sélectionnez le point de terminaison concerné pour afficher ses détails. Ensuite, saisissez les balises que vous souhaitez filtrer dans le champ **Company tags**. Chaque consommateur de webhook peut prendre en charge jusqu'à 10 balises d'entreprise.

Les balises doivent être formatées sous forme de paires clé-valeur séparées par deux-points. Par exemple, pour acheminer les webhooks pour les entreprises marquées avec une valeur `region` de `us`, définissez le champ **Company tags** sur `region:us`. Toute entreprise marquée avec une valeur `region` de `uk` sera ignorée.

Un message sera livré chaque fois que l'une des balises de l'entreprise correspond aux balises spécifiées dans le consommateur de webhook. Par exemple, un consommateur configuré avec `region:us` et `service:t2k` recevra toujours des messages d'une entreprise marquée avec `region:us` et `service:minerva` car une balise d'entreprise correspond.

![A fragment of the webhook UI that allows you to add company tags to a consumer](/img/use-the-api/webhooks-add-company-tags.png)

### Limites de taux des points de terminaison

Si votre application ne peut gérer qu'un nombre limité de requêtes dans une période donnée, définissez une limite de taux sur le point de terminaison consommateur pour le protéger contre la surcharge. La limite de taux est définie comme un nombre maximum de messages par seconde à envoyer à ce point de terminaison.

Une fois la limite atteinte, la fréquence des requêtes sera réduite pour ne pas la dépasser. Le taux réel des messages peut parfois être légèrement supérieur à la limite de taux appliquée.

<img
  width="740"
  height="446"
  alt="webhookratelimits"
  src="https://github.com/user-attachments/assets/6afec3df-eae3-4815-90e0-ee17bc1ee9d7"
/>

## Afficher les consommateurs de webhook

Dans le [Portail Codat](https://app.codat.io/monitor/events), naviguez vers **Monitor > Webhooks > Events** pour voir la liste de tous les points de terminaison consommateurs que vous avez configurés.

Alternativement, vous pouvez utiliser le point de terminaison [List webhooks](/platform-api#/operations/list-webhook-consumers) pour retourner une liste de tous les consommateurs qui existent actuellement pour votre client.

## Supprimer les consommateurs de webhook

Dans le [Portail Codat](https://app.codat.io/monitor/events), naviguez vers **Monitor > Webhooks > Events** pour voir la liste de vos consommateurs de webhook. Cliquez sur celui que vous souhaitez supprimer, puis cliquez sur le menu d'options à trois points et choisissez **Delete**.

Alternativement, vous pouvez utiliser le point de terminaison [Delete webhook](/platform-api#/operations/delete-webhook-consumer) pour supprimer un consommateur de webhook existant. Vous devez fournir son `webhookId` valide en tant que paramètre.

## Tester un consommateur de webhook

Lors de l'ajout d'un point de terminaison consommateur de webhook, vous voudrez peut-être le tester avec un exemple d'événement pour confirmer sa configuration. Une fois que vous avez [créé le point de terminaison](/using-the-api/webhooks/create-consumer#create-a-webhook-consumer), cliquez dessus pour voir la vue détaillée et naviguez vers l'onglet **Testing**.

Ensuite, choisissez l'exemple d'événement que vous souhaitez envoyer et cliquez sur **Send example**. Une fois envoyé, vous pouvez cliquer sur le message pour afficher sa charge utile, ses tentatives et son statut.

:::tip Dépanner les messages échoués

Il existe de nombreuses raisons pour lesquelles un message vers votre point de terminaison pourrait échouer. Consultez notre [guide de dépannage](/using-the-api/webhooks/troubleshooting) pour résoudre les problèmes les plus courants qui se produisent.

:::

## Sécurité des webhooks

Codat fournit plusieurs options pour sécuriser vos consommateurs de webhook et garantir que seuls les systèmes autorisés reçoivent et traitent les événements webhook en toute sécurité. Vous pouvez utiliser :

- [En-têtes personnalisés](#custom-headers) pour authentifier l'accès à votre consommateur en incluant l'en-tête `Authorization` dans la requête.
- [TLS mutuel (mTLS)](#configure-mutual-tls) pour vérifier les identités du serveur et du client.
- [Signatures de webhook](#verify-webhook-signature) pour vérifier que les messages webhook ont été réellement envoyés par Codat.

### Configurer le TLS mutuel

:::tip Prérequis

Pour configurer mTLS dans le Portail Codat, vous avez besoin d'une **clé privée encodée PEM** et d'un **certificat X.509**.
:::

Le TLS mutuel (mTLS) est un protocole d'authentification qui garantit que le client et le serveur vérifient l'identité l'un de l'autre avant d'établir une connexion sécurisée. Contrairement au TLS standard, qui n'authentifie que le serveur, mTLS utilise des certificats client pour appliquer une authentification bidirectionnelle.

Suivez les étapes ci-dessous pour configurer mTLS pour un consommateur de webhook dans Codat :

1. Naviguez vers **Monitor > Webhooks > Events** dans le [Portail Codat](https://app.codat.io/monitor/events) pour afficher vos consommateurs de webhook.
2. Sélectionnez le consommateur de webhook pour lequel vous souhaitez configurer mTLS.
3. Dans la vue détaillée du point de terminaison, cliquez sur **Advanced**, puis sur **Configure mTLS**.
   ![A fragment of the webhook UI that directs the user to the mTLS configuration page](/img/use-the-api/webhook-advanced-mTLS.png)
4. Dans la zone de texte affichée, saisissez votre **clé privée encodée PEM** et le **certificat X.509**, en les séparant par une ligne vide.
   ![A fragment of the webhook UI that allows you to configure mTLS on your webhook consumers](/img/use-the-api/webhook-mTLS-configuration.png)
5. Cliquez sur **Save** pour appliquer la configuration.

### Vérifier la signature du webhook

Une signature de webhook est votre moyen de vérifier que les messages sont envoyés par Codat et vous aide à éviter les attaques d'usurpation d'identité ou de relecture. Nous signons chaque webhook et ses métadonnées avec une clé de sécurité unique pour chaque point de terminaison et incluons des horodatages pour le moment où la tentative de message s'est produite.

Vous pouvez utiliser cette signature pour vérifier que le message provient réellement de Codat avant de le traiter. Pour effectuer la vérification, nous suggérons d'utiliser une bibliothèque appelée Svix.

#### Installer la bibliothèque

<Tabs groupId="language">

<TabItem value="nodejs" label="JavaScript">

##### NPM

```sh
npm install svix
```

##### Yarn

```sh
yarn add svix
```

</TabItem>

<TabItem value="python" label="Python">

```sh
pip install svix
```

</TabItem>

<TabItem value="csharp" label="C#">

```sh
dotnet add package Svix
```

</TabItem>

<TabItem value="go" label="Go">

```sh
go get github.com/svix/svix-webhooks/go
```

</TabItem>

<TabItem value="java" label="Java">

#### Gradle

Add this dependency to your project's build file:

```sh
implementation "com.svix:svix:0.x.y"
```

#### Maven

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.svix</groupId>
  <artifactId>svix</artifactId>
  <version>0.x.y</version>
</dependency>
```

</TabItem>

<TabItem value="rust" label="Rust">

```sh
svix = "0"
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

#### Gradle

Add this dependency to your project's build file:

```sh
implementation "com.svix.kotlin:svix-kotlin:0.x.y"
```

#### Maven

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>com.svix.kotlin</groupId>
  <artifactId>svix-kotlin</artifactId>
  <version>0.x.y</version>
</dependency>
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```sh
gem install svix
```

</TabItem>

<TabItem value="php" label="PHP">

```sh
composer require svix/svix
```

</TabItem>

<TabItem value="cli" label="CLI">

#### Homebrew

```sh
brew install svix/svix/svix
```

#### Scoop

```sh
scoop bucket add svix https://github.com/svix/scoop-svix.git
scoop install svix
```

</TabItem>

</Tabs>

#### Vérifier le webhook

Pour vérifier les webhooks entrants, récupérez d'abord la clé secrète de votre point de terminaison.

Dans le [Portail Codat](https://app.codat.io/monitor/events), naviguez vers **Monitor > Webhooks > Events**, cliquez sur le point de terminaison que vous souhaitez vérifier et copiez le **Signing secret** depuis la vue détaillée du point de terminaison.

![A fragment of the UI that highlights where to copy the signing secret](/img/use-the-api/0054-endpoint-detail-signing-secret.png)

Ensuite, vous devez transmettre la clé secrète, le corps de la requête et les en-têtes à la bibliothèque de vérification comme démontré ci-dessous.

:::info Utiliser le corps de requête brut

Vous devez utiliser le corps de requête brut lors de la vérification des webhooks car la signature cryptographique est très sensible aux changements.

Attention aux frameworks qui analysent la requête en JSON puis la convertissent en chaîne, car cela cassera également la vérification de signature.
:::

<Tabs groupId="language">

<TabItem value="nodejs" label="JavaScript">

```javascript
import { Webhook } from "svix";

const secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
const headers = {
  "webhook-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",
  "webhook-timestamp": "1614265330",
  "webhook-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
};
const payload = '{"test": 2432232314}';

const wh = new Webhook(secret);
// Throws on error, returns the verified content on success
const payloadAfterVerification = wh.verify(payload, headers);
```

</TabItem>

<TabItem value="python" label="Python">

```python
from svix.webhooks import Webhook

secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"

# These were all sent from the server
headers = {
  "webhook-id": "msg_p5jXN8AQM9LWM0D4loKWxJek",
  "webhook-timestamp": "1614265330",
  "webhook-signature": "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
}
payload = '{"test": 2432232314}'

wh = Webhook(secret)
# Throws on error, returns the verified content on success
payload = wh.verify(payload, headers)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
using Svix;
using System.Net;

// These were all sent from the server
var headers = new WebHeaderCollection();
headers.Set("webhook-id", "msg_p5jXN8AQM9LWM0D4loKWxJek");
headers.Set("webhook-timestamp", "1614265330");
headers.Set("webhook-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=");
var payload = "{\"test\": 2432232314}";

var wh = new Webhook("whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw/Je4ZJEGP1QFb");

// Throws on error
wh.Verify(payload, headers);
```

</TabItem>

<TabItem value="go" label="Go">

```go
import (
    svix "github.com/svix/svix-webhooks/go"
)

secret := "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw"

// These were all sent from the server
headers := http.Header{}
headers.Set("webhook-id", "msg_p5jXN8AQM9LWM0D4loKWxJek")
headers.Set("webhook-timestamp", "1614265330")
headers.Set("webhook-signature", "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=")

payload := []byte(`{"test": 2432232314}`)

wh, err := svix.NewWebhook(secret)
err := wh.Verify(payload, headers)
// returns nil on success, error otherwise
```

</TabItem>

<TabItem value="java" label="Java">

```java
import com.svix.Webhook;

String secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
HashMap<String, List<String>> headerMap = new HashMap<String, List<String>>();
headerMap.put("webhook-id", Arrays.asList("msg_p5jXN8AQM9LWM0D4loKWxJek"));
headerMap.put("webhook-timestamp", Arrays.asList("1614265330"));
headerMap.put("webhook-signature", Arrays.asList("v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="));
HttpHeaders headers = HttpHeaders.of(headerMap, BiPredicate<String, String>)

String payload = "{\"test\": 2432232314}";

Webhook webhook = new Webhook(secret);

webhook.verify(payload, headers)
// throws WebhookVerificationError exception on failure.
```

</TabItem>

<TabItem value="rust" label="Rust">

```rust
use svix::webhooks::Webhook;

let secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw".to_string();

let mut headers = http::header::HeaderMap::new();
headers.insert("webhook-id", "msg_p5jXN8AQM9LWM0D4loKWxJek");
headers.insert("webhook-timestamp", "1614265330");
headers.insert(
    "webhook-signature",
    "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=",
);

let payload = b"{\"test\": 2432232314}";

let wh = Webhook::new(&secret)?;
wh.verify(&payload, &headers)?;
// returns Ok on success, Err otherwise
```

</TabItem>

<TabItem value="kotlin" label="Kotlin">

```java
import com.svix.kotlin.Webhook

val secret = "whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw";

// These were all sent from the server
val headersMap = mapOf(
    "webhook-id" to listOf("msg_p5jXN8AQM9LWM0D4loKWxJek"),
    "webhook-timestamp" to listOf("1614265330"),
    "webhook-signature" to listOf("v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=")
)
val headers = HttpHeaders.of(headersMap) { _, _ -> true }

val payload = "{\"test\": 2432232314}";

val webhook = Webhook(secret);

webhook.verify(payload, headers)
// throws WebhookVerificationError exception on failure.
```

</TabItem>

<TabItem value="ruby" label="Ruby">

```ruby
require 'svix'

# These were all sent from the server
headers = {
  "webhook-id" => "msg_p5jXN8AQM9LWM0D4loKWxJek",
  "webhook-timestamp" => "1614265330",
  "webhook-signature" => "v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE="
}
payload = '{"test": 2432232314}'

wh = Svix::Webhook.new("whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw")
# Raises on error, returns the verified content on success
json = wh.verify(payload, headers)
```

</TabItem>

<TabItem value="php" label="PHP">

```php
// import using composers autoload
require_once('vendor/autoload.php');
// or manually
require_once('/path/to/svix/php/init.php');

// These were all sent from the server
$payload = '{"test": 2432232314}';
$header = array(
        'webhook-id'  => 'msg_p5jXN8AQM9LWM0D4loKWxJek',
        'webhook-timestamp' => '1614265330',
        'webhook-signature' => 'v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE=',
    );

// Throws on error, returns the verified content on success
$wh = new \Svix\Webhook('whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw');
$json = $wh->verify($payload, $header);
```

</TabItem>

<TabItem value="cli" label="CLI">

```sh
export SVIX_AUTH_TOKEN="AUTH_TOKEN"
svix verify --secret whsec_MfKQ9r8GKYqrTwjUPD8ILPZIo2LaLaSw --msg-id msg_p5jXN8AQM9LWM0D4loKWxJek --timestamp 1614265330 --signature v1,g0hM9SsE+OTPJTGt/tmIKtSyZlE3uFJELVlNIOLJ1OE= '{"test": 2432232314}'
```

</TabItem>

</Tabs>

## Transformer les propriétés des webhooks

Vous voudrez peut-être modifier les propriétés d'un webhook (par exemple, la méthode HTTP, l'URL cible et le schéma de message) avant qu'il ne soit envoyé à votre application pour mieux répondre à vos besoins. Pour ce faire, vous pouvez maintenant appliquer une transformation au webhook en suivant ces étapes :

1. Allez dans **Monitor > Webhooks > Events** dans le [Portail Codat](https://app.codat.io/monitor/events).
2. Sélectionnez le point de terminaison où vous souhaitez appliquer une transformation.
3. Dans la vue détaillée du point de terminaison, cliquez sur **Advanced**, puis sur **Edit transformations**.
   ![A fragment of the webhook transformations UI used to edit transformations](/img/use-the-api/webhooks-transformation-menu.png)
4. Dans le bloc de code affiché, ajoutez les modifications aux propriétés du webhook selon vos besoins, en retournant l'objet `webhook` à la fin.
   ![A fragment of the webhook transformations UI used to edit transformations](/img/use-the-api/webhooks-transformation-edit.png)
5. Cliquez sur **Save** et activez le drapeau **Enabled** pour appliquer la transformation.

#### Propriétés de l'objet webhook

Voici les propriétés de l'objet `webhook` que vous pouvez transformer pour répondre à vos besoins :

| Propriété | Type   | Description                                                                                                                                                                                               |
| --------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `method`  | string | La méthode HTTP utilisée pour communiquer avec votre application. Codat ne prend en charge que les méthodes `POST` (par défaut) ou `PUT`.                                                                |
| `url`     | string | L'URL du point de terminaison où le message sera envoyé.                                                                                                                                                 |
| `payload` | object | Un objet JSON représentant le schéma d'événement webhook complet. Il s'agit du schéma d'événement complet pour chaque type d'événement, et non seulement du composant `payload` des schémas de Codat. Vous pouvez le modifier selon vos besoins. |
| `cancel`  | bool   | Détermine s'il faut annuler l'envoi du webhook. Par défaut `false`. Les messages annulés apparaissent comme des envois réussis dans les journaux.                                                       |

#### Exemple : annuler les requêtes en utilisant les balises d'entreprise

Vous voudrez peut-être empêcher les notifications webhook pour des groupes spécifiques d'entreprises pour des raisons de conformité ou des règles commerciales. En utilisant les [balises d'entreprise](/using-the-api/managing-companies#add-metadata-to-a-company), vous pouvez marquer les entreprises et annuler les événements webhook pour celles ayant une balise spécifique en utilisant les transformations.

Dans cet exemple, les webhooks sont annulés pour les entreprises avec la balise `us-compliant` définie sur `true`.

```javascript
function handler(webhook) {
  if (webhook.payload.payload.referenceCompany.tags === undefined) {
    return webhook;
  }

  if (
    webhook.payload.payload.referenceCompany.tags["us-compliant"] === "true"
  ) {
    webhook.cancel = true;
  }

  // and return it
  return webhook;
}
```

---

## Lire ensuite

- [Types d'événements](/using-the-api/webhooks/event-types)
- [Guide de migration](/using-the-api/webhooks/migration-guide)
- [Dépannage](/using-the-api/webhooks/troubleshooting)
