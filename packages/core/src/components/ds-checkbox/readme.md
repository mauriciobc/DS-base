# ds-checkbox

Um componente de checkbox acessível e responsivo com suporte completo a estados visuais, incluindo feedback visual para interações do usuário.

## Características

- ✅ **Estados visuais completos**: default, hover, focus, active, checked, indeterminate, disabled
- ✅ **Feedback visual imediato**: estado ativo com mudança de cor e escala durante o clique
- ✅ **Acessibilidade**: suporte completo a ARIA e navegação por teclado
- ✅ **Design system**: cores e estilos baseados nos tokens de design
- ✅ **Eventos customizados**: dsChange, dsFocus, dsBlur
- ✅ **Validação de acessibilidade**: warning automático quando nenhum nome acessível é fornecido

## Estados Visuais

O componente suporta os seguintes estados visuais:

- **Default**: Estado inicial do checkbox
- **Hover**: Quando o mouse está sobre o checkbox
- **Focus**: Quando o checkbox recebe foco (teclado ou mouse)
- **Active**: Quando o usuário está clicando no checkbox (novo!)
- **Checked**: Quando o checkbox está marcado
- **Indeterminate**: Estado intermediário (útil para "selecionar todos")
- **Disabled**: Quando o checkbox está desabilitado

## Acessibilidade

O componente `ds-checkbox` garante acessibilidade completa seguindo as diretrizes WCAG:

### Nome Acessível
- **Com label visível**: Use a prop `label` quando o checkbox deve ter um texto visível
- **Sem label visível**: Use a prop `ariaLabel` quando o checkbox não precisa de texto visível (ex: checkboxes em tabelas)
- **Validação**: O componente emite um warning no console quando nenhuma das props é fornecida

### Atributos ARIA
- `aria-checked`: Indica o estado atual (true/false/mixed)
- `aria-label`: Nome acessível quando não há label visível
- `aria-hidden="true"`: Aplicado ao elemento visual decorativo

### Navegação por Teclado
- **Tab**: Navega para o próximo elemento
- **Espaço**: Marca/desmarca o checkbox
- **Enter**: Marca/desmarca o checkbox

## Exemplo de Uso

```html
<!-- Checkbox básico -->
<ds-checkbox label="Aceitar termos e condições"></ds-checkbox>

<!-- Checkbox marcado -->
<ds-checkbox label="Já marcado" checked></ds-checkbox>

<!-- Checkbox indeterminado -->
<ds-checkbox label="Selecionar todos" indeterminate></ds-checkbox>

<!-- Checkbox desabilitado -->
<ds-checkbox label="Desabilitado" disabled></ds-checkbox>

<!-- Checkbox sem label visível (usando ariaLabel) -->
<ds-checkbox ariaLabel="Aceitar política de privacidade"></ds-checkbox>
```

<!-- Auto Generated Below -->


## Properties

| Property        | Attribute       | Description                                                         | Type      | Default |
| --------------- | --------------- | ------------------------------------------------------------------- | --------- | ------- |
| `ariaLabel`     | `aria-label`    | Alternative text for accessibility when no visible label is present | `string`  | `''`    |
| `checked`       | `checked`       | The checkbox checked state                                          | `boolean` | `false` |
| `disabled`      | `disabled`      | If true, the checkbox is disabled                                   | `boolean` | `false` |
| `indeterminate` | `indeterminate` | If true, the checkbox is in indeterminate state                     | `boolean` | `false` |
| `label`         | `label`         | The checkbox label text                                             | `string`  | `''`    |
| `name`          | `name`          | The checkbox name for grouping                                      | `string`  | `''`    |
| `required`      | `required`      | If true, the checkbox is required                                   | `boolean` | `false` |
| `value`         | `value`         | The checkbox value for forms                                        | `string`  | `''`    |


## Events

| Event      | Description                                     | Type                   |
| ---------- | ----------------------------------------------- | ---------------------- |
| `dsBlur`   | Emitted when the checkbox loses focus           | `CustomEvent<void>`    |
| `dsChange` | Emitted when the checkbox checked state changes | `CustomEvent<boolean>` |
| `dsFocus`  | Emitted when the checkbox gains focus           | `CustomEvent<void>`    |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
