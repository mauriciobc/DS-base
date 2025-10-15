import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Radio Group',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-radio-group label="Escolha uma opção" name="option">
      <label><input type="radio" name="option" value="1" /> Opção 1</label>
      <label><input type="radio" name="option" value="2" /> Opção 2</label>
      <label><input type="radio" name="option" value="3" /> Opção 3</label>
    </ds-radio-group>
  `,
};



