import React from 'react';
import DocSidebarItem from '@theme-original/DocSidebarItem';

export default function DocSidebarItemWrapper(props) {
  return (
    <>
      {props?.item?.customProps?.hr === true && <hr/>}
      <DocSidebarItem {...props} />
    </>
  );
}
