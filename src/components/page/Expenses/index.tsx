import React, { useState, Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "../../global/Integrations/styles.module.scss";
import { integrations } from "../../global/Integrations/integrations";

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
  return (
    <div>

      <h2 className={styles.header}>Supported Integrations</h2>

      <IntegrationsList integrations={integrations.filter(integration => integration.type === "Sync For Expenses")}/>
    </div>
  );
};

export default Integrations;
