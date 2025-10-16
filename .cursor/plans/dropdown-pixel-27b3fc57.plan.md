<!-- 27b3fc57-9a96-4291-b28e-791dc9012a65 4e2a011c-ea58-4b1a-996c-e9f32291c35d -->
# Implementação Pixel-Perfect do Dropdown

## 1. Atualização dos Design Tokens

### 1.1 Adicionar token de spacing-lg

**Arquivo:** `packages/core/src/tokens/spacing.ts`

- Adicionar `lg: 24` ao objeto `spacing` (conforme usado no Figma: `var(--spacing/spacing-lg,24px)`)

### 1.2 Criar token de shadow

**Arquivo:** `packages/core/src/tokens/shadows.ts` (novo arquivo)

- Criar arquivo com definições de sombras do design system
- Exportar token `popover: '0 2px 8px rgba(0, 0, 0, 0.1)'` (shadow usado no dropdown)
- Adicionar exportação no `packages/core/src/tokens/index.ts`

### 1.3 Atualizar tokens do dropdown

**Arquivo:** `packages/core/src/tokens/dropdown.ts`

- Atualizar referência de padding usando `spacing.lg` (24px)
- Substituir valor hardcoded de shadow por referência ao novo token
- Ajustar `borderRadius` do card para 16px (conforme Figma)

## 2. Criação dos Assets SVG

### 2.1 Extrair SVGs das arrows do Figma

**Arquivos novos:**

- `packages/core/src/assets/icons/arrow-up.svg` (seta para cima - dropdown top)
- `packages/core/src/assets/icons/arrow-down.svg` (seta para baixo - dropdown bottom)

**Especificações do Figma:**

- Dimensões: 24x12px
- SVGs obtidos dos URLs:
  - `http://localhost:3845/assets/2add5f63824ad62fcdb681628174866d92a23b0f.svg` (arrow-up)
  - `http://localhost:3845/assets/704807f461f95621e5d57b4a4229f85cf882ed4a.svg` (arrow-down)

### 2.2 Criar diretório de assets

**Estrutura:**

```
packages/core/src/assets/
  icons/
    arrow-up.svg
    arrow-down.svg
```

## 3. Atualização do Componente ds-menu-item

### 3.1 Ajustar estilos CSS

**Arquivo:** `packages/core/src/components/ds-menu-item/ds-menu-item.css`

**Mudanças baseadas no Figma:**

- Altura: `46px` (confirmado ✓)
- Padding left: `24px` usando `var(--ds-spacing-lg)` 
- Padding right: `16px` usando `var(--ds-spacing-md)`
- Padding vertical: `4px` usando `var(--ds-spacing-xs)`
- Gap interno: `16px` entre conteúdo e ícones
- Border-bottom: `1px solid var(--ds-color-structure-bg-base)` (mesmo bg = invisível por padrão)
- Border-radius: herdar do container (`inherit`)

**Estados:**

- `hover`: manter background base (sem mudança visual significativa conforme Figma)
- `selected`: background `#f8f9fa` (gray-0)
- `disabled`: opacity 0.5

## 4. Atualização do Componente ds-menu-item-content

### 4.1 Ajustar estilos CSS

**Arquivo:** `packages/core/src/components/ds-menu-item-content/ds-menu-item-content.css`

**Variantes de conteúdo (baseado no Figma):**

**Single (padrão):**

- Font: Desktop/Body-sm/Regular (Lato, 14px, weight 400, line-height 16px)
- Color: `var(--ds-color-text-primary)` (#0b1215)
- Display: flex gap 10px

**Double:**

- Title: 14px, color primary
- Subtitle: 12px (Desktop/Footnote), color secondary (#495057)
- Layout: flex column

**Triple:**

- Overline: 10px (Desktop/Legal), color secondary
- Title: 14px, color primary, line-height 16px
- Subtitle: 11px (Desktop/Body-xs), color secondary, line-height 12px
- Layout: flex column

**Single-divider (section header):**

- Font: Desktop/Body-md/Bold (Lato, 16px, weight 600, line-height 24px)
- Color: primary

## 5. Atualização do Componente ds-dropdown-item

### 5.1 Refatorar para usar props de posicionamento

**Arquivo:** `packages/core/src/components/ds-dropdown-item/ds-dropdown-item.tsx`

**Props:**

- `position: 'top' | 'bottom' | 'noarrow'` - posição da seta
- `arrowAlign: 'left' | 'middle' | 'right'` - alinhamento horizontal da seta

### 5.2 Atualizar estilos CSS

**Arquivo:** `packages/core/src/components/ds-dropdown-item/ds-dropdown-item.css`

**Estrutura do card:**

- Background: `var(--ds-color-structure-bg-base)` (#ffffff)
- Border-radius: `16px`
- Padding horizontal: `12px` (spacing-rg)
- Padding vertical: `16px` (spacing-md)
- Shadow: usar token de shadow
- Gap entre itens: `2px`

**Arrow wrapper:**

- Width: `24px`
- Height: `12px`
- Padding horizontal: `24px` (spacing-lg)
- Posicionamento: flexbox com justify-content baseado em `arrowAlign`

**Variantes:**

- `.ds-dropdown-item--top`: arrow no topo, order: -1
- `.ds-dropdown-item--bottom`: arrow no bottom, order: 1
- `.ds-dropdown-item--noarrow`: arrow display none

## 6. Atualização do Componente Principal ds-dropdown

### 6.1 Simplificar overlay

**Arquivo:** `packages/core/src/components/ds-dropdown/ds-dropdown.tsx`

**Mudanças:**

- Remover overlay interno do ds-dropdown
- Usar `ds-dropdown-item` como componente externo para renderizar o popover
- Manter apenas o trigger button no ds-dropdown
- Emitir eventos de abertura/fechamento para controle externo

### 6.2 Atualizar estilos do trigger

**Arquivo:** `packages/core/src/components/ds-dropdown/ds-dropdown.css`

**Trigger button:**

- Padding: `12px 16px`
- Border: `1px solid var(--ds-color-structure-border-color)`
- Border-radius: `8px`
- Background: `var(--ds-color-structure-bg-base)`
- Font: Desktop/Body-sm/Regular (14px, 400, line-height 16px)

**Estados:**

- Hover: border-color `var(--ds-color-brand-base)`
- Focus: border-color `var(--ds-color-brand-base)` + box-shadow `0 0 0 2px rgba(0, 100, 203, 0.25)`
- Disabled: background `var(--ds-color-structure-bg-base-disabled)`, cursor not-allowed

## 7. Criar Arquivo de Variáveis CSS Globais

**Arquivo:** `packages/core/src/tokens/css-variables.css` (novo)

- Exportar todas as variáveis CSS dos tokens
- Incluir: spacing, colors, typography, radius, shadows
- Formato: `--ds-spacing-lg: 24px;`, `--ds-shadow-popover: 0 2px 8px rgba(0, 0, 0, 0.1);`

## 8. Validação e Comparação com Figma

### 8.1 Abrir Storybook

- Executar `npm run storybook` (ou comando equivalente)
- Navegar até a story do dropdown

### 8.2 Capturar screenshots do Figma

- Variante noarrow com 2, 3, 4 itens
- Variante top/bottom com diferentes quantidades de itens
- Diferentes posições de arrow (left, middle, right)

### 8.3 Comparação pixel-perfect

- Usar ferramentas de overlay de imagem
- Verificar: paddings, margins, font-sizes, line-heights, border-radius, shadows
- Ajustar discrepâncias até alcançar 100% de fidelidade

## Arquivos Principais a Modificar

1. `packages/core/src/tokens/spacing.ts` - adicionar lg: 24
2. `packages/core/src/tokens/shadows.ts` - novo arquivo
3. `packages/core/src/tokens/dropdown.ts` - atualizar referências
4. `packages/core/src/tokens/index.ts` - exportar shadows
5. `packages/core/src/assets/icons/arrow-up.svg` - novo
6. `packages/core/src/assets/icons/arrow-down.svg` - novo
7. `packages/core/src/components/ds-menu-item/ds-menu-item.css` - ajustes pixel-perfect
8. `packages/core/src/components/ds-menu-item-content/ds-menu-item-content.css` - variantes
9. `packages/core/src/components/ds-dropdown-item/ds-dropdown-item.tsx` - refatoração
10. `packages/core/src/components/ds-dropdown-item/ds-dropdown-item.css` - estilos finais
11. `packages/core/src/components/ds-dropdown/ds-dropdown.css` - simplificação
12. `packages/core/src/tokens/css-variables.css` - novo arquivo de variáveis globais

### To-dos

- [ ] Adicionar token spacing.lg: 24 no arquivo spacing.ts
- [ ] Criar arquivo shadows.ts com token de shadow do popover
- [ ] Extrair e criar arquivos SVG das arrows (arrow-up.svg e arrow-down.svg)
- [ ] Atualizar dropdown.ts para usar novos tokens (spacing.lg e shadow)
- [ ] Ajustar ds-menu-item.css para match pixel-perfect com Figma
- [ ] Implementar variantes de conteúdo em ds-menu-item-content.css
- [ ] Refatorar ds-dropdown-item com props position e arrowAlign
- [ ] Atualizar ds-dropdown-item.css com estilos pixel-perfect
- [ ] Simplificar ds-dropdown removendo overlay interno
- [ ] Criar arquivo css-variables.css com todas variáveis CSS globais
- [ ] Abrir Storybook e comparar com screenshots do Figma para validação pixel-perfect