import { newSpecPage } from '@stencil/core/testing';
import { DsButton } from './ds-button';

describe('ds-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button>Click me</ds-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-button>
        <mock:shadow-root>
          <button class="button button--primary" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
        Click me
      </ds-button>
    `);
  });

  it('renders with variant secondary', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button variant="secondary">Click me</ds-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.classList.contains('button--secondary')).toBe(true);
  });

  it('renders disabled state', async () => {
    const page = await newSpecPage({
      components: [DsButton],
      html: `<ds-button disabled>Click me</ds-button>`,
    });
    const button = page.root?.shadowRoot?.querySelector('button');
    expect(button?.disabled).toBe(true);
  });
});

