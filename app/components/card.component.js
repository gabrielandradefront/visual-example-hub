
import { Component } from '@angular/core';

export const CardComponent = {
  selector: 'app-card',
  standalone: true,
  template: `
    <div class="group relative overflow-hidden rounded-xl hover-card bg-white border-2 border-[#33C3F0]/10 transition-all hover:border-[#ea384c] hover:shadow-xl">
      <div class="relative h-60 overflow-hidden">
        <div class="absolute inset-0 bg-gray-200 image-placeholder"></div>
        <img
          src="{{imageUrl}}"
          alt="{{title}}"
          class="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 opacity-0"
          onload="this.style.opacity='1'; this.previousElementSibling.style.display='none';"
        />
        {{#if category}}
        <span class="absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-[#ea384c] text-white">
          {{category}}
        </span>
        {{/if}}
      </div>
      <div class="p-6">
        <h3 class="text-xl font-bold mb-3 text-[#33C3F0] transition-colors group-hover:text-[#ea384c]">
          {{title}}
        </h3>
        <p class="text-gray-600">{{description}}</p>
      </div>
    </div>
  `,
  props: ['title', 'description', 'imageUrl', 'category']
};

customElements.define('app-card', 
  class extends HTMLElement {
    constructor() {
      super();
      
      // Get attributes
      const title = this.getAttribute('title') || '';
      const description = this.getAttribute('description') || '';
      const imageUrl = this.getAttribute('imageUrl') || '';
      const category = this.getAttribute('category') || '';
      
      // Replace template placeholders
      let template = CardComponent.template
        .replace('{{title}}', title)
        .replace('{{title}}', title) // Twice for alt and heading
        .replace('{{description}}', description)
        .replace('{{imageUrl}}', imageUrl);
      
      // Handle conditional category
      if (category) {
        template = template
          .replace('{{#if category}}', '')
          .replace('{{/if}}', '')
          .replace('{{category}}', category);
      } else {
        template = template.replace(/{{#if category}}[\s\S]*?{{\/if}}/gm, '');
      }
      
      this.innerHTML = template;
    }
  }
);
