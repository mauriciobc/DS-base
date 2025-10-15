/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ds-base/core';


@ProxyCmp({
  inputs: ['disabled', 'type', 'variant']
})
@Component({
  selector: 'ds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'type', 'variant'],
})
export class DsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsButton extends Components.DsButton {}


@ProxyCmp({
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'name', 'orientation', 'required']
})
@Component({
  selector: 'ds-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'name', 'orientation', 'required'],
})
export class DsCheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsCheckboxGroup extends Components.DsCheckboxGroup {
  /**
   * Emitted when any checkbox in the group changes
   */
  dsChange: EventEmitter<CustomEvent<string[]>>;
}


@ProxyCmp({
  inputs: ['autocomplete', 'disabled', 'errorText', 'helpText', 'label', 'maxlength', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'type', 'value']
})
@Component({
  selector: 'ds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'errorText', 'helpText', 'label', 'maxlength', 'minlength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'type', 'value'],
})
export class DsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsInput', 'dsChange', 'dsFocus', 'dsBlur']);
  }
}


export declare interface DsInput extends Components.DsInput {
  /**
   * Emitted when the input value changes
   */
  dsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the input value changes and loses focus
   */
  dsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the input gains focus
   */
  dsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus
   */
  dsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'name', 'orientation', 'required']
})
@Component({
  selector: 'ds-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'name', 'orientation', 'required'],
})
export class DsRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsRadioGroup extends Components.DsRadioGroup {
  /**
   * Emitted when selection changes
   */
  dsChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'multiple', 'name', 'placeholder', 'required', 'value']
})
@Component({
  selector: 'ds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'multiple', 'name', 'placeholder', 'required', 'value'],
})
export class DsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange', 'dsFocus', 'dsBlur']);
  }
}


export declare interface DsSelect extends Components.DsSelect {
  /**
   * Emitted when the select value changes
   */
  dsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the select gains focus
   */
  dsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select loses focus
   */
  dsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autoResize', 'cols', 'disabled', 'errorText', 'helpText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'showCounter', 'value']
})
@Component({
  selector: 'ds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoResize', 'cols', 'disabled', 'errorText', 'helpText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'rows', 'showCounter', 'value'],
})
export class DsTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsInput', 'dsChange', 'dsFocus', 'dsBlur']);
  }
}


export declare interface DsTextarea extends Components.DsTextarea {
  /**
   * Emitted when the textarea value changes
   */
  dsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the textarea value changes and loses focus
   */
  dsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the textarea gains focus
   */
  dsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea loses focus
   */
  dsBlur: EventEmitter<CustomEvent<void>>;
}


