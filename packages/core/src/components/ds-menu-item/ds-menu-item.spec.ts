import { newSpecPage } from '@stencil/core/testing';
import { DsMenuItem } from './ds-menu-item';

describe('ds-menu-item', () => {
  it('renders with basic props', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item value="test-value" index="0"></ds-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item class="ds-menu-item" value="test-value" index="0" role="option" aria-selected="false" aria-disabled="false" tabindex="0" id="menu-item-0">
        <div class="ds-menu-item__content">
          <slot></slot>
        </div>
      </ds-menu-item>
    `);
  });

  it('renders as selected', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item selected value="test-value" index="0"></ds-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item class="ds-menu-item ds-menu-item--selected" selected value="test-value" index="0" role="option" aria-selected="true" aria-disabled="false" tabindex="0" id="menu-item-0">
        <div class="ds-menu-item__content">
          <slot></slot>
        </div>
      </ds-menu-item>
    `);
  });

  it('renders as disabled', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item disabled value="test-value" index="0"></ds-menu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item class="ds-menu-item ds-menu-item--disabled" disabled value="test-value" index="0" role="option" aria-selected="false" aria-disabled="true" tabindex="-1" id="menu-item-0">
        <div class="ds-menu-item__content">
          <slot></slot>
        </div>
      </ds-menu-item>
    `);
  });

  it('emits dsSelect event on click', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item value="test-value" index="0"></ds-menu-item>`,
    });
    
    const component = page.rootInstance as DsMenuItem;
    const spy = jest.fn();
    component.dsSelect = { emit: spy } as any;
    
    component.handleClick();
    
    expect(spy).toHaveBeenCalledWith({
      value: 'test-value',
      index: 0,
      selected: true
    });
  });

  it('does not emit dsSelect event when disabled', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item disabled value="test-value" index="0"></ds-menu-item>`,
    });
    
    const component = page.rootInstance as DsMenuItem;
    const spy = jest.fn();
    component.dsSelect = { emit: spy } as any;
    
    component.handleClick();
    
    expect(spy).not.toHaveBeenCalled();
  });

  it('handles keyboard events', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item value="test-value" index="0"></ds-menu-item>`,
    });
    
    const component = page.rootInstance as DsMenuItem;
    const spy = jest.fn();
    component.dsSelect = { emit: spy } as any;
    
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.handleKeyDown(event);
    
    expect(spy).toHaveBeenCalled();
  });

  it('handles mouse hover events', async () => {
    const page = await newSpecPage({
      components: [DsMenuItem],
      html: `<ds-menu-item value="test-value" index="0"></ds-menu-item>`,
    });
    
    const component = page.rootInstance as DsMenuItem;
    
    component.handleMouseEnter();
    expect(component.isHovered).toBe(true);
    
    component.handleMouseLeave();
    expect(component.isHovered).toBe(false);
  });
});
