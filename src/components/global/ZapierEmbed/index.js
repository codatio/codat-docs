import React from "react";
import styles from './styles.module.scss';

const ZapierEmbed = () => {
  return (
    <div className={styles.zapierWrapper}>
      <script type="module" src="https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js"/>
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