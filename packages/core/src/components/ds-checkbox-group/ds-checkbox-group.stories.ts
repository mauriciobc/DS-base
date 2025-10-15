import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Checkbox Group',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-checkbox-group label="Interesses" name="interests">
      <label><input type="checkbox" name="interests" value="tech" /> Tecnologia</label>
      <label><input type="checkbox" name="interests" value="design" /> Design</label>
      <label><input type="checkbox" name="interests" value="business" /> Negócios</label>
    </ds-checkbox-group>
  `,
};



