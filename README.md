# DS-Base Design System

Sistema de design framework-agnostic construído com Stencil, baseado no Lion Web Components.

## 🎯 Objetivo

DS-Base é um sistema de design que permite criar componentes web uma única vez e usá-los em qualquer framework JavaScript moderno (React, Angular, Vue) ou vanilla JavaScript.

## 📦 Estrutura do Monorepo

```
DS-base/
├── packages/
│   ├── core/              # Componentes Stencil (web components nativos)
│   ├── react/             # Wrappers React gerados automaticamente
│   ├── angular/           # Wrappers Angular gerados automaticamente
│   └── vue/               # Wrappers Vue gerados automaticamente
├── .storybook/            # Configuração do Storybook
└── package.json           # Root package.json com workspaces
```

## 🚀 Início Rápido

### Instalação

```bash
# Clonar o repositório
git clone <seu-repo>
cd DS-base

# Instalar dependências
npm install

# Build dos componentes core
npm run build

# Iniciar desenvolvimento com Storybook
npm run storybook
```

## 💻 Desenvolvimento

### Criar um novo componente

```bash
# Navegar para o pacote core
cd packages/core

# Gerar novo componente
npm run generate
```

### Executar em modo de desenvolvimento

```bash
# Assistir mudanças no core
npm run dev

# Iniciar Storybook
npm run storybook
```

### Build de produção

```bash
# Build apenas do core
npm run build

# Build de todos os pacotes
npm run build:all
```

## 📚 Usar os Componentes

### Web Components Nativos (Vanilla JS)

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="module" src="@ds-base/core"></script>
  </head>
  <body>
    <ds-button variant="primary">Clique aqui</ds-button>
  </body>
</html>
```

### React

```bash
npm install @ds-base/react
```

```tsx
import { DsButton } from '@ds-base/react';

function App() {
  return (
    <div>
      <DsButton variant="primary" onClick={() => console.log('clicked')}>
        Clique aqui
      </DsButton>
    </div>
  );
}
```

### Angular

```bash
npm install @ds-base/angular
```

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineCustomElements } from '@ds-base/core/loader';

defineCustomElements(window);

@NgModule({
  // ...
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<ds-button variant="primary" (click)="handleClick()">
  Clique aqui
</ds-button>
```

### Vue 3

```bash
npm install @ds-base/vue
```

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

## 🧩 Componentes Disponíveis

### DsButton

Componente de botão com múltiplas variantes.

**Propriedades:**

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Variante visual do botão |
| `disabled` | `boolean` | `false` | Se o botão está desabilitado |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo do botão HTML |

**Exemplo:**

```html
<ds-button variant="primary">Primary</ds-button>
<ds-button variant="secondary">Secondary</ds-button>
<ds-button variant="tertiary">Tertiary</ds-button>
<ds-button variant="primary" disabled>Disabled</ds-button>
```

## 🛠 Stack Tecnológica

- **[Stencil](https://stenciljs.com/)** v4.22.0 - Compilador de Web Components
- **[Storybook](https://storybook.js.org/)** v8.4.0 - Documentação e desenvolvimento de componentes
- **[Vite](https://vitejs.dev/)** v5.4.0 - Build tool
- **[TypeScript](https://www.typescriptlang.org/)** v5.6.0 - Type safety

### Output Targets

- **[@stencil/react-output-target](https://github.com/ionic-team/stencil-ds-output-targets)** - Gera componentes React
- **[@stencil/angular-output-target](https://github.com/ionic-team/stencil-ds-output-targets)** - Gera componentes Angular
- **[@stencil/vue-output-target](https://github.com/ionic-team/stencil-ds-output-targets)** - Gera componentes Vue

## 🎨 Inspiração

Este projeto é inspirado no [Lion Web Components](https://lion.js.org/) do ING Bank, recriando seus componentes com Stencil para permitir uma melhor integração com frameworks modernos através de wrappers gerados automaticamente.

## 📖 Documentação

A documentação completa está disponível no Storybook. Para visualizá-la:

```bash
npm run storybook
```

Acesse: `http://localhost:6006`

## 🧪 Testes

```bash
# Testes unitários
cd packages/core
npm test

# Testes em modo watch
npm run test.watch
```

## 📋 Scripts Disponíveis

### Root

- `npm run build` - Build do pacote core
- `npm run build:all` - Build de todos os pacotes
- `npm run storybook` - Inicia o Storybook
- `npm run build-storybook` - Build estático do Storybook
- `npm run dev` - Modo de desenvolvimento do core

### Pacote Core

- `npm run build` - Compilar componentes e gerar wrappers
- `npm run start` - Desenvolvimento com hot reload
- `npm test` - Executar testes
- `npm run generate` - Gerar novo componente

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Convenções de Código

- Componentes devem ter o prefixo `ds-` (design system)
- Use TypeScript para type safety
- Documente propriedades e métodos públicos
- Crie testes para novos componentes
- Crie stories do Storybook para documentação visual

## 🔮 Próximos Passos

- [x] Adicionar componentes essenciais (Input, Textarea, Checkbox, Radio, Select) ✅
- [ ] **Aplicar design system do Figma** 🎨
- [ ] Fase 2: Componentes de navegação (Tabs, Accordion, Pagination)
- [ ] Fase 3: Overlays e modais (Dialog, Drawer, Tooltip)
- [ ] Implementar temas customizáveis
- [ ] Adicionar suporte a i18n
- [ ] Criar testes E2E
- [ ] CI/CD pipeline
- [ ] Publicar pacotes no npm

## 📄 Licença

MIT

## 👥 Autores

Desenvolvido com ❤️ usando Stencil e inspirado no Lion Web Components.

---

**Nota**: Este é um projeto de sistema de design framework-agnostic. Os componentes são construídos uma vez com Stencil e podem ser usados em qualquer framework moderno através dos wrappers gerados automaticamente.

