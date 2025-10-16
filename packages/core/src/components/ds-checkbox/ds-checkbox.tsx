import { Component, Prop, Event, EventEmitter, h, Host, State, Watch, Element } from '@stencil/core';

@Component({
  tag: 'ds-checkbox',
  styleUrl: 'ds-checkbox.css',
  shadow: true,
})
export class DsCheckbox {
  @Element() el: HTMLElement;

  /**
   * The checkbox checked state
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * The checkbox value for forms
   */
  @Prop() value: string = '';

  /**
   * The checkbox name for grouping
   */
  @Prop() name: string = '';

  /**
   * The checkbox label text
   */
  @Prop() label: string = '';

  /**
   * If true, the checkbox is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * If true, the checkbox is required
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * If true, the checkbox is in indeterminate state
   */
  @Prop({ reflect: true }) indeterminate: boolean = false;

  @State() isFocused: boolean = false;
  @State() isTouched: boolean = false;

  private inputRef?: HTMLInputElement;

  /**
   * Emitted when the checkbox checked state changes
   */
  @Event() dsChange: EventEmitter<boolean>;

  /**
   * Emitted when the checkbox gains focus
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitted when the checkbox loses focus
   */
  @Event() dsBlur: EventEmitter<void>;

  @Watch('indeterminate')
  watchIndeterminate(newValue: boolean) {
    if (this.inputRef) {
      this.inputRef.indeterminate = newValue;
    }
  }

  componentDidLoad() {
    // Sincronizar indeterminate inicial
    if (this.inputRef && this.indeterminate) {
      this.inputRef.indeterminate = true;
    }
  }

  private handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.dsChange.emit(this.checked);
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
    const checkboxId = `checkbox-${this.name || 'default'}-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <Host
        class={{
          'ds-checkbox': true,
          'ds-checkbox--checked': this.checked,
          'ds-checkbox--disabled': this.disabled,
          'ds-checkbox--focused': this.isFocused,
          'ds-checkbox--indeterminate': this.indeterminate,
        }}
      >
        <div class="ds-checkbox__container">
          <div class="ds-checkbox__input-wrapper">
            <input
              ref={(el) => (this.inputRef = el)}
              type="checkbox"
              class="ds-checkbox__input"
              id={checkboxId}
              name={this.name}
              value={this.value}
              checked={this.checked}
              disabled={this.disabled}
              required={this.required}
              aria-label={this.label || undefined}
              aria-checked={this.indeterminate ? 'mixed' : this.checked.toString()}
              onInput={this.handleInput}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <div class="ds-checkbox__box" aria-hidden="true">
              {this.checked && !this.indeterminate && (
                <svg class="ds-checkbox__checkmark" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
              {this.indeterminate && (
                <svg class="ds-checkbox__indeterminate" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              )}
            </div>
          </div>
          {this.label && (
            <label htmlFor={checkboxId} class="ds-checkbox__label">
              {this.label}
            </label>
          )}
        </div>
      </Host>
    );
  }
}
