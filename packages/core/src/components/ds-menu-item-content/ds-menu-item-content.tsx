import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-menu-item-content',
  styleUrl: 'ds-menu-item-content.css',
  shadow: true,
})
export class DsMenuItemContent {
  /**
   * Texto principal do item
   */
  @Prop() itemTitle: string = '';

  /**
   * Texto secundário do item
   */
  @Prop() subtitle?: string;

  /**
   * Texto acima do título
   */
  @Prop() overline?: string;

  /**
   * Variação do conteúdo
   */
  @Prop() content: 'single' | 'double' | 'triple' | 'single-divider' = 'single';

  render() {
    return (
      <Host
        class={{
          'ds-menu-item-content': true,
          [`ds-menu-item-content--${this.content}`]: true,
        }}
      >
        {this.overline && (
          <div class="ds-menu-item-content__overline">
            {this.overline}
          </div>
        )}
        
        <div class="ds-menu-item-content__main">
          <p class="ds-menu-item-content__title">
            {this.itemTitle}
          </p>
          
          {this.subtitle && (
            <p class="ds-menu-item-content__subtitle">
              {this.subtitle}
            </p>
          )}
        </div>
      </Host>
    );
  }
}
