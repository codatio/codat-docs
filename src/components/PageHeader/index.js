import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";

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
  videoUrl,
  videoText,
}) => {
  const imgUrl = useBaseUrl(img);
  const iconUrl = useBaseUrl(icon);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.header}>
        <div className={styles.title}>
          {icon && (
            <div
              className={clsx(
                "icon-wrapper product animated",
                styles.iconWrapper,
                className,
              )}
            >
              <img src={iconUrl} className="icon product" alt="" />
            </div>
          )}
          <h1>{title}</h1>
        </div>

        {text && <p>{text}</p>}

        {children}

        {videoUrl && <BannerVideo text={videoText} url={videoUrl} />}
      </div>

      <img className={styles.heroImg} src={imgUrl} alt="" />
    </div>
  );
};

export default PageHeader;
