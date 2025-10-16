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
    ariaLabel: { 
      control: 'text',
      description: 'Texto alternativo para acessibilidade quando não há label visível'
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
    name: 'terms',
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
    ariaLabel: 'Select option 1',
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox sem label visível usando ariaLabel para acessibilidade.'
      }
    }
  }
};

export const AccessibilityExample: Story = {
  render: () => html`
    <div>
      <h3>Exemplos de Acessibilidade</h3>
      
      <h4>Com label visível:</h4>
      <ds-checkbox label="Aceitar termos e condições" name="terms"></ds-checkbox>
      
      <h4>Sem label visível (usando ariaLabel):</h4>
      <ds-checkbox ariaLabel="Aceitar política de privacidade" name="privacy"></ds-checkbox>
      
      <h4>Em uma tabela:</h4>
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="border: 1px solid #ccc; padding: 8px;">Selecionar</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Nome</th>
            <th style="border: 1px solid #ccc; padding: 8px;">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">
              <ds-checkbox ariaLabel="Selecionar usuário João Silva" name="users" value="joao"></ds-checkbox>
            </td>
            <td style="border: 1px solid #ccc; padding: 8px;">João Silva</td>
            <td style="border: 1px solid #ccc; padding: 8px;">joao@email.com</td>
          </tr>
          <tr>
            <td style="border: 1px solid #ccc; padding: 8px;">
              <ds-checkbox ariaLabel="Selecionar usuária Maria Santos" name="users" value="maria"></ds-checkbox>
            </td>
            <td style="border: 1px solid #ccc; padding: 8px;">Maria Santos</td>
            <td style="border: 1px solid #ccc; padding: 8px;">maria@email.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Exemplos mostrando como usar label visível vs ariaLabel para diferentes contextos de acessibilidade.'
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
  render: () => {
    const updateSelectAllState = (container: HTMLElement) => {
      const selectAll = container.querySelector('#select-all') as HTMLDsCheckboxElement;
      const checkboxes = Array.from(container.querySelectorAll('ds-checkbox:not(#select-all)')) as HTMLDsCheckboxElement[];
      const checkedCount = checkboxes.filter(cb => cb.checked).length;
      
      if (checkedCount === 0) {
        selectAll.checked = false;
        selectAll.indeterminate = false;
      } else if (checkedCount === checkboxes.length) {
        selectAll.checked = true;
        selectAll.indeterminate = false;
      } else {
        selectAll.checked = false;
        selectAll.indeterminate = true;
      }
    };

    const handleSelectAllChange = (e: CustomEvent<boolean>) => {
      const container = (e.target as HTMLElement).closest('div') as HTMLElement;
      const checkboxes = container.querySelectorAll('ds-checkbox:not(#select-all)');
      checkboxes.forEach((cb) => {
        const checkbox = cb as HTMLDsCheckboxElement;
        checkbox.checked = e.detail;
        checkbox.indeterminate = false;
      });
    };

    const handleChildChange = (e: CustomEvent<boolean>) => {
      const container = (e.target as HTMLElement).closest('div') as HTMLElement;
      updateSelectAllState(container);
    };

    return html`
      <div>
        <ds-checkbox 
          id="select-all" 
          label="Select all" 
          name="select-all"
          @dsChange=${handleSelectAllChange}
        ></ds-checkbox>
        
        <div style="margin-top: 16px; margin-left: 24px;">
          <ds-checkbox value="option1" label="Option 1" name="options" @dsChange=${handleChildChange}></ds-checkbox>
          <ds-checkbox value="option2" label="Option 2" name="options" @dsChange=${handleChildChange}></ds-checkbox>
          <ds-checkbox value="option3" label="Option 3" name="options" @dsChange=${handleChildChange}></ds-checkbox>
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Exemplo prático de "Select All" usando estado indeterminado com interatividade real.'
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
