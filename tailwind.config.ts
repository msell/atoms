import type { Config } from 'tailwindcss'
import atomicbytesPreset from './src/tailwind.preset'

const config: Config = {
  presets: [atomicbytesPreset],
  content: [
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
}

export default config
