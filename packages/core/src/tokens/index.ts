/**
 * Design Tokens - Voa Design System
 * 
 * Este módulo exporta todos os design tokens importados do Figma.
 * Os tokens são organizados em categorias para facilitar o uso.
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * @example
 * ```typescript
 * import { colors, spacing, typography } from './tokens';
 * 
 * // Usando cores
 * const primaryColor = colors.text.primary;
 * 
 * // Usando espaçamento
 * const padding = spacing.md; // 16px
 * 
 * // Usando tipografia
 * const bodyStyle = typography.desktop.bodyMedium.regular;
 * ```
 * 
 * @packageDocumentation
 */

// Importar objetos principais para uso no objeto consolidado tokens
import { colors as colorsImport, darkColors as darkColorsImport } from './colors';
import { typography as typographyImport } from './typography';
import { spacing as spacingImport } from './spacing';
import { radius as radiusImport } from './radius';
import { branding as brandingImport } from './branding';
import { structure as structureImport } from './structure';
import { system as systemImport } from './system';

// Exportar todos os tokens de cores
export {
  colors,
  textColors,
  brandColors,
  structureColors,
  semanticColors,
  grayPalette,
  redPalette,
  pinkPalette,
  grapePalette,
  violetPalette,
  indigoPalette,
  bluePalette,
  cyanPalette,
  tealPalette,
  greenPalette,
  limePalette,
  yellowPalette,
  orangePalette,
  strokeValues,
  darkColors,
} from './colors';

export type {
  TextColor,
  BrandColor,
  StructureColor,
  SemanticColor,
  GrayColor,
  RedColor,
  PinkColor,
  GrapeColor,
  VioletColor,
  IndigoColor,
  BlueColor,
  CyanColor,
  TealColor,
  GreenColor,
  LimeColor,
  YellowColor,
  OrangeColor,
  PaletteColor,
  ColorToken,
  StrokeValue,
} from './colors';

// Exportar todos os tokens de tipografia
export {
  typography,
  fontFamilies,
  typeScale,
  desktopBodyLarge,
  desktopBodyMedium,
  desktopBodySmall,
  desktopFootnote,
  getTypographyStyles,
} from './typography';

export type {
  TypographyStyle,
  FontFamily,
  TypeScaleLevel,
  DesktopBodyLargeVariant,
  DesktopBodyMediumVariant,
  DesktopBodySmallVariant,
  DesktopFootnoteVariant,
} from './typography';

// Exportar todos os tokens de espaçamento
export {
  spacing,
  spacingTokens,
  getSpacing,
  customSpacing,
} from './spacing';

export type {
  SpacingToken,
} from './spacing';

// Exportar todos os tokens de border radius
export {
  radius,
  borderRadius,
  getRadius,
  customRadius,
} from './radius';

export type {
  RadiusToken,
} from './radius';

// Exportar todos os tokens de branding
export {
  branding,
  coiBranding,
  godriveBranding,
  devopsBranding,
} from './branding';

export type {
  BrandName,
  CoiColorLight,
  CoiColorDark,
  GodriveColorLight,
  GodriveColorDark,
  DevopsColorLight,
  DevopsColorDark,
} from './branding';

// Exportar todos os tokens de estrutura
export {
  structure,
  largeMode,
  slimMode,
  getSpacingLarge,
  getSpacingSlim,
  getRadiusLarge,
  getRadiusSlim,
} from './structure';

export type {
  StructureMode,
  SpacingSize,
  RadiusSize,
} from './structure';

// Exportar todos os tokens de sistema
export {
  system,
  systemMode1,
  systemMode2,
  getSystemValue,
  createClockState,
} from './system';

export type {
  SystemMode,
  SystemToken,
  ClockState,
} from './system';

/**
 * Objeto consolidado com todos os tokens
 * Útil quando você precisa acessar múltiplas categorias
 */
export const tokens = {
  colors: colorsImport,
  darkColors: darkColorsImport,
  typography: typographyImport,
  spacing: spacingImport,
  radius: radiusImport,
  branding: brandingImport,
  structure: structureImport,
  system: systemImport,
} as const;

/**
 * Versão dos tokens
 * Atualize sempre que houver mudanças significativas
 */
export const TOKENS_VERSION = '1.0.0';

/**
 * Fonte do design no Figma
 */
export const FIGMA_SOURCE = {
  name: 'Voa Design System',
  url: 'https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System',
  lastUpdated: new Date().toISOString(),
};

