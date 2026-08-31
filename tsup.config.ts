import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'icons/index': 'src/icons/index.ts',
    'characters/index': 'src/characters/index.ts',
    'labels/index': 'src/labels/index.ts',
    'tailwind.preset': 'src/tailwind.preset.ts',
  },
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  // Copy tokens.css to dist
  onSuccess: 'cp src/tokens.css dist/tokens.css',
})
