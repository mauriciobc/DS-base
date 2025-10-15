import { newSpecPage } from '@stencil/core/testing';
import { DsTextarea } from './ds-textarea';

describe('ds-textarea', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea></ds-textarea>`,
    });
    const textarea = page.root?.shadowRoot?.querySelector('textarea');
    expect(textarea).toBeTruthy();
    expect(textarea?.rows).toBe(3);
  });

  it('renders with label', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea label="Comentário"></ds-textarea>`,
    });
    const label = page.root?.shadowRoot?.querySelector('.ds-textarea__label');
    expect(label?.textContent).toContain('Comentário');
  });

  it('renders character counter when show-counter is true', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea show-counter maxlength="100"></ds-textarea>`,
    });
    const counter = page.root?.shadowRoot?.querySelector('.ds-textarea__counter');
    expect(counter?.textContent).toBe('0 / 100');
  });

  it('updates counter when value changes', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea show-counter maxlength="100" value="test"></ds-textarea>`,
    });
    const counter = page.root?.shadowRoot?.querySelector('.ds-textarea__counter');
    expect(counter?.textContent).toBe('4 / 100');
  });

  it('sets disabled state', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea disabled></ds-textarea>`,
    });
    const textarea = page.root?.shadowRoot?.querySelector('textarea');
    expect(textarea?.disabled).toBe(true);
  });

  it('renders error text', async () => {
    const page = await newSpecPage({
      components: [DsTextarea],
      html: `<ds-textarea error-text="Campo obrigatório"></ds-textarea>`,
    });
    const errorText = page.root?.shadowRoot?.querySelector('.ds-textarea__error-text');
    expect(errorText?.textContent).toBe('Campo obrigatório');
  });
});



