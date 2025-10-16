import { Component, Prop, Event, EventEmitter, h, Host, State, Watch, Listen, Element } from '@stencil/core';

@Component({
  tag: 'ds-dropdown',
  styleUrl: 'ds-dropdown.css',
  shadow: true,
})
export class DsDropdown {
  @Element() el: HTMLElement;

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
  @State() filteredOptions: any[] = [];
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
    this.hasError = newValue !== '';
  }

  @Watch('searchTerm')
  watchSearchTerm(newValue: string) {
    this.filterOptions(newValue);
  }

  componentWillLoad() {
    this.hasError = this.errorText !== '';
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
    const filteredItems: any[] = [];
    
    menuItems.forEach((item, index) => {
      const content = item.querySelector('ds-menu-item-content');
      if (content) {
        const title = content.getAttribute('title') || '';
        const subtitle = content.getAttribute('subtitle') || '';
        const searchText = `${title} ${subtitle}`.toLowerCase();
        
        if (searchText.includes(searchTerm.toLowerCase())) {
          filteredItems.push({
            element: item,
            index: index,
            title: title,
            subtitle: subtitle
          });
        }
      }
    });
    
    this.filteredOptions = filteredItems;
    
          // Atualizar visibilidade dos itens
          menuItems.forEach((item, index) => {
            const isVisible = filteredItems.some(filtered => filtered.index === index);
            (item as unknown as HTMLElement).style.display = isVisible ? 'block' : 'none';
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
    
    // Se não há espaço suficiente abaixo, mostrar acima
    if (spaceBelow < 200 && spaceAbove > spaceBelow) {
      this.variant = 'top';
      overlay.style.top = 'auto';
      overlay.style.bottom = '100%';
      overlay.style.marginTop = '0';
      overlay.style.marginBottom = '4px';
    } else {
      this.variant = 'bottom';
      overlay.style.top = '100%';
      overlay.style.bottom = 'auto';
      overlay.style.marginTop = '4px';
      overlay.style.marginBottom = '0';
    }
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
      const itemElement = item as unknown as HTMLElement;
      if (index === this.activeIndex) {
        itemElement.setAttribute('tabindex', '0');
        itemElement.setAttribute('aria-selected', 'true');
        itemElement.focus();
      } else {
        itemElement.setAttribute('tabindex', '-1');
        itemElement.setAttribute('aria-selected', 'false');
      }
    });
  }

  private selectActive() {
    const menuItems = this.el.querySelectorAll('ds-menu-item');
    if (this.activeIndex >= 0 && this.activeIndex < menuItems.length) {
      const activeItem = menuItems[this.activeIndex] as any;
      if (activeItem && !activeItem.disabled) {
        activeItem.click();
      }
    }
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
              {this.placeholder && !this.value ? this.placeholder : this.value}
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
