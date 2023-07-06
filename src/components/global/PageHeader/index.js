import React from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

const PageHeader = ({className, title, text, img, children, icon}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.header}>
        <div className={styles.title}>
          {
            icon && 
            <div className={clsx("icon-wrapper product animated", styles.iconWrapper, className)}>
              <img
                src={icon}
                className="icon product"
              />
            </div>
          }
          <h1>{title}</h1>
        </div>

        {text && <p>{text}</p>}

        {children}
      </div>
      <img className={styles.heroImg} src={img}/>
    </div>
  )
}

export default PageHeader