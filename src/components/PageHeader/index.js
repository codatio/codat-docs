import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";

import { ModalController } from "../Modal";

import styles from "./styles.module.scss";

const BannerVideo = ({ text, url }) => {
  return (
    <ModalController text={text} className={styles.fullWidth}>
      <div className={styles.videoContainer}>
        <iframe
          src={url}
          className={styles.videoFrame}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
    </ModalController>
  );
};

const PageHeader = ({
  className,
  title,
  text,
  img,
  children,
  icon,
  iconDark,
  videoUrl,
  videoText,
}) => {
  const { colorMode } = useColorMode();
  // icon/img arrive as absolute paths from frontmatter (banner_image etc.),
  // which bypass baseUrl and break deploys served from a subpath
  const { withBaseUrl } = useBaseUrlUtils();
  const resolvedIcon = withBaseUrl(
    iconDark && colorMode === "dark" ? iconDark : icon,
  );

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.header}>
        <div className={styles.title}>
          {resolvedIcon && (
            <div
              className={clsx(
                "icon-wrapper product animated",
                styles.iconWrapper,
                className,
              )}
            >
              <img src={resolvedIcon} className="icon product" />
            </div>
          )}
          <h1>{title}</h1>
        </div>

        {text && <p>{text}</p>}

        {children}

        {videoUrl && <BannerVideo text={videoText} url={videoUrl} />}
      </div>

      {img && <img src={withBaseUrl(img)} className={styles.heroImg} alt="" />}
    </div>
  );
};

export default PageHeader;
