import { Component, Prop, h, Host } from '@stencil/core';
import { currentAssets } from '../../tokens/assets';

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
   * Caminho personalizado para o SVG da seta para cima
   * Se não fornecido, usa o valor padrão da configuração de assets
   */
  @Prop() arrowUpPath?: string;

  /**
   * Caminho personalizado para o SVG da seta para baixo
   * Se não fornecido, usa o valor padrão da configuração de assets
   */
  @Prop() arrowDownPath?: string;

  /**
   * Se deve mostrar a seta
   */
  get showArrow(): boolean {
    return this.position !== 'noarrow';
  }

  /**
   * Obtém o caminho da seta para cima (propriedade ou padrão)
   */
  get resolvedArrowUpPath(): string {
    return this.arrowUpPath || currentAssets.icons.arrowUp;
  }

  /**
   * Obtém o caminho da seta para baixo (propriedade ou padrão)
   */
  get resolvedArrowDownPath(): string {
    return this.arrowDownPath || currentAssets.icons.arrowDown;
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
              src={this.resolvedArrowUpPath} 
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
              src={this.resolvedArrowDownPath} 
              alt="Seta para baixo"
              class="ds-dropdown-item__arrow-icon"
            />
          </div>
        )}
      </Host>
    );
  }
}
