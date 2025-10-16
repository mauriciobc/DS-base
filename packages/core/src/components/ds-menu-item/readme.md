# ds-menu-item

Componente de item de menu que pode ser usado dentro de dropdowns e outros componentes de seleção.

## Comportamento de Seleção

O componente `ds-menu-item` **não gerencia seu próprio estado de seleção**. Quando clicado, ele emite um evento `dsSelect` com apenas o `value` e `index` do item. O componente pai é responsável por:

1. Gerenciar o estado de seleção através da propriedade `selected`
2. Implementar a lógica de toggle/adição/remoção de itens selecionados
3. Atualizar a propriedade `selected` dos itens conforme necessário

Este padrão permite maior flexibilidade para diferentes tipos de seleção (única, múltipla, etc.) e mantém a responsabilidade de gerenciamento de estado no componente pai.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                 | Type      | Default     |
| ---------- | ---------- | --------------------------- | --------- | ----------- |
| `disabled` | `disabled` | Estado desabilitado do item | `boolean` | `false`     |
| `index`    | `index`    | Índice do item na lista     | `number`  | `0`         |
| `selected` | `selected` | Estado de seleção do item   | `boolean` | `false`     |
| `value`    | `value`    | Valor do item               | `any`     | `undefined` |


## Events

| Event      | Description                                                                                                                                           | Type               |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `dsSelect` | Emitido quando o item é clicado/selecionado. O componente pai é responsável por gerenciar o estado de seleção. Payload: { value: any, index: number } | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
