import type { SVGProps } from "react"

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Layered component squares representing a template */}
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path d="M17.5 15.5v5" />
      <path d="M15 18h5" />
    </svg>
  )
}
