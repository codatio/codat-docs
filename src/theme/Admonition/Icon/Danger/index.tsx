import React, { type ReactNode } from "react";

export default function AdmonitionIconDanger(
  props: React.SVGProps<SVGSVGElement>,
): ReactNode {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      {...props}
    >
      <rect width="256" height="256" fill="none" stroke="none" />
      <path
        d="M164.45,32H91.55a8,8,0,0,0-5.66,2.34L34.34,85.89A8,8,0,0,0,32,91.55v72.9a8,8,0,0,0,2.34,5.66l51.55,51.55A8,8,0,0,0,91.55,224h72.9a8,8,0,0,0,5.66-2.34l51.55-51.55a8,8,0,0,0,2.34-5.66V91.55a8,8,0,0,0-2.34-5.66L170.11,34.34A8,8,0,0,0,164.45,32Z"
        strokeMiterlimit={10}
      />
      <line x1="128" y1="136" x2="128" y2="80" />
      <circle cx="128" cy="172" r="12" />
    </svg>
  );
}
