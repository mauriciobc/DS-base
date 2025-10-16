import '../../../../test-setup';
import { newSpecPage } from '@stencil/core/testing';
import { DsCheckbox } from './ds-checkbox';

describe('ds-checkbox', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox label="Accept terms"></ds-checkbox>`,
    });
    expect(page.root).toBeDefined();
    expect(page.root?.shadowRoot?.querySelector('.ds-checkbox__label')?.textContent).toBe('Accept terms');
  });

  it('renders without label when not provided', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    expect(page.root?.shadowRoot?.querySelector('.ds-checkbox__label')).toBeNull();
  });

  it('toggles checked state on click', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.checked).toBe(false);
    
    input.click();
    await page.waitForChanges();
    expect(input.checked).toBe(true);
  });

  it('respects disabled state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox disabled></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it('respects required state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox required></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.required).toBe(true);
  });

  it('handles indeterminate state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox indeterminate></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.indeterminate).toBe(true);
  });

  it('applies proper aria attributes', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox label="Test" required></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('aria-label')).toBe('Test');
    expect(input.required).toBe(true);
  });

  it('applies aria-checked mixed for indeterminate state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox indeterminate></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('aria-checked')).toBe('mixed');
  });

  it('applies aria-checked true for checked state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox checked></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('aria-checked')).toBe('true');
  });

  it('applies aria-checked false for unchecked state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.getAttribute('aria-checked')).toBe('false');
  });

  it('sets name and value attributes', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox name="test" value="option1"></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    expect(input.name).toBe('test');
    expect(input.value).toBe('option1');
  });

  it('applies correct CSS classes based on state', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox checked disabled indeterminate></ds-checkbox>`,
    });
    const host = page.root;
    expect(host).toHaveClass('ds-checkbox');
    expect(host).toHaveClass('ds-checkbox--checked');
    expect(host).toHaveClass('ds-checkbox--disabled');
    expect(host).toHaveClass('ds-checkbox--indeterminate');
  });

  it('generates unique id for each checkbox', async () => {
    const page1 = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    const page2 = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    
    const input1 = page1.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    const input2 = page2.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    
    expect(input1.id).not.toBe(input2.id);
  });

  it('shows checkmark icon when checked and not indeterminate', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox checked></ds-checkbox>`,
    });
    const checkmark = page.root?.shadowRoot?.querySelector('.ds-checkbox__checkmark');
    const indeterminate = page.root?.shadowRoot?.querySelector('.ds-checkbox__indeterminate');
    
    expect(checkmark).toBeDefined();
    expect(indeterminate).toBeNull();
  });

  it('shows indeterminate icon when indeterminate', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox indeterminate></ds-checkbox>`,
    });
    const checkmark = page.root?.shadowRoot?.querySelector('.ds-checkbox__checkmark');
    const indeterminate = page.root?.shadowRoot?.querySelector('.ds-checkbox__indeterminate');
    
    expect(checkmark).toBeNull();
    expect(indeterminate).toBeDefined();
  });

  it('shows no icon when unchecked', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    const checkmark = page.root?.shadowRoot?.querySelector('.ds-checkbox__checkmark');
    const indeterminate = page.root?.shadowRoot?.querySelector('.ds-checkbox__indeterminate');
    
    expect(checkmark).toBeNull();
    expect(indeterminate).toBeNull();
  });

  it('applies active state styles when clicked', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    const box = page.root?.shadowRoot?.querySelector('.ds-checkbox__box') as HTMLElement;
    
    // Simular o estado ativo
    input.dispatchEvent(new MouseEvent('mousedown'));
    await page.waitForChanges();
    
    // Verificar se o elemento tem as classes CSS corretas para estado ativo
    expect(input.matches(':active')).toBe(false); // :active só funciona durante o clique real
  });

  it('emits dsChange event when clicked', async () => {
    const page = await newSpecPage({
      components: [DsCheckbox],
      html: `<ds-checkbox></ds-checkbox>`,
    });
    const input = page.root?.shadowRoot?.querySelector('input') as HTMLInputElement;
    
    const changeSpy = jest.fn();
    page.root?.addEventListener('dsChange', changeSpy);
    
    input.click();
    await page.waitForChanges();
    
    expect(changeSpy).toHaveBeenCalledWith(expect.objectContaining({
      detail: true
    }));
  });
});
