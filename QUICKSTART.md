# 🚀 Guia de Início Rápido - DS-Base

## ⚡ Setup em 3 Passos

### 1. Instalar dependências
```bash
npm install
```

### 2. Build dos componentes
```bash
npm run build
```

### 3. Iniciar o Storybook
```bash
npm run storybook
```

🎉 Pronto! O Storybook abrirá em `http://localhost:6006`

---

## 📁 Estrutura do Projeto

```
DS-base/
├── packages/
│   ├── core/           ← AQUI você cria componentes
│   ├── react/          ← Wrappers React (gerados automaticamente)
│   ├── angular/        ← Wrappers Angular (gerados automaticamente)
│   └── vue/            ← Wrappers Vue (gerados automaticamente)
└── .storybook/         ← Configuração do Storybook
```

---

## 🛠 Comandos Essenciais

| Comando | Descrição |
|---------|-----------|
| `npm run build` | Build do core (gera wrappers automaticamente) |
| `npm run dev` | Modo desenvolvimento com hot reload |
| `npm run storybook` | Iniciar Storybook (documentação interativa) |
| `npm test` | Executar testes |

---

## ➕ Criar um Novo Componente

### Método 1: Gerador Automático
```bash
cd packages/core
npm run generate
```

### Método 2: Manual
1. Criar pasta em `packages/core/src/components/`
2. Criar arquivos:
   - `ds-meu-componente.tsx` (componente)
   - `ds-meu-componente.css` (estilos)
   - `ds-meu-componente.spec.ts` (testes)
   - `ds-meu-componente.stories.ts` (Storybook)

### Exemplo Mínimo:
```typescript
// ds-meu-componente.tsx
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ds-meu-componente',
  styleUrl: 'ds-meu-componente.css',
  shadow: true,
})
export class DsMeuComponente {
  @Prop() texto: string = 'Olá!';

  render() {
    return <div>{this.texto}</div>;
  }
}
```

### 3. Build para gerar wrappers
```bash
npm run build
```

Os wrappers React, Angular e Vue são gerados automaticamente! ✨

---

## 📦 Usar os Componentes

### Vanilla JavaScript
```html
<script type="module" src="@ds-base/core"></script>
<ds-button variant="primary">Clique</ds-button>
```

### React
```jsx
import { DsButton } from '@ds-base/react';
<DsButton variant="primary">Clique</DsButton>
```

### Angular
```html
<ds-button variant="primary">Clique</ds-button>
```

### Vue
```vue
<DsButton variant="primary">Clique</DsButton>
```

---

## 🧪 Testar Localmente

### Opção 1: Storybook (Recomendado)
```bash
npm run storybook
```

### Opção 2: Servidor de desenvolvimento
```bash
npm run dev
```
Acesse: `http://localhost:3333`

### Opção 3: Arquivo HTML de exemplo
```bash
# Build primeiro
npm run build

# Abra o arquivo examples.html no navegador
```

---

## 🐛 Problemas Comuns

### Build falha
```bash
# Limpe e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Componente não aparece no Storybook
1. Verifique se o arquivo `.stories.ts` existe
2. Verifique se está na pasta `packages/core/src/components/`
3. Reinicie o Storybook

### Wrappers não são gerados
1. Verifique o `stencil.config.ts`
2. Execute `npm run build` no pacote core
3. Verifique se as pastas dos wrappers existem

---

## 📚 Próximos Passos

1. ✅ Explorar o Storybook (`npm run storybook`)
2. ✅ Ler o `CONTRIBUTING.md` para convenções
3. ✅ Criar seu primeiro componente
4. ✅ Adicionar testes
5. ✅ Documentar no Storybook

---

## 🆘 Precisa de Ajuda?

- 📖 Leia o [README.md](./README.md) completo
- 🤝 Veja o [CONTRIBUTING.md](./CONTRIBUTING.md)
- 📝 Abra uma issue no GitHub
- 🌐 Visite a documentação do [Stencil](https://stenciljs.com/)

---

**Dica**: Mantenha o Storybook rodando durante o desenvolvimento. Ele atualiza automaticamente quando você salva os arquivos! 🔥

