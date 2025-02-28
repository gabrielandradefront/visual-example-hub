
import { Component } from '@angular/core';

export const FeatureComponent = {
  selector: 'app-feature',
  standalone: true,
  template: `
    <div class="group p-6 rounded-xl border-2 border-[#33C3F0]/10 bg-white transition-all hover:shadow-lg hover:border-[#ea384c]">
      <div class="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D3E4FD] text-[#33C3F0] group-hover:bg-[#ea384c]/20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      </div>
      <h3 class="mb-3 text-xl font-bold text-[#33C3F0]">{{title}}</h3>
      <p class="text-gray-600 leading-relaxed">{{description}}</p>
    </div>
  `,
  props: ['title', 'description']
};

customElements.define('app-feature', 
  class extends HTMLElement {
    constructor() {
      super();
      
      // Get attributes
      const title = this.getAttribute('title') || '';
      const description = this.getAttribute('description') || '';
      
      // Replace template placeholders
      let template = FeatureComponent.template
        .replace('{{title}}', title)
        .replace('{{description}}', description);
      
      this.innerHTML = template;
    }
  }
);
