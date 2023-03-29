import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const PageHeader = ({className, title, children, icon}) => {
  return (
    <>
      <div className={clsx(styles.wrapper, className)}>
        <div className={styles.header}>
          <div className={styles.title}>
            {
              icon && <img
              src={icon}
              className="icon"
            />
          }
            
            <h1>{title}</h1>
          </div>
          {children}
        </div>
      </div>

      <div className={clsx(styles.spacer, className)}>
        <h1>{title}</h1>

        {children}
      </div>
    </>
  )
}

export default PageHeader