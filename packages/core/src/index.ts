// Exportar tipos principais do Stencil
export { Components, JSX } from './components';

// Exportar componentes usando wildcard exports
// Convenção: usar 'export *' para componentes permite que todos os exports
// de cada componente sejam automaticamente disponibilizados
export * from './components/ds-button/ds-button';
export * from './components/ds-input/ds-input';
export * from './components/ds-textarea/ds-textarea';
export * from './components/ds-checkbox/ds-checkbox';
export * from './components/ds-checkbox-group/ds-checkbox-group';
export * from './components/ds-radio-group/ds-radio-group';
export * from './components/ds-select/ds-select';
export * from './components/ds-avatar/ds-avatar';
export * from './components/ds-dropdown/ds-dropdown';
export * from './components/ds-dropdown-item/ds-dropdown-item';
export * from './components/ds-menu-item/ds-menu-item';
export * from './components/ds-menu-item-content/ds-menu-item-content';

// Export Design Tokens
export * from './tokens';

