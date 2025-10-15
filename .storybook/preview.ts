import type { Preview } from '@storybook/web-components';
import { defineCustomElements } from '../packages/core/loader';

// Registrar web components
defineCustomElements();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

