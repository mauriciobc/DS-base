/**
 * Design Tokens - Sistema
 * 
 * Tokens de sistema para estados e valores dinâmicos da aplicação
 * Incluem valores para loading, progress bar, slides e relógio
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * @packageDocumentation
 */

/**
 * Tokens de sistema para modo 1
 * Valores padrão para estados e componentes dinâmicos
 */
export const systemMode1 = {
  /** Estado de loading (1 = carregando) */
  loading: 1,
  /** Largura da progress bar - referência a spacing-sm */
  progressbarWidth: 8,
  /** Posição do slide (0 = inicial) */
  slidePosition: 0,
  /** Hora no relógio (0-23) */
  hour: 0,
  /** Minuto no relógio (0-59) */
  minute: 0,
  /** Segundo no relógio (0-59) */
  second: 0,
} as const;

/**
 * Tokens de sistema para modo 2
 * Valores alternativos para estados e componentes dinâmicos
 */
export const systemMode2 = {
  /** Estado de loading (1 = carregando) */
  loading: 1,
  /** Largura da progress bar - referência a spacing-sm */
  progressbarWidth: 8,
  /** Posição do slide (0 = inicial) */
  slidePosition: 0,
  /** Hora no relógio (0-23) */
  hour: 0,
  /** Minuto no relógio (0-59) */
  minute: 0,
  /** Segundo no relógio (0-59) */
  second: 0,
} as const;

/**
 * Objeto consolidado com todos os modos do sistema
 */
export const system = {
  mode1: systemMode1,
  mode2: systemMode2,
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type SystemMode = keyof typeof system;
export type SystemToken = keyof typeof systemMode1;

/**
 * Helper function para obter valores do sistema
 * @param mode - Modo do sistema (mode1 ou mode2)
 * @param token - Token desejado
 * @returns Valor do token
 */
export function getSystemValue(mode: SystemMode, token: SystemToken): number {
  return system[mode][token];
}

/**
 * Interface para estado de relógio
 */
export interface ClockState {
  hour: number;
  minute: number;
  second: number;
}

/**
 * Helper function para criar um estado de relógio
 * @param hour - Hora (0-23)
 * @param minute - Minuto (0-59)
 * @param second - Segundo (0-59)
 * @returns Estado do relógio
 */
export function createClockState(hour: number, minute: number, second: number): ClockState {
  return { hour, minute, second };
}

