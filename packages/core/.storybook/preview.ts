import type { Preview } from '@storybook/web-components';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      // Importar os componentes Stencil dinamicamente e aguardar o carregamento
      import('../dist/esm/ds-base.js').then(() => {
        // Componentes carregados
      });
      return story();
    },
  ],
};

export default preview;
