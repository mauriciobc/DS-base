# Design Tokens - Voa Design System

Este diretório contém todos os **Design Tokens** importados do Figma. Os tokens são valores reutilizáveis que definem o estilo visual da aplicação.

## 📦 O que são Design Tokens?

Design Tokens são os "átomos" do design system - valores fundamentais como cores, espaçamentos, tipografia e border radius que garantem consistência visual em toda a aplicação.

## 📁 Estrutura de Arquivos

```
tokens/
├── colors.ts       # Todas as cores (texto, marca, semântica, paletas)
├── typography.ts   # Estilos de texto (fontes, tamanhos, pesos)
├── spacing.ts      # Espaçamentos (margens, paddings, gaps)
├── radius.ts       # Border radius (arredondamento de cantos)
├── index.ts        # Exporta todos os tokens
└── README.md       # Este arquivo
```

## 🎨 Cores

### Categorias de Cores

- **Text Colors**: Cores para textos (primário, secundário, placeholder, disabled)
- **Brand Colors**: Cores da identidade visual (base, base50)
- **Structure Colors**: Cores estruturais (backgrounds, bordas)
- **Semantic Colors**: Cores para estados (success, danger, warning)
- **Gray Palette**: Escala completa de cinzas (gray2 a gray8)
- **Blue Palette**: Escala de azuis

### Exemplos de Uso

```typescript
import { colors } from './tokens';

// Usando cores de texto
const textColor = colors.text.primary; // '#0b1215'
const secondaryText = colors.text.secondary; // '#495057'

// Usando cores da marca
const brandColor = colors.brand.base; // '#0064cb'

// Usando cores semânticas
const successColor = colors.semantic.success; // '#109e7c'
const dangerColor = colors.semantic.danger; // '#e51937'

// Usando paleta de cinzas
const bgColor = colors.gray.gray2; // '#e9ecef'
```

### Uso em CSS/Styled Components

```typescript
import styled from 'styled-components';
import { colors } from './tokens';

const Button = styled.button`
  background-color: ${colors.brand.base};
  color: ${colors.structure.bgBase};
  border: 1px solid ${colors.structure.borderColor};
  
  &:disabled {
    background-color: ${colors.structure.bgBaseDisabled};
    color: ${colors.text.disabled};
  }
`;
```

## 📝 Tipografia

### Estilos Disponíveis

- **Desktop Body Large**: Regular (20px) e Bold (20px)
- **Desktop Body Medium**: Regular (16px) e Bold (16px)
- **Desktop Body Small**: Regular (14px) e Bold (14px)
- **Desktop Footnote**: Regular (12px)

### Exemplos de Uso

```typescript
import { typography, getTypographyStyles } from './tokens';

// Acessar estilos
const bodyStyle = typography.desktop.bodyMedium.regular;
console.log(bodyStyle);
// {
//   fontFamily: 'Lato',
//   fontSize: 16,
//   fontWeight: 400,
//   lineHeight: 24,
//   fontStyle: 'Regular'
// }

// Usar helper para gerar CSS
const cssStyles = getTypographyStyles(bodyStyle);
// "font-family: Lato; font-size: 16px; font-weight: 400; line-height: 24px;"
```

### Uso em CSS/Styled Components

```typescript
import styled from 'styled-components';
import { typography } from './tokens';

const Heading = styled.h1`
  font-family: ${typography.fontFamilies.sans};
  font-size: ${typography.desktop.bodyLarge.bold.fontSize}px;
  font-weight: ${typography.desktop.bodyLarge.bold.fontWeight};
  line-height: ${typography.desktop.bodyLarge.bold.lineHeight}px;
`;
```

## 📏 Espaçamento

### Escala de Espaçamento

- **xxs**: 2px - Espaçamentos mínimos
- **xs**: 4px - Espaçamentos extra pequenos
- **sm**: 8px - Espaçamentos pequenos
- **rg**: 12px - Espaçamentos regulares
- **md**: 16px - Espaçamentos médios

### Exemplos de Uso

```typescript
import { spacing, getSpacing, customSpacing } from './tokens';

// Usar valores diretos
const padding = spacing.md; // 16

// Usar helper para diferentes unidades
const paddingPx = getSpacing('md', 'px'); // '16px'
const paddingRem = getSpacing('md', 'rem'); // '1rem'
const paddingEm = getSpacing('md', 'em'); // '1em'

// Criar espaçamento customizado (múltiplos de 2px)
const customPadding = customSpacing(5); // 10px (2 * 5)
```

### Uso em CSS/Styled Components

```typescript
import styled from 'styled-components';
import { spacing } from './tokens';

const Card = styled.div`
  padding: ${spacing.md}px;
  margin: ${spacing.sm}px;
  gap: ${spacing.rg}px;
`;
```

## 🔲 Border Radius

### Escala de Arredondamento

- **xs**: 4px - Para elementos muito pequenos
- **sm**: 8px - Para botões e inputs pequenos
- **md**: 12px - Para cartões e containers médios
- **lg**: 16px - Para cartões e containers grandes

### Exemplos de Uso

```typescript
import { radius, getRadius, customRadius } from './tokens';

// Usar valores diretos
const borderRadius = radius.md; // 12

// Usar helper para diferentes unidades
const radiusPx = getRadius('md', 'px'); // '12px'
const radiusRem = getRadius('md', 'rem'); // '0.75rem'

// Criar radius customizado
const custom = customRadius(20); // '20px'
```

### Uso em CSS/Styled Components

```typescript
import styled from 'styled-components';
import { radius } from './tokens';

const Button = styled.button`
  border-radius: ${radius.sm}px;
`;

const Card = styled.div`
  border-radius: ${radius.lg}px;
`;
```

## 🚀 Importação Consolidada

Você pode importar todos os tokens de uma vez:

```typescript
import { tokens } from './tokens';

// Acessar todas as categorias
tokens.colors.brand.base;
tokens.typography.desktop.bodyMedium.regular;
tokens.spacing.md;
tokens.radius.lg;
```

## 🔄 Sincronização com Figma

Os tokens foram importados do arquivo Figma:
- **Nome**: Voa Design System
- **URL**: https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System

Para atualizar os tokens:
1. Abra o arquivo no Figma Desktop
2. Use o MCP do Figma para extrair as variáveis atualizadas
3. Regenere os arquivos de tokens

## 💡 Boas Práticas

1. **Sempre use tokens** ao invés de valores hardcoded
2. **Não crie valores customizados** sem necessidade - use os tokens existentes
3. **Mantenha consistência** - se um componente usa `spacing.md`, outros similares devem usar o mesmo
4. **TypeScript ajuda** - use o autocompletar do IDE para descobrir tokens disponíveis
5. **Documente** - se criar um novo padrão de uso, documente aqui

## 🎯 Exemplo Completo - Componente de Input

```typescript
import styled from 'styled-components';
import { colors, spacing, radius, typography } from './tokens';

const Input = styled.input`
  /* Tipografia */
  font-family: ${typography.fontFamilies.sans};
  font-size: ${typography.desktop.bodyMedium.regular.fontSize}px;
  font-weight: ${typography.desktop.bodyMedium.regular.fontWeight};
  line-height: ${typography.desktop.bodyMedium.regular.lineHeight}px;
  
  /* Cores */
  color: ${colors.text.primary};
  background-color: ${colors.structure.bgBase};
  border: 1px solid ${colors.structure.borderColor};
  
  /* Espaçamento */
  padding: ${spacing.sm}px ${spacing.md}px;
  margin-bottom: ${spacing.rg}px;
  
  /* Border radius */
  border-radius: ${radius.sm}px;
  
  /* Estados */
  &::placeholder {
    color: ${colors.text.placeholder};
  }
  
  &:disabled {
    background-color: ${colors.structure.bgBaseDisabled};
    color: ${colors.text.disabled};
  }
  
  &:focus {
    border-color: ${colors.brand.base};
    outline: 2px solid ${colors.brand.base50};
  }
`;

export default Input;
```

## 📚 Recursos Adicionais

- [Figma - Voa Design System](https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System)
- [Design Tokens - O que são?](https://spectrum.adobe.com/page/design-tokens/)
- [Stencil.js Documentation](https://stenciljs.com/)

---

**Última atualização**: ${new Date().toLocaleDateString('pt-BR')}
**Versão dos Tokens**: 1.0.0

