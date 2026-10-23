import React, { useEffect, useState } from "react";

import { useLocation } from "@docusaurus/router";
import { usePluginData } from "@docusaurus/useGlobalData";
import OriginalTOC from "@theme-original/TOC";
import EditThisPage from "@theme/EditThisPage";
import { PrismicRichText } from "@prismicio/react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function TOC(props) {
  const { toc, editUrl } = props;

  const isEmpty = toc?.length <= 0;
  if (isEmpty) return null;

  // Each label carries a hidden semibold twin so the active item's weight
  // change never alters its line breaks (see .toc-label in _toc.scss)
  const tocWithGhosts = toc.map((item) => ({
    ...item,
    value: `<span class="toc-label"><span class="toc-label__text">${item.value}</span><span class="toc-label__ghost" aria-hidden="true">${item.value}</span></span>`,
  }));

  return (
    <div className="toc-wrapper">
      <h2>On this page</h2>
      <OriginalTOC {...props} toc={tocWithGhosts} />
      <EditThisPage editUrl={editUrl} />
    </div>
  );
}
