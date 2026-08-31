'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-coral text-print-ink border-[2.5px] border-ink shadow-stamp hover:shadow-stamp-hover active:shadow-stamp-press',
        secondary: 'bg-paper text-ink border-[2.5px] border-ink shadow-stamp hover:shadow-stamp-hover active:shadow-stamp-press',
        ghost: 'bg-transparent text-ink hover:bg-paper-shade',
        coral: 'bg-coral text-print-ink border-[2.5px] border-ink shadow-stamp hover:shadow-stamp-hover active:shadow-stamp-press',
        mint: 'bg-mint text-print-ink border-[2.5px] border-ink shadow-stamp hover:shadow-stamp-hover active:shadow-stamp-press',
        cobalt: 'bg-cobalt text-print-ink border-[2.5px] border-ink shadow-stamp hover:shadow-stamp-hover active:shadow-stamp-press',
        yolk: 'bg-yolk text-print-ink border-[2.5px] border-ink shadow-stamp hover:shadow-stamp-hover active:shadow-stamp-press',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-md',
        md: 'px-6 py-3 text-md rounded-chunky',
        lg: 'px-8 py-4 text-lg rounded-chunky',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as a child element (e.g., Link) instead of button */
  asChild?: boolean
}

/**
 * Primary button component with AtomicBytes stamp shadow
 *
 * Features chunky ink-outlined buttons with stamp shadows that lift on hover
 * and press down on active. Supports all AtomicBytes accent colors as variants.
 *
 * @example
 * ```tsx
 * <Button variant="coral">Click me</Button>
 * <Button variant="secondary" size="lg">Large secondary</Button>
 * <Button asChild>
 *   <Link href="/foo">Link styled as button</Link>
 * </Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
