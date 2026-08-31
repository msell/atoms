import type { SVGProps } from 'react'

export interface Starburst8Props extends SVGProps<SVGSVGElement> {
  /** Fill color - defaults to coral */
  fillColor?: string
  /** Stroke color - defaults to ink */
  strokeColor?: string
}

/**
 * Eight-point starburst icon
 *
 * Chunky coral starburst with ink outline from the AtomicBytes design system.
 *
 * @example
 * ```tsx
 * <Starburst8 className="w-16 h-16" />
 * <Starburst8 fillColor="var(--mint)" strokeColor="var(--ink)" />
 * ```
 */
export function Starburst8({
  fillColor = 'var(--coral)',
  strokeColor = 'var(--ink)',
  ...props
}: Starburst8Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      aria-labelledby="starburst8-title starburst8-desc"
      {...props}
    >
      <title id="starburst8-title">Eight-point starburst</title>
      <desc id="starburst8-desc">Chunky coral starburst with ink outline.</desc>
      <g fill={fillColor} stroke={strokeColor} strokeWidth="2" strokeLinejoin="round">
        <path d="M32 6 L35.2 24.8 L52 16 L39.2 28.8 L58 32 L39.2 35.2 L52 48 L35.2 39.2 L32 58 L28.8 39.2 L16 48 L24.8 35.2 L6 32 L24.8 28.8 L16 16 L28.8 24.8 Z" />
      </g>
    </svg>
  )
}
