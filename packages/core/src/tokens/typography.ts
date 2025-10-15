/**
 * Design Tokens - Tipografia
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * @packageDocumentation
 */

/**
 * Família de fontes
 */
export const fontFamilies = {
  /** Família principal: Lato */
  sans: 'Lato',
} as const;

/**
 * Escala base de tamanhos tipográficos
 * Valores fundamentais de tamanho de fonte em pixels
 */
export const typeScale = {
  /** Type scale 1 - maior (64px) */
  scale1: 64,
  /** Type scale 2 (40px) */
  scale2: 40,
  /** Type scale 3 (32px) */
  scale3: 32,
  /** Type scale 4 (24px) */
  scale4: 24,
  /** Type scale 5 (20px) */
  scale5: 20,
  /** Type scale 6 (16px) */
  scale6: 16,
  /** Type scale 7 (14px) */
  scale7: 14,
  /** Type scale 8 (12px) */
  scale8: 12,
  /** Type scale 9 (11px) */
  scale9: 11,
  /** Type scale 10 - menor (10px) */
  scale10: 10,
} as const;

/**
 * Interface para definição de estilos tipográficos
 */
export interface TypographyStyle {
  /** Família da fonte */
  fontFamily: string;
  /** Tamanho da fonte em pixels */
  fontSize: number;
  /** Peso da fonte */
  fontWeight: number;
  /** Altura da linha em pixels */
  lineHeight: number;
  /** Estilo da fonte (regular, italic, etc) */
  fontStyle?: string;
}

/**
 * Estilos de texto para Desktop - Body Large
 */
export const desktopBodyLarge = {
  /** Body Large Regular - 20px/32px, peso 400 */
  regular: {
    fontFamily: fontFamilies.sans,
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 32,
    fontStyle: 'Regular',
  },
  /** Body Large Bold - 20px/32px, peso 600 */
  bold: {
    fontFamily: fontFamilies.sans,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 32,
    fontStyle: 'SemiBold',
  },
} as const;

/**
 * Estilos de texto para Desktop - Body Medium
 */
export const desktopBodyMedium = {
  /** Body Medium Regular - 16px/24px, peso 400 */
  regular: {
    fontFamily: fontFamilies.sans,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 24,
    fontStyle: 'Regular',
  },
  /** Body Medium Bold - 16px/24px, peso 600 */
  bold: {
    fontFamily: fontFamilies.sans,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
    fontStyle: 'SemiBold',
  },
} as const;

/**
 * Estilos de texto para Desktop - Body Small
 */
export const desktopBodySmall = {
  /** Body Small Regular - 14px/16px, peso 400 */
  regular: {
    fontFamily: fontFamilies.sans,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 16,
    fontStyle: 'Regular',
  },
  /** Body Small Bold - 14px/16px, peso 600 */
  bold: {
    fontFamily: fontFamilies.sans,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 16,
    fontStyle: 'SemiBold',
  },
} as const;

/**
 * Estilos de texto para Desktop - Footnote
 */
export const desktopFootnote = {
  /** Footnote Regular - 12px/16px, peso 400 */
  regular: {
    fontFamily: fontFamilies.sans,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
    fontStyle: 'Regular',
  },
} as const;

/**
 * Objeto consolidado com todos os estilos tipográficos
 */
export const typography = {
  fontFamilies,
  typeScale,
  desktop: {
    bodyLarge: desktopBodyLarge,
    bodyMedium: desktopBodyMedium,
    bodySmall: desktopBodySmall,
    footnote: desktopFootnote,
  },
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type FontFamily = keyof typeof fontFamilies;
export type TypeScaleLevel = keyof typeof typeScale;
export type DesktopBodyLargeVariant = keyof typeof desktopBodyLarge;
export type DesktopBodyMediumVariant = keyof typeof desktopBodyMedium;
export type DesktopBodySmallVariant = keyof typeof desktopBodySmall;
export type DesktopFootnoteVariant = keyof typeof desktopFootnote;

/**
 * Helper function para aplicar estilos tipográficos em CSS
 * @param style - Estilo tipográfico a ser aplicado
 * @returns String CSS com as propriedades do estilo
 */
export function getTypographyStyles(style: TypographyStyle): string {
  return `
    font-family: ${style.fontFamily};
    font-size: ${style.fontSize}px;
    font-weight: ${style.fontWeight};
    line-height: ${style.lineHeight}px;
  `.trim();
}

