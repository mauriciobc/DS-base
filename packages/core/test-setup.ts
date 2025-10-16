// Configuração de teste para Stencil

// Declarações globais para funções de teste
declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualHtml(expected: string): R;
    }
  }
}

// Export vazio para tornar este arquivo um módulo
export {};
