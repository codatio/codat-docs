import React, { useState, Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.scss";
import { allIntegrations } from "./integrations";

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

export const IntegrationsList = (props) => {
  const { sourceType, filter, searchString, integrations=allIntegrations } = props

  const validIntegrations = integrations
    .filter(integration => !searchString || integration.name.toLowerCase().includes(searchString.toLowerCase()))
    .filter(integration => !sourceType || integration.sourceType === sourceType)
    .filter(integration => !filter || filter.find(intName => integration.name === intName))

  if (validIntegrations?.length >= 1) {
    return (
      <div className={styles.integrationsList}>
        {
          validIntegrations.map((integration, i) => {
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

const Integrations = (props) => {
  const { sourceType, filter, search=true, integrations=allIntegrations } = props
  
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = event => {
    const { value } = event.target;
    setSearchValue(value);
  };

  return (
    <div>
      { search && <input className={styles.search} value={searchValue} onChange={handleOnChange} type="text" placeholder="Enter an integration name..." /> }

      {
        integrations?.length > 0 &&
        <>
          <h2 className={styles.header}>Accounting</h2>

          <IntegrationsList sourceType="accounting"/>
        </>
      }

      {
        integrations?.length > 0 &&
        <>
          <h2 className={styles.header}>Banking</h2>

          <IntegrationsList sourceType="banking"/>
        </>
      }

      {
        integrations?.length > 0 &&
        <>
          <h2 className={styles.header}>Commerce</h2>

          <IntegrationsList sourceType="commerce"/>
        </>
      }

      {
        integrations?.length > 0 &&
        <>
          <h2 className={styles.header}>Bank feeds</h2>

          <IntegrationsList sourceType="bankfeeds"/>
        </>
      }
    </div>
  );
};

export default Integrations;
