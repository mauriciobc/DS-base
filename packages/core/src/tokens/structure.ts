/**
 * Design Tokens - Estrutura
 * 
 * Consolida tokens de espaçamento e raio de borda para diferentes modos (large e slim)
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * @packageDocumentation
 */

/**
 * Tokens de estrutura para modo Large
 * Espaçamentos e raios maiores para interfaces desktop/confortáveis
 */
export const largeMode = {
  spacing: {
    /** Espaçamento extra extra pequeno (2px) */
    xxs: 2,
    /** Espaçamento extra pequeno (4px) */
    xs: 4,
    /** Espaçamento pequeno (8px) */
    sm: 8,
    /** Espaçamento regular (12px) */
    rg: 12,
    /** Espaçamento médio (16px) */
    md: 16,
    /** Espaçamento grande (24px) */
    lg: 24,
    /** Espaçamento extra grande (32px) */
    xl: 32,
    /** Espaçamento extra extra grande (48px) */
    xxl: 48,
    /** Espaçamento extra extra extra grande (56px) */
    xxxl: 56,
  },
  radius: {
    /** Sem raio de borda (0px) */
    no: 0,
    /** Raio extra extra pequeno (2px) */
    xxs: 2,
    /** Raio extra pequeno (4px) */
    xs: 4,
    /** Raio pequeno (8px) */
    sm: 8,
    /** Raio médio (12px) */
    md: 12,
    /** Raio grande (16px) */
    lg: 16,
    /** Raio extra grande (24px) */
    xl: 24,
    /** Raio extra extra grande (32px) */
    xxl: 32,
    /** Raio arredondado completo (1024px) */
    round: 1024,
  },
} as const;

/**
 * Tokens de estrutura para modo Slim
 * Espaçamentos e raios menores para interfaces compactas/mobile
 */
export const slimMode = {
  spacing: {
    /** Espaçamento extra extra pequeno (3px) */
    xxs: 3,
    /** Espaçamento extra pequeno (6px) */
    xs: 6,
    /** Espaçamento pequeno (7px) */
    sm: 7,
    /** Espaçamento regular (9px) */
    rg: 9,
    /** Espaçamento médio (10px) */
    md: 10,
    /** Espaçamento grande (14px) */
    lg: 14,
    /** Espaçamento extra grande (20px) */
    xl: 20,
    /** Espaçamento extra extra grande (40px) */
    xxl: 40,
    /** Espaçamento extra extra extra grande (64px) */
    xxxl: 64,
  },
  radius: {
    /** Sem raio de borda (0px) */
    no: 0,
    /** Raio extra extra pequeno (2px) */
    xxs: 2,
    /** Raio extra pequeno (4px) */
    xs: 4,
    /** Raio pequeno (8px) */
    sm: 8,
    /** Raio médio (12px) */
    md: 12,
    /** Raio grande (16px) */
    lg: 16,
    /** Raio extra grande (24px) */
    xl: 24,
    /** Raio extra extra grande (32px) */
    xxl: 32,
    /** Raio arredondado completo (1024px) */
    round: 1024,
  },
} as const;

/**
 * Objeto consolidado com ambos os modos de estrutura
 */
export const structure = {
  large: largeMode,
  slim: slimMode,
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type StructureMode = keyof typeof structure;
export type SpacingSize = keyof typeof largeMode.spacing;
export type RadiusSize = keyof typeof largeMode.radius;

/**
 * Helper function para obter valores de spacing do modo large
 * @param size - Tamanho do espaçamento
 * @returns Valor em pixels
 */
export function getSpacingLarge(size: SpacingSize): number {
  return largeMode.spacing[size];
}

/**
 * Helper function para obter valores de spacing do modo slim
 * @param size - Tamanho do espaçamento
 * @returns Valor em pixels
 */
export function getSpacingSlim(size: SpacingSize): number {
  return slimMode.spacing[size];
}

/**
 * Helper function para obter valores de radius do modo large
 * @param size - Tamanho do raio
 * @returns Valor em pixels
 */
export function getRadiusLarge(size: RadiusSize): number {
  return largeMode.radius[size];
}

/**
 * Helper function para obter valores de radius do modo slim
 * @param size - Tamanho do raio
 * @returns Valor em pixels
 */
export function getRadiusSlim(size: RadiusSize): number {
  return slimMode.radius[size];
}

