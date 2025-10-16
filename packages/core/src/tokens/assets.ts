/**
 * Configuração de Assets - Voa Design System
 * 
 * Este módulo define os caminhos para todos os assets do design system,
 * permitindo configuração centralizada para diferentes ambientes (dev/staging/CDN).
 * 
 * ## Uso de Configuração de Assets
 * 
 * ### Para Configuração em Tempo de Execução (Recomendado)
 * Use `getCurrentAssets()` quando você precisar de configuração fresca baseada no ambiente atual:
 * - Em componentes que podem ser renderizados em diferentes ambientes
 * - Durante testes onde o ambiente pode mudar
 * - Em aplicações que mudam de ambiente dinamicamente
 * 
 * ```typescript
 * import { getCurrentAssets } from './tokens/assets';
 * 
 * const assets = getCurrentAssets(); // Sempre retorna configuração atual
 * ```
 * 
 * ### Para Configuração Estática (Compatibilidade)
 * Use `currentAssets` apenas quando você tem certeza de que o ambiente não mudará:
 * - Em configurações de build estático
 * - Quando a performance é crítica e você quer evitar chamadas de função
 * - Para compatibilidade com código legado
 * 
 * ```typescript
 * import { currentAssets } from './tokens/assets';
 * 
 * const assets = currentAssets; // Configuração fixa no momento da importação
 * ```
 * 
 * @packageDocumentation
 */

/**
 * Configuração base de assets
 */
export const defaultAssets = {
  icons: {
    arrowUp: '/assets/icons/arrow-up.svg',
    arrowDown: '/assets/icons/arrow-down.svg',
  },
} as const;

/**
 * Configuração de assets para diferentes ambientes
 */
export const assetConfigs = {
  development: {
    ...defaultAssets,
  },
  staging: {
    icons: {
      arrowUp: 'https://staging-cdn.example.com/assets/icons/arrow-up.svg',
      arrowDown: 'https://staging-cdn.example.com/assets/icons/arrow-down.svg',
    },
  },
  production: {
    icons: {
      arrowUp: 'https://cdn.example.com/assets/icons/arrow-up.svg',
      arrowDown: 'https://cdn.example.com/assets/icons/arrow-down.svg',
    },
  },
} as const;

/**
 * Tipo para configuração de assets
 */
export type AssetConfig = {
  icons: {
    arrowUp: string;
    arrowDown: string;
  };
};

/**
 * Tipo para ambiente de deploy
 */
export type Environment = keyof typeof assetConfigs;

/**
 * Valores válidos de ambiente
 */
const VALID_ENVIRONMENTS: readonly Environment[] = Object.keys(assetConfigs) as Environment[];

/**
 * Type guard para verificar se uma string é um Environment válido
 * 
 * @param value - Valor a ser verificado
 * @returns true se o valor é um Environment válido
 */
function isValidEnvironment(value: string | undefined): value is Environment {
  return value !== undefined && VALID_ENVIRONMENTS.includes(value as Environment);
}

/**
 * Função para obter configuração de assets baseada no ambiente
 * 
 * @param environment - Ambiente de deploy ('development' | 'staging' | 'production')
 * @returns Configuração de assets para o ambiente especificado
 * 
 * @example
 * ```typescript
 * import { getAssetConfig } from './tokens/assets';
 * 
 * const assets = getAssetConfig('production');
 * console.log(assets.icons.arrowUp); // 'https://cdn.example.com/assets/icons/arrow-up.svg'
 * ```
 */
export function getAssetConfig(environment: Environment = 'development'): AssetConfig {
  return assetConfigs[environment];
}

/**
 * Função para obter configuração de assets baseada na variável de ambiente
 * 
 * @returns Configuração de assets baseada em NODE_ENV ou 'development' como fallback
 * 
 * @example
 * ```typescript
 * import { getAssetConfigFromEnv } from './tokens/assets';
 * 
 * const assets = getAssetConfigFromEnv();
 * // Retorna configuração baseada em process.env.NODE_ENV
 * ```
 */
export function getAssetConfigFromEnv(): AssetConfig {
  const nodeEnv = process?.env?.NODE_ENV;
  const env = isValidEnvironment(nodeEnv) ? nodeEnv : 'development';
  return getAssetConfig(env);
}

/**
 * Função getter para obter configuração atual de assets
 * 
 * Esta função retorna uma configuração fresca baseada no ambiente atual,
 * permitindo variabilidade em tempo de execução e durante testes.
 * 
 * @returns Configuração de assets baseada no ambiente atual
 * 
 * @example
 * ```typescript
 * import { getCurrentAssets } from './tokens/assets';
 * 
 * const assets = getCurrentAssets();
 * // Sempre retorna configuração atual baseada em process.env.NODE_ENV
 * ```
 */
export function getCurrentAssets(): AssetConfig {
  return getAssetConfigFromEnv();
}

/**
 * Configuração atual de assets (baseada no ambiente no momento da importação)
 * 
 * @deprecated Use getCurrentAssets() para obter configuração fresca em tempo de execução.
 * Esta constante é avaliada no momento da importação e pode não refletir mudanças
 * nas variáveis de ambiente durante a execução.
 */
export const currentAssets = getAssetConfigFromEnv();

/**
 * Exporta a configuração atual como padrão
 * 
 * @deprecated Use getCurrentAssets() para obter configuração fresca em tempo de execução.
 */
export default currentAssets;
