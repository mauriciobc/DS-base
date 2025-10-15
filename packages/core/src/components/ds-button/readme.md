# ds-button

Um componente de botão framework-agnostic construído com Stencil, inspirado no Lion Web Components.

## Uso

### Web Components
```html
<ds-button variant="primary">Clique aqui</ds-button>
```

### React
```jsx
import { DsButton } from '@ds-base/react';
<DsButton variant="primary">Clique aqui</DsButton>
```

### Angular
```html
<ds-button variant="primary">Clique aqui</ds-button>
```

### Vue
```vue
<DsButton variant="primary">Clique aqui</DsButton>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Variante visual do botão |
| `disabled` | `boolean` | `false` | Se o botão está desabilitado |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo do botão HTML |

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                             | Type                                     | Default     |
| ---------- | ---------- | --------------------------------------- | ---------------------------------------- | ----------- |
| `disabled` | `disabled` | If true, the button is disabled         | `boolean`                                | `false`     |
| `type`     | `type`     | The button type (button, submit, reset) | `"button" \| "reset" \| "submit"`        | `'button'`  |
| `variant`  | `variant`  | The button variant                      | `"primary" \| "secondary" \| "tertiary"` | `'primary'` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
