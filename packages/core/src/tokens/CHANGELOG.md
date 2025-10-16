# Changelog - Design Tokens

Todas as mudanças notáveis nos Design Tokens serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - ${new Date().toLocaleDateString('pt-BR')}

### ✨ Adicionado

#### 🎨 Cores
- **Text Colors**: primary, secondary, placeholder, disabled
- **Brand Colors**: base, base50
- **Structure Colors**: bgBase, bgBaseDisabled, borderColor, borderColorSecondary
- **Semantic Colors**: success, danger, warning
- **Gray Palette**: gray2, gray3, gray5, gray6, gray7, gray8
- **Blue Palette**: blue5

#### 📝 Tipografia
- **Font Families**: sans (Lato)
- **Desktop Body Large**: regular e bold
- **Desktop Body Medium**: regular e bold
- **Desktop Body Small**: regular e bold
- **Desktop Footnote**: regular
- Helper function `getTypographyStyles()`

#### 📏 Espaçamento
- **Spacing Scale**: xxs (2px), xs (4px), sm (8px), rg (12px), md (16px)
- Helper functions: `getSpacing()`, `customSpacing()`

#### 🔲 Border Radius
- **Radius Scale**: xs (4px), sm (8px), md (12px), lg (16px)
- Helper functions: `getRadius()`, `customRadius()`

#### 📚 Documentação
- README.md completo com exemplos de uso
- Arquivo de exemplos práticos (example.usage.ts)
- Comentários JSDoc em todos os tokens
- Tipos TypeScript para autocompletar

#### 🔧 Infraestrutura
- Estrutura modular de arquivos
- Export centralizado via index.ts
- Integração com o core do DS-base
- Metadados de versão e fonte do Figma

### 📦 Fonte dos Tokens

Importado do Figma:
- **Design System**: Voa Design System
- **URL**: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System
- **Data de Importação**: ${new Date().toISOString()}
- **Ferramenta**: Figma MCP (Model Context Protocol)

### 🎯 Uso

```typescript
import { colors, typography, spacing, radius } from '@ds-base/core';

// Use os tokens em seus componentes
const buttonStyle = {
  backgroundColor: colors.brand.base,
  padding: \`\${spacing.sm}px \${spacing.md}px\`,
  borderRadius: \`\${radius.sm}px\`,
  fontFamily: typography.fontFamilies.sans,
};
```

### 📋 Checklist de Qualidade

- ✅ Todos os tokens extraídos do Figma
- ✅ Organização por categoria (cores, tipografia, espaçamento, radius)
- ✅ TypeScript types para autocompletar
- ✅ Documentação completa com exemplos
- ✅ Helper functions para conversão de unidades
- ✅ Sem erros de linter
- ✅ Exports centralizados
- ✅ Versionamento semântico

---

## Guia de Versionamento

- **MAJOR** (x.0.0): Mudanças que quebram compatibilidade (remoção de tokens, mudança de estrutura)
- **MINOR** (0.x.0): Novas funcionalidades compatíveis (novos tokens, novos helpers)
- **PATCH** (0.0.x): Correções e ajustes (valores atualizados, documentação)

## Próximas Versões (Roadmap)

### [1.1.0] - Planejado
- [ ] Tokens de sombra (box-shadow, text-shadow)
- [ ] Tokens de animação (duration, easing)
- [ ] Tokens de breakpoints responsivos
- [ ] Modo escuro (dark mode)
- [ ] Tokens de z-index

### [1.2.0] - Planejado
- [ ] CLI para sincronização automática com Figma
- [ ] Validação de tokens
- [ ] Testes automatizados
- [ ] Storybook integration

---

**Mantenedores**: @DS-base Team  
**Última Atualização**: ${new Date().toLocaleDateString('pt-BR')}



