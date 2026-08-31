import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes with proper conflict resolution
 *
 * Uses clsx for conditional classes and tailwind-merge to handle
 * conflicting Tailwind utilities (later classes win).
 *
 * @example
 * ```tsx
 * cn('px-4 py-2', 'px-6') // → 'py-2 px-6'
 * cn('text-red-500', condition && 'text-blue-500') // conditional
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
