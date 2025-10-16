import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'ds-avatar',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Componente de avatar que exibe imagem do usuário, iniciais ou ícone de fallback.'
      }
    }
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'URL da imagem do avatar'
    },
    alt: {
      control: 'text',
      description: 'Text alternativo para a imagem'
    },
    name: {
      control: 'text',
      description: 'Nome para gerar iniciais automaticamente'
    },
    initials: {
      control: 'text',
      description: 'Iniciais customizadas (sobrescreve geração automática)'
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do avatar'
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Forma do avatar'
    },
    badge: {
      control: 'text',
      description: 'Texto do badge'
    },
    badgePosition: {
      control: 'select',
      options: ['top-right', 'bottom-right'],
      description: 'Posição do badge'
    },
    status: {
      control: 'select',
      options: ['online', 'offline', 'away', 'busy'],
      description: 'Status do usuário'
    }
  }
};

export default meta;
type Story = StoryObj;

// Story: Default
export const Default: Story = {
  args: {
    name: 'João Silva'
  },
  render: (args) => html`
    <ds-avatar
      src=${args.src || ''}
      alt=${args.alt || ''}
      name=${args.name || ''}
      initials=${args.initials || ''}
      size=${args.size || 'md'}
      shape=${args.shape || 'circle'}
      badge=${args.badge || ''}
      badgePosition=${args.badgePosition || 'bottom-right'}
      status=${args.status || ''}
    ></ds-avatar>
  `
};

// Story: With Image
export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    alt: 'João Silva',
    name: 'João Silva'
  },
  render: (args) => html`
    <ds-avatar
      src=${args.src}
      alt=${args.alt}
      name=${args.name}
      size=${args.size || 'md'}
      shape=${args.shape || 'circle'}
    ></ds-avatar>
  `
};

// Story: With Custom Initials
export const WithCustomInitials: Story = {
  args: {
    initials: 'JS',
    size: 'md'
  },
  render: (args) => html`
    <ds-avatar
      initials=${args.initials}
      size=${args.size}
      shape=${args.shape || 'circle'}
    ></ds-avatar>
  `
};

// Story: Sizes
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ds-avatar name="XS" size="xs"></ds-avatar>
      <ds-avatar name="SM" size="sm"></ds-avatar>
      <ds-avatar name="MD" size="md"></ds-avatar>
      <ds-avatar name="LG" size="lg"></ds-avatar>
      <ds-avatar name="XL" size="xl"></ds-avatar>
    </div>
  `
};

// Story: Shapes
export const Shapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ds-avatar name="Circle" shape="circle" size="lg"></ds-avatar>
      <ds-avatar name="Square" shape="square" size="lg"></ds-avatar>
    </div>
  `
};

// Story: With Badge
export const WithBadge: Story = {
  args: {
    name: 'Maria Santos',
    badge: '3',
    badgePosition: 'bottom-right'
  },
  render: (args) => html`
    <ds-avatar
      name=${args.name}
      badge=${args.badge}
      badgePosition=${args.badgePosition}
      size=${args.size || 'md'}
    ></ds-avatar>
  `
};

// Story: With Status
export const WithStatus: Story = {
  args: {
    name: 'Ana Lima',
    status: 'online'
  },
  render: (args) => html`
    <ds-avatar
      name=${args.name}
      status=${args.status}
      size=${args.size || 'md'}
    ></ds-avatar>
  `
};

// Story: All Status
export const AllStatus: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ds-avatar name="Online" status="online" size="lg"></ds-avatar>
      <ds-avatar name="Offline" status="offline" size="lg"></ds-avatar>
      <ds-avatar name="Away" status="away" size="lg"></ds-avatar>
      <ds-avatar name="Busy" status="busy" size="lg"></ds-avatar>
    </div>
  `
};

// Story: With Badge and Status
export const WithBadgeAndStatus: Story = {
  args: {
    name: 'Pedro Costa',
    badge: '5',
    status: 'online',
    badgePosition: 'top-right'
  },
  render: (args) => html`
    <ds-avatar
      name=${args.name}
      badge=${args.badge}
      status=${args.status}
      badgePosition=${args.badgePosition}
      size=${args.size || 'lg'}
    ></ds-avatar>
  `
};

// Story: Fallback Behavior
export const FallbackBehavior: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
      <div>
        <h4>Imagem válida:</h4>
        <ds-avatar 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
          alt="João Silva"
          name="João Silva"
          size="lg">
        </ds-avatar>
      </div>
      
      <div>
        <h4>Imagem inválida (fallback para iniciais):</h4>
        <ds-avatar 
          src="https://invalid-url.com/image.jpg"
          name="João Silva"
          size="lg">
        </ds-avatar>
      </div>
      
      <div>
        <h4>Sem imagem, com nome (gera iniciais):</h4>
        <ds-avatar 
          name="Maria Santos"
          size="lg">
        </ds-avatar>
      </div>
      
      <div>
        <h4>Sem imagem, sem nome (ícone padrão):</h4>
        <ds-avatar size="lg"></ds-avatar>
      </div>
    </div>
  `
};

// Story: Interactive
export const Interactive: Story = {
  args: {
    name: 'João Silva',
    size: 'md',
    shape: 'circle',
    badge: '',
    status: 'online'
  },
  render: (args) => html`
    <ds-avatar
      src=${args.src || ''}
      alt=${args.alt || ''}
      name=${args.name || ''}
      initials=${args.initials || ''}
      size=${args.size}
      shape=${args.shape}
      badge=${args.badge}
      badgePosition=${args.badgePosition || 'bottom-right'}
      status=${args.status}
    ></ds-avatar>
  `
};
