/**
 * Design Tokens - Cores
 * 
 * Importado do Figma: Voa Design System
 * URL: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
 * 
 * @packageDocumentation
 */

/**
 * Cores de texto da aplicação
 * Usadas para definir a cor do texto em diferentes contextos
 */
export const textColors = {
  /** Cor primária do texto - usado para texto principal (#0b1215) */
  primary: '#0b1215',
  /** Cor secundária do texto - usado para texto de suporte (#495057) */
  secondary: '#495057',
  /** Cor do placeholder - usado em campos de formulário vazios (#9f9fa8) */
  placeholder: '#9f9fa8',
  /** Cor do texto desabilitado - usado em elementos inativos (rgba(11, 18, 21, 0.25)) */
  disabled: 'rgba(11, 18, 21, 0.25)',
} as const;

/**
 * Cores da marca (brand)
 * Cores principais da identidade visual
 */
export const brandColors = {
  /** Cor base da marca (#0064cb) */
  base: '#0064cb',
  /** Cor base da marca com 50% de opacidade (rgba(0, 100, 203, 0.5)) */
  base50: 'rgba(0, 100, 203, 0.5)',
} as const;

/**
 * Cores estruturais
 * Usadas para backgrounds e bordas
 */
export const structureColors = {
  /** Cor de fundo base - branco (#ffffff) */
  bgBase: '#ffffff',
  /** Cor de fundo desabilitado (rgba(255, 255, 255, 0.25)) */
  bgBaseDisabled: 'rgba(255, 255, 255, 0.25)',
  /** Cor da borda principal (#adb5bd) */
  borderColor: '#adb5bd',
  /** Cor da borda secundária (#dee2e6) */
  borderColorSecondary: '#dee2e6',
} as const;

/**
 * Cores semânticas
 * Usadas para estados de sucesso, erro, aviso
 */
export const semanticColors = {
  /** Cor de sucesso - verde (#109e7c) */
  success: '#109e7c',
  /** Cor de perigo/erro - vermelho (#e51937) */
  danger: '#e51937',
  /** Cor de aviso - laranja (#ff9900) */
  warning: '#ff9900',
} as const;

/**
 * Paleta de cinzas
 * Escala completa de tons de cinza (0-9)
 */
export const grayPalette = {
  /** Cinza 0 - mais claro (#f8f9fa) */
  gray0: '#f8f9fa',
  /** Cinza 1 (#f1f3f5) */
  gray1: '#f1f3f5',
  /** Cinza 2 (#e9ecef) */
  gray2: '#e9ecef',
  /** Cinza 3 (#dee2e6) */
  gray3: '#dee2e6',
  /** Cinza 4 (#ced4da) */
  gray4: '#ced4da',
  /** Cinza 5 (#adb5bd) */
  gray5: '#adb5bd',
  /** Cinza 6 (#868e96) */
  gray6: '#868e96',
  /** Cinza 7 (#495057) */
  gray7: '#495057',
  /** Cinza 8 (#343a40) */
  gray8: '#343a40',
  /** Cinza 9 - mais escuro (#212529) */
  gray9: '#212529',
} as const;

/**
 * Paleta de vermelhos
 * Escala completa de tons de vermelho (0-9)
 */
export const redPalette = {
  /** Vermelho 0 - mais claro (#fff5f5) */
  red0: '#fff5f5',
  /** Vermelho 1 (#ffe3e3) */
  red1: '#ffe3e3',
  /** Vermelho 2 (#ffc9c9) */
  red2: '#ffc9c9',
  /** Vermelho 3 (#ffa8a8) */
  red3: '#ffa8a8',
  /** Vermelho 4 (#ff8787) */
  red4: '#ff8787',
  /** Vermelho 5 (#ff6b6b) */
  red5: '#ff6b6b',
  /** Vermelho 6 (#fa5252) */
  red6: '#fa5252',
  /** Vermelho 7 (#f03e3e) */
  red7: '#f03e3e',
  /** Vermelho 8 (#e03131) */
  red8: '#e03131',
  /** Vermelho 9 - mais escuro (#c92a2a) */
  red9: '#c92a2a',
} as const;

/**
 * Paleta de rosas
 * Escala completa de tons de rosa (0-9)
 */
export const pinkPalette = {
  /** Rosa 0 - mais claro (#fff0f6) */
  pink0: '#fff0f6',
  /** Rosa 1 (#ffdeeb) */
  pink1: '#ffdeeb',
  /** Rosa 2 (#fcc2d7) */
  pink2: '#fcc2d7',
  /** Rosa 3 (#faa2c1) */
  pink3: '#faa2c1',
  /** Rosa 4 (#f783ac) */
  pink4: '#f783ac',
  /** Rosa 5 (#f06595) */
  pink5: '#f06595',
  /** Rosa 6 (#e64980) */
  pink6: '#e64980',
  /** Rosa 7 (#d6336c) */
  pink7: '#d6336c',
  /** Rosa 8 (#c2255c) */
  pink8: '#c2255c',
  /** Rosa 9 - mais escuro (#a61e4d) */
  pink9: '#a61e4d',
} as const;

/**
 * Paleta de uvas (grape)
 * Escala completa de tons de roxo uva (0-9)
 */
export const grapePalette = {
  /** Uva 0 - mais claro (#f8f0fc) */
  grape0: '#f8f0fc',
  /** Uva 1 (#f3d9fa) */
  grape1: '#f3d9fa',
  /** Uva 2 (#eebefa) */
  grape2: '#eebefa',
  /** Uva 3 (#e599f7) */
  grape3: '#e599f7',
  /** Uva 4 (#da77f2) */
  grape4: '#da77f2',
  /** Uva 5 (#cc5de8) */
  grape5: '#cc5de8',
  /** Uva 6 (#be4bdb) */
  grape6: '#be4bdb',
  /** Uva 7 (#ae3ec9) */
  grape7: '#ae3ec9',
  /** Uva 8 (#9c36b5) */
  grape8: '#9c36b5',
  /** Uva 9 - mais escuro (#862e9c) */
  grape9: '#862e9c',
} as const;

/**
 * Paleta de violetas
 * Escala completa de tons de violeta (0-9)
 */
export const violetPalette = {
  /** Violeta 0 - mais claro (#f3f0ff) */
  violet0: '#f3f0ff',
  /** Violeta 1 (#e5dbff) */
  violet1: '#e5dbff',
  /** Violeta 2 (#d0bfff) */
  violet2: '#d0bfff',
  /** Violeta 3 (#b197fc) */
  violet3: '#b197fc',
  /** Violeta 4 (#9775fa) */
  violet4: '#9775fa',
  /** Violeta 5 (#845ef7) */
  violet5: '#845ef7',
  /** Violeta 6 (#7950f2) */
  violet6: '#7950f2',
  /** Violeta 7 (#7048e8) */
  violet7: '#7048e8',
  /** Violeta 8 (#6741d9) */
  violet8: '#6741d9',
  /** Violeta 9 - mais escuro (#5f3dc4) */
  violet9: '#5f3dc4',
} as const;

/**
 * Paleta de índigos
 * Escala completa de tons de índigo (0-9)
 */
export const indigoPalette = {
  /** Índigo 0 - mais claro (#edf2ff) */
  indigo0: '#edf2ff',
  /** Índigo 1 (#dbe4ff) */
  indigo1: '#dbe4ff',
  /** Índigo 2 (#bac8ff) */
  indigo2: '#bac8ff',
  /** Índigo 3 (#91a7ff) */
  indigo3: '#91a7ff',
  /** Índigo 4 (#748ffc) */
  indigo4: '#748ffc',
  /** Índigo 5 (#5c7cfa) */
  indigo5: '#5c7cfa',
  /** Índigo 6 (#4c6ef5) */
  indigo6: '#4c6ef5',
  /** Índigo 7 (#4263eb) */
  indigo7: '#4263eb',
  /** Índigo 8 (#3b5bdb) */
  indigo8: '#3b5bdb',
  /** Índigo 9 - mais escuro (#364fc7) */
  indigo9: '#364fc7',
} as const;

/**
 * Paleta de azuis
 * Escala completa de tons de azul (0-9)
 */
export const bluePalette = {
  /** Azul 0 - mais claro (#e7f5ff) */
  blue0: '#e7f5ff',
  /** Azul 1 (#d0ebff) */
  blue1: '#d0ebff',
  /** Azul 2 (#a5d8ff) */
  blue2: '#a5d8ff',
  /** Azul 3 (#74c0fc) */
  blue3: '#74c0fc',
  /** Azul 4 (#4dabf7) */
  blue4: '#4dabf7',
  /** Azul 5 (#339af0) */
  blue5: '#339af0',
  /** Azul 6 (#228be6) */
  blue6: '#228be6',
  /** Azul 7 (#1c7ed6) */
  blue7: '#1c7ed6',
  /** Azul 8 (#1971c2) */
  blue8: '#1971c2',
  /** Azul 9 - mais escuro (#1864ab) */
  blue9: '#1864ab',
} as const;

/**
 * Paleta de cianos
 * Escala completa de tons de ciano (0-9)
 */
export const cyanPalette = {
  /** Ciano 0 - mais claro (#e3fafc) */
  cyan0: '#e3fafc',
  /** Ciano 1 (#c5f6fa) */
  cyan1: '#c5f6fa',
  /** Ciano 2 (#99e9f2) */
  cyan2: '#99e9f2',
  /** Ciano 3 (#66d9e8) */
  cyan3: '#66d9e8',
  /** Ciano 4 (#3bc9db) */
  cyan4: '#3bc9db',
  /** Ciano 5 (#22b8cf) */
  cyan5: '#22b8cf',
  /** Ciano 6 (#15aabf) */
  cyan6: '#15aabf',
  /** Ciano 7 (#1098ad) */
  cyan7: '#1098ad',
  /** Ciano 8 (#0c8599) */
  cyan8: '#0c8599',
  /** Ciano 9 - mais escuro (#0b7285) */
  cyan9: '#0b7285',
} as const;

/**
 * Paleta de verdes-azulados (teal)
 * Escala completa de tons de teal (0-9)
 */
export const tealPalette = {
  /** Teal 0 - mais claro (#e6fcf5) */
  teal0: '#e6fcf5',
  /** Teal 1 (#c3fae8) */
  teal1: '#c3fae8',
  /** Teal 2 (#96f2d7) */
  teal2: '#96f2d7',
  /** Teal 3 (#63e6be) */
  teal3: '#63e6be',
  /** Teal 4 (#38d9a9) */
  teal4: '#38d9a9',
  /** Teal 5 (#20c997) */
  teal5: '#20c997',
  /** Teal 6 (#12b886) */
  teal6: '#12b886',
  /** Teal 7 (#0ca678) */
  teal7: '#0ca678',
  /** Teal 8 (#099268) */
  teal8: '#099268',
  /** Teal 9 - mais escuro (#087f5b) */
  teal9: '#087f5b',
} as const;

/**
 * Paleta de verdes
 * Escala completa de tons de verde (0-9)
 */
export const greenPalette = {
  /** Verde 0 - mais claro (#ebfbee) */
  green0: '#ebfbee',
  /** Verde 1 (#d3f9d8) */
  green1: '#d3f9d8',
  /** Verde 2 (#b2f2bb) */
  green2: '#b2f2bb',
  /** Verde 3 (#8ce99a) */
  green3: '#8ce99a',
  /** Verde 4 (#69db7c) */
  green4: '#69db7c',
  /** Verde 5 (#51cf66) */
  green5: '#51cf66',
  /** Verde 6 (#40c057) */
  green6: '#40c057',
  /** Verde 7 (#37b24d) */
  green7: '#37b24d',
  /** Verde 8 (#2f9e44) */
  green8: '#2f9e44',
  /** Verde 9 - mais escuro (#2b8a3e) */
  green9: '#2b8a3e',
} as const;

/**
 * Paleta de lima (lime)
 * Escala completa de tons de lima (0-9)
 */
export const limePalette = {
  /** Lima 0 - mais claro (#f4fce3) */
  lime0: '#f4fce3',
  /** Lima 1 (#e9fac8) */
  lime1: '#e9fac8',
  /** Lima 2 (#d8f5a2) */
  lime2: '#d8f5a2',
  /** Lima 3 (#c0eb75) */
  lime3: '#c0eb75',
  /** Lima 4 (#a9e34b) */
  lime4: '#a9e34b',
  /** Lima 5 (#94d82d) */
  lime5: '#94d82d',
  /** Lima 6 (#82c91e) */
  lime6: '#82c91e',
  /** Lima 7 (#74b816) */
  lime7: '#74b816',
  /** Lima 8 (#66a80f) */
  lime8: '#66a80f',
  /** Lima 9 - mais escuro (#5c940d) */
  lime9: '#5c940d',
} as const;

/**
 * Paleta de amarelos
 * Escala completa de tons de amarelo (0-9)
 */
export const yellowPalette = {
  /** Amarelo 0 - mais claro (#fff9db) */
  yellow0: '#fff9db',
  /** Amarelo 1 (#fff3bf) */
  yellow1: '#fff3bf',
  /** Amarelo 2 (#ffec99) */
  yellow2: '#ffec99',
  /** Amarelo 3 (#ffe066) */
  yellow3: '#ffe066',
  /** Amarelo 4 (#ffd43b) */
  yellow4: '#ffd43b',
  /** Amarelo 5 (#fcc419) */
  yellow5: '#fcc419',
  /** Amarelo 6 (#fab005) */
  yellow6: '#fab005',
  /** Amarelo 7 (#f59f00) */
  yellow7: '#f59f00',
  /** Amarelo 8 (#f08c00) */
  yellow8: '#f08c00',
  /** Amarelo 9 - mais escuro (#e67700) */
  yellow9: '#e67700',
} as const;

/**
 * Paleta de laranjas
 * Escala completa de tons de laranja (0-9)
 */
export const orangePalette = {
  /** Laranja 0 - mais claro (#fff4e6) */
  orange0: '#fff4e6',
  /** Laranja 1 (#ffe8cc) */
  orange1: '#ffe8cc',
  /** Laranja 2 (#ffd8a8) */
  orange2: '#ffd8a8',
  /** Laranja 3 (#ffc078) */
  orange3: '#ffc078',
  /** Laranja 4 (#ffa94d) */
  orange4: '#ffa94d',
  /** Laranja 5 (#ff922b) */
  orange5: '#ff922b',
  /** Laranja 6 (#fd7e14) */
  orange6: '#fd7e14',
  /** Laranja 7 (#f76707) */
  orange7: '#f76707',
  /** Laranja 8 (#e8590c) */
  orange8: '#e8590c',
  /** Laranja 9 - mais escuro (#d9480f) */
  orange9: '#d9480f',
} as const;

/**
 * Objeto consolidado com todas as cores (tema padrão/light)
 */
export const colors = {
  text: textColors,
  brand: brandColors,
  structure: structureColors,
  semantic: semanticColors,
  palette: {
    gray: grayPalette,
    red: redPalette,
    pink: pinkPalette,
    grape: grapePalette,
    violet: violetPalette,
    indigo: indigoPalette,
    blue: bluePalette,
    cyan: cyanPalette,
    teal: tealPalette,
    green: greenPalette,
    lime: limePalette,
    yellow: yellowPalette,
    orange: orangePalette,
  },
} as const;

/**
 * Tipos TypeScript para autocompletar
 */
export type TextColor = keyof typeof textColors;
export type BrandColor = keyof typeof brandColors;
export type StructureColor = keyof typeof structureColors;
export type SemanticColor = keyof typeof semanticColors;
export type GrayColor = keyof typeof grayPalette;
export type RedColor = keyof typeof redPalette;
export type PinkColor = keyof typeof pinkPalette;
export type GrapeColor = keyof typeof grapePalette;
export type VioletColor = keyof typeof violetPalette;
export type IndigoColor = keyof typeof indigoPalette;
export type BlueColor = keyof typeof bluePalette;
export type CyanColor = keyof typeof cyanPalette;
export type TealColor = keyof typeof tealPalette;
export type GreenColor = keyof typeof greenPalette;
export type LimeColor = keyof typeof limePalette;
export type YellowColor = keyof typeof yellowPalette;
export type OrangeColor = keyof typeof orangePalette;
export type PaletteColor = 
  | GrayColor 
  | RedColor 
  | PinkColor 
  | GrapeColor 
  | VioletColor 
  | IndigoColor 
  | BlueColor 
  | CyanColor 
  | TealColor 
  | GreenColor 
  | LimeColor 
  | YellowColor 
  | OrangeColor;
export type ColorToken = TextColor | BrandColor | StructureColor | SemanticColor | PaletteColor;

/**
 * Valores de stroke/bordas
 * Espessuras de linha em pixels
 */
export const strokeValues = {
  /** Sem borda (0px) */
  no: 0,
  /** Borda extra pequena (0.5px) */
  xs: 0.5,
  /** Borda pequena (1px) */
  sm: 1,
  /** Borda média (2px) */
  md: 2,
  /** Borda grande (4px) */
  lg: 4,
} as const;

/**
 * Cores para tema dark
 * Versão dark do sistema de cores
 */
export const darkColors = {
  text: {
    /** Cor primária do texto dark - branco (#ffffff) */
    primary: '#ffffff',
    /** Cor secundária do texto dark (#ffffff) - referência a gray-4 */
    secondary: '#ffffff',
    /** Cor do placeholder dark (#495057) - referência a gray-7 */
    placeholder: '#495057',
    /** Cor do texto desabilitado dark (rgba(255, 255, 255, 0.25)) */
    disabled: 'rgba(255, 255, 255, 0.25)',
    /** Cor do texto sobre primária dark (#343a40) - referência a gray-8 */
    onPrimary: '#343a40',
  },
  structure: {
    /** Cor de fundo base dark (#1b1e21) */
    bgBase: '#1b1e21',
    /** Cor de fundo desabilitado dark (rgba(27, 30, 33, 0.25)) */
    bgBaseDisabled: 'rgba(27, 30, 33, 0.25)',
    /** Cor de fundo do container dark (#212529) - referência a gray-9 */
    bgContainer: '#212529',
    /** Cor de fundo elevado dark (#343a40) - referência a gray-8 */
    bgElevated: '#343a40',
    /** Cor de fundo do layout dark (#09090b) */
    bgLayout: '#09090b',
    /** Cor de fundo spot dark (#50505d) */
    bgSpot: '#50505d',
    /** Cor de fundo da máscara dark (rgba(0, 0, 0, 0.45)) */
    bgMask: 'rgba(0, 0, 0, 0.45)',
    /** Cor de preenchimento secundário dark (#ffffff) */
    fillSecondary: '#ffffff',
    /** Cor de preenchimento terciário dark (#ffffff) */
    fillTerciary: '#ffffff',
    /** Cor de preenchimento quaternário dark (#ffffff) */
    fillQuaternary: '#ffffff',
    /** Cor de preenchimento com 15% opacidade dark */
    fill15: 'rgba(248, 249, 250, 0.15)',
    /** Cor de preenchimento com 50% opacidade dark */
    fill50: 'rgba(248, 249, 250, 0.5)',
    /** Cor da borda dark (#50505d) */
    borderColor: '#50505d',
    /** Cor da borda secundária dark (#ffffff) */
    borderColorSecondary: '#ffffff',
  },
  semantic: {
    /** Cor de sucesso dark - verde (#44a15e) */
    success: '#44a15e',
    /** Cor de perigo/erro dark - vermelho (#ee3f59) */
    danger: '#ee3f59',
    /** Cor de aviso dark - amarelo (#ffd058) */
    warning: '#ffd058',
    /** Cor de informação dark - azul (#3f70cf) */
    info: '#3f70cf',
  },
  // As paletas de cores são as mesmas no dark, apenas com gray-4 diferente
  palette: {
    gray: {
      ...grayPalette,
      /** Gray 4 no tema dark é branco (#ffffff) */
      gray4: '#ffffff',
    },
    red: redPalette,
    pink: pinkPalette,
    grape: grapePalette,
    violet: violetPalette,
    indigo: indigoPalette,
    blue: bluePalette,
    cyan: cyanPalette,
    teal: tealPalette,
    green: greenPalette,
    lime: limePalette,
    yellow: yellowPalette,
    orange: orangePalette,
  },
} as const;

export type StrokeValue = keyof typeof strokeValues;

