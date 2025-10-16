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
      // Importar os componentes Stencil dinamicamente
      import('../dist/esm/ds-base.js').then(() => {
        // Componentes carregados, mas não precisamos aguardar
        console.log('DS Base components loaded');
      });
      // Retornar a story imediatamente (síncrono)
      return story();
    },
  ],
};

export default preview;
