import React from "react";
import DocSidebarItem from "@theme-original/DocSidebarItem";

export default function DocSidebarItemWrapper(props) {
  const hr = !!props?.item?.customProps?.hr;
  const section = props?.item?.customProps?.section;

  return (
    <>
      {(hr || section) && (
        <li>
          {hr && <hr />}

          {!!section && (
            <div className="menu-item-section-header">{section}</div>
          )}
        </li>
      )}

      <DocSidebarItem {...props} />
    </>
  );
}
