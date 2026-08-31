import type { Preview } from '@storybook/react-vite'
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
      options: {
        paper: {
          name: 'paper',
          value: '#F6F1E8',
        },

        dark: {
          name: 'dark',
          value: '#241F18',
        },

        white: {
          name: 'white',
          value: '#FFFFFF',
        }
      }
    },
  },

  initialGlobals: {
    backgrounds: {
      value: 'paper'
    }
  }
}

export default preview
