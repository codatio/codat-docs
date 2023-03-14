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
        integration.tag
          ? <div className={styles.tag}>{integration.tag}</div>
          : ''
      }
    </div>
  )
}

const IntegrationsList = ({integrations}) => {
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

const Integrations = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const filteredIntegrations = searchValue === ""
    ? integrations
    : integrations.filter(integration => integration.name.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <div>
      <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter an integration name..." />

      <h2 className={styles.header}>Accounting</h2>

      <IntegrationsList integrations={filteredIntegrations.filter(integration => integration.type === "accounting")}/>

      <h2 className={styles.header}>Banking</h2>
      
      <IntegrationsList integrations={filteredIntegrations.filter(integration => integration.type === "banking")}/>

      <h2 className={styles.header}>Commerce</h2>
      
      <IntegrationsList integrations={filteredIntegrations.filter(integration => integration.type === "commerce")}/>

      <h2 className={styles.header}>Bank feeds</h2>
      
      <IntegrationsList integrations={filteredIntegrations.filter(integration => integration.type === "bankfeeds")}/>
    </div>
  );
};

export default Integrations;
