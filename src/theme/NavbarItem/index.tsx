import OriginalNavbarItem from "@theme-original/NavbarItem";
import React from "react";
import NavbarIconLink from "@theme/NavbarItem/NavbarIconLink";
import NavbarSeparator from "@theme/NavbarItem/NavbarSeparator";
import NavbarCta from "@theme/NavbarItem/NavbarCta";

import { track } from '@vercel/analytics';

const CustomNavbarItemComponents = {
  iconLink: () => NavbarIconLink,
  separator: () => NavbarSeparator,
  cta: () => NavbarCta,
} as const;

export default function NavbarItem(props) {
  const { type, ...rest } = props

  const onTrack = () => {
    if(props.label==='Sign in') {
      track('Sign in')
    }
  }

  if (Object.keys(CustomNavbarItemComponents).includes(type)) {
    const Component = CustomNavbarItemComponents[type]();
    return <Component {...rest} onClick={onTrack}/>;
  }
  
  return <OriginalNavbarItem onClick={onTrack} type={type} {...rest} />;
}
