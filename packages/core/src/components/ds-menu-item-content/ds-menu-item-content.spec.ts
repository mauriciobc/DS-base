import { newSpecPage } from '@stencil/core/testing';
import { DsMenuItemContent } from './ds-menu-item-content';

describe('ds-menu-item-content', () => {
  it('renders with title only', async () => {
    const page = await newSpecPage({
      components: [DsMenuItemContent],
      html: `<ds-menu-item-content item-item-title="Test Title"></ds-menu-item-content>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item-content class="ds-menu-item-content ds-menu-item-content--single" item-title="Test Title">
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">Test Title</p>
        </div>
      </ds-menu-item-content>
    `);
  });

  it('renders with title and subtitle', async () => {
    const page = await newSpecPage({
      components: [DsMenuItemContent],
      html: `<ds-menu-item-content item-title="Test Title" subitem-title="Test Subtitle"></ds-menu-item-content>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item-content class="ds-menu-item-content ds-menu-item-content--single" item-title="Test Title" subitem-title="Test Subtitle">
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">Test Title</p>
          <p class="ds-menu-item-content__subtitle">Test Subtitle</p>
        </div>
      </ds-menu-item-content>
    `);
  });

  it('renders with overline, title and subtitle', async () => {
    const page = await newSpecPage({
      components: [DsMenuItemContent],
      html: `<ds-menu-item-content overline="Test Overline" item-title="Test Title" subitem-title="Test Subtitle"></ds-menu-item-content>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item-content class="ds-menu-item-content ds-menu-item-content--single" overline="Test Overline" item-title="Test Title" subitem-title="Test Subtitle">
        <div class="ds-menu-item-content__overline">Test Overline</div>
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">Test Title</p>
          <p class="ds-menu-item-content__subtitle">Test Subtitle</p>
        </div>
      </ds-menu-item-content>
    `);
  });

  it('renders with double content variant', async () => {
    const page = await newSpecPage({
      components: [DsMenuItemContent],
      html: `<ds-menu-item-content item-title="Test Title" content="double"></ds-menu-item-content>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item-content class="ds-menu-item-content ds-menu-item-content--double" item-title="Test Title" content="double">
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">Test Title</p>
        </div>
      </ds-menu-item-content>
    `);
  });

  it('renders with triple content variant', async () => {
    const page = await newSpecPage({
      components: [DsMenuItemContent],
      html: `<ds-menu-item-content item-title="Test Title" content="triple"></ds-menu-item-content>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item-content class="ds-menu-item-content ds-menu-item-content--triple" item-title="Test Title" content="triple">
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">Test Title</p>
        </div>
      </ds-menu-item-content>
    `);
  });

  it('renders with single-divider content variant', async () => {
    const page = await newSpecPage({
      components: [DsMenuItemContent],
      html: `<ds-menu-item-content item-title="Test Title" content="single-divider"></ds-menu-item-content>`,
    });
    expect(page.root).toEqualHtml(`
      <ds-menu-item-content class="ds-menu-item-content ds-menu-item-content--single-divider" item-title="Test Title" content="single-divider">
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">Test Title</p>
        </div>
      </ds-menu-item-content>
    `);
  });
});
