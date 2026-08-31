import type { Preview } from '@storybook/react'
import '../src/tokens.css'
import './storybook.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'paper',
      values: [
        {
          name: 'paper',
          value: '#F6F1E8',
        },
        {
          name: 'dark',
          value: '#241F18',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
      ],
    },
  },
}

export default preview
