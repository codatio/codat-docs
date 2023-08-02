import React from "react";
import clsx from "clsx";

import { ModalController } from "../Modal";

import styles from "./styles.module.scss";

const BannerVideo = ({text, url}) => {
  return <ModalController text={text}>
    <iframe 
      src={url}
      width="560" 
      height="315" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
    />
  </ModalController>
};

const PageHeader = ({className, title, text, img, children, icon, videoUrl, videoText}) => {
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

        { videoUrl && <BannerVideo text={videoText} url={videoUrl}/> }
      </div>

      <img className={styles.heroImg} src={img}/>
    </div>
  )
}

export default PageHeader