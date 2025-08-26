import React from "react";
import Link from "@docusaurus/Link";
import { trackLinkClick } from "../../utils/amplitude";

export default function MDXA(props) {
  const handleClick = () => {
    if (props.href) {
      const isExternal =
        props.href.startsWith("http") || props.href.startsWith("//");
      const isDownload =
        props.href.includes("download") ||
        props.href.endsWith(".pdf") ||
        props.href.endsWith(".zip") ||
        props.href.endsWith(".doc") ||
        props.href.endsWith(".docx") ||
        props.href.endsWith(".xlsx");

      let linkType = "internal";
      if (isExternal) linkType = "external";
      if (isDownload) linkType = "download";

      trackLinkClick(props.href, props.children || props.title, linkType, {
        component: "mdx_link",
      });
    }
  };

  return <Link {...props} onClick={handleClick} />;
}
