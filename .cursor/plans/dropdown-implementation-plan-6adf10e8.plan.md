<!-- 6adf10e8-62e7-4851-82af-5576bee63946 bec1ab73-4720-4455-a400-5bfcde188fdc -->
# Plano de Implementação: Dropdown Component

## Visão Geral

Criar sistema de dropdown modular em Stencil com 4 componentes baseados no Lion Combobox e especificações Figma, incluindo: `ds-dropdown`, `ds-dropdown-item`, `ds-menu-item`, `ds-menu-item-content`.

---

## Fase 1: Estrutura Base dos Componentes

### 1.1 Criar ds-menu-item-content

**Arquivo**: `packages/core/src/components/ds-menu-item-content/ds-menu-item-content.tsx`

Props baseadas no Figma:

- `title: string` - texto principal do item
- `subtitle?: string` - texto secundário
- `overline?: string` - texto acima do título
- `content: 'single' | 'double' | 'triple' | 'single-divider'` - variação do conteúdo

Design tokens aplicados:

- Tipografia: `desktopBodySmall.regular` (Lato 14px/16px)
- Cor: `textColors.primary` (#0b1215)
- Gap: `spacing.xs` (4px)

**Arquivo**: `packages/core/src/components/ds-menu-item-content/ds-menu-item-content.css`

```css
:host {
  --menu-item-content-gap: var(--ds-spacing-xs);
  --menu-item-content-color: var(--ds-color-text-primary);
}
```

### 1.2 Criar ds-menu-item

**Arquivo**: `packages/core/src/components/ds-menu-item/ds-menu-item.tsx`

Props:

- `selected: boolean` - estado de seleção
- `disabled: boolean` - estado desabilitado
- `value: any` - valor do item

Layout do Figma:

- Height: 46px
- Padding: 24px (left), 16px (right), 4px (vertical)
- Background: `structureColors.bgBase` (#ffffff)
- Border bottom: 1px solid white

Eventos:

- `dsSelect: EventEmitter<any>` - emitido ao selecionar

### 1.3 Criar ds-dropdown-item

**Arquivo**: `packages/core/src/components/ds-dropdown-item/ds-dropdown-item.tsx`

Props:

- `variant: 'noarrow' | 'top' | 'bottom'` - variação da seta
- `position: 'relative' | 'absolute'` - posicionamento

Conteúdo:

- Slot para `ds-menu-item` (múltiplos)
- Arrow wrapper (SVG) quando variant !== 'noarrow'

Arrow tokens:

- Width: 24px
- Height: 12px
- Padding: 24px (horizontal)

### 1.4 Criar ds-dropdown

**Arquivo**: `packages/core/src/components/ds-dropdown/ds-dropdown.tsx`

Props baseadas no Lion Combobox:

- `value: string | string[]` - valor selecionado
- `name: string` - nome do campo
- `label?: string` - label do dropdown
- `placeholder?: string` - placeholder
- `disabled: boolean = false`
- `required: boolean = false`
- `multiple: boolean = false`
- `searchable: boolean = false`
- `maxItems: number = 9` - limite de itens visíveis
- `variant: 'noarrow' | 'top' | 'bottom' = 'noarrow'`

Estados (@State):

- `isOpen: boolean`
- `filteredOptions: any[]`
- `selectedItems: any[]`
- `activeIndex: number`

Eventos:

- `dsChange: EventEmitter<any>`
- `dsFocus: EventEmitter<void>`
- `dsBlur: EventEmitter<void>`
- `dsOpen: EventEmitter<void>`
- `dsClose: EventEmitter<void>`

---

## Fase 2: Estilização com Design Tokens

### 2.1 Design Tokens Específicos

**Arquivo**: `packages/core/src/tokens/dropdown.ts`

```typescript
export const dropdownTokens = {
  card: {
    bg: structureColors.bgBase,
    borderColor: structureColors.borderColor,
    borderRadius: '16px',
    padding: {
      horizontal: spacing.rg, // 12px
      vertical: spacing.md, // 16px
    },
  },
  item: {
    height: 46,
    padding: {
      left: 24, // spacing.lg
      right: spacing.md, // 16px
      vertical: spacing.xs, // 4px
    },
    gap: spacing.md, // 16px
  },
  arrow: {
    width: 24,
    height: 12,
    padding: 24,
  },
};
```

### 2.2 CSS com Variáveis CSS

**Arquivo**: `packages/core/src/components/ds-dropdown/ds-dropdown.css`

```css
:host {
  --dropdown-card-bg: var(--ds-color-structure-bg-base);
  --dropdown-border: var(--ds-color-structure-border-color);
  --dropdown-text: var(--ds-color-text-primary);
  --dropdown-radius: 16px;
  --dropdown-padding-h: 12px;
  --dropdown-padding-v: 16px;
  --dropdown-item-height: 46px;
  --dropdown-item-gap: 16px;
  --dropdown-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

Aplicar em todos os subcomponentes seguindo padrão existente em `ds-input.css`.

---

## Fase 3: Funcionalidades do Lion Combobox

### 3.1 Navegação por Teclado

Implementar em `ds-dropdown.tsx`:

```typescript
@Listen('keydown')
handleKeyDown(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowDown':
      this.navigateDown();
      break;
    case 'ArrowUp':
      this.navigateUp();
      break;
    case 'Enter':
    case ' ':
      this.selectActive();
      break;
    case 'Escape':
      this.close();
      break;
  }
}
```

### 3.2 Busca/Filtro (quando searchable=true)

```typescript
@Watch('searchTerm')
filterOptions(searchTerm: string) {
  this.filteredOptions = this.options.filter(opt =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
```

### 3.3 Posicionamento do Overlay

Usar lógica similar ao Lion:

- Calcular espaço disponível acima/abaixo
- Ajustar variant automaticamente se necessário
- Manter dentro do viewport

---

## Fase 4: Acessibilidade (ARIA)

### 4.1 Atributos ARIA no ds-dropdown

```typescript
render() {
  return (
    <Host
      role="combobox"
      aria-expanded={this.isOpen ? 'true' : 'false'}
      aria-haspopup="listbox"
      aria-owns={`${this.name}-listbox`}
    >
      {/* ... */}
    </Host>
  );
}
```

### 4.2 Atributos ARIA no ds-menu-item

```typescript
<Host
  role="option"
  aria-selected={this.selected ? 'true' : 'false'}
  aria-disabled={this.disabled ? 'true' : 'false'}
  tabindex={this.selected ? 0 : -1}
>
```

---

## Fase 5: Integração e Testes

### 5.1 Registrar Componentes

**Arquivo**: `packages/core/src/components.d.ts`

Adicionar exports de tipos para os 4 novos componentes.

**Arquivo**: `packages/core/src/index.ts`

```typescript
export { DsDropdown } from './components/ds-dropdown/ds-dropdown';
export { DsDropdownItem } from './components/ds-dropdown-item/ds-dropdown-item';
export { DsMenuItem } from './components/ds-menu-item/ds-menu-item';
export { DsMenuItemContent } from './components/ds-menu-item-content/ds-menu-item-content';
```

### 5.2 Testes Unitários

**Arquivo**: `packages/core/src/components/ds-dropdown/ds-dropdown.spec.ts`

Testar baseado em `ds-input.spec.ts`:

- Renderização básica
- Props e eventos
- Navegação por teclado
- Estados (open/close, selected, disabled)
- Filtro de busca
- Seleção múltipla
- Conformidade com design tokens

**Arquivo**: `packages/core/src/components/ds-menu-item/ds-menu-item.spec.ts`

- Renderização com props
- Evento de seleção
- Estados visuais

### 5.3 Storybook Stories

**Arquivo**: `packages/core/src/components/ds-dropdown/ds-dropdown.stories.ts`

Stories a criar:

- Default (noarrow)
- With arrow top
- With arrow bottom
- Multiple selection
- Searchable
- Disabled
- Different item counts (2, 3, 4, 5, 9 items)
- With custom content (subtitle, overline)
- With error state
- With loading state

Seguir padrão de `ds-input.stories.ts`.

---

## Fase 6: Documentação

### 6.1 README

**Arquivo**: `packages/core/src/components/ds-dropdown/readme.md`

Seções:

- Overview
- Usage Examples
- API (Props, Events, Methods)
- Accessibility
- Design Tokens
- Composição de subcomponentes

### 6.2 Exemplo HTML de Uso

```html
<ds-dropdown 
  label="Selecione uma opção"
  variant="bottom"
  searchable
>
  <ds-dropdown-item variant="bottom">
    <ds-menu-item value="1">
      <ds-menu-item-content title="Opção 1" />
    </ds-menu-item>
    <ds-menu-item value="2">
      <ds-menu-item-content title="Opção 2" />
    </ds-menu-item>
  </ds-dropdown-item>
</ds-dropdown>
```

---

## Checklist de Conclusão

- [ ] 4 componentes criados (dropdown, dropdown-item, menu-item, menu-item-content)
- [ ] Design tokens aplicados em todos os componentes
- [ ] Variações do Figma implementadas (noarrow, top, bottom)
- [ ] Navegação por teclado funcional
- [ ] Acessibilidade ARIA completa
- [ ] Busca/filtro quando searchable=true
- [ ] Seleção múltipla funcional
- [ ] Testes unitários com cobertura >80%
- [ ] Stories no Storybook para todas as variações
- [ ] Documentação completa
- [ ] Integração com sistema de tokens existente
- [ ] Compatibilidade com Angular, React, Vue (via exports)

### To-dos

- [ ] Criar estrutura base dos 4 componentes (menu-item-content, menu-item, dropdown-item, dropdown)
- [ ] Implementar estilização com design tokens e CSS variables
- [ ] Adicionar funcionalidades do Lion (navegação, busca, overlay)
- [ ] Implementar acessibilidade ARIA completa
- [ ] Criar testes unitários e Storybook stories
- [ ] Documentar componentes e criar exemplos de uso