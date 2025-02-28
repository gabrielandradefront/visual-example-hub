
import { Component } from '@angular/core';

export const NotFoundComponent = {
  selector: 'app-not-found',
  standalone: true,
  template: `
    <div class="h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-6xl font-bold text-[#33C3F0] mb-4">404</h1>
      <h2 class="text-2xl mb-6">Página não encontrada</h2>
      <p class="text-gray-600 mb-8">A página que você está procurando não existe ou foi movida.</p>
      <a href="/" class="bg-[#33C3F0] text-white hover:bg-[#1EAEDB] px-6 py-3 rounded-md transition-colors">
        Voltar para o início
      </a>
    </div>
  `
};

customElements.define('app-not-found', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = NotFoundComponent.template;
    }
  }
);
