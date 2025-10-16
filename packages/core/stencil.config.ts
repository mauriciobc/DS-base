import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'ds-base',
  outputTargets: [
    // Web Components nativos
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    // Documentação
    {
      type: 'docs-readme',
    },
    // Dev server
    {
      type: 'www',
      serviceWorker: null,
      copy: [{ src: '**/*.html' }],
    },
    // React wrappers
    reactOutputTarget({
      componentCorePackage: '@ds-base/core',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
      outDir: '../react/src/components/stencil-generated',
    }),
    // Angular wrappers
    angularOutputTarget({
      componentCorePackage: '@ds-base/core',
      outputType: 'component',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
    }),
    // Vue wrappers
    vueOutputTarget({
      componentCorePackage: '@ds-base/core',
      proxiesFile: '../vue/src/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
  testing: {
    browserHeadless: 'new',
    setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  },
};

