const { defineConfig } = require('tsup')

module.exports = defineConfig({
  entry: {
    index: 'src/index.ts',
    'icons/index': 'src/icons/index.ts',
    'characters/index': 'src/characters/index.ts',
    'labels/index': 'src/labels/index.ts',
    'tailwind.preset': 'src/tailwind.preset.ts',
  },
  format: ['esm'],
  dts: false, // Disabled until tsup supports TypeScript 7
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
})
