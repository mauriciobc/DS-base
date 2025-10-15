import { Component, Prop, Event, EventEmitter, h, Host, State } from '@stencil/core';

@Component({
  tag: 'ds-select',
  styleUrl: 'ds-select.css',
  shadow: true,
})
export class DsSelect {
  /**
   * The select value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * The select name
   */
  @Prop() name: string = '';

  /**
   * Label text
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
   * Placeholder option text
   */
  @Prop() placeholder: string = '';

  /**
   * If true, the select is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, the select is required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * If true, allows multiple selections
   */
  @Prop() multiple: boolean = false;

  @State() hasError: boolean = false;
  @State() isFocused: boolean = false;

  /**
   * Emitted when the select value changes
   */
  @Event() dsChange: EventEmitter<string>;

  /**
   * Emitted when the select gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the select loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  componentWillLoad() {
    this.hasError = this.errorText !== '';
  }

  private handleChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.dsChange.emit(this.value);
  };

  private handleFocus = () => {
    this.isFocused = true;
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.isFocused = false;
    this.dsBlur.emit();
  };

  render() {
    const selectId = `select-${this.name || 'default'}`;
    const helpId = this.helpText ? `${selectId}-help` : undefined;
    const errorId = this.errorText ? `${selectId}-error` : undefined;
    const describedBy = [helpId, errorId].filter(Boolean).join(' ');

    return (
      <Host
        class={{
          'ds-select': true,
          'ds-select--disabled': this.disabled,
          'ds-select--error': this.hasError,
          'ds-select--focused': this.isFocused,
          'ds-select--multiple': this.multiple,
        }}
      >
        {this.label && (
          <label htmlFor={selectId} class="ds-select__label">
            {this.label}
            {this.required && <span class="ds-select__required" aria-label="required">*</span>}
          </label>
        )}

        <div class="ds-select__wrapper">
          <select
            id={selectId}
            class="ds-select__control"
            name={this.name}
            disabled={this.disabled}
            required={this.required}
            multiple={this.multiple}
            aria-invalid={this.hasError ? 'true' : 'false'}
            aria-describedby={describedBy || undefined}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            {this.placeholder && (
              <option value="" disabled selected={!this.value}>
                {this.placeholder}
              </option>
            )}
            <slot />
          </select>
        </div>

        {this.helpText && !this.hasError && (
          <div id={helpId} class="ds-select__help-text">
            {this.helpText}
          </div>
        )}

        {this.errorText && this.hasError && (
          <div id={errorId} class="ds-select__error-text" role="alert" aria-live="polite">
            {this.errorText}
          </div>
        )}
      </Host>
    );
  }
}



