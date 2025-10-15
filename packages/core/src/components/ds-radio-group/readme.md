# ds-radio-group

Grupo de radio buttons framework-agnostic.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                      | Type                         | Default      |
| ------------- | ------------- | -------------------------------- | ---------------------------- | ------------ |
| `disabled`    | `disabled`    | If true, the group is disabled   | `boolean`                    | `false`      |
| `errorText`   | `error-text`  | Error message                    | `string`                     | `''`         |
| `helpText`    | `help-text`   | Help text                        | `string`                     | `''`         |
| `label`       | `label`       | Label for the group              | `string`                     | `''`         |
| `name`        | `name`        | Name for all radios in the group | `string`                     | `''`         |
| `orientation` | `orientation` | Layout orientation               | `"horizontal" \| "vertical"` | `'vertical'` |
| `required`    | `required`    | If true, selection is required   | `boolean`                    | `false`      |


## Events

| Event      | Description                    | Type                  |
| ---------- | ------------------------------ | --------------------- |
| `dsChange` | Emitted when selection changes | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
