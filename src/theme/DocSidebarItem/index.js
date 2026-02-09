import React from "react";
import DocSidebarItem from "@theme-original/DocSidebarItem";
import Translate from "@docusaurus/Translate";

export default function DocSidebarItemWrapper(props) {
  return (
    <>
      {!!props?.item?.customProps?.hr && <hr />}

      {!!props?.item?.customProps?.section && (
        <div className="menu-item-section-header">
          <Translate id={`sidebar.section.${props.item.customProps.section}`}>
            {props.item.customProps.section}
          </Translate>
        </div>
      )}

      <DocSidebarItem {...props} />
    </>
  );
}
