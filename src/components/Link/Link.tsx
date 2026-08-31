'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const linkVariants = cva(
  'inline-flex items-center gap-1 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'text-ink underline decoration-2 decoration-cobalt underline-offset-4 hover:text-cobalt',
        subtle: 'text-muted hover:text-ink',
        accent: 'text-coral hover:text-cobalt',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  /** Render as a child element instead of anchor */
  asChild?: boolean
}

/**
 * Link component
 *
 * Styled link with marker underline accent.
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        className={cn(linkVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Link.displayName = 'Link'
