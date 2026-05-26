import React, { type ReactNode } from "react";

export default function AdmonitionIconNote(
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
      <line x1="96" y1="128" x2="160" y2="128" />
      <line x1="96" y1="160" x2="160" y2="160" />
      <path d="M48,40H208a0,0,0,0,1,0,0V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40A0,0,0,0,1,48,40Z" />
      <line x1="80" y1="24" x2="80" y2="56" />
      <line x1="128" y1="24" x2="128" y2="56" />
      <line x1="176" y1="24" x2="176" y2="56" />
    </svg>
  );
}
