export default {
  typescript: true,
  jsx: {
    babelConfig: {
      plugins: [
        [
          '@svgr/babel-plugin-replace-jsx-attribute-value',
          {
            values: [
              // Replace hardcoded fills with prop
              { value: '#FF5B3C', newValue: '{fillColor}', literal: true },
              { value: '#2EE6A6', newValue: '{fillColor}', literal: true },
              { value: '#4B6BFF', newValue: '{fillColor}', literal: true },
              { value: '#FFD84A', newValue: '{fillColor}', literal: true },
              { value: '#F6F1E8', newValue: '{fillColor}', literal: true },
              // Replace hardcoded strokes with prop
              { value: '#1C1915', newValue: '{strokeColor}', literal: true },
              { value: '#F3EDE2', newValue: '{strokeColor}', literal: true },
            ],
          },
        ],
      ],
    },
  },
  plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            removeViewBox: false,
          },
        },
      },
    ],
  },
  template: require('./svgr-template.cjs'),
}
