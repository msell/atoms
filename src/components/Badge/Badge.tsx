import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-pill border-[2px] border-ink px-3 py-1 text-xs font-medium tracking-label uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-focus focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-paper text-ink',
        coral: 'bg-coral text-print-ink',
        mint: 'bg-mint text-print-ink',
        cobalt: 'bg-cobalt text-print-ink',
        yolk: 'bg-yolk text-print-ink',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component
 *
 * Small pill-shaped label for status, tags, or metadata.
 */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
