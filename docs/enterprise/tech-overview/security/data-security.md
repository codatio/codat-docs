---
title: "Data security"
description: "Review the security practices that cover how we store data at rest and secure it in transit"
sidebar_label: "Data security"
---

:::tip Additional resources
View our latest compliance certificates and security and legal policies in our **[Trust Portal](https://trust.codat.io/)**.
:::

## Data at rest

In this section, we cover security principles that apply to the data we store in Azure's SQL databases and blob storage.

### Azure SQL databases

The databases are encrypted using Transparent Data Encryption (TDE). Microsoft manages the full key lifecycle and encryption standards within Azure using AES-256 as part of this process. 

See Microsoft's [Transparent data encryption for SQL Database, SQL Managed Instance, and Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-tde-overview?view=azuresql&viewFallbackFrom=sql-server-ver16&tabs=azure-portal)🔗 for more information.

#### Enterprise-specific encryption keys

Codat's enterprise clients have the option of using dedicated databases that can facilitate customer-specific encryption keys. Encryption keys are stored in a Codat-managed Azure Key Vault with the option of client storage. All databases for the same client share the same encryption key.

##### Key regeneration principles

* New versions of keys are generated at least every two years to meet cryptographic best practices.
* For Codat-managed vaults, the key management lifecycle follows our current best practice approach.
* Previous versions of the keys are maintained for the duration of the backup retention policy to allow for recovery from backups.
* Automatic key rotation is enabled at the database level. The rotation is triggered when a new version of the key is detected, and will automatically be rotated within 24 hours.

See [Configure cryptographic key auto-rotation in Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/keys/how-to-configure-key-rotation)🔗 for further details.

##### Key deletion principles

Upon request or contract termination, Codat deletes the customer-specific key within 5 working days excluding weekends. This renders persisted data unreadable. The client can confirm the deletion is complete by requesting data from our API, which will fail because the database will be unreadable.

See [Transparent data encryption (TDE) with customer-managed keys at the database level](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-byok-database-level-overview)🔗 for further information.

### Azure blob storage

Codat stores data in the Azure blob storage on a temporary basis for the purposes of staging and support. This data is encrypted at rest through Storage Service Encryption. 

See [Azure Storage encryption for data at rest](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption)🔗 for more details.

### Backups and redundancy

To ensure a continuous service, Codat follows a best practice data backup and redundancy methodology. As a result, all our backups are encrypted and follow our retention policy. 

Depending on the client's contract, backups may be protected using a dedicated customer key or through the usage of a managed Microsoft encryption key.

## Data in transit

In this section, we cover ways that Codat enforces current best practice encryption mechanisms as part of all data transportation.

### HTTPS

All communication to `codat.io` mandates HTTPS (not HTTP) with best practice enforced. The report results below provided by the independent third party [Qualys SSL Labs](https://www.ssllabs.com/ssltest/) attest to this configuration. 

### Internal network traffic

All internal network traffic operates over SSL/TLS (HTTPS). 

### HTTP Strict Transport Security

At an application level, all HTTPS responses servicing requests (from the portal or API) include an HTTP Strict Transport Security (HSTS) header. 
 
## Data access control

As part of our data security posture, Codat enforces strict data access control. This includes the following practices:

**1. Principle of least privilege**

    By default, people do not have access to production client data. 

**2. Break-glass access**

    Individuals have the ability to obtain break-glass access to production for the purposes of issue investigation. This access is time-bound, tied to a specific task, and must be approved by an elected set of leadership. It must be carried out through a connection to a dedicated production VPN that requires 2FA and a compliant Codat-provisioned device.

**3. Codat people device control**

    All Codat provisioned devices have full disk encryption, and production data does not leave the production environment.

Access control is enforced through Azure RBAC and Active Directory. You can find more details about these features on the [Microsoft Trust Center](https://www.microsoft.com/en-us/trustcenter/)🔗.

## Secrets storage

Parts of Codat's application require the persistence of secrets (such as tokens or credentials). These are treated with particular care and sensitivity: they are stored in the Azure Key Vault and are only accessible via specific break-glass access control. 

See [Azure Key Vault Security](https://learn.microsoft.com/en-us/azure/key-vault/general/security-features)🔗 for more information.

## Logging

Diagnostic information is persisted for the purposes of engineering investigation and support. No sensitive information or PII is logged.
