import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Configuração para Stencil - preserva variáveis de ambiente existentes
    config.define = {
      ...config.define,
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        // Adicione aqui outras variáveis específicas se necessário
      },
    };
    
    // Configuração para resolver módulos Stencil
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@stencil/core': '@stencil/core/internal/client',
      },
    };
    
    return config;
  },
};

export default config;
