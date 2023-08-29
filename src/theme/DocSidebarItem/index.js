import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItemWrapper(props) {
  return (
    <>
      {!!props?.item?.customProps?.hr && <hr/>}

      {
        !!props?.item?.customProps?.section && 
        <div className="menu-item-section-header">
          {props.item.customProps.section}
        </div>
      }

      <DocSidebarItem {...props} />
    </>
  );
}
