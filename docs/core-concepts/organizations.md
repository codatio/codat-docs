---
title: "Organizations"
description: "Your customer within Codat"
tags:
  - Core concept
---

### What is an organization

An organization is group of companies identified when a customer links their software packages.

Companies within an organization may or may not be related. 

### What's the relationship between organizations, companies and data connections?

```mermaid
erDiagram
    Organization ||--o{ Company : creates
    Company ||--o{ Connection : links
```

### How do I use an organization?

#### Link flow
```mermaid
sequenceDiagram
    participant smb as SMB
    participant app as Application
    participant codat as Codat

    smb ->> app: SMB starts use case sign up
    app ->> codat: Create organization
    codat -->> app: organization ID

    app -->> app: Pass organization ID to Embedded Link

    app ->> smb: Embedded Link presented

    smb -->> codat: Links companies

    codat ->> app: Organization linked webhook (e.g. connection status changed)
```

1. Embed Link into your front end application
2. Create organization
3. Pass organization ID to Link
4. Customer links software platforms via Link
5. Access an organization via our `GET /organization` endpoint
6. Use company IDs and data connection IDs to access data

#### Accessing organization data

```mermaid
sequenceDiagram
    participant app as Application
    participant codat as Codat

    app ->> codat: List organizations (filter by org. ID)
    codat -->> app: organizations
    
    loop For each company
        alt Is pull
            app->>codat: List dataType
            codat->>app: dataType
        else Is push include data connection
            app->>codat: Post dataType
            codat->>app: pushOperationKey
        end
    end
```

1. Get organization
2. Loop through companies
2. Pass company ID and sometimes connection ID to relevant data endpoint
