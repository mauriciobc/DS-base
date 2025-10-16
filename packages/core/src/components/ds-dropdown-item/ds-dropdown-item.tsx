import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-dropdown-item',
  styleUrl: 'ds-dropdown-item.css',
  shadow: true,
})
export class DsDropdownItem {
  /**
   * Posição da seta
   */
  @Prop() position: 'top' | 'bottom' | 'noarrow' = 'noarrow';

  /**
   * Alinhamento horizontal da seta
   */
  @Prop() arrowAlign: 'left' | 'middle' | 'right' = 'left';

  /**
   * Se deve mostrar a seta
   */
  get showArrow(): boolean {
    return this.position !== 'noarrow';
  }

  /**
   * Caminho para o SVG da seta para cima
   */
  get arrowUpPath(): string {
    return '/assets/icons/arrow-up.svg';
  }

  /**
   * Caminho para o SVG da seta para baixo
   */
  get arrowDownPath(): string {
    return '/assets/icons/arrow-down.svg';
  }

  render() {
    return (
      <Host
        class={{
          'ds-dropdown-item': true,
          [`ds-dropdown-item--${this.position}`]: true,
          [`ds-dropdown-item--arrow-${this.arrowAlign}`]: this.showArrow,
        }}
      >
        {this.showArrow && this.position === 'top' && (
          <div class="ds-dropdown-item__arrow ds-dropdown-item__arrow--top">
            <img 
              src={this.arrowUpPath} 
              alt="Seta para cima"
              class="ds-dropdown-item__arrow-icon"
            />
          </div>
        )}

        <div class="ds-dropdown-item__content">
          <slot />
        </div>

        {this.showArrow && this.position === 'bottom' && (
          <div class="ds-dropdown-item__arrow ds-dropdown-item__arrow--bottom">
            <img 
              src={this.arrowDownPath} 
              alt="Seta para baixo"
              class="ds-dropdown-item__arrow-icon"
            />
          </div>
        )}
      </Host>
    );
  }
}
