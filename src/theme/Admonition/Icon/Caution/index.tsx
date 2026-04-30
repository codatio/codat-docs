import React, {type ReactNode} from 'react';

export default function AdmonitionIconCaution(props: React.SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} {...props}>
      <rect width="256" height="256" fill="none" stroke="none"/>
      <circle cx="128" cy="128" r="96" strokeMiterlimit={10}/>
      <line x1="128" y1="136" x2="128" y2="80"/>
      <circle cx="128" cy="172" r="12"/>
    </svg>
  );
}
