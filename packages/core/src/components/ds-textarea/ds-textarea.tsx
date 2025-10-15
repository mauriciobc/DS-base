import { Component, Prop, Event, EventEmitter, h, Host, State, Watch } from '@stencil/core';

@Component({
  tag: 'ds-textarea',
  styleUrl: 'ds-textarea.css',
  shadow: true,
})
export class DsTextarea {
  private textareaElement?: HTMLTextAreaElement;

  /**
   * The textarea value
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * The textarea name
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
   * Number of rows
   */
  @Prop() rows: number = 3;

  /**
   * Number of columns
   */
  @Prop() cols?: number;

  /**
   * If true, the textarea is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, the textarea is readonly
   */
  @Prop({ reflect: true }) readonly: boolean = false;

  /**
   * If true, the textarea is required
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
   * If true, auto-resize based on content
   */
  @Prop() autoResize: boolean = false;

  /**
   * If true, show character counter
   */
  @Prop() showCounter: boolean = false;

  @State() hasError: boolean = false;
  @State() isTouched: boolean = false;
  @State() isFocused: boolean = false;
  @State() currentLength: number = 0;

  /**
   * Emitted when the textarea value changes
   */
  @Event() dsInput: EventEmitter<string>;

  /**
   * Emitted when the textarea value changes and loses focus
   */
  @Event() dsChange: EventEmitter<string>;

  /**
   * Emitted when the textarea gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the textarea loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  @Watch('errorText')
  watchErrorText(newValue: string) {
    this.hasError = newValue !== '';
  }

  @Watch('value')
  watchValue(newValue: string) {
    this.currentLength = newValue.length;
    if (this.autoResize && this.textareaElement) {
      this.adjustHeight();
    }
  }

  componentWillLoad() {
    this.hasError = this.errorText !== '';
    this.currentLength = this.value.length;
  }

  componentDidLoad() {
    if (this.autoResize) {
      this.adjustHeight();
    }
  }

  private adjustHeight = () => {
    if (!this.textareaElement) return;
    this.textareaElement.style.height = 'auto';
    this.textareaElement.style.height = `${this.textareaElement.scrollHeight}px`;
  };

  private handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.dsInput.emit(this.value);
  };

  private handleChange = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
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
    const textareaId = `textarea-${this.name || 'default'}`;
    const helpId = this.helpText ? `${textareaId}-help` : undefined;
    const errorId = this.errorText ? `${textareaId}-error` : undefined;
    const describedBy = [helpId, errorId].filter(Boolean).join(' ');

    return (
      <Host
        class={{
          'ds-textarea': true,
          'ds-textarea--disabled': this.disabled,
          'ds-textarea--readonly': this.readonly,
          'ds-textarea--error': this.hasError,
          'ds-textarea--focused': this.isFocused,
          'ds-textarea--touched': this.isTouched,
          'ds-textarea--auto-resize': this.autoResize,
        }}
      >
        {this.label && (
          <label htmlFor={textareaId} class="ds-textarea__label">
            {this.label}
            {this.required && <span class="ds-textarea__required" aria-label="required">*</span>}
          </label>
        )}

        <div class="ds-textarea__wrapper">
          <textarea
            ref={el => (this.textareaElement = el)}
            id={textareaId}
            class="ds-textarea__control"
            name={this.name}
            rows={this.rows}
            cols={this.cols}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readOnly={this.readonly}
            required={this.required}
            minLength={this.minlength}
            maxLength={this.maxlength}
            aria-invalid={this.hasError ? 'true' : 'false'}
            aria-describedby={describedBy || undefined}
            onInput={this.handleInput}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          >
            {this.value}
          </textarea>
        </div>

        {this.showCounter && this.maxlength && (
          <div class="ds-textarea__counter">
            {this.currentLength} / {this.maxlength}
          </div>
        )}

        {this.helpText && !this.hasError && (
          <div id={helpId} class="ds-textarea__help-text">
            {this.helpText}
          </div>
        )}

        {this.errorText && this.hasError && (
          <div id={errorId} class="ds-textarea__error-text" role="alert" aria-live="polite">
            {this.errorText}
          </div>
        )}
      </Host>
    );
  }
}



