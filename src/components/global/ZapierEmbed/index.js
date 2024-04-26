import React from "react";
import styles from './styles.module.scss';

import useScript from '../../../utils/useScript';  // Assuming the hook is saved in a file named useScript.js

const ZapierEmbed = () => {
  useScript("https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js");

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