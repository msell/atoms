import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

/**
 * AtomicBytes Tailwind CSS preset
 *
 * Extends Tailwind defaults with AtomicBytes design tokens.
 * Import tokens.css in your app to use these CSS variables.
 *
 * @example
 * ```js
 * // tailwind.config.js
 * import atomicbytesPreset from '@atomicbytes/atoms/tailwind.preset'
 *
 * export default {
 *   presets: [atomicbytesPreset],
 *   content: ['./src/**\/*.{ts,tsx}']
 * }
 * ```
 */
const atomicbytesPreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        // AtomicBytes brand colors (CSS variables from tokens.css)
        paper: 'var(--paper)',
        'paper-shade': 'var(--paper-shade)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        coral: 'var(--coral)',
        mint: 'var(--mint)',
        cobalt: 'var(--cobalt)',
        yolk: 'var(--yolk)',
        surface: 'var(--surface)',
        'surface-inset': 'var(--surface-inset)',

        // Print constants
        'print-ink': 'var(--print-ink)',
        'print-paper': 'var(--print-paper)',

        // Code colors
        'code-bg': 'var(--code-bg)',
        'code-fg': 'var(--code-fg)',
        'code-comment': 'var(--code-comment)',
        'code-keyword': 'var(--code-keyword)',
        'code-string': 'var(--code-string)',
        'code-fn': 'var(--code-fn)',
        'code-num': 'var(--code-num)',

        // Semantic aliases
        bg: 'var(--bg)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-2': 'var(--accent-2)',
        'accent-3': 'var(--accent-3)',
        'accent-4': 'var(--accent-4)',
        danger: 'var(--danger)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        focus: 'var(--focus)',
        'on-accent': 'var(--on-accent)',

        // Derived colors
        hairline: 'var(--hairline)',
        rule: 'var(--rule)',
        'grid-x': 'var(--grid-x)',
        'grid-y': 'var(--grid-y)',
      },

      fontFamily: {
        brand: 'var(--font-brand)',
        display: 'var(--font-display)',
        body: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },

      // fontSize moved to @theme directive in CSS for Tailwind v4 compatibility

      lineHeight: {
        tight: 'var(--lh-tight)',
        snug: 'var(--lh-snug)',
        body: 'var(--lh-body)',
        loose: 'var(--lh-loose)',
      },

      letterSpacing: {
        brand: 'var(--tracking-brand)',
        label: 'var(--tracking-label)',
      },

      spacing: {
        '4': 'var(--space-4)',
        '8': 'var(--space-8)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '24': 'var(--space-24)',
        '32': 'var(--space-32)',
        '48': 'var(--space-48)',
        '64': 'var(--space-64)',
      },

      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        chunky: 'var(--radius-chunky)',
        pill: 'var(--radius-pill)',
      },

      borderWidth: {
        thin: 'var(--stroke-thin)',
        DEFAULT: 'var(--stroke)',
        thick: 'var(--stroke-thick)',
      },

      boxShadow: {
        stamp: 'var(--shadow-stamp)',
        'stamp-hover': 'var(--shadow-stamp-hover)',
        'stamp-press': 'var(--shadow-stamp-press)',
      },

      maxWidth: {
        wrap: 'var(--wrap)',
        'content-narrow': 'var(--content-narrow)',
        content: 'var(--content)',
        'content-wide': 'var(--content-wide)',
      },

      minHeight: {
        tap: 'var(--tap)',
      },

      minWidth: {
        tap: 'var(--tap)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.shadow-stamp': {
          boxShadow: 'var(--shadow-stamp)',
        },
        '.shadow-stamp-hover': {
          boxShadow: 'var(--shadow-stamp-hover)',
        },
        '.shadow-stamp-press': {
          boxShadow: 'var(--shadow-stamp-press)',
        },
        '.text-brand': {
          fontFamily: 'var(--font-brand)',
          letterSpacing: 'var(--tracking-brand)',
        },
        '.text-display': {
          fontFamily: 'var(--font-display)',
        },
        '.text-body': {
          fontFamily: 'var(--font-body)',
        },
      })
    }),
  ],
}

export default atomicbytesPreset
