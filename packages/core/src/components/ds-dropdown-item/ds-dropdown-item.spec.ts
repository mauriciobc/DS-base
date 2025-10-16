import { newSpecPage } from '@stencil/core/testing';
import { DsDropdownItem } from './ds-dropdown-item';

describe('ds-dropdown-item', () => {
  it('renders with noarrow variant by default', async () => {
    const page = await newSpecPage({
      components: [DsDropdownItem],
      html: `<ds-dropdown-item></ds-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown-item class="ds-dropdown-item ds-dropdown-item--noarrow ds-dropdown-item--relative">
        <div class="ds-dropdown-item__content">
          <slot></slot>
        </div>
      </ds-dropdown-item>
    `);
  });

  it('renders with top variant and arrow', async () => {
    const page = await newSpecPage({
      components: [DsDropdownItem],
      html: `<ds-dropdown-item variant="top"></ds-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown-item class="ds-dropdown-item ds-dropdown-item--top ds-dropdown-item--relative">
        <div class="ds-dropdown-item__arrow ds-dropdown-item__arrow--top">
          <img alt="Seta para cima" class="ds-dropdown-item__arrow-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDBMNiA2SDZMMTIgMTJMMTggNkgxOEwxMiAwWiIgZmlsbD0iI0FEQjVCRCIvPgo8L3N2Zz4K">
        </div>
        <div class="ds-dropdown-item__content">
          <slot></slot>
        </div>
      </ds-dropdown-item>
    `);
  });

  it('renders with bottom variant and arrow', async () => {
    const page = await newSpecPage({
      components: [DsDropdownItem],
      html: `<ds-dropdown-item variant="bottom"></ds-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown-item class="ds-dropdown-item ds-dropdown-item--bottom ds-dropdown-item--relative">
        <div class="ds-dropdown-item__content">
          <slot></slot>
        </div>
        <div class="ds-dropdown-item__arrow ds-dropdown-item__arrow--bottom">
          <img alt="Seta para baixo" class="ds-dropdown-item__arrow-icon" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAyNCAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDEyTDE4IDZIMThMMTIgMEw2IDZINkwxMiAxMloiIGZpbGw9IiNBREI1QkQiLz4KPC9zdmc+Cg==">
        </div>
      </ds-dropdown-item>
    `);
  });

  it('renders with absolute position', async () => {
    const page = await newSpecPage({
      components: [DsDropdownItem],
      html: `<ds-dropdown-item position="absolute"></ds-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-dropdown-item class="ds-dropdown-item ds-dropdown-item--noarrow ds-dropdown-item--absolute">
        <div class="ds-dropdown-item__content">
          <slot></slot>
        </div>
      </ds-dropdown-item>
    `);
  });

  it('has correct showArrow getter', async () => {
    const page = await newSpecPage({
      components: [DsDropdownItem],
      html: `<ds-dropdown-item variant="top"></ds-dropdown-item>`,
    });
    
    const component = page.rootInstance as DsDropdownItem;
    expect(component.showArrow).toBe(true);
  });

  it('has correct showArrow getter for noarrow', async () => {
    const page = await newSpecPage({
      components: [DsDropdownItem],
      html: `<ds-dropdown-item variant="noarrow"></ds-dropdown-item>`,
    });
    
    const component = page.rootInstance as DsDropdownItem;
    expect(component.showArrow).toBe(false);
  });
});
