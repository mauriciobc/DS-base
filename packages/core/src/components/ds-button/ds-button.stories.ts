import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Variante visual do botão',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Se o botão está desabilitado',
      table: {
        defaultValue: { summary: false },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo do botão HTML',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
  },
  args: {
    variant: 'primary',
    disabled: false,
    type: 'button',
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: false,
  },
  render: (args) => html`
    <ds-button variant="${args.variant}" ?disabled="${args.disabled}" type="${args.type}">
      Primary Button
    </ds-button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => html`
    <ds-button variant="${args.variant}" ?disabled="${args.disabled}" type="${args.type}">
      Secondary Button
    </ds-button>
  `,
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
  render: (args) => html`
    <ds-button variant="${args.variant}" ?disabled="${args.disabled}" type="${args.type}">
      Tertiary Button
    </ds-button>
  `,
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: (args) => html`
    <ds-button variant="${args.variant}" ?disabled="${args.disabled}" type="${args.type}">
      Disabled Button
    </ds-button>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <ds-button variant="primary">Primary</ds-button>
      <ds-button variant="secondary">Secondary</ds-button>
      <ds-button variant="tertiary">Tertiary</ds-button>
    </div>
  `,
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; flex-direction: column; align-items: flex-start;">
      <div style="display: flex; gap: 1rem;">
        <ds-button variant="primary">Habilitado</ds-button>
        <ds-button variant="primary" disabled>Desabilitado</ds-button>
      </div>
      <div style="display: flex; gap: 1rem;">
        <ds-button variant="secondary">Habilitado</ds-button>
        <ds-button variant="secondary" disabled>Desabilitado</ds-button>
      </div>
      <div style="display: flex; gap: 1rem;">
        <ds-button variant="tertiary">Habilitado</ds-button>
        <ds-button variant="tertiary" disabled>Desabilitado</ds-button>
      </div>
    </div>
  `,
};

export const WithClick: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => html`
    <ds-button 
      variant="${args.variant}" 
      ?disabled="${args.disabled}"
      @click="${() => alert('Button clicked!')}"
    >
      Clique aqui!
    </ds-button>
  `,
};

