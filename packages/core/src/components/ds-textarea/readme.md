# ds-textarea

Campo de texto multilinha framework-agnostic, construído com Stencil e inspirado no Lion.

**Nota**: Componente unstyled - estilos serão aplicados via design system do Figma.

## Uso

```html
<ds-textarea label="Comentário" placeholder="Digite aqui..." rows="4"></ds-textarea>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `value` | `string` | `''` | Valor do textarea |
| `name` | `string` | `''` | Nome do campo |
| `label` | `string` | `''` | Texto do label |
| `placeholder` | `string` | `''` | Placeholder |
| `helpText` | `string` | `''` | Texto de ajuda |
| `errorText` | `string` | `''` | Mensagem de erro |
| `rows` | `number` | `3` | Número de linhas |
| `cols` | `number` | - | Número de colunas |
| `disabled` | `boolean` | `false` | Se está desabilitado |
| `readonly` | `boolean` | `false` | Se é somente leitura |
| `required` | `boolean` | `false` | Se é obrigatório |
| `minlength` | `number` | - | Comprimento mínimo |
| `maxlength` | `number` | - | Comprimento máximo |
| `autoResize` | `boolean` | `false` | Auto-ajustar altura |
| `showCounter` | `boolean` | `false` | Mostrar contador de caracteres |

## Eventos

| Evento | Descrição | Payload |
|--------|-----------|---------|
| `dsInput` | Disparado quando o valor muda | `string` |
| `dsChange` | Disparado quando o valor muda e perde o foco | `string` |
| `dsFocus` | Disparado quando ganha foco | `void` |
| `dsBlur` | Disparado quando perde foco | `void` |

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute      | Description                           | Type      | Default     |
| ------------- | -------------- | ------------------------------------- | --------- | ----------- |
| `autoResize`  | `auto-resize`  | If true, auto-resize based on content | `boolean` | `false`     |
| `cols`        | `cols`         | Number of columns                     | `number`  | `undefined` |
| `disabled`    | `disabled`     | If true, the textarea is disabled     | `boolean` | `false`     |
| `errorText`   | `error-text`   | Error message                         | `string`  | `''`        |
| `helpText`    | `help-text`    | Help text                             | `string`  | `''`        |
| `label`       | `label`        | Label text                            | `string`  | `''`        |
| `maxlength`   | `maxlength`    | Maximum length                        | `number`  | `undefined` |
| `minlength`   | `minlength`    | Minimum length                        | `number`  | `undefined` |
| `name`        | `name`         | The textarea name                     | `string`  | `''`        |
| `placeholder` | `placeholder`  | Placeholder text                      | `string`  | `''`        |
| `readonly`    | `readonly`     | If true, the textarea is readonly     | `boolean` | `false`     |
| `required`    | `required`     | If true, the textarea is required     | `boolean` | `false`     |
| `rows`        | `rows`         | Number of rows                        | `number`  | `3`         |
| `showCounter` | `show-counter` | If true, show character counter       | `boolean` | `false`     |
| `value`       | `value`        | The textarea value                    | `string`  | `''`        |


## Events

| Event      | Description                                             | Type                  |
| ---------- | ------------------------------------------------------- | --------------------- |
| `dsBlur`   | Emitted when the textarea loses focus                   | `CustomEvent<void>`   |
| `dsChange` | Emitted when the textarea value changes and loses focus | `CustomEvent<string>` |
| `dsFocus`  | Emitted when the textarea gains focus                   | `CustomEvent<void>`   |
| `dsInput`  | Emitted when the textarea value changes                 | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
