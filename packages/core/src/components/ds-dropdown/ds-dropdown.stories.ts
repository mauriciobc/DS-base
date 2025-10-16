import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'ds-dropdown',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do campo',
    },
    label: {
      control: 'text',
      description: 'Label do dropdown',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do dropdown',
    },
    disabled: {
      control: 'boolean',
      description: 'Se o dropdown está desabilitado',
    },
    required: {
      control: 'boolean',
      description: 'Se o dropdown é obrigatório',
    },
    multiple: {
      control: 'boolean',
      description: 'Se permite seleção múltipla',
    },
    searchable: {
      control: 'boolean',
      description: 'Se permite busca/filtro',
    },
    variant: {
      control: 'select',
      options: ['noarrow', 'top', 'bottom'],
      description: 'Variação do dropdown',
    },
    helpText: {
      control: 'text',
      description: 'Texto de ajuda',
    },
    errorText: {
      control: 'text',
      description: 'Texto de erro',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'default-dropdown',
    label: 'Selecione uma opção',
    placeholder: 'Escolha uma opção...',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      placeholder=${args.placeholder}
      ?disabled=${args.disabled}
      ?required=${args.required}
      ?multiple=${args.multiple}
      ?searchable=${args.searchable}
      variant=${args.variant}
      help-text=${args.helpText}
      error-text=${args.errorText}
    >
      <ds-dropdown-item variant=${args.variant || 'noarrow'}>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Opção 1" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Opção 2" />
        </ds-menu-item>
        <ds-menu-item value="3" index="2">
          <ds-menu-item-content item-title="Opção 3" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const WithArrowTop: Story = {
  args: {
    name: 'arrow-top-dropdown',
    label: 'Dropdown com seta no topo',
    variant: 'top',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      variant=${args.variant}
    >
      <ds-dropdown-item variant=${args.variant}>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Primeira opção" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Segunda opção" />
        </ds-menu-item>
        <ds-menu-item value="3" index="2">
          <ds-menu-item-content item-title="Terceira opção" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const WithArrowBottom: Story = {
  args: {
    name: 'arrow-bottom-dropdown',
    label: 'Dropdown com seta na base',
    variant: 'bottom',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      variant=${args.variant}
    >
      <ds-dropdown-item variant=${args.variant}>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Opção 1" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Opção 2" />
        </ds-menu-item>
        <ds-menu-item value="3" index="2">
          <ds-menu-item-content item-title="Opção 3" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const Searchable: Story = {
  args: {
    name: 'searchable-dropdown',
    label: 'Dropdown com busca',
    searchable: true,
    placeholder: 'Digite para buscar...',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      placeholder=${args.placeholder}
      ?searchable=${args.searchable}
    >
      <ds-dropdown-item>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Apple" subitem-title="Fruta vermelha" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Banana" subitem-title="Fruta amarela" />
        </ds-menu-item>
        <ds-menu-item value="3" index="2">
          <ds-menu-item-content item-title="Laranja" subitem-title="Fruta laranja" />
        </ds-menu-item>
        <ds-menu-item value="4" index="3">
          <ds-menu-item-content item-title="Uva" subitem-title="Fruta roxa" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const MultipleSelection: Story = {
  args: {
    name: 'multiple-dropdown',
    label: 'Seleção múltipla',
    multiple: true,
    placeholder: 'Selecione múltiplas opções...',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      placeholder=${args.placeholder}
      ?multiple=${args.multiple}
    >
      <ds-dropdown-item>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Opção 1" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Opção 2" />
        </ds-menu-item>
        <ds-menu-item value="3" index="2">
          <ds-menu-item-content item-title="Opção 3" />
        </ds-menu-item>
        <ds-menu-item value="4" index="3">
          <ds-menu-item-content item-title="Opção 4" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const WithError: Story = {
  args: {
    name: 'error-dropdown',
    label: 'Dropdown com erro',
    errorText: 'Este campo é obrigatório',
    required: true,
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      error-text=${args.errorText}
      ?required=${args.required}
    >
      <ds-dropdown-item>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Opção 1" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Opção 2" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const Disabled: Story = {
  args: {
    name: 'disabled-dropdown',
    label: 'Dropdown desabilitado',
    disabled: true,
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      ?disabled=${args.disabled}
    >
      <ds-dropdown-item>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Opção 1" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Opção 2" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const WithHelpText: Story = {
  args: {
    name: 'help-dropdown',
    label: 'Dropdown com ajuda',
    helpText: 'Selecione uma opção da lista abaixo',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
      help-text=${args.helpText}
    >
      <ds-dropdown-item>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content item-title="Opção 1" />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content item-title="Opção 2" />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};

export const WithComplexContent: Story = {
  args: {
    name: 'complex-dropdown',
    label: 'Dropdown com conteúdo complexo',
  },
  render: (args) => html`
    <ds-dropdown
      name=${args.name}
      label=${args.label}
    >
      <ds-dropdown-item>
        <ds-menu-item value="1" index="0">
          <ds-menu-item-content 
            item-title="João Silva" 
            subitem-title="Desenvolvedor Senior"
            overline="Equipe de Desenvolvimento"
          />
        </ds-menu-item>
        <ds-menu-item value="2" index="1">
          <ds-menu-item-content 
            item-title="Maria Santos" 
            subitem-title="Designer UX/UI"
            overline="Equipe de Design"
          />
        </ds-menu-item>
        <ds-menu-item value="3" index="2">
          <ds-menu-item-content 
            item-title="Pedro Costa" 
            subitem-title="Product Manager"
            overline="Equipe de Produto"
          />
        </ds-menu-item>
      </ds-dropdown-item>
    </ds-dropdown>
  `,
};
