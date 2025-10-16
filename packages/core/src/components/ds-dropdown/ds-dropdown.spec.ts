import { newSpecPage } from '@stencil/core/testing';
import { DsDropdown } from './ds-dropdown';

describe('ds-dropdown', () => {
  it('renders with basic props', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" label="Test Label"></ds-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown class="ds-dropdown" name="test-dropdown" label="Test Label" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="dropdown-test-dropdown-listbox" aria-invalid="false">
        <label for="dropdown-test-dropdown" class="ds-dropdown__label">Test Label</label>
        <div class="ds-dropdown__wrapper">
          <button id="dropdown-test-dropdown" class="ds-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false" aria-owns="dropdown-test-dropdown-listbox" aria-autocomplete="none">
            <span class="ds-dropdown__value"></span>
            <span class="ds-dropdown__arrow" aria-hidden="true">▼</span>
          </button>
        </div>
      </ds-dropdown>
    `);
  });

  it('renders with required field', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" label="Test Label" required></ds-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown class="ds-dropdown" name="test-dropdown" label="Test Label" required role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="dropdown-test-dropdown-listbox" aria-invalid="false">
        <label for="dropdown-test-dropdown" class="ds-dropdown__label">Test Label<span class="ds-dropdown__required" aria-label="required">*</span></label>
        <div class="ds-dropdown__wrapper">
          <button id="dropdown-test-dropdown" class="ds-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false" aria-owns="dropdown-test-dropdown-listbox" aria-autocomplete="none">
            <span class="ds-dropdown__value"></span>
            <span class="ds-dropdown__arrow" aria-hidden="true">▼</span>
          </button>
        </div>
      </ds-dropdown>
    `);
  });

  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" disabled></ds-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown class="ds-dropdown ds-dropdown--disabled" name="test-dropdown" disabled role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="dropdown-test-dropdown-listbox" aria-invalid="false">
        <div class="ds-dropdown__wrapper">
          <button id="dropdown-test-dropdown" class="ds-dropdown__trigger" disabled aria-haspopup="listbox" aria-expanded="false" aria-owns="dropdown-test-dropdown-listbox" aria-autocomplete="none">
            <span class="ds-dropdown__value"></span>
            <span class="ds-dropdown__arrow" aria-hidden="true">▼</span>
          </button>
        </div>
      </ds-dropdown>
    `);
  });

  it('renders with error state', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" error-text="Test Error"></ds-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown class="ds-dropdown ds-dropdown--error" name="test-dropdown" error-text="Test Error" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="dropdown-test-dropdown-listbox" aria-invalid="true" aria-describedby="dropdown-test-dropdown-error">
        <div class="ds-dropdown__wrapper">
          <button id="dropdown-test-dropdown" class="ds-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false" aria-owns="dropdown-test-dropdown-listbox" aria-autocomplete="none" aria-describedby="dropdown-test-dropdown-error">
            <span class="ds-dropdown__value"></span>
            <span class="ds-dropdown__arrow" aria-hidden="true">▼</span>
          </button>
        </div>
        <div id="dropdown-test-dropdown-error" class="ds-dropdown__error-text" role="alert" aria-live="polite">Test Error</div>
      </ds-dropdown>
    `);
  });

  it('renders with help text', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" help-text="Test Help"></ds-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown class="ds-dropdown" name="test-dropdown" help-text="Test Help" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="dropdown-test-dropdown-listbox" aria-invalid="false" aria-describedby="dropdown-test-dropdown-help">
        <div class="ds-dropdown__wrapper">
          <button id="dropdown-test-dropdown" class="ds-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false" aria-owns="dropdown-test-dropdown-listbox" aria-autocomplete="none" aria-describedby="dropdown-test-dropdown-help">
            <span class="ds-dropdown__value"></span>
            <span class="ds-dropdown__arrow" aria-hidden="true">▼</span>
          </button>
        </div>
        <div id="dropdown-test-dropdown-help" class="ds-dropdown__help-text">Test Help</div>
      </ds-dropdown>
    `);
  });

  it('renders with searchable enabled', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" searchable></ds-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown class="ds-dropdown ds-dropdown--searchable" name="test-dropdown" searchable role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-owns="dropdown-test-dropdown-listbox" aria-invalid="false">
        <div class="ds-dropdown__wrapper">
          <button id="dropdown-test-dropdown" class="ds-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false" aria-owns="dropdown-test-dropdown-listbox" aria-autocomplete="list">
            <span class="ds-dropdown__value"></span>
            <span class="ds-dropdown__arrow" aria-hidden="true">▼</span>
          </button>
        </div>
      </ds-dropdown>
    `);
  });

  it('toggles dropdown on click', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown"></ds-dropdown>`,
    });
    
    const component = page.rootInstance as DsDropdown;
    const button = page.root.querySelector('.ds-dropdown__trigger') as HTMLButtonElement;
    
    expect(component.isOpen).toBe(false);
    
    button.click();
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(true);
  });

  it('does not toggle when disabled', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown" disabled></ds-dropdown>`,
    });
    
    const component = page.rootInstance as DsDropdown;
    const button = page.root.querySelector('.ds-dropdown__trigger') as HTMLButtonElement;
    
    expect(component.isOpen).toBe(false);
    
    button.click();
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(false);
  });

  it('handles keyboard navigation', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown"></ds-dropdown>`,
    });
    
    const component = page.rootInstance as DsDropdown;
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    
    component.handleKeyDown(event);
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(true);
  });

  it('handles escape key to close', async () => {
    const page = await newSpecPage({
      components: [DsDropdown],
      html: `<ds-dropdown name="test-dropdown"></ds-dropdown>`,
    });
    
    const component = page.rootInstance as DsDropdown;
    component.isOpen = true;
    
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    component.handleKeyDown(event);
    await page.waitForChanges();
    
    expect(component.isOpen).toBe(false);
  });
});
