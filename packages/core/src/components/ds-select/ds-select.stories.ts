import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Select',
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-select label="País" placeholder="Selecione um país">
      <option value="br">Brasil</option>
      <option value="us">Estados Unidos</option>
      <option value="uk">Reino Unido</option>
    </ds-select>
  `,
};

export const WithGroups: Story = {
  render: () => html`
    <ds-select label="Escolha uma fruta">
      <optgroup label="Cítricas">
        <option value="orange">Laranja</option>
        <option value="lemon">Limão</option>
      </optgroup>
      <optgroup label="Tropicais">
        <option value="banana">Banana</option>
        <option value="mango">Manga</option>
      </optgroup>
    </ds-select>
  `,
};



