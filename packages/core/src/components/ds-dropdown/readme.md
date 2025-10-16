# ds-dropdown



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                     | Type                             | Default     |
| ------------- | ------------- | ------------------------------- | -------------------------------- | ----------- |
| `disabled`    | `disabled`    | Se o dropdown está desabilitado | `boolean`                        | `false`     |
| `errorText`   | `error-text`  | Texto de erro                   | `string`                         | `undefined` |
| `helpText`    | `help-text`   | Texto de ajuda                  | `string`                         | `undefined` |
| `label`       | `label`       | Label do dropdown               | `string`                         | `undefined` |
| `maxItems`    | `max-items`   | Limite de itens visíveis        | `number`                         | `9`         |
| `multiple`    | `multiple`    | Se permite seleção múltipla     | `boolean`                        | `false`     |
| `name`        | `name`        | Nome do campo                   | `string`                         | `''`        |
| `placeholder` | `placeholder` | Placeholder do dropdown         | `string`                         | `undefined` |
| `required`    | `required`    | Se o dropdown é obrigatório     | `boolean`                        | `false`     |
| `searchable`  | `searchable`  | Se permite busca/filtro         | `boolean`                        | `false`     |
| `value`       | `value`       | Valor selecionado               | `string \| string[]`             | `''`        |
| `variant`     | `variant`     | Variação do dropdown            | `"bottom" \| "noarrow" \| "top"` | `'noarrow'` |


## Events

| Event      | Description                          | Type                |
| ---------- | ------------------------------------ | ------------------- |
| `dsBlur`   | Emitido quando o dropdown perde foco | `CustomEvent<void>` |
| `dsChange` | Emitido quando o valor muda          | `CustomEvent<any>`  |
| `dsClose`  | Emitido quando o dropdown fecha      | `CustomEvent<void>` |
| `dsFocus`  | Emitido quando o dropdown ganha foco | `CustomEvent<void>` |
| `dsOpen`   | Emitido quando o dropdown abre       | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
