---
title: "Gérer les entreprises avec notre API"
sidebar_label: Via API
description: "Apprenez à créer et gérer les entreprises, leurs connexions et leurs données via l'API"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Intégrer vos utilisateurs

Vos utilisateurs ou clients sont des [entreprises](/core-concepts/companies). Pour accéder à leurs données, vous devrez les intégrer.

Pour intégrer un nouvel utilisateur ou client :

1. Créer une entreprise
2. Autoriser l'accès aux sources de données
3. Lire les données

Vous pouvez intégrer les utilisateurs :

- Lorsqu'ils créent un compte avec votre service pour la première fois
- Au premier moment où vous souhaitez récupérer leurs données financières

### Créer une entreprise

Pour créer une nouvelle entreprise, utilisez l'endpoint [Créer une entreprise](/platform-api#/operations/create-company) et fournissez un nom pour l'entreprise dans le corps de la requête. Le paramètre `name` est obligatoire pour exécuter cette requête. Vous pouvez également fournir une `description` pour stocker des informations supplémentaires sur l'entreprise.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.create({
    name: "Toft stores",
    description: "Need a loan for refurb."
}).then((companyCreatedRes: CreateCompanyResponse) => {
    if (companyCreatedRes.statusCode == 200) {
        console.log(companyCreatedRes.company.id, companyCreatedRes.company.name)
    }
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = shared.CompanyRequestBody(
    name='Toft stores',
    description='Need a loan for refurb.'
    )

company_created_res = platform_client.companies.create(req)
print(company_created_res.company.id, company_created_res.company.name)
```

</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.CreateAsync(new CompanyRequestBody() {
    Name = "Toft stores",
    Description = "Need a loan for refurb."
  });

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation('{CompanyId} {CompanyName}', company.Id, company.Name);
}
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()

companyCreatedRes, err := platformClient.Companies.Create(ctx, shared.CompanyRequestBody{
    Name: "Toft stores",
    Description: "Need a loan for refurb."
})

if err != nil {
    log.Fatal(err)
}

if companyCreatedRes.Company != nil {
    fmt.Println("%s %s", companyCreatedRes.Company.Id, companyCreatedRes.Company.Name)
}
```

</TabItem>

<TabItem value="java" label="Java">

```go
CompanyRequestBody req = CompanyRequestBody.builder()
    .name("Toft stores")
    .description("Need a loan for refurb.")
    .build();

CreateCompanyResponse companyCreatedRes = platformClient.companies().create()
    .request(req)
    .call();

if (companyCreatedRes.company().isPresent()) {
    // handle response
}
```

</TabItem>

</Tabs>

:::caution Conservez l'identifiant de l'entreprise

La propriété `id` que vous recevez dans la réponse est l'identifiant unique Codat pour cette entreprise. **Nous vous recommandons de le conserver pour référence future.**
:::

:::note Nom de l'entreprise

Le nom de l'entreprise vous aide à identifier l'entreprise dans le Portail Codat et n'a pas besoin d'être unique. Assurez-vous d'[éviter les caractères interdits](/core-concepts/companies).
:::

### Ajouter des métadonnées à une entreprise

Vous pouvez enrichir le profil d'une entreprise avec des informations supplémentaires en utilisant l'objet `tags`. Ces étiquettes offrent des moyens flexibles de stocker des métadonnées.

Par exemple, vous pouvez définir des associations de clés étrangères, définir des régions opérationnelles ou enregistrer des détails spécifiques sur les services financiers qu'une entreprise a demandés.

Chaque entreprise peut avoir jusqu'à 10 étiquettes que vous pouvez ajouter en utilisant l'endpoint [Créer une entreprise](/platform-api#/operations/create-company) ou lors de la mise à jour de l'entreprise via l'endpoint [Mettre à jour une entreprise](/platform-api#/operations/update-company).

:::tip Utiliser les étiquettes avec les webhooks

Vous pouvez utiliser l'objet `tags` pour filtrer les entreprises vers des consommateurs de webhooks spécifiques. Pour en savoir plus, consultez [Filtrer les webhooks par étiquettes d'entreprise](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

:::

Par exemple, voici comment vous pouvez ajouter des étiquettes qui définissent un identifiant défini par l'utilisateur (UID) et une région d'exploitation :

<Tabs>

<TabItem value="create-company" label="Créer une entreprise">

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.create({
    name: "Toft stores",
    tags: {
      uid: "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      region: "uk"
    }
}).then((companyCreatedRes: CreateCompanyResponse) => {
    if (companyCreatedRes.statusCode == 200) {
        console.log(companyCreatedRes.company.id, companyCreatedRes.company.name)
    }
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = shared.CompanyRequestBody(
  name='Toft stores',
  tags={
    'uid': 'cust_1MtJUT2eZvKYlo2CNaw2HvEv',
    'region': 'uk'
  }
)

company_created_res = platform_client.companies.create(req)
print(company_created_res.company.id, company_created_res.company.name)
```

</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.CreateAsync(new CompanyRequestBody() {
    Name = "Toft stores",
    Tags = new Dictionary<string, string>(){
      ["uid"] = "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      ["region"] = "uk"
    }
});

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation('{CompanyId} {CompanyName}', company.Id, company.Name);
}
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()

companyCreatedRes, err := platformClient.Companies.Create(ctx, shared.CompanyRequestBody{
    Name: "Toft stores",
    Tags: map[string]string{
      "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      "region": "uk"
    }
})

if err != nil {
    log.Fatal(err)
}

if companyCreatedRes.Company != nil {
    fmt.Println("%s %s", companyCreatedRes.Company.Id, companyCreatedRes.Company.Name)
}
```

</TabItem>

<TabItem value="java" label="Java">

```java
CompanyRequestBody req = CompanyRequestBody.builder()
    .name("Toft stores")
    .tags(
      java.util.Map.ofEntries(
        entry("uid", "cust_1MtJUT2eZvKYlo2CNaw2HvEv"),
        entry("region", "uk")
      )
    )
    .build();

CreateCompanyResponse companyCreatedRes = platformClient.companies().create()
    .request(req)
    .call();

if (companyCreatedRes.company().isPresent()) {
    // handle response
}
```

</TabItem>

</Tabs>

</TabItem>

<TabItem value="update-company" label="Mettre à jour une entreprise">

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
platformClient.companies.update({
  companyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  companyRequestBody: {
    name: "Toft stores",
    tags: {
      uid: "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      region: "uk"
    }
  }
}).then((companyUpdatedRes: UpdateCompanyResponse) => {
    if (companyUpdatedRes.statusCode == 200) {
        console.log(companyUpdatedRes.company.id, companyUpdatedRes.company.name)
    }
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
req = shared.CompanyRequestBody(
  name='Toft stores',
  tags={
    'uid': 'cust_1MtJUT2eZvKYlo2CNaw2HvEv',
    'region': 'uk'
  }
)

company_updated_res = platform_client.companies.update(
    request=operations.UpdateCompanyRequest(
        company_id='8a210b68-6988-11ed-a1eb-0242ac120002',
        company_request_body=req
    )
)
print(company_updated_res.company.id, company_updated_res.company.name)
```

</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyCreatedRes = await platformClient.Companies.UpdateAsync(new UpdateCompanyRequest() {
  CompanyId: "8a210b68-6988-11ed-a1eb-0242ac120002",
  CompanyRequestBody = new CompanyRequestBody() {
    Name = "Toft stores",
    Tags = new Dictionary<string, string>(){
      ["uid"] = "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      ["region"] = "uk"
    }
  }
});

if(companyCreatedRes.Company != null) {
    var company = companyCreatedRes.Company;
    logger.LogInformation('{CompanyId} {CompanyName}', company.Id, company.Name);
}
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()

companyUpdatedRes, err := platformClient.Companies.Create(ctx, operations.UpdateCompanyRequest{
  CompanyID: "8a210b68-6988-11ed-a1eb-0242ac120002",
  CompanyRequestBody: shared.CompanyRequestBody{
    Name: "Toft stores",
    Tags: map[string]string{
      "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv",
      "region": "uk"
    }
  }
})

if err != nil {
    log.Fatal(err)
}

if companyUpdatedRes.Company != nil {
    fmt.Println("%s %s", companyUpdatedRes.Company.Id, companyUpdatedRes.Company.Name)
}
```

</TabItem>

<TabItem value="java" label="Java">

```java
UpdateCompanyRequest req = UpdateCompanyRequest.builder()
    .companyId("8a210b68-6988-11ed-a1eb-0242ac120002")
    .companyRequestBody(CompanyRequestBody.builder()
        .name("Bank of Dave")
        .tags(
            java.util.Map.ofEntries(
              entry("uid", "cust_1MtJUT2eZvKYlo2CNaw2HvEv"),
              entry("region", "uk")
            )
        ).build()
    )
    .build();

UpdateCompanyResponse companyUpdatedRes = platformClient.companies().update()
    .request(req)
    .call();

if (companyUpdatedRes.company().isPresent()) {
    // handle response
}
```

</TabItem>

</Tabs>

</TabItem>

</Tabs>

:::caution Mise à jour d'une entreprise avec des étiquettes existantes

Si vous incluez un objet `tags` `null` ou vide dans la requête de l'endpoint [Mettre à jour une entreprise](/platform-api#/operations/update-company), toutes les étiquettes existantes pour cette entreprise seront supprimées. Pour conserver les étiquettes existantes, assurez-vous de les inclure dans la mise à jour.

:::

#### Filtrer les entreprises par métadonnées

Une fois que vous avez enrichi l'entreprise avec des métadonnées supplémentaires sous forme d'étiquettes, vous pouvez les utiliser pour le filtrage. Cela vous permet de récupérer des entreprises en fonction de critères spécifiques, comme trouver une entreprise spécifique par identifiant client ou récupérer un groupe d'entreprises partageant la même étiquette.

Pour ce faire, utilisez le paramètre de requête `tags` sur l'endpoint [Lister les entreprises](/platform-api#/operations/list-companies). Le paramètre de requête `tags` utilise le même langage de requête que les paramètres de requête de Codat. En savoir plus sur les requêtes dans [Interroger les données](/using-the-api/querying).

Voici un exemple de requête qui retourne une entreprise spécifique par identifiant client :

<Tabs>

<TabItem value="nodejs" label="TypeScript">

```javascript
const result = await platformClient.companies.list({
  tags: `uid=${customerId}`,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
res = platform_client.companies.list(
    request=operations.ListCompaniesRequest(
        tags=f'uid={customerId}'
    )
)
```

</TabItem>

<TabItem value="csharp" label="C#">

```c#
var res = await platformClient.Companies.ListAsync(new() {
    Tags = $"uid={customerId}",
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
res, err := platformClient.Companies.List(ctx, operations.ListCompaniesRequest{
    Tags: platform.String(fmt.Sprintf("uid=%d", customerId)),
})
```

</TabItem>

<TabItem value="java" label="Java">

```java
ListCompaniesRequest req = ListCompaniesRequest.builder()
  .tags(String.format("uid=%d", customerId))
  .build();

ListCompaniesResponse res = platformClient.companies().list()
  .request(req)
  .call();
```

</TabItem>

</Tabs>

### Autoriser l'accès aux données de l'entreprise

Une fois que vous avez créé l'entreprise, celle-ci devra vous donner la permission de lire ses données à partir d'une source donnée, comme son logiciel comptable. Il existe plusieurs approches pour ce faire, mais pour simplifier, nous avons couvert uniquement notre approche [lien hébergé](/auth-flow/authorize-hosted-link) prête à l'emploi.

Envoyez l'utilisateur vers l'URL `redirect` retournée à l'étape précédente. Il sera dirigé vers [Link](/auth-flow/authorize-hosted-link) où il pourra sélectionner son logiciel comptable et compléter le processus de liaison.

Une fois que l'utilisateur a complété le flux Link, la plateforme Codat le redirigera vers l'URL de redirection que vous avez configurée dans **Paramètres > Flux d'authentification > Link** dans le Portail Codat. Cette URL peut inclure le `companyId` Codat ainsi que tout autre paramètre de requête personnalisé.

:::note Paramètres de redirection

Pour plus d'informations sur la configuration de votre URL de redirection, consultez [ce document](/auth-flow/customize/set-up-redirects).
:::

Une fois que votre utilisateur est redirigé vers la page d'URL de redirection, il pourra autoriser l'accès à ses données. Une fois que c'est réussi, le processus de liaison est terminé et ses données peuvent être lues.

## Réautoriser l'accès

Occasionnellement, les connexions de données d'une entreprise Codat passeront à l'état _désautorisé_. Cela indique que le lien de Codat vers la plateforme n'est plus valide et que vous ne pourrez plus mettre en file d'attente de synchronisations de données supplémentaires pour cette connexion. Vous pourrez toujours interroger les données précédemment récupérées de la plateforme.

Les connexions de données peuvent devenir _désautorisées_ lorsque l'utilisateur [révoque l'accès](/core-concepts/connections#disconnect-a-data-connection-to-revoke-your-access-to-a-data-source) à son logiciel comptable ou en raison de limitations de la plateforme, comme la période d'accès limitée de Xero pour les entreprises non partenaires.

Pour vous permettre d'actualiser les données de l'entreprise, vous devrez demander à l'utilisateur de compléter à nouveau le flux d'authentification dans Link.

:::caution Reliaison et coûts d'utilisation

La création d'une nouvelle entreprise peut entraîner la lecture de données supplémentaires depuis la plateforme et est susceptible d'engendrer des coûts d'utilisation supplémentaires.
:::

### Rediriger l'utilisateur pour compléter le flux d'authentification

Obtenez une URL `redirect` pour l'entreprise en suivant le processus [ici](/auth-flow/authorize-hosted-link). Envoyez l'utilisateur vers l'URL `redirect`. Il sera invité à sélectionner son logiciel comptable et à compléter le processus de liaison en utilisant le [flux Link](/auth-flow/overview).

Une fois que l'utilisateur a terminé le flux Link, il sera redirigé vers l'URL de redirection, comme décrit [précédemment dans ce guide](/using-the-api/managing-companies#redirect-the-user). À ce stade, le processus de réautorisation est terminé et ses données ont recommencé à se synchroniser.

## Supprimer des entreprises

Vous pouvez supprimer une entreprise et ses données en utilisant l'endpoint [Supprimer une entreprise](/platform-api#/operations/create-company).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const companyDeleteResponse = await platformClient.companies.delete({
  companyId: companyCreatedRes.company.id,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
company_delete_response = platform_client.companies.delete(
  operations.DeleteCompanyRequest(
    company_id=company_created_res.company.id,
  )
)
```

</TabItem>

<TabItem value="csharp" label="C#">

```c#
var companyDeleteResponse = await platformClient.Companies.DeleteAsync(new(){
    CompanyId = companyCreatedRes.Company.Id,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
companyDeleteResponse, err := platformClient.Companies.Delete(ctx, operations.DeleteCompanyRequest{
    CompanyID: companyCreatedRes.Company.ID,
})
```

</TabItem>

</Tabs>

:::tip Récapitulatif
Vous avez appris :

- Comment créer une entreprise et autoriser l'accès à ses données
- Les bases de la lecture des données
- Comment gérer les entreprises
  :::

---

## À lire ensuite

- [Obtenir des données](/using-the-api/get-data)
- [Créer, mettre à jour et supprimer des données](/using-the-api/push)
- [Filtrer les webhooks par étiquettes d'entreprise](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags)
