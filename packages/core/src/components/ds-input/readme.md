# ds-input

Um componente de input framework-agnostic construído com Stencil, inspirado no Lion Web Components.

**Nota**: Este componente é unstyled (sem estilos visuais). Aplique seus próprios estilos através do design system do Figma.

## Uso

### Web Components
```html
<ds-input label="Nome" placeholder="Digite seu nome"></ds-input>
```

### React
```jsx
import { DsInput } from '@ds-base/react';
<DsInput label="Nome" placeholder="Digite seu nome" />
```

### Angular
```html
<ds-input label="Nome" placeholder="Digite seu nome"></ds-input>
```

### Vue
```vue
<DsInput label="Nome" placeholder="Digite seu nome" />
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search'` | `'text'` | Tipo do input |
| `value` | `string` | `''` | Valor do input |
| `name` | `string` | `''` | Nome do campo |
| `label` | `string` | `''` | Texto do label |
| `placeholder` | `string` | `''` | Placeholder |
| `helpText` | `string` | `''` | Texto de ajuda |
| `errorText` | `string` | `''` | Mensagem de erro |
| `disabled` | `boolean` | `false` | Se está desabilitado |
| `readonly` | `boolean` | `false` | Se é somente leitura |
| `required` | `boolean` | `false` | Se é obrigatório |
| `minlength` | `number` | - | Comprimento mínimo |
| `maxlength` | `number` | - | Comprimento máximo |
| `pattern` | `string` | - | Padrão de validação |
| `autocomplete` | `string` | - | Atributo autocomplete |

## Eventos

| Evento | Descrição | Payload |
|--------|-----------|---------|
| `dsInput` | Disparado quando o valor muda | `string` |
| `dsChange` | Disparado quando o valor muda e perde o foco | `string` |
| `dsFocus` | Disparado quando ganha foco | `void` |
| `dsBlur` | Disparado quando perde foco | `void` |

## Classes CSS para Estilização

| Classe | Descrição |
|--------|-----------|
| `.ds-input__label` | Label do campo |
| `.ds-input__required` | Indicador de obrigatório |
| `.ds-input__wrapper` | Wrapper do input |
| `.ds-input__control` | Elemento input |
| `.ds-input__help-text` | Texto de ajuda |
| `.ds-input__error-text` | Texto de erro |
| `:host(.ds-input--disabled)` | Estado desabilitado |
| `:host(.ds-input--readonly)` | Estado somente leitura |
| `:host(.ds-input--error)` | Estado de erro |
| `:host(.ds-input--focused)` | Estado focado |
| `:host(.ds-input--touched)` | Estado touched |

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                    | Type                                                                        | Default     |
| -------------- | -------------- | ------------------------------ | --------------------------------------------------------------------------- | ----------- |
| `autocomplete` | `autocomplete` | Autocomplete attribute         | `string`                                                                    | `undefined` |
| `disabled`     | `disabled`     | If true, the input is disabled | `boolean`                                                                   | `false`     |
| `errorText`    | `error-text`   | Error message                  | `string`                                                                    | `''`        |
| `helpText`     | `help-text`    | Help text                      | `string`                                                                    | `''`        |
| `label`        | `label`        | Label text                     | `string`                                                                    | `''`        |
| `maxlength`    | `maxlength`    | Maximum length                 | `number`                                                                    | `undefined` |
| `minlength`    | `minlength`    | Minimum length                 | `number`                                                                    | `undefined` |
| `name`         | `name`         | The input name                 | `string`                                                                    | `''`        |
| `pattern`      | `pattern`      | Pattern for validation         | `string`                                                                    | `undefined` |
| `placeholder`  | `placeholder`  | Placeholder text               | `string`                                                                    | `''`        |
| `readonly`     | `readonly`     | If true, the input is readonly | `boolean`                                                                   | `false`     |
| `required`     | `required`     | If true, the input is required | `boolean`                                                                   | `false`     |
| `size`         | `size`         | The input size                 | `"lg" \| "md" \| "sm"`                                                      | `'md'`      |
| `type`         | `type`         | The input type                 | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`        | `value`        | The input value                | `string`                                                                    | `''`        |


## Events

| Event      | Description                                          | Type                  |
| ---------- | ---------------------------------------------------- | --------------------- |
| `dsBlur`   | Emitted when the input loses focus                   | `CustomEvent<void>`   |
| `dsChange` | Emitted when the input value changes and loses focus | `CustomEvent<string>` |
| `dsFocus`  | Emitted when the input gains focus                   | `CustomEvent<void>`   |
| `dsInput`  | Emitted when the input value changes                 | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
