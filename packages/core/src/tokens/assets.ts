/**
 * Configuração de Assets - Voa Design System
 * 
 * Este módulo define os caminhos para todos os assets do design system,
 * permitindo configuração centralizada para diferentes ambientes (dev/staging/CDN).
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
export type AssetConfig = typeof defaultAssets;

/**
 * Tipo para ambiente de deploy
 */
export type Environment = keyof typeof assetConfigs;

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
  const env = (process?.env?.NODE_ENV as Environment) || 'development';
  return getAssetConfig(env);
}

/**
 * Configuração atual de assets (baseada no ambiente)
 */
export const currentAssets = getAssetConfigFromEnv();

/**
 * Exporta a configuração atual como padrão
 */
export default currentAssets;
