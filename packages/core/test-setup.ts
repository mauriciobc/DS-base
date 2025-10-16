// Configuração de teste para Stencil
// Declarações globais para funções de teste
declare global {
  namespace jest {
    interface Matchers<R> {
      toEqualHtml(expected: string): R;
    }
  }
}

// Declarações globais para funções de teste
declare global {
  const describe: jest.Describe;
  const it: jest.It;
  const expect: jest.Expect;
  const beforeEach: jest.Lifecycle;
  const afterEach: jest.Lifecycle;
  const beforeAll: jest.Lifecycle;
  const afterAll: jest.Lifecycle;
  const jest: typeof jest;
}
