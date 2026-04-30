import React, {type ReactNode} from 'react';

export default function AdmonitionIconTip(props: React.SVGProps<SVGSVGElement>): ReactNode {
  return (
    <svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} {...props}>
      <rect width="256" height="256" fill="none" stroke="none"/>
      <line x1="88" y1="232" x2="168" y2="232"/>
      <path d="M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z"/>
      <path d="M136,56c20,3.37,36.61,20,40,40"/>
    </svg>
  );
}
