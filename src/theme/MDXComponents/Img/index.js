import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
function transformImgClassName(className) {
  return clsx(className, styles.img);
}
export default function MDXImg(props) {
  // Raw <img src="/img/..."> in MDX bypasses baseUrl, breaking any deploy
  // served from a subpath (e.g. PR previews); bundled/external srcs pass
  // through useBaseUrl untouched
  const src = useBaseUrl(props.src);
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      decoding="async"
      loading="lazy"
      {...props}
      src={src}
      className={transformImgClassName(props.className)}
    />
  );
}
