import React from "react";
import styles from './styles.module.scss';

// Load JS
const script = document.createElement("script");
script.type = "module";
script.src = "https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js";
document.head.appendChild(script);

// Load CSS
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css";
document.head.appendChild(stylesheet);

const ZapierEmbed = () => {
  return (
    <div className={styles.zapierWrapper}>
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