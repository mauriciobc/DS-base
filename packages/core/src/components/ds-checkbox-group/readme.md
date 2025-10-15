# ds-checkbox-group

Grupo de checkboxes framework-agnostic.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                | Type                         | Default      |
| ------------- | ------------- | ------------------------------------------ | ---------------------------- | ------------ |
| `disabled`    | `disabled`    | If true, the group is disabled             | `boolean`                    | `false`      |
| `errorText`   | `error-text`  | Error message                              | `string`                     | `''`         |
| `helpText`    | `help-text`   | Help text                                  | `string`                     | `''`         |
| `label`       | `label`       | Label for the group                        | `string`                     | `''`         |
| `name`        | `name`        | Name for all checkboxes in the group       | `string`                     | `''`         |
| `orientation` | `orientation` | Layout orientation                         | `"horizontal" \| "vertical"` | `'vertical'` |
| `required`    | `required`    | If true, at least one checkbox is required | `boolean`                    | `false`      |


## Events

| Event      | Description                                    | Type                    |
| ---------- | ---------------------------------------------- | ----------------------- |
| `dsChange` | Emitted when any checkbox in the group changes | `CustomEvent<string[]>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
