import React from "react";
import styles from './styles.module.scss';

// Load JS
import script from "https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js";
//import "https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css";

const ZapierEmbed = () => {
  return (
    <div className={styles.zapierWrapper}>
      <link rel="stylesheet" href="https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css"/>
      <zapier-zap-templates
        client-id="bqKPWf4ag1p6YV7hAvRLDMBxzKUYJntEONiR3GIZ"
        theme="light"
        apps="codat"
        create-without-template="hide"
        limit={5}
        use-this-zap="show"
      />
    </div>
  );
}

export default ZapierEmbed