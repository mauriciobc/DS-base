import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-checkbox-group',
  styleUrl: 'ds-checkbox-group.css',
  shadow: true,
})
export class DsCheckboxGroup {
  /**
   * Name for all checkboxes in the group
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
   * If true, at least one checkbox is required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Layout orientation
   */
  @Prop() orientation: 'vertical' | 'horizontal' = 'vertical';

  /**
   * Emitted when any checkbox in the group changes
   */
  @Event() dsChange: EventEmitter<string[]>;

  render() {
    const groupId = `checkbox-group-${this.name || 'default'}`;
    const hasError = this.errorText !== '';

    return (
      <Host
        class={{
          'ds-checkbox-group': true,
          'ds-checkbox-group--disabled': this.disabled,
          'ds-checkbox-group--error': hasError,
          [`ds-checkbox-group--${this.orientation}`]: true,
        }}
      >
        {this.label && (
          <div id={groupId} class="ds-checkbox-group__label" role="group" aria-label={this.label}>
            {this.label}
            {this.required && <span class="ds-checkbox-group__required" aria-label="required">*</span>}
          </div>
        )}

        <div class="ds-checkbox-group__items">
          <slot />
        </div>

        {this.helpText && !hasError && (
          <div class="ds-checkbox-group__help-text">
            {this.helpText}
          </div>
        )}

        {this.errorText && hasError && (
          <div class="ds-checkbox-group__error-text" role="alert" aria-live="polite">
            {this.errorText}
          </div>
        )}
      </Host>
    );
  }
}



