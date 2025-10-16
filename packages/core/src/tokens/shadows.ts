/**
 * Design Tokens - Sombras
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * Define os valores de sombra usados em toda a aplicação
 * para elevação e profundidade visual.
 * 
 * @packageDocumentation
 */

/**
 * Valores de sombra em CSS
 * Escala de elevação progressiva
 */
export const shadows = {
  /** Sombra de popover - 0 2px 8px rgba(0, 0, 0, 0.1) */
  popover: '0 2px 8px rgba(0, 0, 0, 0.1)',
  /** Sombra pequena - 0 1px 3px rgba(0, 0, 0, 0.12) */
  sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
  /** Sombra média - 0 4px 6px rgba(0, 0, 0, 0.07) */
  md: '0 4px 6px rgba(0, 0, 0, 0.07)',
  /** Sombra grande - 0 10px 15px rgba(0, 0, 0, 0.1) */
  lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  /** Sombra extra grande - 0 20px 25px rgba(0, 0, 0, 0.1) */
  xl: '0 20px 25px rgba(0, 0, 0, 0.1)',
} as const;

/**
 * Objeto consolidado de sombras
 */
export const shadowTokens = {
  ...shadows,
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type ShadowToken = keyof typeof shadows;

/**
 * Helper function para obter valor de sombra
 * @param token - Token de sombra
 * @returns Valor da sombra em CSS
 */
export function getShadow(token: ShadowToken): string {
  return shadows[token];
}

/**
 * Helper para criar sombra customizada
 * @param x - Offset horizontal em pixels
 * @param y - Offset vertical em pixels
 * @param blur - Blur radius em pixels
 * @param spread - Spread radius em pixels
 * @param color - Cor da sombra
 * @returns String formatada para CSS
 */
export function customShadow(
  x: number,
  y: number,
  blur: number,
  spread: number = 0,
  color: string = 'rgba(0, 0, 0, 0.1)'
): string {
  return `${x}px ${y}px ${blur}px ${spread}px ${color}`;
}

