
export const ButtonComponent = {
  selector: 'app-button',
  template: `
    <button class="{{buttonClass}}" type="button">
      <slot></slot>
    </button>
  `,
  props: ['variant', 'size', 'class']
};

customElements.define('app-button', 
  class extends HTMLElement {
    constructor() {
      super();
      
      // Base styles
      const baseStyle = "inline-flex items-center justify-center rounded-md font-medium transition-all button-hover focus:outline-none focus:ring-2 focus:ring-offset-2";
      
      // Get attributes
      const variant = this.getAttribute('variant') || 'primary';
      const size = this.getAttribute('size') || 'md';
      const className = this.getAttribute('class') || '';
      
      // Variant styles
      const variants = {
        primary: "bg-[#33C3F0] text-white hover:bg-[#1EAEDB] focus:ring-[#33C3F0]",
        secondary: "bg-[#ea384c] text-white hover:bg-[#d13344] focus:ring-[#ea384c]",
        outline: "border-2 border-[#33C3F0] bg-transparent text-[#33C3F0] hover:bg-[#D3E4FD] focus:ring-[#33C3F0]",
        ghost: "bg-transparent text-[#33C3F0] hover:bg-[#D3E4FD] focus:ring-[#33C3F0]",
      };
      
      // Size styles
      const sizes = {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-3",
      };
      
      // Combine classes
      const buttonClass = `${baseStyle} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;
      
      // Replace template
      let template = ButtonComponent.template.replace('{{buttonClass}}', buttonClass);
      
      // Create shadow DOM
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
        <style>
          :host {
            display: inline-block;
          }
          button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        </style>
        ${template}
      `;
      
      // Add slot content
      const slot = document.createElement('slot');
      shadowRoot.querySelector('button').appendChild(slot);
    }
  }
);
