# ds-select

Componente select framework-agnostic.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                         | Type      | Default |
| ------------- | ------------- | ----------------------------------- | --------- | ------- |
| `disabled`    | `disabled`    | If true, the select is disabled     | `boolean` | `false` |
| `errorText`   | `error-text`  | Error message                       | `string`  | `''`    |
| `helpText`    | `help-text`   | Help text                           | `string`  | `''`    |
| `label`       | `label`       | Label text                          | `string`  | `''`    |
| `multiple`    | `multiple`    | If true, allows multiple selections | `boolean` | `false` |
| `name`        | `name`        | The select name                     | `string`  | `''`    |
| `placeholder` | `placeholder` | Placeholder option text             | `string`  | `''`    |
| `required`    | `required`    | If true, the select is required     | `boolean` | `false` |
| `value`       | `value`       | The select value                    | `string`  | `''`    |


## Events

| Event      | Description                           | Type                  |
| ---------- | ------------------------------------- | --------------------- |
| `dsBlur`   | Emitted when the select loses focus   | `CustomEvent<void>`   |
| `dsChange` | Emitted when the select value changes | `CustomEvent<string>` |
| `dsFocus`  | Emitted when the select gains focus   | `CustomEvent<void>`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
