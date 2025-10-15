import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  /**
   * The button type (button, submit, reset)
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * If true, the button is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * The button variant
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          class={`button button--${this.variant}`}
        >
          <slot />
        </button>
      </Host>
    );
  }
}

