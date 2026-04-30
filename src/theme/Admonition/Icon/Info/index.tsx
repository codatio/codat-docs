import React, {type ReactNode} from 'react';

export default function AdmonitionIconInfo(props: React.SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} {...props}>
      <rect width="256" height="256" fill="none" stroke="none"/>
      <circle cx="128" cy="128" r="96"/>
      <path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8"/>
      <circle cx="124" cy="84" r="12"/>
    </svg>
  );
}
