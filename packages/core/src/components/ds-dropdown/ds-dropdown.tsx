import { Component, Prop, Event, EventEmitter, h, Host, State, Watch, Listen, Element } from '@stencil/core';

interface FilteredMenuItem {
  element: Element;
  index: number;
  title: string;
  subtitle: string;
  visible: boolean;
}

@Component({
  tag: 'ds-dropdown',
  styleUrl: 'ds-dropdown.css',
  shadow: true,
})
export class DsDropdown {
  @Element() el: HTMLElement;

  // Constante para o espaço mínimo necessário para posicionamento
  private readonly MIN_SPACE_THRESHOLD = 200;

  /**
   * Valor selecionado
   */
  @Prop({ mutable: true }) value: string | string[] = '';

  /**
   * Nome do campo
   */
  @Prop() name: string = '';

  /**
   * Label do dropdown
   */
  @Prop() label?: string;

  /**
   * Placeholder do dropdown
   */
  @Prop() placeholder?: string;

  /**
   * Se o dropdown está desabilitado
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Se o dropdown é obrigatório
   */
  @Prop({ reflect: true }) required: boolean = false;

  /**
   * Se permite seleção múltipla
   */
  @Prop() multiple: boolean = false;

  /**
   * Se permite busca/filtro
   */
  @Prop() searchable: boolean = false;

  /**
   * Limite de itens visíveis
   */
  @Prop() maxItems: number = 9;

  /**
   * Variação do dropdown
   */
  @Prop() variant: 'noarrow' | 'top' | 'bottom' = 'noarrow';

  /**
   * Texto de ajuda
   */
  @Prop() helpText?: string;

  /**
   * Texto de erro
   */
  @Prop() errorText?: string;

  @State() isOpen: boolean = false;
  @State() filteredOptions: FilteredMenuItem[] = [];
  
  // Estado privado para controlar posicionamento interno
  private _positionVariant: 'top' | 'bottom' = 'bottom';
  @State() selectedItems: any[] = [];
  @State() activeIndex: number = -1;
  @State() searchTerm: string = '';
  @State() hasError: boolean = false;

  /**
   * Emitido quando o valor muda
   */
  @Event() dsChange: EventEmitter<any>;

  /**
   * Emitido quando o dropdown ganha foco
   */
  @Event() dsFocus: EventEmitter<void>;

  /**
   * Emitido quando o dropdown perde foco
   */
  @Event() dsBlur: EventEmitter<void>;

  /**
   * Emitido quando o dropdown abre
   */
  @Event() dsOpen: EventEmitter<void>;

  /**
   * Emitido quando o dropdown fecha
   */
  @Event() dsClose: EventEmitter<void>;

  @Watch('errorText')
  watchErrorText(newValue: string) {
    this.hasError = newValue != null && newValue !== '';
  }

  @Watch('searchTerm')
  watchSearchTerm(newValue: string) {
    this.filterOptions(newValue);
  }

  @Watch('value')
  watchValue() {
    this.updateSelectedItems();
  }

  componentWillLoad() {
    this.hasError = this.errorText != null && this.errorText !== '';
  }

  componentDidLoad() {
    // Inicializar estado dos itens selecionados após o componente carregar
    this.updateSelectedItems();
    // Inicializar itens filtrados
    this.filterOptions(this.searchTerm);
    // Aplicar visibilidade inicial
    this.applyVisibility();
  }

  private get dropdownId(): string {
    return `dropdown-${this.name || 'default'}`;
  }

  private get helpId(): string | undefined {
    return this.helpText ? `${this.dropdownId}-help` : undefined;
  }

  private get errorId(): string | undefined {
    return this.errorText ? `${this.dropdownId}-error` : undefined;
  }

  private get describedBy(): string | undefined {
    const ids = [this.helpId, this.errorId].filter(Boolean);
    return ids.length > 0 ? ids.join(' ') : undefined;
  }

  private filterOptions(searchTerm: string) {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    const filteredItems: FilteredMenuItem[] = [];
    
    menuItems.forEach((item, index) => {
      const content = item.querySelector('ds-menu-item-content');
      if (content) {
        const title = content.getAttribute('title') || '';
        const subtitle = content.getAttribute('subtitle') || '';
        const searchText = `${title} ${subtitle}`.toLowerCase();
        const isVisible = searchText.includes(searchTerm.toLowerCase());
        
        filteredItems.push({
          element: item,
          index: index,
          title: title,
          subtitle: subtitle,
          visible: isVisible
        });
      }
    });
    
    this.filteredOptions = filteredItems;
    this.applyVisibility();
  }

  private applyVisibility() {
    this.filteredOptions.forEach((item) => {
      const element = item.element as HTMLElement;
      if (element) {
        element.style.display = item.visible ? 'block' : 'none';
        element.classList.toggle('ds-dropdown__menu-item--hidden', !item.visible);
      }
    });
  }

  private toggleDropdown = () => {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.calculatePosition();
        this.dsOpen.emit();
      } else {
        this.dsClose.emit();
      }
    }
  };

  private calculatePosition() {
    // Calcular posição do overlay baseado no espaço disponível
    const trigger = this.el.querySelector('.ds-dropdown__trigger') as HTMLElement;
    const overlay = this.el.querySelector('.ds-dropdown__overlay') as HTMLElement;
    
    if (!trigger || !overlay) return;

    const triggerRect = trigger.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    
    // Determinar posição baseada no espaço disponível
    const shouldPositionTop = spaceBelow < this.MIN_SPACE_THRESHOLD && spaceAbove > spaceBelow;
    this._positionVariant = shouldPositionTop ? 'top' : 'bottom';
    
    // Remover classes de posicionamento existentes
    overlay.classList.remove('ds-dropdown__overlay--top', 'ds-dropdown__overlay--bottom');
    
    // Adicionar classe de posicionamento apropriada
    overlay.classList.add(`ds-dropdown__overlay--${this._positionVariant}`);
    
    // Definir data-attribute para referência adicional
    overlay.setAttribute('data-position', this._positionVariant);
  }

  private closeDropdown = () => {
    this.isOpen = false;
    this.activeIndex = -1;
    this.dsClose.emit();
  };

  private handleFocus = () => {
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.dsBlur.emit();
  };


  @Listen('dsSelect')
  handleMenuItemSelect(event: CustomEvent) {
    const { value } = event.detail;
    
    // Preservar o valor anterior antes de fazer qualquer mutação
    const oldValue = this.value;
    
    if (this.multiple) {
      // Modo múltipla seleção - toggle do estado atual
      if (Array.isArray(this.value)) {
        if (this.value.includes(value)) {
          // Remove se já está selecionado
          this.value = this.value.filter(v => v !== value);
        } else {
          // Adiciona se não está selecionado
          this.value = [...this.value, value];
        }
      } else {
        this.value = [value];
      }
    } else {
      // Modo seleção única
      this.value = value;
      this.closeDropdown();
    }
    
    // Emitir evento de mudança apenas se o valor realmente mudou
    this.emitChangeIfValueChanged(oldValue, this.value);
    
    // Atualizar estado dos itens selecionados
    this.updateSelectedItems();
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    if (this.disabled) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen) {
          this.toggleDropdown();
        } else {
          this.navigateDown();
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!this.isOpen) {
          this.toggleDropdown();
        } else {
          this.navigateUp();
        }
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (!this.isOpen) {
          this.toggleDropdown();
        } else {
          this.selectActive();
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.closeDropdown();
        break;
      case 'Tab':
        this.closeDropdown();
        break;
    }
  }

  private navigateDown() {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    if (menuItems.length === 0) return;

    this.activeIndex = Math.min(this.activeIndex + 1, menuItems.length - 1);
    this.updateActiveItem();
  }

  private navigateUp() {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    if (menuItems.length === 0) return;

    this.activeIndex = Math.max(this.activeIndex - 1, 0);
    this.updateActiveItem();
  }

  private updateActiveItem() {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    menuItems.forEach((item, index) => {
      if (index === this.activeIndex) {
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-selected', 'true');
        (item as unknown as HTMLElement).focus();
      } else {
        item.setAttribute('tabindex', '-1');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }

  private selectActive() {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    if (this.activeIndex >= 0 && this.activeIndex < menuItems.length) {
      const activeItem = menuItems[this.activeIndex];
      if (activeItem && !(activeItem as any).disabled) {
        (activeItem as unknown as HTMLElement).click();
      }
    }
  }

  private updateSelectedItems() {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    menuItems.forEach((item) => {
      const itemValue = (item as any).value;
      let isSelected = false;
      
      if (this.multiple && Array.isArray(this.value)) {
        isSelected = this.value.includes(itemValue);
      } else if (!this.multiple) {
        isSelected = this.value === itemValue;
      }
      
      (item as any).selected = isSelected;
    });
  }

  /**
   * Emite o evento dsChange apenas se o valor realmente mudou
   */
  private emitChangeIfValueChanged(oldValue: any, newValue: any) {
    // Verificar se o valor realmente mudou para evitar emissões duplicadas
    const hasChanged = this.multiple 
      ? !this.arraysEqual(oldValue as string[], newValue as string[])
      : oldValue !== newValue;
    
    if (hasChanged) {
      this.dsChange.emit(newValue);
    }
  }

  /**
   * Compara dois arrays para verificar se são iguais
   */
  private arraysEqual(arr1: string[], arr2: string[]): boolean {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
    if (arr1.length !== arr2.length) return false;
    
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    
    return sorted1.every((val, index) => val === sorted2[index]);
  }

  private getDisplayValue(): string {
    if (this.placeholder && !this.value) {
      return this.placeholder;
    }
    
    if (this.multiple && Array.isArray(this.value)) {
      if (this.value.length === 0) {
        return this.placeholder || '';
      }
      if (this.value.length === 1) {
        return String(this.value[0]);
      }
      return `${this.value.length} itens selecionados`;
    }
    
    return String(this.value || '');
  }

  render() {
    return (
      <Host
        class={{
          'ds-dropdown': true,
          'ds-dropdown--disabled': this.disabled,
          'ds-dropdown--error': this.hasError,
          'ds-dropdown--open': this.isOpen,
          'ds-dropdown--multiple': this.multiple,
          'ds-dropdown--searchable': this.searchable,
        }}
        role="combobox"
        aria-expanded={this.isOpen ? 'true' : 'false'}
        aria-haspopup="listbox"
        aria-owns={`${this.dropdownId}-listbox`}
        aria-invalid={this.hasError ? 'true' : 'false'}
        aria-describedby={this.describedBy}
      >
        {this.label && (
          <label htmlFor={this.dropdownId} class="ds-dropdown__label">
            {this.label}
            {this.required && <span class="ds-dropdown__required" aria-label="required">*</span>}
          </label>
        )}

        <div class="ds-dropdown__wrapper">
        <button
          id={this.dropdownId}
          class="ds-dropdown__trigger"
          disabled={this.disabled}
          onClick={this.toggleDropdown}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          aria-haspopup="listbox"
          aria-expanded={this.isOpen ? 'true' : 'false'}
          aria-owns={`${this.dropdownId}-listbox`}
          aria-activedescendant={this.activeIndex >= 0 ? `${this.dropdownId}-option-${this.activeIndex}` : undefined}
          aria-autocomplete={this.searchable ? 'list' : 'none'}
          aria-describedby={this.describedBy}
        >
            <span class="ds-dropdown__value">
              {this.getDisplayValue()}
            </span>
            <span class="ds-dropdown__arrow" aria-hidden="true">
              {this.isOpen ? '▲' : '▼'}
            </span>
          </button>

          {this.isOpen && (
            <div class="ds-dropdown__overlay">
              {this.searchable && (
                <div class="ds-dropdown__search">
                  <input
                    type="text"
                    class="ds-dropdown__search-input"
                    placeholder="Buscar..."
                    value={this.searchTerm}
                    onInput={(e) => this.searchTerm = (e.target as HTMLInputElement).value}
                    onKeyDown={(e) => e.stopPropagation()}
                  />
                </div>
              )}
              <div 
                id={`${this.dropdownId}-listbox`}
                class="ds-dropdown__content"
                role="listbox"
                aria-label={this.label || 'Lista de opções'}
              >
                <slot />
              </div>
            </div>
          )}
        </div>

        {this.helpText && !this.hasError && (
          <div id={this.helpId} class="ds-dropdown__help-text">
            {this.helpText}
          </div>
        )}

        {this.errorText && this.hasError && (
          <div id={this.errorId} class="ds-dropdown__error-text" role="alert" aria-live="polite">
            {this.errorText}
          </div>
        )}
      </Host>
    );
  }
}
