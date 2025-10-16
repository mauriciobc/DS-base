/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ds-base/core';


@ProxyCmp({
  inputs: ['alt', 'badge', 'badgePosition', 'initials', 'name', 'shape', 'size', 'src', 'status']
})
@Component({
  selector: 'ds-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'badge', 'badgePosition', 'initials', 'name', 'shape', 'size', 'src', 'status'],
})
export class DsAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsAvatar extends Components.DsAvatar {}


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
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value']
})
@Component({
  selector: 'ds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'label', 'name', 'required', 'value'],
})
export class DsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange', 'dsFocus', 'dsBlur']);
  }
}


export declare interface DsCheckbox extends Components.DsCheckbox {
  /**
   * Emitted when the checkbox checked state changes
   */
  dsChange: EventEmitter<CustomEvent<boolean>>;
  /**
   * Emitted when the checkbox gains focus
   */
  dsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus
   */
  dsBlur: EventEmitter<CustomEvent<void>>;
}


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
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'maxItems', 'multiple', 'name', 'placeholder', 'required', 'searchable', 'value', 'variant']
})
@Component({
  selector: 'ds-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorText', 'helpText', 'label', 'maxItems', 'multiple', 'name', 'placeholder', 'required', 'searchable', 'value', 'variant'],
})
export class DsDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange', 'dsFocus', 'dsBlur', 'dsOpen', 'dsClose']);
  }
}


export declare interface DsDropdown extends Components.DsDropdown {
  /**
   * Emitido quando o valor muda
   */
  dsChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitido quando o dropdown ganha foco
   */
  dsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitido quando o dropdown perde foco
   */
  dsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitido quando o dropdown abre
   */
  dsOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Emitido quando o dropdown fecha
   */
  dsClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['arrowAlign', 'arrowDownPath', 'arrowUpPath', 'position']
})
@Component({
  selector: 'ds-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['arrowAlign', 'arrowDownPath', 'arrowUpPath', 'position'],
})
export class DsDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsDropdownItem extends Components.DsDropdownItem {}


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
  inputs: ['disabled', 'index', 'selected', 'value']
})
@Component({
  selector: 'ds-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'index', 'selected', 'value'],
})
export class DsMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsSelect']);
  }
}


export declare interface DsMenuItem extends Components.DsMenuItem {
  /**
   * Emitido quando o item é clicado/selecionado.
O componente pai é responsável por gerenciar o estado de seleção.
Payload: { value: any, index: number }
   */
  dsSelect: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['content', 'itemTitle', 'overline', 'subtitle']
})
@Component({
  selector: 'ds-menu-item-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'itemTitle', 'overline', 'subtitle'],
})
export class DsMenuItemContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsMenuItemContent extends Components.DsMenuItemContent {}


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


