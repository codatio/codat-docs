import React, { useState, Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.scss";
import { integrations } from "./integrations";

const Integration = ({integration}) => {
  return (
    <div className={styles.integration}>
      <div>
        <img src={integration.img} className={styles.logo}/>

        <a href={integration.to}>{integration.name}</a>
      </div>

      {
        integration.tags?.length >= 1
          ? <div className="labels">{integration.tags.map(tag=><div className="label">{tag}</div>)}</div>
          : ''
      }
    </div>
  )
}

export const IntegrationsList = ({integrations}) => {
  if (integrations.length && integrations.length >= 1) {
    return (
      <div className={styles.integrationsList}>
        {
          integrations.map((integration, i) => {
            return <Integration key={i} integration={integration}/>
          })
        }
      </div>
    )
  }

  return (
    <div className={styles.zeroState}>No matching supported integrations found</div>
  )
}

const Integrations = ({type, search=true}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const relevantIntegrations = type ? integrations.filter(integration => integration.type === type) : integrations

  const filteredIntegrations = searchValue === ""
    ? relevantIntegrations
    : relevantIntegrations.filter(integration => integration.name.toLowerCase().includes(searchValue.toLowerCase()))

  const accountingIntegrations = filteredIntegrations.filter(integration => integration.type === "accounting")
  const bankingIntegrations = filteredIntegrations.filter(integration => integration.type === "banking")
  const commerceIntegrations = filteredIntegrations.filter(integration => integration.type === "commerce")
  const bankFeedsIntegrations = filteredIntegrations.filter(integration => integration.type === "bankfeeds")

  return (
    <div>
      { search && <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter an integration name..." /> }

      {
        accountingIntegrations.length > 0 &&
        <>
          <h2 className={styles.header}>Accounting</h2>

          <IntegrationsList integrations={accountingIntegrations}/>
        </>
      }

      {
        bankingIntegrations.length > 0 &&
        <>
          <h2 className={styles.header}>Banking</h2>

          <IntegrationsList integrations={bankingIntegrations}/>
        </>
      }

      {
        commerceIntegrations.length > 0 &&
        <>
          <h2 className={styles.header}>Commerce</h2>

          <IntegrationsList integrations={commerceIntegrations}/>
        </>
      }

      {
        bankFeedsIntegrations.length > 0 &&
        <>
          <h2 className={styles.header}>Bank feeds</h2>

          <IntegrationsList integrations={bankFeedsIntegrations}/>
        </>
      }
    </div>
  );
};

export default Integrations;
