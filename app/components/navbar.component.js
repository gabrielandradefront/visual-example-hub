
// Importando os componentes necessários
import { ButtonComponent } from './button.component.js';

export const NavbarComponent = {
  selector: 'app-navbar',
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" id="main-header">
      <div class="layout flex items-center justify-between py-4">
        <a href="/" class="font-bold text-2xl transition-colors duration-200 text-[#33C3F0]">
          Geração<span class="text-[#ea384c]">200</span>
        </a>
        
        <nav class="hidden md:flex items-center space-x-8">
          <a href="/" class="relative py-1 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ea384c] after:transition-all after:duration-300 hover:text-[#ea384c] hover:after:w-full">
            Início
          </a>
          <a href="/sobre" class="relative py-1 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ea384c] after:transition-all after:duration-300 hover:text-[#ea384c] hover:after:w-full">
            Sobre Nós
          </a>
          <a href="/cursos" class="relative py-1 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ea384c] after:transition-all after:duration-300 hover:text-[#ea384c] hover:after:w-full">
            Cursos
          </a>
          <a href="/metodologia" class="relative py-1 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ea384c] after:transition-all after:duration-300 hover:text-[#ea384c] hover:after:w-full">
            Metodologia
          </a>
          <a href="/depoimentos" class="relative py-1 text-sm font-bold after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#ea384c] after:transition-all after:duration-300 hover:text-[#ea384c] hover:after:w-full">
            Depoimentos
          </a>
          <app-button variant="primary" size="sm" class="ml-4 rounded-full">
            Matricule-se
          </app-button>
        </nav>

        <button class="md:hidden flex items-center" id="mobile-menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div id="mobile-menu" class="md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden max-h-0">
        <div class="p-4 flex flex-col space-y-4">
          <a href="/" class="text-base font-medium py-2 border-b border-gray-100 hover:text-[#ea384c]">
            Início
          </a>
          <a href="/sobre" class="text-base font-medium py-2 border-b border-gray-100 hover:text-[#ea384c]">
            Sobre Nós
          </a>
          <a href="/cursos" class="text-base font-medium py-2 border-b border-gray-100 hover:text-[#ea384c]">
            Cursos
          </a>
          <a href="/metodologia" class="text-base font-medium py-2 border-b border-gray-100 hover:text-[#ea384c]">
            Metodologia
          </a>
          <a href="/depoimentos" class="text-base font-medium py-2 border-b border-gray-100 hover:text-[#ea384c]">
            Depoimentos
          </a>
          <app-button variant="primary" size="sm" class="w-full rounded-md">
            Matricule-se
          </app-button>
        </div>
      </div>
    </header>

    <script>
      document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        let mobileMenuOpen = false;
        
        if (mobileMenuButton && mobileMenu) {
          mobileMenuButton.addEventListener('click', () => {
            mobileMenuOpen = !mobileMenuOpen;
            mobileMenu.style.maxHeight = mobileMenuOpen ? '64rem' : '0';
          });
        }
        
        const checkScroll = () => {
          const header = document.getElementById('main-header');
          if (header) {
            if (window.scrollY > 50) {
              header.classList.add('bg-white', 'shadow-md');
              header.classList.remove('bg-transparent');
            } else {
              header.classList.add('bg-transparent');
              header.classList.remove('bg-white', 'shadow-md');
            }
          }
        };
        
        window.addEventListener('scroll', checkScroll);
        checkScroll();
      });
    </script>
  `
};

customElements.define('app-navbar', 
  class extends HTMLElement {
    constructor() {
      super();
      this.innerHTML = NavbarComponent.template;
      
      // Adiciona script após o elemento ser anexado ao DOM
      setTimeout(() => {
        const script = document.createElement('script');
        script.textContent = NavbarComponent.template.match(/<script>([\s\S]*)<\/script>/)[1];
        document.body.appendChild(script);
      }, 0);
    }
  }
);
