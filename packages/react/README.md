# @ds-base/react

Componentes React gerados automaticamente a partir dos Web Components do DS-Base.

## Instalação

```bash
npm install @ds-base/react
```

## Uso

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

## Componentes Disponíveis

- `DsButton` - Componente de botão com variantes primary, secondary e tertiary

## Nota

Este pacote é gerado automaticamente pelo Stencil. Os arquivos em `src/components/stencil-generated/` 
não devem ser editados manualmente, pois serão sobrescritos durante o build do pacote core.

