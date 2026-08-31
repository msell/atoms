# @atomicbytes/atoms

AtomicBytes design system component library — React components with mid-century atomic optimism.

[![npm version](https://img.shields.io/npm/v/@atomicbytes/atoms.svg)](https://www.npmjs.com/package/@atomicbytes/atoms)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Mid-century atomic aesthetic** - Chunky ink outlines, stamp shadows, cream paper vibes
- 🎯 **Strict brand identity** - Coral, mint, cobalt, and yolk accent colors
- ⚡️ **Built with modern tools** - React 18+, TypeScript, Tailwind CSS
- ♿️ **Accessible by default** - WCAG AA compliant, keyboard navigation, screen reader support
- 📦 **Tree-shakeable** - Only bundle what you use
- 🎭 **Storybook docs** - Interactive component explorer

## Installation

```bash
pnpm add @atomicbytes/atoms
# or
npm install @atomicbytes/atoms
# or
yarn add @atomicbytes/atoms
```

## Quick Start

### 1. Import the CSS tokens

In your app's entry point:

```tsx
import '@atomicbytes/atoms/tokens.css'
```

### 2. Extend the Tailwind preset

In your `tailwind.config.ts`:

```ts
import type { Config } from 'tailwindcss'
import atomicbytesPreset from '@atomicbytes/atoms/tailwind.preset'

const config: Config = {
  presets: [atomicbytesPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@atomicbytes/atoms/dist/**/*.js',
  ],
}

export default config
```

### 3. Use the components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@atomicbytes/atoms'

export function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to AtomicBytes</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="coral">Get Started</Button>
      </CardContent>
    </Card>
  )
}
```

## Components

### Button

Chunky button with stamp shadow that lifts on hover.

```tsx
<Button variant="coral">Click me</Button>
<Button variant="secondary" size="lg">Large secondary</Button>
<Button asChild>
  <Link href="/foo">Link styled as button</Link>
</Button>
```

**Variants:** `primary` | `secondary` | `ghost` | `coral` | `mint` | `cobalt` | `yolk`
**Sizes:** `sm` | `md` | `lg`

### Card

Paper-colored container with ink outline.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input & Textarea

Text inputs with ink outline and paper background.

```tsx
<Input type="email" placeholder="Email address" />
<Textarea placeholder="Your message" rows={4} />
```

### Badge

Pill-shaped label for tags and status.

```tsx
<Badge variant="coral">New</Badge>
<Badge variant="mint">Active</Badge>
```

**Variants:** `default` | `coral` | `mint` | `cobalt` | `yolk`

### Link

Styled link with marker underline accent.

```tsx
<Link href="/about">About Us</Link>
<Link variant="subtle" href="/docs">Documentation</Link>
```

**Variants:** `default` | `subtle` | `accent`

## Icons, Characters & Labels

```tsx
import { Starburst8 } from '@atomicbytes/atoms/icons'
// import { ByteBot } from '@atomicbytes/atoms/characters'
// import { HumanMadeStamp } from '@atomicbytes/atoms/labels'

<Starburst8 className="w-16 h-16" fillColor="var(--mint)" />
```

## Design Tokens

The library exports all AtomicBytes design tokens as CSS custom properties:

**Colors:** `--paper`, `--ink`, `--coral`, `--mint`, `--cobalt`, `--yolk`
**Spacing:** `--space-4` through `--space-64`
**Radius:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-chunky`, `--radius-pill`
**Typography:** `--font-brand`, `--font-display`, `--font-body`, `--font-mono`
**Shadows:** `--shadow-stamp`, `--shadow-stamp-hover`, `--shadow-stamp-press`

Use these directly in your CSS or via Tailwind utilities:

```tsx
<div className="bg-paper text-ink border-[2.5px] border-ink rounded-chunky shadow-stamp">
  Atomic vibes
</div>
```

## Theming

The design system supports light (cream paper) and dark (night paper) themes via the `data-theme` attribute:

```tsx
<html data-theme="dark">
```

Or auto-detect based on system preference (default behavior).

## Storybook

Explore all components interactively:
[https://atomicbytes.github.io/atoms](https://atomicbytes.github.io/atoms)

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Type check
pnpm typecheck

# Build the library
pnpm build

# Run Storybook
pnpm storybook
```

## Contributing

This is the official AtomicBytes design system library. Contributions should maintain strict brand consistency.

## License

MIT © AtomicBytes
