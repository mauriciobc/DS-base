import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Textarea',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    rows: {
      control: { type: 'number' },
      description: 'Number of rows',
      table: {
        defaultValue: { summary: 3 },
      },
    },
    maxlength: {
      control: { type: 'number' },
      description: 'Maximum length',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is readonly',
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the textarea is required',
      table: {
        defaultValue: { summary: false },
      },
    },
    autoResize: {
      control: { type: 'boolean' },
      description: 'Auto-resize based on content',
      table: {
        defaultValue: { summary: false },
      },
    },
    showCounter: {
      control: { type: 'boolean' },
      description: 'Show character counter',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    label: '',
    placeholder: '',
    rows: 3,
    disabled: false,
    readonly: false,
    required: false,
    autoResize: false,
    showCounter: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      placeholder="${args.placeholder}"
      rows="${args.rows}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
      ?auto-resize="${args.autoResize}"
      ?show-counter="${args.showCounter}"
    ></ds-textarea>
  `,
};

export const WithLabel: Story = {
  args: {
    label: 'Comentário',
    placeholder: 'Digite seu comentário aqui...',
  },
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      placeholder="${args.placeholder}"
      rows="4"
    ></ds-textarea>
  `,
};

export const WithCounter: Story = {
  args: {
    label: 'Descrição',
    placeholder: 'Máximo de 200 caracteres',
    maxlength: 200,
    showCounter: true,
  },
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      placeholder="${args.placeholder}"
      maxlength="${args.maxlength}"
      ?show-counter="${args.showCounter}"
      rows="4"
    ></ds-textarea>
  `,
};

export const AutoResize: Story = {
  args: {
    label: 'Mensagem (auto-resize)',
    autoResize: true,
  },
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      ?auto-resize="${args.autoResize}"
      placeholder="Este campo cresce conforme você digita..."
    ></ds-textarea>
  `,
};

export const WithError: Story = {
  args: {
    label: 'Feedback',
    errorText: 'Este campo é obrigatório',
  },
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      error-text="${args.errorText}"
      rows="3"
    ></ds-textarea>
  `,
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    disabled: true,
    value: 'Este conteúdo não pode ser editado',
  },
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      ?disabled="${args.disabled}"
      value="${args.value}"
    ></ds-textarea>
  `,
};

export const Readonly: Story = {
  args: {
    label: 'Termos de uso',
    readonly: true,
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  render: (args) => html`
    <ds-textarea
      label="${args.label}"
      ?readonly="${args.readonly}"
      value="${args.value}"
      rows="5"
    ></ds-textarea>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1rem; max-width: 500px;">
      <ds-input
        label="Título"
        placeholder="Digite o título"
        required
      ></ds-input>
      
      <ds-textarea
        label="Descrição"
        placeholder="Digite a descrição..."
        rows="5"
        maxlength="500"
        show-counter
        help-text="Descreva detalhadamente"
      ></ds-textarea>
      
      <ds-button type="submit" variant="primary">Enviar</ds-button>
    </form>
  `,
};



