import { newSpecPage } from '@stencil/core/testing';
import { DsInput } from './ds-input';

describe('ds-input', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input></ds-input>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-input class="ds-input">
        <mock:shadow-root>
          <div class="ds-input__wrapper">
            <input
              aria-invalid="false"
              class="ds-input__control"
              id="input-default"
              type="text"
              value=""
            />
          </div>
        </mock:shadow-root>
      </ds-input>
    `);
  });

  it('renders with label', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input label="Name" name="username"></ds-input>`,
    });
    const label = page.root?.shadowRoot?.querySelector('.ds-input__label');
    expect(label?.textContent).toBe('Name');
  });

  it('renders required indicator', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input label="Email" required></ds-input>`,
    });
    const required = page.root?.shadowRoot?.querySelector('.ds-input__required');
    expect(required).toBeTruthy();
  });

  it('renders help text', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input help-text="Enter your email"></ds-input>`,
    });
    const helpText = page.root?.shadowRoot?.querySelector('.ds-input__help-text');
    expect(helpText?.textContent).toBe('Enter your email');
  });

  it('renders error text', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input error-text="Email is required"></ds-input>`,
    });
    const errorText = page.root?.shadowRoot?.querySelector('.ds-input__error-text');
    expect(errorText?.textContent).toBe('Email is required');
    expect(page.root).toHaveClass('ds-input--error');
  });

  it('sets disabled state', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input disabled></ds-input>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input');
    expect(input?.disabled).toBe(true);
    expect(page.root).toHaveClass('ds-input--disabled');
  });

  it('sets readonly state', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input readonly></ds-input>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input');
    expect(input?.readOnly).toBe(true);
    expect(page.root).toHaveClass('ds-input--readonly');
  });

  it('emits dsInput event on input', async () => {
    const page = await newSpecPage({
      components: [DsInput],
      html: `<ds-input></ds-input>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input');
    const spy = jest.fn();
    page.root?.addEventListener('dsInput', spy);

    input?.dispatchEvent(new Event('input', { bubbles: true }));
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
  });
});



