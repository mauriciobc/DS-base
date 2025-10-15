/**
 * Design Tokens - Border Radius
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * Define os valores de border-radius usados para arredondar
 * cantos de elementos na interface.
 * 
 * @packageDocumentation
 */

/**
 * Valores de border radius em pixels
 * Escala progressiva de arredondamento
 */
export const radius = {
  /** Extra small - 4px - para elementos muito pequenos */
  xs: 4,
  /** Small - 8px - para botões e inputs pequenos */
  sm: 8,
  /** Medium - 12px - para cartões e containers médios */
  md: 12,
  /** Large - 16px - para cartões e containers grandes */
  lg: 16,
} as const;

/**
 * Objeto consolidado de border radius
 */
export const borderRadius = {
  ...radius,
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type RadiusToken = keyof typeof radius;

/**
 * Helper function para obter valor de radius em diferentes unidades
 * @param token - Token de border radius
 * @param unit - Unidade desejada (px, rem, em)
 * @returns Valor formatado com a unidade
 */
export function getRadius(token: RadiusToken, unit: 'px' | 'rem' | 'em' = 'px'): string {
  const value = radius[token];
  
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
 * Helper para criar radius customizado
 * Útil para casos especiais onde o design requer um valor específico
 * @param value - Valor em pixels
 * @returns String formatada para CSS
 */
export function customRadius(value: number): string {
  return `${value}px`;
}

