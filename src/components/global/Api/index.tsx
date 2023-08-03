import React, { useState, Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Navbar from "@theme/Navbar";
import Logo from "@theme/Logo";
import clsx from "clsx";

import styles from "./styles.module.scss";
import "./styles/stoplight.scss";

const LazyStoplight = React.lazy(() => import("../../page/api/Stoplight"));
const Fallback = (
  <div className={styles.stoplightFallback} />
);

const Api = ({ url, title="API reference"}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Layout title={title}>
      <div className={styles.apiNav}>
        <Logo />
        <Navbar />
      </div>

      <main>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          {
            menuOpen
            ? "Hide endpoints"
            : "Show all endpoints"
          }
        </div>

        <div className={clsx(styles.stoplightWrapper, !menuOpen && "menu-closed")}>
          <BrowserOnly>
            {() => (
              <Suspense fallback={Fallback}>
                <LazyStoplight apiDescriptionUrl={url} />
              </Suspense>
            )}
          </BrowserOnly>
        </div>
        
        <div className={clsx(styles.stoplightPlaceholder, "col")}><p>Our API reference is not supported at this screen size.</p></div>
      </main>
    </Layout>
  );
};

export default Api;
