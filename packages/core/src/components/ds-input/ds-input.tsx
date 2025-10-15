import { Component, Prop, Event, EventEmitter, h, Host, State, Watch } from '@stencil/core';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: true,
})
export class DsInput {

  /**
   * The input type
   */
  @Prop() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' = 'text';

  /**
   * The input size
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The input value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * The input name
   */
  @Prop() name: string = '';

  /**
   * Placeholder text
   */
  @Prop() placeholder: string = '';

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
   * If true, the input is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, the input is readonly
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * If true, the input is required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Minimum length
   */
  @Prop() minlength?: number;

  /**
   * Maximum length
   */
  @Prop() maxlength?: number;

  /**
   * Pattern for validation
   */
  @Prop() pattern?: string;

  /**
   * Autocomplete attribute
   */
  @Prop() autocomplete?: string;

  @State() hasError: boolean = false;
  @State() isTouched: boolean = false;
  @State() isFocused: boolean = false;

  /**
   * Emitted when the input value changes
   */
  @Event() dsInput: EventEmitter<string>;

  /**
   * Emitted when the input value changes and loses focus
   */
  @Event() dsChange: EventEmitter<string>;

  /**
   * Emitted when the input gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the input loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  @Watch('errorText')
  watchErrorText(newValue: string) {
    this.hasError = newValue !== '';
  }

  componentWillLoad() {
    this.hasError = this.errorText !== '';
  }

  private handleInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.dsInput.emit(this.value);
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.dsChange.emit(this.value);
  };

  private handleFocus = () => {
    this.isFocused = true;
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.isFocused = false;
    this.isTouched = true;
    this.dsBlur.emit();
  };

  render() {
    const inputId = `input-${this.name || 'default'}`;
    const helpId = this.helpText ? `${inputId}-help` : undefined;
    const errorId = this.errorText ? `${inputId}-error` : undefined;
    const describedBy = [helpId, errorId].filter(Boolean).join(' ');

    return (
      <Host
        class={{
          'ds-input': true,
          'ds-input--disabled': this.disabled,
          'ds-input--readonly': this.readonly,
          'ds-input--error': this.hasError,
          'ds-input--focused': this.isFocused,
          'ds-input--touched': this.isTouched,
          [`ds-input--${this.size}`]: true,
        }}
      >
        {this.label && (
          <label htmlFor={inputId} class="ds-input__label">
            {this.label}
            {this.required && <span class="ds-input__required" aria-label="required">*</span>}
          </label>
        )}

        <div class="ds-input__wrapper">
          <div class="ds-input__icon-left">
            <slot name="icon-left"></slot>
          </div>
          
          <input
            id={inputId}
            class="ds-input__control"
            type={this.type}
            name={this.name}
            value={this.value}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readonly={this.readonly}
            required={this.required}
            minLength={this.minlength}
            maxLength={this.maxlength}
            pattern={this.pattern}
            autocomplete={this.autocomplete}
            aria-invalid={this.hasError ? 'true' : 'false'}
            aria-describedby={describedBy || undefined}
            onInput={this.handleInput}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          
          <div class="ds-input__icon-right">
            <slot name="icon-right"></slot>
          </div>
        </div>

        {this.helpText && !this.hasError && (
          <div id={helpId} class="ds-input__help-text">
            {this.helpText}
          </div>
        )}

        {this.errorText && this.hasError && (
          <div id={errorId} class="ds-input__error-text" role="alert" aria-live="polite">
            {this.errorText}
          </div>
        )}
      </Host>
    );
  }
}

