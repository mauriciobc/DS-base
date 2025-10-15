# @ds-base/vue

Componentes Vue gerados automaticamente a partir dos Web Components do DS-Base.

## Instalação

```bash
npm install @ds-base/vue
```

## Uso

### 1. Registrar os componentes globalmente

```typescript
// main.ts
import { createApp } from 'vue';
import { defineCustomElements } from '@ds-base/core/loader';
import App from './App.vue';

// Registrar os web components
defineCustomElements();

const app = createApp(App);
app.mount('#app');
```

### 2. Usar nos templates

```vue
<template>
  <div>
    <ds-button variant="primary" @click="handleClick">
      Clique aqui
    </ds-button>
  </div>
</template>

<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

### Alternativa: Usar componentes tipados

```vue
<template>
  <div>
    <DsButton variant="primary" @click="handleClick">
      Clique aqui
    </DsButton>
  </div>
</template>

<script setup lang="ts">
import { DsButton } from '@ds-base/vue';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>
```

## Componentes Disponíveis

- `DsButton` / `ds-button` - Componente de botão com variantes primary, secondary e tertiary

## Nota

Este pacote é gerado automaticamente pelo Stencil. Os arquivos em `src/components.ts` 
não devem ser editados manualmente, pois serão sobrescritos durante o build do pacote core.

