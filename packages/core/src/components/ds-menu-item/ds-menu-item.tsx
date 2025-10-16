import { Component, Prop, Event, EventEmitter, h, Host, State } from '@stencil/core';

@Component({
  tag: 'ds-menu-item',
  styleUrl: 'ds-menu-item.css',
  shadow: true,
})
export class DsMenuItem {
  /**
   * Estado de seleção do item
   */
  @Prop({ reflect: true }) selected: boolean = false;

  /**
   * Estado desabilitado do item
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Valor do item
   */
  @Prop() value: any;

  /**
   * Índice do item na lista
   */
  @Prop() index: number = 0;

  @State() isHovered: boolean = false;

  /**
   * Emitido quando o item é selecionado
   */
  @Event() dsSelect: EventEmitter<any>;

  private handleClick = () => {
    if (!this.disabled) {
      this.dsSelect.emit({
        value: this.value,
        index: this.index,
        selected: !this.selected
      });
    }
  };

  private handleMouseEnter = () => {
    if (!this.disabled) {
      this.isHovered = true;
    }
  };

  private handleMouseLeave = () => {
    this.isHovered = false;
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleClick();
    }
  };

  render() {
    return (
      <Host
        class={{
          'ds-menu-item': true,
          'ds-menu-item--selected': this.selected,
          'ds-menu-item--disabled': this.disabled,
          'ds-menu-item--hovered': this.isHovered,
        }}
        role="option"
        aria-selected={this.selected ? 'true' : 'false'}
        aria-disabled={this.disabled ? 'true' : 'false'}
        tabindex={this.disabled ? -1 : 0}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onKeyDown={this.handleKeyDown}
        id={`menu-item-${this.index}`}
      >
        <div class="ds-menu-item__content">
          <slot />
        </div>
      </Host>
    );
  }
}
