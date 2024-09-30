---
title: "Data security"
description: "Our data security practices"
---

## Data at rest
This section details how we securely store data.

### Azure SQL databases
* Databases are encrypted using Transparent Data Encryption (TDE)
* Microsoft manages the full key lifecycle and encryption standards within Azure. AES-256 is used as part of this process. Please see [Transparent data encryption for SQL Database, SQL Managed Instance, and Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-tde-overview?view=azuresql&viewFallbackFrom=sql-server-ver16&tabs=azure-portal)🔗 for more information on this

#### Enterprise specific considerations
Enterprise customers have the option of dedicated databases which can facilitate customer specific encryption keys. 

* Encryption keys are stored in a Codat-managed Azure Key Vault with the option of client storage.
  * New versions of keys are generated at least every two years to meet cryptographic best practices. Please see [Azure Key Rotation](https://learn.microsoft.com/en-us/azure/key-vault/keys/how-to-configure-key-rotation)🔗 for further details
  * In the case of Codat managed, the key management lifecycle follows our current best practice approach
  * Previous versions of the keys are maintained for the duration of the backup retention policy to allow for recovery from backups
* All databases for a client share the same encryption key
* Automatic key rotation is enabled at the database level. The rotation is triggered when a new version of the key is detected, and will automatically be rotated within 24 hours
* Upon request or contract termination, Codat deletes the customer specific key within 5 working days (excluding weekends), thus rendering persisted data unreadable
  * This deletion can be confirmed by the client by requesting data from our API which will fail as the database is unreadable
* Please see [Transparent data encryption (TDE) with customer-managed keys at the database level](https://learn.microsoft.com/en-us/azure/azure-sql/database/transparent-data-encryption-byok-database-level-overview)🔗 for further information

### Azure blob storage
Data is stored in Azure blob storage on a temporary basis for the purposes of staging and support, this data is encrypted at rest through Storage Service Encryption. For more details on this please see [Azure Storage encryption for data at rest](https://learn.microsoft.com/en-us/azure/storage/common/storage-service-encryption)🔗.

Dependant on contract, backups may be protected using a customer dedicated key or through the usage of a managed Microsoft encryption key.

### Backups and redundancy
To ensure a continuous service, Codat follows a best practice data backup and redundancy methodology. 

This ensures that all backups are:
* Encrypted
* Follow our retention policy

## Data in transit
Codat enforces current best practice encryption mechanisms as part of all data transportation.

### HTTPS
All communication to codat.io mandates HTTPS (rather than HTTP) with best practice enforced. The report below provided by the independent third party SSL Labs attests to this configuration.

![Qualys SSL Labs Scan Report](qualys-ssl-report.png)
*Qualys SSL Labs Scan Report*

### Internal network traffic
All internal network traffic operates over SSL/TLS (HTTPS). 

### HTTP Strict Transport Security (HSTS)
At an application level, all HTTPS responses servicing requests (from the portal or API) include an HSTS header. 
 
## Data access control
As part of our data security posture, Codat enforced strict data access control. This includes:

* Principle of least privilege:
  * By default, people do not have access to production client data 
 * Break glass: 
  * Individuals have the ability to obtain break glass access to production for the purposes of issue investigation. Such access is time-bound, tied to a specific task and must be approved by an elected set of leadership
  * Any such access must be carried out through connection to a dedicated production VPN requiring 2FA and a compliant Codat provisioned device 
* Codat people device control:
  * Production data does not leave the production environment 
  * All Codat provisioned devices have full disk encryption

Access control is enforced through Azure RBAC and Active Directory. Full details on these features can be found on the [Microsoft Trust Centre](https://www.microsoft.com/en-us/trustcenter/)🔗.

## Secrets storage
Parts of the application require the persistence of secrets (such as tokens or credentials). These are treated with particular care and sensitivity including:
* Stored in Azure Key Vault
* Please see [Azure Key Vault Security](https://learn.microsoft.com/en-us/azure/key-vault/general/security-features)🔗 for more information
* Only accessible via specific break-glass access control

## Logging
Diagnostic information is persisted for the purposes of engineering investigation and support. No sensitive information or PII is logged.