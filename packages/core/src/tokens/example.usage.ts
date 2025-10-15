/**
 * Exemplos de Uso - Design Tokens
 * 
 * Este arquivo demonstra diferentes formas de usar os design tokens
 * do Voa Design System em componentes Stencil e Web Components.
 * 
 * @packageDocumentation
 */

import { colors, typography, spacing, radius } from './index';

// ============================================
// EXEMPLO 1: Uso básico em CSS-in-JS
// ============================================

export const buttonStyles = `
  background-color: ${colors.brand.base};
  color: ${colors.structure.bgBase};
  padding: ${spacing.sm}px ${spacing.md}px;
  border-radius: ${radius.sm}px;
  font-family: ${typography.fontFamilies.sans};
  font-size: ${typography.desktop.bodyMedium.regular.fontSize}px;
  font-weight: ${typography.desktop.bodyMedium.regular.fontWeight};
  border: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: ${colors.structure.bgBaseDisabled};
    color: ${colors.text.disabled};
    cursor: not-allowed;
  }
`;

// ============================================
// EXEMPLO 2: Gerando CSS Variables
// ============================================

/**
 * Gera CSS Custom Properties a partir dos tokens
 * Útil para usar em arquivos CSS tradicionais
 */
export function generateCSSVariables(): string {
  return `
    :root {
      /* Cores - Texto */
      --color-text-primary: ${colors.text.primary};
      --color-text-secondary: ${colors.text.secondary};
      --color-text-placeholder: ${colors.text.placeholder};
      --color-text-disabled: ${colors.text.disabled};
      
      /* Cores - Marca */
      --color-brand-base: ${colors.brand.base};
      --color-brand-base-50: ${colors.brand.base50};
      
      /* Cores - Estrutura */
      --color-bg-base: ${colors.structure.bgBase};
      --color-bg-base-disabled: ${colors.structure.bgBaseDisabled};
      --color-border: ${colors.structure.borderColor};
      --color-border-secondary: ${colors.structure.borderColorSecondary};
      
      /* Cores - Semântica */
      --color-success: ${colors.semantic.success};
      --color-danger: ${colors.semantic.danger};
      --color-warning: ${colors.semantic.warning};
      
      /* Espaçamento */
      --spacing-xxs: ${spacing.xxs}px;
      --spacing-xs: ${spacing.xs}px;
      --spacing-sm: ${spacing.sm}px;
      --spacing-rg: ${spacing.rg}px;
      --spacing-md: ${spacing.md}px;
      
      /* Border Radius */
      --radius-xs: ${radius.xs}px;
      --radius-sm: ${radius.sm}px;
      --radius-md: ${radius.md}px;
      --radius-lg: ${radius.lg}px;
      
      /* Tipografia - Família */
      --font-family-sans: ${typography.fontFamilies.sans};
      
      /* Tipografia - Body Large */
      --font-body-lg-size: ${typography.desktop.bodyLarge.regular.fontSize}px;
      --font-body-lg-weight: ${typography.desktop.bodyLarge.regular.fontWeight};
      --font-body-lg-line-height: ${typography.desktop.bodyLarge.regular.lineHeight}px;
      
      /* Tipografia - Body Medium */
      --font-body-md-size: ${typography.desktop.bodyMedium.regular.fontSize}px;
      --font-body-md-weight: ${typography.desktop.bodyMedium.regular.fontWeight};
      --font-body-md-line-height: ${typography.desktop.bodyMedium.regular.lineHeight}px;
      
      /* Tipografia - Body Small */
      --font-body-sm-size: ${typography.desktop.bodySmall.regular.fontSize}px;
      --font-body-sm-weight: ${typography.desktop.bodySmall.regular.fontWeight};
      --font-body-sm-line-height: ${typography.desktop.bodySmall.regular.lineHeight}px;
    }
  `;
}

// ============================================
// EXEMPLO 3: Helper para componentes Stencil
// ============================================

/**
 * Aplica estilos de tipografia em um elemento
 */
export function applyTypographyStyle(variant: 'bodyLarge' | 'bodyMedium' | 'bodySmall' | 'footnote', weight: 'regular' | 'bold' = 'regular'): Record<string, string> {
  let style;
  
  switch (variant) {
    case 'bodyLarge':
      style = typography.desktop.bodyLarge[weight];
      break;
    case 'bodyMedium':
      style = typography.desktop.bodyMedium[weight];
      break;
    case 'bodySmall':
      style = typography.desktop.bodySmall[weight];
      break;
    case 'footnote':
      style = typography.desktop.footnote.regular;
      break;
    default:
      style = typography.desktop.bodyMedium.regular;
  }
  
  return {
    'font-family': style.fontFamily,
    'font-size': `${style.fontSize}px`,
    'font-weight': `${style.fontWeight}`,
    'line-height': `${style.lineHeight}px`,
  };
}

// ============================================
// EXEMPLO 4: Componente de Card
// ============================================

export const cardComponentStyles = `
  .card {
    background-color: ${colors.structure.bgBase};
    border: 1px solid ${colors.structure.borderColor};
    border-radius: ${radius.md}px;
    padding: ${spacing.md}px;
    box-shadow: 0 2px 4px ${colors.structure.borderColorSecondary};
  }
  
  .card-title {
    font-family: ${typography.fontFamilies.sans};
    font-size: ${typography.desktop.bodyLarge.bold.fontSize}px;
    font-weight: ${typography.desktop.bodyLarge.bold.fontWeight};
    line-height: ${typography.desktop.bodyLarge.bold.lineHeight}px;
    color: ${colors.text.primary};
    margin: 0 0 ${spacing.sm}px 0;
  }
  
  .card-description {
    font-family: ${typography.fontFamilies.sans};
    font-size: ${typography.desktop.bodyMedium.regular.fontSize}px;
    font-weight: ${typography.desktop.bodyMedium.regular.fontWeight};
    line-height: ${typography.desktop.bodyMedium.regular.lineHeight}px;
    color: ${colors.text.secondary};
    margin: 0;
  }
`;

// ============================================
// EXEMPLO 5: Estados de mensagem
// ============================================

/**
 * Retorna estilos baseados no tipo de mensagem
 */
export function getMessageStyles(type: 'success' | 'error' | 'warning'): Record<string, string> {
  const baseStyles = {
    'padding': `${spacing.sm}px ${spacing.md}px`,
    'border-radius': `${radius.sm}px`,
    'font-family': typography.fontFamilies.sans,
    'font-size': `${typography.desktop.bodySmall.regular.fontSize}px`,
  };
  
  switch (type) {
    case 'success':
      return {
        ...baseStyles,
        'background-color': colors.semantic.success,
        'color': colors.structure.bgBase,
      };
    case 'error':
      return {
        ...baseStyles,
        'background-color': colors.semantic.danger,
        'color': colors.structure.bgBase,
      };
    case 'warning':
      return {
        ...baseStyles,
        'background-color': colors.semantic.warning,
        'color': colors.text.primary,
      };
    default:
      return baseStyles;
  }
}

// ============================================
// EXEMPLO 6: Form Input
// ============================================

export const inputStyles = `
  .input-wrapper {
    margin-bottom: ${spacing.md}px;
  }
  
  .input-label {
    display: block;
    font-family: ${typography.fontFamilies.sans};
    font-size: ${typography.desktop.bodySmall.bold.fontSize}px;
    font-weight: ${typography.desktop.bodySmall.bold.fontWeight};
    color: ${colors.text.primary};
    margin-bottom: ${spacing.xs}px;
  }
  
  .input-field {
    width: 100%;
    padding: ${spacing.sm}px ${spacing.rg}px;
    border: 1px solid ${colors.structure.borderColor};
    border-radius: ${radius.sm}px;
    font-family: ${typography.fontFamilies.sans};
    font-size: ${typography.desktop.bodyMedium.regular.fontSize}px;
    color: ${colors.text.primary};
    background-color: ${colors.structure.bgBase};
    transition: border-color 0.2s ease;
  }
  
  .input-field::placeholder {
    color: ${colors.text.placeholder};
  }
  
  .input-field:focus {
    outline: none;
    border-color: ${colors.brand.base};
    box-shadow: 0 0 0 3px ${colors.brand.base50};
  }
  
  .input-field:disabled {
    background-color: ${colors.structure.bgBaseDisabled};
    color: ${colors.text.disabled};
    cursor: not-allowed;
  }
  
  .input-field.error {
    border-color: ${colors.semantic.danger};
  }
  
  .input-field.success {
    border-color: ${colors.semantic.success};
  }
  
  .input-helper-text {
    font-size: ${typography.desktop.footnote.regular.fontSize}px;
    color: ${colors.text.secondary};
    margin-top: ${spacing.xxs}px;
  }
  
  .input-error-text {
    font-size: ${typography.desktop.footnote.regular.fontSize}px;
    color: ${colors.semantic.danger};
    margin-top: ${spacing.xxs}px;
  }
`;

// ============================================
// EXEMPLO 7: Uso em Stencil Component
// ============================================

/**
 * Exemplo de como usar em um componente Stencil real
 * 
 * @Component({
 *   tag: 'ds-example',
 *   styleUrl: 'ds-example.css',
 *   shadow: true,
 * })
 * export class DsExample {
 *   render() {
 *     return (
 *       <Host>
 *         <style>{cardComponentStyles}</style>
 *         <div class="card">
 *           <h2 class="card-title">Título do Card</h2>
 *           <p class="card-description">Descrição do card usando tokens do design system</p>
 *         </div>
 *       </Host>
 *     );
 *   }
 * }
 */

// ============================================
// EXEMPLO 8: Grid System baseado em tokens
// ============================================

export const gridStyles = `
  .container {
    padding: 0 ${spacing.md}px;
  }
  
  .row {
    display: flex;
    gap: ${spacing.md}px;
    margin-bottom: ${spacing.md}px;
  }
  
  .col {
    flex: 1;
  }
  
  .gap-xs { gap: ${spacing.xs}px; }
  .gap-sm { gap: ${spacing.sm}px; }
  .gap-md { gap: ${spacing.md}px; }
  .gap-lg { gap: ${spacing.rg * 2}px; }
`;

// Exportar tudo para uso em testes ou documentação
export default {
  buttonStyles,
  cardComponentStyles,
  inputStyles,
  gridStyles,
  generateCSSVariables,
  applyTypographyStyle,
  getMessageStyles,
};

