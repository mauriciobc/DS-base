/**
 * Design Tokens - Espaçamento
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * Define os valores de espaçamento usados em toda a aplicação
 * para margens, paddings e gaps.
 * 
 * @packageDocumentation
 */

/**
 * Valores de espaçamento em pixels
 * Escala de espaçamento progressiva
 */
export const spacing = {
  /** Extra extra small - 2px */
  xxs: 2,
  /** Extra small - 4px */
  xs: 4,
  /** Small - 8px */
  sm: 8,
  /** Regular/Medium - 12px */
  rg: 12,
  /** Medium - 16px */
  md: 16,
} as const;

/**
 * Objeto consolidado de espaçamento
 */
export const spacingTokens = {
  ...spacing,
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type SpacingToken = keyof typeof spacing;

/**
 * Helper function para obter valor de espaçamento em diferentes unidades
 * @param token - Token de espaçamento
 * @param unit - Unidade desejada (px, rem, em)
 * @returns Valor formatado com a unidade
 */
export function getSpacing(token: SpacingToken, unit: 'px' | 'rem' | 'em' = 'px'): string {
  const value = spacing[token];
  
  switch (unit) {
    case 'rem':
      return `${value / 16}rem`;
    case 'em':
      return `${value / 16}em`;
    case 'px':
    default:
      return `${value}px`;
  }
}

/**
 * Helper para criar espaçamento customizado (múltiplos do base)
 * @param multiplier - Multiplicador do espaçamento base (xxs = 2px)
 * @returns Valor em pixels
 */
export function customSpacing(multiplier: number): number {
  return spacing.xxs * multiplier;
}

