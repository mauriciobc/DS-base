import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import { colors } from '../../tokens/colors';

@Component({
  tag: 'ds-avatar',
  styleUrl: 'ds-avatar.css',
  shadow: true,
})
export class DsAvatar {
  @Element() el: HTMLElement;

  /**
   * URL da imagem do avatar
   */
  @Prop() src?: string;

  /**
   * Texto alternativo para a imagem
   */
  @Prop() alt?: string;

  /**
   * Nome para gerar iniciais automaticamente
   */
  @Prop() name?: string;

  /**
   * Iniciais customizadas (sobrescreve geração automática)
   */
  @Prop() initials?: string;

  /**
   * Tamanho do avatar
   */
  @Prop({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /**
   * Forma do avatar
   */
  @Prop({ reflect: true }) shape: 'circle' | 'square' = 'circle';

  /**
   * Texto do badge
   */
  @Prop() badge?: string;

  /**
   * Posição do badge
   */
  @Prop() badgePosition: 'top-right' | 'bottom-right' = 'bottom-right';

  /**
   * Status do usuário
   */
  @Prop() status?: 'online' | 'offline' | 'away' | 'busy';

  @State() imageError: boolean = false;
  @State() showFallback: boolean = false;


  /**
   * Gera iniciais a partir do nome
   */
  private generateInitials(name: string): string {
    if (!name) return '';
    
    const words = name.trim().split(/\s+/);
    const initials = words
      .slice(0, 2)
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase();
    
    return initials;
  }

  /**
   * Gera cor de fundo consistente baseada no texto
   * Usa paleta de cores do design system para melhor consistência
   */
  private getBackgroundColor(text: string): string {
    if (!text) return colors.structure.borderColorSecondary;
    
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Usar cores da paleta do design system baseado no hash
    const colorPalettes = [
      colors.palette.blue,
      colors.palette.green,
      colors.palette.violet,
      colors.palette.orange,
      colors.palette.teal,
      colors.palette.pink,
      colors.palette.indigo,
      colors.palette.cyan
    ];
    
    const paletteIndex = Math.abs(hash) % colorPalettes.length;
    const colorIndex = Math.abs(hash) % 6; // Usar cores 3-8 (mais vibrantes)
    const selectedPalette = colorPalettes[paletteIndex];
    const colorKeys = Object.keys(selectedPalette) as Array<keyof typeof selectedPalette>;
    const selectedColor = selectedPalette[colorKeys[colorIndex + 3] as keyof typeof selectedPalette];
    
    return selectedColor;
  }

  /**
   * Manipula erro de carregamento da imagem
   */
  private handleImageError = () => {
    this.imageError = true;
    this.showFallback = true;
  };

  /**
   * Manipula carregamento bem-sucedido da imagem
   */
  private handleImageLoad = () => {
    this.imageError = false;
    this.showFallback = false;
  };

  /**
   * Renderiza o conteúdo do avatar
   */
  private renderContent() {
    // Se tem imagem e não houve erro, renderiza imagem
    if (this.src && !this.imageError) {
      return (
        <img
          src={this.src}
          alt={this.alt || 'Avatar'}
          class="avatar__image"
          onError={this.handleImageError}
          onLoad={this.handleImageLoad}
        />
      );
    }

    // Fallback: iniciais ou ícone
    const displayInitials = this.initials || (this.name ? this.generateInitials(this.name) : '');
    
    if (displayInitials) {
      return (
        <div 
          class="avatar__initials"
          style={{ backgroundColor: this.getBackgroundColor(displayInitials) }}
        >
          {displayInitials}
        </div>
      );
    }

    // Fallback final: ícone padrão
    return (
      <div class="avatar__icon">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      </div>
    );
  }

  render() {
    const badgeClasses = [
      'avatar__badge',
      `avatar__badge--${this.badgePosition}`
    ].join(' ');

    const statusClasses = [
      'avatar__status',
      `avatar__status--${this.badgePosition}`,
      `avatar__status--${this.status}`
    ].join(' ');

    return (
      <Host>
        <div class={`avatar avatar--${this.size} avatar--${this.shape}`}>
          <div class="avatar__content">
            {this.renderContent()}
          </div>
          
          {this.badge && (
            <span class={badgeClasses}>
              {this.badge}
            </span>
          )}
          
          {this.status && (
            <span class={statusClasses}></span>
          )}
        </div>
      </Host>
    );
  }
}
