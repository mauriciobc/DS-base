import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-radio-group',
  styleUrl: 'ds-radio-group.css',
  shadow: true,
})
export class DsRadioGroup {
  /**
   * Name for all radios in the group
   */
  @Prop() name: string = '';

  /**
   * Label for the group
   */
  @Prop() label: string = '';

  /**
   * Help text
   */
  @Prop() helpText: string = '';

  /**
   * Error message
   */
  @Prop() errorText: string = '';

  /**
   * If true, the group is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, selection is required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Layout orientation
   */
  @Prop() orientation: 'vertical' | 'horizontal' = 'vertical';

  /**
   * Emitted when selection changes
   */
  @Event() dsChange: EventEmitter<string>;

  render() {
    const groupId = `radio-group-${this.name || 'default'}`;
    const hasError = this.errorText !== '';

    return (
      <Host
        class={{
          'ds-radio-group': true,
          'ds-radio-group--disabled': this.disabled,
          'ds-radio-group--error': hasError,
          [`ds-radio-group--${this.orientation}`]: true,
        }}
      >
        {this.label && (
          <div id={groupId} class="ds-radio-group__label" role="radiogroup" aria-label={this.label}>
            {this.label}
            {this.required && <span class="ds-radio-group__required" aria-label="required">*</span>}
          </div>
        )}

        <div class="ds-radio-group__items">
          <slot />
        </div>

        {this.helpText && !hasError && (
          <div class="ds-radio-group__help-text">
            {this.helpText}
          </div>
        )}

        {this.errorText && hasError && (
          <div class="ds-radio-group__error-text" role="alert" aria-live="polite">
            {this.errorText}
          </div>
        )}
      </Host>
    );
  }
}



