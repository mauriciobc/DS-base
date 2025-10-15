# @ds-base/angular

Componentes Angular gerados automaticamente a partir dos Web Components do DS-Base.

## Instalação

```bash
npm install @ds-base/angular
```

## Uso

### 1. Importar o módulo

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { defineCustomElements } from '@ds-base/core/loader';

// Registrar os web components
defineCustomElements(window);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

### 2. Usar nos templates

```html
<ds-button variant="primary" (click)="handleClick()">
  Clique aqui
</ds-button>
```

## Componentes Disponíveis

- `ds-button` - Componente de botão com variantes primary, secondary e tertiary

## Nota

Este pacote é gerado automaticamente pelo Stencil. Os arquivos em `src/lib/stencil-generated/` 
não devem ser editados manualmente, pois serão sobrescritos durante o build do pacote core.

