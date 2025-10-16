import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ds-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: { 
      control: 'boolean',
      description: 'Estado checked/unchecked do checkbox'
    },
    disabled: { 
      control: 'boolean',
      description: 'Se o checkbox está desabilitado'
    },
    required: { 
      control: 'boolean',
      description: 'Se o checkbox é obrigatório'
    },
    indeterminate: { 
      control: 'boolean',
      description: 'Estado indeterminado (para select-all)'
    },
    label: { 
      control: 'text',
      description: 'Texto da label do checkbox'
    },
    value: { 
      control: 'text',
      description: 'Valor do checkbox para formulários'
    },
    name: { 
      control: 'text',
      description: 'Nome do checkbox para agrupamento'
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Componente de checkbox individual baseado no Lion Web Components, estilizado com design tokens do Figma "Voa Design System".'
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
    value: 'terms',
    checked: false,
    disabled: false,
    required: false,
    indeterminate: false,
  },
  render: (args) => html`
    <ds-checkbox
      label="${args.label}"
      value="${args.value}"
      name="${args.name}"
      ?checked="${args.checked}"
      ?disabled="${args.disabled}"
      ?required="${args.required}"
      ?indeterminate="${args.indeterminate}"
    ></ds-checkbox>
  `,
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox no estado checked (marcado).'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox desabilitado - não pode ser interagido.'
      }
    }
  }
};

export const Required: Story = {
  args: {
    label: 'Required checkbox',
    required: true,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox obrigatório - deve ser marcado para validação do formulário.'
      }
    }
  }
};

export const Indeterminate: Story = {
  args: {
    label: 'Select all',
    indeterminate: true,
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox no estado indeterminado - usado para "select all" quando alguns itens estão selecionados.'
      }
    }
  }
};

export const WithoutLabel: Story = {
  args: {
    value: 'option1',
    name: 'options',
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox sem label - útil quando a label é fornecida externamente.'
      }
    }
  }
};

export const InsideGroup: Story = {
  render: () => html`
    <ds-checkbox-group label="Choose your interests" name="interests">
      <ds-checkbox value="sports" label="Sports"></ds-checkbox>
      <ds-checkbox value="music" label="Music"></ds-checkbox>
      <ds-checkbox value="tech" label="Technology"></ds-checkbox>
      <ds-checkbox value="travel" label="Travel"></ds-checkbox>
    </ds-checkbox-group>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso do ds-checkbox dentro de um ds-checkbox-group.'
      }
    }
  }
};

export const SelectAllExample: Story = {
  render: () => html`
    <div>
      <ds-checkbox 
        id="select-all" 
        label="Select all" 
        name="select-all"
        indeterminate
        onDsChange="${(e: CustomEvent) => {
          const checkboxes = document.querySelectorAll('ds-checkbox:not(#select-all)');
          checkboxes.forEach((cb: any) => {
            cb.checked = e.detail;
            cb.indeterminate = false;
          });
        }}"
      ></ds-checkbox>
      
      <div style="margin-top: 16px; margin-left: 24px;">
        <ds-checkbox value="option1" label="Option 1" name="options"></ds-checkbox>
        <ds-checkbox value="option2" label="Option 2" name="options"></ds-checkbox>
        <ds-checkbox value="option3" label="Option 3" name="options"></ds-checkbox>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo prático de "Select All" usando estado indeterminado.'
      }
    }
  }
};

export const FormExample: Story = {
  render: () => html`
    <form>
      <fieldset>
        <legend>Newsletter Preferences</legend>
        
        <ds-checkbox 
          name="newsletter" 
          value="daily" 
          label="Daily newsletter"
          required
        ></ds-checkbox>
        
        <ds-checkbox 
          name="newsletter" 
          value="weekly" 
          label="Weekly digest"
        ></ds-checkbox>
        
        <ds-checkbox 
          name="newsletter" 
          value="promotions" 
          label="Promotional offers"
        ></ds-checkbox>
        
        <ds-checkbox 
          name="newsletter" 
          value="events" 
          label="Event notifications"
        ></ds-checkbox>
      </fieldset>
      
      <button type="submit" style="margin-top: 16px;">Subscribe</button>
    </form>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Exemplo de uso em formulário com múltiplos checkboxes.'
      }
    }
  }
};
