import React, { useEffect, useState } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import RcTooltip from "rc-tooltip";

import "rc-tooltip/assets/bootstrap_white.css";
import "./tooltip-styles.scss";

const link = {
  textDecoration: "underline",
};

const Content = React.forwardRef(({ setContent, content, url, theme }, ref) => {
  if (typeof window !== undefined) {
    if (!window._cachedTerms) {
      window._cachedTerms = {};
    }
  }

  useEffect(() => {
    const JSONurl = `${url}.json`;
    if (!content) {
      if (!window._cachedTerms[JSONurl]) {
        fetch(JSONurl)
          .then((res) => res.json())
          .then((obj) => {
            setContent(obj);
            window._cachedTerms[JSONurl] = obj;
          });
      } else {
        setContent(window._cachedTerms[JSONurl]);
      }
    }
  }, [content, url]);
  return (
    <div className={`mytooltip ${theme}`} ref={ref}>
      {content ? (
        <>
          <h4>{content.metadata.title}</h4>
          <div
            dangerouslySetInnerHTML={{ __html: content.metadata.hoverText }}
          ></div>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
});

const Tooltip = (props) => {
  const { children, pathName } = props;
  const [content, setContent] = useState();

  const cleanSourcePath = pathName.replace(/\/$/, "");
  const cleanLinkPath = pathName.replace(/\/docs/, "");

  return (
    <BrowserOnly
      fallback={<div>The fallback content to display on prerendering</div>}
    >
      {() => (
        <RcTooltip
          placement="top"
          overlay={
            <Content
              url={cleanSourcePath}
              content={content}
              setContent={setContent}
              theme="white"
            />
          }
        >
          <a style={link} href={cleanLinkPath}>
            {children}
          </a>
        </RcTooltip>
      )}
    </BrowserOnly>
  );
};

export default Tooltip;
