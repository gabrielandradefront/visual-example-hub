
import { Component } from '@angular/core';
import { ButtonComponent } from './button.component.js';

export const HeroComponent = {
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32 bg-gradient-to-br from-[#33C3F0] to-[#0FA0CE] text-white">
      <h1 class="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6 opacity-0 balance-text animate-fade-in" 
          style="animation-delay: 100ms">
        {{title}}
      </h1>
      <p class="text-lg md:text-xl text-white/90 max-w-xl mb-10 opacity-0 balance-text animate-fade-in"
         style="animation-delay: 300ms">
        {{subtitle}}
      </p>
      <div class="opacity-0 animate-fade-in" style="animation-delay: 500ms">
        <app-button variant="secondary" size="lg" class="px-8 font-bold rounded-full hover:scale-105">
          {{ctaText}}
        </app-button>
      </div>
    </div>
  `,
  props: ['title', 'subtitle', 'ctaText']
};

customElements.define('app-hero', 
  class extends HTMLElement {
    constructor() {
      super();
      
      // Get attributes
      const title = this.getAttribute('title') || '';
      const subtitle = this.getAttribute('subtitle') || '';
      const ctaText = this.getAttribute('ctaText') || '';
      
      // Replace template placeholders
      let template = HeroComponent.template
        .replace('{{title}}', title)
        .replace('{{subtitle}}', subtitle)
        .replace('{{ctaText}}', ctaText);
      
      this.innerHTML = template;
    }
  }
);
