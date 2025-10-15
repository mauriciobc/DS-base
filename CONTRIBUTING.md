# Guia de Contribuição

Obrigado por considerar contribuir com o DS-Base! 🎉

## 🚀 Começando

1. **Fork o repositório**
2. **Clone seu fork**
   ```bash
   git clone https://github.com/seu-usuario/DS-base.git
   cd DS-base
   ```
3. **Instale as dependências**
   ```bash
   npm install
   ```
4. **Crie uma branch**
   ```bash
   git checkout -b feature/nome-da-feature
   ```

## 📝 Convenções de Código

### Nomenclatura

- **Componentes**: Use o prefixo `ds-` seguido do nome em kebab-case
  - ✅ `ds-button`
  - ✅ `ds-input`
  - ❌ `button`
  - ❌ `dsButton`

- **Arquivos**: 
  - Componentes: `nome-componente.tsx`
  - Estilos: `nome-componente.css`
  - Testes: `nome-componente.spec.ts`
  - Stories: `nome-componente.stories.ts`

### Estrutura de um Componente

```typescript
import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-nome-componente',
  styleUrl: 'ds-nome-componente.css',
  shadow: true,
})
export class DsNomeComponente {
  /**
   * Documentação da propriedade
   */
  @Prop() minhaPropriedade: string = 'valor-padrao';

  render() {
    return (
      <Host>
        <div class="wrapper">
          <slot />
        </div>
      </Host>
    );
  }
}
```

## 🧪 Testes

Todos os novos componentes devem ter testes:

```typescript
import { newSpecPage } from '@stencil/core/testing';
import { DsNomeComponente } from './ds-nome-componente';

describe('ds-nome-componente', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DsNomeComponente],
      html: `<ds-nome-componente></ds-nome-componente>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-nome-componente>
        <mock:shadow-root>
          <!-- conteúdo esperado -->
        </mock:shadow-root>
      </ds-nome-componente>
    `);
  });
});
```

## 📖 Documentação

### Storybook

Crie stories para cada componente:

```typescript
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/NomeComponente',
  tags: ['autodocs'],
  argTypes: {
    // definir controles
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-nome-componente prop="${args.prop}">
      Conteúdo
    </ds-nome-componente>
  `,
};
```

### README do Componente

Cada componente deve ter um `readme.md` na sua pasta:

```markdown
# ds-nome-componente

Breve descrição do componente.

## Uso

\`\`\`html
<ds-nome-componente prop="value">
  Conteúdo
</ds-nome-componente>
\`\`\`

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `prop` | `string` | `''` | Descrição da prop |
```

## 🔄 Processo de Pull Request

1. **Atualize sua branch**
   ```bash
   git checkout main
   git pull upstream main
   git checkout feature/sua-feature
   git rebase main
   ```

2. **Execute os testes**
   ```bash
   npm test
   ```

3. **Build do projeto**
   ```bash
   npm run build
   ```

4. **Commit suas mudanças**
   ```bash
   git add .
   git commit -m "feat: adicionar componente X"
   ```

   Use [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` - Nova funcionalidade
   - `fix:` - Correção de bug
   - `docs:` - Documentação
   - `style:` - Formatação
   - `refactor:` - Refatoração
   - `test:` - Testes
   - `chore:` - Manutenção

5. **Push para seu fork**
   ```bash
   git push origin feature/sua-feature
   ```

6. **Abra um Pull Request**
   - Descreva suas mudanças
   - Referencie issues relacionadas
   - Adicione screenshots se aplicável

## ✅ Checklist

Antes de abrir um PR, verifique:

- [ ] Código segue as convenções do projeto
- [ ] Testes escritos e passando
- [ ] Documentação atualizada (README, Storybook)
- [ ] Build executado com sucesso
- [ ] Commit messages seguem Conventional Commits
- [ ] Branch está atualizada com main

## 🐛 Reportando Bugs

Ao reportar bugs, inclua:

- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs. atual
- Screenshots (se aplicável)
- Ambiente (navegador, versão, OS)

## 💡 Sugerindo Features

Ao sugerir features:

- Descreva o caso de uso
- Explique por que seria útil
- Forneça exemplos de uso
- Considere alternativas

## 📞 Dúvidas?

- Abra uma issue com a tag `question`
- Entre em contato com os mantenedores

## 📜 Código de Conduta

- Seja respeitoso
- Seja colaborativo
- Aceite feedback construtivo
- Foque no que é melhor para a comunidade

Obrigado por contribuir! 🙏

