# DsAvatar

Componente de avatar que exibe imagem do usuário, iniciais ou ícone de fallback.

## Uso

```html
<!-- Avatar com imagem -->
<ds-avatar src="https://example.com/avatar.jpg" alt="João Silva"></ds-avatar>

<!-- Avatar com iniciais geradas do nome -->
<ds-avatar name="João Silva"></ds-avatar>

<!-- Avatar com iniciais customizadas -->
<ds-avatar initials="JS"></ds-avatar>

<!-- Avatar com tamanho e forma específicos -->
<ds-avatar name="Maria Santos" size="lg" shape="square"></ds-avatar>

<!-- Avatar com badge -->
<ds-avatar name="Pedro Costa" badge="3"></ds-avatar>

<!-- Avatar com status -->
<ds-avatar name="Ana Lima" status="online"></ds-avatar>
```

## Propriedades

| Propriedade | Tipo | Padrão | Descrição |
|-------------|------|--------|-----------|
| `src` | `string` | - | URL da imagem do avatar |
| `alt` | `string` | - | Texto alternativo para a imagem |
| `name` | `string` | - | Nome para gerar iniciais automaticamente |
| `initials` | `string` | - | Iniciais customizadas (sobrescreve geração automática) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Tamanho do avatar |
| `shape` | `'circle' \| 'square'` | `'circle'` | Forma do avatar |
| `badge` | `string` | - | Texto do badge |
| `badgePosition` | `'top-right' \| 'bottom-right'` | `'bottom-right'` | Posição do badge |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | - | Status do usuário |

## Lógica de Fallback

O componente segue esta ordem de prioridade para exibir o conteúdo:

1. **Imagem**: Se `src` for fornecido e carregar com sucesso
2. **Iniciais customizadas**: Se `initials` for fornecido
3. **Iniciais geradas**: Se `name` for fornecido, extrai as primeiras letras
4. **Ícone padrão**: Fallback final com ícone de usuário

## Tamanhos

| Tamanho | Dimensões |
|---------|-----------|
| `xs` | 24x24px |
| `sm` | 32x32px |
| `md` | 48x48px |
| `lg` | 64x64px |
| `xl` | 96x96px |

## Geração de Iniciais

As iniciais são geradas automaticamente a partir do nome:
- Extrai a primeira letra de cada palavra
- Limita a 2 caracteres máximo
- Converte para maiúsculas
- Gera cor de fundo consistente baseada no texto

**Exemplos:**
- "João Silva" → "JS"
- "Maria" → "M"
- "Ana Carolina Santos" → "AC"

## Badge

O badge é exibido como um indicador numérico ou de texto:
- Posicionado no canto superior ou inferior direito
- Tamanho ajustado automaticamente para avatares pequenos
- Cor e estilo definidos pelo design system

## Status

Indicador visual do status do usuário:
- `online`: Verde
- `offline`: Cinza
- `away`: Amarelo
- `busy`: Vermelho

## Acessibilidade

- Imagens incluem texto alternativo via `alt`
- Iniciais são semanticamente corretas
- Componente é navegável por teclado
- Suporte a leitores de tela

## Estilização

O componente é "unstyled" por design, fornecendo apenas:
- Estrutura e posicionamento
- Tamanhos e formas
- Layout responsivo

Cores, fontes e decorações são aplicadas pelo design system através de CSS customizado.
