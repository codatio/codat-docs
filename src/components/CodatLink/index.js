import React, { useEffect, useState } from "react";

import { initializeCodatLink } from "@codat/sdk-link-types";

import styles from './styles.module.scss';

export const CodatLink = (props) => {
  const [componentMount, setComponentMount] = useState(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      initializeCodatLink(target, props);
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal} ref={setComponentMount}/>
    </div>
  );
};