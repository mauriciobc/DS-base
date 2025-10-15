import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Input',
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'The input size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'The input type',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label text',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
    },
    helpText: {
      control: { type: 'text' },
      description: 'Help text below input',
    },
    errorText: {
      control: { type: 'text' },
      description: 'Error message',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: false },
      },
    },
    readonly: {
      control: { type: 'boolean' },
      description: 'Whether the input is readonly',
      table: {
        defaultValue: { summary: false },
      },
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    size: 'md',
    type: 'text',
    label: '',
    placeholder: '',
    helpText: '',
    errorText: '',
    disabled: false,
    readonly: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-input
      size="${args.size}"
      type="${args.type}"
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?disabled="${args.disabled}"
      ?readonly="${args.readonly}"
      ?required="${args.required}"
    ></ds-input>
  `,
};

export const WithLabel: Story = {
  args: {
    label: 'Nome completo',
    placeholder: 'Digite seu nome',
  },
  render: (args) => html`
    <ds-input
      label="${args.label}"
      placeholder="${args.placeholder}"
      name="fullname"
    ></ds-input>
  `,
};

export const WithHelpText: Story = {
  args: {
    label: 'Email',
    placeholder: 'exemplo@email.com',
    helpText: 'Usaremos seu email apenas para contato',
  },
  render: (args) => html`
    <ds-input
      label="${args.label}"
      placeholder="${args.placeholder}"
      help-text="${args.helpText}"
      type="email"
    ></ds-input>
  `,
};

export const WithError: Story = {
  args: {
    label: 'CPF',
    errorText: 'CPF inválido',
  },
  render: (args) => html`
    <ds-input
      label="${args.label}"
      error-text="${args.errorText}"
      value="123.456"
    ></ds-input>
  `,
};

export const Required: Story = {
  args: {
    label: 'Telefone',
    required: true,
    placeholder: '(11) 99999-9999',
  },
  render: (args) => html`
    <ds-input
      label="${args.label}"
      placeholder="${args.placeholder}"
      ?required="${args.required}"
      type="tel"
    ></ds-input>
  `,
};

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    disabled: true,
    value: 'Valor não editável',
  },
  render: (args) => html`
    <ds-input
      label="${args.label}"
      ?disabled="${args.disabled}"
      value="${args.value}"
    ></ds-input>
  `,
};

export const Readonly: Story = {
  args: {
    label: 'Campo somente leitura',
    readonly: true,
    value: 'Valor para visualização',
  },
  render: (args) => html`
    <ds-input
      label="${args.label}"
      ?readonly="${args.readonly}"
      value="${args.value}"
    ></ds-input>
  `,
};

export const DifferentTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <ds-input label="Text" type="text" placeholder="Digite um texto"></ds-input>
      <ds-input label="Email" type="email" placeholder="exemplo@email.com"></ds-input>
      <ds-input label="Password" type="password" placeholder="Senha secreta"></ds-input>
      <ds-input label="Number" type="number" placeholder="123"></ds-input>
      <ds-input label="Tel" type="tel" placeholder="(11) 99999-9999"></ds-input>
      <ds-input label="URL" type="url" placeholder="https://exemplo.com"></ds-input>
      <ds-input label="Search" type="search" placeholder="Buscar..."></ds-input>
    </div>
  `,
};

export const FormExample: Story = {
  render: () => html`
    <form style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <ds-input
        label="Nome"
        name="name"
        placeholder="Seu nome completo"
        required
      ></ds-input>
      
      <ds-input
        label="Email"
        name="email"
        type="email"
        placeholder="seu@email.com"
        required
        help-text="Nunca compartilharemos seu email"
      ></ds-input>
      
      <ds-input
        label="Telefone"
        name="phone"
        type="tel"
        placeholder="(11) 99999-9999"
      ></ds-input>
      
      <ds-button type="submit" variant="primary">Enviar</ds-button>
    </form>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Small (sm)</h3>
        <ds-input
          size="sm"
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
        ></ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Medium (md) - Default</h3>
        <ds-input
          size="md"
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
        ></ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Large (lg)</h3>
        <ds-input
          size="lg"
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
        ></ds-input>
      </div>
    </div>
  `,
};

export const WithIcons: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Icon Left</h3>
        <ds-input
          label="Search"
          placeholder="Search..."
          type="search"
        >
          <svg slot="icon-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM19 19l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Icon Right</h3>
        <ds-input
          label="Email"
          placeholder="exemplo@email.com"
          type="email"
        >
          <svg slot="icon-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" stroke-width="2"/>
            <path d="m19 6-9 6-9-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Both Icons</h3>
        <ds-input
          label="Username"
          placeholder="@username"
        >
          <svg slot="icon-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
            <path d="M3 19a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <svg slot="icon-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.5 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" stroke="currentColor" stroke-width="2"/>
            <path d="M10 7v3l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </ds-input>
      </div>
    </div>
  `,
};

export const AllStates: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Normal</h3>
        <ds-input
          label="Normal Input"
          placeholder="Type something..."
        ></ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Filled</h3>
        <ds-input
          label="Filled Input"
          value="Some text content"
        ></ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Disabled</h3>
        <ds-input
          label="Disabled Input"
          placeholder="Cannot type here"
          disabled
        ></ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">Readonly</h3>
        <ds-input
          label="Readonly Input"
          value="Read only value"
          readonly
        ></ds-input>
      </div>
      
      <div>
        <h3 style="margin-bottom: 0.5rem; font-family: 'Lato', sans-serif;">With Error</h3>
        <ds-input
          label="Email"
          value="invalid-email"
          error-text="Please enter a valid email address"
        ></ds-input>
      </div>
    </div>
  `,
};

export const FigmaComparison: Story = {
  render: () => html`
    <div style="padding: 2rem; background: #f8f9fa;">
      <div style="margin-bottom: 2rem;">
        <h2 style="font-family: 'Lato', sans-serif; font-size: 24px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
          Comparação com Figma - Input Component
        </h2>
        <p style="font-family: 'Lato', sans-serif; font-size: 14px; color: #495057; margin-bottom: 0.5rem;">
          Referência: <a href="https://www.figma.com/design/wDStUEuqpl7Tu1oHpiAml6/Voa-Design-System?node-id=437-2006" target="_blank" style="color: #0064cb;">Figma Design</a>
        </p>
        <p style="font-family: 'Lato', sans-serif; font-size: 14px; color: #495057;">
          Compare visualmente cada estado com o design do Figma. Verifique: cores, espaçamento, tipografia e border-radius.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem;">
        <!-- Size MD - Estados principais -->
        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Normal (Empty)
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Border: #adb5bd | Padding: 12px | Radius: 16px
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Filled
          </h3>
          <ds-input
            size="md"
            value="Text"
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Text color: #0b1215 | Font: Lato 16px/24px
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Hovered
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
            style="pointer-events: none;"
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Hover border: #0064cb (Passe o mouse para ver)
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Disabled
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
            disabled
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Bg: rgba(255,255,255,0.25) | Text: rgba(11,18,21,0.25)
          </div>
        </div>

        <!-- Size SM -->
        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size SM - Normal
          </h3>
          <ds-input
            size="sm"
            placeholder="Text"
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Height: 32px | Padding: 4px 8px | Radius: 12px
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size SM - Disabled
          </h3>
          <ds-input
            size="sm"
            placeholder="Text"
            disabled
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Small size disabled state
          </div>
        </div>

        <!-- Size LG -->
        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size LG - Normal
          </h3>
          <ds-input
            size="lg"
            placeholder="Text"
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Height: 56px | Padding: 16px | Radius: 16px
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size LG - Disabled
          </h3>
          <ds-input
            size="lg"
            placeholder="Text"
            disabled
          ></ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Large size disabled state
          </div>
        </div>

        <!-- With Icons -->
        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Icon Left
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
          >
            <svg slot="icon-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
              <path d="M3 19a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Com ícone à esquerda
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Icon Right
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
          >
            <svg slot="icon-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 7v3l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Com ícone à direita
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Both Icons
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
          >
            <svg slot="icon-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
              <path d="M3 19a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg slot="icon-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 7v3l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Com ambos os ícones
          </div>
        </div>

        <div style="background: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
          <h3 style="font-family: 'Lato', sans-serif; font-size: 16px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
            Size MD - Icons Disabled
          </h3>
          <ds-input
            size="md"
            placeholder="Text"
            disabled
          >
            <svg slot="icon-left" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
              <path d="M3 19a7 7 0 0 1 14 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg slot="icon-right" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 10a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" stroke="currentColor" stroke-width="2"/>
              <path d="M10 7v3l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </ds-input>
          <div style="margin-top: 0.5rem; font-family: 'Lato', sans-serif; font-size: 12px; color: #495057;">
            Ícones no estado desabilitado
          </div>
        </div>
      </div>

      <div style="margin-top: 3rem; padding: 1.5rem; background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <h3 style="font-family: 'Lato', sans-serif; font-size: 18px; font-weight: 600; margin-bottom: 1rem; color: #0b1215;">
          Design Tokens Aplicados
        </h3>
        <div style="font-family: 'Lato', sans-serif; font-size: 14px; line-height: 1.6; color: #495057;">
          <p><strong>Cores:</strong></p>
          <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
            <li>Text Primary: #0b1215</li>
            <li>Text Secondary: #495057</li>
            <li>Text Placeholder: #9f9fa8</li>
            <li>Brand Base: #0064cb</li>
            <li>Border: #adb5bd</li>
            <li>Background: #ffffff</li>
          </ul>
          <p><strong>Tipografia:</strong></p>
          <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
            <li>Font Family: Lato, sans-serif</li>
            <li>Font Size: 16px</li>
            <li>Line Height: 24px</li>
            <li>Font Weight: 400 (Regular)</li>
          </ul>
          <p><strong>Espaçamento:</strong></p>
          <ul style="margin-left: 1.5rem; margin-bottom: 1rem;">
            <li>SM: 4px 8px padding</li>
            <li>MD: 12px padding</li>
            <li>LG: 16px padding</li>
            <li>Gap: 8px</li>
          </ul>
          <p><strong>Border Radius:</strong></p>
          <ul style="margin-left: 1.5rem;">
            <li>SM: 12px</li>
            <li>MD/LG: 16px</li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

