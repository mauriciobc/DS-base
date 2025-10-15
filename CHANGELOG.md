# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.1.0] - 2025-10-14

### Adicionado - Fase 1: Componentes Essenciais
- **Componente `ds-input`**: Campo de texto com validações, múltiplos tipos (text, email, password, number, tel, url, search)
- **Componente `ds-textarea`**: Campo multilinha com auto-resize e contador de caracteres
- **Componente `ds-checkbox-group`**: Grupo de checkboxes com orientação vertical/horizontal
- **Componente `ds-radio-group`**: Grupo de radio buttons com seleção única
- **Componente `ds-select`**: Dropdown select com suporte a optgroup
- Wrappers React/Angular/Vue para todos os novos componentes (gerados automaticamente)
- Stories Storybook para todos os componentes
- Testes unitários para os 5 novos componentes
- Documentação completa em `PHASE1_COMPLETION.md`

### Características dos Novos Componentes
- **Unstyled**: Apenas estrutura e funcionalidade (design será aplicado via Figma)
- **Acessíveis**: ARIA labels, roles, keyboard navigation
- **Validação**: Estados de erro, mensagens customizáveis
- **TypeScript**: Tipagem completa e documentação JSDoc
- **Testados**: Unit tests com Stencil testing
- **Documentados**: READMEs e stories interativas

### Melhorias
- Atualizado README principal com lista de todos os componentes
- Criado plano de implementação baseado no Lion Web Components
- Documentação de classes CSS para estilização externa

## [1.0.0] - 2025-10-14

### Adicionado - Setup Inicial
- Estrutura inicial do monorepo com npm workspaces
- Pacote `@ds-base/core` com Stencil
- Pacote `@ds-base/react` com wrappers React
- Pacote `@ds-base/angular` com wrappers Angular
- Pacote `@ds-base/vue` com wrappers Vue
- Componente `ds-button` com três variantes (primary, secondary, tertiary)
- Configuração do Storybook para documentação
- Output targets para geração automática de wrappers
- Testes unitários para componentes
- Documentação completa (README, CONTRIBUTING)
- Configuração de build e desenvolvimento

### Características
- Framework-agnostic: funciona com React, Angular, Vue e vanilla JS
- Shadow DOM para encapsulamento de estilos
- TypeScript para type safety
- Testes automatizados
- Documentação interativa com Storybook
- Geração automática de wrappers para frameworks

